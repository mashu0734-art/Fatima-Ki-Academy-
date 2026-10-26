import React, { useState, useMemo, useEffect } from 'react';
import { BLOG_ARTICLES } from '../../data/blogArticles';
import { BlogArticle, PageId } from '../../types';
import { AdPlaceholder } from '../AdPlaceholder';
import {
  FileText,
  Clock,
  Calendar,
  Search,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Share2,
  Bookmark
} from 'lucide-react';

interface BlogPageProps {
  initialArticleId?: string;
  onNavigate: (page: PageId, targetId?: string) => void;
  showAdPreview: boolean;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  initialArticleId,
  onNavigate,
  showAdPreview
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    initialArticleId || null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (initialArticleId) {
      setSelectedArticleId(initialArticleId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialArticleId]);

  const categories = [
    'All',
    'Grammar Guide',
    'Vocabulary Tips',
    'Learning Strategy',
    'Speaking & Fluency'
  ];

  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((art) => {
      const matchesCat =
        selectedCategory === 'All' || art.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeArticle: BlogArticle | undefined = useMemo(() => {
    if (!selectedArticleId) return undefined;
    return BLOG_ARTICLES.find((a) => a.id === selectedArticleId);
  }, [selectedArticleId]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Blog Hero Banner */}
      <div className="bg-gradient-to-r from-[#071B40] via-[#123B83] to-[#071B40] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D4A52C] border border-white/15">
            <FileText className="w-4 h-4" />
            <span>Educational Blog & Learning Guides</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            English Articles & Learning Insights
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Original, in-depth educational articles covering grammar fundamentals, vocabulary expansion strategies, speaking tips, and practical study frameworks.
          </p>
        </div>
      </div>

      {/* View Mode: Single Article Reader vs Article Directory */}
      {activeArticle ? (
        /* Single Article View */
        <article className="space-y-8">
          {/* Back button */}
          <button
            onClick={() => setSelectedArticleId(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#123B83] hover:text-[#071B40] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-12 shadow-sm space-y-8">
            {/* Header info */}
            <div className="space-y-4 pb-6 border-b border-slate-100">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="font-bold text-[#123B83] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                  {activeArticle.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {activeArticle.publishedDate}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {activeArticle.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#071B40] leading-tight">
                {activeArticle.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                {activeArticle.excerpt}
              </p>
            </div>

            {/* Article Headings & Content */}
            <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
              {activeArticle.headings.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold text-[#071B40] flex items-center gap-2">
                    <span className="w-2 h-5 bg-[#D4A52C] rounded-full"></span>
                    <span>{section.title}</span>
                  </h2>

                  <div className="space-y-2">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.tips && section.tips.length > 0 && (
                    <div className="bg-[#F5F7FC] border border-blue-100 rounded-2xl p-4 space-y-1.5 text-xs text-slate-700">
                      <span className="font-bold text-[#123B83] uppercase block">
                        Actionable Practice Tips:
                      </span>
                      {section.tips.map((tip, tIdx) => (
                        <p key={tIdx} className="flex items-start gap-1.5">
                          <span className="text-[#D4A52C] font-bold">✓</span>
                          <span>{tip}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Key Takeaways Summary Card */}
            <div className="bg-gradient-to-br from-[#071B40] to-[#123B83] text-white rounded-2xl p-6 sm:p-8 space-y-3">
              <h3 className="text-base font-bold text-[#D4A52C] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#D4A52C]" />
                <span>Summary & Key Takeaways</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-100">
                {activeArticle.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A52C] mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Lesson Link */}
            {activeArticle.relatedTopicId && (
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Related Practice Lesson:</span>
                  <p className="text-sm font-bold text-[#071B40]">
                    Practice what you learned with interactive quizzes
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('grammar', activeArticle.relatedTopicId)}
                  className="px-4 py-2 bg-[#123B83] hover:bg-[#071B40] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open Related Lesson</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4A52C]" />
                </button>
              </div>
            )}
          </div>
        </article>
      ) : (
        /* Articles List Directory */
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#123B83] text-white font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-[#123B83] bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4 group cursor-pointer"
                onClick={() => {
                  setSelectedArticleId(article.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-[#123B83] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {article.category}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-[#071B40] group-hover:text-[#123B83] transition-colors mb-2 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    {article.publishedDate}
                  </span>
                  <div className="flex items-center gap-1 font-bold text-[#123B83] group-hover:text-[#D4A52C] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ad Placeholder if preview enabled */}
      {showAdPreview && (
        <AdPlaceholder slotId="blog-bottom-banner" format="banner" />
      )}
    </div>
  );
};
