import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container grid min-h-[60vh] grid-cols-1 content-center gap-10 py-24 md:grid-cols-12 md:gap-8">
        <p className="font-display text-[clamp(7rem,20vw,16rem)] leading-[0.8] text-ink md:col-span-7">404</p>
        <div className="flex flex-col justify-end md:col-span-5">
          <span className="mb-6 block h-px w-10 bg-amber" aria-hidden="true" />
          <h1 className="display-sm text-ink">Oops! Page not found</h1>
          <p className="mt-3 font-mono text-xs text-ink/50">{location.pathname}</p>
          <Link to="/" className="group mt-10 inline-flex items-center gap-2 text-[0.9375rem] text-ink">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="link-draw">Return to Home</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
