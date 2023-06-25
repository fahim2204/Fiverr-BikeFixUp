import React from "react";
import Image from "next/image";

const PartnerHeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
      <div className="">
        <h1 className="md:text-5xl text-4xl text-center font-bold text-beta-900 my-5 mb-10">
          Become a partner
        </h1>
        <div className="w-full flex justify-center items-center">
          <Image src="/image/partner-hero.webp" width={543} height={325} alt="Become Partner" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mt-8 mb-6 text-beta-900 sm:text-center lg:text-left">
            We are <span className="text-alpha-700">Bike</span>
            <span className="text-black">fixup</span>
          </h2>
          <p className="text-justify">
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
      <div className="flex justify-center md:justify-end mb-8">
        <form className="px-10 pt-5 bg-gradient-to-b from-white/20 to-white/0 bg-white/10 rounded-3xl shadow-md">
          <h3 className="md:text-3xl text-2xl text-center font-bold text-beta-900 my-5 font-beta">
            Become a Partner
          </h3>
          <label htmlFor="name" className="block">
            Partner Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            className="px-8 py-3 w-full my-2 formGlassInput"
            type="text"
          />

          <label htmlFor="phone" className="block">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="+91"
            className="px-8 py-3 w-full my-2 formGlassInput"
            type="number"
          />

          <label htmlFor="timeFrame" className="block">
            Time frame for buying a franchise
          </label>
          <select
            className={`px-8 py-3 w-full my-2 formGlassInput`}
            // onChange={handleDropdownChange}
            name="timeFrame"
          >
            <option value={null}>Select Timeframe</option>
          </select>

          <label htmlFor="budget" className="block">
            Budget For Starting A Franchise
          </label>
          <select
            className={`px-8 py-3 w-full my-2 formGlassInput`}
            // onChange={handleDropdownChange}
            name="budget"
          >
            <option value={null}>Select Budget</option>
          </select>
          <label htmlFor="location" className="block">
            Location to launch a BIKEFIXUP
          </label>
          <input
            id="location"
            name="location"
            placeholder="Location"
            className="px-8 py-3 w-full my-2 formGlassInput"
            type="text"
          />

          <label htmlFor="motorbikeMechanic" className="block">
            Are or Have You Been A Motorbike Mechanic?
          </label>
          <select
            className={`px-8 py-3 w-full my-2 formGlassInput`}
            // onChange={handleDropdownChange}
            name="mechanic"
          >
            <option value={null}>Select</option>
          </select>

          <label htmlFor="hearAboutUs" className="block">
            How Did You Hear About Us?
          </label>
          <input
            id="hearAboutUs"
            name="hearAboutUs"
            placeholder="social media, website, etc."
            className="px-8 py-3 w-full my-2 formGlassInput"
            type="text"
          />
          <div className="w-full flex justify-center items-center my-10">
            <button className="newMorfPurple text-center py-4 px-10 text-white font-semibold ">
              <span className="flex gap-2 items-center justify-center">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PartnerHeroSection;
