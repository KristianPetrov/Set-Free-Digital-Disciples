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
      "A church’s heart, brought to the screen. Real stories, a welcoming community, and a clear invitation to come as you are.",
    built:
      "I designed and built the site, then kept it current with service details, giving, a prayer wall, events, stories, and news.",
    visitor:
      "A first-time visitor can find Sunday service, watch a story, give, or get directions without digging through menus.",
    points: [
      "Sunday service and giving are easy to spot from the first screen",
      "Real photography shows the people, bikes, and room",
      "Events, stories, news, and prayer requests help the site stay current",
      "The thrift shop and Set Free University are linked from the same front door",
    ],
    screenshot: "/projects/set-free-anaheim/desktop-studio.jpg",
    screenshotAlt: "Set Free Anaheim homepage with a portrait of Pastor Phil, the Set Free logo, and an invitation to Sunday service",
    mobile: "/projects/set-free-anaheim/mobile-studio.jpg",
    logo: "/projects/set-free-anaheim/logo.png",
    gallery: [
      {
        src: "/projects/set-free-anaheim/section-community.jpg",
        alt: "Community and unconditional love on the Set Free Anaheim site",
        caption: "Community and purpose",
      },
      {
        src: "/projects/set-free-anaheim/photo-mic.jpg",
        alt: "Pastor Phil speaking into a microphone",
        caption: "Pastor Phil",
      },
      {
        src: "/projects/set-free-anaheim/photo-bike.jpg",
        alt: "Set Free riders with a motorcycle",
        caption: "The Set Free community",
      },
      {
        src: "/projects/set-free-anaheim/graphic-disciples.jpg",
        alt: "Holy disciples artwork used on the Set Free Anaheim site",
        caption: "Custom ministry artwork",
      },
      {
        src: "/projects/set-free-anaheim/section-stories.jpg",
        alt: "In the News section on setfreeanaheim.com",
        caption: "Stories and news",
      },
      {
        src: "/projects/set-free-anaheim/graphic-love.jpg",
        alt: "Unconditional love artwork from the Set Free Anaheim site",
        caption: "Unconditional love",
      },
      {
        src: "/projects/set-free-anaheim/photo-fieldy.jpg",
        alt: "Community photo from the Set Free Anaheim gallery",
        caption: "Community moments",
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
      "Roadside help, one tap away. A bold, practical site that connects Big Island drivers with the people ready to get them moving.",
    built:
      "I built the site around the real fleet, upfront starting prices, and a quick estimate tool. Dispatch is one tap away, day or night.",
    visitor:
      "A driver can call dispatch, compare starting prices, or use the estimate tool right from the homepage.",
    points: [
      "The phone number stays easy to reach throughout the page",
      "Starting prices are shown before a driver has to call",
      "A quote tool covers tows, lockouts, jump starts, tires, and winch recovery",
      "Real photos show the flatbeds at work, including classic cars and U-Hauls",
    ],
    screenshot: "/projects/iwm-towing/desktop-studio.jpg",
    screenshotAlt: "IWM Towing homepage with a flatbed truck and the line When the road stops, we don't",
    mobile: "/projects/iwm-towing/mobile-studio.jpg",
    logo: "/projects/iwm-towing/logo.png",
    gallery: [
      {
        src: "/projects/iwm-towing/classic.jpg",
        alt: "Island Wide Motors flatbed towing a classic convertible",
        caption: "Classic car transport",
      },
      {
        src: "/projects/iwm-towing/truck.jpg",
        alt: "Island Wide Motors flatbed tow truck",
        caption: "The towing fleet",
      },
      {
        src: "/projects/iwm-towing/ramp.jpg",
        alt: "Flatbed ramp in use at the Hilo yard",
        caption: "Ready for recovery",
      },
      {
        src: "/projects/iwm-towing/uhaul.jpg",
        alt: "Island Wide Motors truck transporting a U-Haul",
        caption: "Heavy vehicle transport",
      },
      {
        src: "/projects/iwm-towing/section-fleet.jpg",
        alt: "Our fleet in action section on iwmtow.com",
        caption: "Fleet gallery",
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
      "A new beginning deserves a clear path. A calm, welcoming site that helps veterans find support and take the first step toward stability.",
    built:
      "I built a focused page that explains who they serve, what support includes, how intake works, and how to get in touch.",
    visitor:
      "A veteran, family member, or support worker can understand the program and get directly to intake or contact.",
    points: [
      "A direct headline states the promise: every veteran deserves a second chance",
      "Stability, recovery, and independence are explained in everyday language",
      "Intake gives visitors a clear starting point",
      "The phone number stays easy to find from top to bottom",
    ],
    screenshot: "/projects/2nd-chance-at-life/desktop-studio.jpg",
    screenshotAlt: "2nd Chance at Life homepage with the headline Every veteran deserves a second chance",
    mobile: "/projects/2nd-chance-at-life/mobile-studio.jpg",
    logo: "/projects/2nd-chance-at-life/logo.png",
    gallery: [
      {
        src: "/projects/2nd-chance-at-life/section-provide.jpg",
        alt: "What we provide section: Stability, Recovery, and Independence",
        caption: "Support, explained",
      },
      {
        src: "/projects/2nd-chance-at-life/logo.png",
        alt: "2nd Chance at Life logo",
        caption: "Brand identity",
      },
      {
        src: "/projects/2nd-chance-at-life/desktop-studio.jpg",
        alt: "2nd Chance at Life homepage headline",
        caption: "A clear mission",
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
      "A detailed catalog made easy to explore. Clear product information, volume pricing, and lab documents give this research-use store a confident digital home.",
    built:
      "I built and maintain the store with age confirmation, a searchable catalog, volume pricing, order tracking, and a mission page in the shop’s own voice.",
    visitor:
      "A visitor can compare prices for 1, 5, or 10 vials and open a certificate of analysis before checkout.",
    points: [
      "Age confirmation appears before the catalog",
      "Featured items show the price and volume discount together",
      "Certificates of analysis are linked from each product page",
      "Order tracking, a calculator, and a direct contact path are built in",
    ],
    screenshot: "/projects/pure-energy-peptides/desktop.jpg",
    screenshotAlt: "Pure Energy Peptides homepage with Affordable, Quick, Simple and featured research compounds",
    mobile: "/projects/pure-energy-peptides/mobile.jpg",
    logo: "/projects/pure-energy-peptides/logo.png",
    gallery: [
      {
        src: "/projects/pure-energy-peptides/product-cjc.png",
        alt: "CJC-1295 plus IPA product image from the Pure Energy catalog",
        caption: "Product photography",
      },
      {
        src: "/projects/pure-energy-peptides/product-nad.png",
        alt: "NAD+ product image from the Pure Energy catalog",
        caption: "Consistent product identity",
      },
      {
        src: "/projects/pure-energy-peptides/product-bpc.png",
        alt: "BPC-157 product image from the Pure Energy catalog",
        caption: "Catalog details",
      },
      {
        src: "/projects/pure-energy-peptides/section-products.jpg",
        alt: "Featured compounds section on pureenergypeptides.com",
        caption: "Featured products",
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
      "A distinctive brand with a catalog to match. A focused research-use storefront that makes product discovery, pricing, and ordering easy to follow.",
    built:
      "I built and maintain the storefront, product photography, cart, and the pages customers use on the way to checkout.",
    visitor:
      "A visitor can explore the lineup, open a product, and compare its size and price before creating an account.",
    points: [
      "Featured products introduce the catalog on the homepage",
      "Prices are visible on every product card",
      "Research-use information is clear from the header through checkout",
      "Categories, order tracking, and a cart with a clear empty state",
    ],
    screenshot: "/projects/infinity-peptides/desktop-studio.jpg",
    screenshotAlt: "Infinity Peptides homepage with a colorful infinity mark, clear typography, and a research catalog introduction",
    mobile: "/projects/infinity-peptides/mobile-studio.jpg",
    logo: "/projects/infinity-peptides/logo.png",
    gallery: [
      {
        src: "/projects/infinity-peptides/product-reta.png",
        alt: "Retatrutide vial from the Infinity Peptides catalog",
        caption: "Branded product imagery",
      },
      {
        src: "/projects/infinity-peptides/product-glow.png",
        alt: "GLOW vial from the Infinity Peptides catalog",
        caption: "GLOW",
      },
      {
        src: "/projects/infinity-peptides/product-blend.png",
        alt: "BPC-157 and TB-500 vial from the Infinity Peptides catalog",
        caption: "Clearly labeled blends",
      },
      {
        src: "/projects/infinity-peptides/section-products.jpg",
        alt: "Product lineup on infinity-peptides.com",
        caption: "Catalog overview",
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
      "Straightforward shopping, thoughtfully designed. Product details, pricing, and lab information come together in a clean research-use storefront.",
    built:
      "I built and maintain the store, order lookup, mission and vision pages, and a plain-language FAQ about purity reports.",
    visitor:
      "Visitors can check a price, look up an order, text the shop, or get a clear explanation of purity reports.",
    points: [
      "Quality standards and pricing are stated before the catalog",
      "Catalog cards show the product size and price together",
      "The purity FAQ answers common questions in plain language",
      "Order lookup, contact details, and text support are easy to find",
    ],
    screenshot: "/projects/affordable-peptides/desktop.jpg",
    screenshotAlt: "Affordable Peptides homepage with the line Lab-Grade Standards. Transparent Catalog Pricing.",
    mobile: "/projects/affordable-peptides/mobile.jpg",
    logo: "/projects/affordable-peptides/logo.png",
    gallery: [
      {
        src: "/projects/affordable-peptides/section-catalog.jpg",
        alt: "Catalog highlights for Tirzepatide, AOD 9604, and BPC-157",
        caption: "Catalog highlights",
      },
      {
        src: "/projects/affordable-peptides/logo.png",
        alt: "Affordable Peptides logo",
        caption: "Brand identity",
      },
      {
        src: "/projects/affordable-peptides/mobile.jpg",
        alt: "Affordable Peptides homepage on a phone",
        caption: "Designed for phones",
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
      "A fresh visual identity for a varied research-use catalog. Vials, blends, and sprays are presented with clear options and a simple path to the cart.",
    built:
      "I built and maintain a storefront with the catalog on the homepage, kit pricing, product photography, and a visible use notice.",
    visitor:
      "A visitor can compare a single vial with a 10-vial kit and add the right option to the cart from the homepage.",
    points: [
      "Featured products show their strength and price on the homepage",
      "Single-vial and 10-vial kit options appear before checkout",
      "Product photos show vials, sprays, and supplies",
      "A plain-language use notice stays visible on the page",
    ],
    screenshot: "/projects/east-coast-wellness/desktop-studio.jpg",
    screenshotAlt: "East Coast Wellness homepage with the logo and a precision molecule catalog headline",
    mobile: "/projects/east-coast-wellness/mobile-studio.jpg",
    logo: "/projects/east-coast-wellness/logo.png",
    gallery: [
      {
        src: "/projects/east-coast-wellness/vials.png",
        alt: "East Coast Wellness reconstitution vials",
        caption: "Product photography",
      },
      {
        src: "/projects/east-coast-wellness/sprays.png",
        alt: "East Coast Wellness research sprays",
        caption: "Research sprays",
      },
      {
        src: "/projects/east-coast-wellness/product-glow.png",
        alt: "GLOW product bottle from the East Coast Wellness catalog",
        caption: "Readable product labels",
      },
      {
        src: "/projects/east-coast-wellness/product-bpc.png",
        alt: "BPC-157 product bottle from the East Coast Wellness catalog",
        caption: "BPC-157",
      },
      {
        src: "/projects/east-coast-wellness/section-products.jpg",
        alt: "Featured products on eastcoastwellness.co",
        caption: "Featured catalog",
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
  { id: "all", label: "All projects" },
  { id: "ministry", label: "Churches & nonprofits" },
  { id: "shop", label: "Online shops" },
  { id: "local", label: "Local businesses" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectScreens(project: Project): ProjectImage[] {
  const screens = [
    { src: project.screenshot, alt: project.screenshotAlt, caption: "Desktop experience" },
    { src: project.mobile, alt: project.name + " on a phone", caption: "Mobile experience" },
    ...project.gallery,
  ];
  return screens.filter((screen, index) => screens.findIndex((item) => item.src === screen.src) === index);
}
