import side from "../assets/images/side.png";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 sm:hidden lg:flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[400px] lgl:h-[680px] z-10 object-contain"
        src={side}
        alt="Banner illustration" // Changed alt text for better accessibility
        loading="lazy" // Added lazy loading for performance optimization
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-shadowOne flex justify-center items-center"></div>
    </FadeIn>
  );
};

export default RightBanner;
