import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import travelPackageImg3 from "@/public/assets/images/home-twelve/travel-img3.png";
import travelPackageImg4 from "@/public/assets/images/home-twelve/travel-img4.png";
import travelPackageImg5 from "@/public/assets/images/home-twelve/travel-img5.png";
import { User } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ExclusiveTravelPackagesSliders {
    id: number;
    image: StaticImageData;
    title: string;
    duration: string;
    price: string;
    user: string;
}

export const exclusiveTravelPackagesSliderData: ExclusiveTravelPackagesSliders[] = [
    {
        id: 1,
        image: travelPackageImg3,
        title: "Paris",
        duration: "5 Days, 6 Nights",
        price: "$12,000",
        user: "280",
    },
    {
        id: 2,
        image: travelPackageImg4,
        title: "Maldives",
        duration: "4 Days, 5 Nights",
        price: "$8,500",
        user: "150",
    },
    {
        id: 3,
        image: travelPackageImg3,
        title: "Bali",
        duration: "6 Days, 7 Nights",
        price: "$7,200",
        user: "320",
    },
    {
        id: 4,
        image: travelPackageImg4,
        title: "New York",
        duration: "5 Days, 6 Nights",
        price: "$11,400",
        user: "410",
    },
    {
        id: 5,
        image: travelPackageImg5,
        title: "Tokyo",
        duration: "7 Days, 8 Nights",
        price: "$13,600",
        user: "275",
    },
];

function ExclusiveTravelPackagesSlider() {
    return (
        <Carousel className="w-full mt-5"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselPrevious />
            <CarouselNext />
            
            <CarouselContent>
            {exclusiveTravelPackagesSliderData.map((card) => (
                <CarouselItem key={card.id} className="basis-1/2 lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
                    <div className="bg-white dark:bg-dark-2 p-1.5 rounded-xl">
                        <div className="rounded-lg overflow-hidden">
                            <Image src={card.image} alt={card.title}
                                className="w-full h-full object-fit-cover" />
                        </div>
                        <div className="p-2 pt-4">
                            <h6 className="text-md mb-1">{card.title}</h6>
                            <span className="text-neutral-600">{card.duration}</span>
                            <div className="mt-2.5 flex items-center justify-between gap-10">
                                <span className="font-semibold text-neutral-600 text-sm">{card.price}</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-blue-600 line-height-1 text-md font-medium">
                                        <User className="w-4" />
                                    </span>
                                    <span className="text-sm font-medium">({card.user})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        </Carousel >
    );
}

export default ExclusiveTravelPackagesSlider;
