import React from "react";
import Image from "next/image";
import bajajImage from "../public/assets/bajaj.png";
import heroImage from "../public/assets/heroHonda.png";
import hondaImage from "../public/assets/honda.png";
import jawaImage from "../public/assets/jawa.png";
import ktmImage from "../public/assets/ktm.png";
import mahindraImage from "../public/assets/mahindra.png";
import royalInfieldImage from "../public/assets/royalInfield.png";
import sujukiImage from "../public/assets/sujuki.png";
import tvsImage from "../public/assets/tvs.png";
import yamahaImage from "../public/assets/yamaha.png";
const AboutBrand = () => {
  return (
    <div className="aboutGlass py-8 px-6 lg:px-32 my-10">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-1 lg:px-32 pl-6">
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={bajajImage} alt="" />
        </div>
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={hondaImage} alt="" />
        </div>
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={heroImage} alt="" />
        </div>
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={yamahaImage} alt="" />
        </div>
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={mahindraImage} alt="" />
        </div>
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={royalInfieldImage} alt="" />
        </div>
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={jawaImage} alt="" />
        </div>
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={tvsImage} alt="" />
        </div>
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={ktmImage} alt="" />
        </div>
        <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]">
          <Image className="object-contain w-full h-full" src={sujukiImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutBrand;