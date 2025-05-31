import React from 'react';

const FullscreenImageViewer = ({ imageUrl, altText, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt={altText}
        className="max-w-full max-h-full rounded-lg shadow-2xl"
      />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-full"
        aria-label="Close fullscreen viewer"
      >
        ×
      </button>
    </div>
  );
};

export default FullscreenImageViewer;
