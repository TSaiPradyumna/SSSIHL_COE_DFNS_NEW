import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PUBLICATIONS } from "@/lib/publications";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — SSSIHL Centre of Excellence" },
      { name: "description", content: "DFNS research publications filtered by faculty and year outputs from 2015 to present." },
      { property: "og:title", content: "DFNS Publications — SSSIHL CoE" },
      { property: "og:description", content: "Comprehensive search directory for DFNS publication records, journal papers, and books." },
    ],
  }),
  component: PublicationsPage,
});

const FACULTY_FILTERS = [
  { name: "All Faculty Records", key: "all" },
  { name: "Dr. M Srijaya", key: "Srijaya" },
  { name: "Prof. N Srividya", key: "Srividya" },
  { name: "Dr. A Sumana", key: "Sumana" },
  { name: "Dr. Tapasya Anand", key: "Tapasya" },
  { name: "Dr. Ambati Padmaja", key: "Padmaja" },
  { name: "Dr. Jhinuk Gupta", key: "Gupta" },
  { name: "Prof. B Andallu", key: "Andallu" },
  { name: "Dr. Meera Manikkavachakan", key: "Meera" },
];

function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("all");

  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      const matchesSearch = 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.outlet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pub.type && pub.type.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFaculty = 
        selectedFaculty === "all" || 
        pub.authors.toLowerCase().includes(selectedFaculty.toLowerCase());

      return matchesSearch && matchesFaculty;
    });
  }, [searchQuery, selectedFaculty]);

  const publicationsByYear = useMemo(() => {
    return filteredPublications.reduce<Record<string, typeof PUBLICATIONS>>((acc, pub) => {
      if (!acc[pub.year]) acc[pub.year] = [];
      acc[pub.year].push(pub);
      return acc;
    }, {});
  }, [filteredPublications]);

  const sortedYears = useMemo(() => {
    return Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));
  }, [publicationsByYear]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <section className="container-page pt-16 pb-10">
        <div className="max-w-4xl">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-4">DFNS Publications</div>
          <h1 className="font-display text-5xl lg:text-6xl mb-6">Research outputs from 2015 to present.</h1>
          <p className="text-plum-deep/75 text-lg leading-relaxed">
            A searchable record of DFNS journal papers, book chapters, books and conference proceedings. 
            Use the filtering console below to organize papers by a specific faculty member or keyword instantly.
          </p>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="bg-card rounded-3xl p-6 md:p-8 ring-1 ring-plum/10 shadow-sm space-y-6">
          <div className="grid gap-4">
            <label htmlFor="search" className="text-xs uppercase tracking-[0.15em] text-plum-deep/60 font-bold">
              Search Document Catalogue
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by title, author names, journal outlets, keywords, or publication types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background text-plum-deep rounded-2xl px-5 py-4 ring-1 ring-plum/10 focus:ring-2 focus:ring-pomegranate outline-none text-sm transition-all shadow-inner"
            />
          </div>

          <div className="space-y-3">
            <span className="block text-xs uppercase tracking-[0.15em] text-plum-deep/60 font-bold">
              Filter Faculty-wise Directory
            </span>
            <div className="flex flex-wrap gap-2">
              {FACULTY_FILTERS.map((faculty) => (
                <button
                  key={faculty.key}
                  onClick={() => setSelectedFaculty(faculty.key)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all border ${
                    selectedFaculty === faculty.key
                      ? "bg-pomegranate text-white border-pomegranate shadow-md"
                      : "bg-background text-plum-deep/80 border-plum/10 hover:bg-plum/5"
                  }`}
                >
                  {faculty.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-plum/5 flex items-center justify-between text-xs font-medium text-plum-deep/60">
            <div>
              Showing <span className="text-pomegranate font-bold">{filteredPublications.length}</span> of {PUBLICATIONS.length} entries
            </div>
            {(searchQuery || selectedFaculty !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFaculty("all");
                }}
                className="text-pomegranate hover:underline font-semibold"
              >
                Clear all active filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-4">Publication catalogue</div>
            <h2 className="font-display text-4xl">Filtered Publication Index</h2>
          </div>
          {/* ✅ FIXED ROUTE LINK BELOW: Changed from /research to /collaboration */}
          <Link to="/collaboration" className="inline-flex items-center gap-2 rounded-full border border-plum/20 px-5 py-3 text-sm text-plum-deep hover:bg-plum/5 transition-all">
            View collaborations page
          </Link>
        </div>

        {filteredPublications.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-4xl ring-1 ring-plum/10 p-8">
            <p className="text-plum-deep/50 text-lg font-medium">No publications found matching your chosen filter configurations.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFaculty("all");
              }}
              className="mt-4 px-5 py-2.5 bg-pomegranate text-white text-xs font-bold rounded-full shadow hover:bg-pomegranate/90 transition-colors"
            >
              Reset Search Matrix
            </button>
          </div>
        ) : (
          <div className="space-y-14">
            {sortedYears.map((year) => (
              <div key={year} className="animate-fade-up">
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-plum/5 pb-3">
                  <h3 className="font-display text-3xl text-plum-deep">{year} Output Records</h3>
                  <div className="rounded-full bg-muted py-1.5 px-4 text-xs font-semibold text-plum-deep/70 ring-1 ring-plum/10">
                    {publicationsByYear[year].length} items listed
                  </div>
                </div>
                <div className="grid gap-6">
                  {publicationsByYear[year].map((pub) => (
                    <article key={pub.id} className="rounded-4xl bg-card ring-1 ring-plum/10 p-8 hover:shadow-xl transition-all border border-transparent hover:border-plum/5">
                      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-4">
                        <div className="flex-1 space-y-2">
                          <div className="text-xs uppercase tracking-[0.18em] text-pomegranate font-bold">{pub.type}</div>
                          <h4 className="font-display text-2xl leading-tight text-plum-deep">{pub.title}</h4>
                        </div>
                        <div className="text-sm text-plum-deep/80 lg:min-w-[280px] lg:max-w-[320px] bg-muted/30 p-4 rounded-2xl border border-plum/5 space-y-1.5">
                          <div className="font-semibold text-plum-deep">{pub.authors}</div>
                          <div className="text-xs italic text-plum-deep/70 leading-snug">{pub.outlet}</div>
                          {pub.issn && <div className="text-[11px] font-mono text-plum-deep/50 pt-1">ISSN: {pub.issn}</div>}
                        </div>
                      </div>
                      <div className="grid gap-3 text-sm text-plum-deep/75 pt-3 border-t border-plum/5">
                        {pub.link && (
                          <a href={pub.link} target="_blank" rel="noreferrer noopener" className="inline-flex items-center text-pomegranate font-semibold underline hover:text-pomegranate/80 break-all">
                            Open publication source page &rarr;
                          </a>
                        )}
                        {pub.ugcInfo && <div className="text-xs text-plum-deep/60 bg-cream/30 px-3 py-1.5 rounded-lg border border-plum/5"><span className="font-bold">UGC Index:</span> {pub.ugcInfo}</div>}
                        {pub.note && <div className="text-xs text-plum-deep/60 bg-muted/40 px-3 py-1.5 rounded-lg border border-plum/5">{pub.note}</div>}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="container-page pb-24">
        <div className="rounded-4xl bg-plum-deep text-cream p-12 lg:p-16">
          <h2 className="font-display text-4xl mb-4">A legacy of structured research output tracking.</h2>
          <p className="text-cream/80 leading-relaxed text-lg">
            Our comprehensive list dynamically documents national and international innovations. Filter components are configured locally to protect speed performance metrics.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}