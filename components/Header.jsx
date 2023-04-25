import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/partner", label: "Partners" },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
const Header = () => {
  const [responsiveTogleIsOpened, setResponsiveTogleIsOpened] = useState(false);
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const handleResponsiveToggleNav = () => {
    setResponsiveTogleIsOpened(!responsiveTogleIsOpened);
  };

  return (
    <header className="max-w-full py-6 xl:py-14 mx-auto px-5 xl:px-36">
      <div className="flex justify-between items-center text-black ">
        <div className="text-black font-alpha font-semibold text-3xl md:text-4xl">
          <span className="text-alpha-700">Bike</span>Fixup
        </div>
        <div className="hidden lg:block">
          +91-11-1111-1111 / www.bikefixup.in
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <div className="m-auto font-semibold">Sign up</div>
          <div className="text-sm md:text-md newMorf mx-1 md:mx-2">
            Login
          </div>
        </div>
        {/* BUTTONS  */}
        <div className="block md:hidden relative">
          {/* BURGER ICON START  */}
          <button title={"menu icon"} onClick={handleResponsiveToggleNav}>
            <span
              className={`block transition-all duration-500 h-[2px] w-7 bg-black my-2 ${
                responsiveTogleIsOpened ? "rotate-45 translate-y-3" : "rotate-0"
              }`}
            ></span>
            <span
              className={`block transition-all duration-500 h-[2px] w-7 bg-black my-2 ${
                responsiveTogleIsOpened ? "translate-x-96" : "translate-x-0"
              }`}
            ></span>
            <span
              className={`block transition-all duration-500 h-[2px] w-7 bg-black my-2 ${
                responsiveTogleIsOpened
                  ? "-rotate-45 -translate-y-3"
                  : "rotate-0"
              }`}
            ></span>
          </button>
          {/* BURGER ICON END  */}

          {/* RESPONSIVE NAV START  */}
          <div
            className={`${
              responsiveTogleIsOpened ? "right-0 " : "hidden"
            } transition-all duration-500 responsiveNav absolute bg-white  w-64 top-10 px-5 py-5 rounded-lg shadow-lg z-[100] flex flex-col  lg:hidden `}
          >
            <div className="flex items-center justify-between mb-4 px-4">
              <div className="font-semibold">Sign up</div>
              <div className="newMorf text-sm">
                Login
              </div>
            </div>
            <div className="list-none">
              <Navbar.Link
                as={Link}
                href="/"
                className={`nav-mob ${router.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Navbar.Link>
              <Navbar.Link
                as={Link}
                href="/about"
                className={`nav-mob ${
                  router.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </Navbar.Link>
              <Navbar.Link
                as={Link}
                href="/membership"
                className={`nav-mob ${
                  router.pathname === "/membership" ? "active" : ""
                }`}
              >
                Membership
              </Navbar.Link>
              <Navbar.Link
                as={Link}
                href="/partner"
                className={`nav-mob ${
                  router.pathname === "/partner" ? "active" : ""
                }`}
              >
                Partners
              </Navbar.Link>
              <Navbar.Link
                as={Link}
                href="/career"
                className={`nav-mob ${
                  router.pathname === "/career" ? "active" : ""
                }`}
              >
                Career
              </Navbar.Link>
              <Navbar.Link
                as={Link}
                href="/blog"
                className={`nav-mob ${
                  router.pathname === "/blog" ? "active" : ""
                }`}
              >
                Blog
              </Navbar.Link>
              <Navbar.Link
                as={Link}
                href="/contact"
                className={`nav-mob ${
                  router.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Navbar.Link>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar For PC */}
      <div className="relative hidden md:flex list-none space-x-8 pt-4 pb-2">
        <Navbar.Link
          as={Link}
          href="/"
          className={`nav-pc ${router.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/about"
          className={`nav-pc ${router.pathname === "/about" ? "active" : ""}`}
        >
          About
        </Navbar.Link>

        <Navbar.Link
          as={Link}
          href="/membership"
          className={`nav-pc ${
            router.pathname === "/membership" ? "active" : ""
          }`}
        >
          Membership
        </Navbar.Link>

        <Navbar.Link
          as={Link}
          href="/partner"
          className={`nav-pc ${router.pathname === "/partner" ? "active" : ""}`}
        >
          Partners
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/career"
          className={`nav-pc ${router.pathname === "/career" ? "active" : ""}`}
        >
          Career
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/blog"
          className={`nav-pc ${router.pathname === "/blog" ? "active" : ""}`}
        >
          Blog
        </Navbar.Link>

        <Navbar.Link
          as={Link}
          href="/contact"
          className={`nav-pc ${router.pathname === "/contact" ? "active" : ""}`}
        >
          Contact
        </Navbar.Link>
      </div>
      <div className="h-[2px] bg-gradient-to-l from-[#ffffff00] to-[#ffffff] bg-opacity-5 hidden md:block"></div>
    </header>
  );
};

export default Header;
