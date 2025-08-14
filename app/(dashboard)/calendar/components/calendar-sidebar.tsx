"use client";

import { cn } from '@/lib/utils';
import { EllipsisVertical, Eye, SquarePen, Trash } from 'lucide-react';
import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from 'react-hot-toast';
import AddEvent from './add-event';
import { Card, CardContent } from "@/components/ui/card";

interface CalendarEvent {
    id: number;
    title: string;
    color: string;
    time: string;
}

const eventsData: CalendarEvent[] = [
    { id: 1, title: 'Design Conference', color: 'bg-yellow-500', time: 'Today, 10:30 PM - 02:30 AM' },
    { id: 2, title: 'Weekend Festival', color: 'bg-green-600', time: 'Today, 10:30 PM - 02:30 AM' },
    { id: 3, title: 'Design Conference', color: 'bg-cyan-600', time: 'Today, 10:30 PM - 02:30 AM' },
    { id: 4, title: 'Ultra Europe 2019', color: 'bg-yellow-500', time: 'Today, 10:30 PM - 02:30 AM' },
    { id: 5, title: 'Design Conference', color: 'bg-violet-600', time: 'Today, 10:30 PM - 02:30 AM' },
];

const CalendarSidebar: React.FC = () => {

    const [events, setEvents] = useState<CalendarEvent[]>(eventsData);

    // Bring Data From child component
    const handleAddEvent = (newEvent: CalendarEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
    }

    const handleRemoveEventItem = (eventId: number) => {
        const filteredEventData = events.filter((filterItem) => eventId !== filterItem.id);
        setEvents(filteredEventData);

        const deletedEvent = events.find((event) => event.id === eventId);
        if (deletedEvent) {
            toast.success(
                <span>
                    <strong>{deletedEvent.title}</strong> <br /> Event deleted successfully!
                </span>
            );
        }
    }

    return (
        <Card className="card h-full rounded-lg border-0 !p-0">
            <CardContent className="card-body p-0">
                <div className="p-6">
                    <AddEvent onAddEvent={handleAddEvent} />
                </div>

                <div className="space-y-4 max-h-[1032px] overflow-y-auto p-6 pt-0">
                    {
                        events.length > 0 ? (
                            <>
                                {events.map((event) => (
                                    <div
                                        key={event.id}
                                        className="event-item flex items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-600"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2.5">
                                                <span className={cn('w-3 h-3 rounded-full font-medium', event.color)}></span>
                                                <span className="text-secondary-light">{event.time}</span>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mt-1.5">
                                                {event.title}
                                            </span>
                                        </div>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="inline-flex items-center p-2 text-xl font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                                <EllipsisVertical width={18} />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <Eye className="text-neutral-600 dark:text-white" />
                                                    View
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <SquarePen className="text-neutral-600 dark:text-white" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer" onClick={() => handleRemoveEventItem(event.id)}>
                                                    <Trash className="text-neutral-600 dark:text-white" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="text-center">
                                <span className="text-xl text-neutral-800 ">Event not found!</span>
                            </div>
                        )
                    }
                </div>
            </CardContent>
        </Card>

    );
};

export default CalendarSidebar;