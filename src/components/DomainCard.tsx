import { Link } from "@tanstack/react-router";
import type { Domain } from "@/lib/domains";

const COLOR_MAP: Record<Domain["color"], { bg: string; hover: string; text: string; ring: string }> = {
  plum: { bg: "bg-plum/8", hover: "hover:bg-plum hover:text-cream", text: "text-plum", ring: "ring-plum/20" },
  sage: { bg: "bg-sage/10", hover: "hover:bg-sage hover:text-cream", text: "text-sage", ring: "ring-sage/20" },
  pomegranate: { bg: "bg-pomegranate/10", hover: "hover:bg-pomegranate hover:text-cream", text: "text-pomegranate", ring: "ring-pomegranate/20" },
  turmeric: { bg: "bg-turmeric/15", hover: "hover:bg-turmeric hover:text-plum-deep", text: "text-saffron", ring: "ring-turmeric/30" },
  saffron: { bg: "bg-saffron/10", hover: "hover:bg-saffron hover:text-cream", text: "text-saffron", ring: "ring-saffron/20" },
  basil: { bg: "bg-basil/10", hover: "hover:bg-basil hover:text-cream", text: "text-basil", ring: "ring-basil/20" },
};

export function DomainCard({ domain }: { domain: Domain }) {
  const c = COLOR_MAP[domain.color];
  return (
    <Link
      to="/domains/$slug"
      params={{ slug: domain.slug }}
      className={`group relative overflow-hidden rounded-3xl p-7 ring-1 ${c.ring} ${c.bg} ${c.hover} transition-all duration-500 flex flex-col justify-between min-h-[300px]`}
    >
      <div className="absolute -right-6 -top-6 size-32 rounded-full bg-current opacity-[0.04] animate-blob" />
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <span className={`text-xs font-mono ${c.text} group-hover:text-current/70`}>{domain.number}</span>
          <span className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">{domain.emoji}</span>
        </div>
        <h3 className="font-display text-2xl leading-tight mb-3">{domain.title}</h3>
        <p className="text-sm opacity-70 leading-relaxed">{domain.short}</p>
      </div>
      <div className="relative mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] group-hover:gap-4 transition-all">
        Explore Domain
        <span className="size-6 rounded-full grid place-items-center ring-1 ring-current">→</span>
      </div>
    </Link>
  );
}
