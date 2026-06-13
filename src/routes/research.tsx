import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Funded Research — SSSIHL Centre of Excellence" },
      { name: "description", content: "Funded research projects, publications and student achievements from SSSIHL's Department of Food & Nutritional Sciences." },
      { property: "og:title", content: "Funded Research — SSSIHL CoE" },
      { property: "og:description", content: "ICMR and UGC-DAE funded projects on Indian pigmented rice, micronutrients and translational nutrition." },
    ],
  }),
  component: ResearchPage,
});

const PROJECTS = [
  {
    color: "pomegranate",
    title: "Antidiabetic evaluation of Indian pigmented rice varieties",
    subtitle: "A mechanistic metabolomic based approach",
    funder: "Indian Council of Medical Research (ICMR)",
    amount: "₹24 Lakhs",
    period: "2019–2022",
    pi: "Dr. (Miss) N Srividya",
    body: "Pigmented rice varieties contain functional phenolic acids and anthocyanins with therapeutic potential. This project combines food metabolomics, in vitro enzyme assays and in vivo studies to investigate antidiabetic mechanisms.",
    deliverables: [
      "Mechanistic insight into antidiabetic action of pigmented rice",
      "Glycemic response profile of indigenous rice varieties",
      "Pigmented-rice based convenience foods for therapeutic use",
    ],
    impact: "Rice consumption is projected to reach 570M tonnes by 2025. Gluten-free pigmented rice functional foods offer a lifestyle-disease intervention with cultural fit across Asia.",
  },
  {
    color: "saffron",
    title: "XRF based profiling of essential minerals",
    subtitle: "In native and bio-processed pigmented rice",
    funder: "UGC-DAE-Consortium",
    amount: "₹45,000",
    period: "2019–2020",
    pi: "Dr. (Miss) N Srividya",
    body: "Using EDXRF to map essential minerals — Fe, Zn, Ca, Mg — in Indian pigmented rice, with focus on how soaking, germination and biofortification improve mineral bioavailability.",
    deliverables: [
      "Identification of mineral-dense pigmented rice varieties",
      "Effect of bio-processing on mineral retention & distribution",
      "Improved mineral bioavailability validated in vitro",
    ],
    impact: "A cost-effective dietary intervention against 'hidden hunger' — micronutrient malnutrition that affects large, under-served populations without visible symptoms.",
  },
];

function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-page pt-16 pb-12 relative">
        <div aria-hidden className="absolute top-20 right-0 size-72 rounded-full bg-saffron/20 blur-3xl" />
        <div className="max-w-3xl relative animate-fade-up">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6">Funded Research</div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-6">
            Knowledge that <span className="italic text-shimmer">moves to market.</span>
          </h1>
          <p className="text-lg text-plum-deep/70 leading-relaxed">
            Faculty and doctoral scholars publish in esteemed peer-reviewed journals and lead nationally
            funded translational research with measurable social impact.
          </p>
        </div>
      </section>

      <section className="container-page py-12 space-y-8">
        {PROJECTS.map((p, i) => (
          <article key={p.title} className="bg-card rounded-[32px] ring-1 ring-plum/10 overflow-hidden hover:shadow-2xl transition-all animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className={`bg-${p.color} text-cream p-8 lg:p-12`}>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold mb-3 opacity-80">{p.funder} • {p.amount} • {p.period}</div>
              <h2 className="font-display text-3xl lg:text-4xl leading-tight mb-2">{p.title}</h2>
              <p className="font-display italic text-xl opacity-90">{p.subtitle}</p>
              <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cream/15 backdrop-blur ring-1 ring-cream/20">
                <span className="size-2 rounded-full bg-turmeric" />
                <span className="text-sm font-medium">Principal Investigator: {p.pi}</span>
              </div>
            </div>
            <div className="p-8 lg:p-12 grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <p className="text-plum-deep/80 leading-relaxed text-lg mb-8">{p.body}</p>
                <div className="text-[10px] uppercase tracking-[0.22em] text-pomegranate font-bold mb-3">Deliverables</div>
                <ul className="space-y-3">
                  {p.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="size-5 rounded-full bg-sage/20 ring-1 ring-sage grid place-items-center text-[10px] text-sage mt-0.5">✓</span>
                      <span className="text-plum-deep/80">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sage-soft p-6 rounded-2xl">
                <div className="text-[10px] uppercase tracking-[0.22em] text-basil font-bold mb-3">Social Relevance</div>
                <p className="text-sm text-plum-deep/80 leading-relaxed">{p.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page py-16">
        <div className="rounded-[32px] bg-plum-deep text-cream p-10 lg:p-14 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-display italic text-5xl text-turmeric mb-2">2</div>
            <div className="text-xs uppercase tracking-widest text-cream/60">Active Funded Grants</div>
          </div>
          <div>
            <div className="font-display italic text-5xl text-saffron mb-2">₹24.4L+</div>
            <div className="text-xs uppercase tracking-widest text-cream/60">External Research Funding</div>
          </div>
          <div>
            <div className="font-display italic text-5xl text-sage mb-2">UGC-NET</div>
            <div className="text-xs uppercase tracking-widest text-cream/60">Multiple scholars qualified</div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
