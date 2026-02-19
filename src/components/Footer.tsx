import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <span className="font-bold text-lg text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-white transition-colors">
                  Teams & Opportunities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={siteConfig.links.email ? `mailto:${siteConfig.links.email}` : "#"} className="hover:text-white transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href={siteConfig.links.linkedin} className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.links.instagram} className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-xs text-slate-500 text-center max-w-2xl mx-auto">
            This organization provides educational opportunities and does not
            guarantee internships, employment, or admissions outcomes.
          </p>
          <p className="text-xs text-slate-500 text-center mt-4">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
