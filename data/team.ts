export type TeamMember = {
  name: string;
  role: string;
  auraTitle: string;
  auraName: string;
  auraHex: string;
  auraRgb: string;
  image: string;
  description: string;
  skills: string[];
};

export const team: TeamMember[] = [
  {
    name: "AuraX",
    role: "Researcher & Vibe Coding Developer",
    auraTitle: "The Crimson Architect",
    auraName: "Crimson Red",
    auraHex: "#ff284f",
    auraRgb: "255 40 79",
    image: "/team/render/aurax.webp",
    description: "Turns ideas into digital systems, experiments, and automation.",
    skills: ["Research", "Automation", "Vibe Coding", "Systems"],
  },
  {
    name: "MADD",
    role: "Project Manager & Marketing Lead",
    auraTitle: "The Strategy Flame",
    auraName: "Gold / Orange",
    auraHex: "#ff9d28",
    auraRgb: "255 157 40",
    image: "/team/render/madd.webp",
    description: "Controls project direction, strategy, campaigns, and execution.",
    skills: ["Marketing", "Strategy", "Campaigns", "Leadership"],
  },
  {
    name: "Raz",
    role: "Project Manager & Seller",
    auraTitle: "The Deal Hunter",
    auraName: "Emerald Green",
    auraHex: "#22f29a",
    auraRgb: "34 242 154",
    image: "/team/render/raz.webp",
    description: "Handles opportunities, negotiations, and sales energy.",
    skills: ["Sales", "Clients", "Negotiation", "Business"],
  },
  {
    name: "re66ds",
    role: "Visual Manager / Lighting / Editing / Filmmaking",
    auraTitle: "The Light Shaper",
    auraName: "Electric Blue",
    auraHex: "#33a3ff",
    auraRgb: "51 163 255",
    image: "/team/render/re66ds.webp",
    description: "The visual brain behind cinematic aesthetics and editing.",
    skills: ["Editing", "Lighting", "Visuals", "Film"],
  },
  {
    name: "Ayman",
    role: "Filmmaker",
    auraTitle: "The Frame Master",
    auraName: "Purple / Violet",
    auraHex: "#a95dff",
    auraRgb: "169 93 255",
    image: "/team/render/ayman.webp",
    description: "Captures emotion, movement, and storytelling through film.",
    skills: ["Film", "Storytelling", "Camera", "Direction"],
  },
  {
    name: "Nour",
    role: "Brand Connector & Creator Relations",
    auraTitle: "The Young Link",
    auraName: "Cyan",
    auraHex: "#25f4ff",
    auraRgb: "37 244 255",
    image: "/team/render/nour.webp",
    description: "Connects creators, brands, and opportunities.",
    skills: ["Networking", "Brands", "Creators", "Relations"],
  },
  {
    name: "MALALI",
    role: "Social Media Manager",
    auraTitle: "The Social Pulse",
    auraName: "Magenta Pink",
    auraHex: "#ff3ccf",
    auraRgb: "255 60 207",
    image: "/team/render/malali.webp",
    description: "Controls social energy, content, and audience engagement.",
    skills: ["Social Media", "Content", "Growth", "Audience"],
  },
];
