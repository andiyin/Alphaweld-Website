import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import alphaweldLogo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  
  const navigation = [
    { name: t('nav.home'), href: "/" },
    { 
      name: t('nav.products'), 
      href: "/products",
      submenu: [
        { name: t('products.categories.migmag'), href: "/products/migmag-brenner" },
        { name: t('products.categories.wig'), href: "/products/wig-brenner" },
        { name: t('products.categories.plasma'), href: "/products/plasma-brenner" },
        { name: t('products.categories.machines'), href: "/products/machines" },
        { name: t('products.categories.tungsten'), href: "/products/tungsten" },
        { name: t('products.categories.safety'), href: "/products/arbeitsschutz" },
      ]
    },
    { name: t('nav.news'), href: "/news" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b shadow-elegant">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 border-b border-muted text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+49 (0)271 317897-0</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`gap-1 ${i18n.language === 'de' ? 'text-primary' : ''}`}
              onClick={() => handleLanguageChange('de')}
            >
              <Globe className="h-4 w-4" />
              DE
            </Button>
            <div className="h-4 w-px bg-border" />
            <Button 
              variant="ghost" 
              size="sm"
              className={i18n.language === 'en' ? 'text-primary' : ''}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="relative flex items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={alphaweldLogo} 
              alt="Alphaweld GmbH" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Absolutely Centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-card border shadow-industrial rounded-lg py-2 min-w-[200px]">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Search */}
            <div className="hidden md:block">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                  <Input
                    placeholder={t('common.search')}
                    className="w-64"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-2 text-foreground hover:text-primary font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;