import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { Button, Modal } from "antd";
import FsLightbox from "fslightbox-react";

const AboutContent = ({ data }) => {
  // console.log("✌️data --->", data?.content?.rendered);

  // const findVideoElements = (htmlContent) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(htmlContent, "text/html");
  //   return doc.querySelectorAll("video");
  // };

  // const [videoUrl, setVideoUrl] = useState("");

  // useEffect(() => {
  //   const videoURLs = Array.from(
  //     findVideoElements(data?.content?.rendered)
  //   ).map((video) => video.src);
  //   console.log("✌️videoURLs --->", videoURLs);

  //   if (videoURLs.length > 0) {
  //     setVideoUrl(videoURLs[0]); // Assuming you only have one video URL
  //   }
  //   findAndHandleSvgElements();
  // }, [data]); // Run once when component mounts

  // console.log("videoUrl: ", videoUrl);

  // const findAndHandleSvgElements = () => {
  //   const container = document.querySelector(".elementor-custom-embed-play");
  //   if (!container) return; // Ensure container exists

  //   const svgElements = container.querySelectorAll("svg");
  //   svgElements.forEach((element) => {
  //     element.addEventListener("click", handleSvgClick);
  //   });
  // };

  // const handleSvgClick = (event) => {
  //   const videoURLs = Array.from(
  //     findVideoElements(data?.content?.rendered)
  //   ).map((video) => video.src);
  //   if (videoURLs.length > 0) {
  //     const videoUrl = videoURLs[0]; // Assuming you only have one video URL
  //     window.open(videoUrl, "_blank"); // Open video URL in a new tab
  //   }
  // };

  return (
   
      <div className="container-fluid">
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
          ></div>
        </div>
      </div>
   
  );
};

export default AboutContent;
