"use client";
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function SearchPageNavbar() {
  const { isSignedIn } = useUser(); // Check if user is signed in

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Left Section: Logo & Links */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Buddy Logo" width={120} height={40} />
         
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600">StudyBank</a>
          <a href="#" className="hover:text-purple-600">Find Tutor</a>
          <a href="#" className="text-purple-600 font-semibold">Homework</a>
        </div>
      </div>

      {/* Right Section: Auth & Profile */}
      <div className="flex items-center gap-6">
        {isSignedIn ? (
          <>
            {/* Icons: Chat, Help, Notifications */}
           

            {/* User Profile Button (Provided by Clerk) */}
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            {/* Show Sign In & Sign Up Buttons if not logged in */}
            <SignInButton>
              <button className="text-purple-600 font-medium hover:underline">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="border border-purple-600 px-4 py-2 rounded-lg font-medium text-purple-600 hover:bg-purple-50">
                Sign Up
              </button>
            </SignUpButton>
          </>
        )}


      </div>
      
    </nav>
  );
}
