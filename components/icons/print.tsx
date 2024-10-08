import { cn } from "@/lib/utils";

export const PrintIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={cn("w-4 h-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      data-src="/assets/shared/icons/ttcs-print-itinerary.svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M21 9V3.62109C21 3.22312 20.842 2.84203 20.5608 2.56031L18.4392 0.439219C18.158 0.157969 17.7764 0 17.3784 0H4.5C3.67172 0 3 0.671719 3 1.5V9C1.34297 9 0 10.343 0 12V17.25C0 17.6644 0.335625 18 0.75 18H3V22.5C3 23.3283 3.67172 24 4.5 24H19.5C20.3283 24 21 23.3283 21 22.5V18H23.25C23.6644 18 24 17.6644 24 17.25V12C24 10.343 22.657 9 21 9ZM18 21H6V16.5H18V21ZM18 10.5H6V3H15V5.25C15 5.66437 15.3356 6 15.75 6H18V10.5ZM20.25 13.875C19.6289 13.875 19.125 13.3711 19.125 12.75C19.125 12.1284 19.6289 11.625 20.25 11.625C20.8711 11.625 21.375 12.1284 21.375 12.75C21.375 13.3711 20.8711 13.875 20.25 13.875Z"
        fill="#2D5A7B"
      ></path>
    </svg>
  );
};
