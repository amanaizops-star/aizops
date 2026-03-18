import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import BlogHero from "../Component/BlogHero";
import BlogCarousel from "../Component/BlogCarousel";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <BlogHero />
      <BlogCarousel />
      <Footer />
    </>
  );
};

export default Blogs;
