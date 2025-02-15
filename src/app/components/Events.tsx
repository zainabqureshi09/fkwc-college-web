"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

// Dynamic Typing Effect
const typingTexts = [
  "A Pathway to Excellence",
  "Empowering Women Through Education",
  "Join Us for a Brighter Future!",
];

export default function Events() {
  const [animationData, setAnimationData] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorColorIndex, setCursorColorIndex] = useState(0);

  const cursorColors = ["#1E90FF", "#FF4500", "#32CD32", "#FFD700"];

  useEffect(() => {
    fetch("/animations/learning.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  // Typing Effect Logic
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < typingTexts[textIndex].length) {
        setDisplayText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === typingTexts[textIndex].length) {
        setIsDeleting(true);
        setTimeout(() => setIsDeleting(false), 1000);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
        setCharIndex(0);
        setCursorColorIndex((prev) => (prev + 1) % cursorColors.length);
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white max-w-3xl px-5">
          <motion.h1
            className={`${merienda.className} text-5xl md:text-6xl font-bold leading-tight`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span className="text-blue-400">Firoza Khatoon Women College</span>
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl flex justify-center">
            {displayText}
            <motion.span
              className="w-2 h-6 md:h-7 inline-block ml-1"
              style={{ backgroundColor: cursorColors[cursorColorIndex] }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            ></motion.span>
          </p>
          <motion.a
            href="#explore"
            className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Explore Courses
          </motion.a>
        </div>
      </section>

      {/* Learning Made Easy Section */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className={`${merienda.className} text-4xl md:text-5xl font-bold text-blue-600`}>
          Learning Made Easy
        </h2>
        {animationData && (
          <motion.div
            className="w-80 md:w-96 mx-auto mt-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Lottie animationData={animationData} loop={true} />
          </motion.div>
        )}
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <h2
          className={`${merienda.className} text-4xl md:text-5xl font-bold text-center text-blue-600`}
        >
          Upcoming Events
        </h2>

        <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
          {/* Left Side Images */}
          <div className="flex flex-col space-y-6">
            {["/events/event1.jpg", "/events/event2.jpg"].map(
              (src, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.3 }}
                >
                  <Image
                    src={src}
                    alt={`Event ${index + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </motion.div>
              )
            )}
          </div>

          {/* Right Side Images */}
          <div className="flex flex-col space-y-6">
            {["/events/event3.jpg", "/events/event4.jpg"].map(
              (src, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.3 }}
                >
                  <Image
                    src={src}
                    alt={`Event ${index + 3}`}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
