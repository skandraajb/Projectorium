import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import demop1 from "../../images/demop1.jpg";
import demop2 from "../../images/demop2.jpg";
import demop3 from "../../images/demop3.jpg";
import demop4 from "../../images/demop4.jpg";
import './Projectzoom.css';

const Projectzoom = () => {
  const [selectedImage, setSelectedImage] = useState(demop1);

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
          <img
            className="thumbnail"
            src={demop1}
            alt="Thumbnail 1"
            onClick={() => setSelectedImage(demop1)}
          />
          <img
            className="thumbnail"
            src={demop2}
            alt="Thumbnail 2"
            onClick={() => setSelectedImage(demop2)}
          />
          <img
            className="thumbnail"
            src={demop3}
            alt="Thumbnail 3"
            onClick={() => setSelectedImage(demop3)}
          />
          <img
            className="thumbnail"
            src={demop4}
            alt="Thumbnail 4"
            onClick={() => setSelectedImage(demop4)}
          />
        </div>
      </div>
    </div>
  );
};

export default Projectzoom;
