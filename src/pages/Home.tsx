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
} from "lucide-react";

export default function HomePage() {
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
    </>
  );
}
