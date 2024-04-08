import React, { useEffect, useState } from "react";
import Navbar from "/components/_App/Navbar";
import SubPageBannerTitle from "/components/common/SubPageBannerTitle";
import Footer from "/components/_App/Footer";
import HospitalityMainGallery from "../components/HospitalityGalleries/HospitalityMainGallery";
import { singleSlugData } from "../utils/function";

const HospitalityFabrics = () => {
  const [post, setPost] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    slugData();
    BannerImages();
    // hospital_gallery();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("hospitality-linen-gallery");
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

  // const hospital_gallery = async () => {
  //   try {
  //     const res = await gallery();
  //     const response = parseImageUrls(res);
  //     setHospitalGallery(response);
  //   } catch (error) {
  //     console.log("hospitalerror: ", error);
  //   }
  // };

  const BannerImages = async () => {
    try {
      const res = await singleSlugData("/gallery-bath-linen");
      if (res && res.length > 0) {
        setBanner(res[0]);
      } else {
        // Handle the case where the page with the given slug is not found
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  console.log("banner", banner);

  return (
    <>
      <Navbar />

      {post?._links?.["wp:featuredmedia"]?.map((mediaLink) => (
        <SubPageBannerTitle
          key={mediaLink?.href}
          mediaLink={mediaLink?.href}
          pageTitle="Hospitality Linen Gallery"
          homePageUrl="/"
          homePageText="Home"
          PageUrl="/products"
          PageText="Products"
          subPageUrl="/hospitality-fabrics"
          subPageText="Hospitality Linen"
          activePageText="Gallery"
          // imgClass="/images/products/hospitality/banner.jpg"
        />
      ))}

      <HospitalityMainGallery data={post} />

      <Footer />
    </>
  );
};

export default HospitalityFabrics;
