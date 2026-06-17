import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DOMAINS, type Domain } from "@/lib/domains";

export const Route = createFileRoute("/domains/$slug")({
  loader: ({ params }): { domain: Domain } => {
    const domain = DOMAINS.find((d) => d.slug === params.slug);
    if (!domain) throw notFound();
    return { domain };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.domain;
    if (!d) return { meta: [{ title: "Domain — SSSIHL CoE" }] };
    return {
      meta: [
        { title: `${d.title} — SSSIHL Centre of Excellence` },
        { name: "description", content: d.short },
        { property: "og:title", content: `${d.title} — SSSIHL CoE` },
        { property: "og:description", content: d.short },
        { property: "og:image", content: d.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="container-page py-32 text-center">
        <h1 className="font-display text-5xl mb-4">Domain not found</h1>
        <Link to="/domains" className="text-pomegranate underline">← Back to all domains</Link>
      </div>
      <SiteFooter />
    </div>
  ),
  component: DomainDetail,
});

const COLOR_BG: Record<string, string> = {
  plum: "from-plum to-plum-deep",
  sage: "from-sage to-basil",
  pomegranate: "from-pomegranate to-plum",
  turmeric: "from-turmeric to-saffron",
  saffron: "from-saffron to-pomegranate",
  basil: "from-basil to-sage",
};

function DomainDetail() {
  const { domain: d } = Route.useLoaderData();
  const idx = DOMAINS.findIndex((x) => x.slug === d.slug);
  const next = DOMAINS[(idx + 1) % DOMAINS.length];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className={`relative bg-gradient-to-br ${COLOR_BG[d.color]} text-cream pt-12 pb-20 overflow-hidden`}>
        <div aria-hidden className="absolute -top-20 -right-20 size-96 rounded-full bg-cream/10 blur-3xl" />
        <div aria-hidden className="absolute bottom-0 -left-32 size-72 rounded-full bg-cream/10 blur-3xl animate-blob" />

        <div className="container-page relative">
          <Link to="/domains" className="text-cream/70 hover:text-cream text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2 mb-10">
            ← All domains
          </Link>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div className="animate-fade-up">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-sm opacity-70">{d.number}</span>
                <span className="text-5xl animate-float-slow">{d.emoji}</span>
              </div>
              <h1 className="font-display text-4xl lg:text-6xl leading-[1] mb-6">{d.title}</h1>
              <p className="text-xl text-cream/85 leading-relaxed max-w-xl">{d.short}</p>
            </div>
            <div className="relative">
              <img src={d.image} alt={d.title} width={1024} height={768} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-[32px] shadow-2xl ring-1 ring-cream/20" />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + FOCUS */}
      <section className="container-page py-20 grid lg:grid-cols-[1fr_1.2fr] gap-16">
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4">Overview</div>
          <h2 className="font-display text-3xl lg:text-4xl leading-tight mb-6">What this domain delivers.</h2>
          <p className="text-plum-deep/75 leading-relaxed text-lg">{d.overview}</p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-4">Focus Areas</div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {d.focus.map((f, i) => (
              <li key={f} className="p-5 rounded-2xl bg-card ring-1 ring-plum/10 hover:ring-pomegranate hover:-translate-y-0.5 transition-all">
                <span className="font-mono text-xs text-pomegranate block mb-2">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium leading-snug">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESEARCH HIGHLIGHTS */}
      {d.researchHighlights?.length ? (
        <section className="container-page py-20">
          <div className="mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4">Research Highlights</div>
            <h2 className="font-display text-3xl lg:text-4xl leading-tight">Evidence-driven research themes.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {d.researchHighlights.map((item) => (
              <div key={item.title} className="p-7 rounded-3xl bg-card ring-1 ring-plum/10 hover:ring-saffron transition-all">
                <h3 className="font-display text-xl mb-3 leading-tight">{item.title}</h3>
                <p className="text-plum-deep/75 leading-relaxed mb-4">{item.description}</p>
                
                {/* Dynamically display "DFNS Faculty" or "Research Lead" header based on what's present */}
                <div className="text-sm uppercase tracking-[0.18em] text-plum-deep/60">
                  {item.dfnsFaculty ? "DFNS Faculty" : "Research Lead"}
                </div>
                <div className="mt-2 text-sm text-plum-deep">
                  {item.dfnsFaculty ? item.dfnsFaculty.join(" • ") : item.researchLead?.join(" • ")}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* TEAM */}
      {d.team?.length ? (
        <section className="bg-sage-soft py-20">
          <div className="container-page">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-basil font-bold mb-4">Team</div>
                <h2 className="font-display text-3xl lg:text-4xl">Researchers <span className="italic">on this domain</span></h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {d.team.map((m) => (
                <div key={m.name} className="bg-cream p-6 rounded-3xl ring-1 ring-plum/10 hover:shadow-xl transition-all flex items-center gap-5">
                  <div className="size-14 rounded-full bg-plum text-cream font-display italic text-xl grid place-items-center shrink-0">
                    {m.name.split(" ").slice(-1)[0]?.[0]}
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">{m.name}</div>
                    <div className="text-xs uppercase tracking-widest text-plum-deep/55 mt-1">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* PROJECTS */}
      <section className="container-page py-20">
        <div className="text-[10px] uppercase tracking-[0.25em] text-saffron font-bold mb-4">Selected Projects</div>
        <h2 className="font-display text-3xl lg:text-4xl mb-10">Translational <span className="italic">research in motion.</span></h2>
        <div className="grid md:grid-cols-2 gap-5">
          {d.projects.map((p) => (
            <div key={p.title} className="p-7 rounded-3xl bg-card ring-1 ring-plum/10 hover:ring-saffron transition-all">
              <h3 className="font-display text-xl mb-3 leading-tight">{p.title}</h3>
              <p className="text-plum-deep/70 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT */}
      <section className="container-page pb-24">
        <Link
          to="/domains/$slug"
          params={{ slug: next.slug }}
          className="block rounded-[32px] bg-plum-deep text-cream p-10 hover:bg-plum transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-turmeric font-bold mb-3">Next Domain →</div>
              <h3 className="font-display text-3xl">{next.title}</h3>
            </div>
            <span className="text-5xl group-hover:translate-x-2 transition-transform">{next.emoji}</span>
          </div>
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}