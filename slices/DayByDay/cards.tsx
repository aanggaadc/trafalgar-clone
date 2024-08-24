"use client";

import { useState, useCallback } from "react";
import { Simplify } from "@/prismicio-types";
import { Content, GroupField } from "@prismicio/client";
import { ChevronDown } from "lucide-react";
import ItineraryCard from "@/components/itinerary-card";
import { DownloadDocumentIcon, PrintIcon } from "@/components/icons";

interface CardsProps {
  items: GroupField<Simplify<Content.DayByDaySliceDefaultPrimaryItemsItem>>;
  experiences: (Content.DayExperiencesDocument<string> | undefined)[];
}

const Cards: React.FC<CardsProps> = ({ items, experiences }) => {
  const [openAll, setOpenAll] = useState<boolean | undefined>(undefined);

  const onToggle = useCallback(() => {
    setOpenAll((prev) => !prev);
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-between pb-6 px-4 lg:p-0">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-[#2d5a7b] font-noto-sans font-semibold text-sm lg:text-base">
            <DownloadDocumentIcon className="lg:w-6 lg:h-6" />
            Download itinerary
          </button>

          <button className="hidden items-center gap-2 text-[#2d5a7b] font-noto-sans font-semibold text-sm lg:text-base lg:flex">
            <PrintIcon className="lg:w-6 lg:h-6" />
            Print itinerary
          </button>
        </div>
        <button
          className="py-[calc(1rem_-_1px)] text-sm flex items-center gap-2 font-noto-sans lg:text-base font-bold text-gray"
          onClick={onToggle}
        >
          {openAll ? "Collapse All Days" : "Expand All Days"}
          <ChevronDown
            className={`h-6 w-6 shrink-0 transition-transform duration-200 ${openAll ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div className="flex flex-col lg:gap-4">
        {items.map((item, index) => (
          <ItineraryCard
            key={index}
            open={openAll}
            item={item}
            index={index}
            experiences={experiences}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
