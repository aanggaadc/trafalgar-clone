import { cn } from "@/lib/utils";

export const PlusIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      data-src="/assets/shared/icons/add.svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.2598 12.4431C24.2598 11.4963 23.4923 10.7288 22.5455 10.7288H13.9741V2.1574C13.9741 1.21063 13.2065 0.443115 12.2598 0.443115C11.313 0.443115 10.5455 1.21063 10.5455 2.1574V10.7288H1.97405C1.02728 10.7288 0.259766 11.4963 0.259766 12.4431C0.259766 13.3899 1.02728 14.1574 1.97405 14.1574H10.5455V22.7288C10.5455 23.6756 11.313 24.4431 12.2598 24.4431C13.2065 24.4431 13.9741 23.6756 13.9741 22.7288V14.1574H22.5455C23.4923 14.1574 24.2598 13.3899 24.2598 12.4431Z"
      ></path>
    </svg>
  );
};
