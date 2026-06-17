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

// New Incubated Startup Assets
import logoZuno from "@/assets/zuno-removebg-preview (5).png";
import logoPadmakriti from "@/assets/padmakriti-removebg-preview.png";

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
  { value: "₹49L+", label: "ICMR Funded Research", color: "text-saffron" },
  { value: "15+", label: "Doctoral Scholars", color: "text-sage" },
  { value: "100%", label: "Women-Led Faculty", color: "text-plum" },
];

const ROADMAP = [
  { years: "Year 1–2", title: "Foundation & Infrastructure", body: "Strengthen Millet & Dairy Technology cores. Establish the Packaging Lab.", color: "bg-saffron" },
  { years: "Year 3–4", title: "Safety & Adulteration Centre", body: "Launch national training programs and the Food Safety & Adulteration detection hub.", color: "bg-pomegranate" },
  { years: "Year 5", title: "Food Innovation Hub", body: "Support 100+ food startups. Develop export-ready technologies for South Asia.", color: "bg-sage" },
];

const FACILITIES = [
  { id: "01", name: "Food Quality Control Laboratory", description: "Standardizing safety markers and structural compositions for regulatory clearances." },
  { id: "02", name: "Food and Culinary Science Laboratory", description: "Bridging nutritional science with premium sensory engineering and commercial formulation." },
  { id: "03", name: "Food Chemistry and Analytical Laboratory", description: "Advanced compositional mapping, profiling biomacromolecules, and analytical matrices." },
  { id: "04", name: "Sensory Science Laboratory", description: "Scientific evaluation arrays assessing profile textures, palettes, and user acceptabilities." },
  { id: "05", name: "Food Microbiology Laboratory", description: "Safety verification infrastructures handling bioprocesses and shelf stability parameters." },
  { id: "06", name: "Nutritional Biochemistry Laboratory", description: "Isolation mechanics and reverse pharmacology screenings for lifestyle wellness vectors." },
  { id: "07", name: "Food Processing and Technology Laboratory", description: "Translational engineering systems facilitating postharvest handling and waste updates." },
  { id: "08", name: "Baking Technology Laboratory", description: "Optimized thermal matrix labs focused on functional, clean-label snack configurations." },
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
            <h2 className="sr-only">Smart Food Systems Core Hub</h2>
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

          {/* High-End Stylized Typographic Crest Display Column */}
          <div 
            className="relative aspect-square rounded-[40px] bg-gradient-to-br from-cream to-plum-deep/[0.04] ring-1 ring-plum/10 flex flex-col justify-between p-10 lg:p-14 overflow-hidden shadow-2xl animate-fade-up" 
            style={{ animationDelay: "0.2s" }}
          >
            {/* Ambient Background Flourishes */}
            <div aria-hidden className="absolute -top-16 -right-16 size-56 rounded-full border border-pomegranate/5 animate-spin-slow" />
            <div aria-hidden className="absolute -bottom-20 -left-20 size-72 rounded-full bg-turmeric/10 blur-2xl" />

            {/* Emblem Header */}
            <div className="border-b border-plum/10 pb-5 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-pomegranate block mb-1.5">Academic Anchor</span>
              <div className="font-display text-base lg:text-lg tracking-wide text-plum-deep font-semibold">
                Department of Food & Nutritional Sciences
              </div>
            </div>

            {/* Stylized Interlocking Calligraphy Centerpiece */}
            <div className="relative my-auto py-6 flex flex-col items-center justify-center text-center z-10 select-none">
              {/* Soft watermarked background block */}
              <span className="absolute font-display text-[9rem] lg:text-[13rem] font-black text-plum-deep/[0.02] tracking-tighter leading-none">
                Sai
              </span>
              
              {/* DFNS Calligraphy Title */}
              <div className="font-display italic text-6xl lg:text-8xl text-pomegranate font-light tracking-tight drop-shadow-sm animate-float-slow">
                DFNS
              </div>
              
              {/* Geometric Divider Line */}
              <div className="w-16 h-px bg-turmeric my-4 opacity-75" />
              
              {/* SSSIHL Sub-Title */}
              <div className="font-display italic text-3xl lg:text-4xl text-plum-deep tracking-wider font-normal opacity-90">
                SSSIHL
              </div>
            </div>

            {/* Emblem Footer */}
            <div className="pt-5 border-t border-plum/10 relative z-10 flex items-center justify-between gap-4">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium text-plum-deep/60">
                Sri Sathya Sai Institute of Higher Learning
              </span>
              <span className="size-2 rounded-full bg-sage/60 animate-pulse shrink-0" />
            </div>
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

      {/* STARTUP INCUBATION SPOTLIGHT */}
      <section className="bg-plum-deep text-cream py-24 lg:py-32 relative overflow-hidden">
        <div aria-hidden className="absolute top-10 right-10 size-72 border border-turmeric/10 rounded-full animate-spin-slow" />
        <div aria-hidden className="absolute bottom-10 left-10 size-48 border border-pomegranate/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />

        <div className="container-page relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-turmeric text-[10px] font-bold uppercase tracking-[0.25em] mb-4">Startup Incubation Spotlight</h4>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
              Translating Lab R&D into <span className="italic text-shimmer">Market Realities</span>
            </h2>
            <p className="text-cream/80 text-base md:text-lg leading-relaxed">
              Both of our pioneering enterprises emerged directly from the translational research and development ecosystem of the **Department of Food & Nutritional Sciences (DFNS)**, transforming science-backed breakthroughs into clean-label, commercial solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* ZUNO FOODS */}
            <div className="flex flex-col justify-between p-8 rounded-[32px] bg-cream/5 border border-cream/10 hover:border-cream/20 backdrop-blur transition-all duration-300 shadow-xl">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="h-12 max-w-[140px] flex items-center">
                    <img src={logoZuno} alt="Zuno Foods Logo" className="h-full object-contain brightness-0 invert" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-sage/25 text-sage rounded-full border border-sage/20">
                    Millet Nutrition
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl mb-4">Zuno Foods</h3>
                <p className="text-cream/70 text-sm lg:text-base leading-relaxed mb-5">
                  Operating under SaiMeethya Foods Pvt Ltd, this purpose-driven startup transforms ancestral millets into accessible, clean-label, and science-backed daily nutrition systems like porridges, smoothies, thins, and functional nutrient bars.
                </p>
                <div className="mb-6">
                  <a 
                    href="https://www.zunofoods.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-turmeric hover:text-cream transition-colors group"
                  >
                    Visit Official Website 
                    <span className="inline-block transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[10px]">&nearr;</span>
                  </a>
                </div>
                <ul className="space-y-3 text-sm text-cream/85 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="size-5 rounded-full bg-turmeric/20 text-turmeric grid place-items-center text-xs shrink-0">✓</span>
                    <span>First startup incubated by SSSRIF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-5 rounded-full bg-turmeric/20 text-turmeric grid place-items-center text-xs shrink-0">✓</span>
                    <span>Ready-to-eat therapeutic meal platforms</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-cream/10 text-xs text-cream/50 uppercase tracking-wider font-semibold">
                Founder: Dr. Sai Dharshini S • SSSIHL Alumna
              </div>
            </div>

            {/* PADMAKRITI INNOVATIONS */}
            <div className="flex flex-col justify-between p-8 rounded-[32px] bg-cream/5 border border-cream/10 hover:border-cream/20 backdrop-blur transition-all duration-300 shadow-xl">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="h-12 max-w-[140px] flex items-center">
                    <img src={logoPadmakriti} alt="Padmakriti Innovations Logo" className="h-full object-contain brightness-0 invert" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-saffron/25 text-saffron rounded-full border border-saffron/20">
                    Food Manufacturing
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl mb-4">Padmakriti Innovations</h3>
                <p className="text-cream/70 text-sm lg:text-base leading-relaxed mb-6">
                  An active corporate processing enterprise translating food matrix engineering into scalable convenience avenues, specializing in clean-label instant configurations, semi-processed products, and culinary matrix innovations.
                </p>
                <ul className="space-y-3 text-sm text-cream/85 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="size-5 rounded-full bg-turmeric/20 text-turmeric grid place-items-center text-xs shrink-0">✓</span>
                    <span>CIN: U10799AP2025PTC121377</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-5 rounded-full bg-turmeric/20 text-turmeric grid place-items-center text-xs shrink-0">✓</span>
                    <span>Registered Hub: Puttaparthi, Andhra Pradesh</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-cream/10 text-xs text-cream/50 uppercase tracking-wider font-semibold">
                Directors: Mounika Pandey • Srividya Nagarajan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATE-OF-THE-ART RESEARCH & LABORATORY FACILITIES */}
      <section className="container-page py-24 lg:py-32">
        <div className="text-center mb-16">
          <div className="text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-4">Infrastructure Matrix</div>
          <h2 className="font-display text-4xl lg:text-6xl mb-6">Advanced <span className="italic text-plum">Laboratory Hubs</span></h2>
          <div className="w-24 h-1 bg-turmeric mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-plum-deep/70">
            Equipped with analytics cores, processing engines, and precise sensory configurations providing comprehensive pathways from research to verified production.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((fac) => (
            <div 
              key={fac.id} 
              className="bg-card rounded-3xl p-6 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl hover:ring-pomegranate/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-display text-xl text-plum-deep mb-3 leading-tight min-h-[3.5rem] flex items-center">
                  {fac.name}
                </h3>
                <p className="text-sm text-plum-deep/65 leading-relaxed">
                  {fac.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-plum/5 pt-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-plum-deep/40 group-hover:text-plum transition-colors">
                  Operational Core
                </span>
                <span className="font-display italic text-2xl text-turmeric font-semibold group-hover:scale-110 transition-transform">
                  {fac.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FACULTY PREVIEW - HIDE/COMMENTED BLOCK */}
      {/* <section className="container-page py-24 lg:py-32 space-y-16">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 border-b border-plum/10 pb-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-4">Academic Leadership</div>
            <h2 className="font-display text-4xl lg:text-5xl">Led by <span className="italic text-pomegranate">women scientists</span></h2>
          </div>
          <Link to="/faculty" className="text-sm font-bold uppercase tracking-widest text-plum hover:text-pomegranate flex items-center gap-2 group">
            See full team directory <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="space-y-6">
          <h3 className="font-display text-2xl text-plum-deep border-b border-plum/5 pb-2">Core Faculty</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreFaculty.map((f, i) => (
              <div key={f.name} className="bg-card rounded-3xl p-6 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
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

        <div className="space-y-6">
          <h3 className="font-display text-2xl text-plum-deep border-b border-plum/5 pb-2">Scientific Advisors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {scientificAdvisors.map((f, i) => (
              <div key={f.name} className="bg-card rounded-3xl p-6 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
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
      */}

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