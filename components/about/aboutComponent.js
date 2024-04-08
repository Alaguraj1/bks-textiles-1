import React, { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";

export default function AboutComponent({ data }) {
  // const [toggler, setToggler] = useState(false);

  console.log("✌️data --->", data?.content?.rendered);

  const findVideoElements = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    return doc.querySelectorAll("video");
  };

  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const videoURLs = Array.from(
      findVideoElements(data?.content?.rendered)
    ).map((video) => video.src);
    console.log("✌️videoURLs --->", videoURLs);

    if (videoURLs.length > 0) {
      setVideoUrl(videoURLs[0]); // Assuming you only have one video URL
    }
    findAndHandleSvgElements();
  }, [data]); // Run once when component mounts

  console.log("videoUrl: ", videoUrl);

  const findAndHandleSvgElements = () => {
    const container = document.querySelector(".elementor-custom-embed-play");
    if (!container) return; // Ensure container exists

    const svgElements = container.querySelectorAll("svg");
    svgElements.forEach((element) => {
      element.addEventListener("click", handleSvgClick);
    });
  };

  const handleSvgClick = (event) => {
    const videoURLs = Array.from(
      findVideoElements(data?.content?.rendered)
    ).map((video) => video.src);
    if (videoURLs.length > 0) {
      const videoUrl = videoURLs[0]; // Assuming you only have one video URL
      window.open(videoUrl, "_blank"); // Open video URL in a new tab
    }
  };

  console.log("data: ", data);
  return (
    <>
      {/* <FsLightbox toggler={toggler} sources={["/images/bks-video.mp4"]} /> */}

      {/* <div className="about-area" style={{ padding: "50px 0px" }}>
        <div className="container">
          <div className="row align-items-center  flex-column-reverse flex-lg-row">
            <div className="col-lg-6 col-md-12 sustainability">
              <div className="about-content p-0">
                <h2>About Us</h2>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Propelled by sustainable textile innovation, we are one-stop
                  solution for a premium range of exclusive and creative textile
                  solutions
                </p>
                <p style={{ fontSize: "16px" }}>
                  Since its inception in 1983, BKS Textiles has come a long way
                  from producing fabrics to a vertically integrated facility
                  from yarn dyeing and weaving to finishing, we pride ourselves
                  on offering a wide range of premium quality products to our
                  customers. Our range of workwear apparel is perfect for
                  corporate uniforms and industrial wears, while our Hospitality
                  Linen provide a touch of elegance to the hospitality sector.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="webinar-video-image">
                <img src="/images/about/aboutUs.jpg" alt="image" />

                <div className="video-btn" onClick={() => setToggler(!toggler)}>
                  <i className="flaticon-play-button"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
        {/* <div className="container">
          <h1>{data?.title?.rendered}</h1>
        </div> */}
        <div
          dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
        ></div>
      </div>
    </>
  );
}

