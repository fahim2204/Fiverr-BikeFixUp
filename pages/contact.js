
import React from "react";
import { BiGlobe } from "react-icons/bi";
import { MdLocationOn, MdPhone } from "react-icons/md";
import contactHeroImage from "../public/assets/contactHero.svg";
// import PurpleNewmorfButton from "../public/assets/PurpleNewmorfButton";

import Image from "next/image";
import CustomInput from "/components/CustomInput";

const contact = () => {
    return (
        <div className="lg:px-32 px-6 lg:py-8 py-4 text-black">
            <h1 className="lg:text-4xl text-xl font-semibold text-center lg:mb-5 mb-2">
                Have Some Question?
            </h1>
            <p className="text-center mb-10 lg:text-base text-xs">
                Please feel free to talk to use you have ay questions.
                <br />
                We endeavor at answer withing 24 hours.
            </p>
            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-7/12 w-full lg:pr-20">
                    <div>
                        <Image src={contactHeroImage} alt="" />
                    </div>
                    <div className="mt-10">
                        <h3 className="font-semibold text-3xl mb-8">Get in touch</h3>
                        <ul>
                            <li className="my-5 text-md flex items-center justify-start">
                                <MdLocationOn className="text-3xl mr-5 text-beta-900" /> {"Lorem ipsum dolor sit amet,"}
                            </li>
                            <li className="my-5 text-md flex items-center justify-start">
                                <MdPhone className="text-3xl mr-5 text-beta-900" /> {"+91 0000000"}
                            </li>
                            <li className="my-5 text-md flex items-center justify-start">
                                <BiGlobe className="text-3xl mr-5 text-beta-900" /> {"bikefixup@gmail.com"}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-5/12 w-full">
                    <form className="heroFormGlassDiv px-5 py-2 md:px-10 md:py-3 " >
                        <CustomInput
                            component="input"
                            name="name"
                            placeholder="Name"
                            extra_class=" my-2 w-full  h-[45px] px-[27px] py-1 formGlassInput text-black"
                            type="text"
                        />
                        <CustomInput
                            component="input"
                            name="phone"
                            placeholder="Phone"
                            extra_class=" my-2 w-full  h-[45px] px-[27px] py-1  formGlassInput text-black"
                            type="number"
                        />
                        <CustomInput
                            component="input"
                            name="email"
                            placeholder="Email"
                            extra_class=" my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                            type="email"
                        />
                        <CustomInput
                            component="textarea"
                           
                            name="message"
                          
                            placeholder="Message"
                            extra_class="my-2 w-full mb-8 h-[120px] px-[27px] py-1 formGlassInput text-black"
                        />
                        <div className="flex justify-center items-center mb-8">
                        <button className="newMorfPurple  px-16 py-2  text-white" >
                                    <span className="flex gap-2 items-center justify-center">  Send  </span>
                                </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default contact;