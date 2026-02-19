import { Link } from "react-router-dom";
import {
  Code2,
  BookOpen,
  Megaphone,
  Database,
  BarChart3,
  Brain,
  Github,
  FileText,
  Search,
  PenTool,
  Presentation,
  Users,
  MessageSquare,
  Globe,
  Camera,
  Share2,
  ArrowRight,
} from "lucide-react";

interface TeamSectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  mission: string;
  whatMembersDo: { icon: React.ReactNode; text: string }[];
  opportunities: string[];
  ctaText: string;
  ctaHref: string;
  gradient: string;
  iconBg: string;
}

function TeamSection({
  id,
  icon,
  title,
  mission,
  whatMembersDo,
  opportunities,
  ctaText,
  ctaHref,
  gradient,
  iconBg,
}: TeamSectionProps) {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl ${gradient} p-8 md:p-12`}>
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center`}
            >
              {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {title}
            </h2>
          </div>

          <p className="text-lg text-slate-700 max-w-3xl mb-10">{mission}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                What Members Do
              </h3>
              <div className="space-y-4">
                {whatMembersDo.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/80 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Opportunities
              </h3>
              <div className="space-y-3">
                {opportunities.map((opp) => (
                  <div key={opp} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">{opp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              {ctaText} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TeamsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Teams & Opportunities
          </h1>
          <p className="mt-6 text-lg text-primary-200 max-w-2xl">
            Choose the track that matches your interests and start building
            real-world STEM experience today.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#data-tech"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-colors"
            >
              Data & Technology
            </a>
            <a
              href="#research"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-colors"
            >
              Research & Scientific Writing
            </a>
            <a
              href="#outreach"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-colors"
            >
              Public Outreach & Professional Relations
            </a>
          </div>
        </div>
      </section>

      <TeamSection
        id="data-tech"
        icon={<Code2 className="text-blue-600" size={28} />}
        title="Data & Technology Team"
        mission="Empower students to build real-world technical projects using coding, data science, and introductory AI tools."
        whatMembersDo={[
          {
            icon: <Database className="text-blue-600" size={16} />,
            text: "Work with public datasets",
          },
          {
            icon: <BarChart3 className="text-blue-600" size={16} />,
            text: "Build dashboards and visualizations",
          },
          {
            icon: <Code2 className="text-blue-600" size={16} />,
            text: "Develop small coding projects (Python, JavaScript)",
          },
          {
            icon: <Brain className="text-blue-600" size={16} />,
            text: "Create beginner AI or machine learning models",
          },
          {
            icon: <Github className="text-blue-600" size={16} />,
            text: "Publish projects to GitHub",
          },
        ]}
        opportunities={[
          "Build portfolio-ready projects",
          "Learn real coding skills",
          "Gain exposure to AI and data science",
          "Collaborate in technical teams",
        ]}
        ctaText="Join Data & Tech"
        ctaHref="/signup"
        gradient="bg-gradient-to-br from-blue-50 to-indigo-50"
        iconBg="bg-blue-100"
      />

      <TeamSection
        id="research"
        icon={<BookOpen className="text-emerald-600" size={28} />}
        title="Research & Scientific Writing Team"
        mission="Train students to read scientific literature and write structured research papers on STEM topics."
        whatMembersDo={[
          {
            icon: <Search className="text-emerald-600" size={16} />,
            text: "Learn how to read peer-reviewed research papers",
          },
          {
            icon: <PenTool className="text-emerald-600" size={16} />,
            text: "Write original research review papers",
          },
          {
            icon: <FileText className="text-emerald-600" size={16} />,
            text: "Develop structured scientific essays",
          },
          {
            icon: <BookOpen className="text-emerald-600" size={16} />,
            text: "Conduct literature reviews",
          },
          {
            icon: <Presentation className="text-emerald-600" size={16} />,
            text: "Present findings in written and oral formats",
          },
        ]}
        opportunities={[
          "Write formal research papers",
          "Build strong academic writing skills",
          "Create portfolio-ready research work",
          "Present research at internal showcases",
        ]}
        ctaText="Join Research Team"
        ctaHref="/signup"
        gradient="bg-gradient-to-br from-emerald-50 to-teal-50"
        iconBg="bg-emerald-100"
      />

      <TeamSection
        id="outreach"
        icon={<Megaphone className="text-purple-600" size={28} />}
        title="Public Outreach & Professional Relations Team"
        mission="Teach students how to communicate with and learn from real working STEM professionals."
        whatMembersDo={[
          {
            icon: <Users className="text-purple-600" size={16} />,
            text: "Reach out to professionals (engineers, doctors, data scientists, researchers)",
          },
          {
            icon: <MessageSquare className="text-purple-600" size={16} />,
            text: "Coordinate interviews and speaker sessions",
          },
          {
            icon: <Globe className="text-purple-600" size={16} />,
            text: "Learn professional networking skills",
          },
          {
            icon: <Camera className="text-purple-600" size={16} />,
            text: "Share professional stories through blog posts or recorded sessions",
          },
          {
            icon: <Share2 className="text-purple-600" size={16} />,
            text: "Manage social media and public communication",
          },
        ]}
        opportunities={[
          "Learn how to professionally network",
          "Build communication skills",
          "Interview and connect with real professionals",
          "Publish professional spotlight features",
        ]}
        ctaText="Join Outreach Team"
        ctaHref="/signup"
        gradient="bg-gradient-to-br from-purple-50 to-fuchsia-50"
        iconBg="bg-purple-100"
      />
    </>
  );
}
