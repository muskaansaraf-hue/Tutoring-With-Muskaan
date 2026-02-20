export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio?: string;
  team: "leadership" | "data-tech" | "research" | "outreach";
  role: "co-founder" | "head-pr" | "member";
  linkedin?: string;
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
    linkedin: "#",
  },
  {
    id: "founder-2",
    name: "Ritika Bamzai",
    title: "Co-Founder",
    bio: "Ritika is dedicated to making STEM education equitable and impactful for all students. She co-founded STEM Pathways to help young people build portfolio-ready skills, connect with working professionals, and discover their career potential.",
    team: "leadership",
    role: "co-founder",
    linkedin: "#",
  },
  {
    id: "member-1",
    name: "Maya Johnson",
    title: "Data & Technology Lead",
    team: "data-tech",
    role: "member",
  },
  {
    id: "member-2",
    name: "Ethan Park",
    title: "Research Team Lead",
    team: "research",
    role: "member",
  },
  {
    id: "member-3",
    name: "Priya Sharma",
    title: "Outreach Coordinator",
    team: "outreach",
    role: "member",
  },
  {
    id: "member-4",
    name: "Liam O'Brien",
    title: "Full-Stack Developer",
    team: "data-tech",
    role: "member",
  },
  {
    id: "member-5",
    name: "Sophia Martinez",
    title: "Research Writer",
    team: "research",
    role: "member",
  },
  {
    id: "member-6",
    name: "Noah Williams",
    title: "Data Analyst",
    team: "data-tech",
    role: "member",
  },
  {
    id: "member-7",
    name: "Olivia Davis",
    title: "Social Media Manager",
    team: "outreach",
    role: "member",
  },
  {
    id: "member-8",
    name: "Aiden Kim",
    title: "ML Engineer",
    team: "data-tech",
    role: "member",
  },
  {
    id: "member-9",
    name: "Emma Wilson",
    title: "Scientific Editor",
    team: "research",
    role: "member",
  },
];
