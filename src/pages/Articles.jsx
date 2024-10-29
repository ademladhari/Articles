import React, { useState } from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';
import EndlessScroll from './something';
import shen from '../assets/shenminded.png';
import { Link, useLocation } from 'react-router-dom';

const ReferenceSection = ({ references, isCollapsed = true }) => {
  if (isCollapsed) return null;

  return (
    <div className="mb-9 w-[90%] rounded-lg">
      <h3 className="mb-2 mt-1 text-[2vh] font-semibold text-teal-50 dark:text-teal-900">
        References
      </h3>
      <div className="text-[2vh] space-y-6 text-teal-100 dark:text-teal-800">
        {references.map((section, index) => (
          <div key={index} className="space-y-1">
            <p className="font-medium">{section.title}</p>
            {section.refs.map((ref, refIndex) => (
              <div key={refIndex} className="ml-4">
                {refIndex + 1}.{' '}
                <a 
                  href={ref} 
                  className="text-teal-200 hover:text-teal-100 dark:text-teal-600 dark:hover:text-teal-700 hover:underline break-all"
                >
                  {ref}
                </a>
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
  const text = location.state?.text;
  const references = location.state?.ref;
  const images = location.state?.images;
  const title = location.state?.title;

  if (!text || !references) return null;
  
  const [isCollapsed, setIsCollapsed] = useState(true);

  function convertToBold(text) {
    return text.replace(
      /\*\*(.*?)\*\*/g, 
      '<span class="font-bold text-[2.7vh] text-teal-200 dark:text-teal-700">$1</span>'
    );
  }
  
  const result = convertToBold(text);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center overflow-x-hidden bg-[#21325E] dark:bg-[#428576]/90 transition-colors duration-300">
     <Link className='mt-[0.1%] h-[15%] ' to="/">
     <img 
        alt="profile" 
        src={shen} 
        className="mr-1 rounded-full   h-[100%]  " 
      />
      </Link> 
      
      <div className="justify-top scrollbar-hide mx-auto mt-[0%] flex h-[full] w-[80%] flex-col items-center overflow-auto overflow-y-auto rounded-3xl bg-[#287BA9]/90 dark:bg-[#b0f5e6]/80 sm:w-[95%] md:w-[80%] transition-colors duration-300">
        <h1 className="mt-12 mb-12 text-center align-text-top text-[3vh] font-bold md:text-[4vh] lg:text-[4vh] xl:text-[4vh] text-[#E0B0E7] dark:text-teal-700">
          {title}
        </h1>

        <p 
          className="w-[90%] whitespace-pre-wrap break-words text-[1.5vh] text-justify md:text-[2vh] lg:text-[2vh] xl:text-[2.4vh] text-white dark:text-[#334f49]" 
          dangerouslySetInnerHTML={{ __html: result }} 
        />

        <div className="mt-[1%] w-[60%] rounded-full border-b-[6px] border-[#72B3A5] dark:border-[#72B3A5]/70" />
        
        <EndlessScroll images={images} />

        <div className="flex w-[90%] flex-row justify-start">
          <button
            onClick={toggleCollapse}
            className="mb-[1%] mt-4 flex gap-2 rounded bg-[#afded4] dark:bg-[#72B3A5] p-0 py-2 px-4 text-[#334f49] dark:text-white hover:bg-[#9ecfc4] dark:hover:bg-[#61a294] transition-colors duration-300"
          >
            <div className="my-auto">
              <RxDoubleArrowDown className={`transform transition-transform duration-300 ${
                !isCollapsed ? 'rotate-180' : ''
              }`} />
            </div>
            {isCollapsed ? 'Show References' : 'Hide References'}
          </button>
        </div>

        <ReferenceSection references={references} isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default Home;