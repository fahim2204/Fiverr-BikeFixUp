import React from "react";
import Image from "next/image";
import image1 from "../public/assets/Ellipse 1.svg";
import image2 from "../public/assets/Ellipse 2.svg";
import image3 from "../public/assets/Ellipse 3.svg";
const HeroCustomer = () => {
    return (

        <div className="serviceMobileSecGleass px-5  pt-10  mt-20 text-black flex flex-col justify-between items-center relative mb-20">
            <h2 className="text-beta-900 text-2xl md:text-4xl font-semibold text-center mb-4">Customer Speaks</h2>
            <p className="text-sm md:text-lgtext-center mb-12">Free text customers says about us</p>
            <div className="mt-28 grid grid-cols-1 gap-16 md:gap-5  sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center testimonialGlass p-12 mb-12  relative" >
                    <div className="absolute w-[150px] h-[150px] overflow-hidden object-cover -top-24 mb-12 left-[50%] -translate-x-[50%]">
                        <Image  src={image1} alt="" />
                    </div>
                    <h3 className="text-beta-900 font-semibold text-xl my-4">Aadhila</h3>
                    <p className="text-sm font-light">Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.</p>
                </div>
                <div className="text-center testimonialGlass p-12 mb-12  relative" >
                    <div className="absolute w-[150px] h-[150px] overflow-hidden object-cover -top-24 left-[50%] -translate-x-[50%]">
                        <Image  src={image2} alt="" />
                    </div>
                    <h3 className="text-beta-900 font-semibold text-xl my-4">Chetana</h3>
                    <p className="text-sm font-light">Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.</p>
                </div>
                <div className="text-center testimonialGlass p-12 mb-12 relative" >
                    <div className="absolute w-[150px] h-[150px] overflow-hidden object-cover  -top-24 left-[50%] -translate-x-[50%]">
                        <Image  src={image3} alt="" />
                    </div>
                    <h3 className="text-beta-900 font-semibold text-xl my-4">Viraj Silva</h3>
                    <p className="text-sm font-light">Excellent experience with free text. It is just like Urban Clap for Bike Service and Repair. I had booked Honda Active service and the job was done in a very professional manner or just simply awesome.</p>
                </div>
            </div>
        </div>
    );
}
export default HeroCustomer