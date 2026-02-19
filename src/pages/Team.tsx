import { useState } from "react";
import { Linkedin, User } from "lucide-react";
import { teamMembers, type TeamMember } from "@/content/team";

const teamFilters = [
  { value: "all", label: "All Members" },
  { value: "data-tech", label: "Data & Technology" },
  { value: "research", label: "Research" },
  { value: "outreach", label: "Outreach" },
];

function LeaderCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
        <User className="text-primary-400" size={80} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
        <p className="text-primary-600 font-medium mt-1">{member.title}</p>
        {member.bio && (
          <p className="mt-4 text-slate-600 text-sm">{member.bio}</p>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            <Linkedin size={16} /> LinkedIn Profile
          </a>
        )}
      </div>
    </div>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  const teamLabels: Record<string, string> = {
    "data-tech": "Data & Tech",
    research: "Research",
    outreach: "Outreach",
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="text-primary-500" size={20} />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{member.name}</h4>
          <p className="text-sm text-slate-600">{member.title}</p>
          <span className="inline-block mt-1 px-2 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
            {teamLabels[member.team] || member.team}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [filter, setFilter] = useState("all");

  const leaders = teamMembers.filter((m) => m.role !== "member");
  const members = teamMembers.filter((m) => m.role === "member");
  const filteredMembers =
    filter === "all" ? members : members.filter((m) => m.team === filter);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Meet Our Team</h1>
          <p className="mt-6 text-lg text-primary-200 max-w-2xl">
            Led by passionate students committed to making STEM careers
            accessible for everyone.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((member) => (
              <LeaderCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Members</h2>
            <div className="flex flex-wrap gap-2">
              {teamFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    filter === f.value
                      ? "bg-primary-600 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-primary-300"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
          {filteredMembers.length === 0 && (
            <p className="text-center text-slate-500 py-12">
              No members found for this filter.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
