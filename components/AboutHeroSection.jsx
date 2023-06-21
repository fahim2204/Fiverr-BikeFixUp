import React from "react";
import heroImage from "../public/assets/aboutHero.svg";
import teamImage from "../public/assets/team.png";
import Image from "next/image";
const AboutHeroSection = () => {
    return (
        <div>
            <div className="lg:justify-between lg:flex-row flex-col text-black flex xl:py-8  ">
                <div className="w-full lg:w-5/12 lg:relative flex items-center justify-center">
                    <Image
                        className="lg:absolute lg:top-32 lg:-right-14 lg:bottom-10 z-50 w-[200px] lg:w-[420px]"
                        src={heroImage}
                        alt=""
                    />
                </div>
                <div className="aboutHeroGlass w-full lg:w-7/12 lg:py-10 pl-6 lg:pl-20 lg:pr-32 px-5 mt-5 text-center lg:text-left">
                    <h1 className="text-xl lg:text-4xl leading-none font-bold mt-4">
                        About <span className="text-beta-900">Us</span>{" "}
                    </h1>
                    <h2 className="text-beta-900 text-xl lg:text-2xl font-semibold lg:my-5 my-2">
                        Welcome at
                        <span className="text-black text-sm lg:text-2xl">
                            <span className="text-alpha-700 mr-1"> Bike</span>fixup{" "}
                        </span>
                    </h2>
                    <p className="mb-5 text-justify lg:block w-full">
                        How painful is it to service your motorcycle? Let us break it down for
                        you. Not sure which services station to trust? Don’t want to spend too
                        much time in the workshop? Are you looking for a assemblage pick-up
                        and drop-off services?
                        <br />
                        <br />
                        we’re here to make sure that no one is inconvenienced while getting
                        their bike serviced. this will allow bike owner to obtain convenient
                        bike service while relaxing with their families or working. Bikefixup
                        is a full-service preventive maintenance and automotive repair
                        company. We perform high quality, guaranteed services you can trust at
                        a fair price.
                    </p>
                </div>
            </div>
            {/* about mission */}

            <div className="aboutGlass mt-20 px-6 lg:px-36 py-8 text-black">
                <h4 className="lg:text-4xl text-2xl font-semibold text-beta-900 text-center">Our mission</h4>
                <h4 className="lg:text-3xl text-lg font-medium text-center">What Makes Bikefixup stand out?</h4>
                <p className="mt-10 lg:mb-20 mb-0 text-justify">
                    We at Bikefixup want to change the bike servicing industry by providing
                    trustworthy and real bike services at affordable prices.
                    <br />
                    <br />
                    We at Bikefixup provide the best two wheeler service think that your
                    vehicle is more than a machine and we treat is as such. Our premium
                    quality services at cost-effective, our genuineness, and your faith in
                    us are what set us apart from the competition!
                    <br />
                    <br />
                    Our purpose is to improve the industry from both sides. By offering
                    clients with a pleasant, cost-effective, speedy and comfortable service,
                    repair and maintenance experience. Simultaneously, expanding service
                    providers by providing them with a wide ranges of inventory and spare
                    part accessories straight from the OEM and OES, in order to improve
                    service quality, customer trust and loyalty. As a result, we consider it
                    an honor to be your vehicle’s lonebuddy, someone you can rely on at the
                    end of the day.
                </p>
            </div>
            {/* team */}

            {/* <div className=" flex my-6 lg:my-20 relative items-center text-black">
                <div className={`aboutOurTeamGlass w-full lg:w-8/12  px-6 lg:h-[450px] 
                 py-20 `}>
                    <h3 className="text-xl lg:text-4xl font-semibold">Our team</h3>
                    <p className="text-justify pt-2 lg:pt-7 text-sm lg:text-base">
                        Bikefixup is India's leading bike service provider, spread into a
                        number of cities and states providing you with 500+ best quality
                        services for your bikes like repair, servicing, maintenance,
                        inspection, and a lot more.
                        <br />
                        <br />
                        Our Team is Dedicated to Enthrall you and
                        make you trust us with our top-notch service. We promise a lifelong
                        delightful experience with us.
                    </p>
                </div>
                <div className="absolute right-[-250px]  lg:h-[350px] h-[150px] overflow-hidden w-[500px] rounded-3xl ">
                    <Image className="h-full object-cover" src={teamImage} alt="" />
                </div>
            </div> */}
            <div className="flex justify-between gap-2 md:gap-5 pt-8 lg:flex-row flex-col items-center text-black">
                <div className={`aboutOurTeamGlass w-full lg:w-6/12  px-6 lg:h-[450px] 
                 py-20 `}>
                    <h3 className="text-xl lg:text-4xl font-semibold">Our team</h3>
                    <p className="text-justify pt-2 lg:pt-7 text-sm lg:text-base">
                        Bikefixup is India's leading bike service provider, spread into a
                        number of cities and states providing you with 500+ best quality
                        services for your bikes like repair, servicing, maintenance,
                        inspection, and a lot more.
                        <br />
                        <br />
                        Our Team is Dedicated to Enthrall you and
                        make you trust us with our top-notch service. We promise a lifelong
                        delightful experience with us.
                    </p>
                </div>
                <div className="  lg:h-[350px] h-[250px]   rounded-3xl lg:w-[470px] ">
                    <Image className="h-full object-cover" src={teamImage} alt="" />
                </div>
            </div>
            {/* one stop */}

            <div className="aboutOneStepGlass px-5 py-8 text-black">
                <h3 className="text-center font-semibold lg:text-3xl text-2xl mb-6 lg:mb-10">
                    What makes us a one stop ?
                </h3>
                <div className="flex justify-between gap-2 md:gap-5 lg:flex-row flex-col">
                    <div className="aboutGlass pt-8 px-8 w-full lg:w-[470px] ">
                        <h5 className="text-xl font-semibold text-center mb-5">Service Quality Assurance</h5>
                        <p className="font-normal">
                            We at Bikefixup use only originally manufactured products to provide the best possible bike service experience to our customer.
                            <br /><br />
                            Customer satisfaction is our top-most priority, and we provide that satisfaction in term of quality service.
                            <br /><br />
                            We have 500+ happy customer.
                        </p>
                        <br /> <br />
                    </div>
                    <div className="aboutGlass pt-8 px-8 w-full lg:w-[470px] ">
                        <h5 className="text-xl font-semibold text-center mb-5">Price Transparency</h5>
                        <p className="font-normal">
                            We at Bikefixup believes in transparent price policy to provide the best prices of all spare parts.Our competitive prices will never let you down because we have our tie-ups with spare parts
                            <br /><br />
                            Our competitive prices will never let you down because we have our tie-ups with spare parts whole seller who provides best prices in market.
                        </p>
                        <br /> <br />
                    </div>
                </div>
            </div>
        </div>


    );
}
export default AboutHeroSection