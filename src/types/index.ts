export type PageId =
  | 'home'
  | 'grammar'
  | 'vocabulary'
  | 'quizzes'
  | 'sentence-correction'
  | 'reading'
  | 'blog'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface GrammarLesson {
  id: string;
  category: string;
  title: string;
  urduTitle?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  urduSummary?: string;
  introduction: string;
  urduIntroduction?: string;
  explanation: string[];
  urduExplanation?: string[];
  rules: { title: string; rule: string; example: string; urduRule?: string }[];
  examples: { correct: string; incorrect: string; reason: string; urduReason?: string }[];
  commonMistakes: { mistake: string; correction: string; explanation: string; urduExplanation?: string }[];
  practiceQuestions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    urduExplanation?: string;
  }[];
  relatedLessonIds: string[];
}

export interface VocabularyWord {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  urduMeaning: string;
  category: 'Everyday Basics' | 'Academic & Exams' | 'Business & Work' | 'Idioms & Phrases' | 'Confused Words';
  synonyms: string[];
  antonyms: string[];
  example: string;
  urduExample?: string;
  confusedWith?: {
    word: string;
    meaning: string;
    example: string;
  };
}

export interface QuizQuestion {
  id: string;
  category: 'Grammar' | 'English Tenses' | 'Vocabulary' | 'Prepositions' | 'Sentence Correction' | 'General English';
  question: string;
  urduQuestion?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  urduExplanation?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Challenging';
}

export interface SentenceCorrectionItem {
  id: string;
  incorrectSentence: string;
  options: string[];
  correctIndex: number;
  correctSentence: string;
  grammarRule: string;
  urduGrammarRule?: string;
  category: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  urduTitle?: string;
  difficulty: 'Beginner' | 'Intermediate';
  estimatedMinutes: number;
  content: string[];
  urduSummary?: string;
  keyVocabulary: { word: string; meaning: string; urduMeaning?: string }[];
  questions: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    urduExplanation?: string;
  }[];
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  publishedDate: string;
  readTime: string;
  category: string;
  excerpt: string;
  headings: {
    title: string;
    content: string[];
    tips?: string[];
  }[];
  keyTakeaways: string[];
  relatedTopicId?: string;
}
