import React from 'react';
import { Sparkles, Terminal, Award, Target, Rocket } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information & Pillars */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Our Company</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
              Who We Are
            </h2>

            {/* Company Name Subtitle */}
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {COMPANY_INFO.name}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              {COMPANY_INFO.about.description}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Practical Learning</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Hands-on technological instruction structured to bridge theory and industry application.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-3">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Digital Innovation</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Cultivating creative problem solving and forward-looking digital fluency for modern careers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Skill Development</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Curated modules covering in-demand competencies from programming to business intelligence.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Professional Growth</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Dedicated leadership and guidance supporting continuous learning and career advancement.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-xl">
              <div className="rounded-[14px] bg-slate-950 p-7 sm:p-9 text-white relative overflow-hidden">
                {/* Tech Glows */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md p-3 border border-white/20 mb-5 flex items-center justify-center">
                    <img
                      src={COMPANY_INFO.logoUrl}
                      alt="CODELYTIC Logo"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-white mb-1">
                    CODELYTIC SOFTWARE SOLUTIONS
                  </h3>
                  <p className="text-xs font-medium text-cyan-400 mb-6">
                    Digital Excellence & Technical Education
                  </p>

                  <div className="w-full space-y-3.5 text-left border-t border-slate-800 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Dedicated Focus</div>
                        <div className="text-xs text-slate-400">Bridging the gap between conceptual understanding and real-world tools.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Modern Digital Curriculum</div>
                        <div className="text-xs text-slate-400">From databases & coding to AI prompt engineering & analytics.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Supportive Mentorship</div>
                        <div className="text-xs text-slate-400">Guided by an experienced, passionate, and collaborative leadership team.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
