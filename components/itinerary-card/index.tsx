"use client";

import { useState, useCallback } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage, RichTextField } from "@prismicio/client";
import DetailCard from "./detail-card";
import OptionalExperience from "./optional-experience";
import { DetailCardProps } from "./detail-card";
import { OptionalCardProps } from "./optional-card";
interface ItineraryCardProps {
  index: number;
  title: RichTextField;
  image: ImageFieldImage;
  description: RichTextField;
  details: DetailCardProps[];
  experiences: OptionalCardProps[];
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({
  index,
  title,
  image,
  description,
  details,
  experiences,
}) => {
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
              <PrismicNextImage
                field={image}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div
              className={`flex-grow px-[1.5rem] py-[1.3rem] transition-all duration-500 ${
                isOpen ? "lg:-translate-x-[200px]" : ""
              }`}
            >
              <p className="text-light-gray font-noto-sans font-semibold text-xs mb-[.625rem] lg:text-base">
                Day {index + 1}
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center gap-[.625rem] lg:gap-[1rem] ">
                <PrismicRichText
                  field={title}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="font-bold font-source-serif text-gray lg:text-lg">
                        {children}
                      </h2>
                    ),
                  }}
                />

                <p className="text-sm font-noto-sans text-light-gray">Rome</p>
              </div>
            </div>
          </div>

          <AccordionTrigger className="flex items-center gap-2">
            <span className="font-noto-sans font-bold text-base hidden lg:block">
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
                <PrismicNextImage
                  field={image}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div
                className={`flex-grow transition-all duration-500 lg:w-6/12 ${
                  isOpen
                    ? "opacity-1 translate-y-0"
                    : "opacity-0 -translate-y-6"
                }`}
              >
                <p className="text-light-gray text-base font-semibold font-noto-sans mb-2 hidden lg:block">
                  Day {index + 1}
                </p>
                <PrismicRichText
                  field={title}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="font-source-serif text-lg mb-6 font-bold text-gray lg:text-[28px] lg:mb-2">
                        {children}
                      </h2>
                    ),
                  }}
                />

                <PrismicRichText
                  field={description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="leading-[150%] text-sm font-noto-sans text-light-gray mb-4 lg:text-base lg:leading-[170%]">
                        {children}
                      </p>
                    ),
                  }}
                />

                <div className="flex flex-col gap-2">
                  {details.map((detail, index) => (
                    <DetailCard key={index} {...detail} />
                  ))}
                </div>
              </div>
            </div>

            <OptionalExperience data={experiences} />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ItineraryCard;
