import Image from "next/image";

export default function StudyBankSection() {
  return (
    <section className="bg-purple-600 text-white   ">
      <div className="container mx-auto px-4 flex items-center justify-between h-[166px]">
        
        {/* Title */}
        <h1 className="text-6xl font-bold pl-32 pt-12 pb-12">StudyBank</h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6 pr-8">
          {/* Unlocked Docs Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition">
            <Image src="/unlocked.png" alt="Unlocked Docs" width={24} height={24} />
            <span className="font-medium">Unlocked Docs</span>
          </button>

          {/* Uploaded Docs Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition">
            <Image src="/uploaded.png" alt="Uploaded Docs" width={24} height={24} />
            <span className="font-medium">Uploaded Docs</span>
          </button>
        </div>
      </div>
    </section>
  );
}
