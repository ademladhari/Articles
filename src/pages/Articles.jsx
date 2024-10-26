// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';
import EndlessScroll from './something';
import shen from '../assets/shenminded.png';

import reactt from '../assets/react.svg'; // Import the image
import { useLocation } from 'react-router-dom';


const ReferenceSection = ({references ,isCollapsed = true }) => {

 console.log(references)
  if (isCollapsed) return null;

  return (
    <div className="mb-9 w-[90%] rounded-lg">
      <h3 className="mb-2 mt-1 text-[2vh] font-semibold">References</h3>
      <div className="text-[2vh] space-y-6">
        {references.map((section, index) => (
          <div key={index} className="space-y-1">
            <p className="font-medium">{section.title}</p>
            {section.refs.map((ref, refIndex) => (
              <div key={refIndex} className="ml-4">
                {refIndex + 1}. <a href={ref} className="text-blue-600 hover:underline break-all">{ref}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const location = useLocation();
  const text = location.state?.text; // Get the text from the state
const references=location.state?.ref;
const images=location.state?.images;
const title=location.state?.title;


  if (!text ||!references) return null
  const [isCollapsed, setIsCollapsed] = useState(true); // State to toggle collapse
  function convertToBold(text) {
    // Use a regular expression to find text between double asterisks
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-[2.7vh]">$1</span>');
}
const result = convertToBold(text);

  // Function to toggle collapse state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Mapping of image names to image imports
  const imageMap = {
    reactt: reactt, // Add the key for the *reactt* image
  };


     console.log(result)
  
  return (
    <div className='flex h-screen w-full flex-col items-center overflow-x-hidden bg-[#72B3A5] dark:bg-[#72B3A5]'>
      <img alt={shen} src={shen} className='mr-1 mt-[0.1%] h-[10%] rounded-full' />
      {/* Background container */}
      <div className='justify-top scrollbar-hide mx-auto mt-[0%] flex h-[full] w-[80%] flex-col items-center overflow-auto overflow-y-auto rounded-3xl bg-[#afded4] sm:w-[95%] md:w-[80%] dark:bg-[#afded4]'>
        {/* Content container with constrained height */}
        <p className='mt-12 mb-12 text-center align-text-top text-[3vh] font-bold md:text-[4vh] lg:text-[4vh] xl:text-[4vh]'>
        {title}
        </p>

        <p className='w-[90%] whitespace-pre-wrap break-words text-[1.5vh] text-justify md:text-[2vh] lg:text-[2vh] xl:text-[2.4vh]' dangerouslySetInnerHTML={{ __html: result }} >
       
        </p>

        <div className='mt-[1%] w-[60%] rounded-full border-b-[6px] border-[#72B3A5]'></div>
        <EndlessScroll images={images}/>

        {/* Button to toggle the References section */}
        <div className='flex w-[90%] flex-row justify-start'>
          <button
            onClick={toggleCollapse}
            className='mb-[1%] mt-4 flex gap-2 rounded bg-[#afded4] p-0 py-2 text-black'
            style={{ border: 'none', outline: 'none' }}
          >
            <div className='my-auto'>
              <RxDoubleArrowDown />
            </div>
            {isCollapsed ? 'Show References' : 'Hide References'}
          </button>
        </div>

        {/* Collapsible References Section */}
        
        <ReferenceSection references={references} isCollapsed={isCollapsed}/>
      </div>
    </div>
  );
};

export default Home;
