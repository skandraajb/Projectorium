// src/components/Projectzoom/Projectzoom.js
import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './Projectzoom.css';

const Projectzoom = ({ images }) => {
  // Default to the first image's URL or a placeholder if images is empty
  const [selectedImage, setSelectedImage] = useState(
    images && images.length > 0 ? images[0].url : 'https://via.placeholder.com/300?text=No+Image'
  );

 
  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0].url);
    } else {
      setSelectedImage('https://via.placeholder.com/300?text=No+Image');
    }
  }, [images]);

  return (
    <div className="details-sidebar">
      <div>
        {/* Main Image */}
        <div className="thumbnail-major">
          <InnerImageZoom
            src={selectedImage}
            alt="Project Image"
            hideHint={true}
            zoomType="hover"
            zoomScale={2}
            className="thumbnail-major-image"
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="thumbnail-gallery">
          {images && images.length > 0 ? (
            images.map((image, index) => (
              <img
                key={index}
                className="thumbnail"
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(image.url)}
              />
            ))
          ) : (
            <p>No images available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projectzoom;