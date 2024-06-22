"use client";
import { Navbar } from "flowbite-react";
import { Link } from "react-scroll"; // Import Link from react-scroll

export function StickyNavbar() {
  return (
    <div className="px-10 bg-blue-800 border-b-2 border-blue-500 sticky top-0 z-50">
      <Navbar
        fluid
        className="bg-blue-800 text-white align-middle h-fit m-auto items-center"
      >
        <Navbar.Brand
          className="justify-start"
          href="https://flowbite-react.com"
        >
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-white hover:text-gray-100 transition-color h-full">
          <div className="flex flex-row align-middle h-full m-auto items-center gap-10">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              className="cursor-pointer text-white hover:text-gray-100 transition-all"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-gray-100"
            >
              About
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-gray-100"
            >
              Contact
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-gray-100 bg-blue-500 px-2 p-1 rounded-md"
            >
              Get Started
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
