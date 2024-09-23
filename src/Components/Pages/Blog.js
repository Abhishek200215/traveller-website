import React from 'react';
import BannerComponent from '../Banner'; // Corrected path
import BlogBanner from '../../Components/Blog_banner.jpg'; // Add your blog page banner image here

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Top 10 Destinations for 2024",
      excerpt:
        "Discover the top travel destinations for the upcoming year. From tropical beaches to bustling cities, these locations offer something for every traveler.",
      date: "January 5, 2024",
      author: "John Doe",
    },
    {
      title: "A Guide to Solo Travel",
      excerpt:
        "Traveling solo can be a transformative experience. Learn how to make the most of your solo adventures with our expert tips and safety advice.",
      date: "February 10, 2024",
      author: "Jane Smith",
    },
    {
      title: "How to Travel on a Budget",
      excerpt:
        "Want to explore the world without breaking the bank? Check out our ultimate guide to budget-friendly travel and discover how to save on flights, accommodation, and more.",
      date: "March 15, 2024",
      author: "Travel Guru",
    },
    {
      title: "Top 10 Destinations for 2024",
      excerpt:
        "Discover the top travel destinations for the upcoming year. From tropical beaches to bustling cities, these locations offer something for every traveler.",
      date: "January 5, 2024",
      author: "John Doe",
    },
    {
      title: "A Guide to Solo Travel",
      excerpt:
        "Traveling solo can be a transformative experience. Learn how to make the most of your solo adventures with our expert tips and safety advice.",
      date: "February 10, 2024",
      author: "Jane Smith",
    },
    {
      title: "How to Travel on a Budget",
      excerpt:
        "Want to explore the world without breaking the bank? Check out our ultimate guide to budget-friendly travel and discover how to save on flights, accommodation, and more.",
      date: "March 15, 2024",
      author: "Travel Guru",
    },
    // Add more blog posts as needed
  ];

  return (
    <><a href='#blog' style={{textDecoration:"none"}}>
      <BannerComponent
        backgroundImage={BlogBanner}
        title="Travel Blog"
        subtitle="Get inspired for your next adventure"
        button="See Blog"
      /></a>
      <div id='blog' className="blog-content">
        <h2>Latest Blog Posts</h2>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-item">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <p><strong>Date:</strong> {post.date}</p>
              <p><strong>Author:</strong> {post.author}</p>
              <button className="read-more">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
