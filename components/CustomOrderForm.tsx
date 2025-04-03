'use client';
import React, { useState } from 'react';

interface PricingFormProps {
    onSubmit?: (formData: FormData) => void;
}

interface FormData {
    workType: string;
    academicLevel: string;
    deadline: string;
    pages: number;
}

const CustomOrderForm: React.FC<PricingFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        workType: '',
        academicLevel: '',
        deadline: '',
        pages: 1,
    });

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
        <div className="mt-10 sm:mt-16 md:mt-20 bg-gradient-to-r from-purple-600 to-purple-500 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg max-w-3xl mx-4 sm:mx-6 md:mx-8 xl:mx-30">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
                Can't find the right project for you? Place a custom order now!
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                    <label className="block mb-1 sm:mb-2 text-xs sm:text-sm">Project Type</label>
                    <select
                        className="w-full p-2 sm:p-3 rounded-lg bg-white text-gray-700 text-sm sm:text-base"
                        value={formData.workType}
                        onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                    >
                        <option value="">Select project type</option>
                        {['Application Essay', 'Research Paper', 'Case Study', 'Thesis'].map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-1 sm:mb-2 text-xs sm:text-sm">Education Level</label>
                    <select
                        className="w-full p-2 sm:p-3 rounded-lg bg-white text-gray-700 text-sm sm:text-base"
                        value={formData.academicLevel}
                        onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                    >
                        <option value="">Select Education Level</option>
                        {['High School', 'Undergraduate', 'Masters', 'PhD'].map((level) => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-1 sm:mb-2 text-xs sm:text-sm">Deadline</label>
                    <select
                        className="w-full p-2 sm:p-3 rounded-lg bg-white text-gray-700 text-sm sm:text-base"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    >
                        <option value="">Select Deadline</option>
                        {['24 Hours', '48 Hours', '3 Days', '1 Week', '2 Weeks'].map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-1 sm:mb-2 text-xs sm:text-sm">Pages</label>
                    <div className="flex items-center bg-white rounded-lg overflow-hidden">
                        <button
                            className="px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:bg-gray-100 text-sm sm:text-base"
                            onClick={decrementPages}
                        >
                            -
                        </button>
                        <span className="flex-1 text-center text-gray-800 text-xs sm:text-sm md:text-base">
                            {formData.pages} page{formData.pages !== 1 ? 's' : ''}/{formData.pages * 275} words
                        </span>
                        <button
                            className="px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:bg-gray-100 text-sm sm:text-base"
                            onClick={incrementPages}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row mt-3 sm:mt-4 gap-2 sm:gap-0'>
                <input
                    type="text"
                    placeholder="Please fill up the form to find out the price"
                    className="w-full sm:w-[80%] p-2 sm:p-3 rounded-lg bg-white text-gray-600 placeholder-gray-500 text-xs sm:text-sm"
                    disabled
                />

                <button
                    className="w-full sm:w-[20%] py-2 sm:py-3 bg-black text-white rounded-full sm:rounded-[100px] font-bold hover:bg-gray-900 sm:ml-3 md:ml-4 text-sm sm:text-base"
                    onClick={handleSubmit}
                >
                    Get it Done
                </button>
            </div>
        </div>
    );
};

export default CustomOrderForm;