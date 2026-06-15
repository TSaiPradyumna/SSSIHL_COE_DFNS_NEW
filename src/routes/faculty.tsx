import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SCHOLARS } from "@/lib/domains";

// Import local assets matching your folder exactly to bypass external website blocking
import imgSumana from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-A_Sumana.jpg";
import imgPadmaja from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-Ambati_Padmaja.jpg";
import imgAndallu from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-B_Andallu.jpg";
import imgGupta from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-Jhinuk_Gupta.jpg";
import imgSrijaya from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-M_Srijaya.jpg";
import imgMeera from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-Meera_Manikkavachakan.jpg";
import imgSrividya from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-N_Srividya.jpg";
import imgTapasya from "@/assets/SSSIHL-Faculty-Food-Nutritional-Sciences-Tapasya_Anand.jpg";

// Expanded rich dataset with category markers
const FACULTY_DETAILS = [
  {
    name: "Dr. M Srijaya",
    category: "faculty",
    role: "Associate Professor & Head",
    qualifications: "M.Sc., Ph.D.",
    email: "msrijaya@sssihl.edu.in",
    telephone: "+91 8554 272567",
    color: "pomegranate",
    image: imgSrijaya,
    professionalPages: { linkedin: true, researchgate: true, googleScholar: false },
    overview: "Dr. (Mrs.) M Srijaya pursued her Bachelors in Home Science and Masters in Food Science and Nutrition from Sri Sathya Sai Institute of Higher Learning. She then joined the department as a lecturer in the year 1996. She also completed her Ph.D. in Food Technology from Sri Venkateswara University, Tirupathi, Andhra Pradesh. She is currently the Head, Department of Food & Nutritional Sciences, SSSIHL. She has extensive teaching and research experience in the fields of Food Technology and Nutrition and has efficaciously taught both core technical and applied courses to under graduate and post graduate students. Her research interests lie in the areas of food processing, preservation and applied nutrition. She has guided several students in the related areas, published papers and presented her research in various conferences.",
    areasOfTeaching: [
      "Food Chemistry",
      "Food Processing and preservation",
      "Fruit and Vegetable Technology",
      "Food safety and quality assurance",
      "Women Nutrition",
      "Paediatric and Geriatric Nutrition"
    ],
    researchInterests: [
      "Food irradiation (application of low dose gamma irradiation technique for preservation of fruits and vegetables)",
      "Dairy Science",
      "Characteristics of food products that influence the processing, nutrition and quality",
      "Identification of the quality and safety indicators of organic fruits and vegetables",
      "Profiling of phytochemical compounds from organic fruits and vegetables",
      "Optimization of novel technologies for safeguarding organic produce quality during transport and storage."
    ],
    phdSupervision: [
      "Ms. Alisha Pradhan (Postharvest Management of Fruits and Vegetables)",
      "Ms. Beesetti Lohita (Novel technological approaches for processing of functional dairy products)",
      "Ms. Deepika Shrestha (Dairy Science & Technology)"
    ],
    projects: []
  },
  {
    name: "Prof. N Srividya",
    category: "faculty",
    role: "Professor & Dean of Sciences",
    qualifications: "M.Sc., Ph.D.",
    email: "nsrividya@sssihl.edu.in",
    telephone: "+91 8554 272567",
    color: "turmeric",
    image: imgSrividya,
    professionalPages: { linkedin: true, researchgate: true, googleScholar: true },
    overview: "Prof. N. Srividya is an active researcher in the field of Food Science and Nutrition, in addition to her full-time teaching responsibilities at the Sri Sathya Sai Institute of Higher Learning. With over 25 years of teaching and research experience at SSSIHL, she has guided five Ph.D. scholars and supervised 33 M.Sc. projects. She has completed one research project and is currently working on two more, funded by reputable national agencies. Prof. Srividya was awarded gold medals for her outstanding academic performance in both B.Sc. and M.Sc. in Food Science and Nutrition from SSSIHL. She qualified for the UGC-NET Research Fellowship and has received multiple awards for her oral and poster presentations at national and international scientific conferences. Additionally, she has served as the Director of the Anantapur Campus. Prof. Srividya is a reviewer and editorial board member for several scientific journals. She has published over 50 articles in international peer-reviewed journals, along with numerous contributions to conference proceedings and book chapters. She is currently the Dean, Faculty of Sciences.",
    areasOfTeaching: [
      "Public Health",
      "Clinical and Ayurvedic Nutrition",
      "Postharvest technology",
      "Food Microbiology and Safety",
      "Functional Foods and Nutraceuticals",
      "Culinary science and Food Chemistry"
    ],
    researchInterests: [
      "Nutrient and nutraceutical profiling of indigenous and novel food crops",
      "Food bioprocesses for addressing micronutrient malnutrition",
      "Nutritional biology of diabetes",
      "Therapeutic and postharvest applications of Aloe vera and chitosan biopolymers",
      "Development of several rural and industry-based functional food technologies"
    ],
    phdSupervision: [
      "Ms. Shrijana Rasaily (Therapeutic and bioactivity assessment of functional foods)",
      "Ms. Sai Sruthi Shree K K (Nutritional Profiling of Food Materials)",
      "Ms. Mounika Pandey"
    ],
    projects: [
      {
        title: "Antidiabetic evaluation of Indian pigmented rice varieties: A mechanistic metabolomic based approach",
        funding: "Indian Council of Medical Research (ICMR) – ₹24 Lakhs (2019-2022)"
      },
      {
        title: "XRF based profiling of essential minerals in native and bio-processed pigmented rice varieties",
        funding: "UGC-DAE-Consortium – ₹45,000 (2019-2020)"
      }
    ]
  },
  {
    name: "Prof. B Andallu",
    category: "advisor",
    role: "Professor (Hon.) / Scientific Advisor",
    qualifications: "M.Sc., Ph.D.",
    email: "bandallu@sssihl.edu.in",
    telephone: "+91 8554 272567",
    color: "plum",
    image: imgAndallu,
    professionalPages: { linkedin: true, researchgate: true, googleScholar: true },
    overview: "Prof. B. Andallu is a Biochemist with expertise in natural product isolation and bioactivity assessment by in vitro methods as well as studies on natural remedies for oxidative stress-induced diseases viz. diabetes, arthritis, and cancer. A recipient of six awards and three gold medals at National and International levels, and an author of five books, Prof. Andallu’s expertise in these fields reflects in numerous publications which include, LAP, Germany, and Oxford Press. She has published over 60 review and research articles in peer-reviewed national and international journals presented more than 100 research papers in National and International seminars/conferences in India and overseas. Prof. Andallu has visited and delivered guest lectures at several universities in India, the USA, South Africa, and Sri Lanka. Prof. Andallu has completed several research projects, specialized in ‘Natural remedies for stress-induced diseases’, and guided over 50 dissertations in M.Sc., M.Phil. and Ph.D. She is a former member of the editorial board for Annals of Phytomedicine, reviewer of scientific journals, Life member in professional bodies like Indian Science Congress, Indian Pharmacological Society, Society of Biological Chemists, India, and Nutrition Society of India, apart from teaching undergraduate and postgraduate courses for over three decades. Prof. Andallu graduated from Andhra University in 1978 with a B.Sc. in Botany, Zoology, and Chemistry. She pursued her Masters in Biochemistry during 1978-1980 and was awarded a Doctorate degree in 2002 from Sri Krishnadevaraya University, Anantapur. She started her career in 1986 at Sri Sathya Sai Institute of Higher Learning. She served as Head, Department of Food and Nutritional Sciences from 2015 to 2017.",
    areasOfTeaching: [
      "Biomacromolecules and Metabolism",
      "Analytical Techniques",
      "Nutritional Biochemistry",
      "Clinical Biochemistry"
    ],
    researchInterests: [
      "Isolation and bioactivity (antioxidant, anti-inflammatory, anticarcinogenic, antihemolytic, etc.) assessment of phytochemicals from spices and medicinal plants by in vitro methods and model systems",
      "Screening of phytochemicals as natural remedies for oxidative stress-induced diseases viz. diabetes, arthritis and cancer",
      "Providing scientific basis for traditional uses of herbs by reverse pharmacology approach"
    ],
    phdSupervision: [],
    projects: []
  },
  {
    name: "Dr. A Sumana",
    category: "faculty",
    role: "Asst. Professor",
    qualifications: "M.Sc., Ph.Ph.D.",
    email: "asumana@sssihl.edu.in",
    telephone: "+91 8554 272567",
    color: "olive",
    image: imgSumana,
    professionalPages: { linkedin: false, researchgate: true, googleScholar: false },
    overview: "Dr. A Sumana is actively involved in research work apart from her full-time teaching duties. She graduated from Sri Sathya Sai Institute of Higher Learning in 1999 with a B.Sc. degree in Home Science. She graduated in her masters in Food Science and Nutrition from Sri Sathya Sai Institute of Higher Learning in 2001. She then cleared the National Eligibility Test (NET) for lectureship and joined Sri Sathya Sai Institute of Higher Learning in 2001. She went on to complete her Doctorate degree in 2017 from Sri Padmavati Mahila Visvavidyalayam, Tirupati, Andhra Pradesh.",
    areasOfTeaching: [
      "Microbial Food Safety",
      "Current Issues in Food Science",
      "Fundamentals of food science",
      "Food product development and evaluation",
      "Entrepreneurship and marketing",
      "Dietetics",
      "Nutrition in emergencies and disaster",
      "Bakery and Confectionery"
    ],
    researchInterests: [
      "Sensory marketing and consumer behaviour for foods and other products",
      "Role of nutrition in disease prevention",
      "Directing product development and applied research in development of novel functional foods"
    ],
    phdSupervision: [
      "Ms. Shivangi Verma (Nutritional Epidemiology)",
      "Ms. Sparsh Sumnirom Subba"
    ],
    projects: []
  },
  {
    name: "Dr. Meera Manikkavachakan",
    category: "advisor",
    role: "Asst. Professor / Scientific Advisor",
    qualifications: "M.Sc., Ph.D.",
    email: "meeram@sssihl.edu.in",
    telephone: "+91 8554 272567",
    color: "pomegranate",
    image: imgMeera,
    professionalPages: { linkedin: true, researchgate: true, googleScholar: false },
    overview: "Dr. Meera Manikkavachakan graduated from Sri Sathya Sai Institute of Higher Learning, Anantapur Campus with a B.Sc. in Home Science and then her M.Sc. in Food Science and Nutrition. She joined the department as a Lecturer in 1996. She pursued a PG Diploma in Preventive and Promotive Health Care (PGDPPHC) at Apollo Hospitals Educational Research Foundation, Hyderabad in 2005, a PG Diploma in Geriatric Care (DGC) at KMM Academy of Health Sciences, Kochi, Kerala in 2006 and Food Safety supervisor in Catering, (Level-2) by FSSAI. She got her Doctorate degree in Food Science and Nutrition from Sri Venkateswara University, Tirupati, Andhra Pradesh. She is actively involved in research work apart from full-time teaching duties.",
    areasOfTeaching: [
      "Public Nutrition and Epidemiology",
      "Research Methodology",
      "Food Product Development",
      "Therapeutic Nutrition and Dietetics"
    ],
    researchInterests: [
      "Formulation and development of products with value added functional ingredients/ low cost locally available, rarely used greens and shelf life studies for developed products",
      "Development and nutrient analysis of gluten free snack food products for therapeutic use",
      "Shelf stability studies for multi millets based baked and roasted snack foods",
      "Nutrition education approaches and models for disseminating nutrition and health communication for vulnerable segment of population"
    ],
    phdSupervision: [
      "Ms. Sai Dharshini S (Snack Food Technology)"
    ],
    projects: []
  },
  {
    name: "Dr. Tapasya Anand",
    category: "faculty",
    role: "Asst. Professor",
    qualifications: "M.Sc., Ph.D.",
    email: "tapasyaanand@sssihl.edu.in",
    telephone: "+91 8554 272567",
    color: "turmeric",
    image: imgTapasya,
    professionalPages: { linkedin: true, researchgate: true, googleScholar: false },
    overview: "Dr. (Ms.) Tapasya Anand received her B.Sc. and M.Sc. degrees from Sri Sathya Sai Institute of Higher Learning, in 2005 and 2007, respectively. She received her Doctorate degree from SSSIHL in 2012. She joined as Assistant Professor at the Dept. of Food and Nutritional Sciences, Sri Sathya Sai Institute of Higher Learning, in 2013 and is also actively involved in research work in addition to her full-time teaching duties.",
    areasOfTeaching: [
      "Functional Foods and Nutraceuticals",
      "Clinical Nutrition",
      "Molecular Nutrition",
      "Sports Nutrition",
      "Human Physiology",
      "Ergonomics",
      "Fermentation Technology",
      "Food Processing Technology"
    ],
    researchInterests: [
      "Nutritional and phytochemical profiling of food materials (mushrooms, underutilized seeds and medicinal plants).",
      "Formulation of functional products for type 2 diabetics and athletes, Study of the therapeutic potential of the food materials and developed products using in vitro and in vivo models."
    ],
    phdSupervision: [],
    projects: []
  },
  {
    name: "Dr. Ambati Padmaja",
    category: "faculty",
    role: "Asst. Professor",
    qualifications: "M.Sc., Ph.D.",
    email: "ambatipadmaja@sssihl.edu.in",
    telephone: "+91 8554 272567",
    color: "plum",
    image: imgPadmaja,
    professionalPages: { linkedin: true, researchgate: true, googleScholar: false },
    overview: "Dr. (Mrs.) Ambati Padmaja is an expert in Food Science, Nutrition and Technology (Phytochemical analysis, food fortification and evaluation and utilisation of food processing waste). She is actively involved in research work apart from her full-time teaching. She graduated from Sri Sathya Sai Institute of Higher Learning in 1997 with a B.Sc. in Home Science and M.Sc. in Food Science and Nutrition in 1999. She completed her Doctoral Degree in Food Technology in 2011 from Jawaharlal Nehru Technological University, Anantapur. She worked as a Senior Research Fellow in projects related to oilseeds and oils, funded by National bodies like Directorate of Vanaspati, Vegetable Oils and Fats, Govt. of India and DST. She also worked as a Lecturer at JNTUA-OTRI from 2010 to 2015. She then joined Sri Sathya Sai Institute of Higher Learning as an Assistant Professor at the Dept. of Food and Nutritional Sciences.",
    areasOfTeaching: [
      "Food Preservation",
      "Nutrition",
      "Evaluation of foods",
      "Ergonomics",
      "Grain science and oils",
      "Food Packaging"
    ],
    researchInterests: [
      "Extraction and application of natural antioxidants in edible oils, utilisation of food processing waste to extract active components"
    ],
    phdSupervision: [
      "Ms. Katam Veera Chaitanya Bhagavathi (Valorization of Food Processing Waste)"
    ],
    projects: []
  },
  {
    name: "Dr. Jhinuk Gupta",
    category: "faculty",
    role: "Asst. Professor",
    qualifications: "M.Sc., Ph.D.",
    email: "jhinukgupta@sssihl.edu.in",
    telephone: "+91 8554 272567",
    color: "olive",
    image: imgGupta,
    professionalPages: { linkedin: true, researchgate: false, googleScholar: true },
    overview: "Dr. (Mrs.) Jhinuk Gupta is an Organic Chemist with research experience in the field of Food Chemistry, Food Processing and Biomacromolecules. She is an alumni of Jadavpur University Kolkata (B.Sc. Chemistry, 2004) and Indian Institute of Technology, Madras (M.Sc. Chemistry, 2006). She completed her Ph.D. from National University of Singapore in 2011 in the field of Synthetic Polymer Chemistry. She has two post-doctoral research experiences in the field of value-added processing and food science from Kansas State University, USA and University of Nebraska-Lincoln, USA. She joined SSSIHL in June, 2019.",
    areasOfTeaching: [
      "Applied Chemistry",
      "Biochemistry",
      "Food Chemistry",
      "Analytical Techniques"
    ],
    researchInterests: [
      "Screening and detection of food adulterants",
      "Biofuels from food wastes"
    ],
    phdSupervision: [
      "Ms Amrita Shaw (Food Safety)",
      "Ms Bezawada Sree Sesha Sravanika (Food Safety & Quality Management)"
    ],
    projects: []
  }
];

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Team Directory — SSSIHL Centre of Excellence" },
      { name: "description", content: "Meet the multi-disciplinary faculty and scientific advisors driving SSSIHL's Centre of Excellence." },
      { property: "og:title", content: "Our Team — SSSIHL CoE" },
      { property: "og:description", content: "Core Faculty and Scientific Advisors driving food science research." },
    ],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<typeof FACULTY_DETAILS[0] | null>(null);

  // Segmenting variables into their specific UI matrix groups
  const coreFaculty = FACULTY_DETAILS.filter((item) => item.category === "faculty");
  const scientificAdvisors = FACULTY_DETAILS.filter((item) => item.category === "advisor");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero Header Presentation Banner */}
      <section className="container-page pt-16 pb-12 relative">
        <div aria-hidden className="absolute top-20 right-10 size-72 rounded-full bg-pomegranate/15 blur-3xl" />
        <div className="max-w-3xl relative animate-fade-up">
          <div className="text-[10px] uppercase tracking-[0.25em] text-pomegranate font-bold mb-6">Expert Directory</div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-6">
            Meet <span className="italic text-shimmer">Our Team</span> of Visionaries.
          </h1>
          <p className="text-lg text-plum-deep/70 leading-relaxed">
            Our multi-disciplinary assembly of core researchers and research advisors combine decades of active engineering, biochemical science, and applied nutrition expertise.
          </p>
        </div>
      </section>

      {/* Primary Section: Core Faculty Members Matrix */}
      <section className="container-page py-6">
        <div className="border-b border-plum/10 pb-4 mb-10">
          <h2 className="font-display text-3xl lg:text-4xl text-plum-deep">Core Faculty</h2>
          <p className="text-sm text-plum-deep/60 mt-1">Academic leaders driving active instruction and direct laboratory guidance.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {coreFaculty.map((f, i) => (
            <div 
              key={f.name} 
              onClick={() => setSelectedFaculty(f)}
              className="bg-card rounded-3xl p-8 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up cursor-pointer group"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="size-20 rounded-3xl overflow-hidden shrink-0 shadow-lg bg-muted border border-plum/10">
                  <img 
                    src={f.image} 
                    alt={f.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl mb-1 leading-tight group-hover:text-pomegranate transition-colors">{f.name}</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-plum-deep/55 font-bold mb-3">{f.role}</p>
                  <p className="text-sm font-medium text-plum-deep/80 mb-2">Qualifications: <span className="text-plum-deep/60">{f.qualifications}</span></p>
                  <p className="text-plum-deep/75 text-sm leading-relaxed line-clamp-3">{f.overview}</p>
                  <span className="inline-flex items-center text-xs font-semibold text-pomegranate mt-4 group-hover:translate-x-1 transition-transform">
                    View Complete Profile &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Section: Scientific Advisors Matrix */}
      <section className="container-page py-12">
        <div className="border-b border-plum/10 pb-4 mb-10">
          <h2 className="font-display text-3xl lg:text-4xl text-plum-deep">Scientific Advisors</h2>
          <p className="text-sm text-plum-deep/60 mt-1">Eminent research specialists and natural product isolators providing critical research counseling.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {scientificAdvisors.map((f, i) => (
            <div 
              key={f.name} 
              onClick={() => setSelectedFaculty(f)}
              className="bg-card rounded-3xl p-8 ring-1 ring-plum/10 hover:-translate-y-1 hover:shadow-xl transition-all animate-fade-up cursor-pointer group"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="size-20 rounded-3xl overflow-hidden shrink-0 shadow-lg bg-muted border border-plum/10">
                  <img 
                    src={f.image} 
                    alt={f.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl mb-1 leading-tight group-hover:text-pomegranate transition-colors">{f.name}</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-plum-deep/55 font-bold mb-3">{f.role}</p>
                  <p className="text-sm font-medium text-plum-deep/80 mb-2">Qualifications: <span className="text-plum-deep/60">{f.qualifications}</span></p>
                  <p className="text-plum-deep/75 text-sm leading-relaxed line-clamp-3">{f.overview}</p>
                  <span className="inline-flex items-center text-xs font-semibold text-pomegranate mt-4 group-hover:translate-x-1 transition-transform">
                    View Complete Profile &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctoral Scholars Dashboard Panel */}
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

      {/* Profile Detail Popup Sheet Modal Component */}
      {selectedFaculty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-plum-deep/40 animate-fade-in">
          <div className="relative bg-card w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden ring-1 ring-plum/10 animate-scale-up max-h-[90vh] flex flex-col">
            
            <div className="flex items-center justify-between p-6 border-b border-plum/10 shrink-0 bg-background">
              <div>
                <h2 className="font-display text-2xl text-plum-deep">{selectedFaculty.name}</h2>
                <p className="text-xs uppercase tracking-[0.1em] text-pomegranate font-bold mt-1">{selectedFaculty.role}</p>
              </div>
              <button 
                onClick={() => setSelectedFaculty(null)}
                className="size-10 rounded-full border border-plum/10 bg-muted/50 flex items-center justify-center text-plum-deep hover:bg-pomegranate hover:text-white transition-colors text-xl font-bold"
                aria-label="Close Profile Modal"
              >
                &times;
              </button>
            </div>

            <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
              <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
                
                <div className="space-y-6 bg-muted/30 p-5 rounded-2xl border border-plum/5">
                  <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md bg-card">
                    <img 
                      src={selectedFaculty.image} 
                      alt={selectedFaculty.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="block font-bold uppercase tracking-wider text-plum-deep/40 mb-1">Qualifications</span>
                      <span className="text-sm font-medium text-plum-deep/80">{selectedFaculty.qualifications}</span>
                    </div>
                    <div>
                      <span className="block font-bold uppercase tracking-wider text-plum-deep/40 mb-1">Email Address</span>
                      <a href={`mailto:${selectedFaculty.email}`} className="text-sm font-medium text-pomegranate hover:underline break-all">{selectedFaculty.email}</a>
                    </div>
                    <div>
                      <span className="block font-bold uppercase tracking-wider text-plum-deep/40 mb-1">Direct Extension</span>
                      <span className="text-sm font-medium text-plum-deep/80">{selectedFaculty.telephone}</span>
                    </div>
                    
                    <div className="pt-2 border-t border-plum/10">
                      <span className="block font-bold uppercase tracking-wider text-plum-deep/40 mb-2">Academic Sheets</span>
                      <div className="flex flex-wrap gap-2 text-[11px]">
                        {selectedFaculty.professionalPages.linkedin && (
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200 font-medium">LinkedIn Available</span>
                        )}
                        {selectedFaculty.professionalPages.researchgate && (
                          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-200 font-medium">ResearchGate</span>
                        )}
                        {selectedFaculty.professionalPages.googleScholar && (
                          <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded border border-purple-200 font-medium">Google Scholar</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-lg text-plum-deep mb-2 border-b border-plum/5 pb-1">Overview Biography</h4>
                    <p className="text-sm text-plum-deep/80 leading-relaxed text-justify">{selectedFaculty.overview}</p>
                  </div>

                  <div>
                    <h4 className="font-display text-lg text-plum-deep mb-3 border-b border-plum/5 pb-1">Areas of Teaching</h4>
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-plum-deep/75">
                      {selectedFaculty.areasOfTeaching.map((course) => (
                        <li key={course} className="flex items-start gap-2">
                          <span className="text-pomegranate mt-0.5">&bull;</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-display text-lg text-plum-deep mb-3 border-b border-plum/5 pb-1">Research & Technology Interests</h4>
                    <ul className="space-y-2 text-sm text-plum-deep/75">
                      {selectedFaculty.researchInterests.map((interest) => (
                        <li key={interest} className="flex items-start gap-2">
                          <span className="text-turmeric font-bold mt-0.5">&mdash;</span>
                          <span className="leading-relaxed">{interest}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedFaculty.projects.length > 0 && (
                    <div>
                      <h4 className="font-display text-lg text-plum-deep mb-3 border-b border-plum/5 pb-1">Current Capital Projects</h4>
                      <div className="space-y-3">
                        {selectedFaculty.projects.map((project, index) => (
                          <div key={index} className="p-3 bg-muted/40 rounded-xl border border-plum/5 text-sm">
                            <p className="font-semibold text-plum-deep/90">{project.title}</p>
                            <p className="text-xs text-pomegranate font-medium mt-1">{project.funding}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedFaculty.phdSupervision.length > 0 && (
                    <div>
                      <h4 className="font-display text-lg text-plum-deep mb-3 border-b border-plum/5 pb-1">Current Ph.D. Supervision</h4>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs">
                        {selectedFaculty.phdSupervision.map((scholar, idx) => (
                          <div key={idx} className="p-3 bg-plum-deep/5 rounded-xl text-plum-deep/80 border border-plum/5 flex items-center gap-2">
                            <span className="font-mono text-pomegranate font-bold">{String(idx + 1).padStart(2, '0')}.</span>
                            <span className="font-medium">{scholar}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
