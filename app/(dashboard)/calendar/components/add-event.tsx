import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarDays, SquarePlus } from 'lucide-react';

const AddEvent = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={cn('h-11 justify-center w-full')}>
                    <SquarePlus width={22} />
                    Add Event
                </Button>
            </DialogTrigger>
            <DialogContent className='!max-w-[800px] p-0'>
                <div className="">

                    <DialogHeader className=''>
                        <div className="py-4 px-6 border-b border-neutral-200 dark:border-neutral-600 flex items-center justify-between">
                            <DialogTitle>Add New Event</DialogTitle>
                        </div>
                    </DialogHeader>

                    <div className="p-6">
                        <form action="#">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label htmlFor="title" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Event Title : </label>
                                    <Input type="text" id="title" className="form-control border-neutral-300 px-5 shadow-none w-full h-[46px] rounded-lg" placeholder="Enter Event Title" />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="startDate" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Start Date</label>
                                    <div className=" relative">
                                        <Input className="form-control border-neutral-300 px-5 shadow-none w-full h-[46px] rounded-lg bg-white dark:bg-neutral-700" id="startDate" type="text" placeholder="03/12/2024, 10:30 AM" />
                                        <span className="absolute end-0 top-1/2 -translate-y-1/2 me-3 line-height-1">
                                            <CalendarDays width={20} className='text-neutral-500' />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="endDate" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">End Date </label>
                                    <div className=" relative">
                                        <Input className="form-control border-neutral-300 px-5 shadow-none w-full h-[46px] rounded-lg bg-white dark:bg-neutral-700" id="endDate" type="text" placeholder="03/12/2024, 2:30 PM" />
                                        <span className="absolute end-0 top-1/2 -translate-y-1/2 me-3 line-height-1">
                                            <CalendarDays width={20} className='text-neutral-500' />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <div className="">
                                        <RadioGroup defaultValue="Personal" className='flex items-center flex-wrap gap-7'>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Personal" id="Personal" className='border border-neutral-400' />
                                                <Label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Personal">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                    Personal
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Business" id="Business" className='border border-neutral-400' />
                                                <Label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Business">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                    Business
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Family" id="Family" className='border border-neutral-400' />
                                                <Label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Family">
                                                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                                    Family
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Important" id="Important" className='border border-neutral-400' />
                                                <Label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Important">
                                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                                    Important
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Holiday" id="Holiday" className='border border-neutral-400' />
                                                <Label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Holiday">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                    Holiday
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="desc" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Description</label>
                                    <Textarea className="form-control border-neutral-300 px-5 shadow-none w-full h-[120px]" id='desc' placeholder='Write some text...' />
                                </div>
                                <div className="col-span-12">
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit">Save changes</Button>
                                    </DialogFooter>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AddEvent;