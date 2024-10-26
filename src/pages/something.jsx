import React, { useState } from 'react';



const EndlessScroll = ({images}) => {
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
        className="absolute left-[-30%] z-20 h-[30px] w-[10%] rounded-lg bg-[#72B3A5] p-1 text-white focus:outline-none sm:h-[35px] sm:w-[15%] md:left-[-25%] md:h-[30px] md:w-[30px] lg:left-[-25%] lg:h-[40px] lg:w-[10%] xl:h-[50px] xl:w-[15%]"
      >
        ←
      </button>

      {/* Carousel container */}
      <div className="relative mx-2 flex items-center justify-center sm:mx-4">
        {/* Previous image (left and behind the main image, close) */}
        <img
          src={images[getPreviousIndex(activeIndex)].url}
          alt={images[getPreviousIndex(activeIndex)].alt}
          className="absolute left-[-20px] z-0 h-[60px] w-[60px] -translate-x-4 transform rounded-lg opacity-75 transition-transform duration-500 ease-in-out sm:left-[-30px] sm:h-[80px] sm:w-[80px] sm:-translate-x-6 lg:left-[-60px] lg:h-[210px] lg:w-[210px] lg:-translate-x-8"
        />

        {/* Static main image */}
        <div className="relative z-10 mx-2 h-[100px] w-[100px] overflow-hidden rounded-lg sm:mx-4 sm:h-[140px] sm:w-[140px] lg:h-[300px] lg:w-[300px]">
          {console.log(images[activeIndex].url)}
          <img
            src={images[activeIndex].url}
            alt={images[activeIndex].alt}
            className="h-full w-full rounded-lg bg-inherit"
          />
        </div>

        {/* Next image (right and behind the main image, close) */}
        <img
          src={images[getNextIndex(activeIndex)].url}
          alt={images[getNextIndex(activeIndex)].alt}
          className="absolute right-[-20px] z-0 h-[60px] w-[60px] translate-x-4 transform rounded-lg opacity-75 transition-transform duration-500 ease-in-out sm:right-[-30px] sm:h-[80px] sm:w-[80px] sm:translate-x-6 lg:right-[-60px] lg:h-[210px] lg:w-[210px] lg:translate-x-8"
        />

      </div>


      {/* Scroll Right Button */}
      <button
        onClick={() => handleScroll('right')}
        className="absolute right-[-30%] z-20 flex h-[20px] w-[20px] justify-center rounded-lg bg-[#72B3A5] p-1 align-middle text-[1vh] text-white focus:outline-none sm:h-[35px] sm:w-[10%] md:right-[-25%] md:h-[30px] md:w-[30px] md:text-[2vh] lg:right-[-25%] lg:h-[40px] lg:w-[10%] lg:text-[2vh] xl:h-[50px] xl:w-[15%] xl:text-[2vh]"
      >
        →
      </button>
    </div>
  );
};

export default EndlessScroll;
