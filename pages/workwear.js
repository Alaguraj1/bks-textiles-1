import React, { useState, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import WorkwearMain from "../components/Workwear/WorkwearMain";
import { singleSlugData } from "../utils/function";

const Workwear = () => {
  const [post, setPost] = useState(null);
  console.log("post: ", post);

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("workwear");
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
          pageTitle="Workwear"
          homePageUrl="/products"
          homePageText="Product"
          activePageText="Workwear"
          imgClass="/images/products/workwear/banner.jpg"
        />
      ))}

      <WorkwearMain data={post} />

      <Footer />
    </>
  );
};

export default Workwear;
