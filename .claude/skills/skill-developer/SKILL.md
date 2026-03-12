# Skill Developer - Meta Skill

## Purpose
Create and manage Claude Code skills for this project following Anthropic best practices.

## Quick Start

### 1. Create a skill file
```
.claude/skills/{skill-name}/SKILL.md
```

### 2. Add to skill-rules.json
```json
{
  "version": "1.0",
  "skills": {
    "your-skill-name": {
      "type": "domain",
      "enforcement": "suggest",
      "priority": "high",
      "promptTriggers": {
        "keywords": ["keyword1", "keyword2"],
        "intentPatterns": ["(create|add).*(thing)"]
      }
    }
  }
}
```

### 3. Test the trigger
Ask Claude something matching the keywords and check if the skill is suggested.

## Skill Types

| Type | enforcement | Use case |
|------|-------------|----------|
| `guardrail` | `block` | Prevent critical mistakes |
| `guardrail` | `suggest` | Strong recommendations |
| `domain` | `suggest` | Domain knowledge |
| `domain` | `warn` | Optional reminders |

## Priority Levels
- `critical` — shown first, marked REQUIRED
- `high` — Recommended
- `medium` — Suggested
- `low` — Optional

## 500-Line Rule
Keep SKILL.md under 500 lines. For larger topics, use:
```
skill-name/
  SKILL.md          (overview + links to resources)
  resources/
    topic-1.md
    topic-2.md
```

## Trigger Types

### Keywords (exact substring match)
```json
"keywords": ["component", "tailwind", "dark mode"]
```

### Intent Patterns (regex)
```json
"intentPatterns": ["(create|add|build).*(component|page)"]
```

### File Triggers (when specific files are edited)
```json
"fileTriggers": {
  "pathPatterns": ["app/**/*.tsx"]
}
```
