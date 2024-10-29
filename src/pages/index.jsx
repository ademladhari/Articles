import { useNavigate } from 'react-router-dom';
import tree from '../assets/trees.png';
import flowers from '../assets/flowers.png';
import shen from '../assets/shenminded.png';
import {
  AntarcticaImages,
  AntarcticaReferences,
  AntarcticaText,
  EmotionsImages,
  EmotionsReferences,
  EmotionsText,
  TippingPointsImages,
  TippingPointsReferences,
  TippingPointsText
} from '../Data/Data';

const content = [
  {
    title: "Emotions from the Inside Out!",
    text: EmotionsText,
    ref: EmotionsReferences,
    images: EmotionsImages
  },
  {
    title: "Antarctica",
    text: AntarcticaText,
    ref: AntarcticaReferences,
    images: AntarcticaImages
  },
  {
    title: "Tipping Points",
    text: TippingPointsText,
    ref: TippingPointsReferences,
    images: TippingPointsImages
  }
];

const Index = () => {
  const navigate = useNavigate();
 
  const truncateAtLastFinding = (text) => {
    const index = text.indexOf('**');
    if (index === -1) return text; // If `**` is not found, return the full text
    
    // Truncate up to the point of the `**` characters
    return text.substring(0, index).trim();
  };
  

  const handleContentClick = (text, ref, images, title) => {
    // Truncate the text before navigation
    navigate('/articles', { state: { text: text, ref, images, title } });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden transition-colors duration-300 bg-[#21325E] dark:bg-[#428576]/90">

      <div className="flex justify-center">
        <img
          alt="icon"
          src={shen}
          className="mt-2 h-[20vh] rounded-full"
        />
      </div>

      <img
        src={tree}
        className="absolute bottom-0 left-0 h-screen w-[85%] z-10"
      />
      <img
        src={flowers}
        className="absolute bottom-0 right-0 w-[85%] z-10"
      />

      <div className="relative mx-auto mt-4 h-[65vh] w-[100%] sm:w-[95%] md:w-[80%] rounded-3xl bg-white/10 p-4 z-20">
        <div className="h-full overflow-y-auto w-full scrollbar-hide">
          <div className="px-3 py-2">
            {content.map((item, index) => {
              const truncatedText = truncateAtLastFinding(item.text);
              return (
                <div
                  key={index}
                  className="mb-4 group"
                  onClick={() => handleContentClick(item.text, item.ref, item.images, item.title)}
                >
                  <div className="transform rounded-3xl bg-[#287BA9] p-6 dark:bg-[#b0f5e6] transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-xl">
                    <h2 className="mb-4 text-2xl font-medium text-[#E0B0E7] dark:text-[#287BA9]">
                      {item.title}
                    </h2>
                    <p className="text-base font-bold text-white dark:text-[#334f49] text-wrap line-clamp-6">
                      {truncatedText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;