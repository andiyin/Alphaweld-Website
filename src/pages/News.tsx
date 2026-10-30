import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NewsCategory = "products" | "events" | "company" | "education" | "digital";

const News = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<NewsCategory | "all">("all");

  const newsItems: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: NewsCategory;
    slug: string;
  }[] = [
    {
      id: 1,
      title: "Neue MIG/MAG Brenner Serie AW-350 verfügbar",
      excerpt: "Entdecken Sie unsere neueste Generation von MIG/MAG Brennern mit verbesserter Ergonomie und höherer Leistung.",
      date: "2024-03-15",
      category: "products",
      slug: "neue-mig-mag-brenner-serie-aw-350",
    },
    {
      id: 2,
      title: "Alphaweld auf der Schweissen & Schneiden 2024",
      excerpt: "Besuchen Sie uns auf der führenden Fachmesse für Füge-, Trenn- und Beschichtungstechnik in Essen.",
      date: "2024-03-10",
      category: "events",
      slug: "alphaweld-schweissen-schneiden-2024",
    },
    {
      id: 3,
      title: "Nachhaltigkeitsinitiative: CO2-neutraler Versand",
      excerpt: "Ab sofort bieten wir klimaneutralen Versand für alle unsere Produkte an und unterstützen zertifizierte Umweltprojekte.",
      date: "2024-03-05",
      category: "company",
      slug: "nachhaltigkeitsinitiative-co2-neutraler-versand",
    },
    {
      id: 4,
      title: "Schulungsprogramm für Schweißfachkräfte startet",
      excerpt: "Neue Weiterbildungsmöglichkeiten in Kooperation mit regionalen Bildungseinrichtungen.",
      date: "2024-02-28",
      category: "education",
      slug: "schulungsprogramm-schweissfachkraefte",
    },
    {
      id: 5,
      title: "Erweiterung des Arbeitsschutz-Sortiments",
      excerpt: "Neue Schweißerhelme und Schutzausrüstung für höchste Sicherheitsstandards am Arbeitsplatz.",
      date: "2024-02-20",
      category: "products",
      slug: "erweiterung-arbeitsschutz-sortiment",
    },
    {
      id: 6,
      title: "Digitale Transformation: Neuer Online-Konfigurator",
      excerpt: "Konfigurieren Sie Ihre Schweißausrüstung jetzt noch einfacher mit unserem neuen digitalen Tool.",
      date: "2024-02-15",
      category: "digital",
      slug: "digitale-transformation-online-konfigurator",
    },
  ];

  const categories: (NewsCategory | "all")[] = ["all", "products", "events", "company", "education", "digital"];
  const visibleItems = newsItems.filter((item) => activeCategory === "all" || item.category === activeCategory);
  const [featured, ...rest] = visibleItems;

  // Format from the ISO parts directly so the date never shifts with the visitor's timezone
  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return i18n.language?.startsWith("en") ? `${day}/${month}/${year}` : `${day}.${month}.${year}`;
  };

  return (
    <Layout>
      <PageHeader breadcrumb={[{ label: t("nav.news") }]} title={t("news.title")} lede={t("news.subtitle")} />

      {/* Filter */}
      <div className="sticky top-[var(--header-h)] z-30 border-b border-line bg-paper">
        <div className="container">
          <div className="-mx-1 flex gap-7 overflow-x-auto px-1" role="tablist" aria-label={t("news.title")}>
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "relative shrink-0 py-5 text-[0.9375rem] transition-colors",
                    active ? "text-ink" : "text-ink/50 hover:text-ink"
                  )}
                >
                  {t(`news.categories.${category}`)}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 -bottom-px h-[2px] origin-left bg-ink transition-transform duration-500 ease-refined",
                      active ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container">
          {featured && (
            <article id={featured.slug} className="group grid grid-cols-1 gap-8 border-b border-ink pb-14 md:grid-cols-12 md:gap-8 md:pb-20">
              <div className="flex gap-6 md:col-span-3 md:flex-col md:gap-3">
                <time dateTime={featured.date} className="index-num text-ink">
                  {formatDate(featured.date)}
                </time>
                <span className="eyebrow text-ink/50">{t(`news.categories.${featured.category}`)}</span>
              </div>
              <div className="md:col-span-9 lg:col-span-8">
                <h2 className="display-lg text-ink">
                  <a href={`#${featured.slug}`} className="bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 [background-image:linear-gradient(currentColor,currentColor)] group-hover:bg-[length:100%_1px]">
                    {featured.title}
                  </a>
                </h2>
                <p className="lede mt-6 max-w-2xl">{featured.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] text-ink">
                  {t("news.readMore")}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          )}

          <ul>
            {rest.map((item) => (
              <li key={item.id} id={item.slug}>
                <a
                  href={`#${item.slug}`}
                  className="group grid grid-cols-1 gap-4 border-b border-line py-9 md:grid-cols-12 md:gap-8"
                >
                  <div className="flex gap-6 md:col-span-3 md:flex-col md:gap-3">
                    <time dateTime={item.date} className="index-num text-ink/70">
                      {formatDate(item.date)}
                    </time>
                    <span className="eyebrow text-ink/45">{t(`news.categories.${item.category}`)}</span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="display-sm text-ink">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">{item.excerpt}</p>
                  </div>
                  <div className="hidden items-start justify-end md:col-span-1 md:flex">
                    <span className="flex h-9 w-9 items-center justify-center border border-line transition-colors duration-300 group-hover:border-ink group-hover:bg-ink">
                      <ArrowRight className="h-4 w-4 text-ink transition-colors duration-300 group-hover:text-paper" />
                    </span>
                  </div>
                  <span className="sr-only">{t("news.readMore")}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex justify-center">
            <Button variant="outline" size="lg">
              {t("news.loadMore")}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
