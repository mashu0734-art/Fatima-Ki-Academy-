import React from 'react';
import { ShieldCheck, Lock, Cookie, Eye } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#071B40] via-[#123B83] to-[#071B40] text-white rounded-3xl p-6 sm:p-12 shadow-lg relative overflow-hidden text-center sm:text-left">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy Compliance</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Last Updated: October 26, 2026. Transparent details on how Fatima ki Academy handles user information, cookies, and third-party advertising networks.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40] flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#123B83]" />
            <span>1. Overview and Commitment</span>
          </h2>
          <p>
            At <strong>Fatima ki Academy</strong>, accessible from our official website, the privacy of our visitors is of paramount importance. This Privacy Policy document outlines the types of information that is collected and recorded by Fatima ki Academy and how we use it.
          </p>
          <p>
            We do not require user accounts, passwords, or personal profile registrations to access any of our free grammar lessons, quizzes, or vocabulary tools.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40] flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#123B83]" />
            <span>2. Information We Collect</span>
          </h2>
          <p>
            • <strong>Local Browser Storage:</strong> To enhance user experience, our application may store progress indicators (e.g. mastered vocabulary flashcards, quiz completion scores) locally in your browser's localStorage. This information never leaves your device and is not transmitted to our servers.
          </p>
          <p>
            • <strong>Contact Inquiries:</strong> If you contact us directly via our web form or email, we may receive your name, email address, subject line, and the contents of your message. We use this strictly to respond to your inquiry and never sell or rent your email address.
          </p>
          <p>
            • <strong>Standard Server Log Files:</strong> Like all standard web hosts (including Cloudflare Pages), anonymous technical logs may be automatically recorded, such as Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and click counts to analyze trends and administer the site.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40] flex items-center gap-2">
            <Cookie className="w-4 h-4 text-[#D4A52C]" />
            <span>3. Cookies and Google AdSense Advertising Readiness</span>
          </h2>
          <p>
            Fatima ki Academy does not currently set personal profiling cookies. However, as the website expands, we may apply to participate in advertising programs such as <strong>Google AdSense</strong>.
          </p>
          <p>
            In the event Google AdSense or other advertising partners are integrated:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites on the internet.
            </li>
            <li>
              Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noreferrer"
                className="text-[#123B83] underline"
              >
                Google Ads Settings
              </a>{' '}
              or{' '}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noreferrer"
                className="text-[#123B83] underline"
              >
                www.aboutads.info
              </a>.
            </li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40]">
            4. Children's Information
          </h2>
          <p>
            Protecting children while using the internet is especially important to us. Fatima ki Academy produces safe, family-friendly educational English learning materials. We do not knowingly collect any personally identifiable information from children under the age of 13.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40]">
            5. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy periodically. We advise you to review this page occasionally for any changes. Changes are effective immediately upon posting.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-[#071B40]">
            6. Contact Us
          </h2>
          <p>
            If you have questions or suggestions regarding our Privacy Policy, please email us at{' '}
            <span className="font-mono text-[#123B83] font-bold">contact@fatimakiiacademy.org</span>.
          </p>
        </section>
      </div>
    </div>
  );
};
