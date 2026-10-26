import React, { useState } from 'react';
import { X, Copy, Check, Cloud, Github, Globe, Search, Terminal, ExternalLink } from 'lucide-react';

interface CloudflareGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CloudflareGuideModal: React.FC<CloudflareGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B40]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        role="dialog"
        aria-labelledby="cf-guide-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#123B83]/10 text-[#123B83] flex items-center justify-center">
              <Cloud className="w-5 h-5 text-[#123B83]" />
            </div>
            <div>
              <h2 id="cf-guide-title" className="text-lg font-bold text-[#071B40]">
                Cloudflare Pages Free Deployment Guide
              </h2>
              <p className="text-xs text-slate-500">Step-by-step instructions to host Fatima ki Academy for $0/mo</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 text-sm text-slate-700 leading-relaxed">
          {/* Quick Overview */}
          <div className="bg-[#F5F7FC] border border-blue-100 rounded-xl p-4 flex items-start gap-3">
            <Globe className="w-5 h-5 text-[#123B83] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#071B40] text-sm">Free Global CDN & Unlimited Bandwidth</p>
              <p className="text-xs text-slate-600 mt-1">
                Cloudflare Pages provides free worldwide edge hosting, free SSL certificates, automated git continuous deployment, and free subdomains (e.g., <code className="text-[#123B83] font-mono bg-white px-1 py-0.5 rounded border border-blue-100">fatima-ki-academy.pages.dev</code>) with zero server maintenance costs.
              </p>
            </div>
          </div>

          {/* Step 1 */}
          <div className="border border-slate-100 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B40] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#123B83] text-white text-xs flex items-center justify-center">1</span>
                Prepare Your Git Repository
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              Push your project files to a private or public GitHub or GitLab repository.
            </p>
            <div className="relative bg-[#071B40] text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
              <pre>{`git init
git add .
git commit -m "Initial commit for Fatima ki Academy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fatima-ki-academy.git
git push -u origin main`}</pre>
              <button
                onClick={() => handleCopy(`git init\ngit add .\ngit commit -m "Initial commit for Fatima ki Academy"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USERNAME/fatima-ki-academy.git\ngit push -u origin main`, 'git-commands')}
                className="absolute top-2 right-2 p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Copy commands"
              >
                {copiedKey === 'git-commands' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border border-slate-100 rounded-xl p-4 space-y-2">
            <h3 className="font-bold text-[#071B40] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#123B83] text-white text-xs flex items-center justify-center">2</span>
              Connect to Cloudflare Pages
            </h3>
            <ol className="list-decimal list-inside text-xs text-slate-600 space-y-1.5 ml-1">
              <li>Sign in to your free account at <a href="https://dash.cloudflare.com" target="_blank" rel="noreferrer" className="text-[#123B83] underline font-medium">dash.cloudflare.com</a>.</li>
              <li>In the left sidebar, navigate to <strong>Compute (Workers & Pages)</strong> &rarr; <strong>Pages</strong>.</li>
              <li>Click <strong>Connect to Git</strong> and select your GitHub repository <code className="bg-slate-100 px-1 rounded">fatima-ki-academy</code>.</li>
            </ol>
          </div>

          {/* Step 3 - Critical Build Configuration */}
          <div className="border-2 border-[#D4A52C]/30 bg-amber-50/30 rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-[#071B40] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#D4A52C] text-white text-xs flex items-center justify-center">3</span>
              Exact Build Configuration Settings
            </h3>
            <p className="text-xs text-slate-700">
              When prompted by Cloudflare Pages for build presets, enter these exact values:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-amber-200">
                <span className="text-slate-500 block mb-1">Framework Preset</span>
                <span className="font-mono font-bold text-[#071B40]">Vite (or None)</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-amber-200">
                <span className="text-slate-500 block mb-1">Build command</span>
                <span className="font-mono font-bold text-[#123B83]">npm run build</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-amber-200">
                <span className="text-slate-500 block mb-1">Build output directory</span>
                <span className="font-mono font-bold text-[#123B83]">dist</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-amber-200">
                <span className="text-slate-500 block mb-1">Node.js Version</span>
                <span className="font-mono font-bold text-slate-700">NODE_VERSION = 20 (or higher)</span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="border border-slate-100 rounded-xl p-4 space-y-2">
            <h3 className="font-bold text-[#071B40] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#123B83] text-white text-xs flex items-center justify-center">4</span>
              Deploy and Test
            </h3>
            <p className="text-xs text-slate-600">
              Click <strong>Save and Deploy</strong>. Cloudflare will run your build within ~45 seconds and provide a live URL such as <code className="bg-slate-100 text-[#123B83] px-1.5 py-0.5 rounded font-mono">https://fatima-ki-academy.pages.dev</code>. Any subsequent git push to your <code className="bg-slate-100 px-1 rounded font-mono">main</code> branch will automatically trigger a new deployment.
            </p>
          </div>

          {/* Step 5 - Google Search Console & SEO */}
          <div className="border border-slate-100 rounded-xl p-4 space-y-2">
            <h3 className="font-bold text-[#071B40] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#123B83] text-white text-xs flex items-center justify-center">5</span>
              Google Search Console & SEO Verification
            </h3>
            <p className="text-xs text-slate-600">
              Once deployed:
            </p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              <li>Open <a href="https://search.google.com/search-console" target="_blank" rel="noreferrer" className="text-[#123B83] underline">Google Search Console</a> and add your URL.</li>
              <li>Submit your XML sitemap URL: <code className="bg-slate-100 text-[#123B83] px-1 py-0.5 rounded font-mono">https://YOUR-DOMAIN/sitemap.xml</code>.</li>
              <li>Google will crawl all grammar lessons, vocabulary lists, and blog articles automatically.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#123B83] hover:bg-[#071B40] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
          >
            Got It, Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
