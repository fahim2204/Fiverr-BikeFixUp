
import React from "react";
import { RiLoader4Line } from "react-icons/ri";
import membershipHeroImage from '../public/assets/membershipHero.svg';
import Image from "next/image";
const membership = () => {
    return (
        <div>
            <div className="lg:px-32 px-2 lg:py-7 py-2 text-black">
                <h1 className="lg:text-[50px] text-xl text-center font-semibold">
                    <span>
                        Bike<span className="text-alpha-700">Flxup</span>
                    </span>{" "}
                    Online Membership
                </h1>
                <div className="flex flex-col lg:flex-row my-10 justify-between ">
                    <Image className="w-[450px]" src={membershipHeroImage} alt="Online Membership" />
                    <div className="heroGlass py-5 px-10">
                        <h3 className="lg:text-3xl text-lg lg:mb-5 mb-3 text-beta-900 font-semibold">
                            Save Thousands Annually on <br /> Your Vehicle Servicing
                        </h3>
                        <p className="text-xs lg:text-base">
                            BikeFixup provides top-notch service and benefits to make your
                            vehicle maintenance more affordable, convenient & stress-free. With
                            our wide service network, we offer premium and smart maintenance,
                            discounts and special offers, priority roadside assistance and the
                            flexibility to choose service according to your convenience.
                            <br />
                            <br />
                            Become a member and avail 1st free service as well additional
                            benefits
                        </p>
                    </div>
                </div>
            </div>

            {/* plan */}

            <div className="px-10 py-5 text-black">
                <h2 className="lg:text-[50px] text-xl font-semibold text-center">
                    Choose your own plan
                </h2>
                <div className="w-full flex justify-center items-center lg:mt-24 mt-8">
                    <div class="flex lg:flex-row flex-col w-full lg:justify-between gap-16 lg:gap-0">
                        {/* plan card */}
                        <div className="palnGlass w-11/12 mx-5">
                            <div className="planCardHead px-3 py-10 text-center w-full">
                                <span className="inline-block relative font-medium">
                                    <span className="inline-block absolute top-[50%] bg-red-700 w-full h-[2px]"></span>
                                    800
                                </span>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <span className="text-[60px] text-beta-900 font-bold">
                                        <span>$</span>
                                        1899
                                    </span>
                                    <p className="text-right">For 06 Month</p>
                                </div>
                            </div>
                            <div className=" px-10 py-5 text-white">
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                            </div>
                            <div className="text-center font-semibold text-beta-900">Upto 125CC</div>
                            <div className="w-full flex justify-center items-center my-10">
                                <button className="newMorfPurple px-5 py-2 text-white" >
                                    <span className="flex gap-2 items-center justify-center">
                                        {/* <RiLoader4Line className="text-xl animate-spin" /> Buy Now */}
                                        Buy Now
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="palnGlass w-11/12 scale-110 mx-5">
                            <div className="planCardHead px-3 py-10 text-center w-full">
                                <span className="inline-block relative font-medium">
                                    <span className="inline-block absolute top-[50%] bg-red-700 w-full h-[2px]"></span>
                                    800
                                </span>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <span className="text-[60px] text-beta-900 font-bold">
                                        <span>$</span>
                                        1899
                                    </span>
                                    <p className="text-right">For 12 Month</p>
                                </div>
                            </div>
                            <div className=" px-10 py-5 text-white">
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                            </div>
                            <div className="text-center font-semibold text-beta-900">CC No Bar</div>
                            <div className="w-full flex justify-center items-center my-10">
                                <button className="newMorfPurple  px-5 py-2 text-white" >
                                    <span className="flex gap-2 items-center justify-center">
                                        {/* <RiLoader4Line className="text-xl animate-spin" /> Buy Now */}
                                        Buy Now
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="palnGlass w-11/12 mx-5">
                            <div className="planCardHead px-3 py-10 text-center w-full">
                                <span className="inline-block relative font-medium">
                                    <span className="inline-block absolute top-[50%] bg-red-700 w-full h-[2px]"></span>
                                    800
                                </span>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <span className="text-[60px] text-beta-900 font-bold">
                                        <span>$</span>
                                        1899
                                    </span>
                                    <p className="text-right">For 12 Month</p>
                                </div>
                            </div>
                            <div className=" px-10 py-5 text-white">
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                                <div className="border-b border-white py-2 mb-2">
                                    <p className="text-sm text-center">
                                        10% OFF (Upto 200 on each invoice)
                                    </p>
                                </div>
                            </div>
                            <div className="text-center font-semibold text-beta-900">Upto 180CC</div>
                            <div className="w-full flex justify-center items-center my-10">
                                <button className="newMorfPurple  px-5 py-2 text-white " >
                                    <span className="flex gap-2 items-center justify-center">
                                        Buy Now
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center mt-24 mb-10">
                    <h4 className="text-3xl font-bold">For More Details</h4>
                    <p>+91 0000000</p>
                    <p>bikefixup@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default membership;