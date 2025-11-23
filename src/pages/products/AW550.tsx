import ProductPage from "@/components/ProductPage";

const AW550 = () => {
  const technicalSpecs = [
    { property: "Belastung", value: "550A, 60% ED" },
    { property: "Kühlung", value: "Wassergekühlt" },
    { property: "Drahtvorschub", value: "0,8-1,6mm" },
    { property: "Schutzgas", value: "CO2, Argon-Mix" },
    { property: "Anschluss", value: "Euro-Zentralanschluss" },
    { property: "Kabellänge", value: "3m, 4m, 5m" },
    { property: "Gewicht", value: "ca. 1,2kg" }
  ];

  return (
    <ProductPage
      productName="AW-550"
      category="MIG/MAG BRENNER"
      categoryName="MIG/MAG Brenner"
      categoryId="migmag-brenner"
      productImage="/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png"
      technicalSpecs={technicalSpecs}
      description="Hochleistungs-MIG/MAG-Brenner für industrielle Anwendungen mit wassergekühlter Ausführung."
      shortDescription="Premium Hochleistungsbrener für maximale Leistung"
      features={["Maximale Leistung", "Wassergekühlt", "Industriestandard", "Langlebigkeit"]}
      articleNumber="AW-550-001"
    />
  );
};

export default AW550;