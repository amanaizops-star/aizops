

import React, { useState } from 'react';

const videoData = [
  {
    id: 1,
    title: "AI-Powered CCTV for Dairy Farm Security",
    channel: "AIZOPS Tech",
    views: "2.6K views",
    timestamp: "3 months ago",
    youtubeId: "WZg981igOAo",
    duration: "4:15",
    description: "Discover how AIZOPS AI-powered CCTV surveillance is transforming dairy farm security and operations "


  },
  {
    id: 2,
    title: "Coming Soon : AI in Healthcare",
    channel: "AIZOPS Media",
    views: "10K views",
    timestamp: "3 months ago",
    youtubeId: "udAAt6sNB1w",
    duration: "1:32",
    description: "AI meets Healthcare. Rare diseases, robotic surgery, smarter diagnostics — all in one magazine"
  },
  {
    id: 3,
    title: "Seamless Check-In with Face Recognition",
    channel: "AIZOPS Official",
    views: "1.7K views",
    timestamp: "3 months ago",
    youtubeId: "8mMJysSwM30",
    duration: "3:45",
    description: "Our AI Facial Recognition Attendance System makes check-ins seamless, eliminates errors, and improves workplace security with instant alerts for unknown visitors."
  },
];

const VideoCard = ({ video, onVideoClick }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div 
      className="card h-100 shadow-sm hover-shadow transition-all cursor-pointer" 
      onClick={() => onVideoClick(video)}
    >
      <div className="position-relative" style={{ paddingTop: '56.25%' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img 
            src={thumbnailUrl}
            className="w-100 h-100"
            alt={video.title}
            loading="lazy"
            style={{ objectFit: 'cover' }}
          />
          <span className="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white px-2 py-1 m-2 rounded small">
            {video.duration}
          </span>
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0)',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
              const playButton = e.currentTarget.querySelector('.play-button');
              if (playButton) playButton.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)';
              const playButton = e.currentTarget.querySelector('.play-button');
              if (playButton) playButton.style.opacity = '0';
            }}
          >
            <div 
              className="display-4 text-white play-button"
              style={{ 
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
              }}
            >
              ▶
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 
          className="card-title text-dark fw-semibold mb-1 hover-text-primary" 
          style={{ 
            fontSize: '1rem', 
            minHeight: '2.4rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {video.title}
        </h5>
        <p className="card-text text-secondary small mb-1">{video.channel}</p>
        <p 
          className="card-text text-secondary small mb-2" 
          style={{ 
            fontSize: '0.85rem', 
            minHeight: '2.5rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {video.description}
        </p>
        <div className="d-flex align-items-center text-muted small">
          <span>{video.views}</span>
          <span className="mx-1">•</span>
          <span>{video.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

const VideoPopup = ({ video, isOpen, onClose }) => {
  if (!isOpen || !video) return null;

  return (
    <div 
      className="fixed mt-5 inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 truncate pr-4">
            {video.title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 bg-black">
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="p-4 bg-gray-50">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span className="font-medium text-gray-800">{video.channel}</span>
            <span className="mx-2">•</span>
            <span>{video.views}</span>
            <span className="mx-2">•</span>
            <span>{video.timestamp}</span>
          </div>
          <p className="text-gray-700 text-sm">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="bg-light  py-5">
      <div className="container">
        <h1 className="text-center font-weight-bold mb-5 text-black">Artificial Intelligence Zeal Operations and Security</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="row g-4 justify-content-center">
              {videoData.map((video) => (
                <div key={video.id} className="col-12 col-sm-6 col-lg-4">
                  <VideoCard video={video} onVideoClick={handleVideoClick} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <VideoPopup 
        video={selectedVideo}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
      <style>
        {`
          .hover-shadow {
            transition: all 0.3s ease;
          }
          .hover-shadow:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          }
          .hover-text-primary:hover {
            color: #0d6efd !important;
          }
          .cursor-pointer {
            cursor: pointer;
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default VideoGallery;