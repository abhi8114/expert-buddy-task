"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: string;
  subject: string;
  type: string;
  words: number;
  content: string;
}

export default function Card({ id, subject, type, words, content }: CardProps) {
  const [contentLength, setContentLength] = useState(50); // Default length

  useEffect(() => {
    // Update content length based on screen size
    const updateContentLength = () => {
      setContentLength(window.innerWidth < 640 ? 30 : 50);
    };

    updateContentLength(); // Set initial value
    window.addEventListener("resize", updateContentLength);

    return () => window.removeEventListener("resize", updateContentLength);
  }, []);

  return (
    <Link href={`/docs/${id}`} passHref>
    <div className="relative p-4 sm:p-6 rounded-3xl sm:rounded-4xl border-4 sm:border-[6px] border-[#3829A305] bg-white 
                w-[180px] xs:w-[180px] sm:w-[200px] md:w-[370px] 
                h-[150px] xs:h-[170px] sm:h-[200px] md:h-[300px]
                cursor-pointer hover:shadow-lg transition duration-300 flex flex-col">
      
      {/* Content at top */}
      <div className="flex-grow">
        <h2 className="text-sm xs:text-base sm:text-lg md:text-3xl font-bold text-black line-clamp-2 dm-sans">{subject}</h2>
        <p className="text-xs xs:text-sm sm:text-base text-[#727982] mt-1 sm:mt-2 line-clamp-2 dm-sans">
          {content.substring(0, contentLength)}...
        </p>
      </div>
      <div className="border-t border-gray-200 mt-3"></div>
      {/* Word Count & Pages at bottom */}
      <div className="flex justify-between items-end mt-auto pt-2 sm:pt-4 text-gray-500 text-xs xs:text-sm dm-sans">
        <div className="flex items-center gap-1 xs:gap-2">
          <Image src="/clipboard-text.png" alt="Word" width={16} height={16} className="w-4 h-4 " />
          <span className="font-semibold text-base">Words:</span> {words}
        </div>
        <div className="flex items-center gap-1 xs:gap-2">
        <Image src="/document-copy.png" alt="pages" width={16} height={16} className="w-4 h-4 " />
          <span className="font-semibold text-base">Pages:</span> {String(Math.ceil(words / 275)).padStart(2, "0")}
        </div>
      </div>
    </div>
  </Link>
  );
}
