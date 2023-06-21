import React from "react";
import Image from "next/image";
import heroImage from "../public/assets/partnerHero.svg";
import CustomInput from "./CustomInput";
const PartnerHeroSection = () => {
    return (
        <div className="px-5 text-black flex flex-col lg:flex-row xl:py-8 ">
            <div className="lg:w-1/2">
                <h1 className=" md:text-5xl text-3xl text-center font-semibold text-beta-900 my-5 mb-10">
                    Become a partner
                </h1>
                <div className="w-full flex justify-center items-center">
                    <Image src={heroImage} alt="" />
                </div>
                <div >
                    <h2 className="md:text-4xl text-2xl font-semibold my-5 text-beta-900 sm:text-center lg:text-left">
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
                <form className="px-5 py-2 md:px-10 md:py-3 " >
                    <h3 className=" md:text-3xl text-2xl text-center font-bold text-beta-900 my-5 ">
                        Become a Partner
                    </h3>
                    <label htmlFor="name" className="block">Partner Name</label>
                    <input
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="px-3 py-3 w-full my-2 formGlassInput"
                        type="text"
                    />

                    <label htmlFor="phone" className="block">Phone Number</label>
                    <input
                        id="phone"
                        name="phone"
                        placeholder="+91"
                        className="px-3 py-3 w-full my-2 formGlassInput"
                        type="number"
                    />

                    <label htmlFor="timeFrame" className="block">Time frame for buying a franchise</label>
                    <input
                        id="timeFrame"
                        name="timeFrame"
                        placeholder="Select time frame"
                        className="px-3 py-3 w-full my-2 formGlassInput"
                        type="text"
                    />

                    <label htmlFor="budget" className="block">Budget For Starting A Franchise</label>
                    <input
                        id="budget"
                        name="budget"
                        placeholder="Select Budget"
                        className="px-3 py-3 w-full my-2 formGlassInput"
                        type="number"
                    />

                    <label htmlFor="location" className="block">Location to launch a BIKEFIXUP</label>
                    <input
                        id="location"
                        name="location"
                        placeholder="Location"
                        className="px-3 py-3 w-full my-2 formGlassInput"
                        type="text"
                    />

                    <label htmlFor="motorbikeMechanic" className="block">Are or Have You Been A Motorbike Mechanic?</label>
                    <input
                        id="motorbikeMechanic"
                        name="motorbikeMechanic"
                        placeholder="Select"
                        className="px-3 py-3 w-full my-2 formGlassInput"
                        type="text"
                    />

                    <label htmlFor="hearAboutUs" className="block">How Did You Hear About Us?</label>
                    <input
                        id="hearAboutUs"
                        name="hearAboutUs"
                        placeholder="social media, website, etc."
                        className="px-3 py-3 w-full my-2 formGlassInput"
                        type="text"
                    />

                    <label htmlFor="additionalInfo" className="block">Additional Information</label>
                    <input
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="Enter additional information"
                        className="px-3 py-3 w-full my-2 formGlassInput"
                        type="text"
                    />
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