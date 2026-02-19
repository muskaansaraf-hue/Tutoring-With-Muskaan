export interface Project {
  id: string;
  title: string;
  category: "data" | "research" | "outreach";
  description: string;
  problem: string;
  approach: string;
  tools: string[];
  contributors: string[];
  outcomes: string[];
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "climate-dashboard",
    title: "Climate Data Dashboard",
    category: "data",
    description:
      "An interactive dashboard visualizing global temperature trends and carbon emission data from public datasets.",
    problem:
      "Climate data is often inaccessible to the general public due to its complexity and scattered sources.",
    approach:
      "We aggregated data from NASA and NOAA public datasets, cleaned and processed it with Python, and built an interactive React dashboard with Recharts visualizations.",
    tools: ["Python", "Pandas", "React", "Recharts", "GitHub Pages"],
    contributors: ["Maya Johnson", "Noah Williams", "Liam O'Brien"],
    outcomes: [
      "Built a fully functional interactive dashboard",
      "Learned data cleaning and visualization techniques",
      "Published project to GitHub with full documentation",
    ],
    github: "#",
  },
  {
    id: "ml-plant-classifier",
    title: "ML Plant Disease Classifier",
    category: "data",
    description:
      "A machine learning model that classifies plant diseases from leaf images using transfer learning.",
    problem:
      "Early detection of plant diseases is critical for agriculture but requires expert knowledge that many farmers lack.",
    approach:
      "Using TensorFlow and a pre-trained MobileNet model, we fine-tuned a classifier on the PlantVillage dataset to identify common crop diseases from photos.",
    tools: ["Python", "TensorFlow", "Jupyter Notebook", "Google Colab"],
    contributors: ["Aiden Kim", "Maya Johnson"],
    outcomes: [
      "Achieved 92% classification accuracy",
      "Learned transfer learning and model evaluation",
      "Presented findings at internal showcase",
    ],
    github: "#",
  },
  {
    id: "antibiotic-resistance-review",
    title: "Antibiotic Resistance: A Literature Review",
    category: "research",
    description:
      "A comprehensive review paper examining the current state of antibiotic resistance research and potential solutions.",
    problem:
      "Antibiotic resistance is a growing global health threat, but comprehensive student-accessible reviews are scarce.",
    approach:
      "Conducted a systematic literature review of 30+ peer-reviewed papers, synthesized findings into a structured research paper following academic conventions.",
    tools: [
      "Google Scholar",
      "Zotero",
      "LaTeX",
      "Peer Review Framework",
    ],
    contributors: ["Ethan Park", "Sophia Martinez", "Emma Wilson"],
    outcomes: [
      "Produced a 15-page academic-quality review paper",
      "Developed critical analysis and citation skills",
      "Paper featured in internal research showcase",
    ],
  },
  {
    id: "renewable-energy-paper",
    title: "Solar Energy Adoption in Urban Areas",
    category: "research",
    description:
      "A research paper analyzing barriers and drivers of solar energy adoption in metropolitan regions.",
    problem:
      "Despite falling costs, urban solar adoption lags behind projections. Understanding why requires interdisciplinary analysis.",
    approach:
      "Reviewed economic, policy, and engineering literature to identify key factors affecting urban solar deployment, then synthesized actionable recommendations.",
    tools: ["Google Scholar", "Mendeley", "Microsoft Word"],
    contributors: ["Sophia Martinez", "Ethan Park"],
    outcomes: [
      "Identified 5 key barriers to urban solar adoption",
      "Built strong academic writing and research skills",
      "Developed policy recommendation framework",
    ],
  },
  {
    id: "engineer-spotlight",
    title: "Day in the Life: Software Engineer at Google",
    category: "outreach",
    description:
      "An in-depth interview and feature on a working software engineer, exploring their career path, daily work, and advice for students.",
    problem:
      "High school students rarely get authentic insights into what STEM careers actually look like day-to-day.",
    approach:
      "Conducted a structured interview with a Google SWE, produced a written feature article and recorded video session, shared across social media platforms.",
    tools: ["Zoom", "Google Docs", "Canva", "Social Media"],
    contributors: ["Sam Patel", "Priya Sharma", "Olivia Davis"],
    outcomes: [
      "Published feature reaching 500+ students",
      "Built professional interviewing skills",
      "Established ongoing mentorship connection",
    ],
  },
  {
    id: "doctor-interview",
    title: "Pathways to Medicine: ER Physician Interview",
    category: "outreach",
    description:
      "A professional spotlight featuring an emergency room physician discussing their journey from high school to medical practice.",
    problem:
      "Students interested in medicine often have limited understanding of the path from high school to practicing physician.",
    approach:
      "Coordinated with a local ER physician for a live Q&A session, compiled key takeaways into a blog post and social media campaign.",
    tools: ["Zoom", "WordPress", "Canva", "Instagram"],
    contributors: ["Priya Sharma", "Olivia Davis"],
    outcomes: [
      "Live session attended by 80+ students",
      "Blog post viewed 300+ times",
      "Inspired 15 students to join pre-med track discussions",
    ],
  },
];
