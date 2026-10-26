import { SentenceCorrectionItem } from '../types';

export const SENTENCE_CORRECTION_DATA: SentenceCorrectionItem[] = [
  {
    id: 'sc-1',
    incorrectSentence: 'She do not has any brothers or sisters.',
    options: [
      'She do not have any brothers or sisters.',
      'She does not have any brothers or sisters.',
      'She does not has any brothers or sisters.',
      'She is not having any brothers or sisters.'
    ],
    correctIndex: 1,
    correctSentence: 'She does not have any brothers or sisters.',
    grammarRule: 'Third-person singular negative uses "does not" + the base verb "have" (never "has" after the auxiliary verb "does").',
    category: 'Subject-Verb & Auxiliaries'
  },
  {
    id: 'sc-2',
    incorrectSentence: 'I look forward to meet you at the academy.',
    options: [
      'I look forward to meeting you at the academy.',
      'I look forward for meet you at the academy.',
      'I look forward to have met you at the academy.',
      'I am look forward to meet you at the academy.'
    ],
    correctIndex: 0,
    correctSentence: 'I look forward to meeting you at the academy.',
    grammarRule: 'In the phrasal verb "look forward to", "to" functions as a preposition, which must be followed by a gerund (-ing form), not a base infinitive.',
    category: 'Gerunds & Prepositions'
  },
  {
    id: 'sc-3',
    incorrectSentence: 'He told to me that the library was closed.',
    options: [
      'He told me that the library was closed.',
      'He said me that the library was closed.',
      'He told to me the library closed.',
      'He told that to me the library was closed.'
    ],
    correctIndex: 0,
    correctSentence: 'He told me that the library was closed.',
    grammarRule: 'The verb "tell" takes an indirect personal object directly without "to" (e.g., "told me"). Conversely, "say" requires "to" ("said to me").',
    category: 'Reported Speech Verbs'
  },
  {
    id: 'sc-4',
    incorrectSentence: 'Every students must submit their homework on Friday.',
    options: [
      'Every student must submit his or her homework on Friday.',
      'Every student must submit their homework on Friday.',
      'All student must submit their homework on Friday.',
      'Every students must submit homework on Friday.'
    ],
    correctIndex: 1,
    correctSentence: 'Every student must submit their homework on Friday.',
    grammarRule: '"Every" must always be followed by a singular countable noun ("student", not "students"). In modern standard English, singular/gender-neutral "their" is widely accepted.',
    category: 'Determiners & Agreement'
  },
  {
    id: 'sc-5',
    incorrectSentence: 'She gave me many good advices before my interview.',
    options: [
      'She gave me many good advice before my interview.',
      'She gave me much good advice before my interview.',
      'She gave me a lot of good advices before my interview.',
      'She gave me an advice before my interview.'
    ],
    correctIndex: 1,
    correctSentence: 'She gave me much good advice before my interview.',
    grammarRule: '"Advice" is an uncountable noun. It cannot be pluralized as "advices" and cannot take "many" or "an". Use "much advice" or "pieces of advice".',
    category: 'Countable vs Uncountable Nouns'
  },
  {
    id: 'sc-6',
    incorrectSentence: 'If I was you, I would accept the scholarship.',
    options: [
      'If I am you, I would accept the scholarship.',
      'If I were you, I would accept the scholarship.',
      'If I had been you, I will accept the scholarship.',
      'If I be you, I would accept the scholarship.'
    ],
    correctIndex: 1,
    correctSentence: 'If I were you, I would accept the scholarship.',
    grammarRule: 'In the Second Conditional for hypothetical or counterfactual statements, standard subjunctive English uses "were" for all subjects ("If I were you", "If she were here").',
    category: 'Conditionals & Subjunctive'
  },
  {
    id: 'sc-7',
    incorrectSentence: 'Despite of the heavy rain, they arrived on time.',
    options: [
      'Despite the heavy rain, they arrived on time.',
      'In spite the heavy rain, they arrived on time.',
      'Despite of heavy rain, they arrived on time.',
      'Although of the heavy rain, they arrived on time.'
    ],
    correctIndex: 0,
    correctSentence: 'Despite the heavy rain, they arrived on time.',
    grammarRule: '"Despite" never takes the preposition "of". We say "despite the rain" or "in spite OF the rain".',
    category: 'Prepositional Phrases'
  },
  {
    id: 'sc-8',
    incorrectSentence: 'He is married with a doctor from Lahore.',
    options: [
      'He is married to a doctor from Lahore.',
      'He is married by a doctor from Lahore.',
      'He is married at a doctor from Lahore.',
      'He is married from a doctor from Lahore.'
    ],
    correctIndex: 0,
    correctSentence: 'He is married to a doctor from Lahore.',
    grammarRule: 'The adjective "married" takes the preposition "to" ("married to someone"), not "with".',
    category: 'Fixed Prepositions'
  },
  {
    id: 'sc-9',
    incorrectSentence: 'She is more taller than her sister.',
    options: [
      'She is much taller than her sister.',
      'She is taller than her sister.',
      'She is more tall than her sister.',
      'She is tall than her sister.'
    ],
    correctIndex: 1,
    correctSentence: 'She is taller than her sister.',
    grammarRule: 'Never use double comparatives. Do not pair "more" with single-syllable adjectives ending in "-er". Say "taller", not "more taller".',
    category: 'Adjective Comparison'
  },
  {
    id: 'sc-10',
    incorrectSentence: 'You are coming to the class, isn\'t it?',
    options: [
      'You are coming to the class, aren\'t you?',
      'You are coming to the class, don\'t you?',
      'You are coming to the class, won\'t you?',
      'You are coming to the class, wasn\'t it?'
    ],
    correctIndex: 0,
    correctSentence: 'You are coming to the class, aren\'t you?',
    grammarRule: 'Question tags must match the subject pronoun and auxiliary verb of the main clause. With "You are", the negative tag is "aren\'t you?".',
    category: 'Question Tags'
  },
  {
    id: 'sc-11',
    incorrectSentence: 'Seldom I have seen such a beautiful sunrise.',
    options: [
      'Seldom have I seen such a beautiful sunrise.',
      'Seldom I saw such a beautiful sunrise.',
      'Seldom did I seen such a beautiful sunrise.',
      'Seldom had I saw such a beautiful sunrise.'
    ],
    correctIndex: 0,
    correctSentence: 'Seldom have I seen such a beautiful sunrise.',
    grammarRule: 'Negative and restrictive adverbs (seldom, rarely, hardly, scarcely, never) placed at the beginning of a clause trigger auxiliary-subject inversion ("have I seen").',
    category: 'Negative Inversion'
  },
  {
    id: 'sc-12',
    incorrectSentence: 'She returned back the library book yesterday.',
    options: [
      'She returned the library book yesterday.',
      'She returned back of the library book yesterday.',
      'She has returned back the library book yesterday.',
      'She returned to back the library book yesterday.'
    ],
    correctIndex: 0,
    correctSentence: 'She returned the library book yesterday.',
    grammarRule: '"Return" already means "to give back" or "to go back". Adding the word "back" creates an unnecessary redundancy (tautology).',
    category: 'Redundancy & Wordiness'
  }
];
