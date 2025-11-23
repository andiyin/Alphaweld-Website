import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { productCategories, Product } from "@/data/products";

const SearchResults = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Search function
  const searchProducts = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const results: Product[] = [];
      const lowerQuery = query.toLowerCase();

      productCategories.forEach(category => {
        category.products.forEach(product => {
          // Search in product name, description, article number, and features
          const searchableText = [
            product.name,
            product.description,
            product.shortDescription,
            product.articleNumber,
            ...product.features,
            ...product.technicalSpecs.map(spec => `${spec.property} ${spec.value}`)
          ].join(' ').toLowerCase();

          if (searchableText.includes(lowerQuery)) {
            results.push(product);
          }
        });
      });

      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Update URL params
    if (query.trim()) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchProducts(searchQuery);
  };

  // Initial search on component mount
  useEffect(() => {
    if (searchQuery) {
      searchProducts(searchQuery);
    }
  }, []);

  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: '/' },
    { label: 'Suchergebnisse' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb items={breadcrumbItems} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Suchergebnisse</h1>
              
              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Produkte durchsuchen..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="pl-10 pr-4 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isSearching ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Suche läuft...</p>
              </div>
            ) : searchQuery ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    {searchResults.length} Ergebnis{searchResults.length !== 1 ? 'se' : ''} für "{searchQuery}"
                  </h2>
                  <p className="text-muted-foreground">
                    {searchResults.length > 0 
                      ? 'Gefundene Produkte:' 
                      : 'Keine Produkte gefunden. Versuchen Sie andere Suchbegriffe.'
                    }
                  </p>
                </div>

                {searchResults.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {searchResults.map((product) => {
                      const category = productCategories.find(cat => cat.id === product.categoryId);
                      return (
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
                              <Badge variant="secondary" className="absolute top-4 left-4 bg-white/90 text-foreground">
                                {category?.name}
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
                                <Link to={`/products/${product.id}`}>
                                  {t('products.details')}
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Produktsuche</h2>
                <p className="text-muted-foreground mb-6">
                  Geben Sie einen Suchbegriff ein, um unsere Produkte zu durchsuchen.
                </p>
                <div className="max-w-md mx-auto">
                  <form onSubmit={handleSearchSubmit}>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        type="text"
                        placeholder="Produktname, Artikelnummer oder Beschreibung..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="pl-10"
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SearchResults;
