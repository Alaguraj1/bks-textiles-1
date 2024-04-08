import React, { useEffect, useState } from "react";
import Navbar from "../components/_App/Navbar";
import Banner from "../components/home/Banner";
import Featured from "../components/home/Featured";
import AboutContent from "../components/home/AboutContent";
import Services from "../components/home/Services";
import Webinar from "../components/home/Webinar";
import Partner from "../components/home/Partner";
import BlogPost from "../components/home/BlogPost";
import Footer from "../components/_App/Footer";
import { singleSlugData } from "../utils/function";

const IndexPage = () => {

  const [post, setPost] = useState(null);
  const [banner, setBanner] = useState(null);
  console.log("post: ", post);

  useEffect(() => {
    slugData();
    slugData2()
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("home-new");
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

console.log("banner", banner)


  const slugData2 = async () => {
    try {
      const res = await singleSlugData("/banner-slider/");
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



  return (
    <>
      <Navbar />

      <Banner  data={banner}/>

      <AboutContent  data={post} />

      {/* <Services />

      <BlogPost />

      <Webinar />

      <Partner /> */}

      <Footer />
    </>
  );
};

export default IndexPage;
