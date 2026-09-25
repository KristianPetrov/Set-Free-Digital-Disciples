export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectGroup = "ministry" | "shop" | "local";

export type Project = {
  slug: string;
  name: string;
  url: string;
  displayUrl: string;
  kind: string;
  group: ProjectGroup;
  place?: string;
  plain: string;
  built: string;
  visitor: string;
  points: string[];
  screenshot: string;
  screenshotAlt: string;
  mobile: string;
  logo?: string;
  gallery: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "set-free-anaheim",
    name: "Set Free Anaheim",
    url: "https://www.setfreeanaheim.com/",
    displayUrl: "setfreeanaheim.com",
    kind: "Church",
    group: "ministry",
    place: "Anaheim, California",
    plain:
      "A church site with the same voice as the room. Real talk, real photos, and Sunday at 10am sitting right where a new person can see it.",
    built:
      "I designed and built the whole site, and I still look after it. Service times, donations, a prayer wall, events, stories, and the news all live in one place.",
    visitor:
      "A first-time visitor can find Sunday service, watch a story, give, or get directions without digging.",
    points: [
      "Sunday at 10am and a donate button are on the page before the scroll gets long",
      "Real photos of the people, the bikes, and the room — not stock smiles",
      "Stories, news, and a prayer wall so the site keeps feeling alive",
      "A thrift shop and Set Free University, linked from the same front door",
    ],
    screenshot: "/projects/set-free-anaheim/section-community.jpg",
    screenshotAlt: "Set Free Anaheim homepage with the Set Free wordmark, Real Community, and Unconditional Love",
    mobile: "/projects/set-free-anaheim/mobile.jpg",
    logo: "/projects/set-free-anaheim/logo.png",
    gallery: [
      {
        src: "/projects/set-free-anaheim/photo-mic.jpg",
        alt: "Pastor Phil speaking into a microphone",
        caption: "The room, on the site",
      },
      {
        src: "/projects/set-free-anaheim/photo-bike.jpg",
        alt: "Set Free riders with a motorcycle",
        caption: "The crew",
      },
      {
        src: "/projects/set-free-anaheim/graphic-disciples.jpg",
        alt: "Holy disciples artwork used on the Set Free Anaheim site",
        caption: "Artwork made for the ministry",
      },
      {
        src: "/projects/set-free-anaheim/section-stories.jpg",
        alt: "In the News section on setfreeanaheim.com",
        caption: "Press, on the homepage",
      },
      {
        src: "/projects/set-free-anaheim/graphic-love.jpg",
        alt: "Unconditional love artwork from the Set Free Anaheim site",
        caption: "Unconditional love",
      },
      {
        src: "/projects/set-free-anaheim/photo-fieldy.jpg",
        alt: "Community photo from the Set Free Anaheim gallery",
        caption: "People, not placeholders",
      },
    ],
  },
  {
    slug: "iwm-towing",
    name: "IWM Towing",
    url: "https://www.iwmtow.com/",
    displayUrl: "iwmtow.com",
    kind: "Local business",
    group: "local",
    place: "Hilo, Hawaiʻi",
    plain:
      "A 24/7 towing site for the Big Island. Built for someone on the side of the road who needs a number, a price, and a truck — not a brochure.",
    built:
      "I built the site around the real trucks, plain starting prices, and a quote tool. Dispatch is one tap away, day or night.",
    visitor:
      "A stranded driver can call (808) 785-4988, see that a local tow starts at $95, or get a quick estimate.",
    points: [
      "The phone number stays in reach — header, hero, and the bottom of the page",
      "Starting prices are listed in plain numbers before anyone has to call",
      "A quote tool for local tows, lockouts, jumps, tires, and winch recovery",
      "Real photos of the flatbeds, including a classic car and a U-Haul on the bed",
    ],
    screenshot: "/projects/iwm-towing/desktop.jpg",
    screenshotAlt: "IWM Towing homepage with a flatbed truck and the line When the road stops, we don't",
    mobile: "/projects/iwm-towing/mobile.jpg",
    logo: "/projects/iwm-towing/logo.png",
    gallery: [
      {
        src: "/projects/iwm-towing/classic.jpg",
        alt: "Island Wide Motors flatbed towing a classic convertible",
        caption: "Careful with the nice ones",
      },
      {
        src: "/projects/iwm-towing/truck.jpg",
        alt: "Island Wide Motors flatbed tow truck",
        caption: "The truck people actually see",
      },
      {
        src: "/projects/iwm-towing/ramp.jpg",
        alt: "Flatbed ramp in use at the Hilo yard",
        caption: "The ramp, in action",
      },
      {
        src: "/projects/iwm-towing/uhaul.jpg",
        alt: "Island Wide Motors truck transporting a U-Haul",
        caption: "Bigger than a sedan",
      },
      {
        src: "/projects/iwm-towing/section-fleet.jpg",
        alt: "Our fleet in action section on iwmtow.com",
        caption: "The fleet, on the site",
      },
    ],
  },
  {
    slug: "2nd-chance-at-life",
    name: "2nd Chance at Life",
    url: "https://www.2ndchanceatlife.org/",
    displayUrl: "2ndchanceatlife.org",
    kind: "Veteran nonprofit",
    group: "ministry",
    plain:
      "A quiet site for veterans moving out of homelessness. No noise. A mission, three promises, and a way to start.",
    built:
      "I built a single calm page: who they serve, what they provide, how intake works, and a phone number that is never hard to find.",
    visitor:
      "A veteran, or someone calling for one, can start intake or call 562-618-6191 without hunting through menus.",
    points: [
      "The promise is the headline: every veteran deserves a second chance",
      "Stability, recovery, and independence are spelled out in everyday words",
      "Intake is a clear next step, not a buried form",
      "The phone number stays on the page from top to bottom",
    ],
    screenshot: "/projects/2nd-chance-at-life/desktop.jpg",
    screenshotAlt: "2nd Chance at Life homepage with the headline Every veteran deserves a second chance",
    mobile: "/projects/2nd-chance-at-life/mobile.jpg",
    logo: "/projects/2nd-chance-at-life/logo.png",
    gallery: [
      {
        src: "/projects/2nd-chance-at-life/section-provide.jpg",
        alt: "What we provide section: Stability, Recovery, and Independence",
        caption: "What they actually provide",
      },
      {
        src: "/projects/2nd-chance-at-life/logo.png",
        alt: "2nd Chance at Life logo",
        caption: "The mark",
      },
      {
        src: "/projects/2nd-chance-at-life/desktop.jpg",
        alt: "2nd Chance at Life homepage headline",
        caption: "The front door",
      },
    ],
  },
  {
    slug: "pure-energy-peptides",
    name: "Pure Energy Peptides",
    url: "https://www.pureenergypeptides.com/",
    displayUrl: "pureenergypeptides.com",
    kind: "Online shop",
    group: "shop",
    place: "Sheridan, Wyoming",
    plain:
      "A research catalog that leads with a simple promise: affordable, quick, and simple. Prices, certificates, and the rules are out in the open.",
    built:
      "I built and maintain the store — age check, catalog, volume pricing, order tracking, and a mission page that sounds like the people behind it.",
    visitor:
      "A visitor can browse the catalog, open a certificate of analysis, and see the price for 1, 5, or 10 vials before checkout.",
    points: [
      "An age check at the door, then a homepage that says what the shop is",
      "Featured compounds with the price and the bulk discount in the same glance",
      "Certificates of analysis linked from the product, not hidden in a PDF drawer",
      "Order tracking, a calculator, and a contact path that includes a phone number",
    ],
    screenshot: "/projects/pure-energy-peptides/desktop.jpg",
    screenshotAlt: "Pure Energy Peptides homepage with Affordable, Quick, Simple and featured research compounds",
    mobile: "/projects/pure-energy-peptides/mobile.jpg",
    logo: "/projects/pure-energy-peptides/logo.png",
    gallery: [
      {
        src: "/projects/pure-energy-peptides/product-cjc.png",
        alt: "CJC-1295 plus IPA product image from the Pure Energy catalog",
        caption: "Catalog photography",
      },
      {
        src: "/projects/pure-energy-peptides/product-nad.png",
        alt: "NAD+ product image from the Pure Energy catalog",
        caption: "Same look, every vial",
      },
      {
        src: "/projects/pure-energy-peptides/product-bpc.png",
        alt: "BPC-157 product image from the Pure Energy catalog",
        caption: "Built to scan fast",
      },
      {
        src: "/projects/pure-energy-peptides/section-products.jpg",
        alt: "Featured compounds section on pureenergypeptides.com",
        caption: "Prices on the homepage",
      },
      {
        src: "/projects/pure-energy-peptides/product-tb.png",
        alt: "TB-500 product image from the Pure Energy catalog",
        caption: "TB-500",
      },
    ],
  },
  {
    slug: "infinity-peptides",
    name: "Infinity Peptides",
    url: "https://www.infinity-peptides.com/",
    displayUrl: "infinity-peptides.com",
    kind: "Online shop",
    group: "shop",
    plain:
      "A darker, quieter research catalog. Fifty-plus items, prices you can read, and the research-use rules sitting in the open instead of the fine print.",
    built:
      "I built the storefront, the product photos, the cart, and the pages a buyer hits on the way to checkout. I still maintain it.",
    visitor:
      "Someone can scan the lineup, open a product, and know the price — starting around $5 — before they make an account.",
    points: [
      "A homepage that shows the lineup instead of making you open a menu",
      "Clear USD prices on every card",
      "Research-use language on the header, the catalog, and checkout",
      "Categories, order tracking, and a cart that starts empty and says so",
    ],
    screenshot: "/projects/infinity-peptides/desktop.jpg",
    screenshotAlt: "Infinity Peptides homepage with the infinity mark and a row of research products",
    mobile: "/projects/infinity-peptides/mobile.jpg",
    logo: "/projects/infinity-peptides/logo.png",
    gallery: [
      {
        src: "/projects/infinity-peptides/product-reta.png",
        alt: "Retatrutide vial from the Infinity Peptides catalog",
        caption: "Product shots with the mark",
      },
      {
        src: "/projects/infinity-peptides/product-glow.png",
        alt: "GLOW vial from the Infinity Peptides catalog",
        caption: "GLOW",
      },
      {
        src: "/projects/infinity-peptides/product-blend.png",
        alt: "BPC-157 and TB-500 vial from the Infinity Peptides catalog",
        caption: "Blends, labeled clearly",
      },
      {
        src: "/projects/infinity-peptides/section-products.jpg",
        alt: "Product lineup on infinity-peptides.com",
        caption: "The lineup, up front",
      },
      {
        src: "/projects/infinity-peptides/product-nad.png",
        alt: "NAD+ vial from the Infinity Peptides catalog",
        caption: "NAD+",
      },
    ],
  },
  {
    slug: "affordable-peptides",
    name: "Affordable Peptides",
    url: "https://www.affordablepeptides.life/",
    displayUrl: "affordablepeptides.life",
    kind: "Online shop",
    group: "shop",
    plain:
      "A research shop aimed at people who want the catalog, the paperwork, and the price without a lecture. Easy, fast, affordable — said in that order.",
    built:
      "I built the store, order lookup, mission and vision pages, and a purity FAQ that answers the question in normal sentences. I still maintain it.",
    visitor:
      "A visitor can check a price, look up an order, text the shop, or read what purity numbers actually mean.",
    points: [
      "Lab-grade standards and transparent pricing, stated before the catalog",
      "Catalog highlights with the dose size and the price on the card",
      "A purity FAQ written as straight answers, not a wall of jargon",
      "Find-an-order, contact, and a text number in the header",
    ],
    screenshot: "/projects/affordable-peptides/desktop.jpg",
    screenshotAlt: "Affordable Peptides homepage with the line Lab-Grade Standards. Transparent Catalog Pricing.",
    mobile: "/projects/affordable-peptides/mobile.jpg",
    logo: "/projects/affordable-peptides/logo.png",
    gallery: [
      {
        src: "/projects/affordable-peptides/section-catalog.jpg",
        alt: "Catalog highlights for Tirzepatide, AOD 9604, and BPC-157",
        caption: "Prices you can see",
      },
      {
        src: "/projects/affordable-peptides/logo.png",
        alt: "Affordable Peptides logo",
        caption: "The mark",
      },
      {
        src: "/projects/affordable-peptides/mobile.jpg",
        alt: "Affordable Peptides homepage on a phone",
        caption: "Same offer on a phone",
      },
    ],
  },
  {
    slug: "east-coast-wellness",
    name: "East Coast Wellness",
    url: "https://www.eastcoastwellness.co/",
    displayUrl: "eastcoastwellness.co",
    kind: "Online shop",
    group: "shop",
    plain:
      "A research shop for vials, blends, and sprays. You can see the product, the strength, and the price without opening a single menu.",
    built:
      "I built a storefront that puts the lineup on the homepage, with kit pricing, product photography, and a use notice that stays visible. I still maintain it.",
    visitor:
      "A visitor can compare a single vial against a 10-vial kit, then add it to the cart from the homepage.",
    points: [
      "Featured products rotate on the homepage with strength and price",
      "Single vial and 10-vial kit, shown before checkout",
      "Real product photos for vials, sprays, and reconstitution supplies",
      "A use notice that stays on the page, written in plain language",
    ],
    screenshot: "/projects/east-coast-wellness/desktop.jpg",
    screenshotAlt: "East Coast Wellness homepage with the logo and a precision molecule catalog headline",
    mobile: "/projects/east-coast-wellness/mobile.jpg",
    logo: "/projects/east-coast-wellness/logo.png",
    gallery: [
      {
        src: "/projects/east-coast-wellness/vials.png",
        alt: "East Coast Wellness reconstitution vials",
        caption: "The vials",
      },
      {
        src: "/projects/east-coast-wellness/sprays.png",
        alt: "East Coast Wellness research sprays",
        caption: "Sprays, photographed",
      },
      {
        src: "/projects/east-coast-wellness/product-glow.png",
        alt: "GLOW product bottle from the East Coast Wellness catalog",
        caption: "Labeled so you can read it",
      },
      {
        src: "/projects/east-coast-wellness/product-bpc.png",
        alt: "BPC-157 product bottle from the East Coast Wellness catalog",
        caption: "BPC-157",
      },
      {
        src: "/projects/east-coast-wellness/section-products.jpg",
        alt: "Featured products on eastcoastwellness.co",
        caption: "Buy from the homepage",
      },
      {
        src: "/projects/east-coast-wellness/product-wolverine.png",
        alt: "Wolverine Pro product bottle from the East Coast Wellness catalog",
        caption: "Wolverine Pro",
      },
    ],
  },
];

export const projectGroups: { id: "all" | ProjectGroup; label: string }[] = [
  { id: "all", label: "All of it" },
  { id: "ministry", label: "Churches & missions" },
  { id: "shop", label: "Online shops" },
  { id: "local", label: "Local businesses" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
