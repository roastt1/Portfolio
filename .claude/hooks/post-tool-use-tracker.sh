#!/bin/bash
set -e

# Post-tool-use hook that tracks edited files and their repos
# Runs after Edit, MultiEdit, or Write tools complete successfully

tool_info=$(cat)
tool_name=$(echo "$tool_info" | jq -r '.tool_name // empty')
file_path=$(echo "$tool_info" | jq -r '.tool_input.file_path // empty')
session_id=$(echo "$tool_info" | jq -r '.session_id // empty')

if [[ ! "$tool_name" =~ ^(Edit|MultiEdit|Write)$ ]] || [[ -z "$file_path" ]]; then
    exit 0
fi

if [[ "$file_path" =~ \.(md|markdown)$ ]]; then
    exit 0
fi

cache_dir="$CLAUDE_PROJECT_DIR/.claude/tsc-cache/${session_id:-default}"
mkdir -p "$cache_dir"

detect_repo() {
    local file="$1"
    local project_root="$CLAUDE_PROJECT_DIR"
    local relative_path="${file#$project_root/}"
    local repo=$(echo "$relative_path" | cut -d'/' -f1)

    case "$repo" in
        app|components|public|types|constants|styles)
            echo "$repo"
            ;;
        *)
            if [[ ! "$relative_path" =~ / ]]; then
                echo "root"
            else
                echo "unknown"
            fi
            ;;
    esac
}

get_build_command() {
    local repo="$1"
    local project_root="$CLAUDE_PROJECT_DIR"

    # For this single Next.js project, always use root package.json
    if [[ -f "$project_root/package.json" ]]; then
        if grep -q '"build"' "$project_root/package.json" 2>/dev/null; then
            echo "cd $project_root && npm run build"
        fi
    fi
}

get_tsc_command() {
    local project_root="$CLAUDE_PROJECT_DIR"

    if [[ -f "$project_root/tsconfig.json" ]]; then
        echo "cd $project_root && npx tsc --noEmit"
    fi
}

repo=$(detect_repo "$file_path")

if [[ "$repo" == "unknown" ]] || [[ -z "$repo" ]]; then
    exit 0
fi

echo "$(date +%s):$file_path:$repo" >> "$cache_dir/edited-files.log"

if ! grep -q "^root$" "$cache_dir/affected-repos.txt" 2>/dev/null; then
    echo "root" >> "$cache_dir/affected-repos.txt"
fi

tsc_cmd=$(get_tsc_command)
if [[ -n "$tsc_cmd" ]]; then
    echo "root:tsc:$tsc_cmd" >> "$cache_dir/commands.txt.tmp"
fi

if [[ -f "$cache_dir/commands.txt.tmp" ]]; then
    sort -u "$cache_dir/commands.txt.tmp" > "$cache_dir/commands.txt"
    rm -f "$cache_dir/commands.txt.tmp"
fi

exit 0
