import React from 'react';
import { X, Check, MessageSquare, Mail, BookOpen, Layers } from 'lucide-react';
import { Course, COMPANY_INFO } from '../data/companyData';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  if (!course) return null;

  const encodedMessage = encodeURIComponent(
    `Hello CODELYTIC Team, I am interested in learning more about your course: "${course.title}". Please share details regarding the learning schedule and curriculum.`
  );
  const whatsappUrl = `https://wa.me/919943163326?text=${encodedMessage}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    COMPANY_INFO.contact.email
  )}&su=${encodeURIComponent(`Course Inquiry: ${course.title}`)}&body=${encodedMessage}`;
  const emailUrl = `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(
    `Course Inquiry: ${course.title}`
  )}&body=${encodedMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-left animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
      >
        {/* Header with gradient bar */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

        <div className="p-6 sm:p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Title */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Program Overview</span>
          </div>

          <h3 id="course-modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            {course.title}
          </h3>

          <p className="text-base text-slate-600 leading-relaxed mb-6">
            {course.description}
          </p>

          {/* Key Topics List */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-500" />
              <span>Core Learning Modules & Competencies</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.topics.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                >
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Application Highlights */}
          <div className="mb-8 p-4 rounded-xl bg-blue-50/60 border border-blue-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
              Practical Learning Focus
            </h4>
            <ul className="space-y-1.5">
              {course.practicalHighlights.map((highlight, i) => (
                <li key={i} className="text-xs sm:text-sm text-blue-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-100">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Direct inquiry with CODELYTIC education advisors
            </div>
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
              <a
                href={emailUrl}
                className="inline-flex items-center justify-center px-2.5 py-2.5 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                title="Open in default mail client (mailto)"
              >
                <span>Mailto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
