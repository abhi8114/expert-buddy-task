import React from 'react'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
const HeroSection = () => {
    return (
        <section className="bg-[#8a2be2] text-white py-8 px-6">
            {/* Header */}
            <NavBar />

            {/* Hero Content */}
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold leading-tight">
                        Accounting Homework <br /> Samples & Study Documents
                    </h1>
                    <p className="mt-4 text-lg">
                        Get Access To Our Online Database Of Accounting Writing Samples.
                    </p>

                    {/* Search Bar */}
                    <SearchBar  />
                </div>

                {/* Right Side Image */}
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <Image
                        src="/image 370.png"
                        alt="Students using laptop"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
