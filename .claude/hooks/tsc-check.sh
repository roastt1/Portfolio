#!/bin/bash
# Stop hook: TypeScript type check for this Next.js project
# Runs after each Claude response

set -e

project_root="$CLAUDE_PROJECT_DIR"

if [[ ! -f "$project_root/tsconfig.json" ]]; then
    exit 0
fi

# Run TypeScript check
output=$(cd "$project_root" && npx tsc --noEmit 2>&1) || {
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >&2
    echo "⚠️  TypeScript errors detected:" >&2
    echo "$output" | head -20 >&2
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >&2
    exit 1
}

exit 0
