import React, { useState, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBannerTitle from "../components/common/PageBannerTitle";
import QualityMain from "../components/Quality/QualityMain";
import { singleSlugData } from "../utils/function";

const QualityPractices = () => {
  const [post, setPost] = useState(null);
  console.log("post: ", post);

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("quality-practices");
      if (res && res.length > 0) {
        setPost(res[0]);
      } else {
        // Handle the case where the page with the given slug is not found
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  console.log("post", post);
  return (
    <>
      <Navbar />

      {post?._links?.["wp:featuredmedia"]?.map((mediaLink) => (
        <PageBannerTitle
          key={mediaLink?.href}
          mediaLink={mediaLink?.href}
          pageTitle="Quality Practices"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Quality Practices"
          imgClass="/images/qty/banner.jpg"
        />
      ))}

      <QualityMain data={post} />
      
      <Footer />
    </>
  );
};

export default QualityPractices;
