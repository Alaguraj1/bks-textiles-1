
import React, { useState } from "react";

const HospitalityMainGallery = ({ data }) => {
 
  return (
    <>
      <div className="container-fluid">
        <div
          dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
        ></div>
      </div>
      
    </>
  );
};

export default HospitalityMainGallery;