// components/Footer.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://x.com/Zainab345690"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com/firozakhatoon.college/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/zainab-ayaz-3081482b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Firoza Khatoon Women College. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
