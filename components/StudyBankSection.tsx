import Image from "next/image";

export default function StudyBankSection() {
  return (
    <section className="bg-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[166px] py-6 sm:py-0">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:pl-8 md:pl-16 lg:pl-32 pt-0 sm:pt-12 pb-4 sm:pb-12 text-center sm:text-left w-full sm:w-auto">
          StudyBank
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-0 sm:mt-6 pr-0 sm:pr-8 w-full sm:w-auto">
          {/* Unlocked Docs Button */}
          <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition text-sm sm:text-base">
            <Image 
              src="/unlocked.png" 
              alt="Unlocked Docs" 
              width={20} 
              height={20} 
              className="w-4 h-4 sm:w-6 sm:h-6"
            />
            <span className="font-medium">Unlocked Docs</span>
          </button>

          {/* Uploaded Docs Button */}
          <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition text-sm sm:text-base">
            <Image 
              src="/uploaded.png" 
              alt="Uploaded Docs" 
              width={20} 
              height={20} 
              className="w-4 h-4 sm:w-6 sm:h-6"
            />
            <span className="font-medium">Uploaded Docs</span>
          </button>
        </div>
      </div>
    </section>
  );
}