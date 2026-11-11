/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { TeamSection } from './components/TeamSection';
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'vision-mission', 'team', 'courses', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-blue-900">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Our Company */}
        <AboutSection />

        {/* 3. Our Vision & Mission */}
        <VisionMissionSection />

        {/* 4. Leadership Team Section */}
        <TeamSection />

        {/* 5. Courses & Training Programs */}
        <CoursesSection />

        {/* 6. Why Choose CODELYTIC? */}
        <WhyChooseSection />

        {/* 7. Contact Us Section */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Fast WhatsApp Action */}
      <a
        href={COMPANY_INFO.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
        aria-label="Direct WhatsApp Message"
      >
        <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}
