import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Collaborations — SSSIHL Centre of Excellence" },
      { name: "description", content: "Active institutional and industrial alliances driving SSSIHL's Department of Food & Nutritional Sciences." },
      { property: "og:title", content: "Collaborations — SSSIHL CoE" },
      { property: "og:description", content: "Strategic partnerships with CSIR-CFTRI and emerging corporate pipelines." },
    ],
  }),
  component: CollaborationPage,
});

const COLLABORATIONS = [
  {
    title: "CSIR - Central Food Technological Research Institute (CFTRI)",
    subtitle: "Joint Research & Academic Knowledge Exchange Alliance",
    funder: "Institutional Partnership (Mysuru)",
    amount: "Strategic MOU",
    period: "Active Exchange",
    body: "This premier institutional partnership allows SSSIHL doctoral scholars and post-graduate students to leverage state-of-the-art pilot processing plants and high-end industrial analytical instrumentation at CFTRI Mysuru. Joint frameworks focus on solving structural property changes in processed organic foods, advanced rheology, and validation of novel food engineering methods.",
    deliverables: [
      "Direct laboratory and instrumentation access to advanced pilot processing equipment",
      "Collaborative scientific publications in high-impact international food science journals",
      "Scientist-student mentorship exchanges and specialized technical workshops",
    ],
    impact: "Accelerates laboratory-to-market translation of food technologies. Bridging scholastic baseline formulations with commercial-scale processing paradigms benefits rural micro-enterprises.",
  },
];

const UPCOMING_COLLABORATIONS = [
  { name: "ICAR - Indian Institute of Millets Research (IIMR)", scope: "Millets-based functional food development, value-addition processing tech, and climate-resilient crop utilization blueprints." },
  { name: "ICMR - National Institute of Nutrition (NIN)", scope: "Advanced nutritional bio-assays, metabolic validation frameworks, maternal-child health diagnostics, and mineral bioavailability modeling." },
  { name: "NYUCT", scope: "International scholastic exchange, resource sharing protocols, and modern cross-border food preservation benchmarking research." },
  { name: "Zunofoods", scope: "Industrial technology licensing pipelines, commercial scale-up infrastructure, and localized direct-to-consumer nutritional product optimization." },
  { name: "9to6 foods", scope: "Translational packaging systems, specialized convenience food configurations, ready-to-eat stability analytics, and extended shelf-life formulations." },
];

function CollaborationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero Header Introduction */}
      <section className="container-page pt-16 pb-12 relative">
        <div aria-hidden className="absolute top-20 right-0 size-72 rounded-full bg-plum/15 blur-3xl" />
        <div className="max-w-3xl relative animate-fade-up">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6">Synergistic Network</div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-6">
            Alliances that <span className="italic text-shimmer">drive innovation.</span>
          </h1>
          <p className="text-lg text-plum-deep/70 leading-relaxed">
            By combining our academic foundations with premier national laboratories like CSIR-CFTRI and forward-thinking corporate operations, we create functional answers to community nutrition challenges.
          </p>
        </div>
      </section>

      {/* Section 1: Active Partnerships */}
      <section className="container-page py-6 space-y-8">
        <div className="border-b border-plum/10 pb-4 mb-6">
          <h2 className="font-display text-3xl lg:text-4xl text-plum-deep">Established Partnerships & Grants</h2>
          <p className="text-sm text-plum-deep/60 mt-1">Core institutional collaborations backed by active infrastructure support and resource networks.</p>
        </div>

        {COLLABORATIONS.map((p, i) => (
          <article key={p.title} className="bg-card rounded-[32px] ring-1 ring-plum/10 overflow-hidden hover:shadow-2xl transition-all animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
            
            {/* Redesigned Content Banner with crisp dark text values for perfect readability */}
            <div className="bg-plum-deep/[0.03] border-b border-plum/10 p-8 lg:p-12 text-black">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold mb-3 text-pomegranate">
                {p.funder} • {p.amount} • {p.period}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl leading-tight mb-2 text-plum-deep font-bold">
                {p.title}
              </h2>
              <p className="font-display italic text-xl text-plum-deep/80">
                {p.subtitle}
              </p>
            </div>

            {/* Split Panel Body Content */}
            <div className="p-8 lg:p-12 grid lg:grid-cols-3 gap-10 bg-card">
              <div className="lg:col-span-2">
                <p className="text-plum-deep/80 leading-relaxed text-lg mb-8">{p.body}</p>
                <div className="text-[10px] uppercase tracking-[0.22em] text-pomegranate font-bold mb-3">Key Structural Deliverables</div>
                <ul className="space-y-3">
                  {p.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="size-5 rounded-full bg-sage/20 ring-1 ring-sage grid place-items-center text-[10px] text-sage mt-0.5">✓</span>
                      <span className="text-plum-deep/80 text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sage-soft p-6 rounded-2xl h-fit border border-plum/5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-basil font-bold mb-3">Socio-Economic Relevance</div>
                <p className="text-sm text-plum-deep/80 leading-relaxed">{p.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Section 2: Upcoming Strategic Pipelines */}
      <section className="container-page py-16 animate-fade-up">
        <div className="border-b border-plum/10 pb-4 mb-10">
          <h2 className="font-display text-3xl lg:text-4xl text-plum-deep">Upcoming Collaborations</h2>
          <p className="text-sm text-plum-deep/60 mt-1">Emerging institutional channels and industrial commercial frameworks currently in deployment pipelines.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_COLLABORATIONS.map((uc, idx) => (
            <div 
              key={uc.name}
              className="bg-card rounded-3xl p-6 ring-1 ring-plum/10 border border-transparent hover:border-pomegranate/10 hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-pomegranate/5 text-pomegranate text-[10px] uppercase tracking-wider font-bold rounded-md ring-1 ring-pomegranate/15">
                    Pipeline Agreement
                  </span>
                  <span className="font-mono text-xs text-plum-deep/30 font-bold">#{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display text-xl leading-snug text-plum-deep pt-1">{uc.name}</h3>
                <p className="text-xs text-plum-deep/70 leading-relaxed text-justify">{uc.scope}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-plum/5 text-[11px] font-semibold text-pomegranate inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-pomegranate animate-pulse" />
                Strategic Blueprint Under Active Formulation
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Matrix Grid Footer Banner */}
      <section className="container-page pb-24">
        <div className="rounded-[32px] bg-plum-deep text-cream p-10 lg:p-14 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-display italic text-5xl text-turmeric mb-2">CSIR-CFTRI</div>
            <div className="text-xs uppercase tracking-widest text-cream/60">Active Lab Alliance</div>
          </div>
          <div>
            <div className="font-display italic text-5xl text-saffron mb-2">5 Emerging</div>
            <div className="text-xs uppercase tracking-widest text-cream/60">Industrial Partnerships</div>
          </div>
          <div>
            <div className="font-display italic text-5xl text-sage mb-2">Translational</div>
            <div className="text-xs uppercase tracking-widest text-cream/60">Social Impact Orientation</div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}