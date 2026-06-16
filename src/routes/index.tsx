import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DomainCard } from "@/components/DomainCard";
import { DOMAINS } from "@/lib/domains";
import heroRice from "@/assets/hero-rice.jpg";
import heroSpices from "@/assets/hero-spices.jpg";

// Explicitly import the faculty profile images detected in the project build repository
import imgSrijaya from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-M_Srijaya.jpg";
import imgSrividya from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-N_Srividya.jpg";
import imgSumana from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-A_Sumana.jpg";
import imgTapasya from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-Tapasya_Anand.jpg";
import imgPadmaja from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-Ambati_Padmaja.jpg";
import imgGupta from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-Jhinuk_Gupta.jpg";
import imgAndallu from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-B_Andallu.jpg";
import imgMeera from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-Meera_Manikkavachakan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SSSIHL Centre of Excellence — Smart Food Systems" },
      { name: "description", content: "Eight flagship research domains in translational food science, women-led innovation and startup incubation at SSSIHL." },
      { property: "og:title", content: "SSSIHL Centre of Excellence — Smart Food Systems" },
      { property: "og:description", content: "Translational food science with a women-first mandate at SSSIHL." },
    ],
  }),
  component: HomePage,
});

const METRICS = [
  { value: "08", label: "Flagship Domains", color: "text-pomegranate" },
  { value: "₹24L+", label: "ICMR Funded Research", color: "text-saffron" },
  { value: "15+", label: "Doctoral Scholars", color: "text-sage" },
  { value: "100%", label: "Women-Led Faculty", color: "text-plum" },
];

const ROADMAP = [
  { years: "Year 1–2", title: "Foundation & Infrastructure", body: "Strengthen Millet & Dairy Technology cores. Establish the Packaging Lab.", color: "bg-saffron" },
  { years: "Year 3–4", title: "Safety & Adulteration Centre", body: "Launch national training programs and the Food Safety & Adulteration detection hub.", color: "bg-pomegranate" },
  { years: "Year 5", title: "Food Innovation Hub", body: "Support 100+ food startups. Develop export-ready technologies for South Asia.", color: "bg-sage" },
];

// Localized independent team matrix updated with high-resolution image asset maps
const HOME_TEAM_DATA = [
  {
    name: "Dr. M Srijaya",
    role: "Associate Professor & Head",
    category: "faculty",
    image: imgSrijaya,
    bio: "Head of Food & Nutritional Sciences focusing on food processing, preservation and applied nutrition."
  },
  {
    name: "Prof. N Srividya",
    role: "Professor & Dean of Sciences",
    category: "faculty",
    image: imgSrividya,
    bio: "Dean of Sciences and active researcher in food science and nutrition with 25+ years of experience."
  },
  {
    name: "Dr. A Sumana",
    role: "Asst. Professor",
    category: "faculty",
    image: imgSumana,
    bio: "Food Industry Consultant and regulatory expert working at the intersection of safety and entrepreneurship."
  },
  {
    name: "Dr. Tapasya Anand",
    role: "Asst. Professor",
    category: "faculty",
    image: imgTapasya,
    bio: "Faculty member in Food & Nutritional Sciences contributing to functional foods and nutrition research."
  },
  {
    name: "Dr. Ambati Padmaja",
    role: "Asst. Professor",
    category: "faculty",
    image: imgPadmaja,
    bio: "Specializes in product development and sensory science. Awarded 3rd Place at FOODS 2019 for instant soup mix innovation."
  },
  {
    name: "Dr. Jhinuk Gupta",
    role: "Asst. Professor",
    category: "faculty",
    image: imgGupta,
    bio: "Faculty member in Food & Nutritional Sciences with expertise in food technology and nutrition."
  },
  {
    name: "Prof. B Andallu",
    role: "Professor (Hon.)",
    category: "advisor",
    image: imgAndallu,
    bio: "Invited speaker at the 107th Indian Science Congress on the role of phytochemicals in healthcare."
  },
  {
    name: "Dr. Meera Manikkavachakan",
    role: "Asst. Professor / Scientific Advisor",
    category: "advisor",
    image: imgMeera,
    bio: "Active researcher in public nutrition, bioprocesses, and shelf-stability studies for multi-millet functional snack foods."
  }
];

function HomePage() {
  const coreFaculty = HOME_TEAM_DATA.filter(f => f.category === "faculty");
  const scientificAdvisors = HOME_TEAM_DATA.filter(f => f.category === "advisor");

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div aria-hidden className="absolute -top-32 -left-32 size-96 rounded-full bg-turmeric/20 blur-3xl animate-blob" />
        <div aria-hidden className="absolute top-1/3 -right-40 size-[28rem] rounded-full bg-pomegranate/15 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />

        <div className="container-page grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/15 text-sage text-[11px] font-bold uppercase tracking-[0.18em] mb-8">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-sage opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-sage" />
              </span>
              Established 2026 • SSSIHL
            </div>
            <h1 className="font-display text-5xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-8">
              Where <span className="italic text-shimmer">Science</span><br />
              Meets <span className="italic text-pomegranate">Sustenance.</span>
            </h1>
            <p className="text-lg text-plum-deep/70 leading-relaxed max-w-xl mb-10">
              The Centre of Excellence in Smart Food Systems bridges ancient Indian wisdom with
              modern nutritional precision — led by women researchers, translating laboratory breakthroughs
              into community-wide health and financial empowerment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/domains" className="px-7 py-3.5 bg-plum text-cream rounded-full font-semibold hover:bg-pomegranate transition-all shadow-xl shadow-plum/25 hover:-translate-y-0.5">
                Explore 8 Domains
              </Link>
              <Link to="/about" className="px-7 py-3.5 border-2 border-plum/20 text-plum rounded-full font-semibold hover:bg-plum/5 transition-all">
                Our Vision →
              </Link>
            </div>
          </div>

          <div className="relative group animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-plum/10">
              <img src={heroRice} alt="Indian pigmented rice from a woven basket" width={1280} height={1280} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-plum-deep/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cream p-6 rounded-2xl shadow-xl ring-1 ring-plum/10 max-w-[220px] animate-float-slow">
              <div className="font-display text-3xl italic text-pomegranate">570M</div>
              <div className="text-[11px] font-medium uppercase tracking-tight text-plum-deep/60">Tonnes of global rice demand by 2025</div>
            </div>
            <div className="absolute -top-8 -right-4 size-24 rounded-full bg-turmeric/30 animate-spin-slow ring-1 ring-turmeric/40" />
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="container-page py-12 border-y border-plum/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center group">
              <div className={`font-display italic text-5xl lg:text-6xl mb-2 ${m.color} group-hover:scale-110 transition-transform`}>{m.value}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-plum-deep/60">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAINS */}
      <section id="domains" className="container-page py-24 lg:py-32">
        <div className="text-center mb-16">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4">08 Core Specializations</div>
          <h2 className="font-display text-4xl lg:text-6xl mb-6">Flagship <span className="italic">Research Domains</span></h2>
          <div className="w-24 h-1 bg-turmeric mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-plum-deep/70">
            From ancient grain restoration to futuristic packaging — eight verticals devoted to the
            complete lifecycle of food preservation, safety and commercialization.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DOMAINS.map((d) => <DomainCard key={d.slug} domain={d} />)}
        </div>
      </section>

      {/* FEATURED STARTUP SPOTLIGHT */}
      <section className="bg-plum-deep text-cream py-24 lg:py-32 relative overflow-hidden">
        <div aria-hidden className="absolute top-10 right-10 size-72 border border-turmeric/20 rounded-full animate-spin-slow" />
        <div aria-hidden className="absolute bottom-10 left-10 size-48 border border-pomegranate/30 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />

        <div className="container-page grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="relative">
            <img src={heroSpices} alt="Spices in scientific glassware" width={1024} height={1280} loading="lazy" className="rounded-[40px] aspect-[4/5] object-cover shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-turmeric text-plum-deep p-5 rounded-2xl shadow-xl max-w-[200px]">
              <div className="text-xs font-bold uppercase tracking-widest mb-1">Incubated Entity</div>
              <div className="font-display italic text-2xl leading-tight">RoC Vijayawada</div>
            </div>
          </div>
          <div>
            <h4 className="text-turmeric text-[10px] font-bold uppercase tracking-[0.25em] mb-4">Startup Incubation Spotlight</h4>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
              Padmakriti Innovations <span className="italic">Private Limited</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              An active manufacturing and processing enterprise translating lab breakthroughs into scalable commercial avenues, focusing on clean-label semi-processed configurations, convenience systems, and ready-to-eat specialty food matrix innovations.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Semi-processed, instant & specialty food products",
                "CIN: U10799AP2025PTC121377 | Incorporated Sept 20, 2025",
                "Registered Hub: Puttaparthi, Ananthapur, Andhra Pradesh",
              ].map((t) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="size-6 rounded-full bg-sage/30 ring-1 ring-sage grid place-items-center text-xs mt-0.5">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-cream/5 border border-cream/10 backdrop-blur w-fit">
              <div className="size-12 bg-pomegranate rounded-full grid place-items-center font-display italic text-cream font-bold">Co</div>
              <div>
                <div className="font-semibold text-sm sm:text-base">Mounika Pandey • Srividya Nagarajan</div>
                <div className="text-xs text-cream/60 uppercase tracking-widest mt-0.5">Company Directors & Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY PREVIEW - Enhanced with Real Profile Photo Rendering */}
      <section className="container-page py-24 lg:py-32 space-y-16">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 border-b border-plum/10 pb-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-4">Academic Leadership</div>
            <h2 className="font-display text-4xl lg:text-5xl">Led by <span className="italic text-pomegranate">women scientists</span></h2>
          </div>
          <Link to="/faculty" className="text-sm font-bold uppercase tracking-widest text-plum hover:text-pomegranate flex items-center gap-2 group">
            See full team directory <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Sub-Group 1: Core Faculty Matrix */}
        <div className="space-y-6">
          <h3 className="font-display text-2xl text-plum-deep border-b border-plum/5 pb-2">Core Faculty</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreFaculty.map((f, i) => (
              <div key={f.name} className="bg-card rounded-3xl p-6 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                {/* ✅ FIXED: Replaced initials placeholder with absolute image rendering aspect fields */}
                <img 
                  src={f.image} 
                  alt={f.name} 
                  className="w-14 h-14 rounded-2xl mb-5 object-cover ring-1 ring-plum/15 bg-plum/5 shadow-inner"
                />
                <h4 className="font-display text-xl mb-2 leading-tight text-plum-deep">{f.name}</h4>
                <p className="text-xs uppercase tracking-widest text-plum-deep/50 font-bold mb-4">{f.role}</p>
                <p className="text-sm text-plum-deep/70 leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Group 2: Scientific Advisors Matrix */}
        <div className="space-y-6">
          <h3 className="font-display text-2xl text-plum-deep border-b border-plum/5 pb-2">Scientific Advisors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {scientificAdvisors.map((f, i) => (
              <div key={f.name} className="bg-card rounded-3xl p-6 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                {/* ✅ FIXED: Replaced initials placeholder with absolute image rendering aspect fields */}
                <img 
                  src={f.image} 
                  alt={f.name} 
                  className="w-14 h-14 rounded-2xl mb-5 object-cover ring-1 ring-plum/15 bg-plum/5 shadow-inner"
                />
                <h4 className="font-display text-xl mb-2 leading-tight text-plum-deep">{f.name}</h4>
                <p className="text-xs uppercase tracking-widest text-plum-deep/50 font-bold mb-4">{f.role}</p>
                <p className="text-sm text-plum-deep/70 leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="container-page py-24">
        <div className="text-center mb-16">
          <div className="text-[10px] uppercase tracking-[0.25em] text-saffron font-bold mb-4">5 Year Roadmap</div>
          <h2 className="font-display text-4xl lg:text-5xl">The future of <span className="italic">SSSIHL CoE</span></h2>
        </div>
        <div className="max-w-3xl mx-auto border-l-2 border-plum/15 pl-2">
          {ROADMAP.map((r) => (
            <div key={r.years} className="relative pl-12 pb-14 last:pb-0">
              <div className={`absolute -left-[11px] top-1 size-5 rounded-full ${r.color} ring-4 ring-cream`} />
              <span className="text-[10px] font-mono uppercase tracking-widest text-pomegranate block mb-2">{r.years}</span>
              <h3 className="font-display text-2xl mb-3">{r.title}</h3>
              <p className="text-plum-deep/70 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative rounded-[40px] bg-gradient-to-br from-plum via-pomegranate to-saffron p-12 lg:p-20 text-cream overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 size-80 rounded-full bg-turmeric/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
              Partner with our <span className="italic">Centre of Excellence.</span>
            </h2>
            <p className="text-cream/85 text-lg mb-8">
              Industry, academia, FPOs and entrepreneurs — collaborate on translational food research,
              FSSAI-ready product development, and women-first incubation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex px-8 py-4 bg-cream text-plum rounded-full font-bold hover:bg-turmeric transition-all shadow-xl">
                Start a conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}