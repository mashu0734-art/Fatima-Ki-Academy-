import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CloudflareGuideModal } from './components/CloudflareGuideModal';

// Pages
import { HomePage } from './components/pages/HomePage';
import { GrammarPage } from './components/pages/GrammarPage';
import { VocabularyPage } from './components/pages/VocabularyPage';
import { QuizzesPage } from './components/pages/QuizzesPage';
import { SentenceCorrectionPage } from './components/pages/SentenceCorrectionPage';
import { ReadingPage } from './components/pages/ReadingPage';
import { BlogPage } from './components/pages/BlogPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { TermsPage } from './components/pages/TermsPage';

import { ArrowUp, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [targetId, setTargetId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCloudflareGuideOpen, setIsCloudflareGuideOpen] = useState(false);
  const [showAdPreview, setShowAdPreview] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [urduMode, setUrduMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('fatima_urdu_mode') === 'true';
    } catch {
      return false;
    }
  });

  const toggleUrduMode = () => {
    setUrduMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('fatima_urdu_mode', String(next));
      } catch {}
      return next;
    });
  };

  // Sync hash on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'grammar',
        'vocabulary',
        'quizzes',
        'sentence-correction',
        'reading',
        'blog',
        'about',
        'contact',
        'privacy',
        'terms'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut Cmd/Ctrl + K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId, target?: string) => {
    setCurrentPage(page);
    setTargetId(target);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTitles: Record<PageId, string> = {
    home: 'Home',
    grammar: 'English Grammar',
    vocabulary: 'Vocabulary Builder',
    quizzes: 'English Quizzes',
    'sentence-correction': 'Sentence Correction',
    reading: 'Reading Practice',
    blog: 'Blog & Articles',
    about: 'About Us',
    contact: 'Contact Us',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use'
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FC] text-[#071B40] font-sans selection:bg-[#D4A52C]/30 selection:text-[#071B40]">
      {/* Top sticky header */}
      <Header
        currentPage={currentPage}
        onNavigate={(p) => navigateTo(p)}
        onOpenSearch={() => setIsSearchOpen(true)}
        urduMode={urduMode}
        onToggleUrdu={toggleUrduMode}
      />

      {/* Breadcrumb strip on non-home pages */}
      {currentPage !== 'home' && (
        <div className="bg-white border-b border-slate-100 py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-slate-500">
            <button
              onClick={() => navigateTo('home')}
              className="hover:text-[#123B83] transition-colors font-medium"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-bold text-[#123B83]">
              {pageTitles[currentPage]}
            </span>
          </div>
        </div>
      )}

      {/* Main Page Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            showAdPreview={showAdPreview}
            urduMode={urduMode}
            onToggleUrdu={toggleUrduMode}
          />
        )}
        {currentPage === 'grammar' && (
          <GrammarPage
            initialLessonId={targetId}
            onNavigate={navigateTo}
            showAdPreview={showAdPreview}
            urduMode={urduMode}
            onToggleUrdu={toggleUrduMode}
          />
        )}
        {currentPage === 'vocabulary' && (
          <VocabularyPage
            initialWordId={targetId}
            onNavigate={navigateTo}
            showAdPreview={showAdPreview}
            urduMode={urduMode}
          />
        )}
        {currentPage === 'quizzes' && (
          <QuizzesPage
            initialQuizId={targetId}
            onNavigate={navigateTo}
            showAdPreview={showAdPreview}
            urduMode={urduMode}
          />
        )}
        {currentPage === 'sentence-correction' && (
          <SentenceCorrectionPage
            onNavigate={navigateTo}
            showAdPreview={showAdPreview}
            urduMode={urduMode}
          />
        )}
        {currentPage === 'reading' && (
          <ReadingPage
            onNavigate={navigateTo}
            showAdPreview={showAdPreview}
            urduMode={urduMode}
          />
        )}
        {currentPage === 'blog' && (
          <BlogPage
            initialArticleId={targetId}
            onNavigate={navigateTo}
            showAdPreview={showAdPreview}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPage />
        )}
        {currentPage === 'terms' && (
          <TermsPage />
        )}
      </main>

      {/* Global Brand Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)}
        showAdPreview={showAdPreview}
        onToggleAdPreview={() => setShowAdPreview(!showAdPreview)}
        urduMode={urduMode}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Cloudflare Pages Deployment Modal */}
      <CloudflareGuideModal
        isOpen={isCloudflareGuideOpen}
        onClose={() => setIsCloudflareGuideOpen(false)}
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 bg-[#123B83] text-white rounded-2xl shadow-lg hover:bg-[#071B40] transition-all transform active:scale-95 border border-[#D4A52C]/30 focus:outline-none focus:ring-2 focus:ring-[#D4A52C]"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-[#D4A52C]" />
        </button>
      )}
    </div>
  );
}
