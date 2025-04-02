import { FaFileAlt } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";

interface CardProps {
  subject: string;
  type: string;
  words: number;
  content: string;
}

export default function Card({ subject, type, words,content }: CardProps) {
  return (
    <div className=" p-6 rounded-4xl border-[6px] border-[#3829A305] bg-white w-[370px] h-[300px]">
    <h2 className="text-xl font-bold text-gray-900">{subject}</h2>
    <p className="text-gray-500 mt-2">{content}</p>

    {/* Word Count & Pages */}
    <div className="flex items-center gap-6 mt-4 text-gray-700 text-sm">
      <div className="flex items-center gap-2">
        <FaFileAlt className="text-purple-600" />
        <span className="font-semibold">Words:</span> {words}
      </div>
      <div className="flex items-center gap-2">
        <BsFileText className="text-purple-600" />
        <span className="font-semibold">Pages:</span> {String(Math.ceil(words / 275)).padStart(2, "0")}
      </div>
    </div>
  </div>
  );
}
