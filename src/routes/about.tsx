import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — SSSIHL Centre of Excellence" },
      { name: "description", content: "The vision, mission and mandate of SSSIHL's Centre of Excellence in Smart Food Systems." },
      { property: "og:title", content: "Vision & Mission — SSSIHL Centre of Excellence" },
      { property: "og:description", content: "Translational food research with a women-first mandate." },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  { title: "Translational Research", body: "Move discoveries from petri dish to plate — backed by metabolomics, sensory science and rigorous trials.", color: "bg-pomegranate" },
  { title: "Commercialization", body: "Bridge academia and industry with technology transfer, IP support and FSSAI-ready product pipelines.", color: "bg-saffron" },
  { title: "Women's Empowerment", body: "Centre women's health and financial empowerment in every research, product and incubation decision.", color: "bg-sage" },
];

const RESEARCH_THEMES = [
  { id: "01", title: "Sustainability & Stability", desc: "Processing of food matrices optimized for ecological sustainability and long-term storage stability." },
  { id: "02", title: "Postharvest Technology", desc: "Advanced technical management frameworks designed for local horticultural and agricultural products." },
  { id: "03", title: "Material Characterization", desc: "Meticulous structural, physical, and biochemical mapping of native Indian food materials." },
  { id: "04", title: "Product Development", desc: "End-to-end engineering, rigorous evaluation, and scale-up models for target-spec formulations." },
  { id: "05", title: "Waste Valorisation", desc: "Utilizing food processing waste streams and industrial secondary lines for functional value addition." },
  { id: "06", title: "Safety & Quality Control", desc: "Establishing strict chemical validation, molecular purity controls, and point-of-need diagnostic assays." },
];

const OBJECTIVES = [
  {
    theme: "Food Safety & Quality",
    area: "Rapid Adulteration Detection Kits",
    obj: "Develop low-cost, field-deployable testing assays for common food supply adulterants.",
    team: "Faculty Lead, 2 Doctoral Scholars",
    status: "Ongoing — Methodology papers and validation reports under compilation",
    color: "border-l-pomegranate"
  },
  {
    theme: "Product Development & Evaluation",
    area: "Millet-Based Therapeutic Convenience Foods",
    obj: "Formulate shelf-stable, low-GI instant functional mixes optimized for diabetic care paths.",
    team: "Faculty Lead, Sensory Scientist, 2 Scholars",
    status: "Active Deployment Pipeline",
    color: "border-l-saffron"
  },
  {
    theme: "Waste Valorisation",
    area: "Polyphenol Recovery from Fruit Pomace",
    obj: "Convert processing waste streams into high-value antioxidant extracts for clean functional beverages.",
    team: "Faculty Lead, Shared Research Matrix",
    status: "Proof of Concept Validated",
    color: "border-l-sage"
  }
];

const INFRA = [
  "Food Chemistry & Biochemistry Laboratory",
  "Food Microbiology & Safety Lab",
  "Sensory Evaluation Suite",
  "Pilot-scale Food Processing Unit",
  "Spectroscopy & EDXRF facility (UGC-DAE collaboration)",
  "Bio-processing & Fermentation Unit",
  "Packaging Materials & Shelf-life Testing",
  "Nutrition Assessment & Analytics Lab",
];

const SERVICES = [
  { title: "Product Formulation", emoji: "🧪" },
  { title: "Process Optimization", emoji: "⚙️" },
  { title: "Shelf-life Studies", emoji: "📅" },
  { title: "Nutritional Enhancement", emoji: "🌱" },
  { title: "Scale-up Support", emoji: "📈" },
  { title: "Contract R&D", emoji: "🔬" },
  { title: "FSSAI / HACCP / GMP", emoji: "🛡️" },
  { title: "Technology Transfer", emoji: "🤝" },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero Headline Section */}
      <section className="container-page pt-16 pb-12 relative">
        <div aria-hidden className="absolute top-20 right-0 size-72 rounded-full bg-sage/15 blur-3xl" />
        <div className="max-w-4xl relative animate-fade-up">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6">Vision & Mission</div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-8 text-plum-deep">
            Establishing a <span className="italic text-shimmer">Centre of Excellence</span> in Smart Food Systems.
          </h1>
          <p className="text-xl text-plum-deep/75 leading-relaxed max-w-3xl">
            Drawing from extensive research experience in food processing methods, preservation engineering, and ambient storage stability, the Department of Food & Nutritional Sciences at SSSIHL is pioneering a modern framework built for social impact.
          </p>
        </div>
      </section>

      {/* Dedicated Centered Vision Card Section (Removed Institutional Anchor Block) */}
      <section className="container-page py-10 animate-fade-up">
        <div className="bg-card rounded-[32px] ring-1 ring-plum/10 p-8 lg:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.2em] text-basil font-bold mb-3 text-center">
            Core Objective Mandate
          </div>
          <h3 className="font-display text-3xl text-plum-deep text-center mb-6">Vision & Core Strategic Aim</h3>
          <blockquote className="border-l-4 border-pomegranate pl-6 italic text-plum-deep/80 text-lg lg:text-xl leading-relaxed bg-plum-deep/[0.01] py-4 max-w-3xl mx-auto rounded-r-xl">
            "The department intends to establish a center of excellence in food processing and preservation, drawing from its extensive research experience in various food processing methods and ensuring the stability of the resulting products during storage."
          </blockquote>
        </div>
      </section>

      {/* Strategic Operational Pillars */}
      <section className="container-page py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="bg-card rounded-3xl p-8 ring-1 ring-plum/10 hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className={`size-3 rounded-full ${p.color} mb-6 ring-4 ring-background`} />
              <h3 className="font-display text-2xl mb-3 text-plum-deep">{p.title}</h3>
              <p className="text-plum-deep/70 text-sm leading-relaxed text-justify">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Research Themes Component Matrix */}
      <section className="container-page py-12 animate-fade-up">
        <div className="border-b border-plum/10 pb-4 mb-8">
          <h2 className="font-display text-3xl text-plum-deep">Our Central Research Themes</h2>
          <p className="text-sm text-plum-deep/60 mt-1">Foundational expertise driving the engineering pipeline within the center of excellence.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_THEMES.map((theme) => (
            <div key={theme.id} className="bg-card rounded-2xl p-6 ring-1 ring-plum/5 border border-transparent hover:border-plum/10 transition-all flex gap-4 group">
              <span className="font-mono text-xs text-pomegranate/40 font-bold group-hover:text-pomegranate transition-colors pt-0.5">
                {theme.id}
              </span>
              <div className="space-y-1.5">
                <h3 className="font-display text-lg text-plum-deep font-semibold leading-tight">{theme.title}</h3>
                <p className="text-xs text-plum-deep/70 leading-relaxed text-justify">{theme.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Allocations & Objectives Directory Section */}
      <section className="container-page py-12 animate-fade-up">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-plum/10 pb-4 mb-8">
          <div>
            <h2 className="font-display text-3xl text-plum-deep">Target Implementation Trackers</h2>
            <p className="text-sm text-plum-deep/60 mt-1">Specific scientific objectives and ongoing validation metrics mapped across multi-disciplinary teams.</p>
          </div>
          <div className="text-xs bg-sage/10 text-sage rounded-full px-4 py-1.5 font-semibold ring-1 ring-sage/20 h-fit">
            Team Vector: Faculty & Research Scholars Matrix (DFNS, SSSIHL)
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {OBJECTIVES.map((o) => (
            <div key={o.area} className={`bg-card p-6 rounded-2xl ring-1 ring-plum/5 border-l-4 ${o.color} shadow-sm flex flex-col justify-between`}>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-plum-deep/50 font-bold block mb-1">
                    {o.theme}
                  </span>
                  <h3 className="font-display text-xl text-plum-deep font-bold leading-snug">{o.area}</h3>
                </div>
                <p className="text-xs text-plum-deep/75 leading-relaxed text-justify bg-muted/40 p-3 rounded-xl border border-plum/[0.03]">
                  <span className="font-bold text-plum-deep block mb-1 text-[11px] uppercase tracking-wide opacity-80">Objective Scope:</span>
                  {o.obj}
                </p>
              </div>
              
              <div className="pt-4 mt-4 border-t border-plum/5 space-y-2 text-xs">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-plum-deep/50 font-medium">Working Matrix:</span>
                  <span className="font-semibold text-plum-deep text-right">{o.team}</span>
                </div>
                <div className="text-[11px] text-pomegranate/90 font-medium pt-1 italic">
                  • {o.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Core Block */}
      <section className="bg-plum-deep text-cream py-24 my-12 relative overflow-hidden">
        <div aria-hidden className="absolute -bottom-24 -right-24 size-96 border border-cream/5 rounded-full" />
        <div className="container-page grid lg:grid-cols-2 gap-16 items-start relative">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-turmeric font-bold mb-4">Infrastructure Ecosystem</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">A working <span className="italic">food research</span> core.</h2>
            <p className="text-cream/70 text-lg leading-relaxed text-justify">
              The CoE is built upon the existing SSSIHL laboratories within the Department of Food & Nutritional Sciences — a baseline foundation we are extending with advanced packaging engineering models, adulteration-detection systems, and women-first incubation assets.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 w-full">
            {INFRA.map((i, idx) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-cream/5 ring-1 ring-cream/10 hover:bg-cream/10 transition-colors">
                <span className="text-turmeric font-mono text-xs mt-1">{String(idx + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Corporate Support Services Grid */}
      <section className="container-page py-16 animate-fade-up">
        <div className="text-center mb-14">
          <div className="text-[10px] uppercase tracking-[0.25em] text-saffron font-bold mb-4">Industry Support Services</div>
          <h2 className="font-display text-4xl lg:text-5xl">How <span className="italic">partners benefit.</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-card p-6 rounded-2xl ring-1 ring-plum/10 hover:ring-saffron hover:-translate-y-1 transition-all text-center group shadow-sm">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{s.emoji}</div>
              <div className="font-semibold text-sm text-plum-deep">{s.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Engagement Banner */}
      <section className="container-page py-16">
        <div className="rounded-[40px] bg-sage-soft p-12 lg:p-16 text-center border border-plum/5 shadow-inner">
          <h2 className="font-display text-3xl lg:text-4xl mb-4">Ready to <span className="italic text-pomegranate">collaborate?</span></h2>
          <p className="text-plum-deep/70 mb-8 max-w-xl mx-auto">Bring an operational bottleneck, a formulation challenge, or an experimental inquiry. We'll help you scale securely from bench to consumer shelf.</p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-plum text-cream rounded-full font-bold hover:bg-pomegranate transition-all shadow-xl shadow-plum/25 hover:-translate-y-0.5">
            Get in touch →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}