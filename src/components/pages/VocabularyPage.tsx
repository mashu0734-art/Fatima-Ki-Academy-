import React, { useState, useMemo, useEffect } from 'react';
import { VOCABULARY_LIST } from '../../data/vocabulary';
import { VocabularyWord, PageId } from '../../types';
import { AdPlaceholder } from '../AdPlaceholder';
import {
  Sparkles,
  Search,
  Volume2,
  RotateCw,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  HelpCircle,
  Layers,
  Grid,
  Check
} from 'lucide-react';

interface VocabularyPageProps {
  initialWordId?: string;
  onNavigate: (page: PageId) => void;
  showAdPreview: boolean;
  urduMode?: boolean;
}

export const VocabularyPage: React.FC<VocabularyPageProps> = ({
  initialWordId,
  onNavigate,
  showAdPreview,
  urduMode = false
}) => {
  const [activeTab, setActiveTab] = useState<'grid' | 'flashcards' | 'confused'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Flashcard mode state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredWords, setMasteredWords] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (initialWordId) {
      const found = VOCABULARY_LIST.find((w) => w.id === initialWordId);
      if (found) {
        setSearchQuery(found.word);
        setSelectedCategory('All');
        setActiveTab('grid');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [initialWordId]);

  const categories = [
    'All',
    'Everyday Basics',
    'Academic & Exams',
    'Business & Work',
    'Idioms & Phrases',
    'Confused Words'
  ];

  // Text-to-speech
  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredWords = useMemo(() => {
    return VOCABULARY_LIST.filter((w) => {
      const matchesCat =
        selectedCategory === 'All' || w.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        w.word.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q) ||
        w.urduMeaning.includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const confusedWords = useMemo(() => {
    return VOCABULARY_LIST.filter((w) => w.confusedWith !== undefined);
  }, []);

  const currentFlashcard = filteredWords[flashcardIndex % (filteredWords.length || 1)];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const rand = Math.floor(Math.random() * filteredWords.length);
    setFlashcardIndex(rand);
  };

  const toggleMastered = (id: string) => {
    setMasteredWords((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#071B40] via-[#123B83] to-[#071B40] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <Sparkles className="w-4 h-4" />
            <span>{urduMode ? 'اردو ترجمہ اور آڈیو تلفظ کے ساتھ ڈکشنری' : 'Interactive Word Bank with Urdu Support'}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {urduMode ? 'ذخیرہ الفاظ اور 3D فلیش کارڈز' : 'English Vocabulary Builder'}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {urduMode
              ? 'تلفظ، اردو ترجمہ، مترادفات اور 3D فلیش کارڈز کے ساتھ نئے اور روزمرہ کے انگریزی الفاظ سیکھیں۔'
              : 'Expand your active vocabulary with accurate definitions, Urdu translations, pronunciation audio, synonyms, and interactive flashcards.'}
          </p>
        </div>
      </div>

      {/* Control Bar: Mode Tabs + Search + Category Filter */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setActiveTab('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'grid'
                  ? 'bg-white text-[#123B83] font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{urduMode ? 'الفاظ کی فہرست' : 'Word Grid'}</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('flashcards');
                setIsFlipped(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'flashcards'
                  ? 'bg-white text-[#123B83] font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{urduMode ? '3D فلیش کارڈز' : 'Interactive Flashcards'}</span>
            </button>
            <button
              onClick={() => setActiveTab('confused')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'confused'
                  ? 'bg-white text-[#123B83] font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{urduMode ? 'الجھاؤ والے الفاظ' : 'Confused Words'}</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={urduMode ? 'الفاظ یا اردو معنی تلاش کریں...' : 'Search words or Urdu meaning...'}
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-[#123B83] bg-slate-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setFlashcardIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#123B83] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Mode 1: Interactive Flashcards View */}
      {activeTab === 'flashcards' && (
        <div className="max-w-xl mx-auto space-y-6">
          {filteredWords.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl text-center text-slate-500">
              No vocabulary words match your filter.
            </div>
          ) : (
            <>
              {/* Flashcard Box */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="bg-white rounded-3xl border-2 border-[#123B83]/20 shadow-xl min-h-[340px] p-8 flex flex-col justify-between cursor-pointer transition-all hover:border-[#123B83] relative group select-none"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-[#123B83] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {currentFlashcard.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span>Card {flashcardIndex + 1} of {filteredWords.length}</span>
                    <RotateCw className="w-3.5 h-3.5 text-slate-300 ml-1" />
                  </div>
                </div>

                {/* Flip State: Front or Back */}
                {!isFlipped ? (
                  <div className="text-center my-auto space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B40]">
                      {currentFlashcard.word}
                    </h2>
                    <p className="text-sm font-mono text-slate-500">
                      {currentFlashcard.phonetic} · <span className="italic">{currentFlashcard.partOfSpeech}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-4">
                      Click anywhere to reveal Urdu meaning & example
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 my-auto animate-in fade-in duration-200">
                    <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-center">
                      <span className="text-[11px] font-bold text-[#D4A52C] uppercase block mb-1">
                        Urdu Meaning / اردو معنی
                      </span>
                      <p className="text-xl sm:text-2xl font-serif text-[#071B40]">
                        {currentFlashcard.urduMeaning}
                      </p>
                    </div>

                    <div className="text-xs text-slate-700 space-y-1">
                      <p>
                        <strong className="text-[#123B83]">English Meaning:</strong> {currentFlashcard.meaning}
                      </p>
                      <p className="italic text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        "{currentFlashcard.example}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Bar on Card */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(currentFlashcard.word);
                    }}
                    className="flex items-center gap-1.5 text-[#123B83] hover:text-[#071B40] font-semibold"
                  >
                    <Volume2 className="w-4 h-4 text-[#D4A52C]" />
                    <span>Pronounce</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMastered(currentFlashcard.id);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors ${
                      masteredWords.has(currentFlashcard.id)
                        ? 'bg-emerald-100 text-emerald-800 font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>
                      {masteredWords.has(currentFlashcard.id) ? 'Mastered!' : 'Mark Mastered'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handlePrevFlashcard}
                  className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1 shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleShuffle}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5"
                >
                  <Shuffle className="w-4 h-4" />
                  <span>Shuffle</span>
                </button>

                <button
                  onClick={handleNextFlashcard}
                  className="px-4 py-2.5 bg-[#123B83] hover:bg-[#071B40] text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm"
                >
                  <span>Next Word</span>
                  <ChevronRight className="w-4 h-4 text-[#D4A52C]" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Mode 2: Word Grid View */}
      {activeTab === 'grid' && (
        <div className="space-y-4">
          <div className="text-xs text-slate-500 font-medium">
            Showing {filteredWords.length} vocabulary words
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWords.map((word) => (
              <div
                key={word.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-[#123B83] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {word.category}
                    </span>
                    <button
                      onClick={() => handleSpeak(word.word)}
                      className="p-1 text-slate-400 hover:text-[#123B83] transition-colors"
                      title="Pronounce word"
                    >
                      <Volume2 className="w-4 h-4 text-[#D4A52C]" />
                    </button>
                  </div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-lg font-bold text-[#071B40]">
                      {word.word}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {word.phonetic}
                    </span>
                  </div>

                  {/* Urdu Box */}
                  <div className="bg-amber-50/60 border border-amber-200/70 rounded-xl p-2.5 my-2">
                    <p className="text-sm font-serif text-slate-800 text-right" dir="rtl">
                      {word.urduMeaning}
                    </p>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    <strong>Definition:</strong> {word.meaning}
                  </p>

                  <p className="text-xs text-slate-600 italic bg-[#F5F7FC] p-2.5 rounded-lg border border-slate-100 mb-3">
                    "{word.example}"
                  </p>
                </div>

                {/* Synonyms & Antonyms */}
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  {word.synonyms.length > 0 && (
                    <div>
                      <strong className="text-slate-700">Synonyms:</strong>{' '}
                      {word.synonyms.join(', ')}
                    </div>
                  )}
                  {word.antonyms.length > 0 && (
                    <div>
                      <strong className="text-slate-700">Antonyms:</strong>{' '}
                      {word.antonyms.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mode 3: Commonly Confused Words View */}
      {activeTab === 'confused' && (
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h3 className="text-lg font-bold text-[#071B40]">
              Commonly Confused English Word Pairs
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Homophones and lookalikes that even fluent speakers mix up. Master the difference with clear examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {confusedWords.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-lg font-bold text-[#123B83]">
                    {item.word}
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    {item.phonetic}
                  </span>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3">
                  <span className="text-[11px] font-bold text-[#D4A52C] uppercase block mb-0.5">
                    Urdu Breakdown / اردو وضاحت:
                  </span>
                  <p className="text-sm font-serif text-slate-800" dir="rtl">
                    {item.urduMeaning}
                  </p>
                </div>

                <div className="text-xs text-slate-700 space-y-2">
                  <p>
                    <strong>Distinction:</strong> {item.meaning}
                  </p>
                  <p className="bg-blue-50/60 p-2.5 rounded-lg border border-blue-100 text-slate-800">
                    <strong className="text-[#123B83]">In action:</strong> "{item.example}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ad Placeholder if preview enabled */}
      {showAdPreview && (
        <AdPlaceholder slotId="vocabulary-bottom-banner" format="banner" />
      )}
    </div>
  );
};
