import React from "react";
import heroBlog from "../assets/images/wer.webp";

const BlogHero = () => {
  return (
    <section
      aria-label="Blogs Hero Section"
      className="relative bg-cover bg-center py-24 text-white"
      style={{ backgroundImage: `url(${heroBlog})` }}
    >
      <div className="absolute inset-0 bg-gray-950/75"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-indigo-500">AI & Healthcare</span> Blogs
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Explore the latest in AI-powered healthcare, CCTV monitoring, and surgical innovations.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;




