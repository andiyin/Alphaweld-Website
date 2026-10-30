import { Link } from "react-router-dom";
import { ArrowLeft, ArrowDown, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import PageHeader from "./PageHeader";
import ProductImage from "./ProductImage";
import ConsultationCta from "./ConsultationCta";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Product, productCategories } from "@/data/products";

interface ProductDetailPageProps {
  productId: string;
}

const tabTrigger =
  "relative -mb-px rounded-none border-b-2 border-transparent bg-transparent px-0 pb-4 pt-0 text-[0.9375rem] font-normal text-ink/50 shadow-none transition-colors hover:text-ink data-[state=active]:border-ink data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0";

const ProductDetailPage = ({ productId }: ProductDetailPageProps) => {
  const { t } = useTranslation();

  // Find the product across all categories
  let product: Product | undefined;
  let categoryName = "";

  for (const category of productCategories) {
    const foundProduct = category.products.find((p) => p.id === productId);
    if (foundProduct) {
      product = foundProduct;
      categoryName = category.name;
      break;
    }
  }

  if (!product) {
    return (
      <Layout>
        <PageHeader title="Produkt nicht gefunden" lede="Das angeforderte Produkt konnte nicht gefunden werden." />
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
    { label: categoryName, href: `/products/${product.categoryId}` },
    { label: product.name },
  ];

  const contactHref = `/contact?product=${encodeURIComponent(product.name)}`;

  const downloads = [
    { name: "Datenblatt", meta: "PDF • 2.3 MB" },
    { name: "Bedienungsanleitung", meta: "PDF • 1.8 MB" },
    { name: "Explosionszeichnung", meta: "PDF • 0.9 MB" },
  ];

  return (
    <Layout>
      {/* Opener */}
      <section className="border-b border-line">
        <div className="container pb-12 pt-10 md:pb-16 md:pt-14">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-14 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-12">
            <div className="md:col-span-7 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {product.articleNumber && (
                  <span className="index-num border border-line-strong px-2 py-1 text-ink/70">{product.articleNumber}</span>
                )}
                <span className="eyebrow text-ink/50">{categoryName}</span>
              </div>
              <h1 className="display-xl mt-7 text-ink">{product.name}</h1>
            </div>
            <div className="flex flex-col justify-end md:col-span-5 lg:col-span-4">
              {product.description && <p className="lede max-w-md">{product.description}</p>}
              <Link
                to={`/products/${product.categoryId}`}
                className="group mt-8 inline-flex items-center gap-2 text-[0.9375rem] text-ink"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="link-draw">{t("products.backToOverview")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20">
        <div className="container grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Imagery */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <ProductImage
                src={product.image}
                alt={product.name}
                fallbackLabel={product.name}
                hoverZoom={false}
                loading="eager"
                className="aspect-[4/3]"
              />

              {product.images && product.images.length > 1 && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <ProductImage
                      key={image}
                      src={image}
                      alt={`${product!.name} - Bild ${index + 2}`}
                      hoverZoom={false}
                      className="aspect-square"
                    />
                  ))}
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Button size="lg">
                  <ArrowDown />
                  {t("products.downloadSheet")}
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to={contactHref}>
                    {t("products.request")}
                    <ArrowRight className="group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 lg:pl-8">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="flex h-auto w-full justify-start gap-8 overflow-x-auto rounded-none border-b border-line bg-transparent p-0">
                <TabsTrigger value="specifications" className={tabTrigger}>
                  {t("products.technicalSpecs")}
                </TabsTrigger>
                <TabsTrigger value="features" className={tabTrigger}>
                  Highlights
                </TabsTrigger>
                <TabsTrigger value="explosion" className={tabTrigger}>
                  {t("products.explosionDrawing")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="mt-10">
                <h2 className="eyebrow text-ink/55">Technische Daten nach EN 60 974-7:</h2>
                <dl className="mt-6 border-t border-ink">
                  <div className="flex justify-between gap-6 border-b border-line py-3">
                    <dt className="eyebrow text-ink/40">Eigenschaft</dt>
                    <dd className="eyebrow text-ink/40">Wert</dd>
                  </div>
                  {product.technicalSpecs.map((spec) => (
                    <div key={spec.property} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                      <dt className="text-[0.9375rem] text-muted-foreground">{spec.property}</dt>
                      <dd className="text-right font-mono text-[0.8125rem] text-ink">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>

              <TabsContent value="features" className="mt-10">
                <h2 className="eyebrow text-ink/55">Produkthighlights</h2>
                <ol className="mt-6 border-t border-ink">
                  {product.features.map((feature, index) => (
                    <li key={feature} className="flex items-baseline gap-6 border-b border-line py-5">
                      <span className="index-num text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-display text-[1.5rem] leading-tight text-ink">{feature}</span>
                    </li>
                  ))}
                </ol>
              </TabsContent>

              <TabsContent value="explosion" className="mt-10">
                <h2 className="eyebrow text-ink/55">{t("products.explosionDrawing")}</h2>
                {product.explosionDrawing ? (
                  <div className="plate mt-6 flex min-h-[400px] items-center justify-center p-8">
                    <img
                      src={product.explosionDrawing}
                      alt={`Explosionszeichnung ${product.name}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="plate mt-6 flex min-h-[360px] flex-col items-start justify-end p-8">
                    <p className="font-display text-[1.75rem] leading-tight text-ink">{t("products.explosionDrawing")}</p>
                    <p className="mt-2 max-w-xs text-[0.9375rem] text-muted-foreground">
                      Detaillierte Explosionszeichnung für {product.name}
                    </p>
                    <Button variant="outline" className="mt-8 bg-paper">
                      <ArrowDown />
                      Zeichnung herunterladen
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <h2 className="display-md text-ink">{t("products.downloads")}</h2>
          </div>
          <ul className="border-t border-ink md:col-span-8">
            {downloads.map((item, index) => (
              <li key={item.name}>
                <button
                  type="button"
                  className="group flex w-full items-center gap-6 border-b border-line py-6 text-left transition-colors hover:bg-stone/60 md:px-2"
                >
                  <span className="index-num w-6 text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-display text-[1.5rem] leading-tight text-ink">{item.name}</span>
                  <span className="hidden font-mono text-[0.75rem] text-ink/50 sm:block">{item.meta}</span>
                  <span className="flex h-9 w-9 items-center justify-center border border-line transition-colors duration-300 group-hover:border-ink group-hover:bg-ink">
                    <ArrowDown className="h-4 w-4 text-ink transition-colors duration-300 group-hover:text-paper" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConsultationCta
        title="Haben Sie Fragen zu diesem Produkt?"
        text="Unsere Experten beraten Sie gerne bei der Auswahl der passenden Schweißtechnik für Ihre spezifischen Anforderungen."
        primary={{ label: "+49 (0)271 317897-0", to: "tel:+492713178970" }}
        secondary={{ label: "Kontaktformular", to: contactHref }}
      />
    </Layout>
  );
};

export default ProductDetailPage;
