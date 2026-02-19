export interface Recording {
  id: string;
  title: string;
  speaker: string;
  speakerTitle: string;
  field: "medicine" | "engineering" | "tech" | "research";
  description: string;
  takeaways: string[];
  date: string;
  duration: string;
  thumbnail?: string;
}

export const recordings: Recording[] = [
  {
    id: "software-eng-google",
    title: "Building Products at Scale: Life as a Software Engineer",
    speaker: "Dr. Sarah Kim",
    speakerTitle: "Senior Software Engineer at Google",
    field: "tech",
    description:
      "Dr. Kim shares her journey from studying computer science to building products used by millions. She discusses the skills that matter most, how to break into tech, and what a typical day looks like.",
    takeaways: [
      "Soft skills are just as important as coding ability",
      "Side projects and open source are great portfolio builders",
      "The interview process values problem-solving over memorization",
    ],
    date: "2025-11-15",
    duration: "45 min",
  },
  {
    id: "er-physician",
    title: "From Pre-Med to the ER: A Physician's Journey",
    speaker: "Dr. James Rivera",
    speakerTitle: "Emergency Medicine Physician, City Hospital",
    field: "medicine",
    description:
      "Dr. Rivera walks through his path from high school biology to the emergency room. He covers medical school applications, residency, and the daily reality of emergency medicine.",
    takeaways: [
      "Start volunteering and shadowing early",
      "Research experience strengthens medical school applications",
      "Resilience and communication are core physician skills",
    ],
    date: "2025-10-22",
    duration: "50 min",
  },
  {
    id: "data-scientist-meta",
    title: "Data Science in Practice: From Numbers to Insights",
    speaker: "Angela Torres",
    speakerTitle: "Data Scientist at Meta",
    field: "tech",
    description:
      "Angela discusses how data science drives product decisions at a major tech company. She shares practical advice on learning Python, statistics, and building a data portfolio.",
    takeaways: [
      "Learn SQL and Python — they're used daily",
      "Kaggle competitions are great for building skills",
      "Communication is key — you must explain findings to non-technical teams",
    ],
    date: "2025-09-18",
    duration: "40 min",
  },
  {
    id: "mechanical-engineer",
    title: "Designing the Future: Mechanical Engineering at SpaceX",
    speaker: "Marcus Chen",
    speakerTitle: "Mechanical Engineer at SpaceX",
    field: "engineering",
    description:
      "Marcus shares the excitement and challenges of working on rocket propulsion systems. He covers his engineering education, internship experience, and what drives innovation at SpaceX.",
    takeaways: [
      "Hands-on projects matter more than GPA alone",
      "Internships are the fastest path to full-time offers",
      "Engineering is about creative problem-solving",
    ],
    date: "2025-08-10",
    duration: "55 min",
  },
  {
    id: "biomedical-researcher",
    title: "Cancer Research: A Biomedical Scientist's Perspective",
    speaker: "Dr. Priya Nair",
    speakerTitle: "Research Scientist, NIH",
    field: "research",
    description:
      "Dr. Nair discusses her work in cancer immunotherapy research at the National Institutes of Health. She explains the scientific method in practice and how students can get involved in research.",
    takeaways: [
      "Scientific research requires patience and persistence",
      "High school students can contribute through summer programs",
      "Reading papers is a skill that improves with practice",
    ],
    date: "2025-07-05",
    duration: "48 min",
  },
  {
    id: "civil-engineer",
    title: "Building Sustainable Cities: Civil Engineering in Action",
    speaker: "Robert Okafor",
    speakerTitle: "Civil Engineer, AECOM",
    field: "engineering",
    description:
      "Robert discusses sustainable infrastructure design and how civil engineers tackle urban challenges like water management, transportation, and green building standards.",
    takeaways: [
      "Sustainability is the future of civil engineering",
      "Field work and office work balance each other",
      "Professional licensure (PE) opens many doors",
    ],
    date: "2025-06-20",
    duration: "42 min",
  },
];
