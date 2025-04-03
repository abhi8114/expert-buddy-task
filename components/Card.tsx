import { FaFileAlt } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";
import Link from "next/link";

interface CardProps {
  id: string;
  subject: string;
  type: string;
  words: number;
  content: string;
}

export default function Card({ id, subject, type, words, content }: CardProps) {
  return (
    <Link href={`/docs/${id}`} passHref>
  <div className="p-4 sm:p-6 rounded-3xl sm:rounded-4xl border-4 sm:border-[6px] border-[#3829A305] bg-white 
                w-[180px] xs:w-[180px] sm:w-[200px] md:w-[370px] 
                h-[150px] xs:h-[170px] sm:h-[200px] md:h-[300px]
                cursor-pointer hover:shadow-lg transition duration-300">
    
    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 line-clamp-2">{subject}</h2>
    <p className="text-xs xs:text-sm sm:text-base text-gray-500 mt-1 sm:mt-2 line-clamp-2">
      {content.substring(0, window.innerWidth < 640 ? 30 : 50)}...
    </p>

    {/* Word Count & Pages */}
    <div className="flex flex-col xs:flex-row xs:items-center xs:gap-6 gap-2 mt-2 sm:mt-4 text-gray-700 text-xs xs:text-sm">
      <div className="flex items-center gap-1 xs:gap-2">
        <FaFileAlt className="text-purple-600 text-sm xs:text-base" />
        <span className="font-semibold">Words:</span> {words}
      </div>
      <div className="flex items-center gap-1 xs:gap-2">
        <BsFileText className="text-purple-600 text-sm xs:text-base" />
        <span className="font-semibold">Pages:</span> {String(Math.ceil(words / 275)).padStart(2, "0")}
      </div>
    </div>
  </div>
</Link>
  );
}
