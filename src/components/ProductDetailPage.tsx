import { ReactNode } from "react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Phone, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Product, productCategories } from "@/data/products";

interface ProductDetailPageProps {
  productId: string;
}

const ProductDetailPage = ({ productId }: ProductDetailPageProps) => {
  const { t } = useTranslation();
  
  // Find the product across all categories
  let product: Product | undefined;
  let categoryName = "";
  
  for (const category of productCategories) {
    const foundProduct = category.products.find(p => p.id === productId);
    if (foundProduct) {
      product = foundProduct;
      categoryName = category.name;
      break;
    }
  }

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Produkt nicht gefunden</h1>
            <p className="text-muted-foreground">Das angeforderte Produkt konnte nicht gefunden werden.</p>
            <Button asChild className="mt-4">
              <Link to="/products">Zurück zu den Produkten</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const breadcrumbItems = [
    { label: t('breadcrumb.products'), href: '/products' },
    { label: categoryName, href: `/products/${product.categoryId}` },
    { label: product.name }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb items={breadcrumbItems} />
              <div className="flex items-center gap-4 mb-4">
                <Button asChild variant="outline" size="sm" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  <Link to={`/products/${product.categoryId}`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t('products.backToOverview')}
                  </Link>
                </Button>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {product.articleNumber}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">
                {product.name}
              </h1>
              {product.description && (
                <p className="text-xl text-white/90 max-w-3xl">
                  {product.description}
                </p>
              )}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            {/* Product Image Gallery */}
            <div className="space-y-6">
              <Card className="shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-w-full max-h-full object-contain p-8"
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Additional Images */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-gradient-to-br from-muted/30 to-muted/50 flex items-center justify-center">
                          <img 
                            src={image} 
                            alt={`${product.name} - Bild ${index + 2}`}
                            className="max-w-full max-h-full object-contain p-4"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              
              {/* Quick Actions */}
              <div className="flex gap-4">
                <Button className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  {t('products.downloadSheet')}
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {t('products.request')}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <Tabs defaultValue="specifications" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="specifications" className="text-sm">
                    {t('products.technicalSpecs')}
                  </TabsTrigger>
                  <TabsTrigger value="features" className="text-sm">
                    Highlights
                  </TabsTrigger>
                  <TabsTrigger value="explosion" className="text-sm">
                    {t('products.explosionDrawing')}
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="specifications" className="space-y-6">
                  <Card className="shadow-elegant">
                    <CardHeader>
                      <CardTitle>Technische Daten nach EN 60 974-7:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Eigenschaft</TableHead>
                            <TableHead>Wert</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {product.technicalSpecs.map((spec, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium text-muted-foreground">
                                {spec.property}
                              </TableCell>
                              <TableCell className="font-medium">
                                {spec.value}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="features" className="space-y-6">
                  <Card className="shadow-elegant">
                    <CardHeader>
                      <CardTitle>Produkthighlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="explosion">
                  <Card className="shadow-elegant">
                    <CardHeader>
                      <CardTitle>{t('products.explosionDrawing')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {product.explosionDrawing ? (
                        <div className="bg-muted/30 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                          <img 
                            src={product.explosionDrawing} 
                            alt={`Explosionszeichnung ${product.name}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="bg-muted/30 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-lg font-semibold mb-2">{t('products.explosionDrawing')}</p>
                            <p className="text-muted-foreground mb-4">
                              Detaillierte Explosionszeichnung für {product.name}
                            </p>
                            <Button variant="outline">
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

          {/* Downloads Section */}
          <Card className="shadow-elegant mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                {t('products.downloads')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Datenblatt</div>
                      <div className="text-sm text-muted-foreground">PDF • 2.3 MB</div>
                    </div>
                  </div>
                </Button>
                
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Bedienungsanleitung</div>
                      <div className="text-sm text-muted-foreground">PDF • 1.8 MB</div>
                    </div>
                  </div>
                </Button>
                
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Explosionszeichnung</div>
                      <div className="text-sm text-muted-foreground">PDF • 0.9 MB</div>
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

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
                <Button variant="secondary" size="lg" asChild>
                  <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                    <Phone className="h-5 w-5 mr-2" />
                    +49 (0)271 317897-0
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                    Kontaktformular
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
