// import Footer from '/components/Footer'
// import Header from '/components/Header'
// import Image from "next/image";
// import leftBgElement from "../public/assets/001.svg";
// import rightBgElement from "../public/assets/002.svg";
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <div className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] px-5 py-5 md:px-10 md:py-10">
          <div className='backdrop-filter-blur bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-white  rounded-3xl overflow-hidden w-full  text-slate-200'>
            <Header />
            <Main />
            <NextScript />
            <Footer />
          </div>

        </div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
