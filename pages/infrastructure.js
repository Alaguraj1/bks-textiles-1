import React, { useState, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import InfraMain from "../components/Infrastructure/infraMain";
import Footer from "../components/_App/Footer";
import { singleSlugData } from "../utils/function";

const Infrastructure = () => {
  const [post, setPost] = useState(null);
  console.log("post: ", post);

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("infrastructure");
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
          pageTitle="Infrastructure"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Infrastructure"
          imgClass="/images/infrastructure/Banner.jpg"
        />
      ))}
      
      <InfraMain data={post} />

      {/* <ShortYarnDeying />

            <WeavingPreparatory />

            <ShortWeaving />

            <Processing />

            <Printing />
            
            <Coating />

            <Seawing /> */}

      <Footer />
    </>
  );
};

export default Infrastructure;
