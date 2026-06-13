import milletImg from "@/assets/domain-millet.jpg";
import dairyImg from "@/assets/domain-dairy.jpg";
import fruitsImg from "@/assets/domain-fruits.jpg";
import productImg from "@/assets/domain-product.jpg";
import packagingImg from "@/assets/domain-packaging.jpg";
import safetyImg from "@/assets/domain-safety.jpg";
import recoveryImg from "@/assets/domain-recovery.jpg";
import startupImg from "@/assets/domain-startup.jpg";

export type Domain = {
  slug: string;
  number: string;
  title: string;
  short: string;
  emoji: string;
  color: "plum" | "sage" | "pomegranate" | "turmeric" | "saffron" | "basil";
  image: string;
  overview: string;
  focus: string[];
  team: { name: string; role: string }[];
  projects: { title: string; detail: string }[];
};

export const DOMAINS: Domain[] = [
  {
    slug: "cereal-millet-grain",
    number: "01",
    title: "Cereal, Millet & Ancient Grain Technology",
    short: "Reviving heritage grains for modern metabolic health.",
    emoji: "🌾",
    color: "saffron",
    image: milletImg,
    overview:
      "Rediscovering the nutritional power of millets, pigmented rice and indigenous grains through processing, fortification and product development geared toward lifestyle disease prevention.",
    focus: [
      "Pigmented rice processing & metabolomic profiling",
      "Millet-based convenience and therapeutic foods",
      "Bio-processing: soaking, germination, fermentation",
      "Mineral bioavailability & glycemic index studies",
    ],
    team: [
      { name: "Dr... (Miss) N Srividya", role: "Principal Investigator" },
      { name: "Ms. Ashrita C Haldipur", role: "Doctoral Scholar" },
      { name: "Ms. N Saiharini", role: "Doctoral Scholar" },
    ],
    projects: [
      {
        title: "ICMR – Antidiabetic evaluation of Indian pigmented rice",
        detail: "₹24 L (2019–22). Mechanistic metabolomic approach for diabetic functional foods.",
      },
      {
        title: "UGC-DAE – XRF profiling of essential minerals",
        detail: "₹45 K (2019–20). EDXRF mapping of Fe, Zn, Ca, Mg in bio-processed pigmented rice.",
      },
    ],
  },
  {
    slug: "dairy-plant-based",
    number: "02",
    title: "Dairy & Plant-Based Foods",
    short: "Sustainable milk alternatives and probiotic dairy formulations.",
    emoji: "🥛",
    color: "sage",
    image: dairyImg,
    overview:
      "Combining traditional fermentation wisdom with modern microbiology to develop functional dairy and plant-based products with extended shelf life and probiotic value.",
    focus: [
      "Probiotic curd and fermented beverages",
      "Plant-based milk from millets, nuts and pulses",
      "Shelf-stable indigenous dairy products",
      "Lactose-free and protein-fortified formulations",
    ],
    team: [
      { name: "Dr. (Mrs.) A Sumana", role: "Faculty Lead" },
      { name: "Ms. Manjula Devi Ghoora", role: "Doctoral Scholar" },
    ],
    projects: [
      { title: "Plant-based probiotic beverage formulation", detail: "Multi-strain fermentation of millet-based bases." },
      { title: "Shelf-stable indigenous sweets", detail: "Process optimization for traditional milk sweets." },
    ],
  },
  {
    slug: "fruits-vegetables",
    number: "03",
    title: "Fruits & Vegetable Processing",
    short: "Zero-waste preservation that maximises nutrient retention.",
    emoji: "🍅",
    color: "pomegranate",
    image: fruitsImg,
    overview:
      "Thermal and non-thermal processing of regional produce to retain micronutrients and bioactives, with emphasis on under-utilized fruits.",
    focus: [
      "Non-thermal preservation (HPP, PEF, ohmic heating)",
      "Bioactive extraction from peels and pomace",
      "Instant mixes from under-utilised fruits",
      "Anti-oxidant rich convenience formulations",
    ],
    team: [
      { name: "Dr. (Mrs.) Ambati Padmaja", role: "Faculty Lead" },
      { name: "Ms. Shrijana Rasaily", role: "Doctoral Scholar" },
    ],
    projects: [
      { title: "Instant soup mix from Muntingia calabura fruit", detail: "Awarded 3rd Place – FOODS 2019, Chennai." },
      { title: "Anthocyanin recovery from fruit waste", detail: "Solvent-free extraction for natural colourants." },
    ],
  },
  {
    slug: "product-development",
    number: "04",
    title: "Food Product Development & Commercialization",
    short: "From concept to commercial shelf with sensory rigour.",
    emoji: "🧪",
    color: "turmeric",
    image: productImg,
    overview:
      "End-to-end product design — formulation, sensory evaluation, scale-up, regulatory documentation and market validation — delivered as a single pipeline.",
    focus: [
      "Recipe design & nutritional labelling",
      "Sensory & consumer acceptance testing",
      "Scale-up from kitchen to pilot plant",
      "Cost engineering and IP support",
    ],
    team: [
      { name: "Prof... (Mrs.) B Andallu", role: "Phytochemical Specialist" },
      { name: "Ms. Alisha Pradhan", role: "Doctoral Scholar" },
    ],
    projects: [
      { title: "Spice-based functional foods", detail: "Translating phytochemistry into shelf-ready blends." },
      { title: "Therapeutic convenience foods", detail: "Pigmented-rice based ready mixes for diabetic care." },
    ],
  },
  {
    slug: "packaging-shelf-life",
    number: "05",
    title: "Packaging & Shelf-Life Technology",
    short: "Sustainable barriers that keep nutrition locked in.",
    emoji: "📦",
    color: "sage",
    image: packagingImg,
    overview:
      "Designing biodegradable, active and intelligent packaging systems that extend shelf life while protecting bioactives — with a focus on Indian climatic conditions.",
    focus: [
      "Biodegradable and edible films",
      "Active and intelligent packaging",
      "Accelerated shelf-life modelling",
      "Migration and barrier studies",
    ],
    team: [{ name: "Dr. (Mrs.) A Sumana", role: "Lead — Packaging Lab" }],
    projects: [
      { title: "Starch–protein composite edible films", detail: "From millet by-products." },
      { title: "Indicator films for spoilage detection", detail: "Anthocyanin-based pH sensing in dairy." },
    ],
  },
  {
    slug: "food-safety-adulteration",
    number: "06",
    title: "Food Safety, Quality & Adulteration Detection",
    short: "Rapid, lab-validated screens for the Indian food chain.",
    emoji: "🛡️",
    color: "pomegranate",
    image: safetyImg,
    overview:
      "Method development for rapid adulteration screening and microbial safety — supporting FSSAI compliance, HACCP and GMP implementation for industry partners.",
    focus: [
      "Rapid adulteration test methods",
      "HACCP and GMP advisory",
      "FSSAI labelling & compliance",
      "Microbiological quality assurance",
    ],
    team: [
      { name: "Dr. (Mrs.) A Sumana", role: "Regulatory & QA Lead" },
      { name: "Ms. Sai Sruthi Shree K K", role: "Doctoral Scholar" },
    ],
    projects: [
      { title: "Adulterant screening in spice powders", detail: "Spectroscopic + colour-based rapid kits." },
      { title: "Milk adulteration detection toolkit", detail: "Low-cost field test for small dairies." },
    ],
  },
  {
    slug: "resource-recovery",
    number: "07",
    title: "Resource Recovery from Food Stream",
    short: "Circular nutrition — turning by-products into value.",
    emoji: "♻️",
    color: "basil",
    image: recoveryImg,
    overview:
      "Valorising agri-food by-products — peels, pomace, brans, whey — into functional ingredients, biopolymers and energy, with a strong sustainability mandate.",
    focus: [
      "By-product valorisation",
      "Functional ingredients from waste",
      "Bran-based fibre & polyphenol enrichment",
      "Green extraction processes",
    ],
    team: [{ name: "Dr. (Miss) N Srividya", role: "Faculty Lead" }],
    projects: [
      { title: "Pigmented rice bran nutraceuticals", detail: "Stabilisation and enrichment for daily use." },
      { title: "Fruit waste polyphenol concentrates", detail: "For functional beverage applications." },
    ],
  },
  {
    slug: "startup-incubation",
    number: "08",
    title: "Startup Incubation & Technology Transfer",
    short: "Women-led food entrepreneurship from idea to FSSAI.",
    emoji: "🚀",
    color: "turmeric",
    image: startupImg,
    overview:
      "A women-first incubation pathway — idea validation, prototype, pilot batch, regulatory support and investor connect — anchored in the CoE's translational research.",
    focus: [
      "Idea validation & prototyping",
      "Pilot batch production support",
      "FSSAI, GMP & export compliance",
      "Investor and FPO network connect",
    ],
    team: [
      { name: "Dr. (Mrs.) A Sumana", role: "Incubation Mentor" },
      { name: "Prof. (Mrs.) B Andallu", role: "Scientific Advisor" },
    ],
    projects: [
      { title: "Women entrepreneur cohorts", detail: "Annual cohort focused on millet & dairy startups." },
      { title: "Technology transfer pipeline", detail: "Licensing of CoE-developed recipes and processes." },
    ],
  },
];

export const FACULTY = [
  {
    name: "Prof. (Mrs.) B Andallu",
    role: "Phytochemical Specialist • 25+ Years",
    bio: "Invited speaker at the 107th Indian Science Congress on the role of phytochemicals in healthcare.",
    color: "plum" as const,
  },
  {
    name: "Dr... (Miss) N Srividya",
    role: "Principal Investigator • Metabolomics",
    bio: "Leads ICMR-funded research on the antidiabetic potential of Indian pigmented rice varieties.",
    color: "pomegranate" as const,
  },
  {
    name: "Dr. (Mrs.) A Sumana",
    role: "Food Industry Consultant • Regulatory Expert",
    bio: "Board of Studies member, KVR Government College — works at the intersection of safety and entrepreneurship.",
    color: "sage" as const,
  },
  {
    name: "Dr. (Mrs.) Ambati Padmaja",
    role: "Product Development • Sensory Science",
    bio: "Awarded 3rd Place at FOODS 2019 for development of an instant soup mix from Muntingia calabura.",
    color: "turmeric" as const,
  },
];

export const SCHOLARS = [
  "Ms. Ashrita C Haldipur",
  "Ms. Manjula Devi Ghoora",
  "Ms. N Saiharini",
  "Ms. Shrijana Rasaily",
  "Ms. Alisha Pradhan",
  "Ms. Sai Sruthi Shree K K",
  "Ms. Sai Dharshini S",
];
