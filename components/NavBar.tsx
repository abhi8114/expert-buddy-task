import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, SignInButton, SignUpButton, useUser,SignOutButton } from "@clerk/nextjs";


const NavBar = () => {
  const { isSignedIn } = useUser();
  return (
    <nav className="bg-white shadow-md rounded-full p-3 max-w-[1280px] mx-auto  mt-4 flex items-center justify-between px-6 font-manrope">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={120} height={100} />
        </Link>
        
      </div>

      {/* Center - Links */}
      <div className="hidden lg:flex space-x-6 text-[#16192C] font-medium text-lg  absolute right-[22%] ">
        <Link href="/" className="hover:text-purple-600">Find Tutor</Link>
        <Link href="/" className="hover:text-purple-600">Become Tutor</Link
        >
        
        {isSignedIn ? (
        <SignOutButton>
          <button className="hover:text-purple-600">Sign Out</button>
        </SignOutButton>
      ) : (
        <SignInButton>
          <button className="hover:text-purple-600">Sign In</button>
        </SignInButton>
        )}
      </div>
      

      {/* Right - Call to Action Button */}
     <SignUpButton>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
          Get Started For Free
        </button>
      </SignUpButton>
    </nav>
  );
};

export default NavBar;
