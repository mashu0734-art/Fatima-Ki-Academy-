# Fatima ki Academy — Official Website

> **Learn • Practice • Grow**  
> Free English Learning and Practice Platform

Welcome to **Fatima ki Academy**, an educational web application designed for English language learners, school and college students, and exam candidates.

---

## 🌟 Features & Highlights

- **Official Brand Identity:** Features the approved Fatima ki Academy emblem with royal blue (`#123B83`), deep navy (`#071B40`), and metallic gold (`#D4A52C`).
- **Comprehensive Grammar Curriculum:** In-depth lessons covering the 8 Parts of Speech, all 12 English Tenses, Articles (A, An, The), Prepositions (In, On, At), Active and Passive Voice, Direct and Indirect Speech, and Subject-Verb Agreement.
- **Vocabulary Builder:** 100+ everyday and academic words with phonetics, English definitions, Urdu translations (`اردو ترجمہ`), audio pronunciation via browser SpeechSynthesis, synonyms, antonyms, and 3D interactive flashcards.
- **Interactive Quizzes:** Real-time JavaScript multiple-choice quizzes with instant feedback, scoring, rule explanations, and review of incorrect answers.
- **Sentence Correction Practice:** Interactive error-spotting exercises detailing why sentences were ungrammatical.
- **Reading Comprehension:** Original beginner and intermediate reading passages with vocabulary callouts and comprehension question sets.
- **Educational Articles:** Substantive guides including "How to Learn English for Beginners", "Present Simple Tense Explained", and "Top 10 Common English Grammar Mistakes".
- **Instant Site Search:** Global search modal with Ctrl+K / ⌘K shortcut indexing lessons, vocabulary, quizzes, and articles.
- **100% Client-Side Architecture:** Zero paid database, zero mandatory server dependencies. Fully deployable on the **free tier of Cloudflare Pages**.
- **SEO & AdSense Ready:** Pre-configured `sitemap.xml`, `robots.txt`, OpenGraph cards, Twitter cards, Schema.org JSON-LD structured data, and toggleable clean AdSense preview containers.

---

## 🚀 How to Deploy on Cloudflare Pages (Free Plan)

Follow these step-by-step instructions to deploy the website for $0/month on Cloudflare Pages:

### Step 1: Create a GitHub Repository
1. Sign in to your account at [github.com](https://github.com).
2. Click **New Repository** and name it `fatima-ki-academy`.
3. Open your terminal in this project folder and push your code:
   ```bash
   git init
   git add .
   git commit -m "Complete Fatima ki Academy platform"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fatima-ki-academy.git
   git push -u origin main
   ```

### Step 2: Connect to Cloudflare Pages
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and create a free Cloudflare account if you don't already have one.
2. In the left navigation menu, navigate to **Compute (Workers & Pages)** > **Pages**.
3. Click **Connect to Git** and choose **GitHub**.
4. Authorize Cloudflare and select your `fatima-ki-academy` repository.

### Step 3: Configure Build Settings
Enter these exact settings in the deployment setup screen:
- **Framework Preset:** `Vite` (or `None`)
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Root Directory:** leave blank (or `/`)
- **Environment Variables (Optional):**
  - `NODE_VERSION` = `20`

### Step 4: Deploy & Verify
1. Click **Save and Deploy**. Cloudflare Pages will run the build and publish your site in less than 1 minute.
2. You will be provided with a live URL such as:
   `https://fatima-ki-academy.pages.dev`
3. Any future commit pushed to your GitHub `main` branch will automatically build and deploy new changes.

### Step 5: (Optional) Connect a Custom Domain
1. In Cloudflare Pages, go to **Custom Domains** > **Set up a custom domain**.
2. Enter your domain (e.g. `fatimakiiacademy.org`).
3. Cloudflare will automatically provision a free SSL certificate.

### Step 6: Submit Sitemap to Google Search Console
1. Open [Google Search Console](https://search.google.com/search-console).
2. Add your property (e.g. `https://fatima-ki-academy.pages.dev`).
3. In the left sidebar, click **Sitemaps**.
4. Enter `sitemap.xml` and click **Submit**. Google will crawl all grammar lessons, vocabulary words, and educational articles.

---

## 💻 Local Development

To run the application locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the local Vite development server
npm run dev

# 3. Build production distribution
npm run build
```

---

## 📁 Project Architecture

```
/
├── public/
│   ├── assets/aistudio/file_00000000648081f49a1f69f463491d73_8e6929c2.png  # Official approved logo
│   ├── logo.png                                                            # Brand logo copy
│   ├── favicon.png                                                         # Browser favicon
│   ├── robots.txt                                                          # Search engine crawling rules
│   └── sitemap.xml                                                         # XML sitemap
├── src/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── HomePage.tsx               # Hero, daily word, categories, highlights
│   │   │   ├── GrammarPage.tsx            # Lessons, formulas, comparisons, practice
│   │   │   ├── VocabularyPage.tsx         # Search, flashcards, Urdu meanings, TTS
│   │   │   ├── QuizzesPage.tsx            # Multiple-choice quiz engine with scoring
│   │   │   ├── SentenceCorrectionPage.tsx # Sentence error analysis engine
│   │   │   ├── ReadingPage.tsx            # Passages with vocabulary and questions
│   │   │   ├── BlogPage.tsx               # Educational articles directory & reader
│   │   │   ├── AboutPage.tsx              # Institutional mission and methodology
│   │   │   ├── ContactPage.tsx            # Validated form and static routing guide
│   │   │   ├── PrivacyPage.tsx            # Compliant privacy policy
│   │   │   └── TermsPage.tsx              # Terms of use
│   │   ├── Header.tsx                     # Sticky nav with approved brand logo
│   │   ├── Footer.tsx                     # Links, copyright, and deployment modal
│   │   ├── SearchModal.tsx                # Fast site-wide search with Ctrl+K
│   │   ├── CloudflareGuideModal.tsx       # In-app deployment guide with copyable code
│   │   └── AdPlaceholder.tsx              # Google AdSense ready container
│   ├── data/
│   │   ├── lessons.ts                     # Comprehensive grammar curriculum
│   │   ├── vocabulary.ts                  # Words with Urdu translations & confused pairs
│   │   ├── quizzes.ts                     # Category-wise 4-option quiz questions
│   │   ├── sentenceCorrection.ts          # Sentence correction challenges
│   │   ├── readingPassages.ts             # Reading comprehension texts
│   │   └── blogArticles.ts                # Original educational articles
│   ├── types/index.ts                     # TypeScript data interfaces
│   ├── App.tsx                            # Main router & hash controller
│   ├── main.tsx                           # Application entry point
│   └── index.css                          # Tailwind CSS & typography setup
├── index.html                             # SEO tags, Google Fonts, JSON-LD schema
├── metadata.json                          # App Studio manifest
└── package.json                           # Dependencies & scripts
```

---

## 📜 License
All educational materials and code are open-source and free for learners worldwide.
`@license Apache-2.0`
