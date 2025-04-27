"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface MySelectProps {
  placeholder?: string;
  options: string[];
  value?: string;
}

export function MySelect({ placeholder = "Select", options, value}: MySelectProps) {
  return (
    <Select value={value}>
      <SelectTrigger className="min-w-[88px] focus-visible:shadow-none focus-visible:ring-0 font-medium dark:bg-slate-700 text-neutral-900 dark:text-white border border-neutral-300 data-[placeholder]:text-neutral-900">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
