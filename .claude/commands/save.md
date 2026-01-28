---
description: Smart sync workspace repo (commit/push/pull)
---

Perform intelligent bidirectional synchronization for the workspace repository.

## Repository

| Name | Path | Remote |
|------|------|--------|
| mil&dez Website | `.` (root) | origin/main |

## Sync Algorithm

Execute these steps in order:

### Step 1: Fetch Remote State

```bash
git fetch origin main
```

### Step 2: Check for Uncommitted Local Changes

```bash
git status --porcelain
```

If files are returned, stage and commit with auto-descriptive message:

```bash
git add -A
git commit -m "save: updated [dirs/files] | YYYY-MM-DD HH:MM"
```

**Commit message generation:**
- Extract top-level directories/files from changed paths
- Deduplicate and join with commas
- Append current timestamp

Example: `save: updated components/, app/ | 2025-12-22 14:30`

### Step 3: Analyze Divergence

```bash
# Count commits local has that remote doesn't
LOCAL_AHEAD=$(git rev-list origin/main..HEAD --count)

# Count commits remote has that local doesn't
REMOTE_AHEAD=$(git rev-list HEAD..origin/main --count)
```

### Step 4: Execute Based on State

| Local Ahead | Remote Ahead | Action |
|-------------|--------------|--------|
| 0 | 0 | Already in sync - no action |
| >0 | 0 | Push: `git push origin main` |
| 0 | >0 | Pull: `git pull origin main --ff-only` |
| >0 | >0 | **CONFLICT** - Stop and notify user |

### Step 5: Record Status

Collect results for summary table.

## Conflict Handling

If the repository has diverged (both local and remote have unique commits):

1. **STOP** processing
2. Mark status as `CONFLICT`
3. Report conflict details with resolution instructions

## Error Handling

- **Network timeout**: Mark as `Error: Network unavailable`
- **Authentication failure**: Mark as `Error: Auth failed`
- **Protected branch rejection**: Mark as `Error: Push rejected`
- Report error and stop

## Output Format

```markdown
## Workspace Save

Timestamp: [YYYY-MM-DD HH:MM]

### Sync Summary

| Repository | Status | Action | Details |
|------------|--------|--------|---------|
| mil&dez Website | [status] | [action] | [files/commit] |

### Conflicts (if any)

**[Repository]**: Local and remote have diverged.
- Local ahead by: [n] commits
- Remote ahead by: [n] commits
- Resolution: Run `git pull --rebase` or merge manually
```

## Status Values

| Status | Meaning |
|--------|---------|
| Pushed | Local changes committed and pushed to remote |
| Pulled | Remote changes merged to local (fast-forward) |
| Up to date | No changes in either direction |
| CONFLICT | Diverged history - manual intervention required |
| Error | Network, auth, or permission issue |

## Mode

This command runs in **silent/auto mode**:
- No confirmation prompts
- Processes the workspace repository automatically
- Reports only the final summary
