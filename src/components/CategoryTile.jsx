import React, { useState, useEffect } from 'react';
import FullscreenImageViewer from './FullscreenImageViewer';

const CategoryTile = ({ title, count, imageSrc, altText }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const getImagesByCategory = (title) => {
    switch (title) {
      case 'E-commerce':
        return [
          'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ];
      case 'Social Media':
        return [
          'https://images.pexels.com/photos/3850250/pexels-photo-3850250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/533446/pexels-photo-533446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ];
      case 'Stock Video':
        return [
          'https://images.pexels.com/photos/2833666/pexels-photo-2833666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ];
      default:
        return [imageSrc];
    }
  };

  const images = getImagesByCategory(title);

  useEffect(() => {
    let interval;

    const startSlideshow = () => {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    };

    const stopSlideshow = () => {
      clearInterval(interval);
      setCurrentImageIndex(0);
    };

    const tileElement = document.getElementById(`category-tile-${title}`);
    tileElement?.addEventListener('mouseenter', startSlideshow);
    tileElement?.addEventListener('mouseleave', stopSlideshow);

    return () => {
      tileElement?.removeEventListener('mouseenter', startSlideshow);
      tileElement?.removeEventListener('mouseleave', stopSlideshow);
      clearInterval(interval);
    };
  }, [title, images.length]);

  const handleCloseGallery = (e) => {
    if (e.target === e.currentTarget) {
      setIsGalleryOpen(false);
    }
  };

  return (
    <>
      <div
        id={`category-tile-${title}`}
        className="bg-white border-2 rounded-4xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsGalleryOpen(true)}
      >
        <div className="flex flex-col h-full">
          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{count}</p>
          </div>
          <div className="flex-grow relative overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={altText}
              className="w-full h-60 object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleCloseGallery}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Close gallery"
            >
              <span className="text-xl font-medium text-gray-600">×</span>
            </button>
            <h3 className="text-2xl font-bold mb-6">{title} Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setFullscreenImage(img)}
                >
                  <img
                    src={img}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {fullscreenImage && (
        <FullscreenImageViewer
          imageUrl={fullscreenImage}
          altText={`${title} Fullscreen`}
          onClose={() => setFullscreenImage(null)}
        />
      )}
    </>
  );
};

export default CategoryTile;
