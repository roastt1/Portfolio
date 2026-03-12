# Update Development Documentation

Update the active development docs before context reset or session end.

## What to capture

### Current implementation status
For each active task in `dev/active/`:
- What has been implemented so far
- Key decisions made during this session
- Files modified (check git diff)
- Problems encountered and solutions

### Session context to preserve
- Complex problems solved
- Architecture decisions with reasoning
- Bugs found and fixed
- Integration points discovered
- Performance considerations

### In-progress work
- Where work was interrupted
- Partially completed features
- Next immediate steps
- Commands needed to resume: `npm run dev`, etc.

### Handoff notes
- Files currently being edited
- Goal of the changes
- Uncommitted changes (run `git status`)
- Verification: `npx tsc --noEmit`

## Priority
Focus on capturing information that **cannot be easily re-discovered** from reading the code.

## Update format
Edit the relevant `dev/active/{task-name}/` files:
1. Update `{task-name}-tasks.md` — check off completed items
2. Update `{task-name}-context.md` — add new decisions/discoveries
3. Add "Last updated" timestamp and current status summary
