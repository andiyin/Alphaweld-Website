import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import alphaweldLogo from "@/assets/logo.png";

const PHONE_DISPLAY = "+49 (0)271 317897-0";
const PHONE_HREF = "tel:+492713178970";

const LanguageToggle = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("en") ? "en" : "de";

  return (
    <div className={cn("flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.12em]", className)}>
      {(["de", "en"] as const).map((lng, i) => (
        <span key={lng} className="flex items-center gap-2">
          {i > 0 && <span className="text-ink/25" aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={current === lng}
            className={cn(
              "uppercase transition-colors duration-200",
              current === lng ? "text-ink" : "text-ink/45 hover:text-ink"
            )}
          >
            {lng}
          </button>
        </span>
      ))}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const closeTimer = useRef<number>();

  const productLinks = [
    { name: t("products.categories.migmag"), href: "/products/migmag-brenner" },
    { name: t("products.categories.wig"), href: "/products/wig-brenner" },
    { name: t("products.categories.plasma"), href: "/products/plasma-brenner" },
    { name: t("products.categories.machines"), href: "/products/machines" },
    { name: t("products.categories.tungsten"), href: "/products/tungsten" },
    { name: t("products.categories.safety"), href: "/products/arbeitsschutz" },
  ];

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.products"), href: "/products", submenu: productLinks },
    { name: t("nav.news"), href: "/news" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsProductsOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsProductsOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
      setSearchQuery("");
    }
  };

  const openProducts = () => {
    window.clearTimeout(closeTimer.current);
    setIsProductsOpen(true);
  };
  const scheduleCloseProducts = () => {
    closeTimer.current = window.setTimeout(() => setIsProductsOpen(false), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden md:block border-b border-line bg-paper">
        <div className="container flex h-9 items-center justify-between">
          <a
            href={PHONE_HREF}
            className="font-mono text-[0.6875rem] tracking-[0.08em] text-ink/60 transition-colors hover:text-ink"
          >
            {PHONE_DISPLAY}
          </a>
          <LanguageToggle />
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-paper">
        <div className="container relative flex h-[4.5rem] items-center">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center" aria-label="Alphaweld GmbH">
            <img src={alphaweldLogo} alt="Alphaweld GmbH" className="h-9 w-auto md:h-10" />
          </Link>

          {/* Desktop navigation */}
          <nav className="absolute left-1/2 hidden h-full -translate-x-1/2 lg:block" aria-label="Main">
            <ul className="flex h-full items-stretch gap-9">
              {navigation.map((item) => (
                <li
                  key={item.href}
                  className="relative flex items-center"
                  onMouseEnter={item.submenu ? openProducts : undefined}
                  onMouseLeave={item.submenu ? scheduleCloseProducts : undefined}
                >
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    className={cn(
                      "relative flex h-full items-center text-[0.9375rem] transition-colors duration-200",
                      isActive(item.href) ? "text-ink" : "text-ink/60 hover:text-ink"
                    )}
                  >
                    {item.name}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 -bottom-px h-[2px] origin-left bg-amber transition-transform duration-500 ease-refined",
                        isActive(item.href) ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </NavLink>
                  {item.submenu && (
                    <button
                      type="button"
                      className="ml-1 flex h-6 w-5 items-center justify-center text-ink/40 hover:text-ink"
                      aria-expanded={isProductsOpen}
                      aria-controls="products-panel"
                      aria-label={item.name}
                      onClick={() => setIsProductsOpen((v) => !v)}
                    >
                      <ChevronDown
                        className={cn("h-3.5 w-3.5 transition-transform duration-300", isProductsOpen && "rotate-180")}
                      />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                setIsSearchOpen((v) => !v);
                setIsProductsOpen(false);
              }}
              className="hidden h-10 w-10 items-center justify-center text-ink/70 transition-colors hover:text-ink lg:flex"
              aria-label={t("common.search")}
              aria-expanded={isSearchOpen}
            >
              {isSearchOpen ? <X className="h-[18px] w-[18px]" /> : <Search className="h-[18px] w-[18px]" />}
            </button>
            <Link
              to="/contact"
              className="ml-4 hidden items-center gap-2 border-l border-line pl-6 text-[0.9375rem] text-ink lg:flex group"
            >
              <span className="link-draw">{t("common.contact")}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Products panel */}
        <div
          id="products-panel"
          onMouseEnter={openProducts}
          onMouseLeave={scheduleCloseProducts}
          className={cn(
            "absolute inset-x-0 top-full hidden border-b border-line bg-paper transition-[opacity,visibility] duration-300 ease-refined lg:block",
            isProductsOpen ? "visible opacity-100" : "invisible opacity-0"
          )}
        >
          <div className="container grid grid-cols-12 gap-8 py-12">
            <div className="col-span-4 flex flex-col justify-between pr-8">
              <div>
                <p className="eyebrow text-ink/50">{t("nav.products")}</p>
                <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {t("products.subtitle")}
                </p>
              </div>
              <Link to="/products" className="group mt-8 inline-flex items-center gap-2 text-[0.9375rem] text-ink">
                <span className="link-draw">{t("products.title")}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <ul className="col-span-8 grid grid-cols-3 border-l border-t border-line">
              {productLinks.map((item, i) => (
                <li key={item.href} className="border-b border-r border-line">
                  <Link
                    to={item.href}
                    className="group flex h-full min-h-[7.5rem] flex-col justify-between p-5 transition-colors duration-300 hover:bg-stone"
                  >
                    <span className="index-num text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex items-end justify-between gap-3">
                      <span className="font-display text-[1.5rem] leading-tight text-ink">{item.name}</span>
                      <ArrowRight className="mb-1.5 h-4 w-4 shrink-0 -translate-x-1 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Search panel */}
        <div
          className={cn(
            "absolute inset-x-0 top-full hidden border-b border-line bg-paper lg:block",
            isSearchOpen ? "animate-fade-in" : "!hidden"
          )}
        >
          <form onSubmit={handleSearch} className="container flex items-center gap-5 py-8" role="search">
            <Search className="h-5 w-5 shrink-0 text-ink/40" />
            {isSearchOpen && (
              <input
                autoFocus
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("common.search")}
                aria-label={t("common.search")}
                className="w-full bg-transparent font-display text-[2.25rem] leading-none text-ink placeholder:text-ink/30 focus:outline-none"
              />
            )}
            <button type="submit" className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-ink" aria-label={t("common.search")}>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            "absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto bg-paper lg:hidden",
            isMenuOpen ? "block animate-fade-in" : "hidden"
          )}
        >
          <div className="container flex min-h-full flex-col py-8">
            <form onSubmit={handleSearch} className="flex items-center gap-3 border-b border-ink/20 pb-3" role="search">
              <Search className="h-4 w-4 shrink-0 text-ink/40" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("common.search")}
                aria-label={t("common.search")}
                className="w-full bg-transparent py-1 text-base text-ink placeholder:text-ink/40 focus:outline-none"
              />
            </form>

            <nav className="mt-6" aria-label="Mobile">
              <ul>
                {navigation.map((item, i) => (
                  <li key={item.href} className="border-b border-line">
                    <Link to={item.href} className="flex items-baseline gap-4 py-4">
                      <span className="index-num w-6 text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                      <span className={cn("font-display text-[2rem] leading-none", isActive(item.href) ? "text-ink" : "text-ink/80")}>
                        {item.name}
                      </span>
                    </Link>
                    {item.submenu && (
                      <ul className="grid grid-cols-1 gap-x-6 pb-5 pl-10 sm:grid-cols-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.href}>
                            <Link to={sub.href} className="block py-1.5 text-[0.9375rem] text-ink/60 hover:text-ink">
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex items-end justify-between gap-6 pt-12">
              <div className="space-y-1.5">
                <a href={PHONE_HREF} className="block font-mono text-xs tracking-[0.06em] text-ink">
                  {PHONE_DISPLAY}
                </a>
                <a href="mailto:welding@alphaweld.de" className="block font-mono text-xs tracking-[0.06em] text-ink/60">
                  welding@alphaweld.de
                </a>
              </div>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
