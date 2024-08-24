import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import Cards from "./cards";

/**
 * Props for `DayByDay`.
 */
export type DayByDayProps = SliceComponentProps<Content.DayByDaySlice>;

/**
 * Component for "DayByDay" Slices.
 */
const DayByDay = async ({ slice }: DayByDayProps): Promise<JSX.Element> => {
  const client = createClient();

  const experiences = await Promise.all(
    slice.primary.experiences.map((item) => {
      if (isFilled.contentRelationship(item.items) && item.items.uid)
        return client.getByUID("day_experiences", item.items.uid);
    })
  );

  return (
    <section
      className="pt-2 lg:py-12"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="lg:px-[clamp(0.5rem,(100vw_-_1380px)/2,100vw)]">
        <div className="px-4 py-5 lg:p-0 lg:mb-5">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-center text-gray font-source-serif font-bold leading-[125%] text-[22px] mb-2 lg:text-left lg:text-[28px] lg:leading-[125%] xl:text-[32px]">
                  {children}
                </h2>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-light-gray text-sm font-sans leading-[150%] text-center lg:text-left">
                  {children}
                </p>
              ),
            }}
          />
        </div>

        <Cards items={slice.primary.items} experiences={experiences} />
      </div>
    </section>
  );
};

export default DayByDay;
