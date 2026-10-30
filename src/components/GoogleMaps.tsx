import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface GoogleMapsProps {
  address: string;
  className?: string;
}

/** A quiet, drawn location plate that links out to Google Maps. */
const GoogleMaps = ({ address, className = "" }: GoogleMapsProps) => {
  const { t } = useTranslation();
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group plate block aspect-[4/3]", className)}
      aria-label={`${t("maps.company")}, ${t("maps.address")} – ${t("maps.open")}`}
    >
      {/* Drawn street plan */}
      <svg className="absolute inset-0 h-full w-full text-ink" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#map-grid)" />
        <g fill="none" stroke="currentColor" strokeLinecap="round">
          <path d="M-10 214 C 90 196, 160 176, 214 150 S 330 92, 410 70" strokeOpacity="0.22" strokeWidth="9" />
          <path d="M-10 214 C 90 196, 160 176, 214 150 S 330 92, 410 70" stroke="hsl(var(--stone))" strokeWidth="7" />
          <path d="M120 -10 L 196 310" strokeOpacity="0.14" strokeWidth="4" />
          <path d="M300 -10 C 286 90, 262 190, 270 310" strokeOpacity="0.12" strokeWidth="3" />
          <path d="M-10 92 L 410 128" strokeOpacity="0.08" strokeWidth="2" />
          <path d="M40 310 L 120 120" strokeOpacity="0.08" strokeWidth="2" />
        </g>
      </svg>

      {/* Marker */}
      <span className="absolute left-[53.5%] top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/20" />
        <span className="relative block h-3 w-3 rounded-full bg-ink ring-[3px] ring-amber" />
      </span>

      {/* Label */}
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <span className="bg-paper px-3 py-2 leading-tight">
          <span className="block text-[0.8125rem] font-medium text-ink">{t("maps.company")}</span>
          <span className="block text-[0.75rem] text-muted-foreground">{t("maps.address")}</span>
        </span>
        <span className="flex items-center gap-1.5 bg-paper px-3 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
          {t("maps.open")}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </span>
    </a>
  );
};

export default GoogleMaps;
