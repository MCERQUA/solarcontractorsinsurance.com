// Site configuration for solarcontractorsinsurance.com
// SHARED AGENCY IDENTITY — do not change CCA contact info or NPN

/* ============================================================
   SITE CONFIG (niche-specific — edit per site)
   ============================================================ */
export const SITE = {
  name: "Solar Contractor Insurance",
  domain: "solarcontractorsinsurance.com",
  url: "https://solarcontractorsinsurance.com",
  tagline: "Insurance for Solar Contractors, Installers, and Renewable Energy Firms",
  description:
    "Specialized commercial insurance for solar contractors — general liability, workers' compensation, installation floater, commercial auto, E&O/professional liability, umbrella, tools & equipment, and bonds. A-rated carriers. 15-minute quotes.",
  // ── SHARED AGENCY IDENTITY — do not change ──
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  legalName: "Contractors Choice Agency LLC",
  founded: 2005,
  npn: "8608479",
  hours: "Mon–Fri 8am–6pm MST",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  social: {
    facebook: "https://facebook.com/contractorschoiceagency",
    linkedin: "https://linkedin.com/company/contractors-choice-agency",
  },
} as const;

/* ============================================================
   BRAND NICHE IDENTITY
   ============================================================ */
export const BRAND = {
  brandShort: "Solar Contractor Insurance",
  brandSub: "Solar & Renewable Coverage",
  nicheShort: "solar contractor",
  nichePlural: "solar contractors",
  operator: "solar contractor",
  operatorPlural: "solar contractors",
  niche1: "general liability",
  niche2: "workers' compensation",
  niche3: "installation floater",
  regionPill: "California · Texas · Florida · National",
};

/* ============================================================
   NAVIGATION
   ============================================================ */
export const NAV_LINKS = [
  { href: "/services", label: "Coverage" },
  { href: "/coverage", label: "Coverage Area" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/* ============================================================
   SERVICES
   First slug = featured card (highlighted in ServicesGrid)
   ============================================================ */
export const SERVICES = [
  {
    slug: "general-liability",
    icon: "ShieldCheck",
    title: "General Liability Insurance",
    description:
      "Third-party bodily injury, property damage, and completed-operations liability for solar contractors — including roof damage, electrical incidents, and post-installation claims.",
    keywords: ["solar contractor general liability", "solar installation GL", "rooftop solar liability"],
  },
  {
    slug: "workers-compensation",
    icon: "HardHat",
    title: "Workers' Compensation",
    description:
      "Injury coverage for solar installation crews — rooftop falls, electrical burns, and heat-related incidents classified correctly for solar labor class codes.",
    keywords: ["solar contractor workers comp", "rooftop solar workers compensation", "solar installation injury coverage"],
  },
  {
    slug: "installation-floater",
    icon: "Zap",
    title: "Solar Installation Floater",
    description:
      "Covers solar panels, inverters, racking, and equipment against theft, damage, and breakage while in transit, in storage, or during installation before the system is energized.",
    keywords: ["solar panel installation floater", "solar equipment floater", "inland marine solar"],
  },
  {
    slug: "commercial-auto",
    icon: "Truck",
    title: "Commercial Auto Insurance",
    description:
      "Coverage for the trucks, vans, and panel-hauling vehicles solar contractors operate on public roads — including hired and non-owned auto for crew vehicles.",
    keywords: ["solar contractor commercial auto", "solar installation truck insurance"],
  },
  {
    slug: "professional-liability",
    icon: "Briefcase",
    title: "Professional Liability (E&O)",
    description:
      "Errors & omissions coverage for solar system design failures, production shortfall claims, grid-tie specification errors, and energy output disputes.",
    keywords: ["solar contractor professional liability", "solar E&O insurance", "solar design errors omissions"],
  },
  {
    slug: "umbrella",
    icon: "Umbrella",
    title: "Commercial Umbrella Insurance",
    description:
      "Excess liability above your GL, commercial auto, and employers' liability — for solar contractors whose project contracts require higher combined liability limits.",
    keywords: ["solar contractor umbrella insurance", "solar installation umbrella liability"],
  },
  {
    slug: "tools-equipment",
    icon: "Wrench",
    title: "Tools & Equipment Insurance",
    description:
      "Coverage for portable tools, installation equipment, conduit benders, and specialized solar testing instruments against theft and damage on job sites.",
    keywords: ["solar contractor tools equipment insurance", "solar installation equipment coverage"],
  },
  {
    slug: "bonds",
    icon: "FileSignature",
    title: "Contractor Bonds & Surety",
    description:
      "Contractor license bonds, performance bonds, payment bonds, and maintenance bonds for solar contractors required by utilities, municipalities, and project owners.",
    keywords: ["solar contractor bond", "solar license bond", "solar contractor surety bond"],
  },
] as const;

/* ============================================================
   LOCATIONS
   ============================================================ */
export const LOCATIONS = [
  { slug: "california", name: "California", region: "Los Angeles · San Francisco · San Diego", blurb: "Contractors Choice Agency writes solar contractor insurance for California solar installers — the largest solar market in the country, with strict contractor licensing requirements and high rooftop and ground-mount exposure." },
  { slug: "texas", name: "Texas", region: "Houston · Dallas · Austin · San Antonio", blurb: "Solar growth in Texas is rapid, with large commercial and utility-scale projects driving demand for GL, workers' comp, and installation floater coverage for solar contractors across the state." },
  { slug: "florida", name: "Florida", region: "Miami · Orlando · Tampa · Jacksonville", blurb: "Florida solar contractors work in a hurricane-exposed environment with unique wind-load certification and post-storm installation liability concerns that require specialty solar contractor coverage." },
  { slug: "arizona", name: "Arizona", region: "Phoenix · Tucson · Scottsdale", blurb: "Arizona's solar market is one of the most mature in the country — rooftop residential, commercial flat-roof, and carport canopy installations require coordinated GL, installation floater, and E&O programs." },
  { slug: "new-jersey", name: "New Jersey", region: "Newark · Trenton · Jersey City", blurb: "New Jersey is a dense residential solar market with specific utility interconnection and contractor licensing requirements — we insure solar contractors throughout the Northeast." },
  { slug: "colorado", name: "Colorado", region: "Denver · Colorado Springs · Boulder", blurb: "Colorado solar contractors work in a growing renewable market with mountain terrain, hail exposure, and commercial project scales that require purpose-built solar contractor insurance programs." },
  { slug: "new-york", name: "New York", region: "New York City · Buffalo · Albany", blurb: "New York solar contractors serve a high-value residential and commercial market with specific building code and electrical code requirements that shape GL and E&O exposure." },
  { slug: "national", name: "National", region: "All 50 States", blurb: "Contractors Choice Agency is licensed in all 50 states. Whether your solar installation firm operates in one state or across multiple markets, we write solar contractor insurance programs nationwide." },
] as const;

/* ============================================================
   STATS
   ============================================================ */
export const STATS = [
  { value: 600, suffix: "+", label: "Solar contractors and installation firms insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years placing contractor insurance programs", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround for solar contractors", prefix: "" },
  { value: 50, suffix: "", label: "States licensed and writing", prefix: "" },
] as const;

/* ============================================================
   TESTIMONIALS
   ============================================================ */
export const TESTIMONIALS = [
  {
    quote: "We had two claims in one year — a roof penetration leak post-install and a panel theft from a job site. Both were handled without drama. The installation floater and GL worked together exactly as they should. I won't use any other agency.",
    name: "Tyler B.",
    role: "Owner, Solar Installation Company",
    location: "Phoenix, AZ",
  },
  {
    quote: "A homeowner claimed their system produced 30% less than the projected output and sued us for the difference. Our E&O policy covered the defense and the settlement. Without professional liability, that would have been a company-ending claim.",
    name: "Rachel M.",
    role: "Director, Residential Solar Firm",
    location: "San Diego, CA",
  },
  {
    quote: "We do commercial rooftop and carport canopy solar. Our old agency didn't know what an installation floater was. CCA put together a program that actually covers how we work — including equipment in transit and during commissioning.",
    name: "James P.",
    role: "Commercial Solar Contractor",
    location: "Austin, TX",
  },
] as const;

/* ============================================================
   CREDENTIALS (for TrustBar, About, etc.)
   ============================================================ */
export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Solar contractor specialists", icon: "Zap" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;
