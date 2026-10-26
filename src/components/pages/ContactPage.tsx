import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please provide a subject.';
    if (!formData.message.trim() || formData.message.length < 15) {
      newErrors.message = 'Message must be at least 15 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate validated submission state for static frontend
    setSubmittedStatus(true);
  };

  const faqs = [
    {
      q: 'Are all English lessons and quizzes completely free?',
      a: 'Yes! Every lesson, flashcard, sentence correction test, and quiz on Fatima ki Academy is 100% free with no subscription or login needed.'
    },
    {
      q: 'Can school and college students use this website to prepare for exams?',
      a: 'Absolutely. Our curriculum directly covers essential grammar rules tested in board examinations, college entrance tests, and ESL certification tests.'
    },
    {
      q: 'How frequently is new educational content published?',
      a: 'We add new grammar topics, vocabulary items, and educational blog articles on a regular weekly schedule.'
    },
    {
      q: 'How do I suggest a new grammar topic or report a typo?',
      a: 'Please use the contact form above or email us directly at our official inbox. We review every learner suggestion carefully.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#071B40] via-[#123B83] to-[#071B40] text-white rounded-3xl p-6 sm:p-12 shadow-lg relative overflow-hidden text-center sm:text-left">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <Mail className="w-4 h-4" />
            <span>Learner Support & Feedback</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Fatima ki Academy
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Have questions about a grammar lesson, suggestions for new topics, or feedback? Send us a message below.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-[#071B40]">
              Send a Message
            </h2>
            <p className="text-xs text-slate-500">
              Fill in the form below and we will get back to you as soon as possible.
            </p>
          </div>

          {submittedStatus ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3 animate-in fade-in">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Message Received!</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Thank you for reaching out, <strong>{formData.name}</strong>. Your validated message has been logged.
              </p>
              <div className="p-3 bg-white rounded-xl border border-emerald-100 text-[11px] text-slate-600">
                <strong>Static Hosting Notice:</strong> For direct personal correspondence or instant email routing on Cloudflare Pages, you can also email us directly at{' '}
                <a
                  href="mailto:contact@fatimakiiacademy.org"
                  className="text-[#123B83] font-mono font-bold underline"
                >
                  contact@fatimakiiacademy.org
                </a>.
              </div>
              <button
                onClick={() => {
                  setSubmittedStatus(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="text-xs text-[#123B83] font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs" noValidate>
              {/* Name */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ayesha Khan"
                  className={`w-full p-3 border rounded-xl bg-slate-50 focus:bg-white outline-none transition-colors ${
                    errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#123B83]'
                  }`}
                />
                {errors.name && <p className="text-rose-600 text-[11px]">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. ayesha@example.com"
                  className={`w-full p-3 border rounded-xl bg-slate-50 focus:bg-white outline-none transition-colors ${
                    errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#123B83]'
                  }`}
                />
                {errors.email && <p className="text-rose-600 text-[11px]">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">
                  Subject / Topic <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Suggestion for Tenses practice"
                  className={`w-full p-3 border rounded-xl bg-slate-50 focus:bg-white outline-none transition-colors ${
                    errors.subject ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#123B83]'
                  }`}
                />
                {errors.subject && <p className="text-rose-600 text-[11px]">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your feedback, question, or message here..."
                  className={`w-full p-3 border rounded-xl bg-slate-50 focus:bg-white outline-none transition-colors resize-y ${
                    errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#123B83]'
                  }`}
                />
                {errors.message && <p className="text-rose-600 text-[11px]">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#123B83] hover:bg-[#071B40] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#D4A52C]" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info & Notice */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-3">
            <h3 className="font-bold text-[#071B40] text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#123B83]" />
              <span>Direct Official Email</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You can contact the editorial team directly at our official inbox:
            </p>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 font-mono text-xs text-[#123B83] font-bold break-all">
              contact@fatimakiiacademy.org
            </div>
            <p className="text-[11px] text-slate-400">
              Replace this placeholder with your production email address anytime in the repository configuration.
            </p>
          </div>

          {/* Static Site Integration Note */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 text-xs text-slate-700 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Webmaster Form Integration Guide</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              When hosting statically on Cloudflare Pages, you can connect this form in 2 minutes using free services like <strong>Formspree</strong>, <strong>EmailJS</strong>, or <strong>Cloudflare Worker Email Routing</strong> by simply setting the form <code className="bg-white px-1 py-0.5 rounded font-mono">action="https://formspree.io/f/YOUR_ID"</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#071B40] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#123B83]" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-xs text-slate-500">
            Answers to common questions about Fatima ki Academy and our free English resources.
          </p>
        </div>

        <div className="space-y-3 divide-y divide-slate-100">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="pt-3">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-[#071B40] hover:text-[#123B83] transition-colors py-2"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#D4A52C] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <p className="text-xs text-slate-600 leading-relaxed pt-1 pb-2">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
