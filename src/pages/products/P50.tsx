import ProductPage from "@/components/ProductPage";

const P50 = () => {
  const technicalSpecs = [
    { property: "Schneidleistung", value: "bis 12mm" },
    { property: "Belastung", value: "50A, 60% ED" },
    { property: "Druckluft", value: "5-6 bar" },
    { property: "Anschluss", value: "Zentralanschluss" },
    { property: "Kabellänge", value: "6m Standard" },
    { property: "Schneidgeschwindigkeit", value: "bis 2000mm/min" },
    { property: "Gewicht", value: "ca. 420g" }
  ];

  return (
    <ProductPage
      productName="P-50"
      category="PLASMA BRENNER"
      categoryName="Plasma Brenner"
      categoryId="plasma-brenner"
      productImage="/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png"
      technicalSpecs={technicalSpecs}
      explosionDrawing="/lovable-uploads/0a663619-e10b-463d-b6f6-fdf3ec4f5e9b.png"
      description="Professioneller Plasmabrenner für präzise Schneidarbeiten mit hoher Schneidleistung und Zuverlässigkeit."
      shortDescription="Professioneller Plasmabrenner für präzise Schnitte"
      features={["Präzise Schnitte", "Hohe Geschwindigkeit", "Zuverlässige Leistung", "Einfache Bedienung"]}
      articleNumber="P-50-001"
    />
  );
};

export default P50;