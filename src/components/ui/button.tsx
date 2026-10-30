import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const solid = "bg-ink text-paper hover:bg-ink-soft";

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[var(--radius)] text-[0.9375rem] font-medium tracking-[-0.005em] transition-colors duration-300 ease-refined focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-refined",
  {
    variants: {
      variant: {
        default: solid,
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink/[0.03]",
        secondary: "bg-stone text-ink hover:bg-stone-deep",
        ghost: "text-ink hover:bg-ink/[0.04]",
        link: "text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink",
        light: "bg-paper text-ink hover:bg-white",
        "outline-light": "border border-paper/25 bg-transparent text-paper hover:border-paper hover:bg-paper/[0.04]",
        // Legacy aliases kept for components that still reference them
        hero: solid,
        industrial: solid,
        cta: solid,
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-6",
        xl: "h-14 px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
