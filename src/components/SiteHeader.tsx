import { Link } from "@tanstack/react-router";
import { SiteLogo } from "@/components/SiteLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Vision" },
  { to: "/domains", label: "Domains" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/faculty", label: "Faculty" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-plum/10">
      <div className="container-page h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <SiteLogo className="group-hover:rotate-12 transition-transform" />
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-pomegranate">SSSIHL</span>
            <span className="text-sm font-semibold text-plum-deep tracking-tight">Centre of Excellence</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-pomegranate" }}
              activeOptions={{ exact: l.to === "/" }}
              className="text-plum-deep/80 hover:text-pomegranate transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-turmeric after:transition-all"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex px-4 py-2 bg-plum text-cream rounded-full text-sm font-medium hover:bg-pomegranate transition-colors shadow-md shadow-plum/20"
        >
          Partner with us
        </Link>
      </div>
    </header>
  );
}
