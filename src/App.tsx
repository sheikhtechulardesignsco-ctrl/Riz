import { PORTFOLIO_PROJECTS } from './data/portfolioData';

export default function App() {
  const contactEmail = 'sheikhtechulardesignsco@gmail.com';

  return (
    <div className="portfolio-wrapper min-h-screen bg-[#070709] text-[#f8fafc] relative">
      {/* MINIMAL STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-[#070709]/92 backdrop-blur-md border-b border-[rgba(0,210,255,0.15)] px-6 lg:px-12 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-[#f8fafc] group-hover:text-[#00d2ff] transition-colors">
              RIZ
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]"></span>
            <span className="hidden sm:inline-block text-[11px] tracking-widest uppercase text-[#94a3b8] font-medium ml-2">
              Book Design & Illustration Studio
            </span>
          </a>

          <nav className="flex items-center gap-6 lg:gap-8 text-xs tracking-wider uppercase font-medium">
            <a
              href="#about"
              className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
            >
              Overview
            </a>
            <a
              href="#portfolio"
              className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
            >
              Works
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#070709] bg-[#00d2ff] hover:bg-[#38bdf8] transition-all rounded-xs shadow-sm"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION: SLEEK EDITORIAL TYPOGRAPHY (IMAGE REMOVED, NUMBERS REMOVED, TICKER REMOVED) */}
      <section
        id="about"
        className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 px-6 lg:px-12 border-b border-[rgba(0,210,255,0.12)] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto text-left space-y-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#0e0f14] border border-[rgba(0,210,255,0.25)] rounded-xs">
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-[#00d2ff] font-semibold">
              Creative Director & Lead Illustrator
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#f8fafc] tracking-tight">
              Riz the Wizz
            </h2>
            <p className="text-xl sm:text-2xl text-[#38bdf8] font-serif italic">
              Your go-to creative bloke
            </p>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f8fafc] leading-[1.06]">
            Crafting iconic book packaging & whimsical storybook universes.
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-3xl">
            From atmospheric psychological noir thrillers and personal memoirs to beloved, character-driven children’s adventures. Delivering distinctive visual depth, meticulous typography, and tactile storytelling across print and digital editions worldwide.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contactEmail}?subject=Book%20Design%20/%20Illustration%20Commission`}
              className="px-7 py-4 bg-[#00d2ff] hover:bg-[#38bdf8] text-[#070709] font-bold text-xs tracking-wider uppercase rounded-xs shadow-lg shadow-[#00d2ff]/20 transition-all hover:translate-y-[-1px]"
            >
              Start a Commission
            </a>
            <a
              href="#portfolio"
              className="px-7 py-4 border border-[rgba(0,210,255,0.35)] hover:border-[#00d2ff] hover:bg-[#00d2ff]/10 text-[#f8fafc] font-semibold text-xs tracking-wider uppercase rounded-xs transition-all"
            >
              Explore Selected Works ↓
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PURE CSS TAB CONTROLS (FIXED POSITION IN CSS PREVENTS ANY SCROLL JUMP)     */}
      {/* ========================================================================= */}
      <input
        type="radio"
        id="tab-covers"
        name="portfolio-tabs"
        className="portfolio-tab-input"
        defaultChecked
      />
      <input
        type="radio"
        id="tab-children"
        name="portfolio-tabs"
        className="portfolio-tab-input"
      />

      {/* INTERESTING BESPOKE TABS SECTION */}
      <div id="portfolio" className="tabs-wrapper pt-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00d2ff]">
              Selected Works
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#f8fafc]">
              Curated Portfolio
            </h2>
            <p className="text-xs text-[#94a3b8]">
              Toggle between the two dedicated disciplines below.
            </p>
          </div>

          {/* HIGH-END INTERACTIVE TAB CONSOLE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2 bg-[#0b0c12] border border-[rgba(0,210,255,0.2)] rounded-xs w-full lg:w-auto">
            {/* Tab 1: Book Covers & Novels */}
            <label
              htmlFor="tab-covers"
              className="tab-button-custom cursor-pointer p-4 rounded-xs flex items-center justify-between gap-6"
            >
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/20 tab-indicator-dot transition-all"></span>
                  <span className="font-display text-sm font-bold tracking-wider uppercase text-white tab-title-text transition-colors">
                    Book Covers & Novels
                  </span>
                </div>
                <span className="text-[11px] text-[#94a3b8] block mt-0.5 ml-4">
                  Southern Noir · Thrillers · Memoirs
                </span>
              </div>
              <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-white/5 border border-white/10 rounded-xs text-[#94a3b8]">
                01
              </span>
            </label>

            {/* Tab 2: Children's Illustrated */}
            <label
              htmlFor="tab-children"
              className="tab-button-custom cursor-pointer p-4 rounded-xs flex items-center justify-between gap-6"
            >
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/20 tab-indicator-dot transition-all"></span>
                  <span className="font-display text-sm font-bold tracking-wider uppercase text-white tab-title-text transition-colors">
                    Children's Illustrated
                  </span>
                </div>
                <span className="text-[11px] text-[#94a3b8] block mt-0.5 ml-4">
                  Storybooks · Whimsical Character Art
                </span>
              </div>
              <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-white/5 border border-white/10 rounded-xs text-[#94a3b8]">
                02
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* SELECTED WORKS RESPONSIVE GRID (ISOLATED BY TAB) */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PORTFOLIO_PROJECTS.map((item) => (
            <article
              key={item.id}
              className={`card-item cat-${item.category} flex flex-col bg-[#0e0f15] border border-[rgba(0,210,255,0.18)] hover:border-[#00d2ff] rounded-xs transition-all duration-300 hover:shadow-2xl hover:shadow-black/80 group`}
            >
              {/* Cover Art Container */}
              <div className="book-wrapper p-4 pb-0 flex justify-center bg-gradient-to-b from-[#13141d] to-[#0e0f15]">
                <a
                  href={`#modal-${item.id}`}
                  className="book-card-3d w-full aspect-[2/3] block rounded-xs overflow-hidden relative shadow-xl cursor-pointer"
                  style={{
                    backgroundColor: item.palette.bg,
                    border: `1px solid ${item.palette.border}`,
                  }}
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2 bg-[#00d2ff] text-[#070709] text-[11px] font-bold uppercase tracking-wider rounded-xs shadow">
                      Inspect & Read Synopsis
                    </span>
                  </div>
                </a>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] text-[#00d2ff] font-medium tracking-wide mb-1.5">
                    {item.genreTag}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#f8fafc] group-hover:text-[#00d2ff] transition-colors leading-snug">
                    <a href={`#modal-${item.id}`}>{item.title}</a>
                  </h3>
                  <div className="text-xs text-[#94a3b8] mt-0.5">
                    {item.authorOrIllustrator}
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed mt-2.5 line-clamp-2">
                    {item.blurb}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={`#modal-${item.id}`}
                    className="text-xs font-semibold uppercase tracking-wider text-[#00d2ff] hover:underline"
                  >
                    Read Details →
                  </a>
                  <a
                    href={`mailto:${contactEmail}?subject=Inquiry%20regarding%20${encodeURIComponent(item.title)}`}
                    className="text-[11px] text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* FOOTER & DIRECT STUDIO CONTACT */}
      <footer id="contact" className="py-16 px-6 lg:px-12 bg-[#050608] border-t border-[rgba(0,210,255,0.15)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-[#f8fafc]">
                  RIZ
                </span>
                <span className="text-sm font-serif italic text-[#00d2ff]">
                  Riz the Wizz — Your go-to creative bloke
                </span>
              </div>
              <p className="text-xs text-[#94a3b8] max-w-md leading-relaxed">
                Independent book cover designer and illustrator providing
                bespoke creative direction for visionary authors, publishers,
                and discerning creators worldwide.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#00d2ff] font-medium block mb-2">
                  Direct Inquiries & Commissions
                </span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-mono text-lg sm:text-xl text-[#f8fafc] hover:text-[#00d2ff] transition-colors underline decoration-[#00d2ff]/50 underline-offset-4"
                >
                  {contactEmail}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-xs text-[#94a3b8] uppercase tracking-wider">
                <a href="#about" className="hover:text-[#f8fafc] transition-colors">
                  Top of Page ↑
                </a>
                <a href="#portfolio" className="hover:text-[#f8fafc] transition-colors">
                  Browse Works
                </a>
                <a
                  href={`mailto:${contactEmail}?subject=Quote%20Request`}
                  className="hover:text-[#f8fafc] transition-colors"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]">
            <p>© {new Date().getFullYear()} RIZ Studio. All Rights Reserved.</p>
            <p className="text-[11px]">
              Built with semantic HTML5 & Modern CSS3 · Zero JavaScript
            </p>
          </div>
        </div>
      </footer>

      {/* PURE CSS MODALS (ACTIVATED VIA :target) */}
      {PORTFOLIO_PROJECTS.map((item) => (
        <aside
          key={`modal-${item.id}`}
          id={`modal-${item.id}`}
          className="modal-overlay"
          aria-label={item.title}
        >
          {/* Click outside to close (links to #portfolio) */}
          <a
            href="#portfolio"
            className="absolute inset-0 cursor-default"
            aria-label="Close dialog"
          ></a>

          <div className="modal-content-box p-6 sm:p-10 z-10 rounded-xs">
            <div className="flex items-start justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#00d2ff]">
                  {item.genreTag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f8fafc] mt-1">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm text-[#94a3b8] font-serif italic mt-0.5">
                    {item.subtitle}
                  </p>
                )}
                <p className="text-xs text-[#94a3b8] mt-1">
                  {item.authorOrIllustrator}
                </p>
              </div>

              {/* Close Button */}
              <a
                href="#portfolio"
                className="w-10 h-10 flex items-center justify-center rounded-xs bg-white/5 hover:bg-[#00d2ff] text-white hover:text-[#070709] text-lg font-bold transition-colors"
                aria-label="Close modal"
              >
                ✕
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-start">
              {/* Cover Art Column */}
              <div className="md:col-span-5 flex justify-center">
                <div
                  className="w-full max-w-[260px] aspect-[2/3] rounded-xs overflow-hidden border border-[rgba(0,210,255,0.3)] shadow-2xl relative"
                  style={{ backgroundColor: item.palette.bg }}
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Detailed Synopsis & Specs Column */}
              <div className="md:col-span-7 space-y-6">
                {item.keyQuote && (
                  <blockquote className="text-sm font-serif italic text-[#38bdf8] border-l-2 border-[#00d2ff] pl-4 py-1">
                    "{item.keyQuote}"
                  </blockquote>
                )}

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#f8fafc] font-semibold mb-2">
                    Synopsis & Overview
                  </h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {item.extendedBlurb || item.blurb}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-[#94a3b8] block">Creative Discipline</span>
                    <span className="text-[#f8fafc] font-medium mt-0.5 block">
                      {item.role}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#94a3b8] block">Lead Creative</span>
                    <span className="text-[#f8fafc] font-medium mt-0.5 block">
                      Riz the Wizz
                    </span>
                  </div>
                  <div>
                    <span className="text-[#94a3b8] block">Category</span>
                    <span className="text-[#f8fafc] font-medium mt-0.5 block uppercase">
                      {item.category === 'covers'
                        ? 'Book Covers'
                        : "Children's Book"}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#94a3b8] block">Inquiries</span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-[#00d2ff] hover:underline font-mono text-[11px] mt-0.5 block truncate"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${contactEmail}?subject=Book%20Inquiry:%20${encodeURIComponent(item.title)}`}
                    className="px-5 py-2.5 bg-[#00d2ff] hover:bg-[#38bdf8] text-[#070709] font-bold text-xs tracking-wider uppercase rounded-xs transition-colors"
                  >
                    Commission Similar Work
                  </a>
                  <a
                    href="#portfolio"
                    className="px-5 py-2.5 border border-white/20 hover:border-white text-xs uppercase tracking-wider text-[#f8fafc] transition-colors rounded-xs"
                  >
                    Back to Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      ))}
    </div>
  );
}
