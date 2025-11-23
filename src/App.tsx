import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollToTop from "@/hooks/use-scroll-to-top";
import "./i18n";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Products from "./pages/Products";
import SearchResults from "./pages/SearchResults";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";
import SR9 from "./pages/products/SR9";
import P50 from "./pages/products/P50";
import AW550 from "./pages/products/AW550";
import BlackStarPro from "./pages/products/BlackStarPro";
import MIGMAGBrenner from "./pages/categories/MIGMAGBrenner";
import WIGBrenner from "./pages/categories/WIGBrenner";
import PlasmaBrenner from "./pages/categories/PlasmaBrenner";
import Arbeitsschutz from "./pages/categories/Arbeitsschutz";
import CategoryPage from "./components/CategoryPage";
import ProductDetailPage from "./components/ProductDetailPage";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/impressum" element={<Impressum />} />
          
          {/* Category Pages */}
          <Route path="/products/migmag-brenner" element={<CategoryPage categoryId="migmag-brenner" />} />
          <Route path="/products/wig-brenner" element={<CategoryPage categoryId="wig-brenner" />} />
          <Route path="/products/plasma-brenner" element={<CategoryPage categoryId="plasma-brenner" />} />
          <Route path="/products/arbeitsschutz" element={<CategoryPage categoryId="arbeitsschutz" />} />
          <Route path="/products/machines" element={<CategoryPage categoryId="machines" />} />
          <Route path="/products/tungsten" element={<CategoryPage categoryId="tungsten" />} />
          
          {/* Individual Product Pages */}
          <Route path="/products/aw-150" element={<ProductDetailPage productId="aw-150" />} />
          <Route path="/products/aw-240" element={<ProductDetailPage productId="aw-240" />} />
          <Route path="/products/aw-400" element={<ProductDetailPage productId="aw-400" />} />
          <Route path="/products/aw-550" element={<ProductDetailPage productId="aw-550" />} />
          <Route path="/products/sr-9" element={<ProductDetailPage productId="sr-9" />} />
          <Route path="/products/sr-17" element={<ProductDetailPage productId="sr-17" />} />
          <Route path="/products/sr-26" element={<ProductDetailPage productId="sr-26" />} />
          <Route path="/products/p-50" element={<ProductDetailPage productId="p-50" />} />
          <Route path="/products/p-70" element={<ProductDetailPage productId="p-70" />} />
          <Route path="/products/black-star-pro" element={<ProductDetailPage productId="black-star-pro" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
