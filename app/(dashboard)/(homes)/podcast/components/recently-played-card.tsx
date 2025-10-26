// import CommonLink from "@/components/shared/common-link";
// import { Card, CardContent } from "@/components/ui/card";

// const RecentlyPlayedCard = () => {
//     return (
//         <Card className="card h-full rounded-lg border-0 !p-0">
//             <CardContent className="card-body p-0 flex flex-col justify-between gap-8">
//                 <div>
//                     {/* Header */}
//                     <div className="card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6">
//                         <div className="flex items-center flex-wrap gap-2 justify-between">
//                             <h6 className="font-bold text-lg mb-0"> Recently Played </h6>
//                             <CommonLink />
//                         </div>
//                     </div>

//                     {/* Podcasters List */}
//                     <div className="card-body py-4 px-6">
//                         <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//                             <div className="col-span-12 sm:col-span-6 lg:col-span-3">
//                                 <div className="">
//                                     <div className="radius-8 overflow-hidden relative">
//                                         <img src="assets/images/home-fourteen/podcast-img1.png" alt="Thumb"
//                                             className="w-full h-full object-fit-cover" />
//                                         <a href="javascript:void(0)"
//                                             className="w-[28px] h-[24px] text-white bg-white bg-opacity-50 flex justify-center items-center absolute start-0 bottom-0 ms-2.5 mb-2.5 rounded-md hover:bg-white hover:text-[#000] text-lg">
//                                             <i className="ri-play-fill leading-none flex"></i>
//                                         </a>
//                                     </div>
//                                     <div className="mt-3">
//                                         <h6 className="text-base mb-0">Talk show </h6>
//                                         <span className="text-sm text-neutral-600 dark:text-neutral-200">Esther Howard</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-span-12 sm:col-span-6 lg:col-span-3">
//                                 <div className="">
//                                     <div className="radius-8 overflow-hidden relative">
//                                         <img src="assets/images/home-fourteen/podcast-img2.png" alt="Thumb"
//                                             className="w-full h-full object-fit-cover" />
//                                         <a href="javascript:void(0)"
//                                             className="w-[28px] h-[24px] text-white bg-white bg-opacity-50 flex justify-center items-center absolute start-0 bottom-0 ms-2.5 mb-2.5 rounded-md hover:bg-white hover:text-[#000] text-lg">
//                                             <i className="ri-play-fill leading-none flex"></i>
//                                         </a>
//                                     </div>
//                                     <div className="mt-3">
//                                         <h6 className="text-base mb-0">Change Life Style </h6>
//                                         <span className="text-sm text-neutral-600 dark:text-neutral-200">Cameron Williamson</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-span-12 sm:col-span-6 lg:col-span-3">
//                                 <div className="">
//                                     <div className="radius-8 overflow-hidden relative">
//                                         <img src="assets/images/home-fourteen/podcast-img3.png" alt="Thumb"
//                                             className="w-full h-full object-fit-cover" />
//                                         <a href="javascript:void(0)"
//                                             className="w-[28px] h-[24px] text-white bg-white bg-opacity-50 flex justify-center items-center absolute start-0 bottom-0 ms-2.5 mb-2.5 rounded-md hover:bg-white hover:text-[#000] text-lg">
//                                             <i className="ri-play-fill leading-none flex"></i>
//                                         </a>
//                                     </div>
//                                     <div className="mt-3">
//                                         <h6 className="text-base mb-0">Neon Lights</h6>
//                                         <span className="text-sm text-neutral-600 dark:text-neutral-200">Leslie Alexander</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-span-12 sm:col-span-6 lg:col-span-3">
//                                 <div className="">
//                                     <div className="radius-8 overflow-hidden relative">
//                                         <img src="assets/images/home-fourteen/podcast-img4.png" alt="Thumb"
//                                             className="w-full h-full object-fit-cover" />
//                                         <a href="javascript:void(0)"
//                                             className="w-[28px] h-[24px] text-white bg-white bg-opacity-50 flex justify-center items-center absolute start-0 bottom-0 ms-2.5 mb-2.5 rounded-md hover:bg-white hover:text-[#000] text-lg">
//                                             <i className="ri-play-fill leading-none flex"></i>
//                                         </a>
//                                     </div>
//                                     <div className="mt-3">
//                                         <h6 className="text-base mb-0">Product Design</h6>
//                                         <span className="text-sm text-neutral-600 dark:text-neutral-200">Bessie Cooper</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// };

// export default RecentlyPlayedCard;










"use client";

import CommonLink from "@/components/shared/common-link";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";

interface Podcast {
  id: number;
  title: string;
  host: string;
  image: string;
}

const podcasts: Podcast[] = [
  {
    id: 1,
    title: "Talk Show",
    host: "Esther Howard",
    image: "/assets/images/home-fourteen/podcast-img1.png",
  },
  {
    id: 2,
    title: "Change Life Style",
    host: "Cameron Williamson",
    image: "/assets/images/home-fourteen/podcast-img2.png",
  },
  {
    id: 3,
    title: "Neon Lights",
    host: "Leslie Alexander",
    image: "/assets/images/home-fourteen/podcast-img3.png",
  },
  {
    id: 4,
    title: "Product Design",
    host: "Bessie Cooper",
    image: "/assets/images/home-fourteen/podcast-img4.png",
  },
];

const RecentlyPlayedCard = () => {
  return (
    <Card className="h-full rounded-lg border-0 !py-0">
      <CardContent className="p-0 flex flex-col justify-between gap-0">
        {/* Header */}
        <div className="border-b border-neutral-200 dark:border-slate-500 py-4 px-6 flex items-center justify-between flex-wrap gap-2">
          <h6 className="font-semibold text-lg mb-0 text-foreground">Recently Played</h6>
          <CommonLink />
        </div>

        {/* Podcast List */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {podcasts.map((podcast) => (
              <div key={podcast.id} className="group">
                <div className="rounded-lg overflow-hidden relative">
                  <Image
                    src={podcast.image}
                    alt={podcast.title}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-130"
                  />
                  <button
                    type="button"
                    aria-label="Play Podcast"
                    className="cursor-pointer w-7 h-6 text-white bg-white/50 flex justify-center items-center absolute left-2.5 bottom-2.5 rounded-md hover:bg-white hover:text-black transition"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-3">
                  <h6 className="text-base font-medium mb-0">{podcast.title}</h6>
                  <span className="text-sm text-muted-foreground">{podcast.host}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentlyPlayedCard;
