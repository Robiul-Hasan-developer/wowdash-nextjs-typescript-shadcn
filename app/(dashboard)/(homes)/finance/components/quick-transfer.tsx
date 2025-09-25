import CommonLink from "@/components/shared/common-link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

const QuickTransfer: React.FC = () => {
    return (
        <Card className="card h-full rounded-lg border-0 !p-0 block">
            <CardContent className="card-body p-0 h-full">
                <div>
                    {/* Header */}
                    <div className="card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6">
                        <div className="flex items-center flex-wrap gap-2 justify-between">
                            <h6 className="font-bold text-lg mb-0">Quick Transfer</h6>
                            <CommonLink />
                        </div>
                    </div>

                    <div className="card-body p-0">
                        <div className="p-5">
                            <div className="relative z-[1] py-8 text-center px-4">
                                <img src="assets/images/home-eleven/bg/bg-orange-gradient.png" alt="Image" className="absolute top-0 start-0 w-full h-full -z-[1]" />
                                <h3 className="text-white">$500.00</h3>
                                <span className="text-white">Your Balance</span>
                            </div>
                        </div>

                        <div className="px-6 bg-neutral-100 dark:bg-neutral-600/25 border-bottom-0 py-5 dark-bg-neutral-200">
                            <div className="flex items-center flex-wrap gap-2 justify-between">
                                <h6 className="font-bold text-lg mb-0">Contacts</h6>
                                <CommonLink />
                            </div>
                        </div>

                        <div className="py-4 px-6">
                            <div className="officer-slider flex items-center gap-4 overflow-hidden">
                                <div className="officer-slider__item flex flex-col text-center items-center justify-center">
                                    <div className="officer-slider__thumb w-14 h-14 rounded-full overflow-hidden flex-shrink-0 mx-8">
                                        <img src="assets/images/home-eleven/officer-img1.png" alt="Image" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="officer-slider__content mt-6 min-w-max">
                                        <h6 className="mb-0 text-xl">Mr. Bin</h6>
                                        <span className="text-sm text-neutral-600">Insurance officer</span>
                                    </div>
                                </div>
                                <div className="officer-slider__item flex flex-col text-center items-center justify-center">
                                    <div className="officer-slider__thumb w-14 h-14 rounded-full overflow-hidden flex-shrink-0 mx-8">
                                        <img src="assets/images/home-eleven/officer-img2.png" alt="Image" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="officer-slider__content mt-6 min-w-max">
                                        <h6 className="mb-0 text-xl">Mr. Robiul</h6>
                                        <span className="text-sm text-neutral-600">Insurance officer</span>
                                    </div>
                                </div>
                                <div className="officer-slider__item flex flex-col text-center items-center justify-center">
                                    <div className="officer-slider__thumb w-14 h-14 rounded-full overflow-hidden flex-shrink-0 mx-8">
                                        <img src="assets/images/home-eleven/officer-img3.png" alt="Image" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="officer-slider__content mt-6 min-w-max">
                                        <h6 className="mb-0 text-xl">Mr. Deo</h6>
                                        <span className="text-sm text-neutral-600">Insurance officer</span>
                                    </div>
                                </div>
                                <div className="officer-slider__item flex flex-col text-center items-center justify-center">
                                    <div className="officer-slider__thumb w-14 h-14 rounded-full overflow-hidden flex-shrink-0 mx-8">
                                        <img src="assets/images/home-eleven/officer-img4.png" alt="Image" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="officer-slider__content mt-6 min-w-max">
                                        <h6 className="mb-0 text-xl">Mr. Riad</h6>
                                        <span className="text-sm text-neutral-600">Insurance officer</span>
                                    </div>
                                </div>
                                <div className="officer-slider__item flex flex-col text-center items-center justify-center">
                                    <div className="officer-slider__thumb w-14 h-14 rounded-full overflow-hidden flex-shrink-0 mx-8">
                                        <img src="assets/images/home-eleven/officer-img5.png" alt="Image" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="officer-slider__content mt-6 min-w-max">
                                        <h6 className="mb-0 text-xl">Mr. Alex</h6>
                                        <span className="text-sm text-neutral-600">Insurance officer</span>
                                    </div>
                                </div>
                                <div className="officer-slider__item flex flex-col text-center items-center justify-center">
                                    <div className="officer-slider__thumb w-14 h-14 rounded-full overflow-hidden flex-shrink-0 mx-8">
                                        <img src="assets/images/home-eleven/officer-img2.png" alt="Image" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="officer-slider__content mt-6 min-w-max">
                                        <h6 className="mb-0 text-xl">Mr. John</h6>
                                        <span className="text-sm text-neutral-600">Insurance officer</span>
                                    </div>
                                </div>
                            </div>

                            <form action="#" className="mt-10">
                                <div className="mb-5">
                                    <Label
                                        htmlFor="Description"
                                        className="font-semibold mb-2 font-semibold block text-neutral-900 dark:text-white"
                                    >
                                        Write Short Description
                                    </Label>
                                    <Textarea
                                        id="Description"
                                        placeholder="Enter a Description..."
                                        className="border border-neutral-200 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary rounded-lg px-5 !shadow-none !ring-0 h-[120px]"
                                    />
                                </div>
                                <div className="">
                                    <Label
                                        htmlFor="amount"
                                        className="font-semibold mb-2 font-semibold block text-neutral-900 dark:text-white"
                                    >
                                        Amount
                                    </Label>
                                    <div className="flex gap-5">
                                        <Input
                                            id="amount"
                                            placeholder="Ex: $200"
                                            className="border border-neutral-200 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary h-12 rounded-s-lg px-5 !shadow-none !ring-0"
                                        />
                                        <Button className={cn(`h-12 px-8`)}>
                                            Send
                                            <Send className="w-6" />
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
};

export default QuickTransfer;