<#
.\scripts\init-and-push.ps1 [-RemoteUrl <string>]

Initial helper to initialize a git repo and push the project to GitHub.

Usage (PowerShell):
  # If you have GitHub CLI (recommended):
  .\scripts\init-and-push.ps1

  # If you don't have GH CLI, provide remote URL:
  .\scripts\init-and-push.ps1 -RemoteUrl "https://github.com/youruser/yourrepo.git"

This script will:
- git init (if necessary)
- create initial commit if none exists
- create branch `main`
- attempt to create a GitHub repo via `gh` (if installed) and push, or use provided remote URL
#>

param(
    [string]$RemoteUrl
)

function Exec([string]$cmd) {
    Write-Host "> $cmd"
    $rc = & powershell -NoProfile -Command $cmd
    return $LASTEXITCODE
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "git is not installed or not on PATH. Please install git and re-run." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..."
    git init
}

# Add all files and create an initial commit if no commits exist
$hasCommit = (git rev-parse --verify HEAD -q) -ne $null
if (-not $hasCommit) {
    git add --all
    # Ignore non-zero exit if there are no files to commit yet
    git commit -m "Initial commit" 2>$null || Write-Host "No changes to commit or commit failed." -ForegroundColor Yellow
}

git branch -M main 2>$null

if ($RemoteUrl) {
    Write-Host "Adding remote origin: $RemoteUrl"
    git remote remove origin 2>$null
    git remote add origin $RemoteUrl
    git push -u origin main
    exit $LASTEXITCODE
}

if (Get-Command gh -ErrorAction SilentlyContinue) {
    Write-Host "GitHub CLI detected. Creating repo and pushing via gh..."
    # Create repo in current directory, public by default (change --public/--private if desired)
    gh repo create --source . --remote origin --push --confirm
    exit $LASTEXITCODE
}

Write-Host "No RemoteUrl provided and GitHub CLI (gh) not found." -ForegroundColor Yellow
Write-Host "Please create a repo on GitHub and run:"
Write-Host "  git remote add origin https://github.com/<owner>/<repo>.git"
Write-Host "  git push -u origin main"

exit 0
