import React from "react";
import Link from "next/link";
import Image from "next/image";
import rightBgElement from "../public/assets/002.svg";
import rightBgBallElement from "../public/assets/blobanimation.svg";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const ProfilePage = () => {
  const [showMobileSide, setShowMobileSide] = useState(false);
  function handleDropdownChange(event) {
    setSelectedOption(event.target.value);
  }
  return (
    <div>
      <div className="bg-main p-5 md:p-10 h-screen ">
        <div className="backdrop-blur-sm shadow-sm border rounded-3xl overflow-hidden border-white h-full text-slate-200 relative">
          <Image
            className="absolute top-[190px] right-0 w-[250px] -z-10"
            src={rightBgBallElement}
            alt="element"
          />
          <Image
            className="absolute top-[200px] right-0 w-[200px] -z-10"
            src={rightBgElement}
            alt="element"
          />
          <div className="grid grid-cols-12 relative h-full">
            <div
              className={`fixed md:static top-0 ${showMobileSide ? "left-0" : "-left-[220px]"
                } md:col-span-3 h-full backdrop-blur shadow p-3 bg-gradient-to-br from-white to-white md:to-transparent rounded-3xl transition-all duration-300 z-50`}
            >
              <Sidebar
                showMobileSide={showMobileSide}
                setShowMobileSide={setShowMobileSide}
              />
            </div>
            <div className="col-span-12 md:col-span-9 bg-primary text-black overflow-y-auto  hide-scroll">
              <div className="px-5 py-8 md:px-10 md:py-10 ">

                <div className="rounded-3xl h-full   px-2 sm:px-20 py-10 md:py-32 flex  flex-col md:flex-row justify-center items-center">
                  <div className=" flex justify-around items-center">
                    <div className="loginGlass h-[650px] sm:w-[500px] w-[300px] sm:h-[500px] px-5 md:py-2 border-l border-t border-white relative">
                      <div className="relative py-2">
                   
                        {/* CROSS BUTTON  */}
                        <Link href="/" className="absolute -right-2 top-3 ">
                          <RxCrossCircled className="text-2xl text-black font-semibold" />
                        </Link>
                        <form className="relative z-10 pt-10 flex flex-col justify-center w-full items-center">
                          <div className="flex justify-center items-center mb-8">
                            <input
                              name="picture"
                              className="my-2 w-full  formGlassInput "
                              type="file"
                              accept="image/*"

                            />
                          </div>

                          <div className="sm:flex gap-2 w-full">
                            <span className="block w-full">
                              <input
                                name="name"
                                placeholder="Name"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="text"
                              />
                            </span>

                            <span className="block w-full">
                              <input
                                name="email"
                                placeholder="Email"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="email"
                              />
                            </span>
                          </div>

                          <div className="sm:flex gap-2 w-full">
                            <span>
                              <input
                                name="phone"
                                placeholder="Phone"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="tel"
                              />
                            </span>

                            <span>
                              <input
                                name="dob"
                                placeholder="Date of Birth"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="text"
                              />
                            </span>
                          </div>
                          <div className="sm:flex gap-2 w-full">
                            <span className="block w-full">
                              <input
                                name="address"
                                placeholder="Address"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="text"
                              />
                            </span>

                            <span className="block w-full">
                              <select
                                name="Gender"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                onChange={handleDropdownChange}
                              >
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </span>
                          </div>
                          <div className="sm:flex gap-2 w-full">
                            <span>
                              <input
                                name="City"
                                placeholder="City"
                                className="my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black"
                                type="text"
                              />
                            </span>
                          </div>

                          <div className="flex justify-center items-center mb-2 mt-8">
                            <button className="newMorfPurple px-16 py-2 text-white">
                              <span className="flex gap-2 items-center justify-center">
                                Submit
                              </span>
                            </button>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ProfilePage;
