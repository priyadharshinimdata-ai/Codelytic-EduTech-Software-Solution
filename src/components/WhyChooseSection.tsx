import React from 'react';
import {
  Laptop,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Compass,
  Sparkles,
} from 'lucide-react';
import { FEATURES, Feature } from '../data/companyData';

export const WhyChooseSection: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-purple-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-cyan-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  const getContainerStyle = (index: number) => {
    const styles = [
      'bg-blue-50/80 border-blue-100',
      'bg-emerald-50/80 border-emerald-100',
      'bg-amber-50/80 border-amber-100',
      'bg-indigo-50/80 border-indigo-100',
      'bg-purple-50/80 border-purple-100',
      'bg-cyan-50/80 border-cyan-100',
    ];
    return styles[index % styles.length];
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The CODELYTIC Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Choose CODELYTIC?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our holistic approach combines practical technological exposure, structured mentorship, and future-aligned skills to ensure your long-term success.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105 ${getContainerStyle(
                        index
                      )}`}
                    >
                      {getFeatureIcon(feature.iconName)}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Standard of Excellence</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
