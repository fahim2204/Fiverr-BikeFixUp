import React from "react";
import Image from "next/image";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

const Blog = () => {
  const blogs = [
    {
      title: "Lorem ipsum dolor",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: "blog-1.webp",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: "blog-2.webp",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: "blog-3.webp",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: "blog-4.webp",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: "blog-5.webp",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: "blog-6.webp",
    },
  ];

  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
        <div className="flex flex-col justify-center">
          <h1 className="lg:text-6xl text-3xl font-semibold text-beta-900">
            BikeFixup - Blog
          </h1>
          <p className="lg:pr-36 pr-0 mt-3 text-black">
            consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem
            ipsum dolor sit amet
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="w-full max-w-md"
            src={`/image/blog-hero.webp`}
            height={283}
            width={398}
            priority
            alt="Bikefixup - Blog"
          />
        </div>
      </div>

      {/* Blog card */}
      <div className="mt-6">
        <h3 className="font-semibold text-3xl text-black">Latest Posts</h3>
        <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 my-10 text-black">
          {blogs.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-white/20 to-white/0 bg-white/20 rounded-3xl shadow-md border overflow-hidden"
              >
                <Image
                  className="w-full"
                  src={`/image/blog/${item.img}`}
                  height={252}
                  width={391}
                  alt={`${item.title} - BikefixUp`}
                />
                <div className="px-10 py-5">
                  <div className="mb-5 mt-4 text-2xl font-semibold hover:underline">
                    <Link href={`/`}>{item.title}</Link>
                  </div>
                  <p className="text-justify line-clamp-6">{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
