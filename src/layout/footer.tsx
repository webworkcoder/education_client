import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 md:pt-20 border-t border-white/5">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 md:pb-16 text-center md:text-left">

        {/* BRAND COLUMN */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/20">
              T
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase">
              TopSun <span className="text-blue-500">Edu</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            India's most trusted gateway to international medical excellence.
            Providing 100% transparent admission support.
          </p>
          <div className="flex gap-3">
            {['FB', 'IG', 'YT', 'LI'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-bold text-slate-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* DESTINATIONS COLUMN */}
        <div className="lg:pl-10">
          <h4 className="text-white font-bold mb-6 md:mb-7 uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Destinations
          </h4>
          <ul className="space-y-3 md:space-y-4 text-sm font-medium">
            {['Russia', 'Georgia', 'Kazakhstan', 'Uzbekistan', 'Vietnam'].map((country) => (
              <li key={country}>
                <a href={`/mbbs-in-${country.toLowerCase()}`} className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">
                  MBBS in {country}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold mb-6 md:mb-7 uppercase tracking-widest text-[10px] md:text-xs">
            Head Office
          </h4>
          <div className="space-y-5 text-sm leading-relaxed max-w-[250px] md:max-w-none">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
              <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <p>Business Hub Tower, Sector 62, Noida, UP - 201309</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
              <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="break-all">info@topsunedu.com</p>
            </div>
          </div>
        </div>

        {/* NEWSLETTER COLUMN */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold mb-6 md:mb-7 uppercase tracking-widest text-[10px] md:text-xs">
            Direct Inquiry
          </h4>
          <div className="space-y-4 w-full max-w-sm">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm w-full outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600"
              />
              <button className="absolute right-2 top-2 bg-blue-600 p-1.5 rounded-lg text-white hover:bg-blue-500 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-slate-600 font-medium text-center md:text-left">
              *Subscribe for latest updates on fee structures.
            </p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT & AGENCY ATTRIBUTION */}
      <div className="border-t border-white/5 py-8 md:py-10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Main Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold uppercase text-slate-500">
              © {currentYear} TopSun Edu. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[9px] md:text-[10px] font-bold tracking-widest uppercase md:border-l md:border-white/10 md:pl-8">
              <a href="/privacy" className="hover:text-blue-500 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-blue-500 transition-colors">Terms</a>
            </div>
          </div>

          {/* Agency Credit */}
          <div className="flex flex-col items-center md:items-end gap-2 group">
            <span className="text-[9px] uppercase tracking-[0.2em] text-slate-600 font-medium">
              Crafted by
            </span>
            <a
              href="https://www.axvionel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-[11px] md:text-xs font-black text-white tracking-tight uppercase">
                Axvionel <span className="text-blue-500">Digital</span>
              </span>
              <svg
                className="w-3 h-3 text-slate-600 group-hover:text-blue-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};