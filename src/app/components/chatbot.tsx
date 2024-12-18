// components/ChatBotIcon.tsx
import Link from 'next/link';
import React from 'react';
import { FaCommentDots } from 'react-icons/fa';


const  ChatBotIcon  = () => {
    
  return (
    <div>
       <div
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-500 transition-all duration-300"

    >
         <Link
         
      href="https://www.facebook.com/jeb.fkwc" 
      target="_blank"
      rel="noopener noreferrer"
      > <FaCommentDots size={30} /></Link>
     
    </div>
    </div>
  )
}

export default ChatBotIcon

