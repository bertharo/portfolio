import React from 'react';
import styles from './Blog.module.css';

const posts = [
  {
    id: 1,
    title: 'Welcome to My Blog',
    date: '2024-06-01',
    excerpt: 'This is the first post on my new portfolio blog! Stay tuned for updates and insights.'
  },
  {
    id: 2,
    title: 'React Tips and Tricks',
    date: '2024-06-05',
    excerpt: 'Here are some useful tips and tricks for working with React in your projects.'
  }
];

const Blog = () => (
  <section className={styles.blogSection} id="blog">
    <h2 className={styles.blogTitle}>Blog</h2>
    <div className={styles.posts}>
      {posts.map(post => (
        <article key={post.id} className={styles.post}>
          <h3 className={styles.postTitle}>{post.title}</h3>
          <p className={styles.postDate}>{post.date}</p>
          <p className={styles.postExcerpt}>{post.excerpt}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Blog; 