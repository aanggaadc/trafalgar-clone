import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      Placeholder component for question_answer (variation: {slice.variation})
      Slices
    </section>
  );
};

export default QuestionAnswer;
