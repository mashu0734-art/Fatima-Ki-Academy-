export type Language = 'en' | 'ur';

export interface Translations {
  nav: {
    home: string;
    grammar: string;
    vocabulary: string;
    quizzes: string;
    sentenceCorrection: string;
    reading: string;
    blog: string;
    about: string;
    contact: string;
    startLearning: string;
    searchPlaceholder: string;
    searchLabel: string;
    close: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    btnStart: string;
    btnExplore: string;
    statLessons: string;
    statVocab: string;
    statFree: string;
    badgePaced: string;
    badgeNoSignup: string;
  };
  categories: {
    heading: string;
    subheading: string;
    btnAction: string;
    grammarTitle: string;
    grammarDesc: string;
    vocabTitle: string;
    vocabDesc: string;
    quizzesTitle: string;
    quizzesDesc: string;
    scTitle: string;
    scDesc: string;
    readingTitle: string;
    readingDesc: string;
    mistakesTitle: string;
    mistakesDesc: string;
  };
  dailyWord: {
    badge: string;
    browseNext: string;
    meaningLabel: string;
    urduLabel: string;
    exampleLabel: string;
    quizLabel: string;
    quizPrompt: string;
    openVocab: string;
  };
  whyUs: {
    heading: string;
    subheading: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    item4Title: string;
    item4Desc: string;
    item5Title: string;
    item5Desc: string;
    item6Title: string;
    item6Desc: string;
  };
  grammar: {
    heading: string;
    subtitle: string;
    topicsTitle: string;
    searchTopics: string;
    allCat: string;
    rulesTitle: string;
    comparisonTitle: string;
    mistakesTitle: string;
    quizTitle: string;
    resetBtn: string;
    correctBadge: string;
    incorrectBadge: string;
    whyLabel: string;
    startLesson: string;
  };
  quizzes: {
    heading: string;
    subtitle: string;
    catLabel: string;
    questionOf: string;
    scoreLabel: string;
    nextBtn: string;
    finishBtn: string;
    restartBtn: string;
    reviewTitle: string;
    correctAlert: string;
    incorrectAlert: string;
  };
  sentenceCorrection: {
    heading: string;
    subtitle: string;
    challengeOf: string;
    faultyLabel: string;
    promptLabel: string;
    correctAlert: string;
    ruleLabel: string;
    nextBtn: string;
    restartBtn: string;
  };
  reading: {
    heading: string;
    subtitle: string;
    minRead: string;
    keyVocabTitle: string;
    questionsTitle: string;
    questionsSubtitle: string;
  };
  footer: {
    tagline: string;
    description: string;
    modulesTitle: string;
    articlesTitle: string;
    institutionalTitle: string;
    rightsReserved: string;
    guideBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      grammar: 'Grammar',
      vocabulary: 'Vocabulary',
      quizzes: 'English Quizzes',
      sentenceCorrection: 'Sentence Correction',
      reading: 'Reading Practice',
      blog: 'Blog',
      about: 'About Us',
      contact: 'Contact Us',
      startLearning: 'Start Learning',
      searchPlaceholder: 'Search lessons, words, quizzes...',
      searchLabel: 'Search...',
      close: 'Close'
    },
    hero: {
      badge: '100% Free English Learning & Practice Platform',
      titleLine1: 'Improve Your English,',
      titleLine2: 'One Step at a Time',
      subtitle: 'Learn English grammar, expand your vocabulary, practise sentences, and test your knowledge with free interactive lessons designed for beginners and students.',
      btnStart: 'Start Practising',
      btnExplore: 'Explore Lessons',
      statLessons: '18+ Grammar Modules',
      statVocab: '100+ Vocabulary Cards',
      statFree: '100% Free Access',
      badgePaced: 'Self-Paced Learning',
      badgeNoSignup: 'No Sign-up Needed'
    },
    categories: {
      heading: 'Explore Learning Categories',
      subheading: 'Structured step-by-step pathways for learners from basic grammar rules to confident sentence formation.',
      btnAction: 'Start Practice',
      grammarTitle: 'English Grammar',
      grammarDesc: 'Master the 8 parts of speech, all 12 tenses, active/passive voice, and sentence structures.',
      vocabTitle: 'Vocabulary Builder',
      vocabDesc: 'Expand your word bank with everyday terms, Urdu translations, synonyms, and interactive flashcards.',
      quizzesTitle: 'Interactive Quizzes',
      quizzesDesc: 'Test your understanding with real-time feedback, detailed explanations, and score tracking.',
      scTitle: 'Sentence Correction',
      scDesc: 'Identify common errors in sentence structure and understand the precise grammar rule applied.',
      readingTitle: 'Reading Comprehension',
      readingDesc: 'Read original beginner and intermediate passages and answer comprehension questions.',
      mistakesTitle: 'Common English Mistakes',
      mistakesDesc: 'Learn how to spot and fix frequent pitfalls like subject-verb disagreement and misused prepositions.'
    },
    dailyWord: {
      badge: 'Word of the Day',
      browseNext: 'Browse Next Word →',
      meaningLabel: 'Meaning:',
      urduLabel: 'Urdu Meaning / اردو ترجمہ:',
      exampleLabel: 'Example:',
      quizLabel: 'Quick Meaning Check',
      quizPrompt: 'Which word is the closest synonym for',
      openVocab: 'Open Full Vocabulary Builder (100+ Words) →'
    },
    whyUs: {
      heading: 'Why Learn With Fatima ki Academy?',
      subheading: 'Built specifically to overcome real-world hurdles faced by English learners and students.',
      item1Title: '100% Free Learning',
      item1Desc: 'No subscriptions, hidden paywalls, or forced logins. All lessons and quizzes are open to everyone.',
      item2Title: 'Beginner-Friendly Explanations',
      item2Desc: 'Concepts are explained in clean, straightforward English accompanied by Urdu translations where helpful.',
      item3Title: 'Interactive Real-Time Exercises',
      item3Desc: 'Every lesson features instant quizzes with answers and rule explanations so you learn from your mistakes immediately.',
      item4Title: 'Useful Everyday Examples',
      item4Desc: 'We focus on real sentences you actually use in conversation, school exams, emails, and job interviews.',
      item5Title: 'Self-Paced Practice',
      item5Desc: 'Study at your own rhythm whenever you have 5 minutes of free time on your mobile phone or computer.',
      item6Title: '100% Mobile Optimized',
      item6Desc: 'Built lightweight for fast loading even on slower mobile connections, with comfortable touch buttons.'
    },
    grammar: {
      heading: 'English Grammar & Tenses Masterclass',
      subtitle: 'From the 8 parts of speech to all 12 English tenses, study structured lessons with formulas, side-by-side correct examples, and practice exercises.',
      topicsTitle: 'Grammar Topics',
      searchTopics: 'Filter topics...',
      allCat: 'All',
      rulesTitle: 'Rules & Formulas',
      comparisonTitle: 'Side-by-Side Comparison',
      mistakesTitle: 'Frequent Pitfalls to Avoid',
      quizTitle: 'Lesson Practice Quiz',
      resetBtn: 'Reset Questions',
      correctBadge: 'Correct English:',
      incorrectBadge: 'Incorrect Mistake:',
      whyLabel: 'Why:',
      startLesson: 'Start Lesson'
    },
    quizzes: {
      heading: 'English Proficiency Quizzes',
      subtitle: 'Test your grasp of tenses, grammar rules, prepositions, and vocabulary with instant feedback and comprehensive explanations.',
      catLabel: 'Category:',
      questionOf: 'Question',
      scoreLabel: 'Score:',
      nextBtn: 'Next Question',
      finishBtn: 'View Final Results',
      restartBtn: 'Restart Quiz',
      reviewTitle: 'Review Your Answers:',
      correctAlert: 'Correct Answer!',
      incorrectAlert: 'Explanation of Grammar Rule:'
    },
    sentenceCorrection: {
      heading: 'Sentence Correction Practice',
      subtitle: 'Spot syntax mistakes, gerund vs infinitive traps, double prepositions, and improper auxiliary verbs with instant grammatical explanations.',
      challengeOf: 'Challenge',
      faultyLabel: 'Faulty Sentence (Find the Error):',
      promptLabel: 'Select the correct grammatical reconstruction:',
      correctAlert: 'Correct Correction!',
      ruleLabel: 'Grammar Rule & Reason:',
      nextBtn: 'Next Correction Challenge',
      restartBtn: 'Restart Sentence Practice'
    },
    reading: {
      heading: 'English Reading Practice',
      subtitle: 'Read original passages at beginner and intermediate levels, learn contextual vocabulary, and test your understanding with comprehension questions.',
      minRead: 'min read',
      keyVocabTitle: 'Key Vocabulary from this Passage',
      questionsTitle: 'Comprehension Questions',
      questionsSubtitle: 'Answer based on what you read in the passage'
    },
    footer: {
      tagline: 'Learn • Practice • Grow',
      description: 'Fatima ki Academy is a free, beginner-friendly English educational platform dedicated to helping students and learners worldwide master grammar, expand vocabulary, and practice reading and sentence formation.',
      modulesTitle: 'Learning Modules',
      articlesTitle: 'Articles & Guides',
      institutionalTitle: 'Institutional',
      rightsReserved: 'All rights reserved. Free Educational Resource.',
      guideBtn: 'Cloudflare Pages Deploy Guide'
    }
  },
  ur: {
    nav: {
      home: 'ہوم (Home)',
      grammar: 'انگریزی گرامر (Grammar)',
      vocabulary: 'ذخیرہ الفاظ (Vocabulary)',
      quizzes: 'انگلش کوئز (Quizzes)',
      sentenceCorrection: 'جملوں کی درستی (Correction)',
      reading: 'ریڈنگ پریکٹس (Reading)',
      blog: 'تعلیمی مضامین (Blog)',
      about: 'ہمارے بارے میں (About)',
      contact: 'رابطہ کریں (Contact)',
      startLearning: 'پڑھائی شروع کریں',
      searchPlaceholder: 'اسباق، الفاظ یا کوئز تلاش کریں...',
      searchLabel: 'تلاش کریں...',
      close: 'بند کریں'
    },
    hero: {
      badge: '100% مفت انگلش لرننگ اور پریکٹس پلیٹ فارم',
      titleLine1: 'مرحلہ وار اپنی انگریزی',
      titleLine2: 'بہتر اور روانی دار بنائیں',
      subtitle: 'انگریزی گرامر سیکھیں، نئے الفاظ یاد کریں، جملوں کی غلطیاں درست کریں اور مفت امتحانی کوئزز کے ذریعے اپنی تیاری کو پرکھیں۔',
      btnStart: 'مشق شروع کریں',
      btnExplore: 'تمام اسباق دیکھیں',
      statLessons: '18+ مکمل گرامر اسباق',
      statVocab: '100+ مفید الفاظ کے کارڈز',
      statFree: '100% مفت اور کھلی رسائی',
      badgePaced: 'اپنی رفتار سے سیکھیں',
      badgeNoSignup: 'بغیر لاگ ان کے مفت'
    },
    categories: {
      heading: 'تعلیمی شعبے اور اسباق',
      subheading: 'ابتدائی قواعد سے لے کر پراعتماد انگریزی بولنے اور لکھنے تک کے لیے مکمل اور آسان رہنمائی۔',
      btnAction: 'مشق کریں',
      grammarTitle: 'انگریزی گرامر (Grammar)',
      grammarDesc: 'اجزائے کلام (Parts of Speech)، تمام 12 ٹینسز، ایکٹو پیریو، اور جملہ سازی کے بنیادی اصول۔',
      vocabTitle: 'ذخیرہ الفاظ (Vocabulary)',
      vocabDesc: 'روزمرہ الفاظ، اردو ترجمہ، مترادفات اور 3D فلیش کارڈز کے ساتھ نئے الفاظ یاد کریں۔',
      quizzesTitle: 'انٹرایکٹو کوئز (Quizzes)',
      quizzesDesc: 'فوری نتائج، اسکور ٹریکنگ اور اصولوں کی اردو وضاحت کے ساتھ کوئز حل کریں۔',
      scTitle: 'جملوں کی درستی (Correction)',
      scDesc: 'انگریزی کے عام غلط جملوں میں سے غلطی پہچانیں اور درست اصول سمجھیں۔',
      readingTitle: 'پڑھنے کی فہم (Reading)',
      readingDesc: 'آسان اور درمیانی درجے کے پیراگراف پڑھیں اور سوالات کے جوابات دے کر فہم بڑھائیں۔',
      mistakesTitle: 'عام انگریزی غلطیاں (Mistakes)',
      mistakesDesc: 'انگریزی بولتے اور لکھتے وقت سب سے زیادہ ہونے والی غلطیوں سے بچنے کا طریقہ۔'
    },
    dailyWord: {
      badge: 'آج کا منتخب لفظ',
      browseNext: 'اگلا لفظ دیکھیں ←',
      meaningLabel: 'انگریزی معنی:',
      urduLabel: 'اردو ترجمہ:',
      exampleLabel: 'جملے میں استعمال:',
      quizLabel: 'فوری معنی کی جانچ',
      quizPrompt: 'اس لفظ کا قریبی ہم معنی لفظ منتخب کریں:',
      openVocab: 'تمام 100+ الفاظ کی ڈکشنری کھولیں ←'
    },
    whyUs: {
      heading: 'فاطمہ کی اکیڈمی کا انتخاب کیوں کریں؟',
      subheading: 'اردو بولنے والے طلباء اور سیکھنے والوں کے حقیقی مسائل کو حل کرنے کے لیے خصوصی طور پر تیار کردہ۔',
      item1Title: '100% مفت تعلیم',
      item1Desc: 'کوئی فیس یا خفیہ چارجز نہیں؛ تمام اسباق، کارڈز اور کوئزز سب کے لیے بلا معاوضہ کھلے ہیں۔',
      item2Title: 'آسان اور عام فہم انداز',
      item2Desc: 'پیچیدہ گرامر کی کتابوں کے بجائے آسان انگلش اور اردو ترجمے کے ساتھ سمجھایا گیا ہے۔',
      item3Title: 'فوری نتیجہ اور جانچ',
      item3Desc: 'ہر سوال کا جواب دیتے ہی فوری طور پر درست یا غلط کی نشاندہی اور قاعدے کی وضاحت ملتی ہے۔',
      item4Title: 'روزمرہ زندگی کی مثالیں',
      item4Desc: 'وہ جملے سکھائے جاتے ہیں جو آپ روزمرہ بات چیت، اسکول امتحانات اور انٹرویوز میں بولتے ہیں۔',
      item5Title: 'اپنی سہولت کے مطابق',
      item5Desc: 'جب بھی آپ کے پاس 5 منٹ کا وقت ہو، اپنے موبائل یا کمپیوٹر پر بغیر کسی پریشانی کے پریکٹس کریں۔',
      item6Title: 'موبائل فرینڈلی ڈیزائن',
      item6Desc: 'ہلکی پھلکی اور تیز رفتار ویب سائٹ جو سست انٹرنیٹ پر بھی فورا لوڈ ہوتی ہے۔'
    },
    grammar: {
      heading: 'انگریزی گرامر اور تمام 12 ٹینسز',
      subtitle: 'اجزائے کلام سے لے کر تمام 12 زمانوں کے فارمولے، مثالیں، غلطیوں کی نشاندہی اور امتحانی پریکٹس۔',
      topicsTitle: 'گرامر کے موضوعات',
      searchTopics: 'موضوع تلاش کریں...',
      allCat: 'تمام اسباق',
      rulesTitle: 'قواعد اور فارمولے (Rules & Formulas)',
      comparisonTitle: 'صحیح اور غلط کا موازنہ (Comparison)',
      mistakesTitle: 'عام غلطیاں جن سے بچنا ضروری ہے',
      quizTitle: 'سبق کا امتحانی کوئز (Practice Quiz)',
      resetBtn: 'سوالات ری سیٹ کریں',
      correctBadge: 'درست انگریزی:',
      incorrectBadge: 'غلط جملہ:',
      whyLabel: 'وجہ اور قاعدہ:',
      startLesson: 'سبق پڑھیں'
    },
    quizzes: {
      heading: 'انگلش قابلیت کے کوئزز',
      subtitle: 'ٹینسز، گرامر قواعد، حروف ربط اور ذخیرہ الفاظ کو دلچسپ سوالات اور فوری جوابات کے ساتھ آزمائیں۔',
      catLabel: 'شعبہ منتخب کریں:',
      questionOf: 'سوال نمبر',
      scoreLabel: 'حاصل کردہ نمبر:',
      nextBtn: 'اگلا سوال',
      finishBtn: 'نتیجہ دیکھیں',
      restartBtn: 'کوئز دوبارہ حل کریں',
      reviewTitle: 'اپنے تمام جوابات کا جائزہ لیں:',
      correctAlert: 'شاباش! درست جواب!',
      incorrectAlert: 'گرامر اصول کی وضاحت:'
    },
    sentenceCorrection: {
      heading: 'جملوں کی درستی کی مشق (Sentence Correction)',
      subtitle: 'غلط جملوں کو درست کرنا سیکھیں، گرامر کے اصولوں کو سمجھیں اور امتحانات میں پورے نمبر حاصل کریں۔',
      challengeOf: 'چیلنج نمبر',
      faultyLabel: 'غلط جملہ (غلطی تلاش کریں):',
      promptLabel: 'درست گرامر والا متبادل جملہ منتخب کریں:',
      correctAlert: 'بہترین! بالکل درست تصحیح!',
      ruleLabel: 'گرامر کا اصول اور وجہ:',
      nextBtn: 'اگلا تصحیح چیلنج',
      restartBtn: 'دوبارہ مشق شروع کریں'
    },
    reading: {
      heading: 'انگریزی پڑھنے اور فہم کی مشق (Reading Practice)',
      subtitle: 'آسان اور دلچسپ مضامین پڑھیں، نئے الفاظ کے معانی سیکھیں اور فہم کے سوالات حل کریں۔',
      minRead: 'منٹ کا مطالعہ',
      keyVocabTitle: 'اس پیراگراف کے اہم الفاظ اور معانی',
      questionsTitle: 'فہم کے سوالات (Comprehension Questions)',
      questionsSubtitle: 'اوپر دیے گئے پیراگراف کو پڑھ کر درست جواب چنیں'
    },
    footer: {
      tagline: 'سیکھیں • مشق کریں • آگے بڑھیں',
      description: 'فاطمہ کی اکیڈمی طلباء اور انگریزی سیکھنے کے خواہش مند افراد کے لیے ایک مکمل مفت تعلیمی پلیٹ فارم ہے جس کا مقصد گرامر، الفاظ اور بول چال میں مہارت دلانا ہے۔',
      modulesTitle: 'تعلیمی شعبے',
      articlesTitle: 'رہنما مضامین',
      institutionalTitle: 'معلومات و پالیسی',
      rightsReserved: 'جملہ حقوق محفوظ ہیں۔ بلا معاوضہ تعلیمی پلیٹ فارم۔',
      guideBtn: 'کلاؤڈ فلیئر پیجز گائیڈ'
    }
  }
};
