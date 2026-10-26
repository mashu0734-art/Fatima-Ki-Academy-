import React from 'react';
import { PageId } from '../../types';
import { BookOpen, GraduationCap, Target, Heart, Check, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#071B40] via-[#123B83] to-[#071B40] text-white rounded-3xl p-6 sm:p-12 shadow-lg relative overflow-hidden text-center sm:text-left">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <GraduationCap className="w-4 h-4" />
            <span>Educational Mission & Values</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Fatima ki Academy
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            A free, open-access English educational initiative designed to empower beginners, school students, and exam candidates with clear grammar rules, practical vocabulary, and interactive practice.
          </p>
        </div>
      </div>

      {/* Main Narrative */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-12 shadow-sm space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
        {/* Purpose */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#071B40] flex items-center gap-2">
            <Target className="w-5 h-5 text-[#123B83]" />
            <span>Our Core Purpose</span>
          </h2>
          <p>
            English has become an indispensable global bridge for higher education, competitive examinations, career development, and international communication. Yet, many learners struggle with confusing grammar terminology, complicated textbook rules, and a lack of self-paced practice tools.
          </p>
          <p>
            <strong>Fatima ki Academy</strong> was created to solve this problem by providing structured, easily digestible lessons that focus on clarity, real-world examples, and immediate feedback.
          </p>
        </section>

        {/* What We Offer */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-bold text-[#071B40] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#D4A52C]" />
            <span>What Learners Find Here</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-[#F5F7FC] rounded-2xl border border-blue-50 space-y-1">
              <strong className="text-[#071B40] block">Comprehensive Grammar Lessons:</strong>
              <p className="text-slate-600">
                From Parts of Speech to all 12 English Tenses, Active & Passive voice, and Subject-Verb agreement.
              </p>
            </div>
            <div className="p-4 bg-[#F5F7FC] rounded-2xl border border-blue-50 space-y-1">
              <strong className="text-[#071B40] block">Vocabulary with Urdu Translations:</strong>
              <p className="text-slate-600">
                Everyday words, idioms, audio pronunciation, and interactive 3D flashcards.
              </p>
            </div>
            <div className="p-4 bg-[#F5F7FC] rounded-2xl border border-blue-50 space-y-1">
              <strong className="text-[#071B40] block">Instant Interactive Quizzes:</strong>
              <p className="text-slate-600">
                Self-grading exercises with detailed explanations for every correct and incorrect answer.
              </p>
            </div>
            <div className="p-4 bg-[#F5F7FC] rounded-2xl border border-blue-50 space-y-1">
              <strong className="text-[#071B40] block">Sentence Correction & Reading:</strong>
              <p className="text-slate-600">
                Practical reading passages and sentence error analysis to build natural fluency.
              </p>
            </div>
          </div>
        </section>

        {/* Our Educational Philosophy */}
        <section className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-bold text-[#071B40] flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            <span>Our Educational Philosophy: "Learn • Practice • Grow"</span>
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#D4A52C] shrink-0 mt-1" />
              <span>
                <strong>Learn:</strong> Grasp one concept at a time through simple explanations without overwhelming jargon.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#D4A52C] shrink-0 mt-1" />
              <span>
                <strong>Practice:</strong> Reinforce new knowledge through interactive quizzes and instant correction exercises.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#D4A52C] shrink-0 mt-1" />
              <span>
                <strong>Grow:</strong> Build long-term confidence in speaking, writing essays, and acing academic examinations.
              </span>
            </li>
          </ul>
        </section>

        {/* Free and Accessible */}
        <section className="p-6 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl border border-blue-100 space-y-2 text-xs sm:text-sm">
          <h3 className="font-bold text-[#071B40]">Always Free & Accessible</h3>
          <p className="text-slate-700">
            Education should have no financial barriers. All materials on Fatima ki Academy remain accessible free of charge, with zero required registration, no hidden memberships, and no locked content.
          </p>
        </section>

        {/* CTA */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => onNavigate('grammar')}
            className="px-6 py-3.5 bg-[#123B83] hover:bg-[#071B40] text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 text-xs sm:text-sm"
          >
            <span>Begin Your Learning Journey</span>
            <ArrowRight className="w-4 h-4 text-[#D4A52C]" />
          </button>
        </div>
      </div>
    </div>
  );
};
