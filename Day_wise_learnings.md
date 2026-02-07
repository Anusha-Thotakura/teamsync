# TeamSync – Daily Learnings

## Day 1 – Project Setup & GitHub Integration

### What I did
- Created a React project using Vite
- Ran the local development server
- Initialized Git in the project
- Configured Git username and email
- Connected local project to GitHub
- Created first commit and pushed code

### What I learned
- How Vite simplifies React setup
- Difference between local and remote repositories
- Importance of committing before pushing
- Standard Git workflow (add → commit → push)

### Issues faced
- Push failing due to missing commit
- Git user identity not configured

### How I fixed them
- Configured Git global username and email
- Created the first commit successfully

---

## Day 2 – Project Structure & Home Page

### What I did
- Created scalable folder structure (pages, components, layouts, styles)
- Cleaned default React template
- Built Home page for TeamSync
- Connected Home page to App component

### What I learned
- Importance of clean project structure
- Page-based component organization
- How App.jsx controls rendering

### Outcome
- Clean base ready for routing and authentication

## Day 3 – Routing & Login Page

### What I did
- Installed `react-router-dom` for client-side routing
- Configured routing using `BrowserRouter`, `Routes`, and `Route`
- Created a Login page UI
- Connected Home and Login pages using URL-based routes

### What I learned
- How routing works in a Single Page Application (SPA)
- Difference between default route (`/`) and custom routes (`/login`)
- Importance of correct file paths and case-sensitive imports in React
- How React Router controls page navigation without page reloads

### Issues faced
- Login page not rendering initially
- Import errors due to file name case mismatch

### How I fixed them
- Ensured file names and import statements matched exactly
- Restarted the development server after fixing imports

### Outcome
- Multi-page navigation working successfully
- Home and Login pages accessible through routes

### Next plan
- Add a common Navbar/Header
- Add navigation links instead of manual URL typing