import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const productCategories = [
    {
      id: 1,
      title: "MIG / MAG BRENNER",
      image: "/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png",
      link: "/products/migmag-brenner",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "WIG BRENNER", 
      image: "/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png",
      link: "/products/wig-brenner",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      title: "PLASMA BRENNER",
      image: "/lovable-uploads/c130a5f9-172a-4bb6-8b27-b25bb1b24901.png",
      link: "/products/plasma-brenner",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 4,
      title: "SCHWEISSMASCHINEN",
      image: "/lovable-uploads/2890bddb-14c9-4356-9ef2-cdaad5887d85.png",
      link: "/products/machines",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 5,
      title: "WOLFRAM-ANSCHLEIFGERÄT",
      image: "/lovable-uploads/d5baef27-480d-4e81-a82b-63ba4c102335.png",
      link: "/products/grinding",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 6,
      title: "WOLFRAMELEKTRODEN",
      image: "/lovable-uploads/ee8d0dd7-081d-48c0-a478-a164baf93dba.png",
      link: "/products/tungsten",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 7,
      title: "ARBEITSSCHUTZ",
      image: "/lovable-uploads/73735c92-654e-44f7-8bc3-75ae1f977ba8.png",
      link: "/products/arbeitsschutz",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">PRODUKTE</h1>
              <p className="text-xl text-white/90">
                Entdecken Sie unser umfassendes Sortiment hochwertiger Schweißprodukte
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* First 4 products - top row */}
        {productCategories.slice(0, 4).map((category) => (
          <Card key={category.id} className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <CardContent className="p-0">
              <Link to={`/products/${category.id}`} className="block">
                      <div className={`relative bg-gradient-to-br ${category.gradient} aspect-square flex items-center justify-center p-8`}>
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="max-w-full max-h-full object-contain filter brightness-110"
                        />
                        <div className="absolute bottom-4 right-4 bg-white/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Bottom row - 3 products centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {productCategories.slice(4, 7).map((category) => (
              <Card key={category.id} className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-0">
                  <Link to={category.link} className="block">
                        <div className={`relative bg-gradient-to-br ${category.gradient} aspect-square flex items-center justify-center p-8`}>
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="max-w-full max-h-full object-contain filter brightness-110"
                          />
                          <div className="absolute bottom-4 right-4 bg-white/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                            {category.title}
                          </h3>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benötigen Sie eine individuelle Beratung?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unser Expertenteam unterstützt Sie bei der Auswahl der optimalen 
                Schweißlösung für Ihre spezifischen Anforderungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="cta" size="lg">
                  <Link to="/contact">Jetzt beraten lassen</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Katalog anfordern
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;