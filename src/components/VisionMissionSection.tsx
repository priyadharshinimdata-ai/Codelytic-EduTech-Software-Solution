import React from 'react';
import { Eye, Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const VisionMissionSection: React.FC = () => {
  return (
    <section id="vision-mission" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The core philosophy shaping our commitment to digital education, technological innovation, and human potential.
          </p>
        </div>

        {/* Two Equally Sized Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Vision */}
          <div className="group relative rounded-2xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500" />
            
            {/* Ambient background glow on hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

            <div>
              {/* Header Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-md flex items-center justify-center text-white">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Eye className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase">
                    Core Direction
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {COMPANY_INFO.vision.title}
                  </h3>
                </div>
              </div>

              {/* Vision Text */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                "{COMPANY_INFO.vision.text}"
              </p>
            </div>

            {/* Supporting Key Value Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-slate-600">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                Inspire Creativity
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                Skilled Workforce
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                Digital Horizons
              </div>
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="group relative rounded-2xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600" />
            
            {/* Ambient background glow on hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/10 transition-colors" />

            <div>
              {/* Header Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 p-0.5 shadow-md flex items-center justify-center text-white">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <Target className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">
                    Everyday Action
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {COMPANY_INFO.mission.title}
                  </h3>
                </div>
              </div>

              {/* Mission Text */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                "{COMPANY_INFO.mission.text}"
              </p>
            </div>

            {/* Supporting Key Value Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-slate-600">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                Quality Education
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                Hands-on Practice
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                Continuous Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
