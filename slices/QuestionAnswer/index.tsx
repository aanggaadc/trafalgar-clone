import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Cards from "./cards";

/**
 * Props for `QuestionAnswer`.
 */
export type QuestionAnswerProps =
  SliceComponentProps<Content.QuestionAnswerSlice>;

/**
 * Component for "QuestionAnswer" Slices.
 */
const QuestionAnswer = ({ slice }: QuestionAnswerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-4 py-6 lg:px-[clamp(0.5rem,(100vw_-_1380px)/2,100vw)] lg:py-12">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-gray text-[22px] font-source-serif font-bold mb-2 lg:text-[28px] xl:text-[32px]">
                {children}
              </h2>
            ),
          }}
        />

        <Cards items={slice.primary.items} />
      </div>
    </section>
  );
};

export default QuestionAnswer;
