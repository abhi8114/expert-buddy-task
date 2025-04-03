import Image from 'next/image';

const DocumentCard: React.FC = () => {
  return (
    <div className="w-full xs:w-72 sm:w-80 bg-white p-4 sm:p-6 rounded-xl sm:rounded-[25px] shadow-md dm-sans">
      {/* Unlock Button */}
      <button className="w-full flex items-center justify-center gap-2 bg-purple-500 text-white font-semibold py-2 px-4 rounded-full text-sm sm:text-base">
        <Image 
          src="/unlock.svg" 
          alt="Unlock" 
          width={14} 
          height={14} 
          className="w-3 h-3 sm:w-4 sm:h-4"
        />
        Unlock
      </button>

      {/* Features */}
      <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm">
        <p className="flex items-center gap-1 sm:gap-2">
          <Image 
            src="/auth.svg" 
            alt="Study" 
            width={16} 
            height={16} 
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          Only on Studyloop
        </p>
        <p className="flex items-center gap-1 sm:gap-2">
          <Image 
            src="/check-circle-broken.svg" 
            alt="Template" 
            width={16} 
            height={16} 
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          Original Template
        </p>
        <p className="flex items-center gap-1 sm:gap-2">
          <Image 
            src="/download-01.svg" 
            alt="Download" 
            width={16} 
            height={16} 
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          Downloadable
        </p>
      </div>

      {/* Divider */}
      <hr className="my-3 sm:my-4 border-gray-300 border-dotted" />

      {/* Details */}
      <div className="text-xs sm:text-sm space-y-1">
        <p>Content Type:<strong> User generated</strong></p>
        <p>Words: <strong>514</strong></p>
        <p>Pages:<strong> 2</strong></p>
        <p>Level: <strong>High School</strong></p>
        <p>Language: <strong>English</strong></p>
        <p>Reference List:<strong>Yes</strong></p>
        <p>Formatting:<strong>AMA</strong></p>
        <p>Uploaded by: <strong>Brandon Vetrows</strong></p>
        <p>Date:<strong>18/10/2021</strong></p>
      </div>
    </div>
  );
};

export default DocumentCard;