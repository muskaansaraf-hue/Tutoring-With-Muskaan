import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/config";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            About {siteConfig.name}
          </h1>
          <p className="mt-6 text-lg text-primary-200 max-w-2xl">
            We are a student-led nonprofit dedicated to empowering high school
            students with real STEM experience — through projects, research, and
            professional connections.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  {siteConfig.name} was founded by a group of ambitious high
                  school students who recognized a critical gap: while schools
                  teach STEM subjects, they rarely give students the chance to
                  apply those skills in real-world settings.
                </p>
                <p>
                  We built this organization to change that. Through structured
                  project work, scientific research, and direct access to working
                  professionals, our members gain the experience, skills, and
                  confidence they need to pursue STEM careers.
                </p>
                <p>
                  Every project our members complete, every research paper they
                  write, and every professional they connect with brings them one
                  step closer to their goals — and makes their college
                  applications and resumes stand out.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-primary-600">SP</div>
                <p className="mt-4 text-primary-700 font-medium">
                  Student-Led. Impact-Driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide every high school student with meaningful, hands-on STEM experience — regardless of their school, background, or resources.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "A future where every student who wants to pursue a STEM career has the projects, mentors, and experience to get there.",
              },
              {
                icon: Heart,
                title: "Our Values",
                desc: "Accessibility, excellence, collaboration, and authenticity. We believe in learning by doing and growing together as a community.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "100% student-led — by students, for students",
              "Real projects that build real skills and portfolios",
              "Direct access to working STEM professionals",
              "Structured programs with mentorship and guidance",
              "Research writing training with academic rigor",
              "A supportive community of ambitious peers",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Want to Be Part of Something Bigger?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Whether you want to code, research, or connect with professionals —
            there is a place for you here.
          </p>
          <Link
            to="/signup"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Join {siteConfig.name} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
