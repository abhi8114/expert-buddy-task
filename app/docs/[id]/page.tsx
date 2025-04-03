"use client";

import { mockCards } from "@/data";
import NavBar from "@/components/NavBar";
import { useUser, SignUpButton } from "@clerk/nextjs";
import SimilarDocsCaraousel from "@/components/SimilarDocsCaraousel";
import { useParams } from "next/navigation";
import DocumentCard from "@/components/DocumentCard";
import Image from "next/image";

interface Props {
  params: { id?: string };
}

export default function DocDetail() {
  const { isSignedIn } = useUser();
  const params = useParams();

  const document = mockCards.find((doc) => doc.id === Number(params.id));

  if (!document) {
    return <h1 className="text-3xl text-center py-10">Document not found</h1>;
  }

  return (
    <div className="bg-[#F5F3EF]">
      {/* Top Section with Header */}
      <section className="bg-[url('/patterned-bg.jpg')] bg-purple-900 bg-cover bg-center bg-blend-overlay text-white py-6 sm:py-8 px-4 sm:px-6">
        <NavBar />

        <div className="container mx-auto flex flex-col md:flex-row items-center h-auto sm:h-[426px] pt-8 sm:pt-0">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {document.subject}
            </h1>
            <p className="mt-2 sm:mt-4 text-base sm:text-lg">
              <span className="font-semibold">Document Type:</span> {document.type}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 py-6 sm:py-10">
        {/* Document Content  */}
        <div className="w-full lg:w-2/3 lg:pr-6 pb-6 lg:pb-0 flex justify-center">
          <div className="relative bg-white p-4 sm:p-6 rounded-2xl lg:rounded-3xl w-full max-w-[770px] min-h-[500px] sm:h-[1000px]">
            {/* Document Header */}
            <h2 className="text-xl sm:text-2xl font-semibold">Document 1</h2>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs sm:text-sm">Java</span>
              <span className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs sm:text-sm">Code</span>
              <span className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs sm:text-sm">Programming</span>
            </div>

            {/* Blurred Content for Unauthorized Users */}
            {!isSignedIn && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md rounded-xl dm-sans">
                <div className="text-center bg-white w-full sm:w-[550px] h-auto sm:h-[388px] p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl flex flex-col items-center justify-center mx-4">
                  {/* Icon */}
                  <img
                    src="/Frame.jpg"
                    alt="Document Icon"
                    className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4"
                  />

                  {/* Title */}
                  <p className="text-2xl sm:text-4xl font-bold text-gray-900">
                    Sign Up To View The Full Document!
                  </p>

                  {/* Subtitle */}
                  <p className="text-[#6B7B93] mt-1 sm:mt-2 text-xs sm:text-sm">
                    Lorem ipsum dolor sit amet consectetur. Mi nisl sit feugiat
                    fringilla morbi. Egestas vestibulum leo curabitur eget a
                    commodo.
                  </p>

                  {/* Sign Up Button */}
                  <SignUpButton>
                    <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white font-medium flex justify-center items-center gap-2 rounded-full shadow-lg hover:bg-purple-700 transition-all w-full max-w-[500px]">
                      <span className="flex items-center gap-2">
                        <Image src="/unlock.svg" alt="Unlock" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                        Sign Up
                      </span>
                    </button>
                  </SignUpButton>
                </div>
              </div>
            )}

            {/* Document Content (Blurred for Guests) */}
            <div
              className="mt-4 sm:mt-6 border-4 sm:border-[10px] border-[#F5F3EF] rounded-xl sm:rounded-2xl p-3 sm:p-4"
              style={{
                maxWidth: "100%",
                wordBreak: "break-word",
                overflowX: "hidden",
                overflowY: "auto",
              }}
            >
              <p className={`mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 ${!isSignedIn ? "blur-sm select-none" : ""}`}>
                {document.content}
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">Words: {document.words}</p>
            </div>

            {/* Downloadable Files Section */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4">
              <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 text-gray-700 rounded text-xs sm:text-sm">
                📄 project1_instruction.pdf
              </button>
              <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 text-gray-700 rounded text-xs sm:text-sm">
                📄 document.docx
              </button>
            </div>
          </div>
        </div>

        {/* Document Card - Comes second in DOM for mobile */}
        <div className="w-full lg:w-1/3 px-0 lg:px-6 pt-6 lg:pt-10 flex justify-center lg:block">
          <DocumentCard />
        </div>
      </div>

      {/* Similar Documents Carousel */}
      <SimilarDocsCaraousel />
    </div>
  );
}