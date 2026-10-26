import React from 'react';
import { Scale, FileCheck, AlertCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#071B40] via-[#123B83] to-[#071B40] text-white rounded-3xl p-6 sm:p-12 shadow-lg relative overflow-hidden text-center sm:text-left">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <Scale className="w-4 h-4" />
            <span>Terms of Use</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Last Updated: October 26, 2026. Please read these terms carefully before accessing or using Fatima ki Academy educational resources.
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40] flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#123B83]" />
            <span>1. Acceptance of Terms</span>
          </h2>
          <p>
            By accessing and using <strong>Fatima ki Academy</strong>, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40]">
            2. Intellectual Property and Educational Use
          </h2>
          <p>
            All original lessons, articles, quiz questions, explanations, graphics, and official branding logos featured on Fatima ki Academy are the property of Fatima ki Academy and protected by copyright and intellectual property laws.
          </p>
          <p>
            • <strong>Permitted Use:</strong> Students, educators, and language learners are granted a personal, non-exclusive, revocable license to read, study, and print lessons for individual personal study or non-commercial classroom instruction.
          </p>
          <p>
            • <strong>Prohibited Use:</strong> You may not scrape, republish, resell, or duplicate substantial portions of our educational curriculum on other websites or commercial platforms without prior written authorization.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40]">
            3. Accuracy of Educational Content & Disclaimer
          </h2>
          <p>
            Fatima ki Academy strives to ensure that all grammatical rules, vocabulary translations, and phonetic transcriptions are accurate, modern, and reliable. However, the site is provided on an "as is" and "as available" basis.
          </p>
          <p>
            We do not warrant that all content is entirely error-free or uninterrupted. Users are encouraged to report any typographical errors or linguistic suggestions via our official contact channels.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40]">
            4. External Links and Third-Party Resources
          </h2>
          <p>
            Our website may occasionally contain links to external third-party resources or search engines for research convenience. Fatima ki Academy does not control or endorse the content or practices of third-party websites.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40]">
            5. Modifications to Terms
          </h2>
          <p>
            Fatima ki Academy reserves the right to revise these terms of service at any time without advance notice. By continuing to use the website after revisions are posted, you agree to be bound by the then-current version of these terms.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40]">
            6. Inquiries
          </h2>
          <p>
            For any legal questions regarding these terms, contact us at{' '}
            <span className="font-mono text-[#123B83] font-bold">contact@fatimakiiacademy.org</span>.
          </p>
        </section>
      </div>
    </div>
  );
};
