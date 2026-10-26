import React, { useEffect, useRef } from 'react';

interface AdsterraAdProps {
  type: 
    | 'popunder' 
    | 'nativeBanner' 
    | 'smartlink' 
    | 'socialBar' 
    | 'banner-468x60' 
    | 'banner-300x250' 
    | 'banner-160x300' 
    | 'banner-160x600' 
    | 'banner-320x50' 
    | 'banner-728x90';
  className?: string;
}

export const AdsterraAd: React.FC<AdsterraAdProps> = ({ type, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Popunder (Inject in head once)
  useEffect(() => {
    if (type === 'popunder') {
      const existingScript = document.getElementById('adsterra-popunder');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'adsterra-popunder';
        script.setAttribute('data-cfasync', 'false');
        script.src = 'https://afders.org/1/cfe7817e61d6f2b63c80dc39a7ddb0f7';
        document.head.appendChild(script);
      }
    }
  }, [type]);

  // 2. Social Bar (Inject in head once)
  useEffect(() => {
    if (type === 'socialBar') {
      const existingScript = document.getElementById('adsterra-socialbar');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'adsterra-socialbar';
        script.setAttribute('data-cfasync', 'false');
        script.src = 'https://bicea.org/14/c21075c2bdb740046449290a9da6f796';
        document.head.appendChild(script);
      }
    }
  }, [type]);

  // 3. Native Banner
  useEffect(() => {
    if (type === 'nativeBanner' && containerRef.current) {
      containerRef.current.innerHTML = '';
      
      const containerId = 'container-9a3fa2cf3623c1f61dcce95056561922';
      const div = document.createElement('div');
      div.id = containerId;
      containerRef.current.appendChild(div);

      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = 'https://bicea.org/21/9a3fa2cf3623c1f61dcce95056561922';
      containerRef.current.appendChild(script);
    }
  }, [type]);

  // 4. Banner Iframe Ads (atOptions based: 468x60, 300x250, 160x300, 160x600, 320x50, 728x90)
  useEffect(() => {
    const bannerConfig: Record<string, { key: string; width: number; height: number }> = {
      'banner-468x60': { key: '0feb0928f5bbfc497c9db9f233e2cab0', width: 468, height: 60 },
      'banner-300x250': { key: '18e065bec44fd07aeaa5e8d083e9c2b4', width: 300, height: 250 },
      'banner-160x300': { key: 'a4e0a2929d92ffe0ffe217832e82688a', width: 160, height: 300 },
      'banner-160x600': { key: '56fa9d86f658f45627acfc099f47954b', width: 160, height: 600 },
      'banner-320x50': { key: '4386a34f4cf7ed4a9e6c662a273fde7f', width: 320, height: 50 },
      'banner-728x90': { key: '6bfc8e1b8a0bccfc92c1551370f85ba9', width: 728, height: 90 },
    };

    if (bannerConfig[type] && containerRef.current) {
      containerRef.current.innerHTML = '';
      const config = bannerConfig[type];

      const scriptOptions = document.createElement('script');
      scriptOptions.textContent = `
        atOptions = {
          'key' : '${config.key}',
          'format' : 'iframe',
          'height' : ${config.height},
          'width' : ${config.width},
          'params' : {}
        };
      `;
      containerRef.current.appendChild(scriptOptions);

      const scriptInvoke = document.createElement('script');
      scriptInvoke.src = `https://bicea.org/22/${config.key}`;
      containerRef.current.appendChild(scriptInvoke);
    }
  }, [type]);

  if (type === 'popunder' || type === 'socialBar') {
    return null; // Injected globally in head
  }

  if (type === 'smartlink') {
    return (
      <div className={`my-4 p-4 bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-indigo-500/10 border border-amber-300/40 rounded-2xl text-center shadow-sm ${className}`}>
        <p className="text-xs font-bold text-[#123B83] mb-2 uppercase tracking-wide">⭐ Recommended Sponsor Resource / Smartlink</p>
        <a
          href="https://arwf.org/4/b34ed62281bb17c5d8f45d7604f766e8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#123B83] hover:bg-[#071B40] text-white text-xs font-bold rounded-xl shadow transition-all transform hover:scale-105"
        >
          <span>Access Sponsored Study Material (Smartlink)</span>
          <span className="text-[#D4A52C]">→</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex justify-center items-center my-3 overflow-hidden ${className}`}>
      <div ref={containerRef} className="adsterra-ad-container min-h-[50px] flex justify-center items-center" />
    </div>
  );
};
