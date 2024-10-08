import { cn } from "@/lib/utils";

export const MinusIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 48 48"
      data-src="/assets/shared/icons/ui-minus.svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M41.27,20.36H6.73A2.73,2.73,0,0,0,4,23.09v1.82a2.73,2.73,0,0,0,2.73,2.73H41.27A2.73,2.73,0,0,0,44,24.91V23.09a2.73,2.73,0,0,0-2.73-2.73Z"></path>
    </svg>
  );
};
