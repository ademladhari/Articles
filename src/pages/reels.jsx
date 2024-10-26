import React, { useState } from 'react';

const images = [
    { id: 1, url: 'https://via.placeholder.com/150/FF0000', alt: 'Red Image' },
    { id: 2, url: 'https://via.placeholder.com/150/00FF00', alt: 'Green Image' },
    { id: 3, url: 'https://via.placeholder.com/150/0000FF', alt: 'Blue Image' },
    { id: 4, url: 'https://via.placeholder.com/150/FFFF00', alt: 'Yellow Image' },
    { id: 5, url: 'https://via.placeholder.com/150/FF00FF', alt: 'Pink Image' }
];

const EndlessScroll = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Middle image is set as active

    const handleScroll = (direction) => {
        if (direction === 'left') {
            setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        } else if (direction === 'right') {
            setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }
    };

    const getPreviousIndex = (index) => (index === 0 ? images.length - 1 : index - 1);
    const getNextIndex = (index) => (index === images.length - 1 ? 0 : index + 1);

    return (
        <div className="relative mt-6 flex h-full items-center justify-center">
            {/* Scroll Left Button */}
            <button
                onClick={() => handleScroll('left')}
                className="absolute left-[-10%] z-20 h-[30px] w-[10%] rounded-lg bg-[#72B3A5] p-1 text-white focus:outline-none sm:h-[35px] sm:w-[15%] lg:h-[40px] lg:w-[5%] xl:h-[50px] xl:w-[15%]"
            >
                ←
            </button>

            {/* Carousel container */}
            <div className="relative mx-2 flex items-center justify-center sm:mx-4">
                {/* Previous of Previous image (far left) */}
                <img
                    src={images[getPreviousIndex(getPreviousIndex(activeIndex))].url}
                    alt={images[getPreviousIndex(getPreviousIndex(activeIndex))].alt}
                    className="absolute left-[-90px] z-0 h-[150px] w-[100px] -translate-x-4 transform rounded-lg transition-transform duration-500 ease-in-out sm:left-[-120px] sm:h-[180px] sm:w-[120px] sm:-translate-x-6 lg:left-[-160px] lg:h-[300px] lg:w-[220px] lg:-translate-x-8"
                />

                {/* Previous image (left and behind the main image, close) */}
                <img
                    src={images[getPreviousIndex(activeIndex)].url}
                    alt={images[getPreviousIndex(activeIndex)].alt}
                    className="absolute left-[-40px] z-0 h-[180px] w-[120px] -translate-x-4 transform rounded-lg transition-transform duration-500 ease-in-out sm:left-[-50px] sm:h-[210px] sm:w-[140px] sm:-translate-x-6 lg:left-[-80px] lg:h-[320px] lg:w-[240px] lg:-translate-x-8"
                />

                {/* Static main image (active image, central position) */}
                <div className="relative z-10 mx-2 h-[200px] w-[140px] overflow-hidden rounded-lg shadow-lg sm:mx-4 sm:h-[240px] sm:w-[180px] lg:h-[400px] lg:w-[300px]">
                    <img
                        src={images[activeIndex].url}
                        alt={images[activeIndex].alt}
                        className="h-full w-full rounded-lg object-cover"
                    />
                </div>

                {/* Next image (right and behind the main image, close) */}
                <img
                    src={images[getNextIndex(getNextIndex(activeIndex))].url}
                    alt={images[getNextIndex(getNextIndex(activeIndex))].alt}
                    className="absolute right-[-90px] z-0 h-[150px] w-[100px] translate-x-4 transform rounded-lg transition-transform duration-500 ease-in-out sm:right-[-120px] sm:h-[180px] sm:w-[120px] sm:translate-x-6 lg:right-[-160px] lg:h-[300px] lg:w-[220px] lg:translate-x-8"
                />
                <img
                    src={images[getNextIndex(activeIndex)].url}
                    alt={images[getNextIndex(activeIndex)].alt}
                    className="absolute right-[-40px] z-0 h-[180px] w-[120px] translate-x-4 transform rounded-lg transition-transform duration-500 ease-in-out sm:right-[-50px] sm:h-[210px] sm:w-[140px] sm:translate-x-6 lg:right-[-80px] lg:h-[320px] lg:w-[240px] lg:translate-x-8"
                />

                {/* Next of Next image (far right) */}

            </div>

            {/* Scroll Right Button */}
            <button
                onClick={() => handleScroll('right')}
                className="absolute right-[-10%] z-20 h-[30px] w-[10%] rounded-lg bg-[#72B3A5] p-1 text-white focus:outline-none sm:h-[35px] sm:w-[15%] lg:h-[40px] lg:w-[5%] xl:h-[50px] xl:w-[15%]"
            >
                →
            </button>
        </div>
    );
};

export default EndlessScroll;
