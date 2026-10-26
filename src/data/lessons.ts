import { GrammarLesson } from '../types';

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'parts-of-speech',
    category: 'Fundamentals',
    title: 'The 8 Parts of Speech in English',
    level: 'Beginner',
    summary: 'Master the fundamental building blocks of every English sentence: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, and Interjection.',
    introduction: 'Every single word you speak or write in English belongs to one of eight core families known as the Parts of Speech. Understanding how words function in a sentence is the key to speak and write correct English with confidence.',
    explanation: [
      'Words are categorized according to their syntactic function within a sentence.',
      'A single word can belong to more than one part of speech depending on how it is used. For example, "run" is a verb in "I run fast" but a noun in "I went for a run".',
      'Learning to identify the job of each word helps you avoid common grammar mistakes and construct clear sentences.'
    ],
    rules: [
      {
        title: '1. Noun (Naming Word)',
        rule: 'Names a person, place, thing, or abstract idea.',
        example: 'Fatima reads a book at the academy.'
      },
      {
        title: '2. Pronoun (Noun Replacer)',
        rule: 'Replaces a noun to prevent repetitive phrasing.',
        example: 'She studies hard because she wants to succeed.'
      },
      {
        title: '3. Verb (Action or State)',
        rule: 'Shows an action, occurrence, or state of being.',
        example: 'The students learn grammar every afternoon.'
      },
      {
        title: '4. Adjective (Noun Modifier)',
        rule: 'Describes or gives more information about a noun or pronoun.',
        example: 'She writes with a golden pen in a clean notebook.'
      },
      {
        title: '5. Adverb (Verb/Adjective Modifier)',
        rule: 'Describes how, when, where, or to what degree an action happens.',
        example: 'He spoke clearly and very politely.'
      },
      {
        title: '6. Preposition (Position/Relation)',
        rule: 'Shows relationships of time, place, direction, or position between words.',
        example: 'The notebook is on the wooden desk beside the lamp.'
      },
      {
        title: '7. Conjunction (Connector)',
        rule: 'Connects words, phrases, or clauses together.',
        example: 'I wanted to practice, but it was already midnight.'
      },
      {
        title: '8. Interjection (Emotion Expression)',
        rule: 'Short word expressing sudden emotion or feeling.',
        example: 'Wow! That lesson was so easy to understand.'
      }
    ],
    examples: [
      {
        correct: 'Fatima speaks English fluently.',
        incorrect: 'Fatima speaks English fluent.',
        reason: 'Use an adverb ("fluently") to describe how the verb "speaks" is performed, not an adjective ("fluent").'
      },
      {
        correct: 'Between you and me, the lesson was great.',
        incorrect: 'Between you and I, the lesson was great.',
        reason: 'Prepositions like "between" take objective pronouns ("me"), not subject pronouns ("I").'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Confusing adjectives with adverbs (e.g., "He drives slow").',
        correction: 'Use "He drives slowly".',
        explanation: 'Verbs of action require adverbs ending in -ly to describe the manner of action.'
      },
      {
        mistake: 'Using subjective pronouns after prepositions (e.g., "Give it to he").',
        correction: 'Use "Give it to him".',
        explanation: 'Always use object pronouns (me, him, her, us, them) as objects of a preposition.'
      }
    ],
    practiceQuestions: [
      {
        question: 'In the sentence "The golden key unlocked the heavy gate quickly," what part of speech is "quickly"?',
        options: ['Adjective', 'Adverb', 'Preposition', 'Conjunction'],
        correctIndex: 1,
        explanation: '"Quickly" answers how the key unlocked the gate; it modifies the verb "unlocked", so it is an adverb.'
      },
      {
        question: 'Identify the preposition in: "Fatima sat beneath the quiet tree to read her notes."',
        options: ['sat', 'beneath', 'quiet', 'notes'],
        correctIndex: 1,
        explanation: '"Beneath" shows the spatial relationship/position of Fatima relative to the tree.'
      },
      {
        question: 'Which word in "She wanted coffee, but the shop was closed" is a conjunction?',
        options: ['wanted', 'coffee', 'but', 'closed'],
        correctIndex: 2,
        explanation: '"But" connects two independent clauses together.'
      }
    ],
    relatedLessonIds: ['nouns-pronouns', 'verbs-adjectives', 'conjunctions']
  },
  {
    id: 'nouns-pronouns',
    category: 'Fundamentals',
    title: 'Nouns & Pronouns: Types, Cases & Agreement',
    level: 'Beginner',
    summary: 'Understand Proper, Common, Collective, and Uncountable Nouns alongside Subject, Object, and Possessive Pronouns.',
    introduction: 'Nouns name everything in our universe, while pronouns step in to take their place so sentences remain fluid and engaging instead of monotonous.',
    explanation: [
      'Noun Types: Proper (names of specific people, places, days, capitalized: Fatima, Pakistan, Monday), Common (general items: girl, country, day), Collective (groups: team, flock, committee), and Abstract (ideas/feelings: honesty, knowledge, courage).',
      'Countable vs Uncountable: Countable nouns can be numbered (one book, two books); uncountable nouns cannot (water, milk, furniture, advice, information). Never put "a/an" or add "-s" to uncountable nouns!',
      'Pronoun Cases: Subject pronouns (I, you, he, she, it, we, they) perform actions. Object pronouns (me, you, him, her, it, us, them) receive actions. Possessive pronouns (mine, yours, his, hers, ours, theirs) show ownership.'
    ],
    rules: [
      {
        title: 'Subject vs Object Pronoun Rule',
        rule: 'Subject performs the action; object receives it.',
        example: 'She (subject) invited him (object) to the academy.'
      },
      {
        title: 'Uncountable Noun Rule',
        rule: 'Uncountable nouns take singular verbs and cannot take numbers directly.',
        example: 'The advice was helpful (not "The advices were helpful").'
      }
    ],
    examples: [
      {
        correct: 'Sarah and I completed the assignment.',
        incorrect: 'Me and Sarah completed the assignment.',
        reason: 'When part of the subject performing the action, use the subject pronoun "I", not "me". Also, polite English places the other person first.'
      },
      {
        correct: 'He gave the notes to my brother and me.',
        incorrect: 'He gave the notes to my brother and I.',
        reason: '"To" is a preposition requiring the objective pronoun "me".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Saying "an advice" or "many informations".',
        correction: 'Use "a piece of advice" or "much information".',
        explanation: 'Advice and information are strictly uncountable in standard English.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Choose the correct pronoun: "The teacher praised ______ for working hard."',
        options: ['he', 'him', 'his', 'himself'],
        correctIndex: 1,
        explanation: 'The verb "praised" requires an object pronoun ("him").'
      },
      {
        question: 'Which of the following is an uncountable noun?',
        options: ['Apple', 'Chair', 'Knowledge', 'Notebook'],
        correctIndex: 2,
        explanation: '"Knowledge" is an abstract uncountable concept and cannot be pluralized.'
      }
    ],
    relatedLessonIds: ['parts-of-speech', 'subject-verb-agreement']
  },
  {
    id: 'verbs-adjectives',
    category: 'Fundamentals',
    title: 'Verbs & Adjectives: Actions, States & Modifiers',
    level: 'Beginner',
    summary: 'Explore action vs stative verbs, regular vs irregular forms, and degrees of adjectives (positive, comparative, superlative).',
    introduction: 'Verbs give sentences their heartbeat by describing actions and states of being, while adjectives color nouns with descriptive depth.',
    explanation: [
      'Action Verbs describe physical or mental activity (run, write, think, build). Stative Verbs describe feelings, states, or relationships (love, know, believe, own) and are rarely used in continuous (-ing) tenses.',
      'Regular verbs form past tenses by adding -ed (walk -> walked). Irregular verbs change form (eat -> ate -> eaten, go -> went -> gone).',
      'Degrees of Adjectives: Positive (tall), Comparative (taller - comparing two), Superlative (tallest - comparing three or more). For longer words: beautiful -> more beautiful -> most beautiful.'
    ],
    rules: [
      {
        title: 'Comparative Degree Rule',
        rule: 'Use comparative + "than" when comparing two items.',
        example: 'English is easier than ancient Latin.'
      },
      {
        title: 'Superlative Degree Rule',
        rule: 'Always place "the" before superlative adjectives.',
        example: 'She is the most diligent student in the class.'
      }
    ],
    examples: [
      {
        correct: 'This exercise is more difficult than the previous one.',
        incorrect: 'This exercise is more difficulter than the previous one.',
        reason: 'Never use double comparatives (do not combine "more" with "-er").'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "more better" or "most fastest".',
        correction: 'Use "better" or "fastest".',
        explanation: 'Avoid redundant double comparatives and superlatives.'
      }
    ],
    practiceQuestions: [
      {
        question: 'What is the correct comparative form of "good"?',
        options: ['Gooder', 'More good', 'Better', 'Best'],
        correctIndex: 2,
        explanation: '"Good" is irregular: good -> better -> best.'
      }
    ],
    relatedLessonIds: ['parts-of-speech', 'present-simple-tense']
  },
  {
    id: 'adverbs',
    category: 'Fundamentals',
    title: 'Adverbs: Manner, Frequency, Time & Degree',
    level: 'Beginner',
    summary: 'Learn how adverbs modify verbs, adjectives, and other adverbs, answering How, When, Where, and How Often.',
    introduction: 'Adverbs are versatile modifiers that provide crucial context. They tell the listener whether an action occurred quickly, yesterday, everywhere, or frequently.',
    explanation: [
      'Adverbs of Manner: Describe HOW an action happens, usually ending in -ly (patiently, gracefully, loudly, carefully).',
      'Adverbs of Frequency: Describe HOW OFTEN (always, usually, often, sometimes, rarely, never). Placed before main verbs, but after "to be".',
      'Adverbs of Degree: Describe INTENSITY (very, extremely, completely, slightly, quite).',
      'Irregular Adverbs: Good (adjective) -> Well (adverb); Fast (adjective & adverb); Hard (adjective & adverb).'
    ],
    rules: [
      {
        title: 'Frequency Adverb Placement',
        rule: 'Subject + Adverb of Frequency + Main Verb (or Subject + be + Adverb).',
        example: 'She always attends class on time. / She is always punctual.'
      }
    ],
    examples: [
      {
        correct: 'He did well on his exam.',
        incorrect: 'He did good on his exam.',
        reason: '"Good" is an adjective; the verb "did" requires the adverb "well".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Saying "He runs fastly".',
        correction: 'Use "He runs fast".',
        explanation: '"Fast" is both an adjective and an adverb; "fastly" does not exist in standard English.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Identify the adverb of frequency: "Fatima rarely misses her morning practice."',
        options: ['Fatima', 'rarely', 'misses', 'morning'],
        correctIndex: 1,
        explanation: '"Rarely" answers how often the action occurs.'
      }
    ],
    relatedLessonIds: ['parts-of-speech', 'present-simple-tense']
  },
  {
    id: 'present-simple-tense',
    category: 'Tenses',
    title: 'Present Simple Tense: Rules & Daily Routines',
    level: 'Beginner',
    summary: 'Learn how to form positive, negative, and question sentences in Present Simple for universal truths, habitual actions, and daily routines.',
    introduction: 'The Present Simple tense is the most frequently used tense in English. We use it to describe habits, regular routines, scientific facts, and permanent situations.',
    explanation: [
      'Formula for Affirmative: Subject + Base Verb (+ s/es for he/she/it). Example: "She practices every day."',
      'Formula for Negative: Subject + do not / does not + Base Verb. Example: "He does not watch television in the morning."',
      'Formula for Question: Do / Does + Subject + Base Verb? Example: "Does she attend the academy?"',
      'Remember: Add -s or -es to the verb ONLY when the subject is third-person singular (He, She, It, or a singular noun).'
    ],
    rules: [
      {
        title: 'Habits and Routines',
        rule: 'Use with time adverbs like always, usually, often, sometimes, rarely, never, every day.',
        example: 'I drink warm water every morning.'
      },
      {
        title: 'Universal Facts and General Truths',
        rule: 'States scientific or timeless realities that never change.',
        example: 'Water boils at 100 degrees Celsius.'
      },
      {
        title: 'Third Person Singular Rule',
        rule: 'Add -s, -es (verbs ending in -ch, -sh, -ss, -x, -o), or -ies (consonant + y) for He/She/It.',
        example: 'He watches (watch + es) lectures and tries (try -> tries) hard.'
      }
    ],
    examples: [
      {
        correct: 'He works at an international school.',
        incorrect: 'He work at an international school.',
        reason: 'Subject "He" is third-person singular, so the verb must take an "-s".'
      },
      {
        correct: 'She does not understand the question.',
        incorrect: 'She does not understands the question.',
        reason: 'After "does not", the main verb always reverts to its base infinitive form without "-s".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "-ing" for routine habits (e.g., "I am going to school every day").',
        correction: 'Use "I go to school every day".',
        explanation: 'Habitual repeated actions require Present Simple, not Present Continuous.'
      },
      {
        mistake: 'Double marking third-person in negatives (e.g., "She doesn\'t likes tea").',
        correction: 'Use "She doesn\'t like tea".',
        explanation: 'The auxiliary "does" already carries the third-person inflection.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Choose the correct sentence:',
        options: [
          'My brother teach English at college.',
          'My brother teaches English at college.',
          'My brother is teach English at college.',
          'My brother teachs English at college.'
        ],
        correctIndex: 1,
        explanation: 'For verbs ending in -ch with a singular subject ("My brother"), we add "-es" -> "teaches".'
      },
      {
        question: 'Fill in the blank: "Fatima ______ to bed late on weekdays."',
        options: ['never goes', 'never go', 'is never go', 'never going'],
        correctIndex: 0,
        explanation: '"Fatima" is third person singular, so we use "goes", and frequency adverbs usually sit before the main verb.'
      },
      {
        question: 'What is the correct negative form of: "He plays football"?',
        options: [
          'He not plays football.',
          'He doesn\'t plays football.',
          'He doesn\'t play football.',
          'He don\'t play football.'
        ],
        correctIndex: 2,
        explanation: '"He doesn\'t play" uses auxiliary "does not" + base verb "play".'
      }
    ],
    relatedLessonIds: ['past-simple-tense', 'present-continuous-tense', 'subject-verb-agreement']
  },
  {
    id: 'present-continuous-tense',
    category: 'Tenses',
    title: 'Present Continuous Tense: Actions Happening Now',
    level: 'Beginner',
    summary: 'Learn when to use am/is/are + verb-ing for actions in progress at the moment of speaking, temporary states, and fixed future plans.',
    introduction: 'The Present Continuous describes actions currently unfolding right now or trends happening around the present moment.',
    explanation: [
      'Affirmative Structure: Subject + am / is / are + Verb-ing. (e.g., "I am writing notes.")',
      'Negative Structure: Subject + am / is / are + NOT + Verb-ing. (e.g., "They are not listening.")',
      'Question Structure: Am / Is / Are + Subject + Verb-ing? (e.g., "Are you studying now?")',
      'Stative Verb Exception: Verbs of feeling, thinking, and possession (like, love, hate, know, believe, own) are almost never used in continuous tenses.'
    ],
    rules: [
      {
        title: 'Action happening at this precise moment',
        rule: 'Use time expressions like now, right now, at the moment, currently.',
        example: 'Fatima is explaining a grammar rule right now.'
      },
      {
        title: 'Temporary situation or trend',
        rule: 'Action that is ongoing these days, even if not at this second.',
        example: 'He is living with his uncle this month.'
      }
    ],
    examples: [
      {
        correct: 'I know the answer to this riddle.',
        incorrect: 'I am knowing the answer to this riddle.',
        reason: '"Know" is a stative mental verb; it does not take continuous form.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Saying "I am having two cars".',
        correction: 'Use "I have two cars".',
        explanation: '"Have" expressing ownership is stative. Continuous is only allowed for activities (e.g., "I am having lunch").'
      }
    ],
    practiceQuestions: [
      {
        question: 'Which sentence is grammatically correct?',
        options: [
          'Listen! Someone is knocking on the door.',
          'Listen! Someone knocks on the door.',
          'Listen! Someone is knock on the door.',
          'Listen! Someone knocking on the door.'
        ],
        correctIndex: 0,
        explanation: '"Listen!" alerts us to an immediate unfolding action: "is knocking".'
      }
    ],
    relatedLessonIds: ['present-simple-tense', 'past-continuous-tense']
  },
  {
    id: 'past-simple-tense',
    category: 'Tenses',
    title: 'Past Simple Tense: Completed Past Actions',
    level: 'Beginner',
    summary: 'Master regular (-ed) and irregular past verb forms to express finished events at a definite time in the past.',
    introduction: 'The Past Simple tense is used to talk about actions, events, or states that started and finished in the past. We usually know or state when the event happened.',
    explanation: [
      'Affirmative: Subject + Verb in Past Form (V2). Example: "Fatima completed her exam yesterday."',
      'Negative: Subject + did not + Base Verb (V1). Example: "We did not go to the market."',
      'Question: Did + Subject + Base Verb (V1)? Example: "Did you finish the assignment?"',
      'Regular verbs add -ed (work -> worked). Irregular verbs change completely (go -> went, buy -> bought, write -> wrote).'
    ],
    rules: [
      {
        title: 'Finished action with a past time marker',
        rule: 'Words like yesterday, last week, in 2020, two days ago specify the exact time.',
        example: 'She graduated from university two years ago.'
      }
    ],
    examples: [
      {
        correct: 'Did you see the new library yesterday?',
        incorrect: 'Did you saw the new library yesterday?',
        reason: 'When "did" is used in a question or negative, the main verb MUST remain in the base form ("see").'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using past tense verb after "did not" (e.g., "I didn\'t knew").',
        correction: 'Use "I didn\'t know".',
        explanation: 'Auxiliary "did" already takes the past tense burden.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Select the correct sentence:',
        options: [
          'They did not arrived on time yesterday.',
          'They did not arrive on time yesterday.',
          'They not arrived on time yesterday.',
          'They does not arrive on time yesterday.'
        ],
        correctIndex: 1,
        explanation: 'After "did not", the base verb "arrive" is required.'
      }
    ],
    relatedLessonIds: ['present-simple-tense', 'past-perfect-tense']
  },
  {
    id: 'past-continuous-tense',
    category: 'Tenses',
    title: 'Past Continuous Tense: Interrupted Actions in Past',
    level: 'Intermediate',
    summary: 'Use was/were + verb-ing for actions that were ongoing at a specific past moment or interrupted by a shorter action.',
    introduction: 'The Past Continuous describes a background scene or ongoing activity in the past that was taking place when another event happened.',
    explanation: [
      'Formula: Subject + was / were + Verb-ing. Example: "I was studying when the power went out."',
      'Negative: Subject + was / were + NOT + Verb-ing. Example: "They were not paying attention."',
      'Question: Was / Were + Subject + Verb-ing? Example: "Were you sleeping at 10 PM?"',
      'Interrupted Actions: Ongoing background action in Past Continuous ("while I was cooking") interrupted by Past Simple ("the doorbell rang").'
    ],
    rules: [
      {
        title: 'While vs When',
        rule: 'While is typically followed by continuous tense; When is typically followed by simple past.',
        example: 'While we were walking in the garden, it started to rain.'
      }
    ],
    examples: [
      {
        correct: 'She was reading a book when I arrived.',
        incorrect: 'She was read a book when I arrived.',
        reason: 'Continuous past requires "-ing" form after "was/were".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "were" with singular subjects (e.g., "He were walking").',
        correction: 'Use "He was walking".',
        explanation: 'I, He, She, It take "was"; You, We, They take "were".'
      }
    ],
    practiceQuestions: [
      {
        question: 'Fill in the blank: "What ______ you doing at 8 PM last night?"',
        options: ['was', 'were', 'are', 'did'],
        correctIndex: 1,
        explanation: '"You" takes the plural past auxiliary "were".'
      }
    ],
    relatedLessonIds: ['past-simple-tense', 'present-continuous-tense']
  },
  {
    id: 'present-perfect-tense',
    category: 'Tenses',
    title: 'Present Perfect Tense: Connecting Past with Present',
    level: 'Intermediate',
    summary: 'Understand has/have + past participle (V3) for life experiences, recent actions with present results, and unfinished time periods.',
    introduction: 'The Present Perfect connects the past with the present. Either the exact time is not mentioned, or the action has direct relevance or consequence in this very moment.',
    explanation: [
      'Formula: Subject + have/has + Past Participle (V3). (e.g., "I have finished my homework.")',
      'Negative: Subject + have/has + NOT + Past Participle. (e.g., "He has not called yet.")',
      'Question: Have/Has + Subject + Past Participle? (e.g., "Have you ever visited Lahore?")',
      'Use "has" for He/She/It and singular nouns. Use "have" for I/You/We/They and plural nouns.'
    ],
    rules: [
      {
        title: 'Life experiences without exact time',
        rule: 'Often paired with ever, never, before, already.',
        example: 'She has traveled to five different countries.'
      },
      {
        title: 'Duration from past until now (Since / For)',
        rule: 'Since = specific starting point; For = duration of time.',
        example: 'Fatima has taught English for six years / since 2020.'
      }
    ],
    examples: [
      {
        correct: 'I have known him since 2018.',
        incorrect: 'I know him since 2018.',
        reason: 'An action or state starting in the past and continuing today needs Present Perfect.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "since" with durations (e.g., "since three days").',
        correction: 'Use "for three days".',
        explanation: '"For" is for durations of time; "since" is for a fixed starting point.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Choose the correct preposition: "She has been a teacher ______ ten years."',
        options: ['since', 'for', 'from', 'during'],
        correctIndex: 1,
        explanation: '"Ten years" is a duration of time, so "for" is correct.'
      }
    ],
    relatedLessonIds: ['past-simple-tense', 'present-simple-tense']
  },
  {
    id: 'past-perfect-tense',
    category: 'Tenses',
    title: 'Past Perfect Tense: The Earlier of Two Past Events',
    level: 'Intermediate',
    summary: 'Use had + V3 to clearly sequence which of two past actions happened first before another past event.',
    introduction: 'When talking about two separate events that happened in the past, the Past Perfect shows which event occurred first.',
    explanation: [
      'Formula: Subject + had + Past Participle (V3). Example: "When I arrived at the station, the train had already left."',
      'Sequence: Event 1 (Earlier) = Past Perfect (had left). Event 2 (Later) = Past Simple (arrived).'
    ],
    rules: [
      {
        title: 'Time Clauses with Before / After',
        rule: 'Action completed before the later point takes "had + V3".',
        example: 'She had finished cooking before the guests arrived.'
      }
    ],
    examples: [
      {
        correct: 'The film had already started when we entered the cinema.',
        incorrect: 'The film has already started when we entered the cinema.',
        reason: 'Both events occurred in the past; use "had started", not present "has started".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using past perfect for an isolated past event without comparison.',
        correction: 'Use simple past unless contrasting two chronological events.',
        explanation: 'Past perfect exists strictly to show relative past sequence.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Identify the earlier event: "He had completed his degree before he applied for the job."',
        options: [
          'Applying for the job',
          'Completing his degree',
          'Both happened at the exact same second',
          'Neither happened'
        ],
        correctIndex: 1,
        explanation: '"Had completed" signifies the earlier completed event.'
      }
    ],
    relatedLessonIds: ['past-simple-tense', 'all-12-tenses-matrix']
  },
  {
    id: 'future-simple-tense',
    category: 'Tenses',
    title: 'Future Simple & Going To: Predictions and Intentions',
    level: 'Beginner',
    summary: 'Master will + base verb for spontaneous decisions and promises, and going to for pre-planned intentions.',
    introduction: 'English expresses future time using modal auxiliaries (will) or semi-modals (be going to). Knowing when to use each gives your speech natural precision.',
    explanation: [
      'Will + Base Verb: For spontaneous decisions made at the moment of speaking, promises, offers, and general predictions. Example: "I will help you with your bags."',
      'Be Going To + Base Verb: For pre-existing plans and intentions formed before speaking, or predictions based on immediate visual evidence. Example: "Look at those dark clouds; it is going to rain."'
    ],
    rules: [
      {
        title: 'Spontaneous Decision vs Prior Plan',
        rule: 'Will = decided right now; Going to = decided earlier.',
        example: 'Oh, the phone is ringing. I will answer it! vs I am going to buy a new laptop next month.'
      }
    ],
    examples: [
      {
        correct: 'I will call you tonight, I promise.',
        incorrect: 'I am calling you tonight, I promise.',
        reason: 'Promises are typically framed with "will".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "will" after "when" or "if" in future time clauses.',
        correction: 'Use present simple (e.g. "When I arrive, I will call you").',
        explanation: 'Time clauses introduced by when, before, after, until take present tense.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Fill in the blank: "If it rains tomorrow, we ______ stay indoors."',
        options: ['will', 'would', 'are', 'shall have'],
        correctIndex: 0,
        explanation: 'In the First Conditional, the result clause takes "will + base verb".'
      }
    ],
    relatedLessonIds: ['all-12-tenses-matrix', 'conditionals']
  },
  {
    id: 'all-12-tenses-matrix',
    category: 'Tenses',
    title: 'All 12 English Tenses: Master Formula & Timeline',
    level: 'Intermediate',
    summary: 'A unified summary chart of all 12 English tenses: Simple, Continuous, Perfect, and Perfect Continuous across Past, Present, and Future.',
    introduction: 'English has 12 distinct tense aspects created by combining three timeframes (Past, Present, Future) with four aspects (Simple, Continuous, Perfect, Perfect Continuous). Seeing all twelve side-by-side unlocks clear comprehension.',
    explanation: [
      '1. Present Simple: S + V1 (+ s/es). "She reads every night."',
      '2. Present Continuous: S + am/is/are + V-ing. "She is reading right now."',
      '3. Present Perfect: S + has/have + V3. "She has read three books this week."',
      '4. Present Perfect Continuous: S + has/have been + V-ing. "She has been reading for two hours."',
      '5. Past Simple: S + V2. "She read a novel yesterday."',
      '6. Past Continuous: S + was/were + V-ing. "She was reading when the phone rang."',
      '7. Past Perfect: S + had + V3. "She had already read the book before class."',
      '8. Past Perfect Continuous: S + had been + V-ing. "She had been reading since morning."',
      '9. Future Simple: S + will + V1. "She will read the announcement tomorrow."',
      '10. Future Continuous: S + will be + V-ing. "She will be reading at this time tomorrow."',
      '11. Future Perfect: S + will have + V3. "She will have read the whole chapter by 6 PM."',
      '12. Future Perfect Continuous: S + will have been + V-ing. "She will have been reading for three hours by sunset."'
    ],
    rules: [
      {
        title: 'The Continuous Key',
        rule: 'Every continuous tense ALWAYS uses a form of "be" + verb-ing.',
        example: 'is walking, was walking, will be walking.'
      },
      {
        title: 'The Perfect Key',
        rule: 'Every perfect tense ALWAYS uses a form of "have" + past participle (V3).',
        example: 'has eaten, had eaten, will have eaten.'
      }
    ],
    examples: [
      {
        correct: 'By next December, I will have finished my degree.',
        incorrect: 'By next December, I will finish my degree.',
        reason: 'When referring to a completion deadline in the future ("by next December"), Future Perfect ("will have finished") is needed.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "had + V3" when there is only one simple past action.',
        correction: 'Use simple past unless comparing two past events to show which happened first.',
        explanation: 'Past Perfect is specifically reserved for the earlier of two past events.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Identify the tense: "By 8:00 PM, we will have reached our destination."',
        options: ['Future Simple', 'Future Continuous', 'Future Perfect', 'Past Perfect'],
        correctIndex: 2,
        explanation: '"Will have reached" (will have + V3) is Future Perfect.'
      }
    ],
    relatedLessonIds: ['present-simple-tense', 'past-simple-tense', 'present-perfect-tense']
  },
  {
    id: 'articles-a-an-the',
    category: 'Grammar Rules',
    title: 'Articles: When to Use A, An, The & Zero Article',
    level: 'Beginner',
    summary: 'A complete guide to indefinite articles (a/an), definite article (the), and situations where no article should be used.',
    introduction: 'Articles are small words that define whether a noun is specific or unspecific. English learners frequently struggle with articles because many other languages do not have them.',
    explanation: [
      'Indefinite Articles (A / An): Used before singular countable nouns when mentioning something for the first time or when it is not specific.',
      'Sound Rule for A vs An: Use "an" before a VOWEL SOUND (not just letter). E.g., "an hour" (silent h), "a university" (starts with /j/ consonant sound).',
      'Definite Article (The): Used before singular or plural, countable or uncountable nouns when the listener already knows which item is being discussed, or when there is only one in existence (e.g., the sun, the moon, the president).',
      'Zero Article (No Article): Used with plural countable nouns and uncountable nouns when speaking generally (e.g., "Children love games", "Water is essential").'
    ],
    rules: [
      {
        title: '1. Sound over spelling for A vs An',
        rule: 'An honest man (h is silent -> vowel sound /ɒ/), A European city (starts with /j/ consonant sound).',
        example: 'He gave an honest answer in a European forum.'
      },
      {
        title: '2. Second Mention Rule',
        rule: 'First mention takes "a/an", subsequent mentions take "the".',
        example: 'I bought a notebook. The notebook has 200 lined pages.'
      }
    ],
    examples: [
      {
        correct: 'He is an honest police officer.',
        incorrect: 'He is a honest police officer.',
        reason: '"Honest" begins with a silent "h", producing a vowel sound (/ɒ/), requiring "an".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Putting "a" before uncountable nouns (e.g., "a water", "an information", "an advice").',
        correction: 'Use "some water", "a piece of advice", "some information".',
        explanation: 'Uncountable nouns cannot be preceded by "a" or "an".'
      }
    ],
    practiceQuestions: [
      {
        question: 'Choose the correct article: "It takes almost ______ hour to reach the airport."',
        options: ['a', 'an', 'the', 'no article'],
        correctIndex: 1,
        explanation: '"Hour" has a silent "h" and starts with a vowel sound, so we use "an".'
      }
    ],
    relatedLessonIds: ['nouns-pronouns', 'sentence-structure']
  },
  {
    id: 'prepositions-in-on-at',
    category: 'Grammar Rules',
    title: 'Prepositions of Time and Place: IN, ON, AT Mastered',
    level: 'Beginner',
    summary: 'Never confuse IN, ON, and AT again. Learn the pyramid rule for time and geographical/physical space.',
    introduction: 'Prepositions establish physical, temporal, and conceptual relationships between nouns and the rest of the sentence. The triad of IN, ON, and AT is the most common and confusing for learners.',
    explanation: [
      'The Pyramid Rule: "IN" is the broadest/largest base, "ON" is more specific, and "AT" is the most precise peak.',
      'TIME Pyramid: IN (Centuries, Decades, Years, Months, Seasons) -> ON (Days, Dates, Specific Holidays with "Day") -> AT (Exact Clock Times, Night, Weekend in British English).',
      'PLACE Pyramid: IN (Countries, Cities, Neighborhoods, Enclosed Rooms) -> ON (Streets, Avenues, Surfaces, Public Transport) -> AT (Exact Addresses, Specific Venues, Points on a map).'
    ],
    rules: [
      {
        title: 'Prepositions of Time',
        rule: 'IN the morning, in 2026, in July. ON Monday, on July 14th. AT 8:30 PM, at noon.',
        example: 'Our class begins at 9:00 AM on Monday in October.'
      }
    ],
    examples: [
      {
        correct: 'We arrived in Karachi at 5 o\'clock.',
        incorrect: 'We arrived at Karachi in 5 o\'clock.',
        reason: 'Cities take "in" (broad area), while clock times take "at" (specific point).'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Saying "at the morning" or "in night".',
        correction: 'Use "in the morning" and "at night".',
        explanation: 'Parts of the day take "in the..." except for "at night" and "at noon".'
      }
    ],
    practiceQuestions: [
      {
        question: 'Fill in the blank: "The graduation ceremony will take place ______ Saturday ______ 4:00 PM."',
        options: ['in / at', 'on / at', 'at / on', 'on / in'],
        correctIndex: 1,
        explanation: 'Days take "on" and clock times take "at".'
      }
    ],
    relatedLessonIds: ['parts-of-speech', 'sentence-structure']
  },
  {
    id: 'conjunctions',
    category: 'Grammar Rules',
    title: 'Conjunctions: FANBOYS, Subordinating & Correlative',
    level: 'Intermediate',
    summary: 'Connect thoughts seamlessly using Coordinating (FANBOYS), Subordinating (because, although, if), and Correlative pairs.',
    introduction: 'Conjunctions are the mortar of sentence architecture. They glue words, phrases, and clauses into cohesive, flowing expressions.',
    explanation: [
      'Coordinating Conjunctions: FANBOYS (For, And, Nor, But, Or, Yet, So). They connect words or independent clauses of equal grammatical importance.',
      'Subordinating Conjunctions: Introduce dependent clauses indicating cause, condition, or contrast (because, although, since, unless, while, whereas).',
      'Correlative Conjunctions: Travel in pairs (either... or, neither... nor, not only... but also, both... and).'
    ],
    rules: [
      {
        title: 'Comma with FANBOYS',
        rule: 'Place a comma before a coordinating conjunction when joining two full independent clauses.',
        example: 'She studied diligently, so she scored the highest mark.'
      }
    ],
    examples: [
      {
        correct: 'Not only is she intelligent, but she is also hardworking.',
        incorrect: 'Not only she is intelligent, but also she is hardworking.',
        reason: '"Not only" at the start of a clause causes subject-verb inversion ("is she").'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using both "although" and "but" in the same sentence.',
        correction: 'Use one or the other: "Although it was cold, we went outside."',
        explanation: 'Pairing two contrast connectors is redundant.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Choose the correct conjunction: "We cannot leave ______ everyone is present."',
        options: ['until', 'but', 'nor', 'so'],
        correctIndex: 0,
        explanation: '"Until" expresses a condition of time up to a specified event.'
      }
    ],
    relatedLessonIds: ['parts-of-speech', 'sentence-structure']
  },
  {
    id: 'subject-verb-agreement',
    category: 'Grammar Rules',
    title: 'Subject-Verb Agreement: 10 Essential Rules',
    level: 'Intermediate',
    summary: 'Ensure subjects and verbs match in number (singular or plural), even when words intervene between them.',
    introduction: 'The fundamental golden rule of English syntax is simple: singular subjects take singular verbs, and plural subjects take plural verbs. However, tricky compound subjects, collective nouns, and intervening phrases often confuse writers.',
    explanation: [
      'Singular verb usually ends in "-s" (is, has, does, works). Plural verbs do not end in "-s" (are, have, do, work).',
      'Do not be misled by phrases that come between the subject and the verb (like "together with", "as well as", "along with", or prepositional phrases).',
      'Indefinite pronouns like "everyone", "somebody", "each", "neither", and "either" are grammatically singular.'
    ],
    rules: [
      {
        title: 'Intervening Phrases',
        rule: 'The subject remains singular even if followed by phrases like "along with" or "in addition to".',
        example: 'The teacher, along with her bright students, is attending the seminar.'
      },
      {
        title: 'Neither / Either... Nor / Or',
        rule: 'The verb agrees with the subject closest to it.',
        example: 'Neither the manager nor the employees were present in the office.'
      }
    ],
    examples: [
      {
        correct: 'Everyone in the class was ready.',
        incorrect: 'Everyone in the class were ready.',
        reason: '"Everyone" is an indefinite singular pronoun requiring a singular verb ("was").'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Saying "There is many people outside".',
        correction: 'Use "There are many people outside".',
        explanation: 'In sentences starting with "there is / are", the subject follows the verb.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Choose the correct verb: "Each of the new students ______ given a student handbook."',
        options: ['were', 'was', 'are', 'have been'],
        correctIndex: 1,
        explanation: '"Each" is a singular subject, so it takes the singular past verb "was".'
      }
    ],
    relatedLessonIds: ['parts-of-speech', 'present-simple-tense']
  },
  {
    id: 'modal-verbs',
    category: 'Grammar Rules',
    title: 'Modal Verbs: Can, Could, May, Might, Must & Should',
    level: 'Intermediate',
    summary: 'Express ability, possibility, permission, advice, and obligation with English modal auxiliary verbs.',
    introduction: 'Modal verbs alter the tone and meaning of the main verb. They express degrees of certainty, legal obligation, moral duty, or polite requests.',
    explanation: [
      'Modal verbs never change form: they never take -s, -ed, or -ing (e.g. He must go, NOT He musts go).',
      'Modals are followed directly by the bare infinitive (base verb without "to"), except for "ought to".',
      'Can / Could: Ability or polite requests. "I can swim" / "Could you help me?"',
      'May / Might: Possibility or formal permission. "It may rain today."',
      'Must: Strong necessity or obligation. "You must wear a helmet."',
      'Should: Advice or recommendation. "You should read this book."'
    ],
    rules: [
      {
        title: 'Bare Infinitive Rule',
        rule: 'Modal + Base Verb (never with "to" or "-ing").',
        example: 'She should study tonight (NOT: She should to study).'
      }
    ],
    examples: [
      {
        correct: 'You must stop at the red light.',
        incorrect: 'You must to stop at the red light.',
        reason: '"Must" is followed directly by the base verb "stop", never "to stop".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Saying "I can to speak English".',
        correction: 'Use "I can speak English".',
        explanation: 'Do not use "to" after the modal verb "can".'
      }
    ],
    practiceQuestions: [
      {
        question: 'Which sentence correctly gives polite advice?',
        options: [
          'You must to consult a doctor.',
          'You should consult a doctor.',
          'You can consulting a doctor.',
          'You might to consult a doctor.'
        ],
        correctIndex: 1,
        explanation: '"Should" expresses sensible advice followed by base verb "consult".'
      }
    ],
    relatedLessonIds: ['verbs-adjectives', 'sentence-structure']
  },
  {
    id: 'conditionals',
    category: 'Advanced Grammar',
    title: 'Conditionals: Zero, First, Second & Third Conditionals',
    level: 'Advanced',
    summary: 'Master the "If" clauses in English: general truths, probable futures, hypothetical dreams, and past regrets.',
    introduction: 'Conditionals describe the result of something that might happen (in the present or future) or might have happened but didn\'t (in the past).',
    explanation: [
      'Zero Conditional: If + Present Simple, Present Simple. Universal truths / science. "If you heat ice, it melts."',
      'First Conditional: If + Present Simple, will + Base Verb. Real / probable future events. "If it rains tomorrow, we will stay home."',
      'Second Conditional: If + Past Simple, would + Base Verb. Hypothetical / imaginary situations. "If I won the lottery, I would travel the world." (Note: Use "were" for all subjects: "If I were you").',
      'Third Conditional: If + Past Perfect, would have + V3. Past regrets and unchangeable past outcomes. "If I had studied harder, I would have passed the exam."'
    ],
    rules: [
      {
        title: 'Second Conditional Subjunctive',
        rule: 'In formal standard English, use "were" instead of "was" for all subjects.',
        example: 'If I were a bird, I would fly to the mountains.'
      }
    ],
    examples: [
      {
        correct: 'If I had known about the lecture, I would have attended.',
        incorrect: 'If I knew about the lecture, I would have attended.',
        reason: 'A past regret requiring third conditional needs "had known" in the if-clause.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Putting "will" inside the if-clause (e.g. "If I will go, I will call").',
        correction: 'Use "If I go, I will call".',
        explanation: 'Never use "will" in the conditional if-clause.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Complete the sentence: "If she ______ hard, she will succeed."',
        options: ['works', 'will work', 'worked', 'working'],
        correctIndex: 0,
        explanation: 'First conditional if-clause takes Present Simple ("works").'
      }
    ],
    relatedLessonIds: ['future-simple-tense', 'past-perfect-tense']
  },
  {
    id: 'active-passive-voice',
    category: 'Advanced Grammar',
    title: 'Active and Passive Voice: Form & Purpose',
    level: 'Intermediate',
    summary: 'Transform sentences between Active and Passive voice seamlessly. Learn when each voice is most appropriate and effective.',
    introduction: 'In the Active Voice, the subject performs the action (e.g., "The teacher praised the student"). In the Passive Voice, the subject receives the action (e.g., "The student was praised by the teacher").',
    explanation: [
      'Why use Passive Voice? Use it when the doer of the action is unknown, obvious, unimportant, or when you want to emphasize the action or receiver (common in scientific reports, news headlines, and formal notices).',
      'Transformation Formula: Object of active becomes Subject + appropriate form of "to be" + Past Participle (V3) + optional "by" phrase.',
      'Only transitive verbs (verbs that take a direct object) can be transformed into passive voice. Intransitive verbs like "arrive", "die", or "sleep" cannot be passive.'
    ],
    rules: [
      {
        title: 'Present Simple Passive',
        rule: 'am / is / are + V3',
        example: 'Active: Fatima bakes cakes. -> Passive: Cakes are baked by Fatima.'
      },
      {
        title: 'Past Simple Passive',
        rule: 'was / were + V3',
        example: 'Active: Edison invented the phonograph. -> Passive: The phonograph was invented by Edison.'
      }
    ],
    examples: [
      {
        correct: 'The ancient bridge was destroyed during the heavy storm.',
        incorrect: 'The ancient bridge destroyed during the heavy storm.',
        reason: 'A bridge cannot destroy itself; it was acted upon, requiring passive voice ("was destroyed").'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using base verb instead of past participle (e.g., "English is speak all over the world").',
        correction: 'Use "English is spoken all over the world".',
        explanation: 'All passive constructions strictly require the third form of the verb (V3 / past participle).'
      }
    ],
    practiceQuestions: [
      {
        question: 'What is the passive form of: "The chef cooked a delicious meal"?',
        options: [
          'A delicious meal was cooked by the chef.',
          'A delicious meal is cooked by the chef.',
          'A delicious meal has been cooked by the chef.',
          'A delicious meal was cooking by the chef.'
        ],
        correctIndex: 0,
        explanation: 'Past simple active ("cooked") turns into "was/were + V3" -> "was cooked".'
      }
    ],
    relatedLessonIds: ['past-simple-tense', 'present-simple-tense']
  },
  {
    id: 'direct-indirect-speech',
    category: 'Advanced Grammar',
    title: 'Direct and Indirect Speech (Reported Speech)',
    level: 'Advanced',
    summary: 'Master the tense backshift, pronoun changes, and time expression modifications when reporting spoken words.',
    introduction: 'Direct speech quotes the exact words spoken inside quotation marks. Indirect (reported) speech conveys what someone said without quoting verbatim, requiring backshifting tenses and adjusting pronouns and time words.',
    explanation: [
      'Tense Backshift: When the reporting verb is in the past (e.g. "He said that..."), present tenses shift back one step into past tenses (Present Simple -> Past Simple; Present Continuous -> Past Continuous; Present Perfect -> Past Perfect; Will -> Would; Can -> Could).',
      'Pronoun Shifts: Personal pronouns adapt to the perspective of the reporter ("I" becomes "he/she").',
      'Time/Place Shifts: "Today" becomes "that day", "tomorrow" becomes "the next day", "yesterday" becomes "the day before", "here" becomes "there".'
    ],
    rules: [
      {
        title: 'Present Simple to Past Simple',
        rule: 'Direct: "I teach English," she said. -> Indirect: She said that she taught English.',
        example: 'He said, "I like grammar." -> He said that he liked grammar.'
      }
    ],
    examples: [
      {
        correct: 'She told me that she was tired.',
        incorrect: 'She said me that she was tired.',
        reason: 'The verb "tell" requires a personal object ("told me"), whereas "say" cannot take an object without "to" ("said to me").'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Keeping question word order in reported questions (e.g., "He asked where was I going").',
        correction: 'Use "He asked where I was going".',
        explanation: 'Reported questions take standard statement order (Subject + Verb), not inverted question order.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Convert to indirect speech: "I am writing an essay," said Ali.',
        options: [
          'Ali said that he is writing an essay.',
          'Ali said that he was writing an essay.',
          'Ali said that he has written an essay.',
          'Ali said that he wrote an essay.'
        ],
        correctIndex: 1,
        explanation: 'Present continuous ("am writing") shifts back to past continuous ("was writing").'
      }
    ],
    relatedLessonIds: ['active-passive-voice', 'past-simple-tense']
  },
  {
    id: 'sentence-structure',
    category: 'Fundamentals',
    title: 'Sentence Structure: Simple, Compound & Complex',
    level: 'Beginner',
    summary: 'Construct polished sentences with subjects, predicates, clauses, and proper comma placement.',
    introduction: 'Every English sentence requires at minimum a subject (who or what) and a predicate (what happens). Understanding clauses lets you build rich, varied prose.',
    explanation: [
      'Simple Sentence: Contains one independent clause (one subject + one finite verb). Example: "Fatima reads English."',
      'Compound Sentence: Two independent clauses joined by a coordinating conjunction (FANBOYS) or a semicolon. Example: "Fatima reads English, and Ali studies mathematics."',
      'Complex Sentence: One independent clause joined with one or more dependent clauses introduced by words like although, because, since. Example: "Although it was late, Fatima finished her essay."',
      'Compound-Complex: Two independent clauses plus at least one dependent clause.'
    ],
    rules: [
      {
        title: 'Clause Comma Rule',
        rule: 'When a dependent clause starts a sentence, place a comma after it.',
        example: 'Because she practiced daily, her pronunciation improved.'
      }
    ],
    examples: [
      {
        correct: 'I wanted to attend the seminar; however, the tickets were sold out.',
        incorrect: 'I wanted to attend the seminar, however the tickets were sold out.',
        reason: 'Joining two independent clauses with just a comma and "however" is a comma splice error. Use a semicolon before "however" and comma after.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Sentence Fragments (e.g. "Because the weather was cold.").',
        correction: 'Attach the dependent clause to a main clause: "Because the weather was cold, we stayed inside."',
        explanation: 'A dependent clause cannot stand alone as a complete sentence.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Identify the sentence type: "Although she was tired, she reviewed her vocabulary cards."',
        options: ['Simple', 'Compound', 'Complex', 'Compound-Complex'],
        correctIndex: 2,
        explanation: 'It has one dependent clause ("Although she was tired") and one independent clause ("she reviewed..."), which makes it a Complex sentence.'
      }
    ],
    relatedLessonIds: ['parts-of-speech', 'conjunctions']
  }
];
