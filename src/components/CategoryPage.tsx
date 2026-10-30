import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "./Layout";
import PageHeader from "./PageHeader";
import ProductCard from "./ProductCard";
import ProductImage from "./ProductImage";
import ConsultationCta from "./ConsultationCta";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/products";

interface CategoryPageProps {
  categoryId: string;
}

const CategoryPage = ({ categoryId }: CategoryPageProps) => {
  const { t } = useTranslation();
  const category = productCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <Layout>
        <PageHeader title="Kategorie nicht gefunden" lede="Die angeforderte Produktkategorie konnte nicht gefunden werden." />
        <div className="container py-16">
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft />
              Zurück zu den Produkten
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const breadcrumbItems = [
    { label: t("breadcrumb.products"), href: "/products" },
    { label: category.name },
  ];

  return (
    <Layout>
      <PageHeader
        breadcrumb={breadcrumbItems}
        title={category.name}
        lede={category.description}
        aside={
          category.products.length > 0 && (
            <p className="index-num mt-8 text-ink/45">
              {String(category.products.length).padStart(2, "0")} — {t("nav.products")}
            </p>
          )
        }
      />

      {category.products.length === 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <ProductImage
              src={category.image}
              alt={category.name}
              fallbackLabel={category.name}
              hoverZoom={false}
              loading="eager"
              className="aspect-[4/3] md:aspect-[21/9]"
            />
          </div>
        </section>
      )}

      {category.products.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ConsultationCta
        title={t("contact.consultation")}
        text={t("contact.consultationText")}
        primary={{ label: t("common.requestConsultation"), to: "/contact" }}
        secondary={{ label: t("common.requestCatalog"), to: "/contact" }}
      />
    </Layout>
  );
};

export default CategoryPage;
