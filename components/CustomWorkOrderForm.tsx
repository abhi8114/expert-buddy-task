import React, { useState } from 'react';

interface PricingFormProps {
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  workType: string;
  academicLevel: string;
  deadline: string;
  pages: number;
  price: number;
}

const CustomWorkOrderForm: React.FC<PricingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    workType: 'Application Essay',
    academicLevel: 'Undergraduate/Bachelor',
    deadline: '',
    pages: 1,
    price: 15.00
  });

  const handleWorkTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, workType: e.target.value });
  };

  const handleAcademicLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, academicLevel: e.target.value });
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, deadline: e.target.value });
  };

  const decrementPages = () => {
    if (formData.pages > 1) {
      setFormData({ ...formData, pages: formData.pages - 1 });
    }
  };

  const incrementPages = () => {
    setFormData({ ...formData, pages: formData.pages + 1 });
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-[url('/patterned-bg.jpg')] bg-purple-900 bg-cover bg-center bg-blend-overlay p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl sm:rounded-4xl text-white max-w-3xl mx-4 sm:mx-6 lg:mx-8 xl:mx-30 mt-10 sm:mt-16 md:mt-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">Calculate Price and Order a Custom Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Work Type */}
        <div>
          <label className="block mb-1 sm:mb-2 text-sm sm:text-base">Type of Work</label>
          <select
            value={formData.workType}
            onChange={handleWorkTypeChange}
            className="bg-white text-gray-600 p-3 sm:p-4 rounded-lg w-full text-sm sm:text-base"
          >
            {['Application Essay', 'Research Paper', 'Case Study', 'Thesis'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Academic Level */}
        <div>
          <label className="block mb-1 sm:mb-2 text-sm sm:text-base">Academic Level</label>
          <select
            value={formData.academicLevel}
            onChange={handleAcademicLevelChange}
            className="bg-white text-gray-600 p-3 sm:p-4 rounded-lg w-full text-sm sm:text-base"
          >
            {['High School', 'Undergraduate/Bachelor', 'Masters', 'PhD'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label className="block mb-1 sm:mb-2 text-sm sm:text-base">Deadline</label>
          <select
            value={formData.deadline}
            onChange={handleDeadlineChange}
            className="bg-white text-gray-600 p-3 sm:p-4 rounded-lg w-full text-sm sm:text-base"
          >
            <option value="">Select Deadline</option>
            {['24 Hours', '48 Hours', '3 Days', '1 Week', '2 Weeks'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Pages */}
        <div>
          <label className="block mb-1 sm:mb-2 text-sm sm:text-base">Pages</label>
          <div className="flex items-center rounded-lg overflow-hidden bg-white">
            <button
              className="p-2 sm:p-3 md:p-4 text-gray-600 hover:bg-gray-100 flex items-center justify-center text-sm sm:text-base"
              onClick={decrementPages}
            >
              -
            </button>

            <div className="flex-grow text-center text-gray-600 text-xs sm:text-sm md:text-base">
              {formData.pages} page{formData.pages !== 1 ? 's' : ''}/{formData.pages * 275} words
            </div>

            <button
              className="p-2 sm:p-3 md:p-4 text-gray-600 hover:bg-gray-100 flex items-center justify-center text-sm sm:text-base"
              onClick={incrementPages}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Price and Order */}
      <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row items-center w-full gap-3 sm:gap-4">
        {/* Price Block (full width on mobile, 2/3 on larger screens) */}
        <div className="bg-white text-gray-600 p-3 sm:p-4 rounded-lg flex justify-between items-center w-full sm:w-2/3">
          <div className="text-xs sm:text-sm font-bold">Your Price</div>
          <div className="flex space-x-1 sm:space-x-2">
            <span className="text-gray-400 line-through text-xs sm:text-sm">
              ${(19.50 * formData.pages).toFixed(2)}
            </span>
            <span className="text-black font-bold text-xs sm:text-sm">
              ${(15.00 * formData.pages).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Order Button (full width on mobile, auto width on larger screens) */}
        <button
          className="bg-gray-900 hover:bg-black text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-bold w-full sm:w-auto text-sm sm:text-base"
          onClick={handleSubmit}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default CustomWorkOrderForm;