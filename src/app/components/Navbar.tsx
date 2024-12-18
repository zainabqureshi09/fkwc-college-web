'use client';

import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
// import { TiInfo } from "react-icons/ti";
import { MdOutlineHelpCenter } from "react-icons/md";
// import { FaChalkboardTeacher } from "react-icons/fa";
import { MdImportContacts } from "react-icons/md";
// import { FaGraduationCap } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { BiSolidInstitution } from "react-icons/bi";
import { FaRobot } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className='text-xl text-blue-800 font-serif text-center' href="/">
      <Image
      src="/logo.png"
      width={120}
      height={120}
      quality={100}
      alt="Picture of logo"
      className='rounded-full p-4 m-2'
    />
    </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">

          
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:dark:bg-white dark:border-gray-7080">
          
          <li className='p-5 text-blue-800 font-serif text-center'><Link href="/"><FaHome size={30} className='text-blue-800 hover:text-blue-400'/>Home</Link></li>
          <li className='p-5 text-blue-800 font-serif text-center'><Link href="/about"><MdOutlineHelpCenter size={30} className='text-blue-800 hover:text-blue-400' />About</Link></li>
          <li className='p-5 text-blue-800 font-serif text-center'><Link href="/subjects"><MdImportContacts size={30} className='text-blue-800 hover:text-blue-400' />Subjects</Link></li>
          <li className='p-5 text-blue-800 font-serif text-center'><Link href="/admissions"><BiSolidInstitution  size={30} className='text-blue-800 hover:text-blue-400' />Admissions</Link></li>
          <li className='p-5 text-blue-800 font-serif text-center'><Link href="/contact"><MdContactPhone size={30} className='text-blue-800 hover:text-blue-400' />Contact</Link></li>
          <li className='p-5 text-blue-800 font-serif text-center'><Link href="/student"><PiStudentFill size={30} className='text-blue-800 hover:text-blue-400' />Our Students</Link></li>
          <li className='p-5 text-blue-800 font-serif text-center'><Link href="/faculty"><BsMicrosoftTeams size={30} className='text-blue-800 hover:text-blue-400' />Our Faculty</Link></li>
          <li className='p-5 text-blue-800 font-serif text-center'><Link href="https://elevenlabs.io/app/talk-to?agent_id=AU2KRyGpfAaERGx9pTvR" target='blank'><FaRobot size={30} className='text-blue-800 hover:text-blue-400' />Our AI Agent</Link></li>
          </ul>
        </div>
        <button 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-200 dark:hover:bg-blue-500 dark:focus:ring-blue-700" aria-controls="navbar-default" aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-200">
          <ul className='bg-gray-200'>
            <li className='p-5 text-blue-800 font-serif text-right'><Link href="/" onClick={() => setIsMenuOpen(false)}><FaHome size={20} className='text-blue-800 hover:text-blue-400  '/>Home</Link></li>
          <li className=' p-5 text-blue-800 font-serif text-right'><Link href="/about" onClick={() => setIsMenuOpen(false)}><MdOutlineHelpCenter size={20} className='text-blue-800 hover:text-blue-400' />About</Link></li>
          <li className=' p-5 text-blue-800 font-serif text-right'><Link href="/subjects" onClick={() => setIsMenuOpen(false)}><MdImportContacts size={20} className='text-blue-800 hover:text-blue-400' /></Link>Subjects</li>
          <li className='p-5 text-blue-800 font-serif text-right'><Link href="/admissions" onClick={() => setIsMenuOpen(false)}><BiSolidInstitution  size={20} className='text-blue-800 hover:text-blue-400' />Admissions</Link></li>
          <li className=' p-5 text-blue-800 font-serif text-right'><Link href="/contact" onClick={() => setIsMenuOpen(false)}><MdContactPhone size={20} className='text-blue-800 hover:text-blue-400' />Contact</Link></li>
          <li className=' p-5 text-blue-800 font-serif text-right'><Link href="/student" onClick={() => setIsMenuOpen(false)}><PiStudentFill size={20} className='text-blue-800 hover:text-blue-400' />Our Students</Link></li>
          <li className=' p-5 text-blue-800 font-serif text-right'><Link href="/faculty" onClick={() => setIsMenuOpen(false)}><BsMicrosoftTeams size={20} className='text-blue-800 hover:text-blue-400' />Our Faculty</Link></li>
          <li className=' p-5 text-blue-800 font-serif text-right'><Link href="https://elevenlabs.io/app/talk-to?agent_id=AU2KRyGpfAaERGx9pTvR" target='blank' onClick={() => setIsMenuOpen(false)}><FaRobot size={20} className='text-blue-800 hover:text-blue-400' />Our AI Agent</Link></li>

          </ul>
        </div>
      )}
    </nav>
  );
}
