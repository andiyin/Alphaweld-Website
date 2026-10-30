import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import alphaweldLogo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("nav.products"), href: "/products" },
    { name: t("nav.news"), href: "/news" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const legalLinks = [
    { name: t("footer.legal.imprint"), href: "/impressum" },
    { name: t("footer.legal.privacy"), href: "/datenschutz" },
    { name: t("footer.legal.terms"), href: "/agb" },
  ];

  return (
    <footer className="border-t border-line bg-stone">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-24">
          {/* Company */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link to="/" className="inline-block" aria-label="Alphaweld GmbH">
              <img src={alphaweldLogo} alt="Alphaweld GmbH" className="h-11 w-auto" />
            </Link>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-[0.9375rem] font-medium text-ink">Alphaweld GmbH</span>
              <span className="h-px w-6 translate-y-[-4px] bg-ink/25" aria-hidden="true" />
              <span className="text-[0.9375rem] text-ink/60">{t("footer.company")}</span>
            </div>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h2 className="eyebrow text-ink/50">{t("footer.quickLinks")}</h2>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="link-draw text-[0.9375rem] text-ink/80 hover:text-ink">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-2">
            <h2 className="eyebrow text-ink/50">{t("footer.contact")}</h2>
            <address className="mt-6 space-y-4 text-[0.9375rem] not-italic leading-relaxed text-ink/80">
              <p>
                Geisweider Str. 130
                <br />
                D-57078 Siegen
              </p>
              <p>
                Tel: +49 (0)271 317897-0
                <br />
                Fax: +49 (0)271 317897-29
              </p>
              <a href="mailto:welding@alphaweld.de" className="link-draw inline-block text-ink hover:text-ink">
                welding@alphaweld.de
              </a>
            </address>
          </div>

          {/* Hotline */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="eyebrow text-ink/50">{t("footer.hotline")}</h2>
            <div className="mt-6 border-l-2 border-amber pl-5">
              <a href="tel:+492713178970" className="block font-display text-[1.875rem] leading-tight text-ink">
                +49 (0)271 317897-0
              </a>
              <p className="mt-2 text-sm text-muted-foreground">{t("footer.hours")}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse gap-4 border-t border-line-strong/60 py-7 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[0.6875rem] tracking-[0.06em] text-ink/50">{t("footer.copyright")}</p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink/60 transition-colors hover:text-ink"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
