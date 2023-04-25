import React from "react";
import benifitImage2 from "../public/assets/benifit-2.svg";
import benifitImage3 from "../public/assets/benifit-3.svg";
import benifitImage4 from "../public/assets/benifit-4.svg";
import benifitImage5 from "../public/assets/benifit-5.svg";
import Image from "next/image";
const HeroBenefit = () => {
    return (
        <div className="serviceMobileSecGleass px-5 lg:px-36 py-[28px] align-top mt-10 lg:mt-48 text-black">
            <div className="flex flex-col lg:items-center lg:justify-between lg:px-28 lg:mb-10 relative ">

                <div className="text-center lg:mt-5 z-30 w-full ">
                    <p className="font-semibold text-2xl">Free Text Benefits</p>
                    <p className="font-medium text-xl"><span className="text-white">Rs.100</span> off services for first time</p>
                    <h2 className="font-semibold text-4xl text-beta-900">Get your bike serviced</h2>
                </div>
            </div>
            <div className="mt-10 lg:mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="benifitSectionCardGlass appServiceSecLeftCard pl-3 pr-2 lg:px-10 py-2 flex justify-around items-center min-h-20">
                        <Image className="mr-5" src={benifitImage3} alt="" />
                        <div className="w-full">
                            <p className="text-lg font-semibold text-beta-900">10 days Free Service Guarantee</p>
                            <p>10 days Unconditioned Warranty</p>
                        </div>
                    </div>
                    <div className="benifitSectionCardGlass appServiceSecLeftCard pl-3 pr-2 lg:px-10 py-2 flex justify-around items-center min-h-20">
                        <Image className="mr-5" src={benifitImage2} alt="" />
                        <div className="w-full">
                            <p className="text-lg font-semibold text-beta-900">Free Pickup & Drop service</p>
                            <p>Real time service</p>
                        </div>
                    </div>
                    <div className="benifitSectionCardGlass appServiceSecLeftCard pl-3 pr-2 lg:px-10 py-2 flex justify-around items-center min-h-20">
                        <Image className="mr-5" src={benifitImage4} alt="" />
                        <div className="w-full">
                            <p className="text-lg font-semibold text-beta-900">Transparent & Competitive Pricing</p>
                            <p>ave upto 40% on your bike service</p>
                        </div>
                    </div>
                    <div className="benifitSectionCardGlass appServiceSecLeftCard pl-3 pr-2 lg:px-10 py-2 flex justify-around items-center min-h-20">
                        <Image className="mr-5" src={benifitImage5} alt="" />
                        <div className="w-full">
                            <p className="text-lg font-semibold text-beta-900">Trained & Experts Mechanics</p>
                            <p>Only certified & mechanics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroBenefit