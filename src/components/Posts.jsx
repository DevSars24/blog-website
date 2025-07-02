import React from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  return (
    <section id="posts" className="category-section">
      <h2 className="category-title">Blog Categories</h2>
      <div className="category-links">
        <Link to="/posts/development" className="category-link">Development Based Projects</Link>
        <Link to="/posts/dsa" className="category-link">DSA Based Projects</Link>
        <Link to="/posts/quotes" className="category-link">My Own Motivational Quotes</Link>
      </div>
    </section>
  );
}

export default Posts;