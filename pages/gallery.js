import React, { useEffect, useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
// import MainContent from "../components/about/MainContent";
import Footer from "../components/_App/Footer";
// import Awards from "../components/about/Awards";
// import Management from "../components/about/Management";
// import Milestones from "../components/about/Milestones";
import { gallerySlugData, singleSlugData } from "../utils/function";
import GalleryComponent from "../components/Gallery/galleryComponent";


const AboutPage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await gallerySlugData("gallery-test");
      setPost(res);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Gallery"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Gallery"
        imgClass="/images/about/banner.jpg"
      />
      {/* <MainContent  /> */}
      {post?.map((data) => (
        <>
          <div className="container-fluid p-4">
            <h1>{data?.name}</h1>

            {/* <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
              {data?.images?.map((url, index) => (
                <img
                  // key={index}
                  src={url.src}
                  // alt={`Image ${index}`}
                  // onClick={() => openLightbox(index)}
                  style={{
                    cursor: "pointer",
                    maxWidth: data?.length > 3 ? "25%" : "33%",
                    // height: "auto",
                  }}
                />
              ))}
            </SlideshowLightbox> */}
            <GalleryComponent data={data?.images} />
          </div>
        </>
      ))}

      {/* <Awards /> */}

      {/* <Management /> */}

      {/* <Milestones /> */}

      <Footer />
    </>
  );
};

export default AboutPage;