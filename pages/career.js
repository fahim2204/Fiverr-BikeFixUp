import React from "react";
import Image from "next/image";
import careerHeroImage from "../public/assets/joinWIthUsHero.svg";
import CustomInput from "/components/CustomInput";
import jobImage1 from '../public/assets/Job1.jpg';
import jobImage2 from '../public/assets/job2.jpg';
import jobImage3 from '../public/assets/job3.jpg';
import jobImage4 from '../public/assets/job4.jpg';
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import MainLayout from "../layouts/MainLayout";
const career = () => {
    return (
        <MainLayout>
            <div className=" flex flex-col-reverse text-black sm:flex-row sm:justify-between md:mt-5 xl:py-8 " >
                <div className=" w-full  sm:w-[300px] md:w-[400px] ">
                    <h1 className="md:text-5xl text-3xl font-semibold pr-0 block leading-none mb-6 ">
                        Join with <span className="text-beta-900">Us</span>
                    </h1>
                    <p className="mb-5">
                        We are hiring. Join us and help us reinvent the-two-wheeler service
                        and maintenance.
                    </p>

                    <CustomInput
                        extra_class={`px-5 py-2 w-full`}
                        placeholder={"Search"}
                        type="text"
                    />
                </div>
                <div className="w-full mb-10  sm:w-1/2">
                    <Image src={careerHeroImage} alt="" />
                </div>
            </div>
            {/* job card */}

            <div className=" grid  grid-cols-1  gap-10 mt-10  w-full  px-5 sm:grid-cols-2 lg:grid-cols-3 xl:py-8 ">
                <div className="overflow-hidden rounded-[20px] jobCardGlass text-black">
                    <Image className="w-full" src={jobImage1} alt="" />
                    <div className="px-5 py-5">
                        <h2 className="text-xl font-semibold">Account Manager</h2>
                        <p className="text-gray-500 flex items-center">
                            <MdLocationOn className="mr-2" />Mumbai
                        </p>
                        <p className="mt-5 text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit</p>

                        <Link href={'/Home'} className="my-2 text-beta-900 font-semibold text-center w-full block">
                            <span className="border-b-2 border-beta-900">More Details</span>
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden rounded-[20px] jobCardGlass text-black">
                    <Image className="w-full" src={jobImage2} alt="" />
                    <div className="px-5 py-5">
                        <h2 className="text-xl font-semibold">Account Manager</h2>
                        <p className="text-gray-500 flex items-center">
                            <MdLocationOn className="mr-2" />Mumbai
                        </p>
                        <p className="mt-5 text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit</p>

                        <Link href={'/Home'} className="my-2 text-beta-900 font-semibold text-center w-full block">
                            <span className="border-b-2 border-beta-900">More Details</span>
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden rounded-[20px] jobCardGlass text-black">
                    <Image className="w-full" src={jobImage3} alt="" />
                    <div className="px-5 py-5">
                        <h2 className="text-xl font-semibold">Account Manager</h2>
                        <p className="text-gray-500 flex items-center">
                            <MdLocationOn className="mr-2" />Mumbai
                        </p>
                        <p className="mt-5 text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit</p>

                        <Link href={'/Home'} className="my-2 text-beta-900 font-semibold text-center w-full block">
                            <span className="border-b-2 border-beta-900">More Details</span>
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden rounded-[20px] jobCardGlass text-black">
                    <Image className="w-full" src={jobImage4} alt="" />
                    <div className="px-5 py-5">
                        <h2 className="text-xl font-semibold">Account Manager</h2>
                        <p className="text-gray-500 flex items-center">
                            <MdLocationOn className="mr-2" />Mumbai
                        </p>
                        <p className="mt-5 text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit</p>

                        <Link href={'/Home'} className="my-2 text-beta-900 font-semibold text-center w-full block">
                            <span className="border-b-2 border-beta-900">More Details</span>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="w-full xl:py-8 px-5  text-black my-10">
                <h2 className="md:text-4xl text-2xl text-center font-semibold">Can't Find Your <span className="text-beta-900">Position?</span></h2>
                <p className=" mt-5 text-justify sm:text-center ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <div className="w-full flex justify-center items-center mt-10">
                    <button className="newMorfPurple  px-5 py-2 text-white " >
                        <span className="flex gap-2 items-center justify-center">
                            Upload Cv
                        </span>
                    </button>
                </div>
            </div>
        </MainLayout>

    );
}
export default career;