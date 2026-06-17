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
  researchHighlights?: { title: string; description: string; researchLead: string[] }[];
  publications?: string[];
  team: { name: string; role: string }[];
  projects: { title: string; detail: string }[];
};

export const DOMAINS: Domain[] = [
  {
    slug: "millet-ancient-grain-technology",
    number: "01",
    title: "Millet & Ancient Grain Technology",
    short: "Unlocking the full nutritional and functional potential of heritage Indian millets.",
    emoji: "🌾",
    color: "saffron",
    image: milletImg,
    overview:
      "Advanced structural processing and characterization of small millets to engineer health-focused food delivery mechanisms aimed at mitigating widespread metabolic imbalances.",
    focus: [
      "Millet Characterization",
      "Processing of Millets",
      "Product Designing using millets",
    ],
    researchHighlights: [
      {
        title: "Physicochemical Properties of Small Millets",
        description:
          "Mapping structural variations in starch granules during standard mechanical processing to maximize dietary fiber and nutrient retention profiles.",
        researchLead: ["Dr. Meera Manikkavachakan"],
      },
    ],
    /* publications: [
      "Meera M. & Srijaya M. (2024). Processing thresholds and structural evaluations of underutilized small millets for functional snack models.",
    ], */
    team: [
      { name: "Dr. Meera Manikkavachakan", role: "Principal Investigator" },
    ],
    projects: [
      {
        title: "Therapeutic Millet Snacks Core",
        detail: "Formulating low-glycemic extrusion matrix templates for ready-to-eat rural community food supply streams.",
      },
    ],
  },
  {
    slug: "food-processing-technology",
    number: "02",
    title: "Food Processing and Technology",
    short: "Sustainable plant-based alternatives and fresh produce post-harvest engineering frameworks.",
    emoji: "🥛",
    color: "sage",
    image: dairyImg,
    overview:
      "Addressing structural property conversions in processed foods, mitigating post-harvest losses, and formulating robust clean-label alternatives that match strict nutritional and sensory baselines.",
    focus: [
      "Plant based dairy alternatives",
      "Fruit & Vegetable Post harvest Management",
    ],
    researchHighlights: [
      {
        title: "Emulsion Stability in Non-Dairy Analogs",
        description:
          "Analyzing lipid-protein interactions within macro plant protein sources to secure clean shelf stability and smooth thickness arrays.",
        researchLead: ["Dr. M. Srijaya"],
      },
    ],
    /* publications: [
      "Srijaya M. (2025). Ambient storage stability metrics and post-harvest quality baselines for sub-tropical fresh produce lines.",
    ], */
    team: [
      { name: "Dr. M Srijaya", role: "Principal Investigator" },
      { name: "Ms. Lohitha", role: "Research Scholar" },
      { name: "Ms. Deepika", role: "Research Scholar" },
    ],
    projects: [
      {
        title: "Zero-Cold-Chain Coating Assays",
        detail: "Developing breathable bio-polymeric membranes to extend fresh produce ambient preservation lifespans.",
      },
    ],
  },
  {
    slug: "nutrition-metabolomics",
    number: "03",
    title: "Nutrition Metabolomics",
    short: "Mechanistic metabolic screening of heritage grain cultivars for targeted therapeutic interventions.",
    emoji: "🔬",
    color: "pomegranate",
    image: fruitsImg,
    overview:
      "Bridging analytical chemistry and personalized cellular health via small-molecule screening. We isolate bioactive compounds from native pigmented grains to counter diabetes and cross-disease malnutrition frameworks.",
    focus: [
      "Diabetes",
      "Pigmented Rice",
      "Malnutrition",
      "Antiviral",
    ],
    researchHighlights: [
      {
        title: "Anthocyanin Pathway Restrictions",
        description:
          "Isolating high-density secondary compounds to monitor carbohydrate-digesting enzyme restriction activities in real-time.",
        researchLead: ["Prof. N. Srividya"],
      },
    ],
    /* publications: [
      "N. Srividya. (2023). In vitro glycemic response and metabolomic profiling of indigenous native Indian pigmented rice lines.",
    ], */
    team: [
      { name: "Prof. N Srividya", role: "Principal Investigator" },
      { name: "Ms. Sai Shruthi Sree", role: "Research Scholar" },
      { name: "Ms. Mounika", role: "Research Scholar" },
      { name: "Ms. Inderdeep", role: "Research Scholar" },
    ],
    projects: [
      {
        title: "ICMR – Metabolomic Profile Mapping",
        detail: "₹24 L project creating mechanistic antidiabetic functional foods using elite local colored rice grains.",
      },
    ],
  },
  {
    slug: "public-health-nutrition",
    number: "04",
    title: "Public Health & Nutrition",
    short: "Epidemiological food strategy implementations focused on structural micronutrient correction.",
    emoji: "🥗",
    color: "turmeric",
    image: productImg,
    overview:
      "Designing accessible community-level food systems to resolve nutritional imbalances like anemia and metabolic dysfunction across underserved population hubs.",
    focus: [
      "Anemia",
      "MASLD",
    ],
    researchHighlights: [
      {
        title: "Bioavailability Matrix Diagnostics",
        description:
          "Formulating clean nutrient enhancers that increase active mineral absorption scores within traditional grain-based diets.",
        researchLead: ["Dr. A. Sumana"],
      },
    ],
    /* publications: [
      "Sumana A. (2024). Translational community food interventions and clinical safety parameters for vulnerable regional cohorts.",
    ], */
    team: [
      { name: "Dr. A Sumana", role: "Principal Investigator" },
      { name: "Ms. Shivangi", role: "Research Scholar" },
      { name: "Ms. Sparsh", role: "Research Scholar" },
      { name: "Ms. Sangeetha", role: "Research Scholar" },
    ],
    projects: [
      {
        title: "Community Supplementation Trials",
        detail: "Tracking field compliance and physiological verification scores of targeted high-absorption mineral complexes.",
      },
    ],
  },
  {
    slug: "sports-nutrition",
    number: "05",
    title: "Sports Nutrition",
    short: "Performance nutrition sequencing and specialized metabolic physiology management.",
    emoji: "🏃‍♀️",
    color: "plum",
    image: packagingImg,
    overview:
      "Optimizing macro-nutrient distribution timelines, metabolic recovery curves, and performance adapters tailored explicitly for competitive athletes and female biological models.",
    focus: [
      "Athletes",
      "Women nutrition",
    ],
    researchHighlights: [
      {
        title: "Endurance Glycogen Restoration",
        description:
          "Tracking post-exercise glycogen replenishment intervals utilizing focused plant-derived protein structures.",
        researchLead: ["Dr. Tapasya Anand"],
      },
    ],
    /* publications: [
      "Tapasya Anand. (2025). Metabolic recovery dynamics and performance energy formulation blueprints for active cohorts.",
    ], */
    team: [
      { name: "Dr. Tapasya Anand", role: "Principal Investigator" },
    ],
    projects: [
      {
        title: "Hormone-Compatible Energy Systems",
        detail: "Developing specialized, nutritionally synchronized energy snack configurations for athletes.",
      },
    ],
  },
  {
    slug: "food-safety-adulteration",
    number: "06",
    title: "Food Quality, Safety & Adulteration",
    short: "Rapid, lab-validated screens for the Indian food chain.",
    emoji: "🛡️",
    color: "basil",
    image: safetyImg,
    overview:
      "Method development for rapid adulteration screening and microbial safety — supporting FSSAI compliance, HACCP and GMP implementation for industry partners.",
    focus: [
      "Rapid adulteration test methods",
      "HACCP and GMP advisory",
      "FSSAI labelling & compliance",
      "Microbiological quality assurance",
    ],
    researchHighlights: [
      {
        title: "Rapid Adulteration Detection Kits",
        description:
          "Field-friendly test kits for spice powders and milk help small vendors identify adulterants such as synthetic colours, starch, and water dilution.",
        researchLead: ["Dr. Jhinuk Gupta"],
      },
      {
        title: "Quality Assurance for MSMEs",
        description:
          "HACCP, GMP and FSSAI compliance advisory is tailored for rural and women-led food enterprises to standardize safety practices.",
        researchLead: ["Dr. Jhinuk Gupta"],
      },
      {
        title: "Microbiological Safety in Traditional Foods",
        description:
          "Risk reduction studies for fermented and traditional foods identify contamination hazards and recommend improved processing controls.",
        researchLead: ["Dr. Jhinuk Gupta"],
      },
    ],
    /* publications: [
      "Gupta J. & Sruthi Shree S. (2023). Rapid optical screening validation models for unexpected contaminant identification in cooperative supply setups.",
    ], */
    team: [
      { name: "Dr. Jhinuk Gupta", role: "Principal Investigator" },
      { name: "Ms. Amritha Shaw", role: "Research Scholar" },
      { name: "Ms. Sree Sesha Sravanika", role: "Research Scholar" },
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
    color: "saffron",
    image: recoveryImg,
    overview:
      "Valorising agri-food by-products — peels, pomace, brans, whey — into functional ingredients, biopolymers and energy, with a strong sustainability mandate.",
    focus: [
      "By-product valorisation",
      "Functional ingredients from waste",
      "Bran-based fibre & polyphenol enrichment",
      "Green extraction processes",
    ],
    researchHighlights: [
      {
        title: "Nutraceutical Ingredients from By-Products",
        description:
          "Rice bran and fruit pomace are converted into fibre-rich nutraceutical powders and antioxidant concentrates for health-focused food applications.",
        researchLead: ["Dr. Ambati Padmaja"],
      },
      {
        title: "Sustainable Protein & Prebiotic Ingredients",
        description:
          "By-product valorisation creates protein-rich pulse flours and prebiotic fibre blends suited for functional snack development.",
        researchLead: ["Dr. Ambati Padmaja"],
      },
      {
        title: "Green Extraction of Bioactive Compounds",
        description:
          "Eco-friendly extraction techniques recover anthocyanins, carotenoids and phenolics from food waste for clean-label formulations.",
        researchLead: ["Dr. Ambati Padmaja"],
      },
    ],
    /* publications: [
      "Padmaja A. & Saiharini N. (2022). Green validation systems and byproduct extraction parameters for circular food economy frameworks.",
    ], */
    team: [
      { name: "Dr. Ambati Padmaja", role: "Principal Investigator" },
      { name: "Ms. Chaitanya", role: "Research Scholar" },
    ],
    projects: [
      { title: "Pigmented rice bran nutraceuticals", detail: "Stabilisation and enrichment for daily use." },
      { title: "Fruit waste polyphenol concentrates", detail: "For functional beverage applications." },
    ],
  },
  {
    slug: "startup-incubation",
    number: "08",
    title: "Commercialization and Tech Transfer",
    short: "Women-led food entrepreneurship from idea to FSSAI.",
    emoji: "🚀",
    color: "plum",
    image: startupImg,
    overview:
      "A women-first incubation pathway — idea validation, prototype, pilot batch, regulatory support and investor connect — anchored in the CoE's translational research.",
    focus: [
      "Idea validation & prototyping",
      "Pilot batch production support",
      "FSSAI, GMP & export compliance",
      "Investor and FPO network connect",
    ],
    researchHighlights: [
      {
        title: "Women-Led Startup Acceleration",
        description:
          "Incubation supports female entrepreneurs through co-creation workshops, product development clinics, and regulatory handholding.",
        researchLead: ["Prof. B. Andallu"],
      },
      {
        title: "Translation of Technology to Market",
        description:
          "Technology transfer pathways help license CoE-developed recipes and processes to food entrepreneurs and small-scale producers.",
        researchLead: ["Prof. B. Andallu"],
      },
      {
        title: "Pilot Batch Scale-Up Support",
        description:
          "Pilot plant production guidance enables women agripreneurs to move products from formulation to certified market-ready batches.",
        researchLead: ["Prof. B. Andallu"],
      },
    ],
    /* publications: [
      "Andallu B. (2022). Strategic technology mapping pipelines and investment-ready pathways for rural agro-processing matrices.",
    ], */
    team: [],
    projects: [
      { title: "Women entrepreneur cohorts", detail: "Annual cohort focused on millet & dairy startups." },
      { title: "Technology transfer pipeline", detail: "Licensing of CoE-developed recipes and processes." },
    ],
  },
];

export const FACULTY = [
  {
    name: "Dr. M Srijaya",
    role: "Associate Professor & Head",
    bio: "Head of Food & Nutritional Sciences focusing on food processing, preservation and applied nutrition.",
    color: "plum" as const,
  },
  {
    name: "Prof. N Srividya",
    role: "Professor & Dean of Sciences",
    bio: "Dean of Sciences and active researcher in food science and nutrition with 25+ years of experience.",
    color: "pomegranate" as const,
  },
  {
    name: "Prof. B Andallu",
    role: "Professor (Hon.)",
    bio: "Invited speaker at the 107th Indian Science Congress on the role of phytochemicals in healthcare.",
    color: "saffron" as const,
  },
  {
    name: "Dr. A Sumana",
    role: "Asst. Professor",
    bio: "Food Industry Consultant and regulatory expert working at the intersection of safety and entrepreneurship.",
    color: "sage" as const,
  },
  {
    name: "Dr. Tapasya Anand",
    role: "Asst. Professor",
    bio: "Faculty member in Food & Nutritional Sciences contributing to functional foods and nutrition research.",
    color: "turmeric" as const,
  },
  {
    name: "Dr. Ambati Padmaja",
    role: "Asst. Professor",
    bio: "Specializes in product development and sensory science. Awarded 3rd Place at FOODS 2019 for instant soup mix innovation.",
    color: "basil" as const,
  },
  {
    name: "Dr. Jhinuk Gupta",
    role: "Asst. Professor",
    bio: "Faculty member in Food & Nutritional Sciences with expertise in food technology and nutrition.",
    color: "plum" as const,
  },
  {
    name: "Dr. Meera Manikkavachakan",
    role: "Asst. Professor",
    bio: "Leads characterization processing protocols for ancient grain structures and millet designs.",
    color: "pomegranate" as const,
  }
];

export const SCHOLARS = [
  "Sai Shruthi Sree",
  "Mounika",
  "Inderdeep",
  "Lohitha",
  "Deepika",
  "Shivangi",
  "Sparsh",
  "Sangeetha",
  "Chaitanya",
  "Amritha Shaw",
  "Sree Sesha Sravanika",
];