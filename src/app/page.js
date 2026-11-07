function Navbar() {
  return (
    <nav className="flex justify-between items-center pb-6 mb-20 border-b border-white/15">
      <div className="flex items-baseline gap-1.5">
        <span className="text-lg font-extrabold tracking-[0.2em] uppercase">FOLD</span>
        <span className="text-lg font-serif italic font-normal tracking-normal">Ethos.</span>
      </div>
      <div className="flex items-center gap-8 text-sm text-[#A1A1A1]">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#process" className="hover:text-white transition-colors">Process</a>
        <a href="#contact" className="text-white border border-white/25 px-4 py-1.5 hover:bg-white hover:text-black transition-colors">
          Inquire
        </a>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-8">
      <Navbar />
      <section className="py-16 md:py-28 border-b border-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#A1A1A1]">
          Creative studio for modern e-commerce brands
        </p>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mt-6 max-w-5xl leading-[1.05]">
          Design that earns attention.
        </h1>
        <p className="text-lg md:text-xl text-[#A1A1A1] mt-8 max-w-2xl leading-relaxed">
          Design-first thinking for brands that want to be seen, remembered, and chosen.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#work"
            className="bg-white text-black px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-[#A1A1A1] transition-colors"
          >
            View Selected Work
          </a>
          <a
            href="#services"
            className="border border-white/20 text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:border-white transition-colors"
          >
            Explore Services
          </a>
        </div>
      </section>
    </main>
  );
}
