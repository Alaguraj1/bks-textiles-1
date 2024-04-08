import React, { useState, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import OverView from "../components/why-bks/OverView";
import { singleSlugData } from "../utils/function";

const AboutPage = () => {
  const [post, setPost] = useState(null);
  console.log("post: ", post);

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("why-bks");
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
          pageTitle="Why BKS Services"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Why BKS Services"
          imgClass="/images/Why-bks/Banner.jpg"
        />
      ))}

      <OverView data={post} />

      <Footer />
    </>
  );
};

export default AboutPage;
