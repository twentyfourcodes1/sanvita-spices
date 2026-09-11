import brandStory from "@/assets/brand-story-spices.png.asset.json";
import aboutSpicesIndia from "@/assets/about-spices-india.png.asset.json";
import packTurmeric from "@/assets/turmeric-powder-pouch.jpg.asset.json";
import packRedChilly from "@/assets/red-chilli-powder-pouch.jpg.asset.json";
import packGaramMasala from "@/assets/pack-garam-masala.jpeg.asset.json";
import packPeanutChutney from "@/assets/pack-peanut-chutney.jpeg.asset.json";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  keyword: string;
  category: "Spice Guides" | "Cooking Tips" | "Storage & Freshness" | "Recipes";
  readMinutes: number;
  publishedAt: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
  faqs: { question: string; answer: string }[];
  relatedProductSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-identify-pure-red-chilly-powder",
    title: "How to Identify Pure Red Chilly Powder at Home",
    metaTitle: "How to Identify Pure Red Chilly Powder",
    metaDescription:
      "Simple kitchen checks to spot pure red chilly powder — colour, aroma, water and texture tests — from Sanvita Premium Spices, Vijayapura.",
    excerpt:
      "Colour, aroma, texture and two easy water tests that tell you whether the chilly powder in your kitchen is honest or heavily coloured.",
    keyword: "pure red chilly powder",
    category: "Spice Guides",
    readMinutes: 5,
    publishedAt: "2026-08-12",
    image: packRedChilly.url,
    imageAlt: "Sanvita Red Chilly Powder retail pouch",
    intro:
      "Red chilly powder does more than add heat — it sets the colour and character of a dish. Heavily coloured or bulked-out powder shows up quickly once you know what to look for, and every check below can be done at your own kitchen counter in a few minutes.",
    sections: [
      {
        heading: "Start with colour, not brightness",
        paragraphs: [
          "Naturally ground chillies give a warm, slightly deep red. An unnaturally vivid, almost fluorescent red usually means added colour. Good powder also darkens gently over months instead of staying artificially bright.",
        ],
      },
      {
        heading: "The water glass test",
        paragraphs: [
          "Sprinkle half a spoon of powder over a glass of room-temperature water and leave it undisturbed for a minute.",
        ],
        bullets: [
          "Pure powder floats first, then settles slowly and leaves the water only lightly tinted.",
          "Streaks of colour sinking straight down suggest added dye.",
          "A gritty layer at the bottom that feels sandy between your fingers points to bulking material.",
        ],
      },
      {
        heading: "Rub, smell and taste",
        paragraphs: [
          "Rub a pinch between your palms. Real chilly powder feels slightly oily and leaves a clean chilli aroma on your skin. In hot oil it should bloom into fragrance within seconds; a flat, dusty smell is a warning sign.",
        ],
      },
      {
        heading: "Buy in sizes you will actually finish",
        paragraphs: [
          "Chilly powder is at its best within a few months of grinding. Buying a 250g or 500g pack you finish quickly protects colour and aroma far better than a large tin that sits open for a year.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does darker red chilly powder mean lower quality?",
        answer:
          "No. Colour depends on the chilli variety and how recently it was ground. A natural deep red is normal; a very bright, uniform red is more often a sign of added colour.",
      },
      {
        question: "How long does red chilly powder stay fresh?",
        answer:
          "Kept airtight, away from heat and moisture, it holds good colour and heat for about six months and remains usable for longer with gradually reduced aroma.",
      },
    ],
    relatedProductSlugs: ["red-chilly-powder", "turmeric-powder"],
  },
  {
    slug: "turmeric-powder-benefits-and-cooking-guide",
    title: "Turmeric Powder: Everyday Uses and How Much to Add",
    metaTitle: "Turmeric Powder Uses & Cooking Guide",
    metaDescription:
      "How to use turmeric powder in everyday Indian cooking — when to add it, how much per dish, and how to keep its golden colour and aroma.",
    excerpt:
      "When to add turmeric, how much a dish really needs, and why timing decides whether it tastes warm or bitter.",
    keyword: "turmeric powder uses",
    category: "Cooking Tips",
    readMinutes: 4,
    publishedAt: "2026-08-19",
    image: packTurmeric.url,
    imageAlt: "Sanvita Turmeric Powder retail pouch",
    intro:
      "Turmeric is the quiet base note of Indian cooking. Used well, it gives colour and gentle earthiness; overused or added too late, it turns bitter and dusty. Here is how to place it correctly in everyday dishes.",
    sections: [
      {
        heading: "Add it early, with fat",
        paragraphs: [
          "Turmeric needs a little oil or ghee and a few seconds of heat to release its colour. Add it to the tempering along with onions or straight after the cumin splutters, then continue with your other spices.",
        ],
      },
      {
        heading: "How much per dish",
        paragraphs: [
          "Less is more with turmeric — it should support the dish, never lead it.",
        ],
        bullets: [
          "Dal for four people: a level quarter teaspoon.",
          "Dry sabzi: a quarter teaspoon per 250g of vegetables.",
          "Marinade for a kilo of chicken or paneer: half a teaspoon with curd and salt.",
          "Rice, khichdi or sambar: a generous pinch is enough for colour.",
        ],
      },
      {
        heading: "Keeping the gold in your turmeric",
        paragraphs: [
          "Light and moisture are turmeric's enemies. Store the powder in an opaque airtight jar in a cool cupboard, always use a dry spoon, and refill from a sealed pack rather than leaving a large pouch open on the counter.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my food taste bitter after adding turmeric?",
        answer:
          "Usually too much powder, or turmeric added to a dry hot pan and scorched. Add it with oil, in small amounts, and stir immediately.",
      },
      {
        question: "Can turmeric replace red chilly powder for colour?",
        answer:
          "No. Turmeric gives a golden tone and mild earthiness, while chilly powder gives red colour and heat. Most Indian dishes use both together.",
      },
    ],
    relatedProductSlugs: ["turmeric-powder", "coriander-powder"],
  },
  {
    slug: "how-to-store-spices-and-keep-them-fresh",
    title: "How to Store Spice Powders So They Stay Fresh",
    metaTitle: "How to Store Spice Powders Fresh",
    metaDescription:
      "Practical storage rules for Indian spice powders — jars, humidity, heat, dry spoons and pack sizes — so colour and aroma last for months.",
    excerpt:
      "Most spices do not go bad — they go dull. These storage habits protect aroma, colour and taste for months.",
    keyword: "how to store spice powders",
    category: "Storage & Freshness",
    readMinutes: 4,
    publishedAt: "2026-08-26",
    image: brandStory.url,
    imageAlt:
      "Colourful Indian spices arranged in wooden bowls and spoons on a dark surface",
    intro:
      "Ground spices lose aroma long before they look different. Air, heat, light and moisture are what drain them, and each one is easy to manage with a few habits.",
    sections: [
      {
        heading: "Four rules that matter most",
        paragraphs: [],
        bullets: [
          "Airtight first: glass or steel jars with a tight lid beat clipped pouches.",
          "Away from the stove: heat and steam are the fastest way to flatten a masala.",
          "Dry spoon, every time: one damp spoon can clump a whole jar.",
          "Out of the light: an opaque container or a closed cupboard keeps colour honest.",
        ],
      },
      {
        heading: "Refill small, keep the rest sealed",
        paragraphs: [
          "Keep a small working jar near your cooking range and leave the rest of the pack sealed in a cool cupboard. The spice you use daily meets air only briefly, and the reserve stays fresh until needed.",
        ],
      },
      {
        heading: "Roughly how long each type lasts",
        paragraphs: [],
        bullets: [
          "Turmeric and coriander powder: six to nine months of good aroma.",
          "Red chilly powder: about six months of bright colour.",
          "Garam masala and other blends: three to six months, since aroma is the whole point.",
          "Peanut chutney powder: two to three months, as roasted nuts carry oil.",
        ],
      },
      {
        heading: "Signs it is time to replace",
        paragraphs: [
          "If a pinch rubbed between your palms smells of nothing much, no amount of extra spoons will fix the dish. Replace it — a fresh, smaller pack will always cook better than a large stale one.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should spices be kept in the fridge?",
        answer:
          "Generally no. Moving jars in and out of cold storage causes condensation, which clumps powders. A cool, dark cupboard is better.",
      },
      {
        question: "Is it safe to use spices past their best window?",
        answer:
          "They are usually still safe if stored dry and airtight, but they lose aroma and colour, so dishes taste flat.",
      },
    ],
    relatedProductSlugs: ["garam-masala", "red-chilly-powder"],
  },
  {
    slug: "garam-masala-vs-curry-powder",
    title: "Garam Masala vs Curry Powder: What's the Difference?",
    metaTitle: "Garam Masala vs Curry Powder",
    metaDescription:
      "Garam masala is an aromatic finishing blend; curry powder is a turmeric-led base mix. Learn the difference and when to use each.",
    excerpt:
      "One is a finishing aroma, the other a base seasoning. Using them in the wrong place is why a curry tastes off.",
    keyword: "garam masala vs curry powder",
    category: "Spice Guides",
    readMinutes: 4,
    publishedAt: "2026-09-02",
    image: packGaramMasala.url,
    imageAlt: "Sanvita Garam Masala retail pouch",
    intro:
      "These two blends are often treated as interchangeable, but they play opposite roles in a pan. Knowing which goes in first and which goes in last changes how a dish tastes.",
    sections: [
      {
        heading: "What garam masala is",
        paragraphs: [
          "Garam masala is a warm, aromatic blend built around cardamom, cloves, cinnamon, black pepper and bay leaf. It is a finishing spice: stirred in during the last few minutes so the aroma stays intact rather than cooking away.",
        ],
      },
      {
        heading: "What curry powder is",
        paragraphs: [
          "Curry powder is a turmeric-led mix, usually with coriander, cumin and mild chilli, made to season a dish from the start. It is closer to a ready-made base than to a traditional Indian finishing masala.",
        ],
      },
      {
        heading: "When to use which",
        paragraphs: [],
        bullets: [
          "Building a curry base: turmeric, coriander and chilly powder early in the oil.",
          "Rounding off a gravy, biryani or pulao: a small spoon of garam masala at the end.",
          "Never substitute one for the other in equal amounts — garam masala is far more aromatic and easily overpowers a dish.",
        ],
      },
      {
        heading: "A simple everyday order of spices",
        paragraphs: [
          "Temper whole spices, add turmeric with the aromatics, then coriander and red chilly powder with the tomatoes, cook the masala through, and finish with a pinch of garam masala and fresh coriander leaves off the heat.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much garam masala should I use?",
        answer:
          "Around a quarter to half a teaspoon for a curry serving four, added near the end of cooking.",
      },
      {
        question: "Can I add garam masala at the beginning?",
        answer:
          "You can, but most of its aroma will cook off. Adding it late is what makes the difference noticeable.",
      },
    ],
    relatedProductSlugs: ["garam-masala", "coriander-powder"],
  },
  {
    slug: "peanut-chutney-powder-serving-ideas",
    title: "Peanut Chutney Powder: 7 Easy Ways to Serve It",
    metaTitle: "Peanut Chutney Powder Serving Ideas",
    metaDescription:
      "Seven quick ways to use peanut chutney powder — with idli, dosa, chapati rolls, hot rice, curd rice, sandwiches and vegetable stir-fries.",
    excerpt:
      "Beyond idli and dosa: seven quick ways a jar of peanut chutney powder saves a weekday meal.",
    keyword: "peanut chutney powder recipes",
    category: "Recipes",
    readMinutes: 3,
    publishedAt: "2026-09-05",
    image: packPeanutChutney.url,
    imageAlt: "Sanvita Peanut Chutney retail pouch",
    intro:
      "Roasted peanut chutney powder is the most useful jar in a South Indian kitchen. It needs no cooking, keeps well, and turns plain food into a meal in under a minute.",
    sections: [
      {
        heading: "Seven ways to serve it",
        paragraphs: [],
        bullets: [
          "With idli or dosa: mix with sesame oil or ghee into a thick paste.",
          "Hot rice and ghee: a spoonful stirred through is a complete comfort meal.",
          "Chapati rolls: sprinkle inside with a little oil before rolling.",
          "Curd rice: adds crunch and a nutty finish.",
          "Sandwiches and toast: dust over buttered bread with sliced onion.",
          "Vegetable stir-fries: toss in at the end over beans or cabbage.",
          "Travel food: pack it with chapatis when you want a side that keeps.",
        ],
      },
      {
        heading: "Get the consistency right",
        paragraphs: [
          "For a dipping chutney, use roughly two parts powder to one part oil, then loosen with a teaspoon of warm water. For sprinkling, keep it dry and add a pinch of salt only if the dish needs it.",
        ],
      },
      {
        heading: "Keeping it fresh",
        paragraphs: [
          "Because roasted peanuts carry natural oil, this powder is best used within two to three months. Store it in an airtight jar, keep it away from the stove, and always use a dry spoon.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is peanut chutney powder spicy?",
        answer:
          "It carries gentle heat from dried red chillies, balanced by the roasted peanuts. Mixing it with ghee or curd softens the heat further.",
      },
      {
        question: "Can I use it as a curry base?",
        answer:
          "Yes. A spoonful thickens vegetable gravies nicely and adds a nutty depth, similar to a peanut masala.",
      },
    ],
    relatedProductSlugs: ["peanut-chutney", "red-chilly-powder"],
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const relatedBlogPosts = (slug: string, count = 2) =>
  blogPosts.filter((post) => post.slug !== slug).slice(0, count);

export const formatBlogDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const aboutSpicesImage = aboutSpicesIndia.url;
