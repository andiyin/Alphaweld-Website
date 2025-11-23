export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  shortDescription: string;
  image: string;
  images?: string[];
  technicalSpecs: Array<{ property: string; value: string }>;
  features: string[];
  explosionDrawing?: string;
  datasheet?: string;
  price?: string;
  articleNumber?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'migmag-brenner',
    name: 'MIG/MAG Brenner',
    description: 'Hochwertige Schweißbrenner für professionelle Anwendungen',
    image: '/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png',
    products: [
      {
        id: 'aw-150',
        name: 'AW-150',
        category: 'MIG/MAG BRENNER',
        categoryId: 'migmag-brenner',
        description: 'Luftgekühlter MIG/MAG-Brenner für den professionellen Einsatz mit hoher Belastbarkeit und ergonomischem Design.',
        shortDescription: 'Luftgekühlter Brenner für professionelle Anwendungen',
        image: '/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png',
        images: ['/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png'],
        technicalSpecs: [
          { property: 'Belastung', value: '150A, 60% ED' },
          { property: 'Kühlung', value: 'Luftgekühlt' },
          { property: 'Drahtvorschub', value: '0,6-1,2mm' },
          { property: 'Schutzgas', value: 'CO2, Argon-Mix' },
          { property: 'Anschluss', value: 'Euro-Zentralanschluss' },
          { property: 'Kabellänge', value: '3m Standard' },
          { property: 'Gewicht', value: 'ca. 800g' }
        ],
        features: [
          'Ergonomisches Design',
          'Robuste Bauweise',
          'Einfacher Drahtvorschub',
          'Hohe Belastbarkeit'
        ],
        articleNumber: 'AW-150-001'
      },
      {
        id: 'aw-240',
        name: 'AW-240',
        category: 'MIG/MAG BRENNER',
        categoryId: 'migmag-brenner',
        description: 'Mittlere Leistungsklasse für vielseitige Schweißarbeiten mit optimaler Balance zwischen Leistung und Handhabung.',
        shortDescription: 'Vielseitiger Brenner für mittlere Anwendungen',
        image: '/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png',
        images: ['/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png'],
        technicalSpecs: [
          { property: 'Belastung', value: '240A, 60% ED' },
          { property: 'Kühlung', value: 'Luftgekühlt' },
          { property: 'Drahtvorschub', value: '0,8-1,4mm' },
          { property: 'Schutzgas', value: 'CO2, Argon-Mix' },
          { property: 'Anschluss', value: 'Euro-Zentralanschluss' },
          { property: 'Kabellänge', value: '3m, 4m' },
          { property: 'Gewicht', value: 'ca. 900g' }
        ],
        features: [
          'Optimierte Leistung',
          'Zuverlässige Performance',
          'Komfortable Handhabung',
          'Langlebige Konstruktion'
        ],
        articleNumber: 'AW-240-001'
      },
      {
        id: 'aw-400',
        name: 'AW-400',
        category: 'MIG/MAG BRENNER',
        categoryId: 'migmag-brenner',
        description: 'Hochleistungs-Brenner für industrielle Anwendungen mit wassergekühlter Ausführung.',
        shortDescription: 'Hochleistungsbrener für industrielle Anwendungen',
        image: '/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png',
        images: ['/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png'],
        technicalSpecs: [
          { property: 'Belastung', value: '400A, 60% ED' },
          { property: 'Kühlung', value: 'Wassergekühlt' },
          { property: 'Drahtvorschub', value: '0,8-1,6mm' },
          { property: 'Schutzgas', value: 'CO2, Argon-Mix' },
          { property: 'Anschluss', value: 'Euro-Zentralanschluss' },
          { property: 'Kabellänge', value: '4m, 5m' },
          { property: 'Gewicht', value: 'ca. 1,1kg' }
        ],
        features: [
          'Wassergekühlte Ausführung',
          'Industrielle Qualität',
          'Hohe Einschaltdauer',
          'Professionelle Anwendung'
        ],
        articleNumber: 'AW-400-001'
      },
      {
        id: 'aw-550',
        name: 'AW-550',
        category: 'MIG/MAG BRENNER',
        categoryId: 'migmag-brenner',
        description: 'Hochleistungs-MIG/MAG-Brenner für industrielle Anwendungen mit wassergekühlter Ausführung.',
        shortDescription: 'Premium Hochleistungsbrener',
        image: '/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png',
        images: ['/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png'],
        technicalSpecs: [
          { property: 'Belastung', value: '550A, 60% ED' },
          { property: 'Kühlung', value: 'Wassergekühlt' },
          { property: 'Drahtvorschub', value: '0,8-1,6mm' },
          { property: 'Schutzgas', value: 'CO2, Argon-Mix' },
          { property: 'Anschluss', value: 'Euro-Zentralanschluss' },
          { property: 'Kabellänge', value: '3m, 4m, 5m' },
          { property: 'Gewicht', value: 'ca. 1,2kg' }
        ],
        features: [
          'Maximale Leistung',
          'Wassergekühlte Premium-Ausführung',
          'Industriestandard',
          'Langlebigkeit'
        ],
        articleNumber: 'AW-550-001',
        explosionDrawing: '/lovable-uploads/0a663619-e10b-463d-b6f6-fdf3ec4f5e9b.png'
      }
    ]
  },
  {
    id: 'wig-brenner',
    name: 'WIG Brenner',
    description: 'Präzise WIG-Brenner für anspruchsvolle Schweißarbeiten',
    image: '/lovable-uploads/b18f28a7-bbcf-4e80-bdb1-20658741c220.png',
    products: [
      {
        id: 'sr-9',
        name: 'SR-9',
        category: 'WIG BRENNER',
        categoryId: 'wig-brenner',
        description: 'Luftgekühlter WIG-Brenner für präzise Schweißarbeiten mit hoher Belastbarkeit und ergonomischem Design.',
        shortDescription: 'Luftgekühlter Präzisionsbrener',
        image: '/lovable-uploads/b18f28a7-bbcf-4e80-bdb1-20658741c220.png',
        images: ['/lovable-uploads/b18f28a7-bbcf-4e80-bdb1-20658741c220.png'],
        technicalSpecs: [
          { property: 'Kühlung', value: 'Luftgekühlt' },
          { property: 'Belastung', value: 'AC 80A, DC 110A, 60% ED' },
          { property: 'Elektroden', value: 'Ø0,5-1,6mm' },
          { property: 'Schutzgas', value: 'Argon, Helium' },
          { property: 'Anschluss', value: 'Zentralanschluss' },
          { property: 'Kabellänge', value: '4m Standard' },
          { property: 'Gewicht', value: 'ca. 280g' }
        ],
        features: [
          'Präzise Schweißführung',
          'Ergonomisches Design',
          'Hohe Belastbarkeit',
          'Zuverlässige Performance'
        ],
        articleNumber: 'SR-9-001'
      },
      {
        id: 'sr-17',
        name: 'SR-17',
        category: 'WIG BRENNER',
        categoryId: 'wig-brenner',
        description: 'Luftgekühlter WIG-Brenner mit höherer Leistung für anspruchsvolle Schweißaufgaben.',
        shortDescription: 'Leistungsstarker luftgekühlter Brenner',
        image: '/lovable-uploads/b18f28a7-bbcf-4e80-bdb1-20658741c220.png',
        images: ['/lovable-uploads/b18f28a7-bbcf-4e80-bdb1-20658741c220.png'],
        technicalSpecs: [
          { property: 'Kühlung', value: 'Luftgekühlt' },
          { property: 'Belastung', value: 'AC 120A, DC 150A, 60% ED' },
          { property: 'Elektroden', value: 'Ø1,0-2,4mm' },
          { property: 'Schutzgas', value: 'Argon, Helium' },
          { property: 'Anschluss', value: 'Zentralanschluss' },
          { property: 'Kabellänge', value: '4m, 8m' },
          { property: 'Gewicht', value: 'ca. 320g' }
        ],
        features: [
          'Erhöhte Leistung',
          'Robuste Bauweise',
          'Flexible Elektrodenwahl',
          'Professionelle Qualität'
        ],
        articleNumber: 'SR-17-001'
      },
      {
        id: 'sr-26',
        name: 'SR-26',
        category: 'WIG BRENNER',
        categoryId: 'wig-brenner',
        description: 'Wassergekühlter WIG-Brenner für Hochleistungsanwendungen und Dauerbetrieb.',
        shortDescription: 'Wassergekühlter Hochleistungsbrener',
        image: '/lovable-uploads/b18f28a7-bbcf-4e80-bdb1-20658741c220.png',
        images: ['/lovable-uploads/b18f28a7-bbcf-4e80-bdb1-20658741c220.png'],
        technicalSpecs: [
          { property: 'Kühlung', value: 'Wassergekühlt' },
          { property: 'Belastung', value: 'AC 200A, DC 300A, 60% ED' },
          { property: 'Elektroden', value: 'Ø1,0-3,2mm' },
          { property: 'Schutzgas', value: 'Argon, Helium' },
          { property: 'Anschluss', value: 'Zentralanschluss' },
          { property: 'Kabellänge', value: '4m, 8m' },
          { property: 'Gewicht', value: 'ca. 450g' }
        ],
        features: [
          'Wasserkühlung',
          'Maximale Leistung',
          'Dauerbetrieb möglich',
          'Industriestandard'
        ],
        articleNumber: 'SR-26-001'
      }
    ]
  },
  {
    id: 'plasma-brenner',
    name: 'Plasma Brenner',
    description: 'Moderne Plasma-Technologie für saubere Schnitte',
    image: '/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png',
    products: [
      {
        id: 'p-50',
        name: 'P-50',
        category: 'PLASMA BRENNER',
        categoryId: 'plasma-brenner',
        description: 'Professioneller Plasmabrenner für präzise Schneidarbeiten mit hoher Schneidleistung und Zuverlässigkeit.',
        shortDescription: 'Professioneller Plasmabrenner',
        image: '/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png',
        images: ['/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png'],
        technicalSpecs: [
          { property: 'Schneidleistung', value: 'bis 12mm' },
          { property: 'Belastung', value: '50A, 60% ED' },
          { property: 'Druckluft', value: '5-6 bar' },
          { property: 'Anschluss', value: 'Zentralanschluss' },
          { property: 'Kabellänge', value: '6m Standard' },
          { property: 'Schneidgeschwindigkeit', value: 'bis 2000mm/min' },
          { property: 'Gewicht', value: 'ca. 420g' }
        ],
        features: [
          'Präzise Schnitte',
          'Hohe Geschwindigkeit',
          'Zuverlässige Leistung',
          'Einfache Bedienung'
        ],
        articleNumber: 'P-50-001',
        explosionDrawing: '/lovable-uploads/0a663619-e10b-463d-b6f6-fdf3ec4f5e9b.png'
      },
      {
        id: 'p-70',
        name: 'P-70',
        category: 'PLASMA BRENNER',
        categoryId: 'plasma-brenner',
        description: 'Erweiterte Plasma-Schneidleistung für dickere Materialien und anspruchsvolle Anwendungen.',
        shortDescription: 'Erweiterte Schneidleistung',
        image: '/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png',
        images: ['/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png'],
        technicalSpecs: [
          { property: 'Schneidleistung', value: 'bis 20mm' },
          { property: 'Belastung', value: '70A, 60% ED' },
          { property: 'Druckluft', value: '5-7 bar' },
          { property: 'Anschluss', value: 'Zentralanschluss' },
          { property: 'Kabellänge', value: '6m, 10m' },
          { property: 'Schneidgeschwindigkeit', value: 'bis 1800mm/min' },
          { property: 'Gewicht', value: 'ca. 480g' }
        ],
        features: [
          'Erhöhte Schneidleistung',
          'Dickere Materialien',
          'Professionelle Anwendung',
          'Robust und zuverlässig'
        ],
        articleNumber: 'P-70-001'
      }
    ]
  },
  {
    id: 'arbeitsschutz',
    name: 'Arbeitsschutz',
    description: 'Schutzausrüstung höchster Qualität',
    image: '/lovable-uploads/2890bddb-14c9-4356-9ef2-cdaad5887d85.png',
    products: [
      {
        id: 'black-star-pro',
        name: 'Black Star Pro',
        category: 'ARBEITSSCHUTZ',
        categoryId: 'arbeitsschutz',
        description: 'Premium Automatikschutzhelm mit großem Sichtfeld und schneller Reaktionszeit für professionelle Schweißarbeiten.',
        shortDescription: 'Premium Automatikschutzhelm',
        image: '/lovable-uploads/2890bddb-14c9-4356-9ef2-cdaad5887d85.png',
        images: ['/lovable-uploads/2890bddb-14c9-4356-9ef2-cdaad5887d85.png'],
        technicalSpecs: [
          { property: 'Schutzstufe', value: 'DIN 9-13 automatisch' },
          { property: 'Sichtfeld', value: '100 x 65mm' },
          { property: 'Reaktionszeit', value: '< 0,1ms (hell zu dunkel)' },
          { property: 'Aufhellzeit', value: '0,1s - 2s einstellbar' },
          { property: 'Betriebstemperatur', value: '-10°C bis +60°C' },
          { property: 'Batterie', value: 'Austauschbare Lithium' },
          { property: 'Gewicht', value: 'ca. 450g' }
        ],
        features: [
          'Großes Sichtfeld',
          'Automatische Abdunkelung',
          'Schnelle Reaktion',
          'Ergonomisches Design'
        ],
        articleNumber: 'BSP-001'
      }
    ]
  }
];