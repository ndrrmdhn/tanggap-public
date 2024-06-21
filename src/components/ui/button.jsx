import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/tailwind-utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        variant1: "bg-color-7 text-white hover:bg-color-2 shadow-xl ",
        default: "bg-color-1 text-white hover:bg-color-2 text-[16px] leading-[24px]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 text-[16px] leading-[24px]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        "color-shadow":
          "bg-color-7 text-white hover:bg-color-1 shadow-xl text-[16px] leading-[24px] shadow-[rgba(0,_0,_0,_0.25)]",
      },
      size: {
        default: "h-[50px] px-4 py-2 ",

        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
