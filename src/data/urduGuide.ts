export interface UrduKeyRule {
  title: string;
  explanation: string;
}

export interface UrduLessonDetail {
  urduTitle: string;
  romanTitle?: string;
  urduSummary: string;
  urduIntro: string;
  urduKeyRules: UrduKeyRule[];
  urduCommonMistakeTip: string;
}

export const LESSON_URDU_MAP: Record<string, UrduLessonDetail> = {
  'parts-of-speech': {
    urduTitle: 'اجزائے کلام (The 8 Parts of Speech - Ajza-e-Kalaam)',
    romanTitle: 'English ke 8 Bunyadi Ajza (Parts of Speech)',
    urduSummary: 'انگریزی کے ہر لفظ کی ایک مخصوص قسم ہوتی ہے جسے Part of Speech کہتے ہیں: اسم، ضمیر، فعل، صفت، متعلق فعل، حرف ربط، حرف عطف، اور حرف فجائیہ۔',
    urduIntro: 'انگریزی بولتے یا لکھتے وقت ہر لفظ کا جملے میں ایک خاص کردار ہوتا ہے۔ جیسے ہی آپ ان 8 اقسام کو سمجھ لیتے ہیں، آپ کے لیے درست اور روانی دار جملے بنانا انتہائی آسان ہو جاتا ہے۔',
    urduKeyRules: [
      {
        title: '1. Noun (اسم / Naming Word)',
        explanation: 'کسی بھی شخص، جگہ، چیز یا کیفیت کے نام کو Noun کہتے ہیں، جیسے: Fatima, Academy, Book, Lahore, Honesty.'
      },
      {
        title: '2. Pronoun (اسم ضمیر / Noun Replacer)',
        explanation: 'اسم کی تکرار سے بچنے کے لیے اس کی جگہ بولا جانے والا لفظ، جیسے: He, She, It, They, We.'
      },
      {
        title: '3. Verb (فعل / Action Word)',
        explanation: 'کوئی بھی کام یا حالت ظاہر کرنے والا لفظ، جیسے: Learn, Speak, Write, Is, Are.'
      },
      {
        title: '4. Adjective (اسم صفت / Describing Word)',
        explanation: 'کسی اسم یا ضمیر کی اچھائی، برائی یا حالت بتانے والا لفظ، جیسے: Good, Diligent, Golden, Fast.'
      },
      {
        title: '5. Adverb (متعلق فعل / Manner Modifier)',
        explanation: 'جو بتائے کام کیسے، کب یا کہاں ہوا، جیسے: Fluently, Quickly, Yesterday, Very.'
      },
      {
        title: '6. Preposition (حرف ربط / Relation Word)',
        explanation: 'جگہ، وقت یا سمت کا تعلق جوڑنے والے الفاظ، جیسے: In, On, At, Under, Between.'
      },
      {
        title: '7. Conjunction (حرف عطف / Connecting Word)',
        explanation: 'دو الفاظ یا جملوں کو آپس میں ملانے والے الفاظ، جیسے: And, But, Because, Although.'
      },
      {
        title: '8. Interjection (حرف فجائیہ / Emotion Word)',
        explanation: 'خوشی، غم یا حیرت کا اچانک اظہار، جیسے: Wow!, Alas!, Hurrah!, Oh!'
      }
    ],
    urduCommonMistakeTip: 'Adjective اور Adverb میں فرق یاد رکھیں: "He drives slow" غلط ہے، درست جملہ "He drives slowly" ہے۔'
  },

  'nouns-pronouns': {
    urduTitle: 'اسم اور اسم ضمیر کی اقسام اور ضوابط (Nouns & Pronouns)',
    romanTitle: 'Nouns aur Pronouns ki Pehchan aur Istemal',
    urduSummary: 'عام اسم (Common)، خاص اسم (Proper)، اجتماعی اسم (Collective) اور گنے نہ جانے والے اسماء (Uncountable) کے بنیادی اصول۔',
    urduIntro: 'اسم کائنات کی ہر چیز کا نام ہے، جبکہ اسم ضمیر بار بار ایک ہی نام دہرانے کی زحمت سے بچاتا ہے۔ ان کے صحیح استعمال سے انگریزی خوبصورت اور پرکشش بنتی ہے۔',
    urduKeyRules: [
      {
        title: 'Proper vs Common Nouns',
        explanation: 'خاص نام ہمیشہ بڑے حرف (Capital letter) سے شروع ہوتے ہیں، جیسے: Fatima, Pakistan, Monday.'
      },
      {
        title: 'Uncountable Noun Rule',
        explanation: 'جن اشیاء کو گنا نہ جا سکے (Water, Advice, Furniture, Information) ان کے ساتھ a/an یا جمع کا s کبھی نہیں لگاتے۔'
      },
      {
        title: 'Subject vs Object Pronoun',
        explanation: 'کام کرنے والا Subject ہوتا ہے (I, He, She, We)، جبکہ جس پر کام ہو وہ Object ہوتا ہے (Me, Him, Her, Us)۔ "Sarah and I" درست ہے، "Me and Sarah" غلط ہے۔'
      }
    ],
    urduCommonMistakeTip: '"Many informations" یا "An advice" مت بولیں؛ ہمیشہ "A piece of advice" یا "Much information" کہیں۔'
  },

  'verbs-adjectives': {
    urduTitle: 'فعل اور صفت کی اقسام اور موازنہ (Verbs & Adjectives)',
    romanTitle: 'Verbs aur Adjectives ke Darjat (Degrees)',
    urduSummary: 'حرکتی اور کیفیتی افعال (Action vs Stative Verbs) اور صفت کے تین درجات (Positive, Comparative, Superlative)۔',
    urduIntro: 'فعل جملے کی جان ہوتا ہے جو کام کو ظاہر کرتا ہے، اور صفت چیزوں کے اوصاف اور موازنے کو واضح کرتی ہے۔',
    urduKeyRules: [
      {
        title: 'Action vs Stative Verbs',
        explanation: 'محبت، علم یا ملکیت ظاہر کرنے والے افعال (Love, Know, Believe, Own) کے ساتھ عام طور پر -ing نہیں لگتا۔ "I am knowing" غلط ہے، "I know" درست ہے۔'
      },
      {
        title: 'Comparative Degree (دو چیزوں کا موازنہ)',
        explanation: 'دو چیزوں کا موازنہ کرتے وقت er یا more کے ساتھ than لگاتے ہیں: "English is easier than Latin".'
      },
      {
        title: 'Superlative Degree (سب سے برتر)',
        explanation: 'سب سے اعلیٰ درجے کے ساتھ ہمیشہ "the" لگاتے ہیں: "The most diligent student".'
      }
    ],
    urduCommonMistakeTip: 'کبھی بھی دوہرا موازنہ نہ کریں، جیسے "more better" یا "most fastest" کہنا غلط ہے۔ صرف "better" یا "fastest" کہیں۔'
  },

  'adverbs': {
    urduTitle: 'متعلق فعل: طریقہ، تکرار اور وقت (Adverbs)',
    romanTitle: 'Adverbs: Kaam Kaise, Kab aur Kitni Bar Huwa',
    urduSummary: 'متعلق فعل واضح کرتا ہے کہ کام کس انداز میں، کتنی بار، کب یا کس حد تک واقع ہوا۔',
    urduIntro: 'اگر آپ بتانا چاہتے ہیں کہ کوئی کتنا تیز دوڑا، کتنی خوبصورتی سے بولا، یا کتنی بار اکیڈمی آیا تو آپ Adverb کا استعمال کرتے ہیں۔',
    urduKeyRules: [
      {
        title: 'Adverbs of Manner (-ly والے الفاظ)',
        explanation: 'کام کا طریقہ بتاتے ہیں: Quickly (تیزی سے)، Clearly (صاف صاف)، Politely (شائستگی سے)۔'
      },
      {
        title: 'Adverbs of Frequency (تکرار بتانے والے)',
        explanation: 'Always (ہمیشہ)، Usually (اکثر)، Sometimes (کبھی کبھی)، Rarely (شاذ و نادر)، Never (کبھی نہیں)۔ یہ عام طور پر اصل فعل سے پہلے آتے ہیں۔'
      },
      {
        title: 'Fast اور Hard کی خاصیت',
        explanation: 'Fastly نام کا کوئی لفظ نہیں ہوتا؛ "He runs fast" ہی درست Adverb ہے۔ اسی طرح "He works hard" درست ہے۔'
      }
    ],
    urduCommonMistakeTip: '"He did good on his test" غلط ہے؛ اچھے طریقے سے کام کرنے کے لیے "He did well" کہیں۔'
  },

  'present-simple-tense': {
    urduTitle: 'فعل حال مطلق (Present Simple Tense - Rozmarrah ke Kaam)',
    romanTitle: 'Present Simple: Aadat, Rozana ka Mamool aur Qudrati Haqaiq',
    urduSummary: 'روزمرہ کی عادات، معمولات، اور کائناتی سچائیوں کو بیان کرنے کے لیے استعمال ہونے والا سب سے اہم زمانہ۔',
    urduIntro: 'انگریزی میں جو کام آپ روزانہ، گاہے بگاہے یا باقاعدگی سے کرتے ہیں، اسے بتانے کے لیے Present Simple Tense استعمال کیا جاتا ہے۔',
    urduKeyRules: [
      {
        title: 'مثبت جملے کا فارمولا (Affirmative)',
        explanation: 'Subject + پہلی فارم (V1)۔ اگر Subject واحد غائب ہو (He, She, It, یا کوئی ایک نام)، تو فعل کے آخر میں s یا es کا اضافہ کریں۔ جیسے: Fatima speaks fluent English.'
      },
      {
        title: 'منفی جملے کا فارمولا (Negative)',
        explanation: 'I/We/You/They کے ساتھ do not + V1، جبکہ He/She/It کے ساتھ does not + V1۔ جیسے: She does not watch TV.'
      },
      {
        title: 'سوالیہ جملے کا فارمولا (Interrogative)',
        explanation: 'Do / Does کو جملے کے شروع میں لائیں۔ جیسے: Does she practice grammar?'
      }
    ],
    urduCommonMistakeTip: 'منفی جملوں میں does not کے بعد فعل سے s یا es ہٹا دیا جاتا ہے؛ "She doesn\'t likes" غلط ہے، "She doesn\'t like" درست ہے۔'
  },

  'present-continuous-tense': {
    urduTitle: 'فعل حال جاری (Present Continuous Tense - Jari Kaam)',
    romanTitle: 'Present Continuous: Jo Kaam Is Waqt Ho Raha Hai',
    urduSummary: 'جو کام گفتگو کرتے وقت عین اسی لمحے جاری ہو، اسے ظاہر کرنے کے لیے is/am/are + verb-ing استعمال ہوتا ہے۔',
    urduIntro: 'اگر آپ ابھی پڑھ رہے ہیں، لکھ رہے ہیں یا سن رہے ہیں، تو اس کا اظہار اس ٹینس میں کیا جائے گا: "I am learning English right now".',
    urduKeyRules: [
      {
        title: 'فارمولا (Structure)',
        explanation: 'I کے ساتھ am، He/She/It کے ساتھ is، اور We/You/They کے ساتھ are + فعل کی پہلی فارم کے ساتھ ing۔'
      },
      {
        title: 'Stative Verbs پر پابندی',
        explanation: 'سوچنے اور محسوس کرنے والے افعال (Understand, Know, Believe, Want) کو عام طور پر continuous میں نہیں بولتے۔ "I am understanding" غلط ہے، "I understand" درست ہے۔'
      }
    ],
    urduCommonMistakeTip: 'روزمرہ کی عادات کے لیے continuous مت استعمال کریں؛ "I am going to school every day" غلط ہے، "I go to school every day" درست ہے۔'
  },

  'past-simple-tense': {
    urduTitle: 'فعل ماضی مطلق (Past Simple Tense - Guzra Huwa Waqt)',
    romanTitle: 'Past Simple: Guzre Waqt me Mukammal Hone Wale Kaam',
    urduSummary: 'ماضی میں مکمل ہو جانے والے کاموں کے لیے فعل کی دوسری فارم (V2) اور منفی/سوالیہ میں did کا استعمال۔',
    urduIntro: 'کوئی بھی کام جو کل، پچھلے ہفتے یا سالوں پہلے مکمل ہو گیا ہو، اس کا ذکر اس ٹینس میں کیا جاتا ہے: "Fatima passed her exam yesterday".',
    urduKeyRules: [
      {
        title: 'مثبت جملے کا قاعدہ',
        explanation: 'تمام Subjects کے ساتھ فعل کی دوسری فارم (V2) لگتی ہے: "He bought a new book".'
      },
      {
        title: 'منفی اور سوالیہ میں did کا اصول',
        explanation: 'جب جملے میں did not یا did آ جائے تو فعل ہمیشہ اپنی اصل پہلی فارم (V1) میں واپس آ جاتا ہے: "Did you see?" درست ہے، "Did you saw?" غلط ہے۔'
      }
    ],
    urduCommonMistakeTip: 'کبھی بھی did not کے ساتھ دوسری فارم نہ لگائیں؛ "I didn\'t knew" بولنا سخت غلطی ہے، ہمیشہ "I didn\'t know" کہیں۔'
  },

  'past-continuous-tense': {
    urduTitle: 'فعل ماضی جاری (Past Continuous Tense)',
    romanTitle: 'Past Continuous: Maazi me Jari Kaam',
    urduSummary: 'ماضی میں کسی مخصوص لمحے جاری رہنے والے کام کے لیے was/were + ing کا استعمال۔',
    urduIntro: 'جب آپ بتانا چاہیں کہ ماضی میں جب کوئی دوسرا واقعہ ہوا تب آپ کیا کر رہے تھے، تو Past Continuous استعمال ہوتا ہے: "I was studying when the lights went out".',
    urduKeyRules: [
      {
        title: 'فارمولا (Structure)',
        explanation: 'I/He/She/It کے ساتھ was + ing، جبکہ We/You/They کے ساتھ were + ing۔'
      },
      {
        title: 'While اور When کا جوڑ',
        explanation: 'عام طور پر While کے ساتھ جاری فعل (While I was reading) اور When کے ساتھ مختصر فعل (when he knocked) آتا ہے۔'
      }
    ],
    urduCommonMistakeTip: 'واحد فاعل کے ساتھ were مت لگائیں؛ "He were" غلط ہے، "He was" درست ہے۔'
  },

  'present-perfect-tense': {
    urduTitle: 'فعل حال مکمل (Present Perfect Tense - Maazi o Haal ka Rabt)',
    romanTitle: 'Present Perfect: Kaam Mukammal Magar Asar Baaqi',
    urduSummary: 'ماضی میں مکمل ہونے والے وہ کام جن کا اثر حال میں موجود ہو، یا زندگی کے تجربات: has/have + V3۔',
    urduIntro: 'اس ٹینس کی خوبصورتی یہ ہے کہ یہ ماضی کے کام کو موجودہ لمحے سے جوڑتا ہے، جیسے: "I have completed my homework" (یعنی کام اب مکمل ہے)۔',
    urduKeyRules: [
      {
        title: 'فارمولا',
        explanation: 'He/She/It کے ساتھ has، اور I/We/You/They کے ساتھ have + فعل کی تیسری فارم (V3)۔'
      },
      {
        title: 'Since اور For کا فرق',
        explanation: 'مخصوص وقت کے آغاز کے لیے Since (جیسے: since morning, since 2020)، اور مدت کے لیے For (جیسے: for 2 hours, for 5 days)۔'
      }
    ],
    urduCommonMistakeTip: 'دنوں یا گھنٹوں کی گنتی کے ساتھ since مت لگائیں؛ "since two days" غلط ہے، "for two days" کہیں۔'
  },

  'past-perfect-tense': {
    urduTitle: 'فعل ماضی بعید / ماضی مکمل (Past Perfect Tense)',
    romanTitle: 'Past Perfect: Do Maazi ke Kaamo me Pehla Kaam',
    urduSummary: 'جب ماضی میں دو کام ہوئے ہوں تو پہلے ہونے والے کام کے لیے had + V3 لگاتے ہیں۔',
    urduIntro: 'اس ٹینس کو دو ماضیوں کا موازنہ کرنے والا زمانہ کہتے ہیں، جیسے: "The train had already left when I reached the station" (میرے پہنچنے سے پہلے ٹرین جا چکی تھی)۔',
    urduKeyRules: [
      {
        title: 'فارمولا',
        explanation: 'تمام Subjects کے ساتھ had + فعل کی تیسری فارم (Past Participle - V3)۔'
      },
      {
        title: 'ترتیب کا اصول',
        explanation: 'پہلا واقع ہونے والا کام = Past Perfect (had + V3)۔ دوسرا بعد میں ہونے والا کام = Past Simple (V2)۔'
      }
    ],
    urduCommonMistakeTip: 'تنہا ماضی کے جملے میں بلاوجہ had نہ لگائیں؛ جب تک موازنہ نہ ہو صرف سادہ ماضی (Past Simple) بولیں۔'
  },

  'future-simple-tense': {
    urduTitle: 'فعل مستقبل مطلق (Future Simple Tense - Aane Wala Waqt)',
    romanTitle: 'Future Simple: Will aur Going to ka Faraq',
    urduSummary: 'آنے والے وقت میں ہونے والے کاموں کے لیے will + base verb یا be going to کا انتخاب۔',
    urduIntro: 'مستقبل کے فیصلوں، وعدوں یا پیشگوئیوں کے لیے will استعمال ہوتا ہے، جبکہ پہلے سے طے شدہ منصوبوں کے لیے going to استعمال کیا جاتا ہے۔',
    urduKeyRules: [
      {
        title: 'Will بمقابلہ Going To',
        explanation: 'گفتگو کے وقت فوری فیصلہ: "I will open the door!"۔ پہلے سے سوچا ہوا ارادہ: "I am going to buy a phone tomorrow".'
      },
      {
        title: 'If یا When کلاز میں will کی ممانعت',
        explanation: 'شرط والے حصے میں will نہیں لگاتے: "When I will arrive, I will call" غلط ہے، "When I arrive, I will call" درست ہے۔'
      }
    ],
    urduCommonMistakeTip: 'وعدہ کرتے وقت will بولیں: "I will call you tonight, I promise".'
  },

  'all-12-tenses-matrix': {
    urduTitle: 'انگریزی کے تمام 12 ٹینسز کا مکمل چارٹ (All 12 Tenses Master Matrix)',
    romanTitle: 'English ke Tamam 12 Zamano ka Asan Khulasa',
    urduSummary: 'ماضی، حال اور مستقبل کے تمام 12 زمانوں کے فارمولے، پہچان اور مثالیں ایک نظر میں۔',
    urduIntro: 'انگریزی کے 12 ٹینسز دراصل 3 زمانوں (Past, Present, Future) اور 4 حالتوں (Simple, Continuous, Perfect, Perfect Continuous) کا باقاعدہ ملاپ ہیں۔',
    urduKeyRules: [
      {
        title: 'Continuous کی سنہری چابی',
        explanation: 'دنیا کے ہر continuous ٹینس میں be کی کوئی نہ کوئی شکل (is/am/are/was/were/will be) اور ساتھ verb-ing ضرور آتا ہے۔'
      },
      {
        title: 'Perfect کی سنہری چابی',
        explanation: 'دنیا کے ہر perfect ٹینس میں have کی کوئی نہ کوئی شکل (has/have/had/will have) اور ساتھ تیسری فارم (V3) ضرور آتی ہے۔'
      }
    ],
    urduCommonMistakeTip: 'مستقبل کی آخری ڈیڈ لائن بتاتے وقت Future Perfect استعمال کریں: "By next year, I will have finished my degree".'
  },

  'articles-a-an-the': {
    urduTitle: 'حروف تنکیر و تخصیص: A, An اور The کا درست استعمال (Articles)',
    romanTitle: 'Articles: A, An aur The Kahan Lagayein',
    urduSummary: 'آواز کے اصول پر a بمقابلہ an کا چناؤ، خاص اشیاء کے لیے the کا استعمال، اور جہاں آرٹیکل نہیں لگتا۔',
    urduIntro: 'آرٹیکلز کا تعلق لفظ کے حروف سے نہیں بلکہ آواز (Sound) سے ہوتا ہے۔ یہ بات سمجھ لینے کے بعد کبھی غلطی نہیں ہوتی۔',
    urduKeyRules: [
      {
        title: 'A بمقابلہ An (آواز کا اصول)',
        explanation: 'واول آواز (Vowel sound) سے پہلے An لگتا ہے: an hour (h خاموش ہے)، an honest man۔ کونسوننٹ آواز سے پہلے A لگتا ہے: a university (یہاں "یو" کی کونسوننٹ آواز ہے)۔'
      },
      {
        title: 'The (خاص کرنے کے لیے)',
        explanation: 'جب سامع پہلے سے جانتا ہو کہ کس چیز کی بات ہو رہی ہے، یا دنیا میں جو واحد ہو (the sun, the moon, the sky)۔'
      },
      {
        title: 'Zero Article (جہاں آرٹیکل نہیں آتا)',
        explanation: 'عام گفتگو میں جمع اسماء اور گنے نہ جانے والے اسماء سے پہلے آرٹیکل نہیں آتا: "Water is life", "Books are helpful".'
      }
    ],
    urduCommonMistakeTip: '"A water" یا "an advice" مت کہیں۔ غیر محسوب چیزوں کے ساتھ a/an نہیں آتا۔'
  },

  'prepositions-in-on-at': {
    urduTitle: 'حروف ربط: IN, ON اور AT کا پیرامڈ قاعدہ (Prepositions)',
    romanTitle: 'Prepositions: In, On, At ka Pyramid Rule',
    urduSummary: 'وقت اور جگہ کے لیے In (وسیع ترین)، On (درمیانہ مخصوص) اور At (عین مخصوص نقطہ) کا آسان اصول۔',
    urduIntro: 'انگریزی سیکھنے والوں کو سب سے زیادہ الجھن In, On اور At میں ہوتی ہے۔ پیرامڈ اصول یاد رکھیں تو یہ الجھن ہمیشہ کے لیے ختم ہو جاتی ہے۔',
    urduKeyRules: [
      {
        title: 'وقت کا پیرامڈ (Time)',
        explanation: 'IN: صدیاں، سال، مہینے (in 2026, in July, in the morning)۔ ON: دن اور تاریخیں (on Monday, on 14th August)۔ AT: گھڑی کا عین وقت (at 5:00 PM, at noon, at night)۔'
      },
      {
        title: 'جگہ کا پیرامڈ (Place)',
        explanation: 'IN: ملک، شہر، بند کمرہ (in Pakistan, in Lahore, in the room)۔ ON: سڑک، سطح، پبلک ٹرانسپورٹ (on Mall Road, on the table, on the bus)۔ AT: مخصوص پتہ یا پتہ شدہ مقام (at the bus stop, at Fatima ki Academy)۔'
      }
    ],
    urduCommonMistakeTip: '"At the morning" کہنا غلط ہے، ہمیشہ "in the morning" کہیں، اور رات کے لیے "at night" کہیں۔'
  },

  'conjunctions': {
    urduTitle: 'حروف عطف: جملوں کو جوڑنے والے الفاظ (Conjunctions)',
    romanTitle: 'Conjunctions: Do Jumlo ko Milane Wale Alfaaz',
    urduSummary: 'FANBOYS (Coordinating)، اسباق والے (Subordinating) اور جوڑوں کی شکل والے (Correlative) حروف عطف۔',
    urduIntro: 'حروف عطف الفاظ اور جملوں کو ایسے جوڑتے ہیں جیسے اینٹوں کے درمیان سیمنٹ۔ ان کے ذریعے چھوٹی چھوٹی باتیں ایک خوبصورت رواں پیراگراف بن جاتی ہیں۔',
    urduKeyRules: [
      {
        title: 'FANBOYS (Coordinating Conjunctions)',
        explanation: 'For, And, Nor, But, Or, Yet, So — یہ برابر حیثیت کے دو جملوں کو آپس میں جوڑتے ہیں۔'
      },
      {
        title: 'Subordinating Conjunctions (وجہ اور شرط)',
        explanation: 'Because (کیونکہ)، Although (اگرچہ)، Since (چونکہ)، Unless (جب تک کہ)۔'
      },
      {
        title: 'Correlative جوڑے',
        explanation: 'Either... or (یا یہ یا وہ)، Neither... nor (نہ یہ نہ وہ)، Not only... but also (نہ صرف بلکہ)۔'
      }
    ],
    urduCommonMistakeTip: 'ایک ہی جملے میں Although اور But دونوں ایک ساتھ مت لگائیں؛ "Although it was cold, but we went" غلط ہے، صرف "Although it was cold, we went" کہیں۔'
  },

  'subject-verb-agreement': {
    urduTitle: 'فاعل اور فعل کی مطابقت کے 10 بنیادی اصول (Subject-Verb Agreement)',
    romanTitle: 'Subject Verb Agreement: Waahid aur Jama ke Qawaneen',
    urduSummary: 'واحد فاعل کے ساتھ واحد فعل، اور جمع فاعل کے ساتھ جمع فعل لگانے کا قانون۔',
    urduIntro: 'انگریزی کا بنیادی قانون ہے: واحد فاعل واحد فعل لے گا اور جمع فاعل جمع فعل۔ پیچیدگی تب آتی ہے جب درمیان میں اضافی الفاظ آ جاتے ہیں۔',
    urduKeyRules: [
      {
        title: 'واحد فعل کی علامت',
        explanation: 'انگریزی میں واحد فعل کے آخر میں عام طور پر s آتا ہے (is, has, does, works)، جبکہ جمع فعل بغیر s کے ہوتا ہے (are, have, do, work)۔'
      },
      {
        title: 'درمیانی الفاظ کا فریب',
        explanation: '"The teacher, along with her students, is coming" — اصل فاعل صرف The teacher ہے اس لیے فعل واحد (is) ہی رہے گا۔'
      },
      {
        title: 'Everyone, Each, Somebody ہمیشہ واحد ہیں',
        explanation: '"Everyone was present" درست ہے، "Everyone were present" غلط ہے۔'
      }
    ],
    urduCommonMistakeTip: '"There is many books" غلط ہے؛ چونکہ اصل فاعل many books ہے اس لیے "There are many books" کہیں۔'
  },

  'modal-verbs': {
    urduTitle: 'معاون افعال: Can, Could, May, Might, Must اور Should (Modal Verbs)',
    romanTitle: 'Modal Verbs: Qabliyat, Ijazat aur Naseehat',
    urduSummary: 'صلاحیت، امکان، اجازت، مشورے اور لازمی حکم کے اظہار کے لیے موڈل وربز کا استعمال۔',
    urduIntro: 'موڈل وربز جملے کا انداز اور مزاج بدل دیتے ہیں۔ یہ کبھی اپنی حالت نہیں بدلتے (ان کے ساتھ s یا ing کبھی نہیں لگتا)۔',
    urduKeyRules: [
      {
        title: 'بنیادی قانون (Bare Infinitive)',
        explanation: 'موڈل ورب کے فوراً بعد ہمیشہ فعل کی پہلی اصل فارم آتی ہے، بغیر to کے: "She should study" (نہ کہ "She should to study")۔'
      },
      {
        title: 'استعمالات کی پہچان',
        explanation: 'Can/Could = قابلیت یا شائستہ درخواست؛ May/Might = امکان یا رسمی اجازت؛ Should = مفید مشورہ؛ Must = لازمی قانونی یا اخلاقی حکم۔'
      }
    ],
    urduCommonMistakeTip: '"I can to speak English" مت کہیں؛ درست جملہ "I can speak English" ہے۔'
  },

  'conditionals': {
    urduTitle: 'شرطیہ جملے: Zero, First, Second اور Third Conditionals',
    romanTitle: 'Conditionals: Agar Magar wale Jumlay',
    urduSummary: 'سائنسی سچائی، حقیقی مستقبل، خیالی آرزو، اور ماضی کے پچھتاوے کے شرطیہ جملے۔',
    urduIntro: 'اگر آپ کہنا چاہتے ہیں کہ اگر ایسا ہوگا تو ایسا ہو جائے گا، یا اگر میں نے محنت کی ہوتی تو پاس ہو جاتا، تو آپ Conditionals استعمال کرتے ہیں۔',
    urduKeyRules: [
      {
        title: 'First Conditional (حقیقی مستقبل کی شرط)',
        explanation: 'If + Present Simple, will + Base Verb: "If you work hard, you will succeed" (اگر محنت کرو گے تو کامیاب ہو جاؤ گے)۔'
      },
      {
        title: 'Second Conditional (خیالی یا فرضی بات)',
        explanation: 'If + Past Simple, would + Base Verb: "If I were rich, I would help everyone" (سب کے لیے were لگایا جاتا ہے)۔'
      },
      {
        title: 'Third Conditional (ماضی کا ناقابل واپسی پچھتاوا)',
        explanation: 'If + Past Perfect, would have + V3: "If I had studied harder, I would have passed".'
      }
    ],
    urduCommonMistakeTip: 'If والے حصے کے اندر کبھی will مت لگائیں؛ "If I will go" غلط ہے، "If I go" درست ہے۔'
  },

  'active-passive-voice': {
    urduTitle: 'معروف اور مجہول جملے (Active & Passive Voice)',
    romanTitle: 'Active aur Passive Voice me Tabdeeli',
    urduSummary: 'جب فاعل اہم ہو تو Active، اور جب مفعول یا کام کی اہمیت زیادہ ہو تو Passive voice کا استعمال۔',
    urduIntro: 'ایکٹو وائس میں کام کرنے والا خود آگے ہوتا ہے (Fatima bakes a cake)، جبکہ پیسو وائس میں کام یا چیز آگے آ جاتی ہے (A cake is baked by Fatima)۔',
    urduKeyRules: [
      {
        title: 'پیسو وائس کی پہچان (Be + V3)',
        explanation: 'دنیا کے ہر پیسو جملے میں Be کی مناسب فارم (is/are/was/were/been/being) اور اس کے بعد ہمیشہ فعل کی تیسری فارم (V3) آتی ہے۔'
      },
      {
        title: 'تبدیلی کا فارمولا',
        explanation: 'ایکٹو کا Object نیا Subject بن جاتا ہے + Be کی شکل + تیسری فارم (V3) + by + کام کرنے والا۔'
      }
    ],
    urduCommonMistakeTip: 'پیسو جملوں میں کبھی پہلی یا دوسری فارم نہ لگائیں؛ "English is speak" غلط ہے، "English is spoken" درست ہے۔'
  },

  'direct-indirect-speech': {
    urduTitle: 'بلاواسطہ اور بالواسطہ گفتگو (Direct & Indirect / Reported Speech)',
    romanTitle: 'Reported Speech: Kisi ki Baat Doosre ko Batana',
    urduSummary: 'کسی کی کہی ہوئی بات کو اپنے الفاظ میں بیان کرتے وقت زمانوں، ضمیروں اور وقت کے الفاظ میں تبدیلی۔',
    urduIntro: 'ڈائریکٹ اسپیچ میں کسی کے کہے ہوئے الفاظ ہو بہو واوین (quotation marks) میں نقل کیے جاتے ہیں، جبکہ ان ڈائریکٹ میں واوین ہٹا کر بات رپورٹ کی جاتی ہے۔',
    urduKeyRules: [
      {
        title: 'زمانے کی تبدیلی (Tense Backshift)',
        explanation: 'اگر بتانے والا فعل ماضی میں ہو (He said that...)، تو تمام حال کے ٹینسز ایک درجہ ماضی میں چلے جاتے ہیں: Present Simple -> Past Simple، Will -> Would، Can -> Could.'
      },
      {
        title: 'وقت اور جگہ کے الفاظ',
        explanation: 'Today بن جاتا ہے That day، Tomorrow بن جاتا ہے The next day، Here بن جاتا ہے There.'
      }
    ],
    urduCommonMistakeTip: 'رپورٹ شدہ سوالیہ جملے میں سوالیہ ترتیب ختم ہو جاتی ہے؛ "He asked where was I going" غلط ہے، "He asked where I was going" درست ہے۔'
  },

  'sentence-structure': {
    urduTitle: 'جملے کی ساخت: سادہ، مرکب اور پیچیدہ جملے (Sentence Structure)',
    romanTitle: 'Sentence Structure: Simple, Compound aur Complex Jumlay',
    urduSummary: 'فاعل (Subject) اور خبر (Predicate) کی پہچان، اور جملوں کو مختلف ساختوں میں ترتیب دینے کا ہنر۔',
    urduIntro: 'ہر مکمل انگریزی جملے میں کم از کم ایک کام کرنے والا (Subject) اور ایک فعل پر مبنی حصہ (Predicate) ہونا لازمی ہے۔ اس سے آپ روانی کے ساتھ تحریر لکھ سکتے ہیں۔',
    urduKeyRules: [
      {
        title: 'Simple Sentence (سادہ جملہ)',
        explanation: 'اس میں ایک آزاد کلاز ہوتا ہے: "Fatima reads English books."'
      },
      {
        title: 'Compound Sentence (مرکب جملہ)',
        explanation: 'دو برابر کے جملے جو FANBOYS سے جڑے ہوں: "She studied hard, so she got top marks."'
      },
      {
        title: 'Complex Sentence (پیچیدہ جملہ)',
        explanation: 'ایک مکمل جملہ اور ایک ماتحت جملہ: "Although it was raining, they played the match."'
      }
    ],
    urduCommonMistakeTip: 'نامکمل جملے (Sentence Fragments) سے بچیں؛ "Because the weather was cold." اکیلا مکمل جملہ نہیں بن سکتا، اس کے ساتھ آگے بات مکمل کرنا ضروری ہے۔'
  }
};
