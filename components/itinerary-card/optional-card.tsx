import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { ChecklistIcon } from "../icons";

export interface OptionalCardProps {
  label: KeyTextField;
  title: RichTextField;
  description: RichTextField;
  image: ImageFieldImage;
}

const OptionalCard: React.FC<OptionalCardProps> = ({
  label,
  title,
  description,
  image,
}) => {
  return (
    <div className="relative w-full rounded-md border border-[#e6e6e6] overflow-hidden lg:rounded-lg">
      <div className="absolute m-2 z-[2] py-1 px-2 rounded bg-[#503454] font-noto-sans text-sm leading-4 font-bold text-white">
        {label}
      </div>
      <div className="w-full aspect-[309/154] overflow-hidden">
        <PrismicNextImage
          field={image}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-4">
        <PrismicRichText
          field={title}
          components={{
            paragraph: ({ children }) => (
              <p className="font-source-serif font-bold text-gray text-sm mb-2">
                {children}
              </p>
            ),
          }}
        />

        <PrismicRichText
          field={description}
          components={{
            paragraph: ({ children }) => (
              <p className="font-noto-sans text-sm text-light-gray line-clamp-3">
                {children}
              </p>
            ),
          }}
        />
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-2">
          <ChecklistIcon className="fill-[#503454]" />
          <span className="text-[#503454] text-xs font-bold font-noto-sans">
            Included with trip
          </span>
        </div>
      </div>
    </div>
  );
};

export default OptionalCard;
