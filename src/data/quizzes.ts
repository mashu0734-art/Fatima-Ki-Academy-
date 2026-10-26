import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Grammar Category
  {
    id: 'g-1',
    category: 'Grammar',
    question: 'Which of the following sentences exhibits correct subject-verb agreement?',
    options: [
      'The group of enthusiastic students have arrived.',
      'The group of enthusiastic students has arrived.',
      'The group of enthusiastic students are arrived.',
      'The group of enthusiastic students were arrive.'
    ],
    correctIndex: 1,
    explanation: 'The collective subject is "The group" (singular), so it requires the singular auxiliary "has arrived". "Students" is part of the prepositional phrase "of enthusiastic students".',
    difficulty: 'Beginner'
  },
  {
    id: 'g-2',
    category: 'Grammar',
    question: 'Identify the part of speech of the capitalized word: "She speaks English VERY fluently."',
    options: [
      'Adjective',
      'Noun',
      'Adverb',
      'Conjunction'
    ],
    correctIndex: 2,
    explanation: '"Very" is an adverb of degree modifying another adverb ("fluently").',
    difficulty: 'Beginner'
  },
  {
    id: 'g-3',
    category: 'Grammar',
    question: 'Choose the sentence that correctly uses a semicolon:',
    options: [
      'Fatima loves reading; especially classic English novels.',
      'Fatima loves reading; however, she rarely has free time on weekdays.',
      'Fatima loves; reading novels in the evening.',
      'Because Fatima loves reading; she buys many books.'
    ],
    correctIndex: 1,
    explanation: 'A semicolon separates two independent clauses linked by a conjunctive adverb ("however"), followed by a comma.',
    difficulty: 'Intermediate'
  },
  {
    id: 'g-4',
    category: 'Grammar',
    question: 'Which pronoun correctly completes this sentence? "Neither Sarah nor Fatima brought ______ laptop."',
    options: [
      'their',
      'her',
      'theirs',
      'them'
    ],
    correctIndex: 1,
    explanation: 'When two singular feminine antecedents are joined by "neither... nor", use the singular feminine possessive pronoun "her".',
    difficulty: 'Intermediate'
  },

  // English Tenses Category
  {
    id: 't-1',
    category: 'English Tenses',
    question: 'Fill in the blank with the correct tense: "By the time the bell rings, we ______ for three hours."',
    options: [
      'will study',
      'will have been studying',
      'are studying',
      'have been studying'
    ],
    correctIndex: 1,
    explanation: 'To express an ongoing duration up to a specified point in the future ("by the time the bell rings"), use Future Perfect Continuous ("will have been studying").',
    difficulty: 'Intermediate'
  },
  {
    id: 't-2',
    category: 'English Tenses',
    question: 'Which sentence is in the Past Perfect tense?',
    options: [
      'I was writing my notes when she entered.',
      'I had finished my notes before she entered.',
      'I have finished my notes already.',
      'I finished my notes an hour ago.'
    ],
    correctIndex: 1,
    explanation: 'Past Perfect uses "had + past participle" (had finished) to show an action completed before another past event.',
    difficulty: 'Beginner'
  },
  {
    id: 't-3',
    category: 'English Tenses',
    question: 'Which sentence correctly describes a permanent routine?',
    options: [
      'The sun is rising in the east.',
      'The sun rises in the east.',
      'The sun will be rising in the east.',
      'The sun has risen in the east every day.'
    ],
    correctIndex: 1,
    explanation: 'Present Simple ("rises") is strictly used for universal truths and permanent natural facts.',
    difficulty: 'Beginner'
  },
  {
    id: 't-4',
    category: 'English Tenses',
    question: 'Why is "I am knowing him for 5 years" incorrect?',
    options: [
      'Because "know" cannot be used in English sentences.',
      'Because "know" is a stative verb and the sentence needs Present Perfect ("have known").',
      'Because "for 5 years" must only be used with Past Simple.',
      'Because "I" cannot take "am".'
    ],
    correctIndex: 1,
    explanation: '"Know" is a stative verb that cannot take continuous aspect. Describing a state from the past continuing to now requires Present Perfect: "I have known him for 5 years".',
    difficulty: 'Intermediate'
  },

  // Vocabulary Category
  {
    id: 'v-1',
    category: 'Vocabulary',
    question: 'What is the closest synonym for the word "Meticulous"?',
    options: [
      'Careless',
      'Painstakingly thorough',
      'Hasty',
      'Indifferent'
    ],
    correctIndex: 1,
    explanation: '"Meticulous" means showing great attention to detail, very careful and painstaking.',
    difficulty: 'Intermediate'
  },
  {
    id: 'v-2',
    category: 'Vocabulary',
    question: 'Choose the word that means "existing or found everywhere":',
    options: [
      'Anonymous',
      'Ambiguous',
      'Ubiquitous',
      'Monotonous'
    ],
    correctIndex: 2,
    explanation: '"Ubiquitous" comes from the Latin "ubique" meaning everywhere.',
    difficulty: 'Intermediate'
  },
  {
    id: 'v-3',
    category: 'Vocabulary',
    question: 'Select the correct word: "The damp weather had an adverse ______ on his health."',
    options: [
      'affect',
      'effect',
      'effective',
      'affects'
    ],
    correctIndex: 1,
    explanation: '"Effect" is a noun meaning the result or consequence of a cause. "Affect" is primarily a verb.',
    difficulty: 'Beginner'
  },
  {
    id: 'v-4',
    category: 'Vocabulary',
    question: 'What does the idiom "Bite the bullet" mean?',
    options: [
      'To eat something hard and crunchy.',
      'To face a difficult situation with courage.',
      'To shoot a weapon during target practice.',
      'To get angry and lose patience.'
    ],
    correctIndex: 1,
    explanation: '"Bite the bullet" means accepting or facing an unpleasant or difficult ordeal bravely.',
    difficulty: 'Beginner'
  },

  // Prepositions Category
  {
    id: 'p-1',
    category: 'Prepositions',
    question: 'Select the correct prepositions: "She has been living ______ Islamabad ______ 2018."',
    options: [
      'at / for',
      'in / since',
      'on / from',
      'in / for'
    ],
    correctIndex: 1,
    explanation: 'Cities take "in" (in Islamabad) and a specific starting year takes "since" (since 2018).',
    difficulty: 'Beginner'
  },
  {
    id: 'p-2',
    category: 'Prepositions',
    question: 'Choose the correct preposition: "The student was congratulated ______ her outstanding results."',
    options: [
      'for',
      'on',
      'with',
      'about'
    ],
    correctIndex: 1,
    explanation: 'In standard English collocations, one is "congratulated ON" an achievement.',
    difficulty: 'Intermediate'
  },
  {
    id: 'p-3',
    category: 'Prepositions',
    question: 'Fill in the blank: "He jumped ______ the cold river to rescue the puppy."',
    options: [
      'in',
      'into',
      'onto',
      'inside'
    ],
    correctIndex: 1,
    explanation: '"Into" conveys movement from outside to inside a container or body of water.',
    difficulty: 'Beginner'
  },
  {
    id: 'p-4',
    category: 'Prepositions',
    question: 'Which sentence correctly uses "between" vs "among"?',
    options: [
      'The sweets were divided between the twenty students.',
      'The sweets were divided among the two brothers.',
      'The sweets were divided between the two sisters.',
      'The sweets were divided among the both girls.'
    ],
    correctIndex: 2,
    explanation: 'Use "between" typically for two distinct items/persons, and "among" for three or more in a group.',
    difficulty: 'Beginner'
  },

  // Sentence Correction Category
  {
    id: 'sc-1',
    category: 'Sentence Correction',
    question: 'Identify the corrected version of: "One of my friend are moving to Canada."',
    options: [
      'One of my friends is moving to Canada.',
      'One of my friend is moving to Canada.',
      'One of my friends are moving to Canada.',
      'One of my friends were moving to Canada.'
    ],
    correctIndex: 0,
    explanation: '"One of" is followed by a plural noun ("friends") but takes a singular verb ("is moving") because "one" is the singular grammatical subject.',
    difficulty: 'Beginner'
  },
  {
    id: 'sc-2',
    category: 'Sentence Correction',
    question: 'Correct this sentence: "Although it was raining, but we still went for a walk."',
    options: [
      'Although it was raining, but we went still for a walk.',
      'Although it was raining, we still went for a walk.',
      'Despite it was raining, but we still went for a walk.',
      'Even though it was raining, yet we went for a walk.'
    ],
    correctIndex: 1,
    explanation: 'Do not use both "although" and "but" in the same sentence; it is a double conjunction error. Use only "although".',
    difficulty: 'Intermediate'
  },
  {
    id: 'sc-3',
    category: 'Sentence Correction',
    question: 'Choose the correct version of: "I look forward to hear from you soon."',
    options: [
      'I look forward to hearing from you soon.',
      'I look forward for hear from you soon.',
      'I look forward to have heard from you soon.',
      'I look forward hearing from you soon.'
    ],
    correctIndex: 0,
    explanation: 'In "look forward to", "to" is a preposition, which requires a gerund (-ing form), not a base verb: "hearing".',
    difficulty: 'Intermediate'
  },
  {
    id: 'sc-4',
    category: 'Sentence Correction',
    question: 'Select the sentence free of grammatical errors:',
    options: [
      'She gave me many valuable advices.',
      'She gave me much valuable advice.',
      'She gave me a valuable advice.',
      'She gave me an advice that was valuable.'
    ],
    correctIndex: 1,
    explanation: '"Advice" is an uncountable noun. It cannot be pluralized as "advices" and cannot take "a/an" or "many". Use "much advice" or "pieces of advice".',
    difficulty: 'Beginner'
  },

  // General English Category
  {
    id: 'ge-1',
    category: 'General English',
    question: 'Which of the following is an active voice sentence?',
    options: [
      'The grand prize was presented to the winner.',
      'The novel was written in 1895.',
      'Fatima delivered an inspiring lecture on grammar.',
      'The road is being paved by workers.'
    ],
    correctIndex: 2,
    explanation: 'In "Fatima delivered an inspiring lecture", the subject ("Fatima") actively performs the action ("delivered").',
    difficulty: 'Beginner'
  },
  {
    id: 'ge-2',
    category: 'General English',
    question: 'Choose the correct indirect speech form of: "Where do you live?" the interviewer asked.',
    options: [
      'The interviewer asked where did I live.',
      'The interviewer asked where I lived.',
      'The interviewer asked where do I live.',
      'The interviewer asked where had I lived.'
    ],
    correctIndex: 1,
    explanation: 'Reported wh-questions take statement word order (wh-word + subject + verb) with tense backshift: "where I lived".',
    difficulty: 'Intermediate'
  },
  {
    id: 'ge-3',
    category: 'General English',
    question: 'What is the correct punctuation mark for joining two independent clauses without a conjunction?',
    options: [
      'Comma',
      'Semicolon',
      'Hyphen',
      'Apostrophe'
    ],
    correctIndex: 1,
    explanation: 'A semicolon (;) connects two closely related independent clauses without needing a coordinating conjunction.',
    difficulty: 'Beginner'
  },
  {
    id: 'ge-4',
    category: 'General English',
    question: 'What does the idiom "Spill the beans" mean?',
    options: [
      'To drop vegetables while cooking in the kitchen.',
      'To reveal a secret prematurely or indiscreetly.',
      'To waste money on expensive food items.',
      'To plant seeds in a fertile garden.'
    ],
    correctIndex: 1,
    explanation: '"Spill the beans" is an informal idiom meaning to disclose secret information.',
    difficulty: 'Beginner'
  }
];
