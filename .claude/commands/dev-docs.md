Create a comprehensive, actionable plan for: $ARGUMENTS

## Instructions

Analyze the codebase and create structured development documentation:

1. **Understand the scope** - What is being planned/built?
2. **Review current state** - Check relevant files in the project
3. **Identify affected areas** - Which components, pages, or files will change?

## Generate these 3 files in `dev/active/{task-name}/`:

### `{task-name}-plan.md`
- Executive summary
- Current state analysis
- Proposed changes
- Implementation phases
- Risk assessment

### `{task-name}-context.md`
- Key architectural decisions
- Critical files and their roles
- Dependencies and constraints
- Patterns to follow (from `.claude/skills/nextjs-guidelines/SKILL.md`)

### `{task-name}-tasks.md`
Checklist format:
```markdown
## Phase 1: Setup
- [ ] Task 1
- [ ] Task 2

## Phase 2: Implementation
- [ ] Task 3
- [ ] Task 4

## Phase 3: Testing
- [ ] TypeScript check: npx tsc --noEmit
- [ ] Visual review
- [ ] Dark mode check
```

## Quality Standards
- Self-contained (readable without prior context)
- Clear action items with acceptance criteria
- Technical specifics (file paths, component names)
- Business context (why this matters)
