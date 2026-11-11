import React from 'react';
import { Users, Shield, Briefcase, Award } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/companyData';

export const TeamSection: React.FC = () => {
  // Gradients for each team member card border and avatar
  const avatarThemes = [
    {
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      avatarBg: 'bg-gradient-to-tr from-blue-600 to-indigo-700 text-white',
      accentGlow: 'bg-blue-500/10',
    },
    {
      gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      avatarBg: 'bg-gradient-to-tr from-cyan-600 to-blue-700 text-white',
      accentGlow: 'bg-cyan-500/10',
    },
    {
      gradient: 'from-indigo-600 via-purple-600 to-violet-600',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      avatarBg: 'bg-gradient-to-tr from-indigo-600 to-purple-700 text-white',
      accentGlow: 'bg-indigo-500/10',
    },
    {
      gradient: 'from-purple-600 via-violet-600 to-pink-600',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      avatarBg: 'bg-gradient-to-tr from-purple-600 to-violet-700 text-white',
      accentGlow: 'bg-purple-500/10',
    },
    {
      gradient: 'from-blue-600 via-teal-500 to-cyan-500',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
      avatarBg: 'bg-gradient-to-tr from-teal-600 to-cyan-700 text-white',
      accentGlow: 'bg-teal-500/10',
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Leadership & Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Meet Our Team
          </h2>
          <p className="text-lg font-medium text-slate-600">
            The People Behind CODELYTIC SOFTWARE SOLUTIONS
          </p>
        </div>

        {/* Exact Layout: Row 1 (2 cards), Row 2 (1 centered card), Row 3 (2 cards) */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* FIRST ROW: 1. Priyadharshini, 2. Manisankar M */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <TeamCard member={TEAM_MEMBERS[0]} theme={avatarThemes[0]} index={1} />
            <TeamCard member={TEAM_MEMBERS[1]} theme={avatarThemes[1]} index={2} />
          </div>

          {/* SECOND ROW: 3. Sujith S placed exactly at the horizontal center */}
          <div className="flex justify-center items-stretch">
            <div className="w-full md:w-[calc(50%-1rem)]">
              <TeamCard member={TEAM_MEMBERS[2]} theme={avatarThemes[2]} index={3} />
            </div>
          </div>

          {/* THIRD ROW: 4. Santhiya V, 5. Nisha P */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <TeamCard member={TEAM_MEMBERS[3]} theme={avatarThemes[3]} index={4} />
            <TeamCard member={TEAM_MEMBERS[4]} theme={avatarThemes[4]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface TeamCardProps {
  member: TeamMember;
  theme: {
    gradient: string;
    badgeBg: string;
    avatarBg: string;
    accentGlow: string;
  };
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, theme, index }) => {
  return (
    <div className="group relative rounded-2xl p-[1.5px] bg-gradient-to-b from-slate-200 via-slate-200 to-slate-200 hover:bg-gradient-to-b hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col h-full min-h-[420px]">
      <div className="rounded-[15px] bg-white p-6 sm:p-7 flex flex-col justify-between h-full relative overflow-hidden">
        {/* Ambient Hover Aura */}
        <div className={`absolute top-0 right-0 w-36 h-36 ${theme.accentGlow} rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Quiet index badge placed top-right */}
        <span className="absolute top-4 right-4 text-[11px] font-semibold text-slate-400 font-mono">
          0{index}
        </span>

        <div>
          {/* Centered Profile Image Container */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 aspect-square rounded-2xl p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-md flex items-center justify-center">
                {member.image ? (
                  <div className="w-full h-full aspect-square rounded-[12px] overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={`${member.name} – ${member.designation}`}
                      className="w-full h-full aspect-square object-cover object-center hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className={`w-full h-full aspect-square rounded-[12px] ${theme.avatarBg} flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-102 transition-transform`}>
                    {/* Executive Initial Monogram */}
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-wider">
                      {member.initials}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest opacity-80 font-medium">
                      Leader
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Centered Name */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              {member.name}
            </h3>

            {/* Slightly smaller Designation */}
            <div className="mt-1 mb-4">
              <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-semibold border ${theme.badgeBg}`}>
                {member.designation}
              </span>
            </div>
          </div>

          {/* Roles & Responsibilities Header */}
          <div className="pt-3 border-t border-slate-100">
            <div className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Briefcase className="w-3 h-3 text-blue-500" />
              <span>Roles & Responsibilities</span>
            </div>

            {/* Slightly reduced Responsibilities Description */}
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              {member.role}
            </p>
          </div>
        </div>

        {/* Footer Card Indicator */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>CODELYTIC Executive</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        </div>
      </div>
    </div>
  );
};
