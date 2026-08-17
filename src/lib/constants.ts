import type { NavLink, Feature, PricingTier, FAQ, UseCase, Resource, FooterColumn } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const FEATURES: Feature[] = [
  {
    icon: "BarChart3",
    title: "Real-Time Inventory Tracking",
    description:
      "Monitor stock levels for every SKU across all locations. See quantity on hand, committed stock, and reorder points updated live as sales happen.",
  },
  {
    icon: "FileText",
    title: "Downloadable Reports",
    description:
      "Generate detailed reports on cost of goods sold, sell-through rates, and aging inventory. Export to CSV or PDF for your accountant.",
  },
  {
    icon: "Bell",
    title: "Low Stock Alerts",
    description:
      "Get automatic daily alerts when products fall below your custom reorder thresholds. Never run out of critical medications again.",
  },
  {
    icon: "Zap",
    title: "Set Up in Minutes",
    description:
      "Import your entire product catalog via CSV. Scan barcodes to add items. Go live the same day you sign up.",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: 0,
    priceNote: "/mo",
    description: "For single pharmacies getting started",
    features: [
      "Up to 250 SKUs",
      "Basic POS system",
      "Barcode scanning",
      "Daily stock alerts",
      "Email support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: 49,
    priceNote: "/mo per location",
    description: "For growing pharmacies needing more power",
    features: [
      "Unlimited SKUs",
      "Advanced reporting (COGS, sell-through)",
      "Purchase order management",
      "CSV import/export",
      "Multi-device sync",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 149,
    priceNote: "/mo per location",
    description: "For multi-location pharmacy groups",
    features: [
      "Everything in Professional",
      "Multi-location management",
      "Stock transfers between locations",
      "Vendor management",
      "Advanced analytics dashboard",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What is pharmacy inventory management software?",
    answer:
      "Pharmacy inventory management software helps you track, organize, and manage your pharmacy's product catalog. PharmSync monitors stock levels in real time, sends low-stock alerts, generates purchase orders, and provides detailed reports — all tailored to the unique needs of pharmacies handling prescription and OTC medications.",
  },
  {
    question: "How much does PharmSync cost?",
    answer:
      "PharmSync starts free for pharmacies with up to 250 SKUs. The Professional plan is $49/month per location and includes unlimited SKUs, advanced reporting, and purchase order management. The Enterprise plan at $149/month per location adds multi-location management, vendor tools, and a dedicated account manager.",
  },
  {
    question: "Can PharmSync automatically reorder stock?",
    answer:
      "Yes. Set custom reorder points for any product. When stock falls below the threshold, PharmSync generates a purchase order draft that you can review and send to your supplier with one click.",
  },
  {
    question: "Does PharmSync support barcode scanning?",
    answer:
      "Absolutely. PharmSync works with standard USB and Bluetooth barcode scanners. Scan items during checkout, receiving, and physical inventory counts. The system recognizes UPC, EAN, NDC, and custom barcode formats.",
  },
  {
    question: "Can I import my existing product catalog?",
    answer:
      "Yes. Upload a CSV file with your product names, SKUs, quantities, costs, and prices. PharmSync maps the columns automatically and imports your full catalog in minutes.",
  },
];

export const USE_CASES: UseCase[] = [
  {
    title: "Independent Pharmacy",
    description: "Streamline daily operations with automated stock tracking and smart reorder points.",
    icon: "Pill",
    color: "bg-blue-500",
  },
  {
    title: "Compounding Pharmacy",
    description: "Track raw ingredients, manage batch records, and monitor expiration dates with precision.",
    icon: "FlaskConical",
    color: "bg-purple-500",
  },
  {
    title: "Hospital Outpatient",
    description: "Handle high-volume dispensing with real-time inventory sync across departments.",
    icon: "Building2",
    color: "bg-emerald-500",
  },
  {
    title: "Veterinary Pharmacy",
    description: "Manage specialized veterinary medications and supplements with custom categories.",
    icon: "Heart",
    color: "bg-rose-500",
  },
  {
    title: "Specialty Pharmacy",
    description: "Track high-cost specialty medications with advanced lot tracking and chain of custody.",
    icon: "Microscope",
    color: "bg-amber-500",
  },
  {
    title: "Multi-Location Chain",
    description: "Centralized inventory visibility with seamless stock transfers between locations.",
    icon: "MapPin",
    color: "bg-indigo-500",
  },
];

export const RESOURCES: Resource[] = [
  {
    title: "The Complete Guide to Pharmacy Inventory Management",
    type: "Guide",
    readTime: "12 min read",
    href: "#",
  },
  {
    title: "How to Set Up Barcode Scanning for Your Pharmacy",
    type: "Tutorial",
    readTime: "8 min read",
    href: "#",
  },
  {
    title: "PharmSync vs. Traditional Pharmacy Systems",
    type: "Comparison",
    readTime: "6 min read",
    href: "#",
  },
];

export const ECOSYSTEM_BULLETS = [
  "Process sales and returns with built-in POS",
  "Barcode scanning for rapid checkout and receiving",
  "Automatic purchase order generation from reorder points",
  "Multi-location stock transfers and visibility",
  "CSV import/export for seamless data migration",
  "Real-time sync across all connected devices",
];

export const LOGO_PARTNERS = [
  "QuickBooks",
  "Xero",
  "Medicare",
  "Shopify",
  "WooCommerce",
  "DEA CSOS",
  "Stripe",
  "FedEx",
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "POS System", href: "#" },
      { label: "Inventory", href: "#features" },
      { label: "Reporting", href: "#" },
      { label: "Barcode Scanning", href: "#" },
      { label: "Purchase Orders", href: "#" },
    ],
  },
  {
    heading: "Pharmacy Types",
    links: [
      { label: "Independent", href: "#" },
      { label: "Compounding", href: "#" },
      { label: "Hospital", href: "#" },
      { label: "Veterinary", href: "#" },
      { label: "Specialty", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "System Status", href: "#" },
      { label: "What's New", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
];
