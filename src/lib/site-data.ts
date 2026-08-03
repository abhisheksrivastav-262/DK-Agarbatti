export const PHONES = ["7820908684"];
export const EMAIL = "dkagarbatti2025@gmail.com";
export const WHATSAPP = "918446239186";
export const TAGLINE = "हर घर में सुगंध, हर मन में शांति";

export type ProductGroup = {
  title: string;
  blurb: string;
  items: { name: string; desc: string }[];
};

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    title: "Fragrance & Incense",
    blurb: "Long-lasting aroma for daily worship",
    items: [
      { name: "Agarbatti", desc: "Premium hand-rolled incense sticks" },
      { name: "Dhoop Sticks", desc: "Rich, smokeless bamboo-less dhoop" },
      { name: "Dhoop Cones", desc: "Slow burning cones for aarti" },
      { name: "Sambrani Cups", desc: "Traditional benzoin resin cups" },
      { name: "Camphor", desc: "Pure kapoor for aarti and havan" },
      { name: "Kapoor Tablets", desc: "Pressed tablets, clean burn" },
      { name: "Incense Holder", desc: "Wood and brass ash catchers" },
      { name: "Camphor Stand", desc: "Brass stands for aarti kapoor" },
    ],
  },
  {
    title: "Daily Pooja Essentials",
    blurb: "Everything your mandir needs each morning",
    items: [
      { name: "Cotton Wicks (Batti)", desc: "Soft, pure cotton long wicks" },
      { name: "Pooja Oil", desc: "Clean-burning lamp oil blends" },
      { name: "Ghee", desc: "Aromatic pooja ghee for diya" },
      { name: "Cow Ghee", desc: "Pure desi cow ghee for havan" },
      { name: "Kumkum", desc: "Fine natural red kumkum" },
      { name: "Haldi", desc: "Pure turmeric for tilak" },
      { name: "Roli", desc: "Traditional roli for rituals" },
      { name: "Chandan Powder", desc: "Fragrant sandalwood powder" },
      { name: "Chandan Paste", desc: "Ready-to-apply sandal paste" },
      { name: "Gangajal", desc: "Sealed holy water bottles" },
      { name: "Moli (Kalawa)", desc: "Sacred red-yellow thread" },
      { name: "Match Box", desc: "Safety matches for the mandir" },
    ],
  },
  {
    title: "Brass, Steel & Copper",
    blurb: "Heirloom-grade metal pooja ware",
    items: [
      { name: "Pooja Thali", desc: "Engraved thali sets with bowls" },
      { name: "Bell (Ghanti)", desc: "Clear-toned brass ghanti" },
      { name: "Brass Diya", desc: "Classic brass oil lamps" },
      { name: "Steel Diya", desc: "Durable everyday steel diya" },
      { name: "Copper Kalash", desc: "Hand-finished copper kalash" },
      { name: "Brass Kalash", desc: "Ornate kalash for ceremonies" },
      { name: "Panchpatra", desc: "Achmani set with spoon" },
      { name: "Hawan Kund", desc: "Copper and iron havan kunds" },
    ],
  },
  {
    title: "Offerings & Prasad",
    blurb: "Fresh, pure and ceremony-ready",
    items: [
      { name: "Coconut", desc: "Whole shreefal for offering" },
      { name: "Flowers", desc: "Fresh daily flower packs" },
      { name: "Garlands", desc: "Marigold and rose garlands" },
      { name: "Panchmewa", desc: "Five-dry-fruit prasad mix" },
      { name: "Dry Fruits", desc: "Premium grade dry fruits" },
      { name: "Bhog Items", desc: "Sweets and bhog essentials" },
      { name: "Havan Samagri", desc: "Herbal samagri blend" },
      { name: "Pooja Cloth", desc: "Silk and cotton asan cloth" },
    ],
  },
  {
    title: "Devotional Articles",
    blurb: "For your mandir and your mala",
    items: [
      { name: "God Idols", desc: "Brass, marble and resin murti" },
      { name: "Shankh", desc: "Natural conch shells" },
      { name: "Rudraksha Mala", desc: "Certified rudraksha beads" },
      { name: "Tulsi Mala", desc: "Fragrant tulsi wood mala" },
      { name: "Temple Decoration Items", desc: "Torans, lights and jhalar" },
      { name: "Gift Packs", desc: "Premium boxed pooja gifting" },
    ],
  },
  {
    title: "Festival Pooja Kits",
    blurb: "Complete kits, nothing forgotten",
    items: [
      { name: "Festival Pooja Kits", desc: "All-in-one seasonal kits" },
      { name: "Navratri Pooja Kit", desc: "Kalash sthapna essentials" },
      { name: "Diwali Pooja Kit", desc: "Lakshmi-Ganesh pooja set" },
      { name: "Ganesh Pooja Kit", desc: "Ganpati sthapna samagri" },
      { name: "Satyanarayan Pooja Kit", desc: "Katha and havan samagri" },
      { name: "Wedding Pooja Kit", desc: "Vivah vidhi complete set" },
    ],
  },
];

export const WHY_US = [
  { title: "Premium Quality", desc: "Sourced and rolled to strict standards." },
  { title: "Affordable Prices", desc: "Wholesale rates for homes and shops." },
  { title: "Pure Products", desc: "No adulteration, no harsh chemicals." },
  { title: "Fast Delivery", desc: "Quick dispatch across India." },
  { title: "Trusted by Customers", desc: "Loved by families and temples." },
  { title: "Complete Collection", desc: "Every pooja item under one roof." },
  { title: "Best Fragrance", desc: "Long-lasting, natural aroma." },
  { title: "Customer Satisfaction", desc: "Support before and after sale." },
];

export const TESTIMONIALS = [
  {
    name: "Sunita Deshmukh",
    place: "Nashik, Maharashtra",
    text: "The agarbatti fragrance stays in the whole house for hours. We have been ordering every month for our shop.",
  },
  {
    name: "Rakesh Naik",
    place: "Panjim, Goa",
    text: "Ordered a full Satyanarayan pooja kit on WhatsApp. Everything was packed neatly and delivered on time.",
  },
  {
    name: "Pandit Mahesh Joshi",
    place: "Pune, Maharashtra",
    text: "Pure havan samagri and cow ghee. Quality is temple grade and the prices are very reasonable.",
  },
];

export const FAQS = [
  {
    q: "Do you provide wholesale?",
    a: "Yes. We supply agarbatti and complete pooja items at wholesale rates to shops, temples and distributors. Call us for a rate list.",
  },
  {
    q: "Do you deliver all over India?",
    a: "Yes, we dispatch across India through trusted courier and transport partners. Delivery usually takes 3-7 working days.",
  },
  {
    q: "Do you have festival kits?",
    a: "We offer Navratri, Diwali, Ganesh, Satyanarayan and Wedding pooja kits, plus custom kits made to your list.",
  },
  {
    q: "Can I order on WhatsApp?",
    a: "Absolutely. Send us your list on WhatsApp at 8446239186 and we will confirm the price and delivery time right away.",
  },
];
