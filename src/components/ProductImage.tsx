import { useState } from "react";
import { cn } from "@/lib/utils";
import { getImageCrop } from "@/lib/image-crops";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  /** shown in place of the photo if it fails to load */
  fallbackLabel?: string;
  /** contain the whole image instead of cropping to the product */
  fit?: "crop" | "contain";
  hoverZoom?: boolean;
  loading?: "lazy" | "eager";
}

/** Product photo set on a stone plate that matches the photography backdrop. */
const ProductImage = ({
  src,
  alt,
  className,
  fallbackLabel,
  fit = "crop",
  hoverZoom = true,
  loading = "lazy",
}: ProductImageProps) => {
  const [failed, setFailed] = useState(false);
  const crop = getImageCrop(src);

  return (
    <div className={cn("plate", className)}>
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
          <span className="h-px w-8 bg-amber" aria-hidden="true" />
          <span className="eyebrow text-center text-ink/35">{fallbackLabel ?? alt}</span>
        </div>
      ) : (
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-700 ease-refined",
            hoverZoom && "group-hover:scale-[1.03]"
          )}
        >
          <img
            src={src}
            alt={alt}
            loading={loading}
            onError={() => setFailed(true)}
            className={cn("h-full w-full", fit === "crop" ? "object-cover" : "object-contain")}
            style={
              fit === "crop"
                ? {
                    objectPosition: crop.position,
                    transform: crop.zoom ? `scale(${crop.zoom})` : undefined,
                    transformOrigin: crop.origin,
                  }
                : undefined
            }
          />
        </div>
      )}
    </div>
  );
};

export default ProductImage;
