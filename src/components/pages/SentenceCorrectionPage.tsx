import React, { useState } from 'react';
import { SENTENCE_CORRECTION_DATA } from '../../data/sentenceCorrection';
import { SentenceCorrectionItem, PageId } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { AdPlaceholder } from '../AdPlaceholder';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight,
  HelpCircle,
  Sparkles,
  AlertTriangle,
  Check
} from 'lucide-react';

interface SentenceCorrectionPageProps {
  onNavigate: (page: PageId) => void;
  showAdPreview: boolean;
  urduMode?: boolean;
}

export const SentenceCorrectionPage: React.FC<SentenceCorrectionPageProps> = ({
  onNavigate,
  showAdPreview,
  urduMode = false
}) => {
  const t = TRANSLATIONS[urduMode ? 'ur' : 'en'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentItem: SentenceCorrectionItem = SENTENCE_CORRECTION_DATA[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentItem.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < SENTENCE_CORRECTION_DATA.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const percentage = Math.round(
    (score / (SENTENCE_CORRECTION_DATA.length || 1)) * 100
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#071B40] via-[#123B83] to-[#071B40] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <CheckCircle2 className="w-4 h-4" />
            <span>Interactive Grammar Correction Engine</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.sentenceCorrection.heading}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {t.sentenceCorrection.subtitle}
          </p>
        </div>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span className="text-[#123B83] font-bold">
                {urduMode
                  ? `${t.sentenceCorrection.challengeOf} ${currentIndex + 1} از ${SENTENCE_CORRECTION_DATA.length}`
                  : `Challenge ${currentIndex + 1} of ${SENTENCE_CORRECTION_DATA.length}`}
              </span>
              <span>
                {urduMode ? 'اسکور:' : 'Score:'} {score} / {currentIndex + (isAnswered ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#123B83] to-emerald-500 h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentIndex + 1) / SENTENCE_CORRECTION_DATA.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Incorrect Sentence Display Banner */}
          <div className="bg-rose-50/70 border-2 border-rose-200/80 rounded-2xl p-5 sm:p-6 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>{t.sentenceCorrection.faultyLabel}</span>
            </div>
            <p className="text-base sm:text-xl font-bold text-slate-800 line-through decoration-rose-500 decoration-2">
              "{currentItem.incorrectSentence}"
            </p>
            <span className="text-[11px] text-slate-500 font-medium block">
              {urduMode ? 'شعبہ:' : 'Category:'} {currentItem.category}
            </span>
          </div>

          {/* Candidate Options */}
          <div className="space-y-3 pt-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.sentenceCorrection.promptLabel}
            </p>

            {currentItem.options.map((option, idx) => {
              const isCorrect = idx === currentItem.correctIndex;
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

          {/* Grammar Rule Explanation */}
          {isAnswered && (
            <div className="animate-in fade-in duration-200 space-y-4 pt-2">
              <div
                className={`p-4 rounded-2xl border ${
                  selectedOption === currentItem.correctIndex
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-amber-50 border-amber-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  {selectedOption === currentItem.correctIndex ? (
                    <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                      {t.sentenceCorrection.correctAlert}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-amber-800 uppercase flex items-center gap-1">
                      <HelpCircle className="w-4 h-4 text-amber-600" />
                      {t.sentenceCorrection.ruleLabel}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {currentItem.grammarRule}
                </p>
                <div className="mt-2 text-xs text-[#123B83] font-bold">
                  ✓ {urduMode ? 'درست جملہ:' : 'Correct Form:'} "{currentItem.correctSentence}"
                </div>

                {urduMode && (
                  <div className="mt-3 p-3 bg-white/90 border border-emerald-200 rounded-xl text-right font-urdu text-xs sm:text-sm text-emerald-950" dir="rtl">
                    <span className="font-bold text-emerald-900 block mb-0.5">💡 گرامر اصول کی اردو وضاحت:</span>
                    <span>انگریزی میں عام طور پر ترجمہ کرتے وقت یہ غلطی ہوتی ہے۔ اس جملے میں درست ترتیب اور حرفِ ربط (preposition) یا فعل (verb) کی حالت کو یاد رکھیں۔</span>
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
                    {currentIndex + 1 < SENTENCE_CORRECTION_DATA.length
                      ? t.sentenceCorrection.nextBtn
                      : (urduMode ? 'نتائج دیکھیں' : 'View Completion Results')}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#D4A52C]" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Completion Screen */
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-[#123B83] text-white flex items-center justify-center mx-auto shadow-lg">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#D4A52C] uppercase tracking-wider">
              {urduMode ? 'پریکٹس مکمل!' : 'Practice Complete!'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B40]">
              {percentage >= 80
                ? (urduMode ? 'شاندار! غلطیوں کی درست نشاندہی!' : 'Superb Error Spotting!')
                : percentage >= 50
                ? (urduMode ? 'بہترین پیشرفت! شاباش!' : 'Solid Progress!')
                : (urduMode ? 'مشق جاری رکھیں!' : 'Keep Practising!')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              {urduMode
                ? `آپ نے ${SENTENCE_CORRECTION_DATA.length} میں سے ${score} جملوں کی غلطیاں کامیابی سے درست کیں (${percentage}%)۔`
                : `You correctly solved ${score} of ${SENTENCE_CORRECTION_DATA.length} sentence errors (${percentage}%).`}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-[#123B83] hover:bg-[#071B40] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.sentenceCorrection.restartBtn}</span>
            </button>

            <button
              onClick={() => onNavigate('grammar')}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-[#071B40] text-xs sm:text-sm font-bold rounded-xl border border-slate-300 transition-all"
            >
              {urduMode ? 'گرامر کے قواعد پڑھیں' : 'Study Grammar Rules'}
            </button>
          </div>
        </div>
      )}

      {/* Ad Placeholder if preview enabled */}
      {showAdPreview && (
        <AdPlaceholder slotId="sentence-correction-bottom" format="banner" />
      )}
    </div>
  );
};
