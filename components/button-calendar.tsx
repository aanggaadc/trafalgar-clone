"use client";

import { useState, useEffect, PropsWithChildren } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ButtonCalendarProps extends PropsWithChildren {
  isActive: boolean;
}

const ButtonCalendar: React.FC<ButtonCalendarProps> = ({
  children,
  isActive,
}) => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`w-[70px] h-[30px] flex items-center text-[#2d5a7b] justify-center font-bold font-noto-sans ${isActive && "bg-[#2d5a7b] text-white"}`}
        >
          {children}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default ButtonCalendar;
