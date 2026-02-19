import { useState } from "react";
import {
  Code2,
  BookOpen,
  Megaphone,
  Github,
  Users,
  Wrench,
  Target,
  ArrowRight,
} from "lucide-react";
import { projects, type Project } from "@/content/projects";

const categoryFilters = [
  { value: "all", label: "All Projects" },
  { value: "data", label: "Data Projects" },
  { value: "research", label: "Research Papers" },
  { value: "outreach", label: "Outreach Features" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  data: <Code2 size={20} />,
  research: <BookOpen size={20} />,
  outreach: <Megaphone size={20} />,
};

const categoryColors: Record<string, string> = {
  data: "bg-blue-50 text-blue-700",
  research: "bg-emerald-50 text-emerald-700",
  outreach: "bg-purple-50 text-purple-700",
};

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <div className="text-slate-300">{categoryIcons[project.category]}</div>
      </div>
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 capitalize ${categoryColors[project.category]}`}
        >
          {project.category}
        </span>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 mb-4">{project.description}</p>

        {expanded && (
          <div className="space-y-4 mb-4">
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-1">
                <Target size={14} /> Problem Statement
              </h4>
              <p className="text-sm text-slate-600">{project.problem}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-1">
                <ArrowRight size={14} /> Approach
              </h4>
              <p className="text-sm text-slate-600">{project.approach}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-1">
                <Wrench size={14} /> Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-1">
                <Users size={14} /> Contributors
              </h4>
              <p className="text-sm text-slate-600">
                {project.contributors.join(", ")}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-800 mb-1">
                Outcomes & Skills Gained
              </h4>
              <ul className="space-y-1">
                {project.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            {expanded ? "Show Less" : "View Details"}
          </button>
          {project.github && (
            <a
              href={project.github}
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
            >
              <Github size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Projects Showcase</h1>
          <p className="mt-6 text-lg text-primary-200 max-w-2xl">
            Explore the real projects built by our student members — from data
            dashboards to research papers to professional spotlights.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  filter === f.value
                    ? "bg-primary-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-16">
              No projects found for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
