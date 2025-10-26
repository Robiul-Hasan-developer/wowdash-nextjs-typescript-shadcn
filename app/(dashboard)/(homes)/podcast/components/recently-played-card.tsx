
"use client";

import CommonLink from "@/components/shared/common-link";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Podcast {
  id: number;
  title: string;
  host: string;
  image: StaticImageData | string;
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
    <Card className="card h-full rounded-lg border-0 !p-0">
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
