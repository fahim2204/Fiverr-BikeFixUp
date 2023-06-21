import Image from "next/image";
import React from "react";
import marketPotentialImage from "../public/assets/PartnerMarketPotential.jpg";
import whyUsImage from '../public/assets/PartnerWhyUs.svg';


const PartnerPotential = () => {
    return (
        <>
            {/* market potential */}
            <div className=" text-black xl:py-8">
                <div className="partnerMarketPotential rounded-3xl py-2">
                    <h2 className="text-2xl md:text-4xl font-semibold text-center text-beta-900 my-5">
                        Market Potential
                    </h2>
                    <div className="">
                        <div className="px-2 w-full lg:px-10">
                            <div className="flex w-full flex-col items-center justify-between lg:flex-row sm:items-start ">

                                <div className="flex justify-center items-center w-full mb-5 sm:mb-10 lg:mb-0">
                                    <Image
                                        className="rounded-xl w-100 sm:px-0 lg:w-[500px] lg:pr-5"
                                        src={marketPotentialImage}
                                        alt="market potential"
                                    />
                                </div>
                                <div className="text-justify w-full sm:py-0 lg:pr-10 lg:w-2/3 lg:pl-5">
                                    <p className="">
                                        The market of local garages is uncontrolled and unregulated;
                                        95% of them are usually roadside stores whereas many are
                                        fly-bynight set-ups and are highly unreliable. A highly
                                        fragmented market with a deeprooted practice of using spurious
                                        spare parts, where the quality of the service is ascertained
                                        only by the number of vehicles lying in the garage.
                                    </p>
                                    <ul className="list-disc pl-5 pr-2 font-semibold mt-2 mb-10">
                                        <li>Hurdles Faced​</li>
                                        <li>Genuineness is always a question.​</li>
                                        <li>Lack of Transparency.​</li>
                                        <li>Parts Quality.</li>
                                        <li>High Charges at Authorized workshops.​</li>
                                        <li>Good mechanics & Garages are hard to find.​</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us */}
            <div className="  flex flex-col text-black my-10 justify-center items-center  md:flex-row xl:py-8  ">
                <div>
                    <h2 className="text-2xl md:text-4xl font-semibold mb-5"><span className="text-beta-900">Why</span> Choose Us?</h2>
                    <ul className="list-disc ml-5 pr-2">
                        <li>Entire management team having experience in automobile sector.</li>
                        <li>Providing online marketing as well as offline (door to door) marketing.</li>
                        <li>0 Royalty Charges.</li>
                        <li>Providing daily service booking after certain time period.</li>
                        <li>Only brand in India having in-house tele calling dept.</li>
                        <li>Having mobile applications for customers.</li>
                        <li>Only brand in India providing full services to BS6 vehicles.</li>
                        <li>ROI Period 12-18 Months*.</li>
                    </ul>
                </div>
                <div>
                    <Image src={whyUsImage} alt="why bikefixup" />
                </div>
            </div>
            {/* Marketing Activity */}
            <div className="partnerMarketPotential px-5 text-black py-5 lg:flex  xl:py-8 ">
                <div className="pb-2">
                    <h2 className="text-2xl md:text-4xl font-semibold my-5">
                        Marketing <span className="text-beta-900">Activity</span>
                    </h2>
                    <p className="text-justify">
                        Doctor GARAGE Will Assign a person at your workshop on its own expense
                        to built up footfall by selling 500 AMC (500*3=1500 services). Doctor
                        GARAGE will provide you flyers to distribute them within the 5kms of
                        workshop area for your workshop advertisement. Doctor GARAGE will do
                        tie ups to the nearest corporate offices and corporate companies.
                        Doctor GARAGE will organize frequent publicity activities within 5kms
                        workshop area. Doctor GARAGE will publish advertisement in local news
                        papers of your city. Doctor Garage will organize door to door
                        marketing activity to increase AMC sales of your workshop. Doctor
                        Garage Also Have tie up with an Agency For Digital Marketing Activity,
                        And all other marketing & Advertisement solutions.
                    </p>
                </div>
            </div>

            {/* Sales support */}
            <div className=" text-black my-10 xl:py-8  " >
                <h3 className="text-center font-semibold text-2xl md:text-4xl">
                    After Sales <span className="text-beta-900">Support</span>
                </h3>
                <p className="text-center md:px-40">
                    We have designed two types of mobile application to make service &
                    workshop operation smooth.
                </p>
                <div className="lg:flex ">
                    <div className="partnerAfterSaleSupGlassCard w-full my-5 p-5 min-h-[300px] lg:w-1/2 mx-1">
                        <h1 className="uppercase text-lg text-center font-semibold mb-5">
                            FRANCHISE PARTNER CAN USE APPLICATION FOR
                        </h1>
                        <ul className="ml-10 list-disc">
                            <li>Making Job Cards</li>
                            <li>Issue Service Invoice</li>
                            <li>To track stock of available parts & oil</li>
                            <li>To monitor workshop Performance</li>
                            <li>To Collect Data Of Serviced Vehicles</li>
                        </ul>
                    </div>
                    <div className="partnerAfterSaleSupGlassCard w-full  my-5 p-5 min-h-[300px] lg:w-1/2 mx-1">
                        <h1 className="uppercase text-lg text-center font-semibold mb-5">COUSTOMER CAN USE APPLICATION FOR</h1>
                        <ul className="ml-10 list-disc">
                            <li>Customer use their unique ID to booking their vehicle service and they can purchase AMC without walk in to Dr Garage.</li>
                            <li>Customer can use their application for To Book Service at nearest workshop.</li>
                            <li>To Purchase Annual Maintenance Contract</li>
                            <li>To issue new insurance policy for vehicle</li>
                            <li>To give feedback of vehicle service</li>
                            <li>To track vehicle service history</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerPotential;