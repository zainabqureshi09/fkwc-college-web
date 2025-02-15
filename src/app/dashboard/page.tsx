"use client";

import { JSX, useState } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../lib/firebaseConfig";
import { 
  FaBook, FaFilePdf, FaVideo, FaBars, 
  FaSignOutAlt, FaClipboardList,
  FaTimes
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LearningMaterials from "../components/Learning";
import Chatbot from "../components/Agent";

const StudentDashboard = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

    function setIsOpen(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }

  return (
    
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
      
     
      {/* Main Content */}
      <div className={`flex-1 p-6 ml-${isSidebarOpen ? "64" : "20"} transition-all`}>
        
        {/* Top Bar */}
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all">
          <h1 className="text-2xl font-bold dark:text-white">Student Dashboard</h1>
          <div className="flex items-center gap-4">
           
          </div>
        </div>

        {/* Learning Materials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">


          <DashboardCard 
            icon={<FaVideo size={40} className="text-red-500" />} 
            title="📺 Video Lectures" 
            description="Watch recorded sessions anytime."
            linkText="Access Videos"
          />
          <DashboardCard 
            icon={<FaFilePdf size={40} className="text-green-500" />} 
            title="📂 PDFs & Notes" 
            description="Download study materials."
            linkText="View PDFs"
          />
          <DashboardCard 
            icon={<FaBook size={40} className="text-blue-500" />} 
            title="🔗 Online Resources" 
            description="Explore external learning sources."
            linkText="Visit Links"
          />
        </div>

        {/* Assignments & Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  <LearningMaterials/>

          {/* Upcoming Assignments */}
          <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" whileHover={{ scale: 1.02 }}>
            <h2 className="text-xl font-semibold dark:text-gray-300 mb-4">📋 Upcoming Assignments</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <AssignmentItem title="📖 Math Homework" dueDate="Feb 20" color="text-red-500" />
              <AssignmentItem title="📜 History Essay" dueDate="Feb 25" color="text-orange-500" />
              <AssignmentItem title="🔬 Science Lab Report" dueDate="Mar 1" color="text-green-500" />
            </ul>
            <br />
            <br />
              {/* Header */}
                      <div className="flex justify-between items-center bg-blue-600 text-white p-3">
                        <h3 className="text-lg font-semibold">💬 Chat with Prof. Zainab</h3>
                        <FaTimes className="cursor-pointer hover:opacity-70 transition" onClick={() => setIsOpen(false)} />
                      </div>
            
                      {/* Embedded Chat */}
                      <iframe
                        src="https://prof-zainab-agent.vercel.app/"
                        className="w-full h-[600px] border-none"
                      ></iframe>
            
          </motion.div>

          {/* Progress Tracker */}
          <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" whileHover={{ scale: 1.02 }}>
            <h2 className="text-xl font-semibold dark:text-gray-300 mb-4">📊 Progress Tracker</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <ProgressItem title="📝 Assignments Completed" progress="8/10" color="text-green-500" />
              <ProgressItem title="📚 Courses Attended" progress="5/6" color="text-blue-500" />
              <ProgressItem title="🎯 Goals Achieved" progress="3/5" color="text-yellow-500" />
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/** Sidebar Link Component */
const SidebarLink = ({ icon, text, isOpen }: { icon: JSX.Element; text: string; isOpen: boolean }) => (
  <Link href="#" className="flex items-center gap-3 hover:text-gray-300">
    {icon}
    {isOpen && <span>{text}</span>}
  </Link>
);

/** Dashboard Card Component */
const DashboardCard = ({ icon, title, description, linkText }: { icon: JSX.Element; title: string; description: string; linkText: string }) => (
  <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all" whileHover={{ scale: 1.05 }}>
    {icon}
    <h2 className="text-xl font-semibold mt-3 dark:text-gray-300">{title}</h2>
    <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    <Link href="#" className="text-blue-600 dark:text-blue-400 mt-2 block">{linkText}</Link>
  </motion.div>
);

/** Assignment Item Component */
const AssignmentItem = ({ title, dueDate, color }: { title: string; dueDate: string; color: string }) => (
  <li className="flex justify-between border-b pb-2">
    <span>{title}</span> <span className={`font-semibold ${color}`}>{dueDate}</span>
  </li>
);

/** Progress Item Component */
const ProgressItem = ({ title, progress, color }: { title: string; progress: string; color: string }) => (
    <>
  <li className="flex justify-between border-b pb-2">
    <span>{title}</span> <span className={`font-semibold ${color}`}>{progress}</span>
  </li>
  
  </>
);

export default StudentDashboard;
