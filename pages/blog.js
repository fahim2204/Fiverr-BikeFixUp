import React from "react";
import Image from "next/image";
import BlogHeroImage from "../public/assets/blogHero.svg";
import Blog1 from "../public/assets/Blog1.jpg";
import Blog2 from "../public/assets/Blog2.jpg";
import Blog3 from "../public/assets/Blog3.jpg";
import Blog4 from "../public/assets/Blog4.jpg";
import Blog5 from "../public/assets/Blog5.jpg";
import Blog6 from "../public/assets/Blog6.jpg";
import MainLayout from "../layouts/MainLayout";

const blog = () => {
  return (
    <MainLayout>
      <div className=" flex lg:flex-row flex-col-reverse">
        <div>
          <h1 className="lg:text-[50px] text-3xl font-semibold text-beta-900">
            Your Blog Title Here.
          </h1>
          <p className="lg:pr-36 pr-0 mt-3 text-black">
            consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem
            ipsum dolor sit amet
          </p>
        </div>
        <div>
          <Image src={BlogHeroImage} alt="" />
        </div>
      </div>
      {/* Blog card */}
      <div className=" mt-6">
        <h3 className="font-medium text-3xl text-black">Latest Posts</h3>
        <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 my-10 text-black">
          <div className="blogPostCardGlass overflow-hidden rounded-3xl">
            <Image src={Blog1} alt="" />
            <div className="px-10 py-5">
              <h1 className="mb-5 mt-4 text-2xl font-semibold">
                Lorem ipsum dolor
              </h1>
              <p className="text-justify">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          <div className="blogPostCardGlass overflow-hidden rounded-3xl">
            <Image src={Blog2} alt="" />
            <div className="px-10 py-5">
              <h1 className="mb-5 mt-4 text-2xl font-semibold">
                Lorem ipsum dolor
              </h1>
              <p className="text-justify">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="blogPostCardGlass overflow-hidden rounded-3xl">
            <Image src={Blog3} alt="" />
            <div className="px-10 py-5">
              <h1 className="mb-5 mt-4 text-2xl font-semibold">
                Lorem ipsum dolor
              </h1>
              <p className="text-justify">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="blogPostCardGlass overflow-hidden rounded-3xl">
            <Image src={Blog4} alt="" />
            <div className="px-10 py-5">
              <h1 className="mb-5 mt-4 text-2xl font-semibold">
                Lorem ipsum dolor
              </h1>
              <p className="text-justify">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="blogPostCardGlass overflow-hidden rounded-3xl">
            <Image src={Blog5} alt="" />
            <div className="px-10 py-5">
              <h1 className="mb-5 mt-4 text-2xl font-semibold">
                Lorem ipsum dolor
              </h1>
              <p className="text-justify">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="blogPostCardGlass overflow-hidden rounded-3xl">
            <Image src={Blog6} alt="" />
            <div className="px-10 py-5">
              <h1 className="mb-5 mt-4 text-2xl font-semibold">
                Lorem ipsum dolor
              </h1>
              <p className="text-justify">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default blog;
