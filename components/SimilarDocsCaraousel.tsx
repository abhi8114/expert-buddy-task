"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mockCards } from "@/data";
import Image from "next/image";


export default function SimilarDocsCaraousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (

        <div className=" py-16 px-6">
            <Image
                src="/vector.svg"
                alt="Vector"
                width={60}
                height={80}
                className="absolute left-10 lg:left-[26%]  xl:left-[31%]   "
            />
            <h1 className="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-7 text-center">
                Similar Documents
            </h1>

            <div className="container mx-auto mt-10">
                <Slider {...settings}>
                    {mockCards.map((doc) => (
                        <div key={doc.id} className="p-4 ">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 h-[300px]">
                                <h3 className="text-xl font-semibold">{doc.subject}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{doc.content}</p>

                                <div className="mt-4 border-t pt-3 flex justify-between text-gray-500 text-sm">
                                    <span className="flex items-center gap-1">
                                         <Image src="/document-copy.png" alt="pages" width={16} height={16} className="w-4 h-4 " />Words: <b>{doc.words}</b>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        📑 Pages: <b>{doc.words.toString().padStart(2, "0")}</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
            

        </div>
    );
}


// Custom Arrow Components
function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <button
            className="absolute -bottom-12 left-1/2 translate-x-1 bg-white border border-gray-300 p-3 rounded-lg shadow-lg hover:bg-gray-100"
            onClick={onClick}
        >
            <Image src="/right-arrow.png" alt="right-arrow" width={20} height={20} />
        </button>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <button
            className="absolute -bottom-12 right-1/2 -translate-x-1 bg-white border border-gray-300 p-3 rounded-lg shadow-lg hover:bg-gray-100"
            onClick={onClick}
        >
            <Image src="/left-arrow.png" alt="left-arrow" width={20} height={20} />
        </button>
    );
}
