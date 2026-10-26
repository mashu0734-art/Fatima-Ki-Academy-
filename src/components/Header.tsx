import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Search, Menu, X, ArrowRight, GraduationCap } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  urduMode: boolean;
  onToggleUrdu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  urduMode,
  onToggleUrdu
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string; urduLabel: string }[] = [
    { id: 'home', label: 'Home', urduLabel: 'ہوم (Home)' },
    { id: 'grammar', label: 'Grammar', urduLabel: 'گرامر (Grammar)' },
    { id: 'vocabulary', label: 'Vocabulary', urduLabel: 'الفاظ (Vocabulary)' },
    { id: 'quizzes', label: 'English Quizzes', urduLabel: 'کوئز (Quizzes)' },
    { id: 'sentence-correction', label: 'Sentence Correction', urduLabel: 'جملوں کی درستی' },
    { id: 'reading', label: 'Reading Practice', urduLabel: 'ریڈنگ (Reading)' },
    { id: 'blog', label: 'Blog', urduLabel: 'مضامین (Blog)' },
    { id: 'about', label: 'About Us', urduLabel: 'ہمارے بارے میں' },
    { id: 'contact', label: 'Contact Us', urduLabel: 'رابطہ' }
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Zone: Approved Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123B83] rounded-lg p-1"
          aria-label="Fatima ki Academy - Home"
        >
          <img
            src="/public/assets/aistudio/file_00000000648081f49a1f69f463491d73_8e6929c2.png"
            alt="Fatima ki Academy Logo"
            className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/logo.png';
            }}
          />
        </button>

        {/* Desktop Nav Links: 1-line clean links */}
        <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'text-[#123B83] font-bold border-[#D4A52C]'
                    : 'border-transparent hover:text-[#123B83] hover:border-[#123B83]/30'
                } ${urduMode ? 'font-medium' : ''}`}
              >
                {urduMode ? link.urduLabel : link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Zone: Urdu/English Toggle, Search & Start Learning CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Direct Language Switcher: English | اردو */}
          <div className="flex items-center bg-slate-100/90 p-0.5 rounded-xl border border-slate-200">
            <button
              onClick={() => {
                if (urduMode) onToggleUrdu();
              }}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                !urduMode
                  ? 'bg-[#123B83] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#123B83]'
              }`}
              title="English version"
            >
              EN
            </button>
            <button
              onClick={() => {
                if (!urduMode) onToggleUrdu();
              }}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                urduMode
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-emerald-800 hover:text-emerald-950 hover:bg-emerald-50'
              }`}
              title="اردو ورژن - سب کچھ اردو میں دیکھیں"
            >
              <span className="font-urdu text-sm leading-none">اردو</span>
            </button>
          </div>

          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-2 text-xs font-medium text-slate-600 bg-slate-100/90 hover:bg-slate-200/80 hover:text-[#071B40] rounded-xl transition-all border border-slate-200/60"
            title="Search site (Ctrl+K)"
            aria-label="Search site"
          >
            <Search className="w-4 h-4 text-[#123B83]" />
            <span className="hidden md:inline">
              {urduMode ? 'تلاش کریں...' : 'Search...'}
            </span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 bg-white text-[10px] text-slate-400 rounded border border-slate-200 font-mono">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={() => handleLinkClick('grammar')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#123B83] hover:bg-[#071B40] rounded-xl transition-all shadow-sm hover:shadow active:scale-95 border border-[#D4A52C]/30"
          >
            <GraduationCap className="w-4 h-4 text-[#D4A52C]" />
            <span>{urduMode ? 'پڑھائی شروع کریں' : 'Start Learning'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 hover:text-[#123B83] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="p-4 space-y-2">
            {/* Urdu Toggle for Mobile */}
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-950 block">اردو رہنمائی (Urdu Guide)</span>
                <span className="text-[11px] text-emerald-800">قواعد و اسباق کی اردو میں وضاحت</span>
              </div>
              <button
                onClick={onToggleUrdu}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                  urduMode
                    ? 'bg-emerald-700 text-white'
                    : 'bg-white text-emerald-900 border border-emerald-300'
                }`}
              >
                {urduMode ? 'ON' : 'OFF'}
              </button>
            </div>

            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 p-3 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl mb-3 border border-slate-200"
            >
              <Search className="w-4 h-4 text-[#123B83]" />
              <span>
                {urduMode
                  ? 'اسباق، الفاظ، کوئز تلاش کریں...'
                  : 'Search lessons, words, quizzes...'}
              </span>
            </button>

            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full flex items-center justify-between p-3 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#123B83] text-white font-bold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#123B83]'
                  }`}
                >
                  <span>{urduMode ? link.urduLabel : link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#D4A52C]" />}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => handleLinkClick('grammar')}
                className="w-full flex items-center justify-center gap-2 p-3 text-sm font-bold text-white bg-[#123B83] hover:bg-[#071B40] rounded-xl shadow-md transition-colors"
              >
                <span>{urduMode ? 'ابھی پڑھائی شروع کریں' : 'Start Learning Now'}</span>
                <ArrowRight className="w-4 h-4 text-[#D4A52C]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
