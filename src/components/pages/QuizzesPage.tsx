import React, { useState, useMemo, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../../data/quizzes';
import { QuizQuestion, PageId } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { AdPlaceholder } from '../AdPlaceholder';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight,
  Sparkles,
  BarChart2,
  Check
} from 'lucide-react';

interface QuizzesPageProps {
  initialQuizId?: string;
  onNavigate: (page: PageId) => void;
  showAdPreview: boolean;
  urduMode?: boolean;
}

export const QuizzesPage: React.FC<QuizzesPageProps> = ({
  initialQuizId,
  onNavigate,
  showAdPreview,
  urduMode = false
}) => {
  const t = TRANSLATIONS[urduMode ? 'ur' : 'en'];
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | 'Grammar' | 'English Tenses' | 'Vocabulary' | 'Prepositions' | 'Sentence Correction' | 'General English'
  >('All');

  const categories = [
    'All',
    'Grammar',
    'English Tenses',
    'Vocabulary',
    'Prepositions',
    'Sentence Correction',
    'General English'
  ];

  // Active quiz state
  const activeQuestions = useMemo(() => {
    if (selectedCategory === 'All') return QUIZ_QUESTIONS;
    return QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (initialQuizId) {
      const q = QUIZ_QUESTIONS.find((item) => item.id === initialQuizId);
      if (q) {
        setSelectedCategory(q.category as any);
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setIsFinished(false);
        setUserAnswersHistory([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [initialQuizId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswersHistory, setUserAnswersHistory] = useState<
    Array<{
      question: QuizQuestion;
      chosenIndex: number;
      isCorrect: boolean;
    }>
  >([]);

  const currentQuestion = activeQuestions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        chosenIndex: idx,
        isCorrect
      }
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = (category?: typeof selectedCategory) => {
    if (category) setSelectedCategory(category);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswersHistory([]);
  };

  const percentage = Math.round((score / (activeQuestions.length || 1)) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#071B40] via-[#123B83] to-[#071B40] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden text-center sm:text-left">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <HelpCircle className="w-4 h-4" />
            <span>Interactive Knowledge Assessment</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.quizzes.heading}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {t.quizzes.subtitle}
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
            {t.quizzes.catLabel}
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleRestart(cat as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#123B83] text-white font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Quiz Body */}
      {!isFinished ? (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
          {/* Progress Tracker */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span className="text-[#123B83] font-bold">
                {urduMode
                  ? `${t.quizzes.questionOf} ${currentIndex + 1} از ${activeQuestions.length}`
                  : `Question ${currentIndex + 1} of ${activeQuestions.length}`}
              </span>
              <span>
                {t.quizzes.scoreLabel} {score} / {currentIndex + (isAnswered ? 1 : 0)}
              </span>
            </div>
            {/* Visual Progress Bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#123B83] to-[#D4A52C] h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentIndex + 1) / activeQuestions.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-[#123B83] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                {currentQuestion.category}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Difficulty: {currentQuestion.difficulty}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#071B40] leading-snug">
              {currentQuestion.question}
            </h2>
          </div>

          {/* 4 Options Grid */}
          <div className="space-y-3 pt-2">
            {currentQuestion.options.map((option, idx) => {
              const isCorrect = idx === currentQuestion.correctIndex;
              const isSelected = selectedOption === idx;

              let style =
                'border-slate-200 bg-[#F5F7FC] hover:bg-slate-100 hover:border-[#123B83] text-slate-800';

              if (isAnswered) {
                if (isCorrect) {
                  style =
                    'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold shadow-xs';
                } else if (isSelected && !isCorrect) {
                  style = 'border-rose-400 bg-rose-50 text-rose-800';
                } else {
                  style = 'border-slate-200 bg-slate-50/60 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between group ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                        isAnswered && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isAnswered && isSelected
                          ? 'bg-rose-500 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 group-hover:border-[#123B83]'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation revealed upon answering */}
          {isAnswered && (
            <div className="animate-in fade-in duration-200 space-y-4 pt-2">
              <div
                className={`p-4 rounded-2xl border ${
                  selectedOption === currentQuestion.correctIndex
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-amber-50 border-amber-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {selectedOption === currentQuestion.correctIndex ? (
                    <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                      {t.quizzes.correctAlert}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-amber-800 uppercase flex items-center gap-1">
                      <HelpCircle className="w-4 h-4 text-amber-600" />
                      {t.quizzes.incorrectAlert}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentQuestion.explanation}
                </p>

                {urduMode && (
                  <div className="mt-3 p-3 bg-white/90 border border-emerald-200 rounded-xl text-right font-urdu text-xs sm:text-sm text-emerald-950" dir="rtl">
                    <span className="font-bold text-emerald-900 block mb-0.5">💡 اردو رہنمائی و اصول:</span>
                    <span>اس سوال کے اصول کو اچھی طرح سمجھیں تاکہ تحریر اور امتحانات میں یہ غلطی نہ دہرائی جائے۔</span>
                  </div>
                )}
              </div>

              {/* Next Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#123B83] hover:bg-[#071B40] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>
                    {currentIndex + 1 < activeQuestions.length
                      ? t.quizzes.nextBtn
                      : t.quizzes.finishBtn}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#D4A52C]" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Final Result Screen */
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#123B83] to-[#D4A52C] text-white flex items-center justify-center mx-auto shadow-lg">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#D4A52C] uppercase tracking-wider">
              {urduMode ? 'کوئز مکمل ہو گیا!' : 'Quiz Completed!'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B40]">
              {percentage >= 80
                ? (urduMode ? 'شاندار کامیابی! بہترین تیاری!' : 'Outstanding Mastery!')
                : percentage >= 60
                ? (urduMode ? 'بہت اچھی کوشش! شاباش!' : 'Great Effort, Well Done!')
                : (urduMode ? 'اچھی پریکٹس! نظر ثانی کر کے دوبارہ کوشش کریں' : 'Good Practice! Review & Try Again')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              {urduMode
                ? `آپ نے ${activeQuestions.length} میں سے ${score} سوالات کے درست جوابات دیے (${percentage}%)۔`
                : `You answered ${score} out of ${activeQuestions.length} questions correctly (${percentage}%).`}
            </p>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto p-4 bg-[#F5F7FC] rounded-2xl border border-slate-200">
            <div>
              <span className="block text-xl font-extrabold text-emerald-600">{score}</span>
              <span className="text-[11px] text-slate-500 font-medium">{urduMode ? 'درست' : 'Correct'}</span>
            </div>
            <div>
              <span className="block text-xl font-extrabold text-rose-500">
                {activeQuestions.length - score}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">{urduMode ? 'غلط' : 'Incorrect'}</span>
            </div>
            <div>
              <span className="block text-xl font-extrabold text-[#123B83]">{percentage}%</span>
              <span className="text-[11px] text-slate-500 font-medium">{urduMode ? 'درستگی' : 'Accuracy'}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => handleRestart()}
              className="px-6 py-3 bg-[#123B83] hover:bg-[#071B40] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.quizzes.restartBtn}</span>
            </button>

            <button
              onClick={() => onNavigate('grammar')}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-[#071B40] text-xs sm:text-sm font-bold rounded-xl border border-slate-300 transition-all"
            >
              {urduMode ? 'گرامر اسباق کا جائزہ لیں' : 'Review Grammar Lessons'}
            </button>
          </div>

          {/* Detailed Question Review List */}
          <div className="pt-8 border-t border-slate-100 text-left space-y-4">
            <h3 className="text-sm font-bold text-[#071B40]">
              {t.quizzes.reviewTitle}
            </h3>
            <div className="space-y-3">
              {userAnswersHistory.map((item, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border text-xs space-y-1.5 ${
                    item.isCorrect
                      ? 'bg-emerald-50/50 border-emerald-200'
                      : 'bg-rose-50/50 border-rose-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-800">
                      {i + 1}. {item.question.question}
                    </span>
                    {item.isCorrect ? (
                      <span className="text-emerald-700 font-bold shrink-0">✓ Correct</span>
                    ) : (
                      <span className="text-rose-600 font-bold shrink-0">✗ Incorrect</span>
                    )}
                  </div>
                  <p className="text-slate-600">
                    <strong className="text-slate-800">Correct:</strong>{' '}
                    {item.question.options[item.question.correctIndex]}
                  </p>
                  <p className="text-slate-500 italic">{item.question.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Ad Placeholder if preview enabled */}
      {showAdPreview && (
        <AdPlaceholder slotId="quiz-bottom-banner" format="banner" />
      )}
    </div>
  );
};
