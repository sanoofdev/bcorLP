export type KeralaDistrict = {
  slug: string;
  name: string;
  displayName: string;
  region: string;
  focus: string;
  nearby: string[];
};

export const keralaDistricts: KeralaDistrict[] = [
  {
    slug: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    displayName: "Thiruvananthapuram (Trivandrum)",
    region: "South Kerala",
    focus: "capital-city medical stores, clinic pharmacies, and hospital counters",
    nearby: ["Kollam", "Pathanamthitta", "Alappuzha"],
  },
  {
    slug: "kollam",
    name: "Kollam",
    displayName: "Kollam",
    region: "South Kerala",
    focus: "retail chemists, wholesale medicine counters, and coastal town pharmacies",
    nearby: ["Thiruvananthapuram", "Pathanamthitta", "Alappuzha"],
  },
  {
    slug: "pathanamthitta",
    name: "Pathanamthitta",
    displayName: "Pathanamthitta",
    region: "Central Travancore",
    focus: "clinic-attached pharmacies, rural medical shops, and pilgrim-season counters",
    nearby: ["Kollam", "Kottayam", "Alappuzha"],
  },
  {
    slug: "alappuzha",
    name: "Alappuzha",
    displayName: "Alappuzha",
    region: "Central Kerala",
    focus: "medical shops, surgical stores, and high-volume retail billing counters",
    nearby: ["Kollam", "Kottayam", "Ernakulam"],
  },
  {
    slug: "kottayam",
    name: "Kottayam",
    displayName: "Kottayam",
    region: "Central Travancore",
    focus: "hospital pharmacies, town medical shops, and multi-counter stores",
    nearby: ["Pathanamthitta", "Alappuzha", "Idukki"],
  },
  {
    slug: "idukki",
    name: "Idukki",
    displayName: "Idukki",
    region: "High Range Kerala",
    focus: "offline-first pharmacy billing in hill towns and low-connectivity locations",
    nearby: ["Kottayam", "Ernakulam", "Thrissur"],
  },
  {
    slug: "ernakulam",
    name: "Ernakulam",
    displayName: "Ernakulam (Cochin)",
    region: "Central Kerala",
    focus: "busy urban pharmacies, distributor-linked counters, and branch stores",
    nearby: ["Alappuzha", "Idukki", "Thrissur"],
  },
  {
    slug: "thrissur",
    name: "Thrissur",
    displayName: "Thrissur",
    region: "Central Kerala",
    focus: "retail pharmacies, hospital-linked counters, and medicine distributors",
    nearby: ["Ernakulam", "Palakkad", "Malappuram"],
  },
  {
    slug: "palakkad",
    name: "Palakkad",
    displayName: "Palakkad",
    region: "Malabar Gateway",
    focus: "town pharmacies, border-area medical shops, and GST billing counters",
    nearby: ["Thrissur", "Malappuram", "Kozhikode"],
  },
  {
    slug: "malappuram",
    name: "Malappuram",
    displayName: "Malappuram",
    region: "Malabar",
    focus: "fast-growing medical shops, clinic pharmacies, and multi-branch stores",
    nearby: ["Palakkad", "Kozhikode", "Wayanad"],
  },
  {
    slug: "kozhikode",
    name: "Kozhikode",
    displayName: "Kozhikode (Calicut)",
    region: "North Kerala",
    focus: "Malabar retail chemists, hospital pharmacies, and distributor-heavy stores",
    nearby: ["Malappuram", "Wayanad", "Kannur"],
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    displayName: "Wayanad",
    region: "High Range Malabar",
    focus: "offline medical shop billing, batch tracking, and stock visibility",
    nearby: ["Kozhikode", "Kannur", "Malappuram"],
  },
  {
    slug: "kannur",
    name: "Kannur",
    displayName: "Kannur",
    region: "North Malabar",
    focus: "retail pharmacies, surgical stores, and high-speed counter billing",
    nearby: ["Kozhikode", "Wayanad", "Kasaragod"],
  },
  {
    slug: "kasaragod",
    name: "Kasaragod",
    displayName: "Kasaragod",
    region: "North Kerala",
    focus: "border-district pharmacies, local medical shops, and GST-ready billing",
    nearby: ["Kannur", "Kozhikode", "Wayanad"],
  },
];

export function getKeralaDistrict(slug: string) {
  return keralaDistricts.find((district) => district.slug === slug);
}
