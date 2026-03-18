

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import surgeryImg from "../assets/images/blog-surgery1.webp";
import cctvImg from "../assets/images/blogc.webp";
import healthcareImg from "../assets/images/doctor.webp";
import aiRobotImg from "../assets/images/bloh.webp";
import smartMonitoringImg from "../assets/images/biu.webp";
import ecommerceImg from "../assets/images/eco.webp";
import erpImg from "../assets/images/ss.webp";
import crmImg from "../assets/images/crm.webp";
import aiImg from "../assets/images/aid.webp";
import cyImg from "../assets/images/cyber.webp";
import diImg from "../assets/images/dd.webp";

const blogs = [
  {
    id: 1,
    title: "AI-Powered Surgery Innovations",
    slug: "ai-powered-surgery-innovations", 
    image: surgeryImg,
    category: "Healthcare",
    date: "2024-01-14", 
    modalContent: "AI-powered surgery is revolutionizing the medical field with precision robotics and real-time data analysis. Surgeons can now perform complex procedures with enhanced accuracy, reducing recovery time and improving patient outcomes. The integration of machine learning algorithms helps in predicting complications and suggesting optimal surgical paths.",
  },
  {
    id: 2,
    title: "CCTV Smart Monitoring with AI",
    slug: "cctv-smart-monitoring-with-ai", 
    image: cctvImg,
    category: "CCTV",
    date: "2024-01-13", 
    modalContent: "Smart CCTV systems equipped with AI analytics can detect unusual activities, recognize faces, and provide real-time alerts. These intelligent systems learn from patterns and can identify potential security threats before they escalate, making them essential for modern surveillance and public safety.",
  },
  {
    id: 3,
    title: "AI in Patient Care Systems",
    slug: "ai-in-patient-care-systems", 
    image: healthcareImg,
    category: "Healthcare",
    date: "2024-01-12", 
    modalContent: "AI-driven patient care systems are transforming healthcare delivery through personalized treatment plans and 24/7 monitoring. These systems can predict patient deterioration, manage medication schedules, and provide virtual assistance, ensuring better patient outcomes and reducing the burden on healthcare staff.",
  },
  {
    id: 4,
    title: "AI Robots for Surgery Assistance",
    slug: "ai-robots-for-surgery-assistance",
    image: aiRobotImg,
    category: "Surgery",
    date: "2024-01-11", 
    modalContent: "Surgical robots powered by AI are becoming indispensable in operating rooms worldwide. These robotic assistants provide steady hands, precise movements, and can access hard-to-reach areas. They work alongside surgeons to enhance capabilities and reduce human error during critical procedures.",
  },
  {
    id: 5,
    title: "Smart AI CCTV Analytics",
    slug: "smart-ai-cctv-analytics", 
    image: smartMonitoringImg,
    category: "CCTV",
    date: "2024-01-10", 
    modalContent: "Advanced AI CCTV analytics go beyond simple recording to provide actionable insights. From crowd management to traffic monitoring, these systems analyze behavior patterns, detect anomalies, and help in quick decision-making for security personnel and urban planners.",
  },
  {
    id: 6,
    title: "E-Commerce Solutions",
    slug: "e-commerce-solutions", 
    image: ecommerceImg,
    category: "E-Commerce Solutions",
    date: "2024-01-09", 
    modalContent: "Our expert e-commerce developers can create custom online stores with easy navigation and seamless payment integration to help you increase your sales and expand your business reach.",
  },
  {
    id: 7,
    title: "ERP Solutions",
    slug: "erp-solutions", 
    image: erpImg,
    category: "ERP Solutions",
    date: "2024-01-08", 
    modalContent: "Our ERP solutions help businesses automate their processes, improve efficiency, and reduce costs. Our experts can help you choose and implement the right ERP solution for your business.",
  },
  {
    id: 8,
    title: "CRM Solutions",
    slug: "crm-solutions", 
    image: crmImg,
    category: "CRM Solutions",
    date: "2024-01-07", 
    modalContent: "Our CRM solutions help businesses manage customer interactions and improve customer satisfaction. Our team can help you choose and implement the right CRM software for your business.",
  },
  {
    id: 9,
    title: "AI and Machine Learning Solutions",
    slug: "ai-and-machine-learning-solutions", 
    image: aiImg,
    category: "AI and Machine Learning Solutions",
    date: "2024-01-06", 
    modalContent: "We offer AI and machine learning solutions to help businesses automate their processes, improve efficiency, and gain valuable insights from their data. Our team can help you implement AI and machine learning technology to your business.",
  },
  {
    id: 10,
    title: "Cybersecurity Solutions",
    slug: "cybersecurity-solutions", 
    image: cyImg,
    category: "Cybersecurity Solutions",
    date: "2024-01-05", 
    modalContent: "Our cybersecurity solutions help businesses protect their sensitive data and prevent cyber threats. Our team of cybersecurity experts can help you choose and implement the right solution for your business.",
  },
  {
    id: 11,
    title: "Digital Marketing Services",
    slug: "digital-marketing-services", 
    image: diImg,
    category: "Digital Marketing Services",
    date: "2024-01-04", 
    modalContent: "Our digital marketing services help businesses increase their online visibility, attract more traffic, and generate more leads. We offer a range of digital marketing services, including SEO, PPC, and social media marketing.",
  },
];

const BlogCarousel = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, []);

  return (
    <section className="py-12 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Blogs
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          navigation={{
            enabled: true
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              navigation: false
            },
            480: {
              slidesPerView: 1,
              navigation: false
            },
            640: {
              slidesPerView: 1,
              navigation: false
            },
            768: {
              slidesPerView: 2,
              navigation: false
            },
            1024: {
              slidesPerView: 3,
              navigation: true
            }
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 flex flex-col">
                  <p className="text-indigo-500 text-sm mb-2">
                    {blog.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-3">
                    {blog.title}
                  </h3>
                  <button
                    onClick={() => openModal(blog)}
                    className="mt-auto bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isModalOpen && selectedBlog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 rounded-xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {selectedBlog.title}
              </h3>
              <p className="text-gray-300">
                {selectedBlog.modalContent}
              </p>
              <div className="mt-6 text-right">
                <button
                  onClick={closeModal}
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogCarousel;