import { ColorField, Content, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { cn } from "@/lib/utils";

/**
 * Props for `Highlights`.
 */
export type HighlightsProps = SliceComponentProps<Content.HighlightsSlice>;

/**
 * Component for "Highlights" Slices.
 */
const Highlights = ({ slice }: HighlightsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-4 py-6 flex flex-col gap-4 lg:py-12 lg:gap-0 lg:px-[clamp(0.5rem,(100vw_-_1380px)/2,100vw)]">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="py-5 text-center text-gray font-source-serif font-bold text-[28px] leading-[125%] lg:text-left lg:py-6 xl:text-3xl xl:py-8">
                {children}
              </h2>
            ),
          }}
        />

        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="pb-4 lg:w-[30%] lg:p-0">
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-light-gray  text-2xl font-source-serif font-bold leading-[125%] text-center lg:text-lg lg:text-left xl:text-2xl">
                    {children}
                  </p>
                ),
              }}
            />
            {slice.primary.is_link && (
              <ButtonLink
                className="hidden lg:block mx-0"
                url={slice.primary.link_url}
                color={slice.primary.link_color}
              >
                {slice.primary.link_text}
              </ButtonLink>
            )}
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-6 lg:w-[70%]">
            <div className="mt-6 flex flex-col gap-6 lg:mt-0 lg:w-6/12">
              {slice.primary.items_left.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-none w-10 h-10 overflow-hidden">
                    <PrismicNextImage
                      field={item.icon}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <PrismicRichText
                    field={item.name}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-sm font-noto-sans leading-[150%] text-gray lg:text-sm">
                          {children}
                        </p>
                      ),
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-6 lg:mt-0 lg:w-6/12">
              {slice.primary.item_right.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-none w-10 h-10 overflow-hidden">
                    <PrismicNextImage
                      field={item.icon}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <PrismicRichText
                    field={item.name}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-sm font-noto-sans leading-[150%] text-gray lg:text-sm">
                          {children}
                        </p>
                      ),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {slice.primary.is_link && (
            <ButtonLink
              className="lg:hidden"
              url={slice.primary.link_url}
              color={slice.primary.link_color}
            >
              {slice.primary.link_text}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
};

const ButtonLink = ({
  color,
  children,
  url,
  className,
}: {
  color: ColorField;
  children: React.ReactNode;
  url: LinkField | null | undefined;
  className?: string;
}) => (
  <PrismicNextLink
    className={cn(
      "block mx-auto w-fit mt-6 font-noto-sans text-base font-bold text-white py-[calc(1rem_-_1px)] px-[calc(2rem_-_1px)] text-center",
      className
    )}
    field={url}
    style={{ backgroundColor: color ?? "#000000" }}
  >
    {children}
  </PrismicNextLink>
);

export default Highlights;
