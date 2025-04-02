"use client";
import { ReactNode } from "react";
import SearchPageNavbar from "@/components/SearchPageNavbar";
import StudyBankSection from "@/components/StudyBankSection";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className=" ">
      {/* Navbar */}
      <SearchPageNavbar />
      <StudyBankSection />

      {/* Main Content */}
      <main className="flex-grow ">
        <div className="">{children}</div>
      </main>

      {/* Footer */}
      
    </div>
  );
}
