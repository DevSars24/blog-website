import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Posts from './components/Posts';
import About from './components/About';
import DevelopmentPosts from './components/DevelopmentPosts';
import DSAPosts from './components/DSAposts';
import QuotesPosts from './components/QuotesPosts';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header>
          <h1>
            <span className="typing">Welcome to SARS Blog</span>
          </h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/development" element={<DevelopmentPosts />} />
          <Route path="/posts/dsa" element={<DSAPosts />} />
          <Route path="/posts/quotes" element={<QuotesPosts />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer>
          <p>© {currentYear} Saurabh's Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;