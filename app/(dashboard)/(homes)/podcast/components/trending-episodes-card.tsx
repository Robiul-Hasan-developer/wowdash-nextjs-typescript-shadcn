`
// import CommonLink from "@/components/shared/common-link";
// import { Card, CardContent } from "@/components/ui/card";

// const TrendingEpisodesCard = () => {
//     return (
//         <Card className="card h-full rounded-lg border-0 !p-0">
//             <CardContent className="p-0 flex flex-col justify-between gap-0">
//                 {/* Header */}
                // <div className="border-b border-neutral-200 dark:border-slate-500 py-4 px-6 flex items-center justify-between flex-wrap gap-2">
                //     <h6 className="font-semibold text-lg mb-0 text-foreground">Recently Played</h6>
                //     <CommonLink />
                // </div>

//                 {/* Podcast List */}
//                 <div className="p-6">
//                     <div className="flex flex-col gap-4">
//                         <div className="flex items-center justify-between gap-4">
//                             <div className="flex items-center">
//                                 <img src="assets/images/home-fourteen/trending-img1.png" alt=""
//                                     className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
//                                 <div className="flex-grow-1">
//                                     <h6 className="text-base mb-0 font-medium">Product Design</h6>
//                                     <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
//                                 </div>
//                             </div>
//                             <div className="text-end flex gap-1 justify-end flex-col">
//                                 <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
//                                     mins</span> </span>
//                                 <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-between gap-4">
//                             <div className="flex items-center">
//                                 <img src="assets/images/home-fourteen/trending-img2.png" alt=""
//                                     className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
//                                 <div className="flex-grow-1">
//                                     <h6 className="text-base mb-0 font-medium">How to Change Your Life</h6>
//                                     <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
//                                 </div>
//                             </div>
//                             <div className="text-end flex gap-1 justify-end flex-col">
//                                 <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
//                                     mins</span> </span>
//                                 <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-between gap-4">
//                             <div className="flex items-center">
//                                 <img src="assets/images/home-fourteen/trending-img3.png" alt=""
//                                     className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
//                                 <div className="flex-grow-1">
//                                     <h6 className="text-base mb-0 font-medium">Logo Design</h6>
//                                     <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
//                                 </div>
//                             </div>
//                             <div className="text-end flex gap-1 justify-end flex-col">
//                                 <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
//                                     mins</span> </span>
//                                 <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-between gap-4">
//                             <div className="flex items-center">
//                                 <img src="assets/images/home-fourteen/trending-img3.png" alt=""
//                                     className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
//                                 <div className="flex-grow-1">
//                                     <h6 className="text-base mb-0 font-medium">Good Health</h6>
//                                     <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
//                                 </div>
//                             </div>
//                             <div className="text-end flex gap-1 justify-end flex-col">
//                                 <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
//                                     mins</span> </span>
//                                 <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-between gap-4">
//                             <div className="flex items-center">
//                                 <img src="assets/images/home-fourteen/trending-img4.png" alt=""
//                                     className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
//                                 <div className="flex-grow-1">
//                                     <h6 className="text-base mb-0 font-medium">Episodes Name</h6>
//                                     <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
//                                 </div>
//                             </div>
//                             <div className="text-end flex gap-1 justify-end flex-col">
//                                 <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
//                                     mins</span> </span>
//                                 <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// };

// export default TrendingEpisodesCard;










"use client";
import CommonLink from "@/components/shared/common-link";
import { Card, CardContent } from "@/components/ui/card";
import trendingImg1 from "@/public/assets/images/home-fourteen/trending-img1.png";
import trendingImg2 from "@/public/assets/images/home-fourteen/trending-img2.png";
import trendingImg3 from "@/public/assets/images/home-fourteen/trending-img3.png";
import trendingImg4 from "@/public/assets/images/home-fourteen/trending-img4.png";
import Image, { StaticImageData } from "next/image";

interface PodcastItem {
    id: number;
    title: string;
    host: string;
    duration: string;
    views: string;
    image: StaticImageData | string;
}

const trendingPodcasts: PodcastItem[] = [
    {
        id: 1,
        title: "Product Design",
        host: "Esther Howard",
        duration: "30:05 mins",
        views: "512k",
        image: trendingImg1,
    },
    {
        id: 2,
        title: "How to Change Your Life",
        host: "Cameron Williamson",
        duration: "45:20 mins",
        views: "680k",
        image: trendingImg2,
    },
    {
        id: 3,
        title: "Logo Design",
        host: "Leslie Alexander",
        duration: "28:15 mins",
        views: "325k",
        image: trendingImg3,
    },
    {
        id: 4,
        title: "Good Health",
        host: "Brooklyn Simmons",
        duration: "32:45 mins",
        views: "410k",
        image: trendingImg3,
    },
    {
        id: 5,
        title: "Episodes Name",
        host: "Courtney Henry",
        duration: "38:10 mins",
        views: "590k",
        image: trendingImg4,
    },
];

const TrendingPodcastCard = () => {
    return (
        <Card className="card !p-0 border-0 rounded-xl shadow-none">
            <CardContent className="p-0">
                 <div className="border-b border-neutral-200 dark:border-slate-500 py-4 px-6 flex items-center justify-between flex-wrap gap-2">
                    <h6 className="font-semibold text-lg mb-0 text-foreground">Recently Played</h6>
                    <CommonLink />
                </div>
                
                <div className="flex flex-col gap-5 p-6">
                    {trendingPodcasts.map((podcast) => (
                        <div
                            key={podcast.id}
                            className="flex items-center justify-between gap-4"
                        >
                            {/* Left: Podcast info */}
                            <div className="flex items-center">
                                <Image
                                    src={podcast.image}
                                    alt={podcast.title}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full me-3 object-cover"
                                />
                                <div>
                                    <h6 className="text-base font-medium text-foreground mb-0">
                                        {podcast.title}
                                    </h6>
                                    <span className="text-sm text-muted-foreground font-medium">
                                        {podcast.host}
                                    </span>
                                </div>
                            </div>

                            {/* Right: Duration & Views */}
                            <div className="text-end flex flex-col gap-1">
                                <span className="text-sm">
                                    Durations:{" "}
                                    <span className="font-semibold text-foreground">
                                        {podcast.duration}
                                    </span>
                                </span>
                                <span className="text-sm">
                                    Views:{" "}
                                    <span className="font-semibold text-foreground">
                                        {podcast.views}
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default TrendingPodcastCard;
`