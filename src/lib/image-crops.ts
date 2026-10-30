/**
 * The product photography comes from legacy slider screenshots: a flat #F1F1F1
 * backdrop with headline text baked into the left side. These crops frame the
 * product itself so the images read as clean studio shots inside a stone plate.
 */
export interface ImageCrop {
  /** object-position for object-fit: cover */
  position: string;
  /** optional magnification, applied around `origin` */
  zoom?: number;
  origin?: string;
}

export const imageCrops: Record<string, ImageCrop> = {
  // MobilMIG-250 with detail callouts
  "/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png": { position: "77% 50%" },
  // Alphaforce machine range
  "/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png": { position: "74% 50%" },
  // SR-9 torch (sits in a box at the top right)
  "/lovable-uploads/b18f28a7-bbcf-4e80-bdb1-20658741c220.png": { position: "100% 50%", zoom: 2.93, origin: "90% 8.2%" },
  // Tungsten electrodes
  "/lovable-uploads/c130a5f9-172a-4bb6-8b27-b25bb1b24901.png": { position: "58% 50%", zoom: 1.25, origin: "58% 52%" },
  // Automatic welding helmets
  "/lovable-uploads/d5baef27-480d-4e81-a82b-63ba4c102335.png": { position: "72% 50%" },
};

export const getImageCrop = (src: string): ImageCrop => imageCrops[src] ?? { position: "50% 50%" };
