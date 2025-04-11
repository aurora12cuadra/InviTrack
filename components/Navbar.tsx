"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { HamburgerMenu } from "./HamburgerMenu";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para hacer scroll suave
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Cierra el menú en móviles
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#d9dacf]  shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#" onClick={() => scrollToSection("#home")}>
          <Image src="/InviTrack1.png" alt="logo-website" width={100} height={40} />
        </a>

        {/* Menú Desktop */}
        <ul className="hidden lg:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-[#2C3E50] text-lg font-medium transition duration-300 hover:text-[#5E7A8E] hover:underline cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Menú Mobile - Hamburguesa */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <Image src="/menu.svg" alt="menu" width={30} height={30} />
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#d9dacf] text-white shadow-md py-4">
          <ul className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-[#2C3E50] text-lg font-medium transition duration-300 hover:text-[#5E7A8E] hover:underline cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};