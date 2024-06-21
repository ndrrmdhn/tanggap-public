import { cn } from "@/lib/tailwind-utils";

const SectionWrapper = ({ className, children }) => {
  return <div className={cn("max-w-screen-xl mx-auto px-4 md:px-10 ", className)}>{children}</div>;
};

export default SectionWrapper;
