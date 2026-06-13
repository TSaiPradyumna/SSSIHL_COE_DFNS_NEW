import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DomainCard } from "@/components/DomainCard";
import { DOMAINS } from "@/lib/domains";

export const Route = createFileRoute("/domains/")({
  head: () => ({
    meta: [
      { title: "Flagship Domains — SSSIHL Centre of Excellence" },
      { name: "description", content: "Eight flagship research domains spanning cereal & millet technology, dairy, fruits, packaging, food safety and startup incubation." },
      { property: "og:title", content: "Flagship Domains — SSSIHL Centre of Excellence" },
      { property: "og:description", content: "Eight verticals devoted to the complete lifecycle of food preservation, safety and commercialization." },
    ],
  }),
  component: DomainsIndex,
});

function DomainsIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-page pt-16 pb-12 relative">
        <div aria-hidden className="absolute -top-12 right-0 size-80 rounded-full bg-turmeric/20 blur-3xl" />
        <div className="max-w-3xl relative animate-fade-up">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6">08 Flagship Domains</div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-6">
            One Centre, <span className="italic text-shimmer">eight expert verticals.</span>
          </h1>
          <p className="text-lg text-plum-deep/70 leading-relaxed">
            Each domain combines focused research, industry-ready services and a women-led team. Click any
            card to explore the team, ongoing projects and translational outcomes.
          </p>
        </div>
      </section>
      <section className="container-page pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DOMAINS.map((d) => <DomainCard key={d.slug} domain={d} />)}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
