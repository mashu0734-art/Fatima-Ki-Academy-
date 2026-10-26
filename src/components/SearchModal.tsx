import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Sparkles, HelpCircle, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';
import { GRAMMAR_LESSONS } from '../data/lessons';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { BLOG_ARTICLES } from '../data/blogArticles';
import { PageId } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId, targetId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'lessons' | 'vocab' | 'quizzes' | 'blog'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const results: Array<{
      type: 'lesson' | 'vocab' | 'quiz' | 'blog';
      title: string;
      subtitle: string;
      badge: string;
      page: PageId;
      id: string;
    }> = [];

    // Search Lessons
    if (activeFilter === 'all' || activeFilter === 'lessons') {
      GRAMMAR_LESSONS.forEach((lesson) => {
        if (
          lesson.title.toLowerCase().includes(trimmed) ||
          lesson.summary.toLowerCase().includes(trimmed) ||
          lesson.category.toLowerCase().includes(trimmed)
        ) {
          results.push({
            type: 'lesson',
            title: lesson.title,
            subtitle: lesson.summary,
            badge: lesson.category,
            page: 'grammar',
            id: lesson.id
          });
        }
      });
    }

    // Search Vocabulary
    if (activeFilter === 'all' || activeFilter === 'vocab') {
      VOCABULARY_LIST.forEach((item) => {
        if (
          item.word.toLowerCase().includes(trimmed) ||
          item.meaning.toLowerCase().includes(trimmed) ||
          item.urduMeaning.includes(trimmed) ||
          item.category.toLowerCase().includes(trimmed)
        ) {
          results.push({
            type: 'vocab',
            title: `${item.word} ${item.phonetic}`,
            subtitle: `${item.meaning} (${item.urduMeaning})`,
            badge: item.category,
            page: 'vocabulary',
            id: item.id
          });
        }
      });
    }

    // Search Quizzes
    if (activeFilter === 'all' || activeFilter === 'quizzes') {
      QUIZ_QUESTIONS.forEach((quiz) => {
        if (
          quiz.question.toLowerCase().includes(trimmed) ||
          quiz.category.toLowerCase().includes(trimmed)
        ) {
          results.push({
            type: 'quiz',
            title: quiz.question,
            subtitle: `Category: ${quiz.category} · ${quiz.difficulty}`,
            badge: quiz.category,
            page: 'quizzes',
            id: quiz.id
          });
        }
      });
    }

    // Search Blog Articles
    if (activeFilter === 'all' || activeFilter === 'blog') {
      BLOG_ARTICLES.forEach((article) => {
        if (
          article.title.toLowerCase().includes(trimmed) ||
          article.excerpt.toLowerCase().includes(trimmed) ||
          article.category.toLowerCase().includes(trimmed)
        ) {
          results.push({
            type: 'blog',
            title: article.title,
            subtitle: article.excerpt,
            badge: article.category,
            page: 'blog',
            id: article.id
          });
        }
      });
    }

    return results.slice(0, 15);
  }, [query, activeFilter]);

  if (!isOpen) return null;

  const handleSelect = (page: PageId, id: string) => {
    onNavigate(page, id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 p-4 bg-[#071B40]/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#123B83] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search grammar lessons, vocabulary, quizzes, or articles..."
            className="w-full text-base text-[#071B40] placeholder-slate-400 bg-transparent outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded">
            ESC
          </kbd>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-100 bg-[#F5F7FC]/70 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-md font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-[#123B83] text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            All Results
          </button>
          <button
            onClick={() => setActiveFilter('lessons')}
            className={`px-3 py-1 rounded-md font-medium transition-colors ${
              activeFilter === 'lessons'
                ? 'bg-[#123B83] text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Grammar Lessons
          </button>
          <button
            onClick={() => setActiveFilter('vocab')}
            className={`px-3 py-1 rounded-md font-medium transition-colors ${
              activeFilter === 'vocab'
                ? 'bg-[#123B83] text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Vocabulary
          </button>
          <button
            onClick={() => setActiveFilter('quizzes')}
            className={`px-3 py-1 rounded-md font-medium transition-colors ${
              activeFilter === 'quizzes'
                ? 'bg-[#123B83] text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Quizzes
          </button>
          <button
            onClick={() => setActiveFilter('blog')}
            className={`px-3 py-1 rounded-md font-medium transition-colors ${
              activeFilter === 'blog'
                ? 'bg-[#123B83] text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Articles
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-slate-100 flex-1">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-30 text-[#123B83]" />
              <p className="text-sm font-medium text-slate-600">Type a keyword to search</p>
              <p className="text-xs text-slate-400 mt-1">
                Try "tenses", "prepositions", "diligent", "active voice", or "articles"
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              <p className="text-sm font-medium text-slate-600">No results found for "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">
                Try checking the spelling or browse categories directly from the main navigation.
              </p>
            </div>
          ) : (
            searchResults.map((item, index) => (
              <button
                key={`${item.type}-${item.id}-${index}`}
                onClick={() => handleSelect(item.page, item.id)}
                className="w-full text-left p-3 hover:bg-[#F5F7FC] rounded-xl flex items-start justify-between gap-3 group transition-colors"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#123B83]/10 text-[#123B83] flex items-center justify-center shrink-0 mt-0.5">
                    {item.type === 'lesson' && <BookOpen className="w-4 h-4" />}
                    {item.type === 'vocab' && <Sparkles className="w-4 h-4" />}
                    {item.type === 'quiz' && <HelpCircle className="w-4 h-4" />}
                    {item.type === 'blog' && <FileText className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-sm font-bold text-[#071B40] group-hover:text-[#123B83] truncate">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-[#D4A52C] font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-[#D4A52C]/30 shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">{item.subtitle}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#123B83] shrink-0 self-center transition-colors" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>{searchResults.length} matching items found</span>
          <div className="flex items-center gap-1">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">ESC</kbd>
            <span>to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
