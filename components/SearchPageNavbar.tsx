"use client";
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function SearchPageNavbar() {
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-3 sm:py-4 px-4 sm:px-6 flex justify-between items-center">
      {/* Left Section: Logo & Links */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image 
              src="/logo.svg" 
              alt="Buddy Logo" 
              width={100} 
              height={34} 
              className="w-24 sm:w-32"
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-black font-medium font-manrope pl-52 ">
          <a href="#" className="hover:text-purple-600 transition-colors">StudyBank</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Find Tutor</a>
          <a href="#" className=" ">Homework</a>
          <button className="border rounded-xl  p-2 text-[14px] bg-[#FAF3FD] ml-16">Refer a Friend </button>
        </div>
      </div>

      {/* Right Section: Auth & Profile */}
      <div className="flex items-center gap-4 sm:gap-6">
        {isSignedIn ? (
          <>
            {/* User Profile Button (Provided by Clerk) */}
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            {/* Show Sign In & Sign Up Buttons if not logged in */}
            <SignInButton>
              <button className="hidden xs:inline text-purple-600 font-medium hover:underline text-sm sm:text-base">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="border border-purple-600 px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium text-purple-600 hover:bg-purple-50 text-sm sm:text-base transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
          <div className="flex flex-col gap-4 text-gray-700 font-medium">
            <a 
              href="#" 
              className="hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              StudyBank
            </a>
            <a 
              href="#" 
              className="hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Tutor
            </a>
            <a 
              href="#" 
              className="text-purple-600 font-semibold py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Homework
            </a>
            
            {!isSignedIn && (
              <div className="flex flex-col gap-3 mt-2">
                <SignInButton>
                  <button 
                    className="text-purple-600 font-medium hover:underline py-2 text-left"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button 
                    className="border border-purple-600 px-4 py-2 rounded-lg font-medium text-purple-600 hover:bg-purple-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}