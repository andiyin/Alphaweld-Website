import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { Search, ArrowRight } from "lucide-react";
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

  // Pick up new queries submitted from the header while already on this page
  useEffect(() => {
    const q = searchParams.get('q') || '';
    if (q !== searchQuery) {
      setSearchQuery(q);
      searchProducts(q);
    }
  }, [searchParams]);

  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: '/' },
    { label: 'Suchergebnisse' }
  ];

  return (
    <Layout>
      <section className="border-b border-line">
        <div className="container pb-12 pt-10 md:pb-16 md:pt-14">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="eyebrow mt-14 flex items-center gap-3 text-ink/55 md:mt-24">
            <span className="h-px w-6 bg-amber" aria-hidden="true" />
            Suchergebnisse
          </h1>
          <form onSubmit={handleSearchSubmit} className="mt-8 flex items-center gap-4 border-b border-ink pb-4" role="search">
            <Search className="h-6 w-6 shrink-0 text-ink/35" />
            <input
              type="search"
              placeholder="Produkte durchsuchen..."
              aria-label="Produkte durchsuchen..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent font-display text-[clamp(2rem,5vw,4rem)] leading-none text-ink placeholder:text-ink/25 focus:outline-none"
            />
            <button type="submit" className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink text-paper transition-colors hover:bg-ink-soft" aria-label="Suchen">
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          {isSearching ? (
            <div className="flex items-center gap-4 py-12" role="status">
              <span className="h-px w-16 origin-left animate-pulse bg-ink" aria-hidden="true" />
              <p className="eyebrow text-ink/60">Suche läuft...</p>
            </div>
          ) : searchQuery ? (
            <>
              <div className="mb-14 flex flex-col gap-3 border-b border-line pb-8 md:flex-row md:items-baseline md:justify-between">
                <h2 className="display-sm text-ink">
                  {searchResults.length} Ergebnis{searchResults.length !== 1 ? 'se' : ''} für „{searchQuery}"
                </h2>
                <p className="text-[0.9375rem] text-muted-foreground">
                  {searchResults.length > 0
                    ? 'Gefundene Produkte:'
                    : 'Keine Produkte gefunden. Versuchen Sie andere Suchbegriffe.'
                  }
                </p>
              </div>

              {searchResults.length > 0 && (
                <ul className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  {searchResults.map((product) => {
                    const category = productCategories.find(cat => cat.id === product.categoryId);
                    return (
                      <li key={product.id}>
                        <ProductCard product={product} categoryLabel={category?.name} />
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <h2 className="display-md text-ink md:col-span-5">Produktsuche</h2>
              <p className="lede md:col-span-5 md:col-start-8">
                Geben Sie einen Suchbegriff ein, um unsere Produkte zu durchsuchen.
                <span className="mt-2 block text-[0.9375rem] text-ink/40">Produktname, Artikelnummer oder Beschreibung...</span>
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SearchResults;
