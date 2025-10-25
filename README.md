# SARS Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-v18-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0-orange)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v6-green)](https://reactrouter.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Challenges & Lessons Learned](#challenges--lessons-learned)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Overview
Welcome to **SARS Blog**! 🌟 This is a personal blog website built as a Single Page Application (SPA) using React. It's my digital space to share thoughts, projects, and motivational quotes—documenting my journey as a web developer and student at IIIT Bhagalpur.

Inspired by the need for a simple, customizable platform free from social media constraints, this blog features categorized posts on development projects, DSA visualizations, and original motivational quotes. It's designed for easy navigation, smooth scrolling, and a clean, modern UI. Whether you're here for tech tips, coding inspiration, or just a quick read, feel free to explore!

This project showcases my skills in React fundamentals, routing, state management (via props), and responsive design—perfect for a portfolio piece.

## Features
- **Dynamic Routing**: Navigate seamlessly between Home, Posts categories (Development, DSA, Quotes), and About using React Router.
- **Categorized Content**: Organized sections for tech projects, algorithms, and motivational quotes with card-based layouts.
- **Auto-Scroll to Top**: Smooth user experience on route changes.
- **Responsive Design**: Mobile-friendly with custom CSS for a polished look.
- **Dynamic Footer**: Auto-updates copyright year.
- **Extensible Structure**: Easy to add new posts or categories by updating component arrays.
- **SEO-Friendly**: Semantic HTML with sections and headings for better accessibility.
```
## Tech Stack
---

## 🎨 Frontend Tech Stack

| **Technology**                                                               | **Version** | **Purpose**                              | **Documentation**                                                          |
| ---------------------------------------------------------------------------- | ----------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| [React](https://react.dev/)                                                  | 18+         | Building interactive UI components       | [Docs](https://react.dev/learn)                                            |
| [React Router](https://reactrouter.com/)                                     | 6+          | Client-side routing for SPA navigation   | [Docs](https://reactrouter.com/en/main/start/overview)                     |
| [Vite](https://vitejs.dev/)                                                  | 5.0+        | Fast development server and bundler      | [Docs](https://vitejs.dev/guide/)                                          |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | ES6+        | Core logic and data handling             | [MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)                      | 3+          | Custom styling for layout and animations | [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)               |

---

## 🧰 Development Tools

| **Tool**                                  | **Purpose**                                            | **Documentation**                          |
| ----------------------------------------- | ------------------------------------------------------ | ------------------------------------------ |
| [ESLint](https://eslint.org/)             | Code linting and style consistency                     | [Docs](https://eslint.org/docs/latest/)    |
| [Git](https://git-scm.com/)               | Version control with GitHub integration                | [Docs](https://git-scm.com/doc)            |
| [VS Code](https://code.visualstudio.com/) | IDE for frontend development (with Prettier extension) | [Docs](https://code.visualstudio.com/docs) |



```

## Installation
1. **Clone the Repository**:
   ```
   git clone https://github.com/DevSars24/sars-blog.git  # Replace with your actual repo URL
   cd sars-blog
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```
   > This installs React, React Router, and other dev tools via Vite.

3. **Run the Development Server**:
   ```
   npm run dev
   ```
   > Opens at `http://localhost:5173` (or similar port). Hot reload enabled for instant updates!

4. **Build for Production**:
   ```
   npm run build
   ```
   > Outputs optimized files to `dist/` folder.

## Usage
1. Start the app with `npm run dev` and open `http://localhost:5173`.
2. **Navigate**:
   - **Home (/)**: Read the welcome intro.
   - **Posts (/posts)**: Choose categories like Development Based Projects, DSA Based Projects, or My Own Motivational Quotes.
   - **About (/about)**: Learn more about me!
3. **Explore Content**:
   - Click category links to view post cards.
   - Each post includes title, summary, and date—expandable for full articles in future updates.
4. **Customize**:
   - Edit post arrays in components (e.g., `DevelopmentPosts.js`) to add your own content.
   - Style tweaks in `App.css` or component-specific CSS.

Example: Adding a new DSA post—just push to the `posts` array in `DSAPosts.js`:
```js
{
  title: "🌐 Graph Traversal Viz",
  content: "Visualizing BFS and DFS with animations.",
  date: "October 25, 2025"
}
```

## Project Structure
```
sars-blog/
├── public/          # Static assets (e.g., favicon)
├── src/
│   ├── components/  # Reusable components
│   │   ├── Home.js
│   │   ├── Posts.js
│   │   ├── About.js
│   │   ├── DevelopmentPosts.js
│   │   ├── DSAPosts.js
│   │   └── QuotesPosts.js
│   ├── App.js       # Main app with routing
│   ├── App.css      # Global styles
│   ├── index.css    # Base styles
│   └── main.js      # Entry point
├── index.html       # Vite template
├── package.json     # Dependencies and scripts
├── vite.config.js   # Vite configuration
└── README.md        # This file!
```

## Challenges & Lessons Learned
- **Routing Setup**: Integrating React Router v6 was smooth, but ensuring `ScrollToTop` hooked into `useLocation` required careful `useEffect` dependency management to avoid infinite scrolls.
- **State Management**: Kept it simple with static arrays in components—learned props drilling isn't always needed for small apps, but Redux could scale for dynamic data.
- **Styling**: Custom CSS for cards and typing effects (in header) taught responsive breakpoints; Tailwind could be a future upgrade for faster iteration.
- **Content Scalability**: Hardcoded posts work for MVP, but integrating a CMS like Contentful would handle real-time updates.
- **Key Takeaway**: Start with Vite for blazing-fast dev—React SPAs feel snappier out of the box. Test on mobile early!

## Deployment
1. **Build the App**:
   ```
   npm run build
   ```

2. **Host It**:
   - **Vercel** (Recommended for React): Connect GitHub repo, auto-deploys on push. Free tier with custom domains.
     - [Vercel Guide](https://vercel.com/guides/deploying-react-with-vite)
   - **Netlify**: Drag `dist/` folder or link GitHub. Supports previews for PRs.
     - [Netlify Docs](https://docs.netlify.com/site-deploys/create-deploys/)
   - **GitHub Pages**: Add `vite.config.js` for base path, then deploy via `gh-pages` npm package.
     - Install: `npm i gh-pages --save-dev`
     - Script: `"deploy": "gh-pages -d dist"`

3. **Pro Tips**:
   - Set environment vars if adding API integrations (e.g., for dynamic posts).
   - Use a custom domain via your host's DNS settings.


## Contributing
Love the project? Help make it better! 🚀

1. Fork the repo and create a feature branch (`git checkout -b feature/new-post-category`).
2. Commit your changes (`git commit -m 'Add: New DSA visualization post'`).
3. Push to the branch (`git push origin feature/new-post-category`).
4. Open a Pull Request—describe your changes and why they rock!
5. Run `npm run lint` (if ESLint added) before submitting.

Ideas? Open an [Issue](https://github.com/DevSars24/sars-blog/issues) for features like search, dark mode, or backend integration.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details. Stars and feedback appreciated!

## License
This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

## Author
Built with ❤️ by [Saurabh Singh Rajput](https://github.com/DevSars24)  
- Portfolio: [sars24.netlify.app](https://sars24.netlify.app/)
- LinkedIn: [Saurabh Singh](https://www.linkedin.com/in/saurabh-singh-25639a306)
- X/Twitter: [@SaurabhSin15850](https://x.com/SaurabhSin15850)
- Email: saurabhsingh100605@gmail.com

Thanks for stopping by—let's connect and build something awesome! 💻
