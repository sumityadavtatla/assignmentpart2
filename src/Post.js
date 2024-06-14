// Post.js
import React from 'react';

const Post = ({ title, date, author, image, body }) => {
  return (
    <article style={styles.post}>
      <h2 style={styles.postTitle}>{title}</h2>
      <p style={styles.postMeta}>Published on: {date} by {author}</p>
      <img src={image} alt={title} style={styles.postImage} />
      <p style={styles.postBody}>{body}</p>
      <hr />
    </article>
  );
};

const styles = {
  post: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  postTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  postMeta: {
    color: '#888',
    fontSize: '14px',
    marginBottom: '10px',
  },
  postImage: {
    width: '30%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  postBody: {
    fontSize: '16px',
    lineHeight: 1.6,
  },
};

export default Post;
