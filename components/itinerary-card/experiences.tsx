import { Content } from "@prismicio/client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import ExperienceCard from "./experience-card";
import { ChevronIcon } from "../icons";

export interface Experiences {
  data: (Content.DayExperiencesDocument<string> | undefined)[];
}

const Experiences: React.FC<Experiences> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState(0);

  const onClickIndicator = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
    setCurrent(api.selectedScrollSnap());
  };

  useEffect(() => {
    if (!api) return;

    const newCount = api.scrollSnapList().length;
    const newCurrent = api.selectedScrollSnap();

    setCount(newCount);
    setCurrent(newCurrent);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="px-2 py-4 lg:p-0 lg:pt-4 lg:mb-4">
      <div className="flex items-center justify-between mb-6">
        <p className="text-center text-gray text-[22px] font-bold font-source-serif lg:text-left lg:text-[28px] lg:leading-[125%]">
          Included and optional experiences
        </p>

        <div
          className={`hidden items-center gap-6 lg:flex ${api && !api.canScrollNext() && !api.canScrollPrev() && "opacity-0 invisible"}`}
        >
          <button
            onClick={() => api?.scrollPrev()}
            disabled={api && api?.canScrollPrev() ? false : true}
            className="w-[47px] h-[47px] rounded-full bg-[#e6e6e6] flex items-center justify-center disabled:bg-[#F2F2F2]"
          >
            <ChevronIcon className="rotate-180" />
          </button>

          <button
            onClick={() => api?.scrollNext()}
            disabled={api && api?.canScrollNext() ? false : true}
            className="w-[47px] h-[47px] rounded-full bg-[#e6e6e6] flex items-center justify-center disabled:bg-[#F2F2F2]"
          >
            <ChevronIcon />
          </button>
        </div>
      </div>

      <Carousel setApi={setApi}>
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3">
              {item?.data && <ExperienceCard {...item?.data} />}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex flex-col justify-start items-center pt-[2.125rem] pb-0 px-6 lg:hidden">
        <p className="font-noto-sans font-bold text-gray text-sm mb-4">
          {current + 1} of {count}
        </p>

        <div className="relative h-4 w-[6.5rem] overflow-hidden mx-auto">
          <div
            className="absolute flex items-center justify-center transition-[left] duration-500 gap"
            style={{ left: `${35 - current * 12}px` }}
          >
            {Array.from({ length: count }).map((_, index) => {
              const currentIndex = index === current;
              const nearIndex = index === current - 1 || index === current + 1;

              return (
                <span
                  key={index}
                  className={`transition-all duration-[0.35s] ease-[ease] rounded-full mx-1 bg-[#dedee5] ${
                    currentIndex
                      ? "w-4 h-4 bg-[#e02044]"
                      : nearIndex
                        ? "w-3 h-3"
                        : "w-1 h-1"
                  }`}
                  onClick={() => onClickIndicator(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
