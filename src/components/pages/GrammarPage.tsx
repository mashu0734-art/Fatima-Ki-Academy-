import React, { useState, useMemo, useEffect } from 'react';
import { GRAMMAR_LESSONS } from '../../data/lessons';
import { GrammarLesson, PageId } from '../../types';
import { AdPlaceholder } from '../AdPlaceholder';
import { TRANSLATIONS } from '../../data/translations';
import {
  BookOpen,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Check,
  AlertTriangle,
  RotateCcw,
  Languages
} from 'lucide-react';
import { LESSON_URDU_MAP } from '../../data/urduGuide';

interface GrammarPageProps {
  initialLessonId?: string;
  onNavigate: (page: PageId, targetId?: string) => void;
  showAdPreview: boolean;
  urduMode?: boolean;
  onToggleUrdu?: () => void;
}

export const GrammarPage: React.FC<GrammarPageProps> = ({
  initialLessonId,
  onNavigate,
  showAdPreview,
  urduMode = false,
  onToggleUrdu
}) => {
  const t = TRANSLATIONS[urduMode ? 'ur' : 'en'];
  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    initialLessonId || GRAMMAR_LESSONS[0].id
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive Quiz state for selected lesson
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (initialLessonId) {
      setSelectedLessonId(initialLessonId);
      setQuizAnswers({});
      setShowResults({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialLessonId]);

  const categories = ['All', 'Fundamentals', 'Tenses', 'Grammar Rules', 'Advanced Grammar'];

  const filteredLessons = useMemo(() => {
    return GRAMMAR_LESSONS.filter((lesson) => {
      const matchesCat =
        selectedCategory === 'All' || lesson.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentLesson: GrammarLesson = useMemo(() => {
    return (
      GRAMMAR_LESSONS.find((l) => l.id === selectedLessonId) || GRAMMAR_LESSONS[0]
    );
  }, [selectedLessonId]);

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
    setShowResults((prev) => ({ ...prev, [questionIndex]: true }));
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setShowResults({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#071B40] to-[#123B83] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <BookOpen className="w-4 h-4" />
            <span>Interactive Grammar Curriculum</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.grammar.heading}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {t.grammar.subtitle}
          </p>
        </div>
      </div>

      {/* Main Grid: Sidebar Navigator + Lesson Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Lesson Directory */}
        <aside className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-4 lg:sticky lg:top-24">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[#071B40] text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#123B83]" />
              <span>{t.grammar.topicsTitle}</span>
            </h3>
            <span className="text-[11px] font-bold text-[#123B83] bg-blue-50 px-2 py-0.5 rounded">
              {filteredLessons.length} {urduMode ? 'اسباق' : 'Lessons'}
            </span>
          </div>

          {/* Search inside lessons */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.grammar.searchTopics}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-[#123B83] bg-slate-50 focus:bg-white"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#123B83] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Topic List */}
          <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredLessons.map((lesson) => {
              const isSelected = lesson.id === currentLesson.id;
              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLessonId(lesson.id);
                    handleResetQuiz();
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#123B83] text-white font-bold shadow-sm'
                      : 'hover:bg-[#F5F7FC] text-slate-700'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <p className={`truncate ${isSelected ? 'text-white' : 'group-hover:text-[#123B83]'}`}>
                      {lesson.title}
                    </p>
                    <span className={`text-[10px] block ${isSelected ? 'text-amber-200' : 'text-slate-400'}`}>
                      {lesson.category} · {lesson.level}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#D4A52C] translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Content Area: Active Lesson Reader */}
        <main className="lg:col-span-8 space-y-8">
          {/* Main Lesson Card */}
          <article className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-8">
            {/* Header info */}
            <div className="space-y-3 pb-6 border-b border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-bold text-[#123B83] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {currentLesson.category}
                  </span>
                  <span className="font-medium text-slate-500">
                    Level: {currentLesson.level}
                  </span>
                </div>

                {/* Urdu Guide Mode Switcher */}
                {onToggleUrdu && (
                  <button
                    onClick={onToggleUrdu}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all border ${
                      urduMode
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                        : 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100'
                    }`}
                  >
                    <Languages className="w-3.5 h-3.5" />
                    <span>{urduMode ? 'اردو رہنمائی: فعال' : 'اردو میں سمجھیں'}</span>
                  </button>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B40]">
                {currentLesson.title}
              </h2>

              {/* Urdu Title if Urdu Mode is active */}
              {urduMode && LESSON_URDU_MAP[currentLesson.id] && (
                <p className="font-urdu text-base sm:text-lg text-emerald-900 font-semibold bg-emerald-50/70 p-3 rounded-xl border border-emerald-200" dir="rtl">
                  {LESSON_URDU_MAP[currentLesson.id].urduTitle}
                </p>
              )}

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                {currentLesson.summary}
              </p>
            </div>

            {/* Dedicated Urdu Guide Section (when urduMode is ON) */}
            {urduMode && LESSON_URDU_MAP[currentLesson.id] && (
              <section className="bg-gradient-to-br from-emerald-50/80 via-emerald-50/40 to-amber-50/50 rounded-2xl p-5 sm:p-6 border-2 border-emerald-200/80 space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-emerald-200/60 pb-3">
                  <span className="font-urdu text-lg font-bold text-emerald-950 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    <span>اردو رہنمائی اور آسان تشریح</span>
                  </span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                    اردو گائیڈ
                  </span>
                </div>

                <div className="space-y-3 font-urdu text-sm sm:text-base text-slate-800" dir="rtl">
                  <p className="font-medium text-emerald-900 bg-white/70 p-3 rounded-xl border border-emerald-100">
                    <strong>خلاصہ:</strong> {LESSON_URDU_MAP[currentLesson.id].urduSummary}
                  </p>
                  <p className="text-slate-700 leading-loose">
                    <strong>تعارف:</strong> {LESSON_URDU_MAP[currentLesson.id].urduIntro}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {LESSON_URDU_MAP[currentLesson.id].urduKeyRules.map((r, rIdx) => (
                      <div key={rIdx} className="bg-white/90 p-3 rounded-xl border border-emerald-100 space-y-1">
                        <strong className="text-emerald-950 block text-xs font-sans">
                          {r.title}
                        </strong>
                        <p className="text-xs sm:text-sm text-slate-700">{r.explanation}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-amber-50/90 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 mt-2">
                    <strong>عام غلطی سے بچیں:</strong> {LESSON_URDU_MAP[currentLesson.id].urduCommonMistakeTip}
                  </div>
                </div>
              </section>
            )}

            {/* Introduction */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-[#071B40] flex items-center gap-2">
                <span className="w-2 h-5 bg-[#D4A52C] rounded-full"></span>
                <span>Introduction</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-[#F5F7FC] p-4 rounded-2xl border border-blue-50">
                {currentLesson.introduction}
              </p>
            </section>

            {/* Core Explanation */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-[#071B40] flex items-center gap-2">
                <span className="w-2 h-5 bg-[#123B83] rounded-full"></span>
                <span>How It Works & Explanation</span>
              </h3>
              <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                {currentLesson.explanation.map((para, i) => (
                  <p key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B83] mt-2 shrink-0"></span>
                    <span>{para}</span>
                  </p>
                ))}
              </div>
            </section>

            {/* Rules and Formulas */}
            {currentLesson.rules.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#071B40] flex items-center gap-2">
                  <span className="w-2 h-5 bg-[#D4A52C] rounded-full"></span>
                  <span>{t.grammar.rulesTitle}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentLesson.rules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F5F7FC] border border-slate-200/80 rounded-2xl p-4 space-y-1.5"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B83]">
                        {rule.title}
                      </h4>
                      <p className="text-xs text-slate-700">{rule.rule}</p>
                      <div className="text-xs text-slate-800 bg-white p-2 rounded-lg border border-slate-200/60 font-mono">
                        <strong className="text-[#D4A52C]">Ex:</strong> {rule.example}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Correct vs Incorrect Examples */}
            {currentLesson.examples.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#071B40] flex items-center gap-2">
                  <span className="w-2 h-5 bg-[#123B83] rounded-full"></span>
                  <span>{t.grammar.comparisonTitle}</span>
                </h3>
                <div className="space-y-3">
                  {currentLesson.examples.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl p-4 space-y-2 text-xs"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-emerald-800 block text-[11px] uppercase">
                              {t.grammar.correctBadge}
                            </span>
                            <span className="text-slate-800 font-medium">{item.correct}</span>
                          </div>
                        </div>

                        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-rose-800 block text-[11px] uppercase">
                              {t.grammar.incorrectBadge}
                            </span>
                            <span className="text-slate-800 line-through decoration-rose-500">
                              {item.incorrect}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <strong className="text-[#123B83]">{t.grammar.whyLabel}</strong> {item.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Common Mistakes */}
            {currentLesson.commonMistakes.length > 0 && (
              <section className="space-y-3">
                <h3 className="text-lg font-bold text-[#071B40] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <span>{t.grammar.mistakesTitle}</span>
                </h3>
                <div className="space-y-2.5">
                  {currentLesson.commonMistakes.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-amber-50/60 border border-amber-200 rounded-xl p-3.5 text-xs text-slate-700 space-y-1"
                    >
                      <div className="font-bold text-amber-900">{m.mistake}</div>
                      <div className="text-emerald-800 font-medium">✓ {m.correction}</div>
                      <div className="text-slate-600">{m.explanation}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interactive Practice Questions */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#071B40] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#123B83]" />
                  <span>{t.grammar.quizTitle}</span>
                </h3>
                <button
                  onClick={handleResetQuiz}
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#123B83]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.grammar.resetBtn}</span>
                </button>
              </div>

              <div className="space-y-5">
                {currentLesson.practiceQuestions.map((pq, qIdx) => {
                  const selectedOpt = quizAnswers[qIdx];
                  const isSubmitted = showResults[qIdx];
                  const isCorrect = selectedOpt === pq.correctIndex;

                  return (
                    <div
                      key={qIdx}
                      className="bg-[#F5F7FC] border border-slate-200/80 rounded-2xl p-5 space-y-3 text-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-slate-800 text-sm">
                          {qIdx + 1}. {pq.question}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pq.options.map((opt, oIdx) => {
                          const isOptionCorrect = oIdx === pq.correctIndex;
                          const isChosen = selectedOpt === oIdx;

                          let btnClass = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700';
                          if (isSubmitted) {
                            if (isOptionCorrect) {
                              btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                            } else if (isChosen && !isOptionCorrect) {
                              btnClass = 'border-rose-400 bg-rose-50 text-rose-800';
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              disabled={isSubmitted}
                              onClick={() => handleAnswerSelect(qIdx, oIdx)}
                              className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${btnClass}`}
                            >
                              <span>{opt}</span>
                              {isSubmitted && isOptionCorrect && (
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {isSubmitted && (
                        <div
                          className={`p-3 rounded-xl border ${
                            isCorrect
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                              : 'bg-rose-50 border-rose-200 text-rose-900'
                          }`}
                        >
                          <p className="font-bold text-xs mb-1">
                            {isCorrect ? '✓ Correct Answer!' : '✗ Not Quite!'}
                          </p>
                          <p className="text-xs text-slate-700">{pq.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Related Lessons */}
            {currentLesson.relatedLessonIds.length > 0 && (
              <section className="pt-6 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Related Lessons:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentLesson.relatedLessonIds.map((relId) => {
                    const related = GRAMMAR_LESSONS.find((l) => l.id === relId);
                    if (!related) return null;
                    return (
                      <button
                        key={relId}
                        onClick={() => {
                          setSelectedLessonId(relId);
                          handleResetQuiz();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-[#123B83] hover:text-white rounded-lg text-xs font-medium text-slate-700 transition-colors flex items-center gap-1"
                      >
                        <span>{related.title}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    );
                  })}
                </div>
              </section>
            )}
          </article>

          {/* Ad Placeholder if preview enabled */}
          {showAdPreview && (
            <AdPlaceholder slotId="grammar-lesson-bottom" format="banner" />
          )}
        </main>
      </div>
    </div>
  );
};
