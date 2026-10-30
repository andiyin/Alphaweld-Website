import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsultationCtaProps {
  title: string;
  text: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}

const isExternal = (to: string) => /^(tel|mailto):/.test(to);

/** Closing call to action, set in ink. */
const ConsultationCta = ({ title, text, primary, secondary }: ConsultationCtaProps) => (
  <section className="on-ink bg-ink text-paper">
    <div className="container grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-28">
      <div className="md:col-span-7">
        <span className="mb-8 block h-px w-10 bg-amber" aria-hidden="true" />
        <h2 className="display-lg text-paper">{title}</h2>
      </div>
      <div className="flex flex-col justify-end md:col-span-5 lg:col-span-4 lg:col-start-9">
        <p className="text-[1.0625rem] leading-relaxed text-paper/65">{text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="light" size="lg">
            {isExternal(primary.to) ? (
              <a href={primary.to}>
                {primary.label}
                <ArrowRight className="group-hover/btn:translate-x-1" />
              </a>
            ) : (
              <Link to={primary.to}>
                {primary.label}
                <ArrowRight className="group-hover/btn:translate-x-1" />
              </Link>
            )}
          </Button>
          {secondary && (
            <Button asChild variant="outline-light" size="lg">
              <Link to={secondary.to}>{secondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default ConsultationCta;
