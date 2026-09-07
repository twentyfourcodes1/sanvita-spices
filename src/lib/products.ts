import redChilly from "@/assets/product-red-chilly.jpg";
import peanutChutney from "@/assets/product-peanut-chutney.jpg";
import garamMasala from "@/assets/product-garam-masala.jpg";
import turmeric from "@/assets/product-turmeric.jpg";
import coriander from "@/assets/product-coriander.jpg";

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
  category: "Powdered Spices" | "Blends" | "Chutney Powders";
  image: string;
  imageAlt: string;
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
    slug: "red-chilly-powder",
    name: "Red Chilly Powder",
    tagline: "Deep colour, clean heat",
    short:
      "Carefully selected dried red chillies, finely ground for rich colour and a clean, balanced heat.",
    category: "Powdered Spices",
    image: redChilly,
    imageAlt:
      "Fine deep red Sanvita chilly powder in a wooden bowl beside whole dried red chillies",
    accent: "red",
    bestseller: true,
    variants: [
      { label: "250g", price: 149, sku: "SPS-RCP-250" },
      { label: "500g", price: 279, sku: "SPS-RCP-500" },
      { label: "1kg", price: 529, sku: "SPS-RCP-1000" },
    ],
    highlights: [
      "Bright natural colour",
      "Balanced, clean heat",
      "Finely ground texture",
      "Freshly packed in small batches",
    ],
    description: [
      "Sanvita Red Chilly Powder is prepared from carefully selected dried red chillies, ground fine so the colour blooms the moment it meets hot oil. It gives curries, gravies and dry sabzis a warm, appetising red tone without overwhelming the other spices in your pan.",
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
    image: peanutChutney,
    imageAlt:
      "Sanvita peanut chutney powder in a wooden bowl with roasted peanuts and dried red chillies",
    accent: "terracotta",
    bestseller: true,
    variants: [
      { label: "200g", price: 169, sku: "SPS-PNC-200" },
      { label: "400g", price: 319, sku: "SPS-PNC-400" },
    ],
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
    image: garamMasala,
    imageAlt:
      "Sanvita garam masala powder in a wooden bowl surrounded by cardamom, cloves, cinnamon and star anise",
    accent: "brown",
    bestseller: true,
    variants: [
      { label: "100g", price: 129, sku: "SPS-GRM-100" },
      { label: "250g", price: 289, sku: "SPS-GRM-250" },
    ],
    highlights: [
      "Warm whole-spice blend",
      "Aromatic finishing masala",
      "Balanced, never harsh",
      "A little goes a long way",
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
    tagline: "Golden colour, gentle earthiness",
    short:
      "Bright golden turmeric with a gentle, earthy aroma — the everyday base of Indian cooking.",
    category: "Powdered Spices",
    image: turmeric,
    imageAlt:
      "Golden Sanvita turmeric powder in a wooden bowl with fresh turmeric roots beside it",
    accent: "gold",
    bestseller: true,
    variants: [
      { label: "100g", price: 79, sku: "SPS-TUR-100" },
      { label: "250g", price: 169, sku: "SPS-TUR-250" },
      { label: "500g", price: 309, sku: "SPS-TUR-500" },
    ],
    highlights: [
      "Bright natural golden tone",
      "Gentle earthy aroma",
      "Smooth, fine grind",
      "An everyday kitchen essential",
    ],
    description: [
      "Sanvita Turmeric Powder is ground fine and smooth, with the warm golden colour and soft earthy aroma you want at the start of nearly every Indian dish.",
      "Add it early with your oil and aromatics so the colour settles into the dish, and use it as the quiet base note beneath your chilli and masala.",
    ],
    ingredients: ["Turmeric"],
    storage:
      "Store in an airtight container away from moisture, heat and direct sunlight.",
    usage: [
      "Add early to oil, dals and curry bases",
      "Use in marinades for colour and warmth",
      "Sprinkle into rice, khichdi and sambar",
    ],
  },
  {
    slug: "coriander-powder",
    name: "Coriander Powder",
    tagline: "Fresh, citrusy, body-building spice",
    short:
      "Freshly ground coriander seeds with a light citrusy aroma that gives gravies natural body.",
    category: "Powdered Spices",
    image: coriander,
    imageAlt:
      "Sanvita coriander powder in a wooden bowl with coriander seeds and fresh coriander leaves",
    accent: "green",
    bestseller: false,
    variants: [
      { label: "250g", price: 139, sku: "SPS-COR-250" },
      { label: "500g", price: 259, sku: "SPS-COR-500" },
    ],
    highlights: [
      "Light citrusy aroma",
      "Adds natural body to gravies",
      "Freshly ground seeds",
      "Blends well with every masala",
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
] as const;
