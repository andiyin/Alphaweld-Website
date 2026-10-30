import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import ProductImage from "./ProductImage";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  categoryLabel?: string;
}

const ProductCard = ({ product, categoryLabel }: ProductCardProps) => {
  const { t } = useTranslation();

  return (
    <Link to={`/products/${product.id}`} className="group flex h-full flex-col">
      <div className="relative">
        <ProductImage src={product.image} alt={product.name} className="aspect-[4/3]" fallbackLabel={product.name} />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-4">
          {categoryLabel ? <span className="eyebrow text-ink/55">{categoryLabel}</span> : <span />}
          {product.articleNumber && (
            <span className="index-num bg-paper/90 px-2 py-1 text-ink/70">{product.articleNumber}</span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="display-sm text-ink">{product.name}</h3>
          <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-ink/40 transition-all duration-300 group-hover:translate-x-0 group-hover:text-ink" />
        </div>
        <p className="mt-2 line-clamp-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        <dl className="mt-6 border-t border-line">
          {product.technicalSpecs.slice(0, 2).map((spec) => (
            <div key={spec.property} className="flex items-baseline justify-between gap-4 border-b border-line py-2.5">
              <dt className="text-[0.8125rem] text-muted-foreground">{spec.property}</dt>
              <dd className="text-right font-mono text-[0.75rem] text-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-[0.8125rem] text-muted-foreground">
          <span className="text-ink/70">{t("search.highlights")}</span>{" "}
          {product.features.slice(0, 2).join(" · ")}
        </p>

        <span className="mt-auto pt-6 text-[0.9375rem] text-ink">
          <span className="link-draw">{t("products.details")}</span>
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
