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
    name: "Alex Chen",
    title: "Co-Founder & Executive Director",
    bio: "Alex is a passionate advocate for STEM education who founded STEM Pathways to bridge the gap between classroom learning and real-world careers. With experience in competitive programming and data science, Alex leads the organization's strategic vision.",
    team: "leadership",
    role: "co-founder",
    linkedin: "#",
  },
  {
    id: "founder-2",
    name: "Jordan Rivera",
    title: "Co-Founder & Director of Programs",
    bio: "Jordan brings a deep commitment to making STEM accessible for all students. With a background in research and scientific writing, Jordan oversees all program tracks and ensures every member gains meaningful, portfolio-ready experience.",
    team: "leadership",
    role: "co-founder",
    linkedin: "#",
  },
  {
    id: "head-pr",
    name: "Sam Patel",
    title: "Head of Public Relations",
    bio: "Sam drives STEM Pathways' outreach and professional networking initiatives. With strong communication skills and a talent for building connections, Sam manages partnerships with working STEM professionals and leads the organization's public presence.",
    team: "leadership",
    role: "head-pr",
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
