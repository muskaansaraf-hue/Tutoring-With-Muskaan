export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio?: string;
  team: "leadership" | "data-tech" | "research" | "outreach";
  role: "co-founder" | "member";
  photo?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "founder-1",
    name: "Muskaan Saraf",
    title: "Co-Founder",
    bio: "Muskaan is passionate about empowering students to explore STEM careers through hands-on projects and professional mentorship. She co-founded STEM Pathways to create accessible pathways for high school students to gain real-world experience in science and technology.",
    team: "leadership",
    role: "co-founder",
  },
  {
    id: "founder-2",
    name: "Ritika Bamzai",
    title: "Co-Founder",
    bio: "Ritika is dedicated to making STEM education equitable and impactful for all students. She co-founded STEM Pathways to help young people build portfolio-ready skills, connect with working professionals, and discover their career potential.",
    team: "leadership",
    role: "co-founder",
  },
  {
    id: "member-1",
    name: "Rada Alvais",
    title: "Research & Scientific Writing",
    team: "research",
    role: "member",
  },
  {
    id: "member-2",
    name: "Sanjana Manda",
    title: "Research & Scientific Writing",
    team: "research",
    role: "member",
  },
  {
    id: "member-3",
    name: "Olivia Liu",
    title: "Research & Scientific Writing",
    team: "research",
    role: "member",
  },
  {
    id: "member-4",
    name: "Alissa Nagata",
    title: "Public Outreach & Education",
    team: "outreach",
    role: "member",
  },
  {
    id: "member-5",
    name: "Gabi Campos",
    title: "Public Outreach & Education",
    team: "outreach",
    role: "member",
  },
  {
    id: "member-6",
    name: "Grace Lee",
    title: "Public Outreach & Education",
    team: "outreach",
    role: "member",
  },
];
