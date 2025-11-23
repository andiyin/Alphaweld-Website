import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
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

  return (
    <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6">
      <Link 
        to="/" 
        className="flex items-center hover:text-white transition-colors"
      >
        <Home className="h-4 w-4 mr-1" />
        {t('breadcrumb.home')}
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
          {item.href ? (
            <Link 
              to={item.href} 
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;