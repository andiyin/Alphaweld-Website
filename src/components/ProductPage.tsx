import { ReactNode } from "react";
import Layout from "./Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Phone } from "lucide-react";

interface TechnicalSpec {
  property: string;
  value: string;
}

interface ProductPageProps {
  productName: string;
  category: string;
  categoryName: string;
  categoryId: string;
  productImage: string;
  productImages?: string[];
  technicalSpecs: TechnicalSpec[];
  features?: string[];
  explosionDrawing?: string;
  description?: string;
  shortDescription?: string;
  articleNumber?: string;
  datasheet?: string;
}

const ProductPage = ({
  productName,
  category,
  productImage,
  technicalSpecs,
  explosionDrawing,
  description
}: ProductPageProps) => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-white/80 mb-2">{category}</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">
                {productName}
              </h1>
              {description && (
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            {/* Product Image */}
            <div className="space-y-6">
              <Card className="shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <img 
                      src={productImage} 
                      alt={productName}
                      className="max-w-full max-h-full object-contain p-8"
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <div className="flex gap-4">
                <Button className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Datenblatt herunterladen
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Beratung anfordern
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <Tabs defaultValue="specifications" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="specifications" className="text-sm">
                    TECHNISCHE EIGENSCHAFTEN
                  </TabsTrigger>
                  <TabsTrigger value="explosion" className="text-sm">
                    EXPLOSIONSZEICHNUNG
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="specifications" className="space-y-6">
                  <Card className="shadow-elegant">
                    <CardHeader>
                      <CardTitle>Technische Daten nach EN 60 974-7:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-0">
                        {technicalSpecs.map((spec, index) => (
                          <div 
                            key={index}
                            className={`grid grid-cols-2 py-3 px-4 ${
                              index % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                            }`}
                          >
                            <div className="font-medium text-muted-foreground">
                              {spec.property}
                            </div>
                            <div className="font-medium">
                              {spec.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="explosion">
                  <Card className="shadow-elegant">
                    <CardHeader>
                      <CardTitle>Explosionszeichnung</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {explosionDrawing ? (
                        <div className="bg-muted/30 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                          <img 
                            src={explosionDrawing} 
                            alt={`Explosionszeichnung ${productName}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="bg-muted/30 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-lg font-semibold mb-2">Explosionszeichnung</p>
                            <p className="text-muted-foreground">
                              Detaillierte Explosionszeichnung für {productName}
                            </p>
                            <Button variant="outline" className="mt-4">
                              <Download className="h-4 w-4 mr-2" />
                              Zeichnung herunterladen
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="shadow-elegant bg-gradient-secondary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Haben Sie Fragen zu diesem Produkt?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Unsere Experten beraten Sie gerne bei der Auswahl der passenden Schweißtechnik 
                für Ihre spezifischen Anforderungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  +49 (0)271 317897-0
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Kontaktformular
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;