"use client";
import CustomOrderForm from "@/components/CustomOrderForm";
import CustomWorkOrderForm from "@/components/CustomWorkOrderForm";
import DocsByType from "@/components/DocsByTypeSlider";
 // Importing mock API for now
import NavBar from "@/components/HeroSection";
import HeroSection from "@/components/HeroSection";
import MidSection from "@/components/MidSection";

export default function HomePage() {
  

  return (
    <div className="bg-[#F5F3EF]">
    <HeroSection />

    

      {/* Filter Component */}
      <MidSection />

      <CustomWorkOrderForm />
      <DocsByType />
      <CustomOrderForm />

     
    </div>
  );
}
