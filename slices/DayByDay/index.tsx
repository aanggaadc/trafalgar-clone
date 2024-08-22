import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ItineraryCard from "@/components/itinerary-card";
import { getDayDetails } from "@/lib/utils";
import { DetailCardProps } from "@/components/itinerary-card/detail-card";
import { OptionalCardProps } from "@/components/itinerary-card/optional-card";
import { createClient } from "@/prismicio";

/**
 * Props for `DayByDay`.
 */
export type DayByDayProps = SliceComponentProps<Content.DayByDaySlice>;

/**
 * Component for "DayByDay" Slices.
 */
const DayByDay = async ({ slice }: DayByDayProps): Promise<JSX.Element> => {
  const client = createClient();

  const details = await Promise.all(
    slice.primary.details.map((item) => {
      if (isFilled.contentRelationship(item.items) && item.items.uid)
        return client.getByUID("day_details", item.items.uid);
    })
  );

  const experiences = await Promise.all(
    slice.primary.experiences.map((item) => {
      if (isFilled.contentRelationship(item.items) && item.items.uid)
        return client.getByUID("day_experiences", item.items.uid);
    })
  );

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
            details={details}
            experiences={experiences}
          />
        ))}
      </div>
    </section>
  );
};

export default DayByDay;
