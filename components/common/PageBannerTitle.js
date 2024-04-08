import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const PageBannerTitle = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  mediaLink,
}) => {
  console.log("mediaLink", mediaLink);

  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    axios
      .get(mediaLink)
      .then((res) => {
        setMediaData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [mediaLink]);

  console.log("mediaData", mediaData);
  return (
    <>
      <div
        className="page-title-area"
        style={{ backgroundImage: `url(${mediaData?.source_url})` }}
      >
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              {/* <li>
                <Link href={subPageUrl} > {subPageText}</Link>
              </li> */}
              <li className="active">{activePageText}</li>
            </ul>
          </div>
        </div>

        {/* <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
      </div>
    </>
  );
};

export default PageBannerTitle;
