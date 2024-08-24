import { cn } from "@/lib/utils";

export const DownloadDocumentIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={cn("w-4 h-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      data-src="/assets/shared/icons/ttcs-download-itinerary.svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M9.25 5.3125V0H1.4375C0.917969 0 0.5 0.417969 0.5 0.9375V19.0625C0.5 19.582 0.917969 20 1.4375 20H14.5625C15.082 20 15.5 19.582 15.5 19.0625V6.25H10.1875C9.67188 6.25 9.25 5.82812 9.25 5.3125ZM12.2363 13.5687L8.46992 17.307C8.21016 17.5652 7.79063 17.5652 7.53086 17.307L3.76445 13.5687C3.36797 13.1754 3.64609 12.5 4.20391 12.5H6.75V9.375C6.75 9.02969 7.02969 8.75 7.375 8.75H8.625C8.97031 8.75 9.25 9.02969 9.25 9.375V12.5H11.7961C12.3539 12.5 12.632 13.1754 12.2363 13.5687ZM15.2266 4.10156L11.4023 0.273438C11.2266 0.0976562 10.9883 0 10.7383 0H10.5V5H15.5V4.76172C15.5 4.51562 15.4023 4.27734 15.2266 4.10156Z"
        fill="#2D5A7B"
      ></path>
    </svg>
  );
};
