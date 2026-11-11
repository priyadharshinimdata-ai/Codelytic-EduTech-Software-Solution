import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Code, Cpu, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Gradient & Geometric Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Radial Ambient Meshes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-cyan-400/15 via-blue-500/15 to-purple-600/15 blur-3xl opacity-70 rounded-full" />
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 via-violet-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/10 via-blue-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Supporting Text, Intro, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Subtle Brand Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/60 text-xs font-semibold text-blue-700 mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>CODELYTIC SOFTWARE SOLUTIONS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-4 text-balance">
              Empowering Innovation{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Through Technology
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 tracking-tight mb-5">
              Transforming Ideas Into Digital Excellence.
            </p>

            {/* Company Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {COMPANY_INFO.hero.intro}
            </p>

            {/* Two Premium Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('courses')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <span>Explore Our Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-white border border-slate-200 hover:border-blue-300 hover:bg-slate-50/80 rounded-xl shadow-xs hover:shadow-sm transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 w-full grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">100%</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Practical Learning</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">9+</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">In-Demand Tracks</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Dedicated</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Mentorship & Support</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Official Logo Visual Display */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer Ambient Glow Halos */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/30 via-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000" />
              
              {/* Central Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-white to-slate-50/90 border border-slate-200/90 p-8 sm:p-10 shadow-xl overflow-hidden flex flex-col items-center text-center">
                {/* Tech Geometric Accent Matrix in Card Background */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/0 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-indigo-500/0 rounded-full blur-xl pointer-events-none" />
                
                {/* Official Brand Logo - Prominently Displayed Exactly As Provided */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full" />
                  <img
                    src={COMPANY_INFO.logoUrl}
                    alt="CODELYTIC Official Brand Mark"
                    className="w-full h-full object-contain filter drop-shadow-md hover:scale-102 transition-transform duration-300"
                    loading="eager"
                  />
                </div>

                {/* Company Name Under Logo */}
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  CODELYTIC SOFTWARE SOLUTIONS
                </h2>
                <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mt-1">
                  Innovation · Excellence · Success
                </p>

                {/* Tech Badges Row */}
                <div className="mt-6 pt-5 border-t border-slate-200/80 w-full flex items-center justify-center gap-6 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-blue-600" />
                    <span>Software Excellence</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Digital Skills</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-600" />
                    <span>Future Tech</span>
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
