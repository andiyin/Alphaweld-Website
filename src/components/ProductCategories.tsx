import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import ConsultationCta from "./ConsultationCta";

const ProductCategories = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("productCategories.categories.migmag.title"),
      description: t("productCategories.categories.migmag.description"),
      products: ["AW-150", "AW-240", "AW-400", "AW-550"],
      link: "/products/migmag-brenner",
    },
    {
      title: t("productCategories.categories.wig.title"),
      description: t("productCategories.categories.wig.description"),
      products: ["SR-9", "SR-17", "SR-26", "SR-18"],
      link: "/products/wig-brenner",
    },
    {
      title: t("productCategories.categories.plasma.title"),
      description: t("productCategories.categories.plasma.description"),
      products: ["P-50", "P-70", "P-100", "P-130"],
      link: "/products/plasma-brenner",
    },
    {
      title: t("productCategories.categories.machines.title"),
      description: t("productCategories.categories.machines.description"),
      products: ["Elektrodeninverter", "WIG-Anlagen", "MIG/MAG", "Plasma"],
      link: "/products/machines",
    },
    {
      title: t("productCategories.categories.safety.title"),
      description: t("productCategories.categories.safety.description"),
      products: ["Black Star Pro", "Automatikhelme", "Handschuhe", "Schürzen"],
      link: "/products/arbeitsschutz",
    },
    {
      title: t("productCategories.categories.tungsten.title"),
      description: t("productCategories.categories.tungsten.description"),
      products: ["WP grün", "WC20 grau", "WL15 gold", "WT20 rot"],
      link: "/products/tungsten",
    },
  ];

  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container">
          {/* Section header */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow flex items-center gap-3 text-ink/55">
                <span className="h-px w-6 bg-amber" aria-hidden="true" />
                {t("nav.products")}
              </p>
              <h2 className="display-lg mt-6 text-ink">{t("productCategories.title")}</h2>
            </div>
            <div className="flex items-end md:col-span-5 lg:col-span-4 lg:col-start-9">
              <p className="lede">{t("productCategories.subtitle")}</p>
            </div>
          </div>

          {/* Index grid */}
          <ul className="mt-14 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
            {categories.map((category, index) => (
              <li key={category.link} className="border-b border-r border-line">
                <Link
                  to={category.link}
                  className="group flex h-full min-h-[19rem] flex-col p-7 transition-colors duration-500 ease-refined hover:bg-stone md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="index-num text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex h-9 w-9 items-center justify-center border border-line transition-colors duration-500 group-hover:border-ink group-hover:bg-ink">
                      <ArrowRight className="h-4 w-4 text-ink transition-colors duration-500 group-hover:text-paper" />
                    </span>
                  </div>

                  <h3 className="display-sm mt-12 text-ink">{category.title}</h3>
                  <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>

                  <p className="mt-auto pt-10 font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.1em] text-ink/50">
                    {category.products.join("  ·  ")}
                  </p>
                  <span className="sr-only">{t("common.readMore")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConsultationCta
        title={t("productCategories.cta.title")}
        text={t("productCategories.cta.description")}
        primary={{ label: t("productCategories.cta.consult"), to: "/contact" }}
        secondary={{ label: t("productCategories.cta.catalog"), to: "/contact" }}
      />
    </>
  );
};

export default ProductCategories;
