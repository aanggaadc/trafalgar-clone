import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
      {slice.primary.is_link}
      {slice.primary.link_text}
      <PrismicNextLink field={slice.primary.link_url}>Link</PrismicNextLink>
      {slice.primary.items.map((item) => (
        <div></div>
      ))}
    </section>
  );
};

export default Highlights;
