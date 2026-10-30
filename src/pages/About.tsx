import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const About = () => {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as string[];

  const motto = t("about.motto")
    .split(".")
    .map((word) => word.trim())
    .filter(Boolean);

  const values = [
    {
      key: "quality",
      title: t("about.values.quality.title"),
      body: <p>{t("about.values.quality.description")}</p>,
      items: list("about.values.quality.items"),
      quote: t("about.values.quality.quote"),
    },
    {
      key: "sustainability",
      title: t("about.values.sustainability.title"),
      body: (
        <>
          <p>{t("about.values.sustainability.description")}</p>
          <p className="mt-6 font-medium text-ink">{t("about.values.sustainability.principles")}</p>
        </>
      ),
      items: list("about.values.sustainability.items"),
    },
    {
      key: "sourcing",
      title: t("about.values.sourcing.title"),
      kicker: t("about.values.sourcing.subtitle"),
      body: <p>{t("about.values.sourcing.description")}</p>,
      items: list("about.values.sourcing.items"),
    },
    {
      key: "integrity",
      title: t("about.values.integrity.title"),
      body: <p>{t("about.values.integrity.description")}</p>,
      items: list("about.values.integrity.items"),
    },
    {
      key: "improvement",
      title: t("about.values.improvement.title"),
      body: <p>{t("about.values.improvement.description")}</p>,
      items: list("about.values.improvement.items"),
    },
  ];

  const downloads = [
    { label: t("about.downloads.items.policy"), href: "/documents/Alphaweld_Lieferkettenpolitik.pdf" },
    { label: t("about.downloads.items.sourcing"), href: "/documents/Alphaweld_Erklaerung_Rohstoffbeschaffung.pdf" },
    { label: t("about.downloads.items.minerals"), href: "/documents/Alphaweld_Bericht_ueber_Konfliktmineralien_2024.pdf" },
  ];

  return (
    <Layout>
      <PageHeader
        breadcrumb={[{ label: t("about.title") }]}
        eyebrow={t("about.subtitle")}
        title={t("about.title")}
      />

      {/* Introduction */}
      <section className="py-20 md:py-32">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <ul className="space-y-3" aria-label={t("about.motto")}>
              {motto.map((word) => (
                <li key={word} className="flex items-center gap-4">
                  <span className="h-px w-6 bg-amber" aria-hidden="true" />
                  <span className="eyebrow text-ink">{word}.</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-display text-[clamp(1.625rem,2.6vw,2.375rem)] leading-[1.25] text-ink md:col-span-8">
            {t("about.intro")}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <ol className="border-t border-ink">
            {values.map((value, index) => (
              <li key={value.key} className="grid grid-cols-1 gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-8 md:py-16">
                <div className="md:col-span-1">
                  <span className="index-num text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="display-sm text-ink">{value.title}</h2>
                  {value.kicker && <p className="eyebrow mt-4 text-ink/55">{value.kicker}</p>}
                </div>
                <div className="text-[1.0625rem] leading-relaxed text-muted-foreground md:col-span-7 lg:col-span-6 lg:col-start-7">
                  {value.body}
                  <ul className="mt-6 border-t border-line">
                    {value.items.map((item) => (
                      <li key={item} className="flex gap-4 border-b border-line py-3 text-[0.9375rem] text-ink/80">
                        <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/40" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {value.quote && (
                    <blockquote className="mt-10 border-l-2 border-amber pl-6 font-display text-[1.5rem] italic leading-snug text-ink">
                      “{value.quote}”
                    </blockquote>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Downloads */}
      <section className="bg-stone py-20 md:py-28">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col justify-between gap-10 md:col-span-5">
            <h2 className="display-lg text-ink">{t("about.downloads.title")}</h2>
            <div>
              <p className="max-w-sm text-[0.9375rem] leading-relaxed text-muted-foreground">{t("about.downloads.footer")}</p>
              <Button asChild size="lg" className="mt-8">
                <Link to="/contact">
                  {t("common.contact")}
                  <ArrowRight className="group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <ul className="self-start border-t border-ink md:col-span-7">
            {downloads.map((doc, index) => (
              <li key={doc.href}>
                <a
                  href={doc.href}
                  download
                  className="group flex items-center gap-6 border-b border-line-strong/70 py-7 transition-colors"
                >
                  <span className="index-num w-6 text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">
                    <span className="block font-display text-[1.625rem] leading-tight text-ink">{doc.label}</span>
                    <span className="mt-1 block font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink/45">
                      {t("about.downloads.download")}
                    </span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line-strong transition-colors duration-300 group-hover:border-ink group-hover:bg-ink">
                    <ArrowDown className="h-4 w-4 text-ink transition-colors duration-300 group-hover:text-paper" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default About;
