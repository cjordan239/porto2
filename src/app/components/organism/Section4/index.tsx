import React from "react";
import CostumeImage from "@components/atoms/CostumeImage";
import Header from "@components/atoms/Header";
import SubHeader from "@components/atoms/SubHeader";
import pictureSection4 from "public/images/picture Section4.jpeg";
import MainButton from "@components/atoms/MainButton";

const Section4 = () => {
  return (
    <div className="flex justify-center items-center p-8 gap-4">
      <div className="p-4 max-w-xs">
      <CostumeImage
        src={pictureSection4}
        alt="foto section4" 
      />
      </div>

      <div className="p-4 max-w-md">
        <Header> The unseen of spending three years at Website </Header>
        <SubHeader>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          pariatur aut aliquam sequi nemo doloribus obcaecati veritatis dicta
          doloremque suscipit quasi repudiandae dolorem maiores incidunt rerum
          commodi, sit est vel.
        </SubHeader>
        <MainButton>Learn More</MainButton>
      </div>
    </div>
  );
};

export default Section4;
