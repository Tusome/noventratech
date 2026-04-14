"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "services", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const bottom = top + element.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section: string) =>
    `cursor-pointer transition ${
      active === section
        ? "text-brandBlue font-semibold"
        : "text-gray-300 hover:text-brandBlue"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-brandBlue font-semibold border-b-2 border-brandBlue pb-1">
          Noventra Technologies
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className={linkClass("home")}>
            Home
          </a>
          <a href="#services" className={linkClass("services")}>
            Services
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}