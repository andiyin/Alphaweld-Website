import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/2890bddb-14c9-4356-9ef2-cdaad5887d85.png",
      title: "SCHWEISSTISCH",
      subtitle: "Fahrbare Lenkrollen & Pneumatische Absenkfunktion",
      description: "Große Arbeitsfläche 80x60cm, kompakte Bauform 100x70cm, robustes Metallgestell - ideal zum Vorführschweißen.",
      cta: t('hero.cta1'),
      link: "/products/equipment"
    },
    {
      image: "/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png",
      title: "MOBILMIG-250",
      subtitle: "Kompakte Bauform & 4-Rollen Drahtantrieb",
      description: "Stufenlose Spannungsregelung und Drahtvorschubgeschwindigkeit mit automatischer Drahtrückbrandregelung.",
      cta: t('hero.cta2'),
      link: "/products/machines"
    },
    {
      image: "/lovable-uploads/ea483ed7-7884-4bf6-8cdd-decf914adff2.png",
      title: "SCHWEISSBRENNER",
      subtitle: "Für jeden eine optimale Lösung",
      description: "Aus unserer langjährigen Erfahrung und Zuverlässigkeit - hochwertige Schweißbrenner für professionelle Anwendungen.",
      cta: t('hero.cta1'),
      link: "/products/torches"
    },
    {
      image: "/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png",
      title: "ALPHAFORCE",
      subtitle: "Breite Produktpalette hochwertiger Schweißgeräte",
      description: "Für Industrie-, Handwerk- und Montagebereich - moderne Schweißtechnik in verschiedenen Leistungsklassen.",
      cta: t('hero.cta2'),
      link: "/products/alphaforce"
    },
    {
      image: "/lovable-uploads/c130a5f9-172a-4bb6-8b27-b25bb1b24901.png",
      title: "WOLFRAMELEKTRODEN",
      subtitle: "Hervorragende Zündeigenschaften & stabiler Lichtbogen",
      description: "Lange Standzeiten für professionelle WIG-Schweißarbeiten in verschiedenen Ausführungen und Größen.",
      cta: t('hero.cta1'),
      link: "/products/electrodes"
    },
    {
      image: "/lovable-uploads/d5baef27-480d-4e81-a82b-63ba4c102335.png",
      title: "AUTOMATIKSCHUTZHELME",
      subtitle: "Black Star Pro - Großes Sichtfeld 100x60mm",
      description: "4 Lichtsensoren, einstellbare Schleiffunktion, auswechselbare Lithium-Batterie für maximalen Schutz.",
      cta: t('hero.cta1'),
      link: "/products/safety"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent" />
            
            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="xl" className="group">
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      {t('hero.contactButton')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-primary scale-125" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;