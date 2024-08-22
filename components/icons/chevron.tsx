import { cn } from "@/lib/utils";

export const ChevronIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 48 48"
      data-src="/assets/shared/icons/UI-arrow1-right.svg"
    >
      <defs>
        <clipPath id="clip-path-3546">
          <rect x="4" y="4" width="40" height="40" fill="none"></rect>
        </clipPath>
      </defs>
      <g clipPath="url(#clip-path-3546)">
        <path d="M28.35,24,13.18,39.08a2.88,2.88,0,0,0,0,4.08,2.93,2.93,0,0,0,4.11,0l17.06-17A2.82,2.82,0,0,0,35.19,24a2.82,2.82,0,0,0-.84-2.18l-17.06-17a2.93,2.93,0,0,0-4.11,0,2.88,2.88,0,0,0,0,4.08Z"></path>
      </g>
    </svg>
  );
};
