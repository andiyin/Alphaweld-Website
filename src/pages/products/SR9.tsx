import ProductPage from "@/components/ProductPage";

const SR9 = () => {
  const technicalSpecs = [
    { property: "Kühlung", value: "Luftgekühlt" },
    { property: "Belastung", value: "AC 80A, DC 110A, 60% ED" },
    { property: "Elektroden", value: "Ø0,5-1,6mm" },
    { property: "Schutzgas", value: "Argon, Helium" },
    { property: "Anschluss", value: "Zentralanschluss" },
    { property: "Kabellänge", value: "4m Standard" },
    { property: "Gewicht", value: "ca. 280g" }
  ];

  return (
    <ProductPage
      productName="SR-9"
      category="WIG BRENNER"
      categoryName="WIG Brenner"
      categoryId="wig-brenner"
      productImage="/lovable-uploads/b18f28a7-bbcf-4e80-bdb1-20658741c220.png"
      technicalSpecs={technicalSpecs}
      description="Luftgekühlter WIG-Brenner für präzise Schweißarbeiten mit hoher Belastbarkeit und ergonomischem Design."
      shortDescription="Luftgekühlter Präzisionsbrener für anspruchsvolle Arbeiten"
      features={["Präzise Schweißführung", "Ergonomisches Design", "Hohe Belastbarkeit", "Zuverlässige Performance"]}
      articleNumber="SR-9-001"
    />
  );
};

export default SR9;