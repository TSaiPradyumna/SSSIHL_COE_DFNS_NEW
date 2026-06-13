import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — SSSIHL Centre of Excellence" },
      { name: "description", content: "The vision, mission and mandate of SSSIHL's Centre of Excellence in Food Processing & Preservation." },
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-page pt-16 pb-24 relative">
        <div aria-hidden className="absolute top-20 right-0 size-72 rounded-full bg-sage/20 blur-3xl" />
        <div className="max-w-3xl relative animate-fade-up">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6">Vision & Mission</div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-8">
            Establishing a <span className="italic text-shimmer">Centre of Excellence</span> in Food & Nutritional Science.
          </h1>
          <p className="text-xl text-plum-deep/75 leading-relaxed mb-6">
            Drawing from extensive research experience in food processing, preservation and storage stability,
            the Department of Food & Nutritional Sciences at SSSIHL is building a Centre of Excellence with
            translational research, commercialization and women-specific health and financial empowerment at its core.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="bg-card rounded-3xl p-8 ring-1 ring-plum/10 hover:-translate-y-1 transition-all animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`size-12 ${p.color} rounded-2xl mb-6`} />
              <h3 className="font-display text-2xl mb-3">{p.title}</h3>
              <p className="text-plum-deep/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-plum-deep text-cream py-24 my-16">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-turmeric font-bold mb-4">Infrastructure</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">A working <span className="italic">food research</span> ecosystem.</h2>
            <p className="text-cream/70 text-lg leading-relaxed">
              The CoE is built on existing SSSIHL laboratories within the Department of Food & Nutritional Sciences —
              a foundation we are extending with packaging, adulteration-detection and incubation facilities.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {INFRA.map((i, idx) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-cream/5 ring-1 ring-cream/10 hover:bg-cream/10 transition-colors">
                <span className="text-turmeric font-mono text-xs mt-1">{String(idx + 1).padStart(2, "0")}</span>
                <span className="text-sm">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="text-center mb-14">
          <div className="text-[10px] uppercase tracking-[0.25em] text-saffron font-bold mb-4">Industry Support Services</div>
          <h2 className="font-display text-4xl lg:text-5xl">How <span className="italic">industry benefits.</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-card p-6 rounded-2xl ring-1 ring-plum/10 hover:ring-saffron hover:-translate-y-1 transition-all text-center group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{s.emoji}</div>
              <div className="font-semibold text-sm">{s.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-[40px] bg-sage-soft p-12 lg:p-16 text-center">
          <h2 className="font-display text-3xl lg:text-4xl mb-4">Ready to <span className="italic text-pomegranate">collaborate?</span></h2>
          <p className="text-plum-deep/70 mb-8 max-w-xl mx-auto">Bring a problem, a product idea, or a research question. We'll help you take it from lab to market.</p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-plum text-cream rounded-full font-bold hover:bg-pomegranate transition-all shadow-xl">Get in touch →</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
