import redChilli from "@/assets/product-red-chilli.jpg";
import peanutChutney from "@/assets/product-peanut-chutney.jpg.asset.json";
import garamMasala from "@/assets/product-garam-masala.jpg";
import turmeric from "@/assets/product-turmeric.jpg";
import coriander from "@/assets/product-coriander.jpg";
import packRedChilli from "@/assets/red-chilli-powder-pouch.jpg.asset.json";
import packPeanutChutney from "@/assets/peanut-chutney-pouch.jpg.asset.json";
import packGaramMasala from "@/assets/garam-masala-pouch.jpg.asset.json";
import packTurmeric from "@/assets/turmeric-powder-pouch.jpg.asset.json";
import packCoriander from "@/assets/coriander-powder-pouch.jpg.asset.json";
import honeyBowl from "@/assets/product-honey.jpg";
import packHoney from "@/assets/pack-honey.jpeg.asset.json";

/* -------------------------------------------------------------------------
 * BUSINESS INFORMATION — edit here, used across the whole website.
 * ---------------------------------------------------------------------- */
export const business = {
  company: "Sanvita International Traders",
  brand: "Sanvita Premium Spices",
  phoneDisplay: "+91 89518 53252",
  phoneDial: "+918951853252",
  whatsapp: "918951853252",
  email: "info@sanvitainternationaltraders.com",
  address: {
    line1: "No. 43, Shivajyoti Nilaya",
    line2: "KC Nagar, Near DCC Bank",
    city: "Vijayapura - 586101",
    state: "Karnataka, India",
  },
};

export type Variant = {
  /** Pack label, e.g. "250g" */
  label: string;
  /** TEMPORARY placeholder price in INR — update freely. */
  price: number;
  sku: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  category: "Powdered Spices" | "Blends" | "Chutney Powders" | "Honey";
  image: string;
  imageAlt: string;
  /** Retail pack photograph, shown alongside the existing image. */
  packImage: string;
  packImageAlt: string;
  accent: "red" | "gold" | "green" | "brown" | "terracotta";
  bestseller: boolean;
  variants: Variant[];
  highlights: string[];
  description: string[];
  ingredients?: string[];
  storage: string;
  usage: string[];
};

/* -------------------------------------------------------------------------
 * PRODUCT CATALOGUE — prices below are editable placeholder values.
 * ---------------------------------------------------------------------- */
export const products: Product[] = [
  {
    slug: "red-chilli-powder",
    name: "Red Chilli Powder",
    tagline: "Deep colour, clean heat",
    short:
      "Carefully selected dried red chillies, finely ground for rich colour and a clean, balanced heat.",
    category: "Powdered Spices",
    image: packRedChilli.url,
    packImage: redChilli,
    imageAlt: "Sanvita Red Chilli Powder retail pouch",
    packImageAlt:
      "Fine deep red Sanvita chilli powder in a wooden bowl beside whole dried red chillies",
    accent: "red",
    bestseller: true,
    variants: [{ label: "100g", price: 69, sku: "SPS-RCP-100" }],
    highlights: [
      "100 % Natural Chilli powder",
      "Rich colour & aroma",
      "Quality Tested & Carefully Packed",
      "No added Color | No preservatives",
      "Perfect for everyday cooking",
    ],
    description: [
      "Sanvita Red Chilli Powder is prepared from carefully selected dried red chillies, ground fine so the colour blooms the moment it meets hot oil. It gives curries, gravies and dry sabzis a warm, appetising red tone without overwhelming the other spices in your pan.",
      "The heat is steady and clean rather than sharp, which makes it easy to cook with every day — from a simple dal tadka to a slow-simmered masala.",
    ],
    ingredients: ["Dried red chillies"],
    storage:
      "Keep in an airtight container in a cool, dry place away from direct sunlight and moisture. Always use a dry spoon.",
    usage: [
      "Add to hot oil with onions for curry bases",
      "Season dry sabzis, kebabs and marinades",
      "Sprinkle into chutneys and podis for colour",
    ],
  },
  {
    slug: "peanut-chutney",
    name: "Peanut Chutney",
    tagline: "Roasted, nutty, everyday favourite",
    short:
      "A traditional roasted peanut chutney powder — nutty, aromatic and ready to serve with idli, dosa or hot rice.",
    category: "Chutney Powders",
    image: packPeanutChutney.url,
    packImage: peanutChutney.url,
    imageAlt: "Sanvita Peanut Chutney retail pouch",
    packImageAlt:
      "Sanvita peanut chutney powder in a wooden bowl with roasted peanuts and dried red chillies",
    accent: "terracotta",
    bestseller: true,
    variants: [{ label: "200g", price: 169, sku: "SPS-PNC-200" }],
    highlights: [
      "Roasted peanut aroma",
      "Traditional South Indian taste",
      "Ready to serve in minutes",
      "Freshly prepared batches",
    ],
    description: [
      "Roasted peanuts, dried red chillies and everyday aromatics come together in this comforting chutney powder. Stir a spoonful with a little oil or ghee and it becomes an instant side for idli, dosa, chapati or a bowl of hot rice.",
      "The grind is kept slightly coarse so you still taste the peanut — the way a home-made chutney powder should be.",
    ],
    ingredients: [
      "Roasted peanuts",
      "Dried red chillies",
      "Garlic",
      "Salt",
      "Curry leaves",
    ],
    storage:
      "Store in an airtight jar in a cool, dry place. Use a dry spoon to keep it fresh for longer.",
    usage: [
      "Mix with sesame oil or ghee as an idli-dosa side",
      "Spread inside chapati rolls and sandwiches",
      "Stir into hot rice with a spoon of ghee",
    ],
  },
  {
    slug: "garam-masala",
    name: "Garam Masala",
    tagline: "Warm, aromatic, well balanced",
    short:
      "A fragrant blend of warm whole spices, ground to lift everyday curries with depth and aroma.",
    category: "Blends",
    image: packGaramMasala.url,
    packImage: garamMasala,
    imageAlt: "Sanvita Garam Masala retail pouch",
    packImageAlt:
      "Sanvita garam masala powder in a wooden bowl surrounded by cardamom, cloves, cinnamon and star anise",
    accent: "brown",
    bestseller: true,
    variants: [{ label: "100g", price: 129, sku: "SPS-GRM-100" }],
    highlights: [
      "100 % Natural Garam masala",
      "Rich colour & aroma",
      "Quality Tested & Carefully Packed",
      "No added Color | No preservatives",
      "Perfect for everyday cooking",
    ],
    description: [
      "Cardamom, cloves, cinnamon, black pepper and other warm spices are blended for aroma first. Sanvita Garam Masala is meant as a finishing spice — a small spoon stirred in near the end of cooking rounds off a curry beautifully.",
      "Because the blend is balanced rather than heavy, it works across vegetarian gravies, biryanis, pulaos and rich non-vegetarian dishes alike.",
    ],
    ingredients: [
      "Coriander",
      "Cumin",
      "Black pepper",
      "Cinnamon",
      "Cardamom",
      "Cloves",
      "Bay leaf",
      "Star anise",
    ],
    storage:
      "Keep tightly closed in a cool, dry place. Close the lid promptly to hold the aroma.",
    usage: [
      "Stir in during the last minutes of cooking",
      "Finish biryani, pulao and rich gravies",
      "Add a pinch to marinades and kebab mixes",
    ],
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    tagline: "Bring the goodness of Pure Turmeric Powder to your kitchen",
    short: "Bring the goodness of Pure Turmeric Powder to your kitchen.100% Natural Turmeric Powder.",
    category: "Powdered Spices",
    image: packTurmeric.url,
    packImage: turmeric,
    imageAlt: "Sanvita Turmeric Powder retail pouch",
    packImageAlt:
      "Golden Sanvita turmeric powder in a wooden bowl with fresh turmeric roots beside it",
    accent: "gold",
    bestseller: true,
    variants: [{ label: "100g", price: 79, sku: "SPS-TUR-100" }],
    highlights: [
      "Rich colour and aroma",
      "Quality Tested & Carefully Packed",
      "No added colour, no preservatives",
      "High percentage of curcumin content",
      "Ideal for curries, dals, rice and more",
      "Premium quality for your family",
    ],
    description: [
      "Sanvita Premium Turmeric Powder is pure, natural and authentic — the golden base your kitchen deserves.",
      "Rich in colour, warm in aroma and high in curcumin content. Quality Tested & Carefully Packed, so your family gets only the best.",
      "Add a touch of golden goodness to curries, dals, rice and everyday meals — no added colour, no preservatives, just premium quality.",
    ],
    ingredients: ["Turmeric"],
    storage:
      "Store in an airtight container away from moisture, heat and direct sunlight.",
    usage: [
      "Add to curries, dals and rice for colour and warmth",
      "Use in everyday sabzis, marinades and khichdi",
      "Sprinkle into soups, sambar and golden milk",
    ],
  },
  {
    slug: "coriander-powder",
    name: "Coriander Powder",
    tagline: "Fresh, citrusy, body-building spice",
    short:
      "Freshly ground coriander seeds with a light citrusy aroma that gives gravies natural body.",
    category: "Powdered Spices",
    image: packCoriander.url,
    packImage: coriander,
    imageAlt: "Sanvita Coriander Powder retail pouch",
    packImageAlt:
      "Sanvita coriander powder in a wooden bowl with coriander seeds and fresh coriander leaves",
    accent: "green",
    bestseller: false,
    variants: [{ label: "100g", price: 59, sku: "SPS-COR-100" }],
    highlights: [
      "100 % Natural Coriander powder",
      "Rich colour & aroma",
      "Quality Tested & Carefully Packed",
      "No added Color | No preservatives",
      "Perfect for everyday cooking",
    ],
    description: [
      "Coriander is the spice that holds a dish together. Ground from carefully selected seeds, Sanvita Coriander Powder brings a fresh, faintly citrusy aroma and thickens gravies naturally without dulling other flavours.",
      "Use it generously — it is the most forgiving spice in the cupboard and the backbone of countless everyday recipes.",
    ],
    ingredients: ["Coriander seeds"],
    storage:
      "Keep in an airtight container in a cool, dry place. Avoid damp spoons and humid shelves.",
    usage: [
      "Build the base of curries and korma gravies",
      "Combine with chilli and turmeric for masala pastes",
      "Add to dry roasts, sabzis and rasam",
    ],
  },
  {
    slug: "honey",
    name: "Honey",
    tagline: "Nature's sweetness in every drop",
    short:
      "Raw, pure and natural honey sourced from trusted beekeepers — no added sugar, no preservatives.",
    category: "Honey",
    image: packHoney.url,
    packImage: honeyBowl,
    imageAlt: "Sanvita Premium Honey 250g glass jar",
    packImageAlt:
      "Golden honey in a wooden bowl with a honey dipper, honeycomb pieces and blossoms",
    accent: "gold",
    bestseller: true,
    variants: [
      { label: "250g", price: 249, sku: "SPS-HNY-250" },
      { label: "500g", price: 459, sku: "SPS-HNY-500" },
    ],
    highlights: [
      "No added sugar",
      "No preservatives",
      "Rich in natural goodness",
      "Sourced from trusted beekeepers",
    ],
    description: [
      "Sanvita Premium Honey is raw, pure and natural — thick, golden and full of the gentle floral aroma that only untampered honey carries. It is collected from trusted beekeepers and packed with nothing added and nothing taken away.",
      "Use it as an everyday sweetener in place of sugar: a spoon in warm water, drizzled over breakfast, or stirred into tea, milk and desserts.",
    ],
    ingredients: ["100% pure honey"],
    storage:
      "Store in a cool, dry place with the lid closed. Natural crystallisation may occur — place the jar in warm water to return it to a smooth flow.",
    usage: [
      "Stir into warm water, milk or tea",
      "Drizzle over toast, fruit and yogurt",
      "Use as a natural sweetener in desserts and marinades",
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const relatedProducts = (slug: string, count = 3) =>
  products.filter((p) => p.slug !== slug).slice(0, count);

export const formatPrice = (value: number) =>
  `₹${value.toLocaleString("en-IN")}`;

export const categories = [
  "All",
  "Powdered Spices",
  "Blends",
  "Chutney Powders",
  "Honey",
] as const;
