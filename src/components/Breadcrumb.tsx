import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const { t } = useTranslation();
  // Some callers pass "home" themselves; avoid rendering it twice.
  const trail = items.filter((item) => item.href !== "/");

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em]">
        <li>
          <Link to="/" className="text-ink/45 transition-colors hover:text-ink">
            {t("breadcrumb.home")}
          </Link>
        </li>
        {trail.map((item, index) => (
          <li key={index} className="flex items-center gap-2.5">
            <span className="text-ink/25" aria-hidden="true">/</span>
            {item.href ? (
              <Link to={item.href} className="text-ink/45 transition-colors hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
