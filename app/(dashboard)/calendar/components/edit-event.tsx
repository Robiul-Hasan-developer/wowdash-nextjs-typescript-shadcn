
"use client"

import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { SquarePen } from "lucide-react";


interface EditEventProps {
    onEditEvent: (event: any) => void;
    event: any;
}


const EditEvent: React.FC<EditEventProps> = ({ onEditEvent, event }) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [name, setName] = React.useState(event.title);
    const [label, setLabel] = React.useState(event.label);
    const [description, setDescription] = React.useState(event.description);
    const [value, setValue] = React.useState(event.startTime);
    const [endValue, setEndValue] = React.useState(event.endTime);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedEvent: any = {
            ...event, // preserve original id
            title: name,
            label,
            description,
            startTime: value,
            endTime: endValue,
            color:
                label === "Personal"
                    ? "bg-green-500"
                    : label === "Business"
                        ? "bg-blue-500"
                        : label === "Family"
                            ? "bg-yellow-500"
                            : label === "Important"
                                ? "bg-purple-500"
                                : "bg-red-500",
        };

        onEditEvent(updatedEvent);
        setDialogOpen(false);
    };

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <span className="cursor-pointer flex items-center gap-2 px-2 py-1 text-neutral-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-sm">
                    <SquarePen className="text-neutral-600 dark:text-white w-4" />
                    View
                </span>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Event</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                    <Input value={value} type="date" onChange={(e) => setValue(e.target.value)} />
                    <Input value={endValue} type="date" onChange={(e) => setEndValue(e.target.value)} />
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    <RadioGroup value={label} onValueChange={(val) => setLabel(val)}>
                        <RadioGroupItem value="Personal" /> Personal
                        <RadioGroupItem value="Business" /> Business
                        <RadioGroupItem value="Family" /> Family
                        <RadioGroupItem value="Important" /> Important
                        <RadioGroupItem value="Holiday" /> Holiday
                    </RadioGroup>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditEvent;