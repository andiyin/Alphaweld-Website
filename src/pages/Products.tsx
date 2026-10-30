import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ProductImage from "@/components/ProductImage";
import ConsultationCta from "@/components/ConsultationCta";
import { cn } from "@/lib/utils";

const Products = () => {
  const { t } = useTranslation();

  const productCategories = [
    {
      id: 1,
      title: "MIG / MAG BRENNER",
      image: "/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png",
      link: "/products/migmag-brenner",
    },
    {
      id: 2,
      title: "WIG BRENNER",
      image: "/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png",
      link: "/products/wig-brenner",
    },
    {
      id: 3,
      title: "PLASMA BRENNER",
      image: "/lovable-uploads/c130a5f9-172a-4bb6-8b27-b25bb1b24901.png",
      link: "/products/plasma-brenner",
    },
    {
      id: 4,
      title: "SCHWEISSMASCHINEN",
      image: "/lovable-uploads/2890bddb-14c9-4356-9ef2-cdaad5887d85.png",
      link: "/products/machines",
    },
    {
      id: 5,
      title: "WOLFRAM-ANSCHLEIFGERÄT",
      image: "/lovable-uploads/d5baef27-480d-4e81-a82b-63ba4c102335.png",
      link: "/products/grinding",
    },
    {
      id: 6,
      title: "WOLFRAMELEKTRODEN",
      image: "/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png",
      link: "/products/tungsten",
    },
    {
      id: 7,
      title: "ARBEITSSCHUTZ",
      image: "/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png",
      link: "/products/arbeitsschutz",
    },
  ];

  // 2 · 3 · 2 rhythm across the 12-column grid
  const spans = ["lg:col-span-6", "lg:col-span-6", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4", "lg:col-span-6", "lg:col-span-6"];
  const aspects = ["lg:aspect-[16/10]", "lg:aspect-[16/10]", "lg:aspect-[4/3]", "lg:aspect-[4/3]", "lg:aspect-[4/3]", "lg:aspect-[16/10]", "lg:aspect-[16/10]"];

  return (
    <Layout>
      <PageHeader
        breadcrumb={[{ label: t("breadcrumb.products") }]}
        title={t("products.title")}
        lede={t("products.subtitle")}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            {productCategories.map((category, index) => (
              <li key={category.id} className={cn(spans[index])}>
                <Link to={category.link} className="group block">
                  <ProductImage
                    src={category.image}
                    alt={category.title}
                    fallbackLabel={category.title}
                    className={cn("aspect-[4/3]", aspects[index])}
                  />
                  <div className="mt-5 flex items-center justify-between gap-6 border-b border-line pb-5">
                    <div className="flex items-baseline gap-5">
                      <span className="index-num text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                      <h2 className="text-[0.9375rem] font-medium tracking-[0.06em] text-ink">{category.title}</h2>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-ink/40 transition-all duration-300 group-hover:translate-x-0 group-hover:text-ink" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConsultationCta
        title={t("contact.consultation")}
        text={t("contact.consultationText")}
        primary={{ label: t("common.requestConsultation"), to: "/contact" }}
        secondary={{ label: t("common.requestCatalog"), to: "/contact" }}
      />
    </Layout>
  );
};

export default Products;
