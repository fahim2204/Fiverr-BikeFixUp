import "../styles/global.css";
import Footer from "/components/Footer";
import Header from "/components/Header";
import Image from "next/image";
import leftBgElement from "../public/assets/001.svg";
import rightBgElement from "../public/assets/002.svg";
import rightBgBallElement from "../public/assets/blobanimation.svg";

export default ({ Component, pageProps }) => {
  return (
    <>
      <div className="bg-main p-5 md:p-10">
        <div className="backdrop-filter bg-clip-padding backdrop-blur-2xl bg-opacity-50 border border-white rounded-3xl overflow-hidden w-full text-slate-200 relative">
          <Image
            className="absolute top-[150px] w-[290px] -z-10"
            src={leftBgElement}
            alt="element"
          />
          <Image
            className="absolute top-[190px] right-0 w-[250px] -z-10"
            src={rightBgBallElement}
            alt="element"
          />
          <Image
            className="absolute top-[150px] right-0 w-[200px] -z-10"
            src={rightBgElement}
            alt="element"
          />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
};
