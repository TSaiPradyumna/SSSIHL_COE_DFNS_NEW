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
  researchHighlights?: { title: string; description: string; keyResearchers: string[] }[];
  publications?: string[];
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
    researchHighlights: [
      {
        title: "Nutritional Profiling for Mineral Malnutrition",
        description:
          "Micronutrient fingerprinting of Indian heritage rice varieties and fortified product development is being carried out to address iron and zinc deficiencies through enriched pigmented rice formulations.",
        keyResearchers: ["Prof. N. Srividya"],
      },
      {
        title: "Microbiome Therapeutics for Iron Deficiency Anemia",
        description:
          "This study evaluates microbiome-modulating symbiotic formulations to support iron metabolism and adolescent girls’ nutritional status.",
        keyResearchers: ["Dr. A. Sumana"],
      },
      {
        title: "Metabolic & Lifestyle Disease Functional Foods",
        description:
          "Evidence-based functional food products are developed for obesity and diabetes management using ingredient validation, glycemic response testing and satiety studies.",
        keyResearchers: ["Prof. N. Srividya", "Dr. A. Sumana", "Dr. Tapasya Anand"],
      },
      {
        title: "Advanced Metabolomics and in silico Antiviral Screening",
        description:
          "Metabolomic and computational screening of Indian red rice metabolites identify natural SARS-CoV-2 main protease inhibitors and candidates for antiviral functional foods.",
        keyResearchers: ["Prof. N. Srividya"],
      },
    ],
    publications: [
      "Ashrita C. Haldipur & N. Srividya. (2021). A comparative evaluation of in vitro antihyperglycemic potential of Bamboo seed rice and Garudan samba. Journal of Cereal Science.",
      "Ashrita C. Haldipur & N. Srividya. (2020). In vitro glycemic response of indigenous pigmented rice cultivars. Current Research in Nutrition and Food Science.",
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
    researchHighlights: [
      {
        title: "Therapeutic Foods & Eye Health",
        description:
          "Functional products were developed for eye health and menopausal support with high carotenoid, anthocyanin and omega-3 formulations.",
        keyResearchers: ["Dr. A. Sumana"],
      },
      {
        title: "Ready-to-Eat Convenience Foods",
        description:
          "Novel multigrain tarts and Nutri Fusion crackers are formulated from pulse and grain flours to offer nutrient-dense, shelf-stable snack options.",
        keyResearchers: ["Dr. A. Sumana"],
      },
      {
        title: "Plant-Based Milk Alternatives",
        description:
          "Research on plant-based milk alternatives focuses on extended shelf life, nutritional completeness and sensory acceptability for dairy-free consumers.",
        keyResearchers: ["Dr. A. Sumana"],
      },
    ],
    publications: [
      "K. Sudha Rani & N. Srividya. (2016). Effect of inulin, fructooligosaccharides and L. acidophilus in formulating a synbiotic yogurt. Asian Journal of Dairy and Food Research.",
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
    researchHighlights: [
      {
        title: "Post-Harvest Management of Organic Produce",
        description:
          "Research assesses organic farm inputs on tomato and sweet lime quality, antioxidant levels and shelf stability under Jaivik Krishi methods.",
        keyResearchers: ["Dr. M. Srijaya"],
      },
      {
        title: "Bio-Based Edible Coatings",
        description:
          "Aloe gel and chitosan based edible antimicrobial coatings are studied for extending shelf life of papaya, figs and fresh-cut vegetables.",
        keyResearchers: ["Prof. N. Srividya"],
      },
      {
        title: "Waste Valorisation of Fruit and Vegetable Byproducts",
        description:
          "Fruit and vegetable processing byproducts are converted into jellies, yogurt, crackers and biodegradable packaging materials.",
        keyResearchers: ["Dr. A. Padmaja"],
      },
    ],
    publications: [
      "N. Saiharini & A. Padmaja. (2022). Studies on nutrient and phytochemical composition and assessment of in vitro antioxidant properties of watermelon fruit by-products. Annals of Phytomedicine.",
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
    researchHighlights: [
      {
        title: "Therapeutic Product Formulation",
        description:
          "Gluten-free millet snack bars, cookies and muesli are developed for celiac-friendly diets with convenient nutritional support.",
        keyResearchers: ["Dr. M. Meera"],
      },
      {
        title: "Athlete & Wellness Convenience Foods",
        description:
          "New products such as Shewins and frozen plant-based treats are formulated to improve strength, immunity, recovery and sensory appeal.",
        keyResearchers: ["Dr. Tapasya Anand", "Dr. M. Srijaya"],
      },
      {
        title: "Eye & Women’s Health Functional Foods",
        description:
          "Foods rich in lutein, zeaxanthin, anthocyanins and omega-3s are created for visual health and menopausal wellbeing.",
        keyResearchers: ["Dr. A. Sumana"],
      },
    ],
    publications: [
      "N/A",
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
    researchHighlights: [
      {
        title: "Biodegradable Film Development",
        description:
          "Starch–protein composite films are formulated from millet by-products for sustainable packaging with compostable end-of-life properties.",
        keyResearchers: ["Dr. A. Sumana"],
      },
      {
        title: "Intelligent Freshness Indicators",
        description:
          "Anthocyanin-based pH-sensitive films are developed to indicate spoilage in perishable dairy and fresh produce packaging.",
        keyResearchers: ["Dr. A. Sumana"],
      },
      {
        title: "Shelf-Life Prediction for Indigenous Foods",
        description:
          "Accelerated shelf-life modelling and barrier performance testing are being used to validate packaging for local ambient conditions.",
        keyResearchers: ["Dr. A. Sumana"],
      },
    ],
    publications: [
      "M. Shalini & A. Sumana. (2023). Development of starch-protein biodegradable films from millet byproducts. Journal of Packaging Technology.",
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
    researchHighlights: [
      {
        title: "Rapid Adulteration Detection Kits",
        description:
          "Field-friendly test kits for spice powders and milk help small vendors identify adulterants such as synthetic colours, starch, and water dilution.",
        keyResearchers: ["Dr. A. Sumana"],
      },
      {
        title: "Quality Assurance for MSMEs",
        description:
          "HACCP, GMP and FSSAI compliance advisory is tailored for rural and women-led food enterprises to standardize safety practices.",
        keyResearchers: ["Dr. A. Sumana"],
      },
      {
        title: "Microbiological Safety in Traditional Foods",
        description:
          "Risk reduction studies for fermented and traditional foods identify contamination hazards and recommend improved processing controls.",
        keyResearchers: ["Dr. A. Sumana", "Sai Sruthi Shree"],
      },
    ],
    publications: [
      "A. Sumana & S. Sruthi Shree. (2022). Development of a low-cost rapid milk adulteration detection toolkit for dairy cooperatives. International Journal of Food Quality.",
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
    researchHighlights: [
      {
        title: "Nutraceutical Ingredients from By-Products",
        description:
          "Rice bran and fruit pomace are converted into fibre-rich nutraceutical powders and antioxidant concentrates for health-focused food applications.",
        keyResearchers: ["Dr. N. Srividya"],
      },
      {
        title: "Sustainable Protein & Prebiotic Ingredients",
        description:
          "By-product valorisation creates protein-rich pulse flours and prebiotic fibre blends suited for functional snack development.",
        keyResearchers: ["Dr. N. Srividya"],
      },
      {
        title: "Green Extraction of Bioactive Compounds",
        description:
          "Eco-friendly extraction techniques recover anthocyanins, carotenoids and phenolics from food waste for clean-label formulations.",
        keyResearchers: ["Dr. N. Srividya"],
      },
    ],
    publications: [
      "N. Srividya. (2022). Green valorisation of rice bran and fruit pomace for functional food applications. Journal of Food Processing and Preservation.",
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
    researchHighlights: [
      {
        title: "Women-Led Startup Acceleration",
        description:
          "Incubation supports female entrepreneurs through co-creation workshops, product development clinics, and regulatory handholding.",
        keyResearchers: ["Dr. A. Sumana", "Prof. B. Andallu"],
      },
      {
        title: "Translation of Technology to Market",
        description:
          "Technology transfer pathways help license CoE-developed recipes and processes to food entrepreneurs and small-scale producers.",
        keyResearchers: ["Dr. A. Sumana"],
      },
      {
        title: "Pilot Batch Scale-Up Support",
        description:
          "Pilot plant production guidance enables women agripreneurs to move products from formulation to certified market-ready batches.",
        keyResearchers: ["Prof. B. Andallu"],
      },
    ],
    publications: [
      "N/A",
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
