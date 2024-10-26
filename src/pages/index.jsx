import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import tree from '../assets/trees.png';
import flowers from '../assets/flowers.png';
import shen from '../assets/shenminded.png';
import { AntarcticaImages, AntarcticaReferences, AntarcticaText, EmotionsImages, EmotionsReferences, EmotionsText, TippingPointsImages, TippingPointsReferences, TippingPointsText } from '../Data/Data';

// Data for content
const content = [
  {
    title: "Emotions from the Inside Out!",
 text:EmotionsText
    ,ref:EmotionsReferences
     ,images:EmotionsImages

  },
  {
    title: "Antarctica",
    text: AntarcticaText
    ,ref:AntarcticaReferences
    ,images:AntarcticaImages


  },
  {
    title: "Tipping Points",
    text: TippingPointsText  
    ,ref:TippingPointsReferences
    ,images:TippingPointsImages

  }
];

const Index = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle content click
  const handleContentClick = (text,ref,images,title) => {
    navigate('/articles', { state: { text: text,ref:ref ,images:images,title:title} }); // Navigate to home with the content text
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#21325E] dark:bg-[#72B3A5]">
      {/* Header image */}
      <div className="flex justify-center">
        <img 
          alt="icon" 
          src={shen} 
          className="mt-2 h-[20vh] rounded-full"
        />
      </div>

      {/* Background images */}
      <img 
        src={tree} 
        className="absolute bottom-0 left-0 h-screen w-[85%] z-10" 
      />
      <img 
        src={flowers} 
        className="absolute bottom-0 right-0 w-[85%] z-10" 
      />

      {/* Main content container */}
      <div className="relative mx-auto mt-4 h-[65vh] w-[100%] sm:w-[95%] md:w-[80%] rounded-3xl bg-white/10 p-4 z-20">
        {/* Scrollable content */}
        <div className="h-full overflow-y-auto w-full overflow-x-hidden scrollbar-hide">
          {content.map((item, index) => (
            <div key={index} className="mb-4" onClick={() => handleContentClick(item.text,item.ref,item.images,item.title)}>
              <div className="transform rounded-3xl bg-[#287BA9] p-6 transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl dark:bg-[#ecfffb]">
                <h2 className="mb-4 text-2xl font-medium text-[#E0B0E7]">
                  {item.title}
                </h2>
                <p className="text-base font-bold text-white dark:text-[#334f49] text-wrap line-clamp-6">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
