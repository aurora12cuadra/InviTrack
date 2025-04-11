"use client";
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative">
        {/* Ícono de hamburguesa visible en pantallas móviles */}
        <Image
          src="/menu.svg"
          alt="Menu"
          width={32}
          height={32}
          className="cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
  
        {/* Menú hamburguesa animado */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-green-50 shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        >
          {/* Botón de cerrar */}
          <div className="flex justify-end p-4">
            <Image
              src="/close.svg"
              alt="Close Menu"
              width={32}
              height={32}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
  
          {/* Contenido del menú */}
          <ul className="text-white flex flex-col items-center justify-center space-y-6 mt-10">
          {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-lg hover:text-gray-300 transition"
          >
            {link.label}
          </Link>
        ))}
          </ul>
        </div>
  
        {/* Fondo oscuro cuando el menú está abierto */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    );
}
