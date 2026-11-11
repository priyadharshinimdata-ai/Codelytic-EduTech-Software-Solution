import React from 'react';
import { Mail, MessageSquare, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
    <footer className="bg-slate-950 text-white relative border-t border-slate-900 overflow-hidden">
      {/* Subtle Ambient Background Highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info & Official Logo (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 p-1 backdrop-blur-xs border border-white/15 flex items-center justify-center">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="CODELYTIC Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs font-semibold text-cyan-400 tracking-wider">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Dedicated to digital innovation, practical technological skills, and empowering individuals for the future of tech.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-blue-400 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500 hover:text-pink-400 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.contact.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Email via Gmail Compose"
                title="Compose Email in Gmail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollTo(e, 'home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollTo(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#vision-mission"
                  onClick={(e) => scrollTo(e, 'vision-mission')}
                  className="hover:text-white transition-colors"
                >
                  Our Vision & Mission
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => scrollTo(e, 'team')}
                  className="hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => scrollTo(e, 'courses')}
                  className="hover:text-white transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Information (4 cols on lg) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Contact Information
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp:</span>
                  <a
                    href={COMPANY_INFO.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors font-mono font-medium text-slate-200"
                  >
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Email:</span>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5">
                    <a
                      href={COMPANY_INFO.contact.emailUrl}
                      className="hover:text-blue-400 transition-colors font-mono font-medium text-slate-200 break-all"
                      title="Click to open in default mail app"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                    <a
                      href={COMPANY_INFO.contact.gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors whitespace-nowrap"
                      title="Open in Gmail Compose"
                    >
                      (Gmail Compose)
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">LinkedIn:</span>
                  <a
                    href={COMPANY_INFO.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors text-slate-300"
                  >
                    CODELYTIC Official Profile
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-pink-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Instagram:</span>
                  <a
                    href={COMPANY_INFO.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors text-slate-300"
                  >
                    @official_codelytic_solutions
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 CODELYTIC SOFTWARE SOLUTIONS. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
