---
description: Smart sync workspace repo (commit/push/pull)
---

Perform intelligent synchronization for the workspace repository.

## Auto-Detection

Detect repository context automatically:

```bash
REPO_NAME=$(basename "$(git rev-parse --show-toplevel)")
BRANCH=$(git branch --show-current)
HAS_REMOTE=$(git remote -v 2>/dev/null | head -1)
```

## Sync Algorithm

Execute these steps in order:

### Step 1: Check Remote Configuration

```bash
git remote -v
```

- If no remote is configured, operate in **local-only mode** (skip fetch/push/pull)
- If a remote exists, proceed with full sync

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

Example: `save: updated src/, prisma/ | 2025-12-22 14:30`

### Step 3: Remote Sync (only if remote is configured)

```bash
git fetch origin $BRANCH

LOCAL_AHEAD=$(git rev-list origin/$BRANCH..HEAD --count)
REMOTE_AHEAD=$(git rev-list HEAD..origin/$BRANCH --count)
```

#### Execute Based on State

| Local Ahead | Remote Ahead | Action |
|-------------|--------------|--------|
| 0 | 0 | Already in sync - no action |
| >0 | 0 | Push: `git push origin $BRANCH` |
| 0 | >0 | Pull: `git pull origin $BRANCH --ff-only` |
| >0 | >0 | **CONFLICT** - Stop and notify user |

### Step 4: Record Status

Collect results for summary table.

## Conflict Handling

If the repository has diverged (both local and remote have unique commits):

1. **STOP** processing
2. Mark status as `CONFLICT`
3. Report conflict details with resolution instructions

## Error Handling

- **No remote configured**: Commit locally, mark as `Committed (local only)`
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
| $REPO_NAME | [status] | [action] | [files/commit] |

### Conflicts (if any)

**$REPO_NAME**: Local and remote have diverged.
- Local ahead by: [n] commits
- Remote ahead by: [n] commits
- Resolution: Run `git pull --rebase` or merge manually
```

## Status Values

| Status | Meaning |
|--------|---------|
| Pushed | Local changes committed and pushed to remote |
| Pulled | Remote changes merged to local (fast-forward) |
| Committed (local only) | Changes committed locally, no remote configured |
| Up to date | No changes in either direction |
| CONFLICT | Diverged history - manual intervention required |
| Error | Network, auth, or permission issue |

## Mode

This command runs in **silent/auto mode**:
- No confirmation prompts
- Processes the workspace repository automatically
- Reports only the final summary
