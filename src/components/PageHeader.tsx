import { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: ReactNode;
  eyebrow?: ReactNode;
  lede?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  aside?: ReactNode;
  className?: string;
}

/** Shared editorial page opener: breadcrumb, serif title, lede set against the grid. */
const PageHeader = ({ title, eyebrow, lede, breadcrumb, aside, className }: PageHeaderProps) => (
  <section className={cn("border-b border-line", className)}>
    <div className="container pb-12 pt-10 md:pb-20 md:pt-14">
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8", breadcrumb ? "mt-14 md:mt-24" : "mt-6 md:mt-16")}>
        <div className="md:col-span-7 lg:col-span-8">
          {eyebrow && <p className="eyebrow mb-6 flex items-center gap-3 text-ink/55"><span className="h-px w-6 bg-amber" aria-hidden="true" />{eyebrow}</p>}
          <h1 className="display-xl text-ink">{title}</h1>
        </div>
        {(lede || aside) && (
          <div className="flex flex-col justify-end md:col-span-5 lg:col-span-4">
            {lede && <p className="lede max-w-md">{lede}</p>}
            {aside}
          </div>
        )}
      </div>
    </div>
  </section>
);

export default PageHeader;
