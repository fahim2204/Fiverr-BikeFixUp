import React from "react";
import Image from "next/image";
import heroImage from "../public/assets/partnerHero.svg";
import CustomInput from "./CustomInput";
const PartnerHeroSection = () => {
    return (
        <div className=" px-5 text-black flex flex-col lg:flex-row xl:py-8 xl:px-36">
            <div className="lg:w-1/2">
                <h1 className=" text-4xl text-center font-semibold text-beta-900 my-5 mb-10">
                    Become a partner
                </h1>
                <div className="w-full flex justify-center items-center">
                    <Image src={heroImage} alt="" />
                </div>
                <div >
                    <h2 className="text-3xl font-semibold my-5 text-beta-900 sm:text-center lg:text-left">
                        We are <span className="text-alpha-700">Bike</span>
                        <span className="text-black">fixup</span>!
                    </h2>
                    <p className=" text-justify " >
                        Doctor Garage is India's first brand in automobile industry that
                        work for garages already exist in market but not able to perform or
                        earn as per market potential. Mother firm of Doctor Garage SMART
                        SERVICE GROUP is a Vadodara, Gujarat based company working since
                        2014 in automobile industry as marketing partner of authorized
                        automobile workshops which includes dealers Hero Motocorp Honda Two
                        Wheelers, Bajaj Auto, Maruti Suzuki, Volkswagon etc. SMART SERVICE
                        GROUP Having 50+ clients in Gujarat, Rajasthan & Maharashtra. We are
                        having more than 2.5L+ customer base. During working with authorized
                        workshops TEAM of SMART SERVICE GROUP observed that there is another
                        sector (multi brand two wheeler garage) exist in market that working
                        under potential and unorganized as well.
                    </p>
                </div>
            </div>
            <div className="  my-10 lg:w-1/2  lg:ml-10">
                <form className="heroFormGlassDiv px-5 py-2 md:px-10 md:py-3 " >
                    <h3 className=" text-3xl text-center font-bold text-beta-900 my-5 ">
                        Become a Partner
                    </h3>
                    <CustomInput
                        label="Partner Name"
                        name="name"
                        placeholder="Name"
                        extra_class="  px-3 py-3 w-full my-2"
                        type="text" />
                    <CustomInput
                        label="Phone Number"
                        name="phone"
                        placeholder="+91"
                        extra_class="  px-3 py-3 w-full my-2"
                        type="number" />
                    <CustomInput
                        label="Time frame for buying a franchise"
                        name="timeFrame"
                        placeholder="Select time frame"
                        extra_class="  px-3 py-3 w-full my-2"
                        type="text" />
                    <CustomInput
                        label="Budget For Starting A Franchise"
                        name="timeFrame"
                        placeholder="Select Budget"
                        extra_class="  px-3 py-3 w-full my-2"
                        type="number" />

                    <CustomInput
                        label="Location to lunch a BIKEFIXUP"
                        name="timeFrame"
                        placeholder="Location"
                        extra_class="  px-3 py-3 w-full my-2"
                        type="text" />
                    <CustomInput
                        label="Are or Have You Been A Motorbike Machanics?"
                        name="timeFrame"
                        placeholder="Select"
                        extra_class="  px-3 py-3 w-full my-2"
                        type="text" />
                    <CustomInput
                        label="How Did You Hear About Us?"
                        name="timeFrame"
                        placeholder="social media, website, etc."
                        extra_class="  px-3 py-3 w-full my-2"
                        type="text" />
                    <CustomInput
                        label="How Did You Hear About Us?"
                        name="timeFrame"
                        placeholder="social media, website, etc."
                        extra_class="  px-3 py-3 w-full my-2"
                        type="text" />
                    <div className="w-full flex justify-center items-center my-10">
                        <button className="newMorfPurple  text-center py-2 px-10 text-white font-semibold " >
                            <span className="flex gap-2 items-center justify-center">
                               Submit
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default PartnerHeroSection;