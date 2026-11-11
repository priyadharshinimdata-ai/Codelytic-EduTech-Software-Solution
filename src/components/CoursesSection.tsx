import React, { useState } from 'react';
import {
  Table,
  Database,
  Code2,
  BarChart3,
  Layout,
  Coffee,
  Sparkles,
  Megaphone,
  Palette,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { COURSES, Course } from '../data/companyData';
import { CourseModal } from './CourseModal';

export const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Table':
        return <Table className="w-6 h-6 text-emerald-600" />;
      case 'Database':
        return <Database className="w-6 h-6 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-amber-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-600" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-orange-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-rose-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-violet-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-blue-600" />;
    }
  };

  const getIconContainerStyle = (index: number) => {
    const styles = [
      'bg-emerald-50 border-emerald-100',
      'bg-blue-50 border-blue-100',
      'bg-indigo-50 border-indigo-100',
      'bg-amber-50 border-amber-100',
      'bg-cyan-50 border-cyan-100',
      'bg-orange-50 border-orange-100',
      'bg-purple-50 border-purple-100',
      'bg-rose-50 border-rose-100',
      'bg-violet-50 border-violet-100',
    ];
    return styles[index % styles.length];
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Training Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Explore Our Courses
          </h2>
          <p className="text-lg font-medium text-slate-600">
            Build Your Future With In-Demand Digital & Technical Skills.
          </p>
        </div>

        {/* 9 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => {
            return (
              <div
                key={course.id}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Subtle Hover Gradient Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-indigo-500 group-hover:to-purple-600 transition-all duration-300" />
                
                {/* Ambient Soft Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-full blur-2xl transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar: Icon and Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${getIconContainerStyle(
                        index
                      )}`}
                    >
                      {getCourseIcon(course.iconName)}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    Comprehensive Curriculum
                  </span>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-0.5 transform duration-150 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Course Details Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
};
