import React from "react";
import Image from "next/image";
import offerImage from "../public/assets/offer.svg";
import image1 from "../public/assets/service-1.svg";
import image2 from "../public/assets/service-2.svg";
import image3 from "../public/assets/service-3.svg";
import image4 from "../public/assets/service-4.svg";
import CustomInput from "./CustomInput";
import Link from "next/link";
const HeroSection = () => {
  function handleDropdownChange(event) {
    setSelectedOption(event.target.value);
  }
  return (
    <div className="max-w-full">
      <div className="grid md:grid-cols-11 gap-8 px-5 xl:px-36">
        <div className="col-span-12 md:col-span-7">
          <div className="text-black">
            <h1 className="font-bold text-2xl lg:text-5xl">
              TWO WHEELER SERVICES MADE SMART
            </h1>
            <p className="text-sm md:pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuntLorem ipsum dolor sit amet
            </p>
          </div>
          <Image
            className="my-5 md:my-10"
            src={offerImage}
            alt="Offer image"
            width={1000}
            height={500}
          />
          {/* service box */}
          <div className="grid grid-cols-4 gap-4">
            <Link href={"/service"}>
              <div className="flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 bg-service-box h-full">
                <Image className="" src={image1} alt="" />
                <span className="text-black text-center mt-2 font-semibold hidden md:block">
                  General Service
                </span>
              </div>
            </Link>
            <Link href={"/service"}>
              <div className="flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 bg-service-box h-full">
                <Image className="" src={image2} alt="" />
                <span className="text-black text-center mt-2 font-semibold hidden md:block">
                  Engine Work
                </span>
              </div>
            </Link>
            <Link href={"/service"}>
              <div className="flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 bg-service-box h-full">
                <Image className="" src={image3} alt="" />
                <span className="text-black text-center mt-2 font-semibold hidden md:block">
                  Body Work
                </span>
              </div>
            </Link>
            <Link href={"/service"}>
              <div className="flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 bg-service-box h-full">
                <Image className="" src={image4} alt="" />
                <span className="text-black text-center mt-2 font-semibold hidden md:block">
                  Repair Work
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* form section */}
        <div className="col-span-4">
          <form className="heroFormGlassDiv flex flex-col space-y-3 px-5 py-2 md:px-8 md:py-3 text-black">
            <h2 className="text-beta-900 text-center font-bold text-3xl my-4">
              Book Bike Service
            </h2>
            <CustomInput
              component="input"
              name="name"
              placeholder="Your Name"
              extra_class="w-full px-6 py-2 formGlassInput"
              type="text"
            />
            <CustomInput
              component="input"
              name="phone"
              placeholder="Phone Number"
              extra_class="w-full px-6 py-2  formGlassInput"
              type="text"
            />
            <CustomInput
              component="input"
              name="email"
              placeholder="Email"
              extra_class="w-full px-6 py-2 formGlassInput"
              type="email"
            />
            <CustomInput
              component="input"
              name="address"
              placeholder="Address"
              extra_class="w-full px-6 py-2 formGlassInput"
              type="text"
            />
            <CustomInput
              component="input"
              name="city"
              placeholder="City"
              extra_class="w-full px-6 py-2 formGlassInput"
              type="text"
            />
            <div className="mx-auto pt-6 pb-3">
              <button className="newMorfPurple px-16 py-2 text-white">
                Book Now
              </button>
              <p className="text-center font-bold mt-4 text-sm">
                or Call +91 86 0788 0788
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
