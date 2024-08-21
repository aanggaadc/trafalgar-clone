"use client";

import { useState, useCallback } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import DetailCard from "./detail-card";
import OptionalExperience from "./optional-experience";

const ItineraryCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <Accordion type="single" collapsible onValueChange={onToggle}>
      <AccordionItem value="item-1">
        <div
          className={`flex items-center pr-[1rem] overflow-hidden justify-between h-full transition-all duration-500 rounded border border-[#e6e6e6] ${
            isOpen ? "bg-[#F5F5F5]" : ""
          }`}
        >
          <div className="flex-grow flex items-center h-full">
            <div
              className={`w-[200px] hidden lg:block h-full overflow-hidden transition-all duration-500 ${
                isOpen ? "-translate-x-full opacity-0" : ""
              }`}
            >
              <img
                className="w-full h-full object-cover object-center"
                alt="St. Peter's Basilica"
                src="https://www.trafalgar.com/media/4xxbzyvd/st-peters-basilica-rome-italy-1.jpg?crop=0%2C0.13655549983283186%2C0%2C0.017155633567368662&cropmode=percentage&format=webp&mode=crop&width=400&height=190&quality=80"
              />
            </div>

            <div
              className={`flex-grow px-[1.5rem] py-[1.3rem] transition-all duration-500 ${
                isOpen ? "lg:-translate-x-[200px]" : ""
              }`}
            >
              <p className="text-light-gray font-noto-sans font-semibold text-xs mb-[.625rem]">
                Day 1
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center gap-[.625rem] lg:gap-[1rem] ">
                <p className="font-bold font-source-serif text-gray">
                  Welcome Rome
                </p>
                <p className="text-sm font-noto-sans text-light-gray">Rome</p>
              </div>
            </div>
          </div>

          <AccordionTrigger className="flex items-center gap-2">
            <span className="hidden lg:block">
              {isOpen ? "See less" : "See more"}
            </span>
          </AccordionTrigger>
        </div>

        <AccordionContent>
          <div className="pt-6 pb-[2.5em] px-[0.8em] lg:p-10 rounded border border-[#e6e6e6]">
            <div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-14">
              <div
                className={`w-full h-fit aspect-video rounded overflow-hidden transition-all duration-500 lg:w-6/12 ${
                  isOpen
                    ? "translate-y-0 opacity-1"
                    : "-translate-y-full opacity-0"
                }`}
              >
                <img
                  className="w-full h-full object-cover object-center"
                  alt="St. Peter's Basilica"
                  src="https://www.trafalgar.com/media/4xxbzyvd/st-peters-basilica-rome-italy-1.jpg?crop=0%2C0.13655549983283186%2C0%2C0.017155633567368662&cropmode=percentage&format=webp&mode=crop&width=400&height=190&quality=80"
                />
              </div>

              <div
                className={`flex-grow transition-all duration-500 lg:w-6/12 ${
                  isOpen
                    ? "opacity-1 translate-y-0"
                    : "opacity-0 -translate-y-6"
                }`}
              >
                <p className="text-light-gray font-semibold font-noto-sans mb-2 hidden lg:block">
                  Day 1
                </p>
                <h2 className="font-source-serif text-lg mb-6 font-bold text-gray lg:text-[28px] lg:mb-2">
                  Welcome Rome
                </h2>

                <p className="leading-[150%] text-sm font-noto-sans text-light-gray mb-4 lg:text-base lg:leading-[170%]">
                  Ciao Roma! Explore this imperial city of emperors and
                  senators, gods and goddesses before joining your Travel
                  Director for an introduction to the 'Eternal City'. Arrive at
                  Basilica Santa Maria in Cosmedin for a private after-hours
                  visit to the Mouth of Truth. See the church, crypt and relics
                  of the famous saint of love, Valentine, and learn about the
                  legend of the Mouth of Truth. This evening, enjoy dinner with
                  your travel companions.
                </p>

                <div className="flex flex-col gap-2">
                  <DetailCard />
                  <DetailCard />
                  <DetailCard />
                  <DetailCard />
                </div>
              </div>
            </div>

            <OptionalExperience />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ItineraryCard;
