import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import image1 from "../public/assets/service-1.svg";
import image2 from "../public/assets/service-2.svg";
import image3 from "../public/assets/service-3.svg";
import image4 from "../public/assets/service-4.svg";
import serviceBanner from "../public/assets/service-banner.png";
import surf1 from "../public/assets/surface1.png";

const service = () => {
  return (
    <div className=" ">
      {/* HEADER  */}
      <div className="md:h-[170px] flex flex-col align-middle justify-between py-5 px-5 xl:px-36 servicePageNav relative">
        <Link
          href={"/"}
          className="absolute text-black top-1/2 -translate-y-1/2"
        >
          Back
        </Link>
        <div className="flex justify-center items-center">
          <div className="serviceCard  w-[120px] h-[120px] mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 text-black">
            <Image className="" src={image1} alt="" />
            <span className="text-center mt-2 font-semibold hidden md:block">
              General Service
            </span>
          </div>
          <div className="serviceCard w-[120px] h-[120px] mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 text-black">
            <Image className="" src={image3} alt="" />
            <span className="text-center mt-2 font-semibold hidden md:block">
              Engine Work
            </span>
          </div>
          <div className="serviceCard  w-[120px] h-[120px] mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 text-black">
            <Image className="" src={image4} alt="" />
            <span className="text-center mt-2 font-semibold hidden md:block">
              Body Work
            </span>
          </div>

          <div className="serviceCard  w-[120px] h-[120px] mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5 text-black">
            <Image className="" src={image2} alt="" />
            <span className="text-center mt-2 font-semibold hidden md:block">
              Repair Work
            </span>
          </div>
        </div>
      </div>
      <div className="lg:flex xl:py-8 px-5 xl:px-36">
        <Image className="w-[100%] h-[auto]" src={serviceBanner} alt="" />
      </div>

      <div className="text-black">
        <div className="w-[100%]">
            <div className="h-[300px] items-center flex w-[100%] my-[50px] gap-7">
              <div className="overflow-hidden rounded-r-3xl rounded-l-3xl">
                <Image
                  src="https://bikeadvice.in/wp-content/uploads/2020/07/Royal-Enfield-Service-on-Wheels-2-1280x720.jpeg"
                  alt="Royal Enfield Service on Wheels"
                  width={400}
                  height={720}
                />
              </div>

              <div className="servCard flex flex-col justify-between h-[320px]  w-[700px]">
                <div className=" h-[100%] px-12 py-5">
                  <div className="flex items-center justify-start gap-5 mb-5">
                    <Image className="w-[50px]" src={surf1} alt="" />{" "}
                    <h3 className="text-xl text-beta-900 font-semibold">
                      General Services
                    </h3>
                  </div>
                  <div className="border-red-50">
                    <ul className="flex-wrap list-disc">
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                    </ul>
                  </div>
                </div>
                <p className="px-7 py-1">
                  Any other additional problem with be reported post vehicle
                  inspection
                </p>
                <div className="servFooter h-[100px] flex justify-between items-center px-10">
                  <div className="text-sm text-blue-500  ">
                    Inspection Charge
                  </div>
                  <div className=" flex flex-col">
                    <button
                      className="rounded bg-gradient-to-br from-red-600 via-red-700 to-red-900 
                              shadow-md dark:shadow-none dark:bg-red-900 dark:from-red-500 dark:via-red-600 dark:to-red-800 dark:text-white py-1 px-4"
                    >
                      <span>₹</span>199
                    </button>
                    <span className="text-black text-sm mt-2">
                      Click to Add
                    </span>
                  </div>
                </div>
              </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default service;
