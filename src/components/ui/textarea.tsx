import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[140px] w-full rounded-[var(--radius)] border border-line-strong bg-white px-4 py-3 text-base text-ink leading-relaxed transition-colors duration-200 placeholder:text-ink/40 hover:border-ink/40 focus-visible:outline-none focus-visible:border-ink disabled:cursor-not-allowed disabled:opacity-50 md:text-[0.9375rem]",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
