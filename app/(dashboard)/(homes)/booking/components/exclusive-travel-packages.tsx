// import ExclusiveTravelPackagesSlider from "@/components/slider/exclusive-travel-packages-slider";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const ExclusiveTravelPackages = () => {
//     return (
//         <>
//             <div className="flex items-center justify-between mb-4">
//                 <h6 className="text-lg mb-0">Exclusive Travel Packages</h6>
//                 <div className="flex items-center gap-4">
//                     <button type="button" id="instructor-prev" className="slick-prev slick-arrow flex items-center rounded-[50%] border border-neutral-400 text-neutral-600 text-2xl bg-hover-primary-600 hover-text-white justify-center active:scale-90 w-10 h-10 relative top-0 start-0 end-0 transform-unset">
//                         <ChevronLeft className="w-4" />
//                     </button>
//                     <button type="button" id="instructor-next" className="slick-next slick-arrow flex items-center rounded-[50%] border border-neutral-400 text-neutral-600 text-2xl bg-hover-primary-600 hover-text-white justify-center active:scale-90 w-10 h-10 relative top-0 start-0 end-0 transform-unset">
//                         <ChevronRight className="w-4" />
//                     </button>
//                 </div>
//             </div>
//             <ExclusiveTravelPackagesSlider />
//         </>
//     );
// };

// export default ExclusiveTravelPackages;

 
 

import ExclusiveTravelPackagesSlider from "@/components/slider/exclusive-travel-packages-slider";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ExclusiveTravelPackages = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h6 className="text-lg mb-0">Exclusive Travel Packages</h6>
        <div className="flex items-center gap-4">
          {/* Use Carousel buttons here */}
          <CarouselPrevious className="flex items-center rounded-full border border-neutral-400 text-neutral-600 bg-white hover:bg-primary-600 hover:text-white justify-center active:scale-90 w-10 h-10 relative top-0 transform-unset" />
          <CarouselNext className="flex items-center rounded-full border border-neutral-400 text-neutral-600 bg-white hover:bg-primary-600 hover:text-white justify-center active:scale-90 w-10 h-10 relative top-0 transform-unset" />
        </div>
      </div>
      <ExclusiveTravelPackagesSlider />
    </>
  );
};

export default ExclusiveTravelPackages;
