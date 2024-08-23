import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { ImageFieldImage, LinkField, RichTextField } from "@prismicio/client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChecklistIcon, QuestionIcon } from "../icons";

export interface OptionalCardProps {
  title: RichTextField | undefined;
  description: RichTextField | undefined;
  image: ImageFieldImage | undefined;
  isInclude: boolean | undefined;
  url: LinkField | undefined;
}

const OptionalCard: React.FC<OptionalCardProps> = ({
  title,
  description,
  image,
  isInclude,
  url,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col rounded-md border border-[#e6e6e6] overflow-hidden lg:rounded-lg">
      <div
        className={`absolute m-2 z-[2] py-1 px-2 rounded font-noto-sans text-sm leading-4 font-bold  ${isInclude ? "text-white bg-[#503454]" : "bg-[#f5f5f5] text-grayw "}`}
      >
        {isInclude ? "Iconic Experience" : "Optional Experience"}
      </div>
      <div className="w-full aspect-[309/154] overflow-hidden">
        <PrismicNextImage
          field={image}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex-grow flex flex-col justify-between px-4">
        <div className="py-4">
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => (
                <p className="font-source-serif font-bold text-gray text-sm mb-2 lg:text-lg">
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

        <div className="pb-4">
          {!isInclude && (
            <PrismicNextLink
              className="block mb-4 font-noto-sans text-sm text-gray font-bold"
              field={url}
            >
              See more
            </PrismicNextLink>
          )}
          <div
            className={`flex items-center gap-2 ${!isInclude && "justify-between"}`}
          >
            {isInclude && <ChecklistIcon className="fill-[#503454]" />}

            <span
              className={`text-xs font-bold font-noto-sans lg:text-sm ${isInclude ? "text-[#503454]" : "text-gray"}`}
            >
              {isInclude ? "Included with trip" : "Additional Cost Applies"}
            </span>

            {!isInclude && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button>
                      <QuestionIcon />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <div className="flex flex-col gap-2">
                      <p className="font-noto-sans text-gray text-sm font-bold">
                        Optional Experiences
                      </p>
                      <p className="font-noto-sans text-light-gray text-xs">
                        Optional Experience are enhancements to your tour
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalCard;
