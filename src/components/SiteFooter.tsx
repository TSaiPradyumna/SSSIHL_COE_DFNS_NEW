import { Link } from "@tanstack/react-router";
import { SiteLogo } from "@/components/SiteLogo";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-plum-deep text-cream">
      <div className="container-page py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <SiteLogo size="md" />
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-turmeric">SSSIHL</div>
              <div className="text-base font-semibold">Centre of Excellence</div>
            </div>
          </div>
          <p className="font-display italic text-2xl leading-snug mb-6 text-cream/90">
            Smart Food Systems — translational research with a women-first mandate.
          </p>
          <address className="not-italic text-sm leading-relaxed text-cream/70">
            Department of Food & Nutritional Sciences<br />
            Sri Sathya Sai Institute of Higher Learning<br />
            Anantapur, Andhra Pradesh – 515001, India
          </address>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.22em] text-turmeric mb-5 font-bold">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="text-cream/80 hover:text-turmeric transition-colors">Vision & Mission</Link></li>
            <li><Link to="/domains" className="text-cream/80 hover:text-turmeric transition-colors">8 Flagship Domains</Link></li>
            <li><Link to="/research" className="text-cream/80 hover:text-turmeric transition-colors">Funded Research</Link></li>
            <li><Link to="/faculty" className="text-cream/80 hover:text-turmeric transition-colors">Faculty & Scholars</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.22em] text-turmeric mb-5 font-bold">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contact" className="text-cream/80 hover:text-turmeric transition-colors">Partner with us</Link></li>
            <li><a href="https://www.sssihl.edu.in/departments/food-nutritional-sciences/" target="_blank" rel="noreferrer" className="text-cream/80 hover:text-turmeric transition-colors">Department site ↗</a></li>
            <li><span className="text-cream/60">FSSAI compliance support</span></li>
            <li><span className="text-cream/60">Startup incubation</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p className="text-cream/50">© {new Date().getFullYear()} SSSIHL Centre of Excellence. All rights reserved.</p>
          <div className="flex gap-6 font-mono uppercase tracking-[0.18em]">
            <span className="text-turmeric/80">Scientific</span>
            <span className="text-pomegranate/80">Spiritual</span>
            <span className="text-sage/80">Social</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
