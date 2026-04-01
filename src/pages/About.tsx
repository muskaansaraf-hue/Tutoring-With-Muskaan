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
            A student-led initiative helping students explore STEM in a
            meaningful and hands-on way.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  STEM Scholars Project is a student-led initiative created to
                  help students explore STEM in a more meaningful and hands-on
                  way. Through research, coding projects, outreach, and
                  professional connections, we aim to give students the
                  opportunity to learn, create, and grow within the STEM
                  community.
                </p>
                <p>
                  Our goal is to make STEM more accessible, collaborative, and
                  inspiring for students who want to pursue it further.
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
                desc: "To give every student the opportunity to explore STEM through real projects, research, and professional connections — regardless of background or resources.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "A future where every student interested in STEM has the hands-on experience, mentorship, and community to help them get there.",
              },
              {
                icon: Heart,
                title: "Our Values",
                desc: "Accessibility, collaboration, and authenticity. We believe in learning by doing and growing together as a community.",
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
