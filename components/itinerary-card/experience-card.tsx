import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";
import { Simplify } from "@/prismicio-types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChecklistIcon, QuestionIcon } from "../icons";

export interface ExperienceCardProps
  extends Simplify<Content.DayExperiencesDocumentData> {}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  is_include,
  image,
  title,
  description,
  url,
  special_experience,
  special_experience_color,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col rounded-md border border-[#e6e6e6] overflow-hidden lg:rounded-lg">
      <div
        className={`absolute m-2 z-[2] py-1 px-2 rounded font-noto-sans text-sm leading-4 font-bold  ${is_include ? "text-white bg-[#503454]" : "bg-[#f5f5f5] text-gray"}`}
        style={{
          backgroundColor: special_experience
            ? (special_experience_color as string)
            : "",
          color: special_experience ? "fff" : "",
        }}
      >
        {special_experience
          ? special_experience
          : is_include
            ? "Iconic Experience"
            : "Optional Experience"}
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
          {!is_include && (
            <PrismicNextLink
              className="block mb-4 font-noto-sans text-sm text-gray font-bold"
              field={url}
            >
              See more
            </PrismicNextLink>
          )}
          <div
            className={`flex items-center gap-2 ${!is_include && "justify-between"}`}
          >
            {is_include && <ChecklistIcon className="fill-[#503454]" />}

            <span
              className={`text-xs font-bold font-noto-sans lg:text-sm ${is_include ? "text-[#503454]" : "text-gray"}`}
            >
              {is_include ? "Included with trip" : "Additional Cost Applies"}
            </span>

            {!is_include && (
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

export default ExperienceCard;
