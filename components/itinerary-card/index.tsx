"use client";

import { Content } from "@prismicio/client";
import { useState, useCallback, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Simplify } from "@/prismicio-types";
import DetailCard from "./detail-card";
import Experiences from "./experiences";
import {
  ArrivalIcon,
  AccommodationIcon,
  MealsIcon,
  GroupIcon,
  DepartureIcon,
} from "../icons";
import { getDayDetail } from "@/lib/utils";

const detailHeadlineToCheck = [
  "welcome",
  "arrival_transfer",
  "departure_transfer",
];
export const detailNameMap: Record<string, string> = {
  accommodation: "Accommodation",
  meals: "Included Meals",
  welcome: "Welcome",
  arrival_transfer: "Arrival Transfer",
  departure_transfer: "Departure Transfer",
};
export const detailIconMap: Record<string, React.ReactNode> = {
  accommodation: <AccommodationIcon />,
  meals: <MealsIcon />,
  welcome: <GroupIcon />,
  arrival_transfer: <ArrivalIcon />,
  departure_transfer: <DepartureIcon />,
};

interface ItineraryCardProps {
  index: number;
  item: Simplify<Content.DayByDaySliceDefaultPrimaryItemsItem>;
  experiences: (Content.DayExperiencesDocument<string> | undefined)[];
  open: boolean | undefined;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({
  index,
  item,
  experiences,
  open,
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const tag = `day-${index + 1}`;
  const detailList = getDayDetail(item);
  const detailHeadlineTag = detailList.filter((item) =>
    detailHeadlineToCheck.includes(item.name)
  );
  const experienceList = experiences.filter((experience) =>
    experience?.tags.includes(tag)
  );

  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleStateChange = (value: boolean) => {
    if (isOpen !== value) triggerRef?.current?.click();
  };

  useEffect(() => {
    if (open !== undefined) handleStateChange(open);
  }, [open]);

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
                field={item.image}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div
              className={`flex-grow px-[1.5rem] py-[1.3rem] transition-all duration-500 ${
                isOpen ? "lg:-translate-x-[200px]" : ""
              }`}
            >
              <div className="mb-[.625rem] flex items-center gap-4">
                <p className="text-light-gray font-noto-sans font-semibold text-xs  lg:text-base">
                  Day {index + 1}
                </p>

                {item.special_experience && (
                  <div
                    className="py-1 px-2 rounded-md font-noto-sans font-bold text-[10px] text-white lg:text-sm"
                    style={{
                      backgroundColor:
                        item.special_experience_color ?? "#503454",
                    }}
                  >
                    {item.special_experience}
                  </div>
                )}
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-[.625rem] lg:gap-[1rem] ">
                <PrismicRichText
                  field={item.title}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="font-bold font-source-serif text-gray lg:text-lg">
                        {children}
                      </h2>
                    ),
                  }}
                />

                <p className="text-sm font-noto-sans text-light-gray">
                  {item.routes}
                </p>
              </div>

              {detailHeadlineTag.length > 0 && (
                <div className="hidden items-center lg:flex gap-4">
                  {detailHeadlineTag.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-[.65em]"
                    >
                      <div className="py-[.65em]">
                        {detailIconMap[item.name]}
                      </div>

                      <p className="text-sm font-noto-sans text-light-gray">
                        {detailNameMap[item.name]}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <AccordionTrigger
            ref={triggerRef}
            className="flex items-center gap-2"
          >
            <span className="font-noto-sans font-bold text-base text-gray hidden lg:block">
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
                  field={item.image}
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
                  field={item.title}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="font-source-serif text-lg mb-6 font-bold text-gray lg:text-[28px] lg:mb-2">
                        {children}
                      </h2>
                    ),
                  }}
                />

                <PrismicRichText
                  field={item.description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="leading-[150%] text-sm font-noto-sans text-light-gray mb-4 lg:text-base lg:leading-[170%]">
                        {children}
                      </p>
                    ),
                  }}
                />

                <div className="flex flex-col gap-2">
                  {detailList?.map((detail, index) => (
                    <DetailCard
                      key={index}
                      name={detail.name}
                      description={detail.description}
                    />
                  ))}
                </div>
              </div>
            </div>

            {experienceList.length > 0 && <Experiences data={experienceList} />}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ItineraryCard;
