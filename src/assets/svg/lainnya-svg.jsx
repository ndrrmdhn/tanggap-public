import { cn } from "@/lib/tailwind-utils";

export const LainnyaSVG = ({ className }) => {
  return (
    <svg
      className={cn("h-10 w-10 fill-[rgba(0,_163,_232,_1)]", className)}
      viewBox="0 0 93 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="9.83342" cy="12.1641" rx="9.58342" ry="12" />
      <ellipse cx="46.2519" cy="12.1641" rx="9.58342" ry="12" />
      <ellipse cx="82.6664" cy="12.1641" rx="9.58342" ry="12" />
    </svg>
  );
};
