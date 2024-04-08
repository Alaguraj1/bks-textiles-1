import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Banner = ({data}) => {
console.log('✌️datass --->', data?.content?.rendered);


if (data?.length === 0) {
  return <div>Loading...</div>;
}

const htmlContent = data?.content?.rendered || "";
const images =
  htmlContent.match(/src="(.*?)"/g)?.map((match) => {
    return match.match(/src="(.+?)"/)?.[1];
  }) || [];

// Extract content of all <h4> tags into an array
const h1Matches = [...htmlContent.matchAll(/<h1[^>]*>(.*?)<\/h1>/g)];
const h1Contents = h1Matches.map(match => match[1]);

// Extract content of all <p> tags into an array
const pMatches = [...htmlContent.matchAll(/<p[^>]*>(.*?)<\/p>/g)];
const pContents = pMatches.map(match => match[1]);

console.log('h1Contents:', h1Contents);
console.log('pContents:', pContents);


  

console.log("images", images)

  return (
    <>
   <div style={{ position: "relative" }}>
      <Swiper
  slidesPerView={1}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: true,
  }}
  modules={[Autoplay, Pagination]}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
>
  {images.map((image, index) => (
    <SwiperSlide key={index}>
      <div
        className="main-banner"
        style={{ backgroundImage: `url(${image})` }} 
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                {/* Ensure there is content for the current image */}
                {h1Contents[index] && (
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1200"
                  >
                    {h1Contents[index]}
                  </h1>
                )}
                {/* Ensure there is content for the current image */}
                {pContents[index] && (
                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1200"
                    style={{ fontSize: "16px" }}
                  >
                    {pContents[index]}
                  </p>
                )}
                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  {/* Button components or links */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}

       

       

          {/* <SwiperSlide>
            <div
              className="main-banner"
              style={{ backgroundImage: `url(/images/home/Banner-2.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        Pioneers in fabric production
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                        style={{fontSize:"16px"}}

                      >
                       Delivering exquisite fabrics through cutting-edge manufacturing practices
                      </p>

                      <div
                        className="btn-box"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                      >
                       
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div
              className="main-banner"
              style={{ backgroundImage: `url(/images/home/Banner-3.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        Sustainable fashion
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                        style={{fontSize:"16px"}}

                      >
                        Innovative fabric blends and finishes to meet evolving fashion trends
                      </p>

                      <div
                        className="btn-box"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                      >
                    

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}


          {/* <SwiperSlide>
            <div
              className="main-banner"
              style={{ backgroundImage: `url(/images/home/Banner-4.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        Embracing excellence
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                        style={{fontSize:"16px"}}
                      >
                        Upholding a tradition of unparalleled commitment to meeting industry demands
                      </p>

                      <div
                        className="btn-box"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                      >
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}



          {/* <SwiperSlide>
            <div
              className="main-banner"
              style={{ backgroundImage: `url(/images/home/Banner-5.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        World’s Leading Machine Learning Company
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                      >
                        ML today are able to supply needful of help, information, and
                        positive experience of maintaining intimacy with customers.
                        Eventually, chatbot ideas bring a pleasant experience of all
                        these qualities into the conversation.
                      </p>

                      <div
                        className="btn-box"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                      >
                        <Link href="/contact" className="btn btn-primary">
                          Schedule a Demo
                        </Link>
                        <Link href="/contact" className="optional-btn">
                          Get Started Free
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}

          {/* Navigation arrows */}
          {/* <div className="swiper-button-next" style={{ backgroundColor: "white", padding: "27px 26px", color: "black", fontSize: "16px" }}></div>
          <div className="swiper-button-prev" style={{ backgroundColor: "white", padding: "27px 26px", color: "black", fontSize: "16px" }}></div> */}
        </Swiper>
      </div>

    </>
  );
};

export default Banner;
