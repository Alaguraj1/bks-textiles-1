import React, { useEffect, useState } from "react";
import Navbar from "../components/_App/Navbar";
import SubPageBannerTitle from "../components/common/SubPageBannerTitle";
// import MainContent from "../components/about/MainContent";
import Footer from "../components/_App/Footer";
// import Awards from "../components/about/Awards";
// import Management from "../components/about/Management";
// import Milestones from "../components/about/Milestones";
import { gallerySlugData, singleSlugData } from "../utils/function";
import GalleryComponent from "../components/Gallery/galleryComponent";

const AboutPage = () => {
  const [post, setPost] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    slugData();
    BannerImages();
  }, []);

  const slugData = async () => {
    try {
      const res = await gallerySlugData("promotional-bags-gallery");
      setPost(res);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  console.log("post: ", post);

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

      {banner?._links?.["wp:featuredmedia"]?.map((mediaLink) => (
        <SubPageBannerTitle
          key={mediaLink?.href}
          mediaLink={mediaLink?.href}
          pageTitle="Promotional Bags > Gallery"
          homePageUrl="/home"
          homePageText="Home"
          PageUrl="/products"
          PageText="Products"
          subPageText="Promotional Bags"
          subPageUrl="/promotional-bags"
          activePageText="Gallery "
          // imgClass="/images/products/promotional-bag/banner.jpg"
        />
      ))}

      {/* <MainContent  /> */}
      {post?.map((data) => (
        <>
          <div className="container-fluid p4-no-ptpb gallert-display pb-40">
            <h1>{data?.name}</h1>
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
