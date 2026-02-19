import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/config";
import {
  Code2,
  BookOpen,
  Users,
  ArrowRight,
  ClipboardList,
  Compass,
  Hammer,
  Trophy,
  Play,
  ExternalLink,
} from "lucide-react";
import { ImpactChart } from "@/components/ImpactChart";
import { projects } from "@/content/projects";
import { recordings } from "@/content/recordings";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredSessions = recordings.slice(0, 3);

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0wIDM2YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-100 max-w-2xl">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/teams"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Explore Teams
                <Compass size={18} />
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors border border-primary-400"
              >
                Join Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We give high school students the tools, mentorship, and hands-on
              experience to explore STEM careers with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Projects",
                desc: "Build real-world coding, data science, and AI projects that strengthen your portfolio and develop technical skills.",
              },
              {
                icon: BookOpen,
                title: "Research Papers",
                desc: "Learn to read scientific literature and write structured research papers on cutting-edge STEM topics.",
              },
              {
                icon: Users,
                title: "Professional Networking",
                desc: "Connect directly with working engineers, doctors, scientists, and tech professionals through structured sessions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Four simple steps to launch your STEM journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ClipboardList,
                step: "01",
                title: "Apply",
                desc: "Fill out a short application and tell us about your interests.",
              },
              {
                icon: Compass,
                step: "02",
                title: "Choose Track",
                desc: "Select from Data & Tech, Research, or Professional Outreach.",
              },
              {
                icon: Hammer,
                step: "03",
                title: "Build Projects",
                desc: "Work with your team on real projects with mentorship and structure.",
              },
              {
                icon: Trophy,
                step: "04",
                title: "Showcase",
                desc: "Present your work, publish to GitHub, and build your portfolio.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-white" size={28} />
                </div>
                <div className="text-sm font-bold text-primary-600 mb-2">
                  STEP {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Featured Projects
              </h2>
              <p className="mt-2 text-slate-600">
                Real work by real students.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden sm:flex items-center gap-1 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <Code2 className="text-primary-300" size={48} />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full mb-3 capitalize">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-primary-600 font-medium"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Featured Professional Sessions
              </h2>
              <p className="mt-2 text-slate-600">
                Learn directly from working STEM professionals.
              </p>
            </div>
            <Link
              to="/recordings"
              className="hidden sm:flex items-center gap-1 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                  <Play className="text-white/60" size={48} />
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {session.duration}
                  </span>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-accent-50 text-accent-700 text-xs font-medium rounded-full mb-3 capitalize">
                    {session.field}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {session.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {session.speaker} &middot; {session.speakerTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/recordings"
              className="inline-flex items-center gap-1 text-primary-600 font-medium"
            >
              View All Recordings <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Impact</h2>
            <p className="mt-4 text-primary-200">
              Growing every semester with passionate student leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {[
              { value: "150+", label: "Students Served" },
              { value: "30+", label: "Projects Completed" },
              { value: "25+", label: "Sessions Hosted" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-primary-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Growth Over Time
            </h3>
            <ImpactChart />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Ready to Build Your Future?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join a community of ambitious students working on real STEM projects,
            writing research papers, and connecting with professionals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link
              to="/teams"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-primary-300 hover:text-primary-700 transition-colors"
            >
              Learn More <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
