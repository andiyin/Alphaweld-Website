import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  
  const newsItems = [
    {
      id: 1,
      title: "Neue MIG/MAG Brenner Serie AW-350 verfügbar",
      excerpt: "Entdecken Sie unsere neueste Generation von MIG/MAG Brennern mit verbesserter Ergonomie und höherer Leistung.",
      date: "2024-03-15",
      category: "Produktnews",
      image: "/placeholder.svg",
      slug: "neue-mig-mag-brenner-serie-aw-350"
    },
    {
      id: 2,
      title: "Alphaweld auf der Schweissen & Schneiden 2024",
      excerpt: "Besuchen Sie uns auf der führenden Fachmesse für Füge-, Trenn- und Beschichtungstechnik in Essen.",
      date: "2024-03-10",
      category: "Events",
      image: "/placeholder.svg",
      slug: "alphaweld-schweissen-schneiden-2024"
    },
    {
      id: 3,
      title: "Nachhaltigkeitsinitiative: CO2-neutraler Versand",
      excerpt: "Ab sofort bieten wir klimaneutralen Versand für alle unsere Produkte an und unterstützen zertifizierte Umweltprojekte.",
      date: "2024-03-05",
      category: "Unternehmen",
      image: "/placeholder.svg",
      slug: "nachhaltigkeitsinitiative-co2-neutraler-versand"
    },
    {
      id: 4,
      title: "Schulungsprogramm für Schweißfachkräfte startet",
      excerpt: "Neue Weiterbildungsmöglichkeiten in Kooperation mit regionalen Bildungseinrichtungen.",
      date: "2024-02-28",
      category: "Bildung",
      image: "/placeholder.svg",
      slug: "schulungsprogramm-schweissfachkraefte"
    },
    {
      id: 5,
      title: "Erweiterung des Arbeitsschutz-Sortiments",
      excerpt: "Neue Schweißerhelme und Schutzausrüstung für höchste Sicherheitsstandards am Arbeitsplatz.",
      date: "2024-02-20",
      category: "Produktnews",
      image: "/placeholder.svg",
      slug: "erweiterung-arbeitsschutz-sortiment"
    },
    {
      id: 6,
      title: "Digitale Transformation: Neuer Online-Konfigurator",
      excerpt: "Konfigurieren Sie Ihre Schweißausrüstung jetzt noch einfacher mit unserem neuen digitalen Tool.",
      date: "2024-02-15",
      category: "Digital",
      image: "/placeholder.svg",
      slug: "digitale-transformation-online-konfigurator"
    }
  ];

  const categories = [
    t('news.categories.all'), 
    t('news.categories.products'), 
    t('news.categories.events'), 
    t('news.categories.company'), 
    t('news.categories.education'), 
    t('news.categories.digital')
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Produktnews":
        return "bg-primary/10 text-primary";
      case "Events":
        return "bg-secondary/10 text-secondary";
      case "Unternehmen":
        return "bg-green-100 text-green-700";
      case "Bildung":
        return "bg-blue-100 text-blue-700";
      case "Digital":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('news.title')}</h1>
              <p className="text-xl text-white/90">
                {t('news.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="shadow-elegant hover:shadow-industrial transition-all duration-300 group">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <Calendar className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm">{t('news.imageLoading')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(item.date).toLocaleDateString('de-DE')}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Button variant="outline" className="w-full group/btn">
                      {t('news.readMore')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Load More */}
        <section className="pb-16">
          <div className="container mx-auto px-4 text-center">
            <Button variant="outline" size="lg">
              {t('news.loadMore')}
            </Button>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default News;