import React, { useState } from 'react';
import { READING_PASSAGES } from '../../data/readingPassages';
import { ReadingPassage, PageId } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { AdPlaceholder } from '../AdPlaceholder';
import { AdsterraAd } from '../AdsterraAd';
import {
  FileText,
  Clock,
  BookOpen,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Award,
  ArrowRight,
  Check
} from 'lucide-react';

interface ReadingPageProps {
  onNavigate: (page: PageId) => void;
  showAdPreview: boolean;
  urduMode?: boolean;
}

export const ReadingPage: React.FC<ReadingPageProps> = ({
  onNavigate,
  showAdPreview,
  urduMode = false
}) => {
  const t = TRANSLATIONS[urduMode ? 'ur' : 'en'];
  const [selectedPassageId, setSelectedPassageId] = useState<string>(
    READING_PASSAGES[0].id
  );
  const currentPassage =
    READING_PASSAGES.find((p) => p.id === selectedPassageId) || READING_PASSAGES[0];

  // Comprehension questions answer state
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const handleSelectAnswer = (qId: string, optIdx: number) => {
    if (submitted[qId]) return;
    setAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setSubmitted((prev) => ({ ...prev, [qId]: true }));
  };

  const handleResetQuestions = () => {
    setAnswers({});
    setSubmitted({});
  };

  const correctCount = currentPassage.questions.filter(
    (q) => answers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#071B40] via-[#123B83] to-[#071B40] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <FileText className="w-4 h-4" />
            <span>Interactive Reading Practice</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.reading.heading}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {t.reading.subtitle}
          </p>
        </div>
      </div>

      {/* Passage Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {READING_PASSAGES.map((passage) => {
          const isSelected = passage.id === currentPassage.id;
          return (
            <button
              key={passage.id}
              onClick={() => {
                setSelectedPassageId(passage.id);
                handleResetQuestions();
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#123B83] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4 text-[#D4A52C]" />
              <span>{passage.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {passage.difficulty}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Reading Passage Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Passage Content */}
        <article className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-2 font-medium">
              <span className="font-bold text-[#123B83] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                {currentPassage.difficulty} Level
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {currentPassage.estimatedMinutes} {t.reading.minRead}
              </span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B40] leading-snug">
            {currentPassage.title}
          </h2>

          {/* Urdu Summary Callout */}
          {urduMode && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-right font-urdu text-xs sm:text-sm text-emerald-950 space-y-1" dir="rtl">
              <span className="font-bold text-emerald-900 block">📖 اردو خلاصہ و رہنمائی:</span>
              <p className="leading-relaxed">
                اس مضمون کو پڑھتے ہوئے مشکل الفاظ کے معانی پر غور کریں۔ ہر پیراگراف کے اختتام پر دیے گئے سوالات کے جوابات پیراگراف کے مفہوم کے مطابق منتخب کریں۔
              </p>
            </div>
          )}

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
            {currentPassage.content.map((p, idx) => (
              <p key={idx} className="indent-4">
                {p}
              </p>
            ))}
          </div>

          {/* Key Vocabulary Highlights */}
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B83] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D4A52C]" />
              <span>{t.reading.keyVocabTitle}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {currentPassage.keyVocabulary.map((vocab, vIdx) => (
                <div
                  key={vIdx}
                  className="bg-[#F5F7FC] p-3 rounded-xl border border-slate-200/60"
                >
                  <span className="font-bold text-[#071B40] block">{vocab.word}</span>
                  <span className="text-slate-600 text-[11px]">{vocab.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Right Column: Comprehension Questions */}
        <aside className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-6 lg:sticky lg:top-24">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-[#071B40] text-sm flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#123B83]" />
                <span>{t.reading.questionsTitle}</span>
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {t.reading.questionsSubtitle}
              </p>
            </div>
            <button
              onClick={handleResetQuestions}
              className="p-1 text-slate-400 hover:text-[#123B83]"
              title="Reset questions"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Questions list */}
          <div className="space-y-6">
            {currentPassage.questions.map((q, qIdx) => {
              const userOpt = answers[q.id];
              const isQSubmitted = submitted[q.id];
              const isCorrect = userOpt === q.correctIndex;

              return (
                <div key={q.id} className="space-y-2.5 text-xs">
                  <p className="font-bold text-slate-800 leading-snug">
                    {qIdx + 1}. {q.question}
                  </p>

                  <div className="space-y-1.5">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.correctIndex;
                      const isChosen = userOpt === optIdx;

                      let style =
                        'border-slate-200 bg-[#F5F7FC] hover:bg-slate-100 text-slate-700';

                      if (isQSubmitted) {
                        if (isOptionCorrect) {
                          style =
                            'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                        } else if (isChosen && !isOptionCorrect) {
                          style = 'border-rose-400 bg-rose-50 text-rose-800';
                        } else {
                          style = 'border-slate-200 bg-slate-50/50 text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isQSubmitted}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs ${style}`}
                        >
                          <span>{opt}</span>
                          {isQSubmitted && isOptionCorrect && (
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isQSubmitted && (
                    <div
                      className={`p-2.5 rounded-xl border text-[11px] ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                          : 'bg-amber-50 border-amber-200 text-amber-900'
                      }`}
                    >
                      <p className="font-bold mb-0.5">
                        {isCorrect ? '✓ Correct!' : '✗ Explanation:'}
                      </p>
                      <p className="text-slate-700">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Score card */}
          {Object.keys(submitted).length === currentPassage.questions.length && (
            <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl text-center space-y-1 animate-in fade-in">
              <Award className="w-6 h-6 text-[#123B83] mx-auto" />
              <p className="text-xs font-bold text-[#071B40]">
                Passage Score: {correctCount} / {currentPassage.questions.length} Correct
              </p>
              <p className="text-[11px] text-slate-600">
                {correctCount === currentPassage.questions.length
                  ? 'Flawless comprehension!'
                  : 'Well done! Review the passage for any missed details.'}
              </p>
            </div>
          )}
          <div className="pt-4 border-t border-slate-100 flex justify-center">
            <AdsterraAd type="banner-160x300" />
          </div>
        </aside>
      </div>

      {/* Ad Placeholder if preview enabled */}
      {showAdPreview && (
        <AdPlaceholder slotId="reading-bottom-banner" format="banner" />
      )}
    </div>
  );
};
