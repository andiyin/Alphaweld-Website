import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { productCategories } from "@/data/products";

const WIGBrenner = () => {
  const { t } = useTranslation();
  const category = productCategories.find(cat => cat.id === 'wig-brenner');

  if (!category) return null;

  const breadcrumbItems = [
    { label: t('breadcrumb.products'), href: '/products' },
    { label: category.name }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb items={breadcrumbItems} />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
              <p className="text-xl text-white/90">{category.description}</p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <Card key={product.id} className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="relative bg-gradient-to-br from-muted/30 to-muted/50 aspect-square flex items-center justify-center p-8">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        {product.articleNumber}
                      </Badge>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{product.shortDescription}</p>
                      
                      {/* Key Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Specs */}
                      <div className="mb-6">
                        <div className="space-y-1 text-sm">
                          {product.technicalSpecs.slice(0, 2).map((spec, index) => (
                            <div key={index} className="flex justify-between">
                              <span className="text-muted-foreground">{spec.property}:</span>
                              <span className="text-foreground font-medium">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button asChild className="w-full" variant="cta">
                        <Link to={`/products/${category.id}/${product.id}`}>
                          {t('products.details')}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('contact.consultation')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('contact.consultationText')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="cta" size="lg">
                  <Link to="/contact">{t('common.requestConsultation')}</Link>
                </Button>
                <Button variant="outline" size="lg">
                  {t('common.requestCatalog')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WIGBrenner;