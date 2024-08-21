import React from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { CalendarIcon, ChevronIcon } from "@/components/icons";

/**
 * Props for `TopTourSummary`.
 */
export type TopTourSummaryProps =
  SliceComponentProps<Content.TopTourSummarySlice>;

/**
 * Component for "TopTourSummary" Slices.
 */
const TopTourSummary = ({ slice }: TopTourSummaryProps): JSX.Element => {
  return (
    <section
      className="flex flex-col lg:flex-row lg:gap-[4.5rem]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full aspect-[25/22] overflow-hidden lg:aspect-[171/187] lg:w-6/12 2xl:aspect-[924/697]">
        <PrismicNextImage
          className="w-full h-full object-cover object-center"
          field={slice.primary.tour_image}
        />
      </div>

      <div className="max-w-[868px] pt-4 pb-6 px-4 lg:w-6/12  lg:pl-0 lg:pr-12 lg:pt-8 lg:pb-[1.125rem]">
        <div className="flex items-center justify-between mb-8 lg:justify-start lg:gap-5">
          <div className="flex items-center gap-[0.6rem]">
            <CalendarIcon className="w-[18px] h-[18px] fill-[#414141]" />
            <span className="font-noto-sans text-gray font-semibold">
              Trip Year
            </span>
          </div>

          <div className="flex items-center rounded border border-solid border-[#2d5a7b]">
            {[2024, 2025, 2026].map((item) => (
              <button
                key={item}
                className={`w-[70px] h-[30px] flex items-center text-[#2d5a7b] justify-center font-bold font-noto-sans ${item === 2024 && "bg-[#2d5a7b] text-white"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-[22px] leading-tight font-bold font-source-serif mb-2 text-gray lg:text-[32px] lg:mb-5">
                {children}
              </h2>
            ),
          }}
        />

        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p className="font-noto-sans text-gray text-sm leading-tight mb-8 mt-3.5 lg:text-base lg:my-3 lg:leading-[170%]">
                {children}
              </p>
            ),
          }}
        />

        <div className="grid grid-cols-[repeat(2,1fr)] gap-[2rem_2rem] mt-[0.8rem] mb-6 lg:mt-3.5 lg:mb-6">
          {slice.primary.details.map((item) => (
            <div key={item.title}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 overflow-hidden">
                  <PrismicNextImage
                    className="w-full h-full object-cover object-center"
                    field={item.icon}
                  />
                </div>
                <p className="text-gray font-semibold font-noto-sans">
                  {item.title}
                </p>
              </div>

              <p className="text-sm text-gray leading-[150%] lg:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <PrismicNextLink
          field={slice.primary.booking_info_link}
          className=" @apply w-full flex justify-between items-center gap-4 mb-6 border bg-transparent cursor-pointer no-underline p-4 rounded-md border-solid border-[#e6e6e6]"
        >
          <span>
            <PrismicRichText
              field={slice.primary.booking_info_title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="font-source-serif font-bold tracking-[-0.4px] text-lg mb-2 text-gray">
                    {children}
                  </h2>
                ),
              }}
            />

            <PrismicRichText
              field={slice.primary.booking_info_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-noto-sans text-sm leading-tight text-light-gray tracking-[-0.1px]">
                    {children}
                  </p>
                ),
              }}
            />
          </span>
          <ChevronIcon className="flex-none fill-[#414141]" />
        </PrismicNextLink>

        <div className="border-b-[#d9d9d9] border-b border-solid lg:border-none">
          <p className="font-noto-sans text-light-gray mb-[19px]">
            <span className="font-semibold text-gray">
              {slice.primary.trip_code_text}:
            </span>{" "}
            {slice.primary.trip_code_value}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopTourSummary;
