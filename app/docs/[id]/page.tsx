"use client";

import { mockCards } from "@/data";
import NavBar from "@/components/NavBar";
import { useUser, SignUpButton } from "@clerk/nextjs"; // Clerk hooks
import SimilarDocsCaraousel from "@/components/SimilarDocsCaraousel";
import { useParams } from "next/navigation";
import DocumentCard from "@/components/DocumentCard";
import Image from "next/image";
interface Props {
  params: { id?: string };
}

export default function DocDetail() {
  const { isSignedIn } = useUser(); // Check authentication
  const params = useParams();

  const document = mockCards.find((doc) => doc.id === Number(params.id));

  if (!document) {
    return <h1 className="text-3xl text-center py-10">Document not found</h1>;
  }

  return (
    <div className="bg-[#F5F3EF]">
      {/* Top Section with Header */}
      <section className="bg-[url('/patterned-bg.jpg')] bg-purple-900 bg-cover  bg-center bg-blend-overlay text-white py-8 px-6">
        <NavBar />

        <div className="container mx-auto flex flex-col md:flex-row items-center h-[426px]">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-6xl font-bold leading-tight">{document.subject}</h1>
            <p className="mt-4 text-lg">
              <span className="font-semibold">Document Type:</span> {document.type}
            </p>
          </div>
        </div>
      </section>
      <div className="flex">
        {/* Document Content */}
        <div className=" px-6 py-10 flex justify-center w-2/3">
          <div className="relative bg-white p-6 rounded-3xl  w-[770px] h-[1000px]">
            {/* Document Header */}
            <h2 className="text-2xl font-semibold">Document 1</h2>

            {/* Tags Section */}
            <div className="flex space-x-2 mt-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Code</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Programming</span>
            </div>

            {/* Blurred Content for Unauthorized Users */}
            !isSignedIn && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md rounded-2xl dm-sans">
              <div className="text-center bg-white w-[550px] h-[388px] p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                {/* Icon */}
                <img
                  src="/Frame.jpg"
                  alt="Document Icon"
                  className="w-16 h-16 mb-4"
                />

                {/* Title */}
                <p className="text-4xl font-bold text-gray-900">
                  Sign Up To View The Full Document!
                </p>

                {/* Subtitle */}
                <p className="text-[#6B7B93] mt-2 text-[14px]">
                  Lorem ipsum dolor sit amet consectetur. Mi nisl sit feugiat
                  fringilla morbi. Egestas vestibulum leo curabitur eget a
                  commodo.
                </p>

                {/* Sign Up Button */}
                <SignUpButton>
                  <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-medium flex items-center gap-2 rounded-full shadow-lg hover:bg-purple-700 transition-all w-[500px]">
                    <span className="flex  items-center gap-2 ">
                      <Image src="/unlock.svg" alt="Unlock" width={20} height={20} />
                      Sign Up
                    </span>
                  </button>
                </SignUpButton>

              </div>
            </div>
        )}

            {/* Document Content (Blurred for Guests) */}
            <div
              className="mt-6 border-[10px] border-[#F5F3EF] rounded-2xl p-4"
              style={{
                maxWidth: "100%", // Prevents X-axis overflow
                wordBreak: "break-word", // Ensures text wraps inside container
                overflowX: "hidden", // Prevents horizontal scrolling
                overflowY: "auto", // Allows vertical scrolling if content is too long
              }}
            >
              <p className={`mt-4 text-gray-600 ${!isSignedIn ? "blur-sm select-none" : ""}`}>
                {document.content}
              </p>
              <p className="mt-2 text-gray-500">Words: {document.words}</p>
            </div>

            {/* Downloadable Files Section */}
            <div className="mt-6 flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                📄 project1_instruction.pdf
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                📄 document.docx
              </button>
            </div>

          </div>

        </div>
        <div className="w-1/3 px-6 py-10">
          <DocumentCard />

        </div>
      </div>


      {/* Similar Documents Carousel */}
      <SimilarDocsCaraousel />
    </div>
  );
}
