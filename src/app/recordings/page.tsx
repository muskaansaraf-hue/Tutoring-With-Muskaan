"use client";

import { useState } from "react";
import { Play, Clock, Calendar, User } from "lucide-react";
import { recordings, type Recording } from "@/content/recordings";

const fieldFilters = [
  { value: "all", label: "All Fields" },
  { value: "medicine", label: "Medicine" },
  { value: "engineering", label: "Engineering" },
  { value: "tech", label: "Tech" },
  { value: "research", label: "Research" },
];

function RecordingCard({ recording }: { recording: Recording }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative cursor-pointer">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <Play className="text-white ml-1" size={28} />
        </div>
        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {recording.duration}
        </span>
        <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs px-3 py-1 rounded-full capitalize font-medium">
          {recording.field}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {recording.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
          <User size={14} />
          <span>
            {recording.speaker} &middot; {recording.speakerTitle}
          </span>
        </div>
        <p className="text-sm text-slate-600 mb-4">{recording.description}</p>

        <div className="border-t border-slate-100 pt-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            Key Takeaways
          </h4>
          <ul className="space-y-1">
            {recording.takeaways.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 mt-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {recording.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {recording.duration}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function RecordingsPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? recordings
      : recordings.filter((r) => r.field === filter);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Recordings</h1>
          <p className="mt-6 text-lg text-primary-200 max-w-2xl">
            Watch recorded sessions with working STEM professionals. Learn about
            career paths, daily work, and advice straight from the source.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {fieldFilters.map((f) => (
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
            {filtered.map((recording) => (
              <RecordingCard key={recording.id} recording={recording} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-16">
              No recordings found for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
