"use client";

import HTMLFlipBook from "react-pageflip";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const months = [
  { name: "July 2024", img: "/calendar/jul-24.jpg" },
  { name: "August 2024", img: "/calendar/aug-24.jpg" },
  { name: "September 2024", img: "/calendar/sep-24.jpg" },
  { name: "October 2024", img: "/calendar/oct-24.jpg" },
  { name: "November 2024", img: "/calendar/nov-24.jpg" },
  { name: "December 2024", img: "/calendar/dec-24.jpg" },
  { name: "January 2025", img: "/calendar/jan-25.jpg" },
  { name: "February 2025", img: "/calendar/feb-25.jpg" },
  { name: "March 2025", img: "/calendar/mar-25.jpg" },
  { name: "April 2025", img: "/calendar/apr-25.jpg" },
  { name: "May 2025", img: "/calendar/may-25.jpg" },
  { name: "June 2025", img: "/calendar/jun-25.jpg" },
];

const Book = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="shadow-xl bg-white p-6 rounded-lg">
        <h2 className="text-center text-3xl font-bold mb-4">📖 Academic Calendar</h2>

        {/* <HTMLFlipBook width={500} height={650} className="shadow-lg" style={undefined} children={undefined} startPage={0} size={"fixed"} minWidth={0} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={false} flippingTime={0} usePortrait={false} startZIndex={0} autoSize={false} maxShadowOpacity={0} showCover={false} mobileScrollSupport={false} clickEventForward={false} useMouseEvents={false} swipeDistance={0} showPageCorners={false} disableFlipByClick={false}>
          {months.map((month, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-center text-2xl font-semibold mb-2">{month.name}</h3>
              <Image src={month.img} alt={month.name} width={450} height={600} className="rounded-lg" />
            </div>
          ))}
        </HTMLFlipBook> */}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button className="p-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            <FaChevronLeft size={20} />
          </button>
          <button className="p-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
