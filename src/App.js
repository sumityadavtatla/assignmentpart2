// App.js
import React, { useEffect, useState } from 'react';
import Post from './Post';
import image1 from './bloggima/electric.jpeg';
import image2 from './bloggima/sportscar.jpeg';

const initialPosts = [
  {
    id: 1,
    title: 'The Evolution of Electric Cars',
    date: '2024-05-24',
    author: 'Jane Doe',
    image: image1,
    body: `Electric cars have come a long way since their inception. From the early models that had limited range and power to the latest high-performance vehicles, the evolution has been remarkable. Today, electric cars are known for their efficiency, environmental benefits, and advanced technology. In this post, we'll take a journey through the history of electric cars and see how they have transformed the automotive industry.`,
  },
  {
    id: 2,
    title: 'Top 5 Sports Cars of 2024',
    date: '2024-05-23',
    author: 'John Smith',
    image: image2,
    body: `2024 has been an exciting year for sports car enthusiasts. With advancements in technology and design, manufacturers have introduced some truly stunning models. From the sleek Ferrari F8 Tributo to the powerful Porsche 911 Turbo S, this year's lineup offers something for every car lover. Join us as we count down the top 5 sports cars of 2024 and explore what makes each of them special.`,
  },
]

const finalPosts = [
 {
   id: 1,
   title: 'The Evolution of Cars',
   date: '2024-05-24',
   author: 'Sumit',
   image: image1,
   body: `Electric cars have come a long way since their inception. From the early models that had limited range and power to the latest high-performance vehicles, the evolution has been remarkable. Today, electric cars are known for their efficiency, environmental benefits, and advanced technology. In this post, we'll take a journey through the history of electric cars and see how they have transformed the automotive industry.`,
 },
 {
   id: 2,
   title: 'Top 5 Sports Cars of 2024',
   date: '2024-05-23',
   author: 'Sumit',
   image: image2,
   body: `2024 has been an exciting year for sports car enthusiasts. With advancements in technology and design, manufacturers have introduced some truly stunning models. From the sleek Ferrari F8 Tributo to the powerful Porsche 911 Turbo S, this year's lineup offers something for every car lover. Join us as we count down the top 5 sports cars of 2024 and explore what makes each of them special.`,
 },
]

function App() {
  
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
     setPosts(finalPosts);
  }, [])

  return (
    <div style={styles.app}>
      <header style={styles.topBar}>
        <div style={styles.logo}>All About Cars</div>
        <nav style={styles.navLinks}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </nav>
      </header>
      <main style={styles.blogPosts}>
        {posts.map(post => (
          <Post 
            key={post.id}
            title={post.title}
            date={post.date}
            author={post.author}
            image={post.image}
            body={post.body}
          />
        ))}
      </main>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
  },
  logo: {
    fontSize: '1.5em',
  },
  navLinks: {
    display: 'flex',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '15px',
  },
  blogPosts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default App;
