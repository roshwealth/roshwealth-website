## Upload This Project To GitHub

This environment cannot create the `.git` folder, so finish these steps in your own Terminal on your Mac.

### 1. Open Terminal and move into the project

```bash
cd "/Users/rohanshirke/Documents/website roshwealth"
```

### 2. Create a Git repository

```bash
git init -b main
git config user.name "Rohan Shirke"
git config user.email "roshwealth@gmail.com"
```

### 3. Save the project

```bash
git add .
git commit -m "Initial Roshwealth website"
```

### 4. Create an empty GitHub repository

Create a new repository on GitHub, for example:

- Repository name: `roshwealth-website`
- Keep it empty
- Do not add README, `.gitignore`, or license there

### 5. Connect and push

Replace `YOUR-USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR-USERNAME/roshwealth-website.git
git push -u origin main
```

### Notes

- The project already includes an updated `.gitignore`.
- `node_modules`, build folders, logs, and local env files are excluded.
- If GitHub asks for authentication, sign in with your GitHub account or use a Personal Access Token.
