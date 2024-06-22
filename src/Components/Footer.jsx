"use client";

import { Footer } from "flowbite-react";

export default function Foot() {
  return (
    <Footer
      container
      className="bg-white rounded-none border-t-2 border-blue-500"
    >
      <div className="w-full text-center rounded-none">
        <div className="w-full justify-between rounded-none sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
            className="rounded-none"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="NerdTech" year={2021} />
      </div>
    </Footer>
  );
}
