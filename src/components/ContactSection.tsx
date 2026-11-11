import React, { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Linkedin,
  Instagram,
  Send,
  Phone,
  Sparkles,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';
import { COMPANY_INFO, COURSES } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    selectedSubject: 'General Inquiry',
    message: '',
  });

  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleSubmit = (channel: 'whatsapp' | 'gmail' | 'mailto') => {
    if (!formData.name.trim() || !formData.message.trim()) {
      setSubmittedStatus('Please enter your name and a brief message.');
      setTimeout(() => setSubmittedStatus(null), 4000);
      return;
    }

    const compiledText = `Hello CODELYTIC Team,\n\nName: ${formData.name}\nContact: ${formData.contactInfo || 'Not specified'}\nTopic: ${formData.selectedSubject}\n\nMessage:\n${formData.message}`;

    if (channel === 'whatsapp') {
      const whatsappUrl = `https://wa.me/919943163326?text=${encodeURIComponent(compiledText)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSubmittedStatus('Redirecting to WhatsApp chat...');
    } else if (channel === 'gmail') {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        COMPANY_INFO.contact.email
      )}&su=${encodeURIComponent(
        `Inquiry: ${formData.selectedSubject} - from ${formData.name}`
      )}&body=${encodeURIComponent(compiledText)}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      setSubmittedStatus('Opening Gmail Compose with recipient pre-filled...');
    } else {
      const mailtoUrl = `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(
        `Inquiry: ${formData.selectedSubject} - from ${formData.name}`
      )}&body=${encodeURIComponent(compiledText)}`;
      window.location.href = mailtoUrl;
      setSubmittedStatus('Opening your default email client...');
    }

    setTimeout(() => setSubmittedStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Let's Connect & Grow Together
          </h2>
          <p className="text-lg font-medium text-slate-600">
            Have questions or want to explore learning opportunities? Our team is ready to connect with you.
          </p>
        </div>

        {/* 4 Official Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: WhatsApp */}
          <div className="group relative rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-emerald-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">WhatsApp</h3>
              <p className="text-xs text-slate-500 mb-3">Instant direct messaging & program consultation</p>
              <div className="text-sm font-semibold text-slate-800 font-mono">
                {COMPANY_INFO.contact.phone}
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="group relative rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-blue-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Official Email</h3>
              <p className="text-xs text-slate-500 mb-3">Send official inquiries & institutional correspondence</p>
              <a
                href={COMPANY_INFO.contact.emailUrl}
                className="text-xs font-semibold text-slate-800 break-all font-mono hover:text-blue-600 transition-colors inline-block"
                title="Click to email via default client"
              >
                {COMPANY_INFO.contact.email}
              </a>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <a
                href={COMPANY_INFO.contact.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
              >
                <span>Email Us</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="text-center">
                <a
                  href={COMPANY_INFO.contact.emailUrl}
                  className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>Or use default mail app (mailto)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: LinkedIn */}
          <div className="group relative rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-sky-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">LinkedIn</h3>
              <p className="text-xs text-slate-500 mb-3">Follow corporate announcements & professional network</p>
              <div className="text-xs font-semibold text-slate-700">
                Codelytic Software Solutions
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <a
                href={COMPANY_INFO.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors shadow-2xs"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 4: Instagram */}
          <div className="group relative rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-pink-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Instagram</h3>
              <p className="text-xs text-slate-500 mb-3">Explore community moments, updates, and events</p>
              <div className="text-xs font-semibold text-slate-700">
                @official_codelytic_solutions
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <a
                href={COMPANY_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-colors shadow-2xs"
              >
                <span>Follow Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Direct Communication Form */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200/90 p-8 sm:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500">
                Draft your message here and transmit directly through WhatsApp or Email
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Full Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Contact Phone / Email
                </label>
                <input
                  type="text"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Topic / Program of Interest
              </label>
              <select
                value={formData.selectedSubject}
                onChange={(e) => setFormData({ ...formData, selectedSubject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm bg-white"
              >
                <option value="General Inquiry">General Company Inquiry</option>
                {COURSES.map((c) => (
                  <option key={c.id} value={`Course: ${c.title}`}>
                    Course: {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Your Message <span className="text-blue-600">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what you are looking to learn or discuss..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm bg-white resize-y"
              />
            </div>

            {submittedStatus && (
              <div className="p-3 rounded-lg bg-blue-50 text-blue-800 text-xs font-medium flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{submittedStatus}</span>
              </div>
            )}

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => handleSubmit('whatsapp')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => handleSubmit('gmail')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-2xs cursor-pointer active:scale-98"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us (Gmail)</span>
              </button>

              <button
                type="button"
                onClick={() => handleSubmit('mailto')}
                className="sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer active:scale-98"
                title="Send via default mail app"
              >
                <Send className="w-4 h-4 text-slate-500" />
                <span>Mail App</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
