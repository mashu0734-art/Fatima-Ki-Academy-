import React from 'react';
import { PageId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Cloud, BookOpen, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCloudflareGuide: () => void;
  showAdPreview: boolean;
  onToggleAdPreview: () => void;
  urduMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCloudflareGuide,
  showAdPreview,
  onToggleAdPreview,
  urduMode = false
}) => {
  const t = TRANSLATIONS[urduMode ? 'ur' : 'en'];

  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071B40] text-slate-300 pt-16 pb-12 border-t-4 border-[#D4A52C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/public/assets/aistudio/file_00000000648081f49a1f69f463491d73_8e6929c2.png"
                alt="Fatima ki Academy Logo"
                className="h-16 w-auto object-contain bg-white/95 p-1 rounded-xl shadow-md"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                }}
              />
            </div>
            <p className="text-xs font-semibold tracking-wider text-[#D4A52C] uppercase">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-slate-300/90 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenCloudflareGuide}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors border border-white/15"
              >
                <Cloud className="w-3.5 h-3.5 text-[#D4A52C]" />
                <span>{t.footer.guideBtn}</span>
              </button>
            </div>
          </div>

          {/* Quick Learning Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#D4A52C]" />
              <span>{t.footer.modulesTitle}</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('grammar')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  English Grammar & 12 Tenses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('vocabulary')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  Vocabulary & Flashcards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('quizzes')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  Interactive Quizzes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('sentence-correction')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  Sentence Correction Tool
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('reading')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  Reading Comprehension
                </button>
              </li>
            </ul>
          </div>

          {/* Educational Articles */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D4A52C]" />
              <span>{t.footer.articlesTitle}</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('blog')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  How to Learn English (Beginners)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('blog')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  Present Simple Tense Explained
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('blog')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  10 Common Grammar Mistakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('blog')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  Commonly Confused Words
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('blog')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  Articles: A, An & The
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4A52C]" />
              <span>{t.footer.institutionalTitle}</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  {urduMode ? 'ہمارے بارے میں' : 'About Fatima ki Academy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  {urduMode ? 'رابطہ و رہنمائی' : 'Contact & Support'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('privacy')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  {urduMode ? 'پرائیویسی پالیسی' : 'Privacy Policy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('terms')}
                  className="hover:text-[#D4A52C] transition-colors"
                >
                  {urduMode ? 'شرائط و ضوابط' : 'Terms & Conditions'}
                </button>
              </li>
              <li className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white select-none">
                  <input
                    type="checkbox"
                    checked={showAdPreview}
                    onChange={onToggleAdPreview}
                    className="rounded border-slate-600 text-[#123B83] focus:ring-[#D4A52C] w-3.5 h-3.5"
                  />
                  <span className="text-[11px] text-slate-300">
                    Preview AdSense Slots ({showAdPreview ? 'ON' : 'OFF'})
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Fatima ki Academy. {t.footer.rightsReserved}</p>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => handleLink('privacy')}
              className="hover:underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleLink('terms')}
              className="hover:underline"
            >
              Terms of Use
            </button>
            <span>·</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Sitemap.xml
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
