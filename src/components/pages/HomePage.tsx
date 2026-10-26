import React, { useState } from 'react';
import { PageId, GrammarLesson, BlogArticle } from '../../types';
import { GRAMMAR_LESSONS } from '../../data/lessons';
import { VOCABULARY_LIST } from '../../data/vocabulary';
import { BLOG_ARTICLES } from '../../data/blogArticles';
import { TRANSLATIONS } from '../../data/translations';
import { AdPlaceholder } from '../AdPlaceholder';
import { AdsterraAd } from '../AdsterraAd';
import {
  BookOpen,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  FileText,
  Volume2,
  ArrowRight,
  GraduationCap,
  Award,
  Smartphone,
  Shield,
  Layers,
  Check,
  AlertCircle
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, targetId?: string) => void;
  showAdPreview: boolean;
  urduMode?: boolean;
  onToggleUrdu?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  showAdPreview,
  urduMode = false,
  onToggleUrdu
}) => {
  const t = TRANSLATIONS[urduMode ? 'ur' : 'en'];

  // Daily Word State
  const [dailyWordIndex, setDailyWordIndex] = useState(0);
  const currentDailyWord = VOCABULARY_LIST[dailyWordIndex % VOCABULARY_LIST.length];
  const [dailyQuizAnswer, setDailyQuizAnswer] = useState<number | null>(null);
  const [dailyQuizSubmitted, setDailyQuizSubmitted] = useState(false);

  // Play audio pronunciation using Web Speech API
  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextWord = () => {
    setDailyWordIndex((prev) => (prev + 1) % VOCABULARY_LIST.length);
    setDailyQuizAnswer(null);
    setDailyQuizSubmitted(false);
  };

  // Learning Categories config
  const categories = [
    {
      id: 'grammar' as PageId,
      title: t.categories.grammarTitle,
      description: t.categories.grammarDesc,
      icon: BookOpen,
      accent: 'border-blue-200 hover:border-[#123B83]',
      iconBg: 'bg-[#123B83]/10 text-[#123B83]'
    },
    {
      id: 'vocabulary' as PageId,
      title: t.categories.vocabTitle,
      description: t.categories.vocabDesc,
      icon: Sparkles,
      accent: 'border-amber-200 hover:border-[#D4A52C]',
      iconBg: 'bg-[#D4A52C]/10 text-[#D4A52C]'
    },
    {
      id: 'quizzes' as PageId,
      title: t.categories.quizzesTitle,
      description: t.categories.quizzesDesc,
      icon: HelpCircle,
      accent: 'border-blue-200 hover:border-[#123B83]',
      iconBg: 'bg-[#123B83]/10 text-[#123B83]'
    },
    {
      id: 'sentence-correction' as PageId,
      title: t.categories.scTitle,
      description: t.categories.scDesc,
      icon: CheckCircle2,
      accent: 'border-emerald-200 hover:border-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-600'
    },
    {
      id: 'reading' as PageId,
      title: t.categories.readingTitle,
      description: t.categories.readingDesc,
      icon: FileText,
      accent: 'border-indigo-200 hover:border-indigo-600',
      iconBg: 'bg-indigo-50 text-indigo-600'
    },
    {
      id: 'grammar' as PageId,
      targetId: 'subject-verb-agreement',
      title: t.categories.mistakesTitle,
      description: t.categories.mistakesDesc,
      icon: AlertCircle,
      accent: 'border-rose-200 hover:border-rose-600',
      iconBg: 'bg-rose-50 text-rose-600'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <AdsterraAd type="banner-728x90" />
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:py-20 bg-gradient-to-b from-white via-[#F5F7FC] to-[#F5F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-[#D4A52C]/30 text-xs font-semibold text-[#123B83]">
                <GraduationCap className="w-4 h-4 text-[#D4A52C]" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B40] leading-tight tracking-tight">
                {t.hero.titleLine1} <br className="hidden sm:inline" />
                <span className="text-[#123B83] relative inline-block">
                  {t.hero.titleLine2}
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D4A52C] rounded-full"></span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('quizzes')}
                  className="px-6 py-3.5 bg-[#123B83] hover:bg-[#071B40] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center gap-2 border border-[#D4A52C]/30"
                >
                  <span>{t.hero.btnStart}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4A52C]" />
                </button>

                <button
                  onClick={() => onNavigate('grammar')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#071B40] font-bold rounded-xl border border-slate-300 shadow-sm hover:shadow transition-all"
                >
                  {t.hero.btnExplore}
                </button>
              </div>

              {/* Trust markers */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <div className="text-xl font-extrabold text-[#123B83]">18+</div>
                  <div className="text-xs text-slate-500 font-medium">{t.hero.statLessons}</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#D4A52C]">100+</div>
                  <div className="text-xs text-slate-500 font-medium">{t.hero.statVocab}</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#071B40]">100%</div>
                  <div className="text-xs text-slate-500 font-medium">{t.hero.statFree}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Approved Logo Feature Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#123B83] via-[#D4A52C] to-[#071B40] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200/90 flex flex-col items-center text-center">
                  <div className="w-full flex justify-center mb-4">
                    <img
                      src="/public/assets/aistudio/file_00000000648081f49a1f69f463491d73_8e6929c2.png"
                      alt="Fatima ki Academy Official Brand Logo"
                      className="max-h-56 sm:max-h-64 w-auto object-contain drop-shadow"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/logo.png';
                      }}
                    />
                  </div>
                  <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5 text-[#123B83]">
                      <Check className="w-4 h-4 text-[#D4A52C]" />
                      {t.hero.badgePaced}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#123B83]">
                      <Check className="w-4 h-4 text-[#D4A52C]" />
                      {t.hero.badgeNoSignup}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional AdSlot if preview enabled */}
      {showAdPreview && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder slotId="homepage-top-banner" format="banner" />
        </div>
      )}

      {/* Learning Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B40]">
            {t.categories.heading}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {t.categories.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(cat.id, cat.targetId)}
                className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between ${cat.accent}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cat.iconBg} transition-transform group-hover:scale-105`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#071B40] group-hover:text-[#123B83] transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-bold text-[#123B83] group-hover:text-[#D4A52C] transition-colors gap-1.5">
                  <span>{t.categories.btnAction}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <AdsterraAd type="nativeBanner" />
        </div>
      </section>

      {/* Daily English Word Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#071B40] to-[#123B83] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A52C]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Word Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A52C] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  {t.dailyWord.badge}
                </span>
                <button
                  onClick={handleNextWord}
                  className="text-xs text-slate-300 hover:text-white underline underline-offset-4 font-medium"
                >
                  {t.dailyWord.browseNext}
                </button>
              </div>

              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {currentDailyWord.word}
                </h3>
                <span className="text-sm font-mono text-slate-300">
                  {currentDailyWord.phonetic}
                </span>
                <span className="text-xs text-[#D4A52C] italic">
                  ({currentDailyWord.partOfSpeech})
                </span>
                <button
                  onClick={() => handleSpeak(currentDailyWord.word)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Listen to pronunciation"
                  aria-label="Listen to pronunciation"
                >
                  <Volume2 className="w-4 h-4 text-[#D4A52C]" />
                </button>
              </div>

              <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                <strong>{t.dailyWord.meaningLabel}</strong> {currentDailyWord.meaning}
              </p>

              {/* Urdu Translation */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/10">
                <p className="text-xs text-amber-200 font-semibold mb-1">{t.dailyWord.urduLabel}</p>
                <p className="text-base sm:text-lg font-serif text-white tracking-wide">
                  {currentDailyWord.urduMeaning}
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-200">
                <strong className="text-[#D4A52C]">{t.dailyWord.exampleLabel}</strong> "{currentDailyWord.example}"
              </div>
            </div>

            {/* Quick Practice Question for Word */}
            <div className="lg:col-span-5 bg-white text-slate-800 rounded-2xl p-5 shadow-lg border border-slate-100 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#123B83]">
                <HelpCircle className="w-4 h-4 text-[#D4A52C]" />
                <span>{t.dailyWord.quizLabel}</span>
              </div>
              <p className="text-xs font-medium text-slate-700">
                {t.dailyWord.quizPrompt} <strong>"{currentDailyWord.word}"</strong>?
              </p>

              <div className="space-y-2">
                {currentDailyWord.synonyms.concat(currentDailyWord.antonyms.slice(0, 1)).slice(0, 3).map((opt, i) => {
                  const isCorrect = currentDailyWord.synonyms.includes(opt);
                  const isSelected = dailyQuizAnswer === i;

                  let btnStyle = 'border-slate-200 hover:border-[#123B83] text-slate-700 bg-slate-50';
                  if (dailyQuizSubmitted) {
                    if (isCorrect) btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                    else if (isSelected && !isCorrect) btnStyle = 'border-rose-400 bg-rose-50 text-rose-800';
                  }

                  return (
                    <button
                      key={i}
                      disabled={dailyQuizSubmitted}
                      onClick={() => {
                        setDailyQuizAnswer(i);
                        setDailyQuizSubmitted(true);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs border transition-colors flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {dailyQuizSubmitted && isCorrect && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                    </button>
                  );
                })}
              </div>

              {dailyQuizSubmitted && (
                <div className="text-xs text-emerald-700 font-medium bg-emerald-50 p-2 rounded border border-emerald-200">
                  {urduMode
                    ? 'شاباش! الفاظ کے مترادفات یاد کرنے سے آپ کی گفتگو اور تحریر میں خوبصورتی آتی ہے۔'
                    : 'Great practice! Learning synonyms builds expressive confidence.'}
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('vocabulary')}
                  className="w-full text-center text-xs font-bold text-[#123B83] hover:text-[#071B40] underline underline-offset-4"
                >
                  {t.dailyWord.openVocab}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <AdsterraAd type="smartlink" />
      </div>

      {/* Featured Lessons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B40]">
              {urduMode ? 'منتخب انگریزی اسباق (Featured Lessons)' : 'Featured English Lessons'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {urduMode
                ? 'فارمولوں، مثالوں، اور انٹرایکٹو مشقوں کے ساتھ مقبول اسباق۔'
                : 'Popular starter modules with formulas, correct examples, and practice exercises.'}
            </p>
          </div>
          <button
            onClick={() => onNavigate('grammar')}
            className="text-xs sm:text-sm font-bold text-[#123B83] hover:text-[#071B40] flex items-center gap-1 shrink-0"
          >
            <span>{urduMode ? 'تمام گرامر اسباق دیکھیں' : 'View All Grammar Lessons'}</span>
            <ArrowRight className="w-4 h-4 text-[#D4A52C]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GRAMMAR_LESSONS.slice(0, 3).map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-[#123B83] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {lesson.category}
                  </span>
                  <span className="text-slate-500 font-medium">
                    {lesson.level}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#071B40] mb-2 line-clamp-1">
                  {lesson.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {lesson.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('grammar', lesson.id)}
                  className="w-full py-2 px-3 text-xs font-bold text-[#123B83] hover:bg-[#123B83] hover:text-white rounded-lg border border-[#123B83]/30 transition-all text-center"
                >
                  {urduMode ? 'سبق پڑھیں' : 'Start Lesson'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Fatima ki Academy */}
      <section className="bg-white py-16 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B40]">
              {t.whyUs.heading}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t.whyUs.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#123B83] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#071B40] mb-1">{t.whyUs.item1Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.whyUs.item1Desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4A52C] flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#071B40] mb-1">{t.whyUs.item2Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.whyUs.item2Desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#071B40] mb-1">{t.whyUs.item3Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.whyUs.item3Desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#071B40] mb-1">{t.whyUs.item4Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.whyUs.item4Desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#071B40] mb-1">{t.whyUs.item5Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.whyUs.item5Desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#071B40] mb-1">{t.whyUs.item6Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.whyUs.item6Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B40]">
              {urduMode ? 'تازہ ترین تعلیمی مضامین (Educational Articles)' : 'Latest Educational Articles'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {urduMode
                ? 'انگریزی سیکھنے، امتحانات کی تیاری اور اسٹڈی ٹپس پر ماہرین کے مضامین۔'
                : 'Read in-depth guides, study strategies, and grammar tips written by our educators.'}
            </p>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="text-xs sm:text-sm font-bold text-[#123B83] hover:text-[#071B40] flex items-center gap-1 shrink-0"
          >
            <span>{urduMode ? 'تمام مضامین دیکھیں' : 'View All Articles'}</span>
            <ArrowRight className="w-4 h-4 text-[#D4A52C]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                  <span className="text-[#123B83] font-semibold">{article.category}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-[#071B40] mb-2 line-clamp-2 hover:text-[#123B83] transition-colors cursor-pointer"
                  onClick={() => onNavigate('blog', article.id)}
                >
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  {article.publishedDate}
                </span>
                <button
                  onClick={() => onNavigate('blog', article.id)}
                  className="text-xs font-bold text-[#123B83] hover:text-[#D4A52C] flex items-center gap-1 transition-colors"
                >
                  <span>{urduMode ? 'مضمون پڑھیں' : 'Read Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
