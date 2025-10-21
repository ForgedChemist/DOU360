"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import useScrolledNavbar from "./useScrolledNavbar";

const Navbar = () => {
  const scrollY = useScrolledNavbar();
  // Interpolate logo size and opacity based on scrollY
  const minY = 0;
  const maxY = 300;
  const minWidth = 60;
  const maxWidth = 140;
  const minHeight = 30;
  const maxHeight = 80;
  const progress = Math.min(Math.max((scrollY - minY) / (maxY - minY), 0), 1);
  const logoWidth = minWidth + (maxWidth - minWidth) * progress;
  const logoHeight = minHeight + (maxHeight - minHeight) * progress;

  // Calculate translateY for depth effect
  const translateY = progress * 0.5 * logoHeight; // half the logo escapes

  // Calculate dynamic gap for writings
  const minGap = 15; // much tighter initial gap
  const maxGap = 35; // Tailwind space-x-12
  const dynamicGap = minGap + (maxGap - minGap) * progress;

  return (
    <nav className={`bg-white shadow-md py-4 transition-all duration-300 sticky top-0 z-50 flex items-center justify-center`} style={{ overflow: 'visible' }}>
  <div className="relative max-w-4xl w-full flex items-center justify-center mx-auto" style={{ overflow: 'visible' }}>
        <div className="flex items-center w-full justify-center">
          <ul
            className="flex text-lg font-medium text-gray-700 items-center"
            style={{ gap: `${dynamicGap}px`, transition: 'gap 0.3s' }}
          >
            <li>
              <Link href="/aday-ogrenci" className="hover:text-blue-600">Aday öğrenci</Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="hover:text-blue-600">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/akademik" className="hover:text-blue-600">Akademik</Link>
            </li>
          </ul>
          <div style={{ marginLeft: `${dynamicGap}px`, marginRight: `${dynamicGap}px`, transition: 'margin 0.3s' }}>
            <Image
              src="/Dogus.png"
              alt="Dogus Logo"
              width={logoWidth}
              height={logoHeight}
              style={{
                transition: 'all 0.3s',
                transform: `translateY(${translateY}px)`,
                boxShadow: 'none',
              }}
            />
          </div>
          <ul
            className="flex text-lg font-medium text-gray-700 items-center"
            style={{ gap: `${dynamicGap}px`, transition: 'gap 0.3s' }}
          >
            <li>
              <Link href="/ogrenci" className="hover:text-blue-600">Öğrenci</Link>
            </li>
            <li>
              <Link href="/international" className="hover:text-blue-600">International</Link>
            </li>
            <li>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

