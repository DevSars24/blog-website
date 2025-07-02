import React from 'react';

function QuotesPosts() {
  const posts = [
    {
      title: "💪 Keep Coding, Keep Growing",
      content: "Every line of code is a step towards success!",
      date: "June 23, 2025"
    },
    {
      title: "🔥 Never Give Up",
      content: "Stay focused, bhai, success is near!",
      date: "June 30, 2025"
    }
  ];

  return (
    <section id="quotes-posts" className="category-section">
      <h2 className="category-title">My Own Motivational Quotes</h2>
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

export default QuotesPosts;