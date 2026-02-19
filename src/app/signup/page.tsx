import Link from "next/link";
import { siteConfig } from "@/lib/config";
import {
  Code2,
  BookOpen,
  Megaphone,
  Play,
  FolderGit2,
  Clock,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "Sign Up",
};

interface PathwayProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  commitment: string;
  color: string;
  formLink: string;
}

function PathwayCard({
  icon,
  title,
  description,
  commitment,
  color,
  formLink,
}: PathwayProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
      <div
        className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Clock size={14} />
        <span>{commitment}</span>
      </div>
      <a
        href={formLink}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
      >
        Apply Now <ArrowRight size={16} />
      </a>
    </div>
  );
}

const faqs = [
  {
    q: "Who can join?",
    a: "Any high school student with an interest in STEM is welcome to apply. No prior experience is required — we provide training and mentorship for all skill levels.",
  },
  {
    q: "How much time does it take?",
    a: "Most tracks require 3-5 hours per week. We understand students are busy and offer flexible schedules with asynchronous work options.",
  },
  {
    q: "Is there a cost to join?",
    a: `No. ${siteConfig.name} is completely free for all participants. We are a nonprofit organization committed to accessible STEM education.`,
  },
  {
    q: "Can I join more than one team?",
    a: "We recommend focusing on one team per semester to get the most out of the experience. You can switch teams or join additional ones in future semesters.",
  },
  {
    q: "What do I gain from participating?",
    a: "You gain portfolio-ready projects, research papers, professional networking experience, and mentorship — all of which strengthen your college applications and career readiness.",
  },
  {
    q: "How do professional sessions work?",
    a: "We host live Zoom sessions with working STEM professionals. Sessions include a presentation, Q&A, and networking time. All sessions are recorded and available in our library.",
  },
];

export default function SignUpPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Sign Up</h1>
          <p className="mt-6 text-lg text-primary-200 max-w-2xl">
            Ready to start your STEM journey? Choose a pathway below and apply
            today. No experience required.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Choose Your Pathway
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PathwayCard
              icon={<Code2 className="text-blue-600" size={24} />}
              title="Join Data & Tech"
              description="Build coding projects, data dashboards, and beginner AI models. Perfect for students interested in computer science and data."
              commitment="3-5 hours/week"
              color="bg-blue-100"
              formLink="#google-form-data-tech"
            />
            <PathwayCard
              icon={<BookOpen className="text-emerald-600" size={24} />}
              title="Join Research & Writing"
              description="Learn to read scientific papers and write structured research. Great for students interested in science, medicine, or academia."
              commitment="3-5 hours/week"
              color="bg-emerald-100"
              formLink="#google-form-research"
            />
            <PathwayCard
              icon={<Megaphone className="text-purple-600" size={24} />}
              title="Join Outreach & PR"
              description="Connect with working professionals, coordinate speaker sessions, and manage communications. Ideal for outgoing students."
              commitment="3-4 hours/week"
              color="bg-purple-100"
              formLink="#google-form-outreach"
            />
            <PathwayCard
              icon={<Play className="text-orange-600" size={24} />}
              title="Attend a Professional Session"
              description="Join a live session with a working STEM professional. Open to anyone — no team membership required."
              commitment="1 hour per session"
              color="bg-orange-100"
              formLink="#google-form-session"
            />
            <PathwayCard
              icon={<FolderGit2 className="text-rose-600" size={24} />}
              title="Submit a Project"
              description="Have a STEM project you'd like featured? Submit it for review and potential inclusion in our showcase."
              commitment="One-time submission"
              color="bg-rose-100"
              formLink="#google-form-project"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className="text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
