import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/tailwind-utils";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-slate-400 focus-visible:ring-color-2 focus-visible:border-color-2 text-text16_24",
        secondary: "border-none text-sm",
      },
      size: {
        default: "h-[50px] rounded-[10px]",
        secondary: "h-[32px] rounded-[8px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Input = React.forwardRef(({ className, variant, size, type, ...props }, ref) => {
  return <input type={type} className={cn(inputVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
