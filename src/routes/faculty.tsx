import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FACULTY, SCHOLARS } from "@/lib/domains";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty & Scholars — SSSIHL Centre of Excellence" },
      { name: "description", content: "Meet the women-led faculty and doctoral research scholars driving SSSIHL's Centre of Excellence in Food Processing & Preservation." },
      { property: "og:title", content: "Faculty & Scholars — SSSIHL CoE" },
      { property: "og:description", content: "Women-led food and nutrition research at SSSIHL." },
    ],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-page pt-16 pb-12 relative">
        <div aria-hidden className="absolute top-20 right-10 size-72 rounded-full bg-pomegranate/15 blur-3xl" />
        <div className="max-w-3xl relative animate-fade-up">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6">Academic Leadership</div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-6">
            <span className="italic text-shimmer">Women</span> at the heart of food science.
          </h1>
          <p className="text-lg text-plum-deep/70 leading-relaxed">
            Our multi-disciplinary faculty combines decades of research with active mentorship of the
            next generation of food scientists.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {FACULTY.map((f, i) => (
            <div key={f.name} className="bg-card rounded-3xl p-8 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-start gap-6">
                <div className={`size-20 rounded-3xl bg-${f.color} grid place-items-center font-display italic text-3xl text-cream shrink-0 shadow-lg`}>
                  {f.name.split(" ").slice(-1)[0]?.[0]}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl mb-2 leading-tight">{f.name}</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-plum-deep/55 font-bold mb-4">{f.role}</p>
                  <p className="text-plum-deep/75 leading-relaxed">{f.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-plum-deep text-cream py-20 mt-16">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-turmeric font-bold mb-4">Doctoral Scholars</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">The <span className="italic">next generation.</span></h2>
              <p className="text-cream/70 mt-6 leading-relaxed">
                Several SSSIHL scholars have qualified UGC-NET (LS) in Home Science and contribute to national-level workshops and symposia.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {SCHOLARS.map((s, i) => (
                <div key={s} className="p-5 rounded-2xl bg-cream/5 ring-1 ring-cream/10 hover:bg-cream/10 transition-colors flex items-center gap-4">
                  <span className="font-mono text-xs text-turmeric">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
