import React from "react";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="bg-white shadow-md rounded-full p-3 max-w-[1280px] mx-auto  mt-4 flex items-center justify-between px-6 ">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={120} height={100} />
        </Link>
        
      </div>

      {/* Center - Links */}
      <div className="hidden md:flex space-x-6 text-gray-700">
        <Link href="/find-tutor" className="hover:text-purple-600">Find Tutor</Link>
        <Link href="/become-tutor" className="hover:text-purple-600">Become Tutor</Link>
        <Link href="/signin" className="hover:text-purple-600">Sign In</Link>
      </div>

      {/* Right - Call to Action Button */}
      <Link href="/signup">
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
          Get Started For Free
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
