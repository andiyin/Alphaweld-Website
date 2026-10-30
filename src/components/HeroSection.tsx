import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Pause, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 6000;

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
};

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const slides = [
    {
      image: "/herosection-slideshow-uploads/buehne_schweisstisch_01.png",
      position: "52% 50%",
      title: "SCHWEISSTISCH",
      subtitle: "Fahrbare Lenkrollen & Pneumatische Absenkfunktion",
      description: "Große Arbeitsfläche 80x60cm, kompakte Bauform 100x70cm, robustes Metallgestell - ideal zum Vorführschweißen.",
      cta: t("hero.cta1"),
      link: "/products",
    },
    {
      image: "/herosection-slideshow-uploads/buehne_mobilMIG-250_01.png",
      position: "61% 50%",
      title: "MOBILMIG-250",
      subtitle: "Kompakte Bauform & 4-Rollen Drahtantrieb",
      description: "Stufenlose Spannungsregelung und Drahtvorschubgeschwindigkeit mit automatischer Drahtrückbrandregelung.",
      cta: t("hero.cta2"),
      link: "/products/machines",
    },
    {
      image: "/herosection-slideshow-uploads/buehne_brenner_01.png",
      position: "55% 50%",
      title: "SCHWEISSBRENNER",
      subtitle: "Für jeden eine optimale Lösung",
      description: "Aus unserer langjährigen Erfahrung und Zuverlässigkeit - hochwertige Schweißbrenner für professionelle Anwendungen.",
      cta: t("hero.cta1"),
      link: "/products/migmag-brenner",
    },
    {
      image: "/herosection-slideshow-uploads/buehne_b.png",
      position: "62% 50%",
      title: "ALPHAFORCE",
      subtitle: "Breite Produktpalette hochwertiger Schweißgeräte",
      description: "Für Industrie-, Handwerk- und Montagebereich - moderne Schweißtechnik in verschiedenen Leistungsklassen.",
      cta: t("hero.cta2"),
      link: "/products/machines",
    },
    {
      image: "/herosection-slideshow-uploads/buehne_helme.png",
      position: "56% 50%",
      title: "AUTOMATIKSCHUTZHELME",
      subtitle: "Black Star Pro - Großes Sichtfeld 100x60mm",
      description: "4 Lichtsensoren, einstellbare Schleiffunktion, auswechselbare Lithium-Batterie für maximalen Schutz.",
      cta: t("hero.cta1"),
      link: "/products/arbeitsschutz",
    },
  ];

  const isRunning = !isPaused && !isHovered && !reducedMotion;
  const next = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      className="border-b border-line"
      aria-roledescription="carousel"
      aria-label="Alphaweld"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="sr-only">Alphaweld GmbH – {t("footer.company")}</h1>

      <div className="container pt-10 md:pt-14">
        {/* Copy — all slides share one grid cell so the height never jumps */}
        <div className="grid">
          {slides.map((slide, index) => {
            const active = index === currentSlide;
            return (
              <div
                key={slide.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${slides.length}`}
                aria-hidden={!active}
                {...(!active ? { inert: "" } : {})}
                className={cn(
                  "grid grid-cols-1 content-start gap-8 transition-opacity duration-700 ease-refined [grid-area:1/1] md:grid-cols-12 md:content-stretch md:gap-8",
                  active ? "opacity-100" : "pointer-events-none opacity-0"
                )}
              >
                <div className="md:col-span-8">
                  <p className="eyebrow flex items-center gap-3 text-ink/55">
                    <span className="tabular-nums text-ink">{pad(index + 1)}</span>
                    <span className="h-px w-8 bg-amber" aria-hidden="true" />
                    <span>{slide.title}</span>
                  </p>
                  <h2 className="display-xl mt-7 max-w-[20ch] text-ink">{slide.subtitle}</h2>
                </div>
                <div className="flex flex-col justify-end md:col-span-4">
                  <p className="lede max-w-sm">{slide.description}</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button asChild size="lg">
                      <Link to={slide.link}>
                        {slide.cta}
                        <ArrowRight className="group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/contact">{t("hero.contactButton")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stage — the plate shares the photographs' exact backdrop */}
        <div className="plate mt-12 aspect-[4/3] sm:aspect-[16/9] md:mt-14 lg:aspect-auto lg:h-[min(36vw,540px)]">
          {slides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={index === currentSlide ? slide.title : ""}
              aria-hidden={index !== currentSlide}
              loading={index === 0 ? "eager" : "lazy"}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ease-refined lg:object-contain",
                index === currentSlide ? "scale-100 opacity-100" : "scale-[1.015] opacity-0"
              )}
              style={{ objectPosition: slide.position }}
            />
          ))}
        </div>

        {/* Index */}
        <div className="flex items-stretch">
          <ol className="grid flex-1 grid-cols-5">
            {slides.map((slide, index) => {
              const active = index === currentSlide;
              return (
                <li key={slide.title}>
                  <button
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`${pad(index + 1)} ${slide.title}`}
                    aria-current={active}
                    className="group relative block w-full pb-7 pr-4 pt-5 text-left"
                  >
                    <span className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />
                    {active && (
                      <span
                        key={`${currentSlide}-${reducedMotion}`}
                        aria-hidden="true"
                        onAnimationEnd={next}
                        className={cn(
                          "absolute inset-x-0 top-0 h-[2px] origin-left bg-amber",
                          !reducedMotion && "animate-progress"
                        )}
                        style={{
                          animationDuration: `${SLIDE_DURATION}ms`,
                          animationPlayState: isRunning ? "running" : "paused",
                        }}
                      />
                    )}
                    <span className="flex items-baseline gap-3">
                      <span className={cn("index-num transition-colors", active ? "text-ink" : "text-ink/35 group-hover:text-ink/70")}>
                        {pad(index + 1)}
                      </span>
                      <span
                        className={cn(
                          "eyebrow hidden truncate transition-colors md:inline",
                          active ? "text-ink" : "text-ink/40 group-hover:text-ink/70"
                        )}
                      >
                        {slide.title}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            className="relative flex w-10 shrink-0 items-start justify-end pt-[1.05rem] text-ink/40 transition-colors hover:text-ink"
            aria-label={isPaused ? "Play" : "Pause"}
            aria-pressed={isPaused}
          >
            <span className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />
            {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
