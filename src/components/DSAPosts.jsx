import React from 'react';

function DSAPosts() {
  const posts = [
    {
      title: "🧮 Sorting Visualizer",
      content: "Built a visualizer for Bubble Sort and Quick Sort using JavaScript.",
      date: "June 26, 2025"
    }
  ];

  return (
    <section id="dsa-posts" className="category-section">
      <h2 className="category-title">DSA Based Projects</h2>
      <div className="posts-container">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <small>Posted on {post.date}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DSAPosts;