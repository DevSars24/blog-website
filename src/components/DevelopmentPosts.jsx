import React from 'react';

function DevelopmentPosts() {
  const posts = [
    {
      title: "🚀 My First React App",
      content: "Built a blog website using React and Vite, learning SPA and routing!",
      date: "June 28, 2025"
    },
    {
      title: "💻 E-Commerce Prototype",
      content: "Created a mock e-commerce site with cart functionality.",
      date: "June 27, 2025"
    }
  ];

  return (
    <section id="development-posts" className="category-section">
      <h2 className="category-title">Development Based Projects</h2>
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

export default DevelopmentPosts;