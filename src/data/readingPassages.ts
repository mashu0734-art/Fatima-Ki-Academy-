import { ReadingPassage } from '../types';

export const READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'passage-1',
    title: 'The Silent Power of Daily Reading',
    difficulty: 'Beginner',
    estimatedMinutes: 4,
    content: [
      'Reading in English for just fifteen minutes every day is one of the most effective habits a language learner can cultivate. Unlike rote memorization of grammar rules, reading exposes your mind to words in their natural context.',
      'When you read a story or an informative article, your brain naturally notices how prepositions connect ideas, how sentences are punctuated, and how adjectives bring life to nouns. Over time, you begin to develop an intuitive sense of what sounds natural in English.',
      'Many beginners make the mistake of stopping to look up every single unfamiliar word in a dictionary. This breaks your concentration and makes reading feel like an exhausting chore. A much better strategy is to underline words you do not know, guess their general meaning from the surrounding sentences, and review them after you finish the chapter.',
      'Consistency matters far more than volume. Reading one thoughtful page every morning with your cup of tea will transform your vocabulary more quickly than reading an entire book once every six months.'
    ],
    keyVocabulary: [
      { word: 'Cultivate', meaning: 'To develop or nurture a skill, habit, or quality over time.' },
      { word: 'Intuitive', meaning: 'Based on what one feels to be true without conscious reasoning.' },
      { word: 'Exhausting', meaning: 'Making you feel extremely tired.' },
      { word: 'Consistency', meaning: 'Regularity and uniformity in performing an action.' }
    ],
    questions: [
      {
        id: 'q1-1',
        question: 'According to the passage, why is reading daily better than memorizing rules alone?',
        options: [
          'It allows you to read faster than everyone else.',
          'It exposes your mind to words and grammar in their natural context.',
          'It guarantees you will never need a dictionary.',
          'It is required by all international examinations.'
        ],
        correctIndex: 1,
        explanation: 'The passage explicitly notes that reading exposes your mind to words in their natural context, developing an intuitive feel for the language.'
      },
      {
        id: 'q1-2',
        question: 'What common mistake do beginners make when reading in English?',
        options: [
          'Reading while drinking morning tea.',
          'Reading without wearing reading glasses.',
          'Stopping to look up every single unfamiliar word immediately.',
          'Underlining difficult words for later review.'
        ],
        correctIndex: 2,
        explanation: 'Paragraph 3 explains that stopping for every word breaks concentration and turns reading into an exhausting chore.'
      },
      {
        id: 'q1-3',
        question: 'What does the author suggest regarding consistency versus volume?',
        options: [
          'Reading 50 pages on Sunday is better than daily practice.',
          'Daily consistency is far more powerful than sporadic high volume.',
          'Volume is the single most important factor.',
          'Beginners should only read whole books in one sitting.'
        ],
        correctIndex: 1,
        explanation: 'The conclusion states: "Consistency matters far more than volume. Reading one thoughtful page every morning... will transform your vocabulary more quickly".'
      }
    ]
  },
  {
    id: 'passage-2',
    title: 'The Art of Active Listening in English',
    difficulty: 'Intermediate',
    estimatedMinutes: 5,
    content: [
      'Communication is frequently described as a two-way street, yet language learners often devote ninety percent of their energy to speaking and only ten percent to listening. In reality, active listening is the silent engine of linguistic fluency.',
      'Passive hearing is simply registering sound waves vibrating against your eardrum. Active listening, on the other hand, demands deliberate mental engagement. It requires observing the speaker\'s tone of voice, pausing to interpret unspoken nuances, and paying attention to rhythm and sentence stress in English.',
      'In natural spoken English, words are rarely pronounced in isolation. Native speakers blend words together through assimilation and elision—phrases like "What are you going to do?" frequently sound like "Whatcha gonna do?". If learners are only accustomed to textbook audio spoken at unnaturally slow speeds, they will stumble when encountering everyday conversations.',
      'To build sharp listening skills, learners should practice shadow listening. Choose a short two-minute audio clip from a reputable podcast, listen once for general comprehension, listen a second time while following a transcript, and finally repeat the speaker\'s exact words aloud, mimicking their cadence and intonation.'
    ],
    keyVocabulary: [
      { word: 'Linguistic', meaning: 'Relating to language or the study of languages.' },
      { word: 'Nuance', meaning: 'A subtle distinction or shade of meaning or feeling.' },
      { word: 'Assimilation', meaning: 'The process whereby a speech sound becomes similar to a neighbouring sound.' },
      { word: 'Cadence', meaning: 'The rhythm and inflection of spoken language.' }
    ],
    questions: [
      {
        id: 'q2-1',
        question: 'What is the primary difference between passive hearing and active listening as defined in the text?',
        options: [
          'Passive hearing requires expensive headphones.',
          'Active listening involves conscious mental engagement, rhythm, and tone interpretation.',
          'Passive hearing is only used for music.',
          'Active listening takes place only in formal classrooms.'
        ],
        correctIndex: 1,
        explanation: 'Active listening is defined as demanding deliberate mental engagement, observing tone, and paying attention to rhythm and stress.'
      },
      {
        id: 'q2-2',
        question: 'Why do language learners often struggle with natural spoken English?',
        options: [
          'Because English words are too short.',
          'Because native speakers blend words through assimilation and elision.',
          'Because grammar rules change when speaking outdoors.',
          'Because podcasts are always recorded at 2x speed.'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 3 notes that native speakers blend words together, making speech sound different from slow textbook recordings.'
      },
      {
        id: 'q2-3',
        question: 'What technique does the author recommend to improve both listening and pronunciation?',
        options: [
          'Silent reading of dictionaries.',
          'Writing ten essays each week.',
          'Shadow listening with short audio clips and transcripts.',
          'Avoiding audio with fast speaking speeds.'
        ],
        correctIndex: 2,
        explanation: 'The passage explicitly recommends "shadow listening", where you repeat the speaker\'s words following the transcript and mimicking cadence.'
      }
    ]
  },
  {
    id: 'passage-3',
    title: 'The Hidden Magic of English Idioms and Metaphors',
    difficulty: 'Intermediate',
    estimatedMinutes: 5,
    content: [
      'Every language possesses quirky idiomatic expressions that sound nonsensical when translated literally word-for-word. English is particularly rich in metaphorical phrases that reflect its seafaring history, agricultural roots, and theatrical traditions.',
      'For example, when an English speaker says "break a leg", they are not wishing physical injury upon anyone; they are offering sincere encouragement before a performance or examination. Similarly, "spilling the beans" has nothing to do with culinary accidents; it originated in ancient voting traditions where beans were dropped into jars to cast secret ballots.',
      'To truly master conversational English, a learner must transition from translating individual words to understanding the figurative heart of expressions. Using idioms correctly injects warmth, wit, and cultural fluency into your speech.',
      'However, learners should beware of overusing idioms in formal academic writing. While "hitting the books" is perfectly acceptable when chatting with classmates, an academic research paper demands formal phrasing like "conducting rigorous literary analysis".'
    ],
    keyVocabulary: [
      { word: 'Idiomatic', meaning: 'Using expressions that are natural to or characteristic of a native speaker.' },
      { word: 'Figurative', meaning: 'Departing from a literal use of words; metaphorical.' },
      { word: 'Nonsensical', meaning: 'Having no meaning; making no sense.' },
      { word: 'Culinary', meaning: 'Connected with cooking or food preparation.' }
    ],
    questions: [
      {
        id: 'q3-1',
        question: 'What does the idiom "break a leg" mean according to the passage?',
        options: [
          'To suffer a physical fracture.',
          'To wish someone good luck and success.',
          'To dance energetically on stage.',
          'To leave the room immediately.'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 2 notes that "break a leg" is a traditional phrase offering sincere encouragement and good luck.'
      },
      {
        id: 'q3-2',
        question: 'Why should learners be cautious when using idioms in academic papers?',
        options: [
          'Because idioms are strictly illegal in universities.',
          'Because formal academic writing requires precise, objective vocabulary rather than colloquial metaphors.',
          'Because idioms make essays too long.',
          'Because examiners cannot speak English.'
        ],
        correctIndex: 1,
        explanation: 'The conclusion explains that while idioms are great in informal speech, academic papers require formal scholarly prose.'
      }
    ]
  }
];
