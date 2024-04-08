import React, { useEffect, useState } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const GalleryComponent = ({ data }) => {
console.log('✌️data-data --->', data);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
  };

  const imgArray = data.map((item) => item.src);

  return (
    <>
      <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
        {data?.map((url, index) => (
          <img
            src={url.src}
            className={` ${
              data?.length >= 3
                ? "deskdop-gallery-images"
                : "mobile-gallery-images"
            }`}
            style={{
              cursor: "pointer",
            }}
          />
        ))}
      </SlideshowLightbox>

      {/* <FsLightbox
        toggler={lightboxVisible}
        sources={imgArray}
        type="image"
        slide={lightboxIndex + 1}
        onClose={closeLightbox}
      
      /> */}
    </>
  );
};

export default GalleryComponent;
