---
description: Smart sync workspace repo (commit/push/pull). Use when user says 'save', 'sync', 'push my changes', 'save my work', or 'commit and push'.
---

Perform intelligent bidirectional synchronization for the workspace repository.

## Repository

| Name | Path | Remote |
|------|------|--------|
| mil&dez Website | `.` (root) | origin |

## Sync Algorithm

Execute these steps in order:

### Step 1: Detect Current Branch

```bash
BRANCH=$(git branch --show-current)
```

Use the detected branch throughout. Do not hardcode `main`.

### Step 2: Fetch Remote State

```bash
git fetch origin "$BRANCH"
```

If the branch has no remote tracking yet, skip the fetch.

### Step 3: Check for Uncommitted Local Changes

```bash
git status --porcelain
```

If files are returned, stage and commit with auto-descriptive message:

```bash
git add -u
git add [new files that should be tracked]
git commit -m "save: updated [dirs/files] | YYYY-MM-DD HH:MM"
```

**Important:** Use `git add -u` for tracked files. For new files, review them individually — never blindly `git add -A`. Skip files matching these patterns:
- `.env*`, `*.local` (secrets/environment)
- `node_modules/`, `.next/`, `out/` (build artifacts)
- `*.log` (debug logs)

**Commit message generation:**
- Extract top-level directories/files from changed paths
- Deduplicate and join with commas
- Append current timestamp

Example: `save: updated components/, app/ | 2025-12-22 14:30`

### Step 4: Analyze Divergence

```bash
# Count commits local has that remote doesn't
LOCAL_AHEAD=$(git rev-list "origin/$BRANCH..HEAD" --count)

# Count commits remote has that local doesn't
REMOTE_AHEAD=$(git rev-list "HEAD..origin/$BRANCH" --count)
```

### Step 5: Execute Based on State

| Local Ahead | Remote Ahead | Action |
|-------------|--------------|--------|
| 0 | 0 | Already in sync - no action |
| >0 | 0 | Push: `git push -u origin $BRANCH` |
| 0 | >0 | Pull: `git pull origin $BRANCH --ff-only` |
| >0 | >0 | **CONFLICT** - Stop and notify user |

### Step 6: Record Status

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
Branch: [branch-name]

### Sync Summary

| Repository | Branch | Status | Action | Details |
|------------|--------|--------|--------|---------|
| mil&dez Website | [branch] | [status] | [action] | [files/commit] |

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
