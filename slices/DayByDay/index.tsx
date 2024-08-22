import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ItineraryCard from "@/components/itinerary-card";
import { getDayDetails } from "@/lib/utils";
import { DetailCardProps } from "@/components/itinerary-card/detail-card";
import { OptionalCardProps } from "@/components/itinerary-card/optional-card";

/**
 * Props for `DayByDay`.
 */
export type DayByDayProps = SliceComponentProps<Content.DayByDaySlice>;

/**
 * Component for "DayByDay" Slices.
 */
const DayByDay = ({ slice }: DayByDayProps): JSX.Element => {
  return (
    <section
      className="pt-2"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-4 py-5">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-center text-gray font-source-serif font-bold leading-[125%] text-[22px] mb-2">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p className="text-light-gray text-sm font-sans leading-[150%] text-center">
                {children}
              </p>
            ),
          }}
        />
      </div>

      <div className="flex flex-col">
        {slice.primary.items.map((item, index) => (
          <ItineraryCard
            key={index}
            index={index}
            image={item.image}
            title={item.title}
            description={item.description}
            details={
              getDayDetails(
                slice.primary,
                index + 1,
                "details"
              ) as DetailCardProps[]
            }
            experiences={
              getDayDetails(
                slice.primary,
                index + 1,
                "experiences"
              ) as OptionalCardProps[]
            }
          />
        ))}
      </div>
    </section>
  );
};

export default DayByDay;
