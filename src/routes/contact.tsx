import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SSSIHL Centre of Excellence" },
      { name: "description", content: "Partner with the SSSIHL Centre of Excellence in Smart Food Systems. Department of Food & Nutritional Sciences, Anantapur." },
      { property: "og:title", content: "Contact — SSSIHL CoE" },
      { property: "og:description", content: "Get in touch with the Department of Food & Nutritional Sciences at SSSIHL." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-page pt-16 pb-12 relative">
        <div aria-hidden className="absolute top-20 right-0 size-72 rounded-full bg-sage/20 blur-3xl" />
        <div className="max-w-3xl relative animate-fade-up">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6">Get in touch</div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-6">
            Let's build something <span className="italic text-shimmer">nourishing</span> together.
          </h1>
          <p className="text-lg text-plum-deep/70 leading-relaxed">
            Whether you are an industry partner, FPO, founder, or fellow researcher — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container-page py-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-6">
          <div className="p-7 rounded-3xl bg-card ring-1 ring-plum/10">
            <div className="text-[10px] uppercase tracking-[0.22em] text-pomegranate font-bold mb-3">Address</div>
            <p className="font-display text-xl leading-snug">Department of Food & Nutritional Sciences</p>
            <p className="text-plum-deep/70 mt-2 leading-relaxed">
              Sri Sathya Sai Institute of Higher Learning<br />
              Anantapur, Andhra Pradesh – 515001, India
            </p>
          </div>
          <div className="p-7 rounded-3xl bg-plum-deep text-cream">
            <div className="text-[10px] uppercase tracking-[0.22em] text-turmeric font-bold mb-3">Department site</div>
            <a href="https://www.sssihl.edu.in/departments/food-nutritional-sciences/" target="_blank" rel="noreferrer" className="font-display text-lg italic underline decoration-turmeric/60 underline-offset-4 hover:text-turmeric transition-colors">
              sssihl.edu.in / food-nutritional-sciences ↗
            </a>
          </div>
          <div className="p-7 rounded-3xl bg-sage-soft">
            <div className="text-[10px] uppercase tracking-[0.22em] text-basil font-bold mb-3">Engagement Areas</div>
            <ul className="text-sm space-y-2 text-plum-deep/80">
              <li>• Contract R&D and product formulation</li>
              <li>• Startup incubation & FSSAI guidance</li>
              <li>• Research collaboration & co-publications</li>
              <li>• Training programs & workshops</li>
            </ul>
          </div>
        </div>

        <form className="p-8 lg:p-10 rounded-[32px] bg-card ring-1 ring-plum/10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60">Name</span>
              <input type="text" className="mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60">Organization</span>
              <input type="text" className="mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all" placeholder="Company / FPO / Institute" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60">Email</span>
            <input type="email" className="mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all" placeholder="you@example.com" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60">Area of interest</span>
            <select className="mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all">
              <option>Research collaboration</option>
              <option>Contract R&D / product development</option>
              <option>Startup incubation</option>
              <option>Training & workshops</option>
              <option>Media / general inquiry</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-plum-deep/60">Message</span>
            <textarea rows={5} className="mt-2 w-full px-4 py-3 rounded-xl bg-cream ring-1 ring-plum/15 focus:ring-2 focus:ring-pomegranate focus:outline-none transition-all resize-none" placeholder="Tell us what you'd like to explore…" />
          </label>
          <button type="button" className="w-full px-7 py-4 bg-plum text-cream rounded-full font-bold hover:bg-pomegranate transition-all shadow-xl shadow-plum/20">
            Send message →
          </button>
          <p className="text-xs text-plum-deep/50 text-center">This form is for demonstration only. Please contact the department directly via the SSSIHL website.</p>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
