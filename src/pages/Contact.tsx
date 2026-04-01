import { siteConfig } from "@/lib/config";
import { Mail, MessageSquare, Send, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-6 text-lg text-primary-200 max-w-2xl">
            Have questions, want to partner, or interested in speaking at one of
            our sessions? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {siteConfig.links.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Instagram
                    </h3>
                    <a
                      href={siteConfig.links.instagram}
                      className="text-primary-600 hover:text-primary-700 text-sm"
                    >
                      @{siteConfig.links.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-semibold text-slate-900 mb-2">
                  For Professionals
                </h3>
                <p className="text-sm text-slate-600">
                  Interested in speaking to our students or mentoring? We are
                  always looking for STEM professionals to share their
                  experiences. Reach out via email and our outreach team will
                  coordinate everything.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Send a Message
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Joining a Team</option>
                    <option>Speaking / Mentoring Opportunity</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
