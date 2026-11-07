use client";

import { useState, useEffect } from "react";

const PROJECTS = [
  {
    id: "velvet-roast",
    brand: "KĀPI NOIR",
    category: "Listing Images",
    platform: "Amazon & Blinkit",
    label: "Concept work",
    title: "7-Slide Conversion Gallery & Hero Packaging Callouts",
    summary:
      "High-contrast typographic hierarchy, roast profile comparison chart, and brew-method infographic sequence designed for instant mobile thumb-stop.",
    deliverables: ["Hero Image Polish", "5 Feature Infographics", "Comparison Chart"],
  },
  {
    id: "aura-botanicals",
    brand: "AURA BOTANICALS",
    category: "A+ Content",
    platform: "Amazon & D2C Website",
    label: "Concept work",
    title: "Editorial A+ Brand Story & Ingredient Breakdown",
    summary:
      "Modular A+ layout system highlighting active clinical ratios, texture macro frames, and routine pairing blocks without clutter.",
    deliverables: ["6-Module A+ Layout", "Ingredient Callout Grid", "Routine Regimen Banner"],
  },
  {
    id: "kinetix-audio",
    brand: "MONOLITH AUDIO",
    category: "Infographics",
    platform: "Flipkart & Amazon",
    label: "Concept work",
    title: "Technical Spec Callouts & Acoustic Architecture Visuals",
    summary:
      "Precision hairline exploded views, battery benchmark tables, and dimension overlays engineered for consumer electronics shoppers.",
    deliverables: ["Exploded Spec Diagram", "Dimension & Fit Guide", "What's In The Box Grid"],
  },
  {
    id: "pure-whey",
    brand: "VERVE LABS",
    category: "Listing Images",
    platform: "Amazon, Flipkart & Blinkit",
    label: "Concept work",
    title: "Quick-Commerce Thumbnail & Nutritional Clarity System",
    summary:
      "Designed for tiny Blinkit & Instamart grid cards: bold macro badge hierarchy, scoop-to-protein visual ratio, and trust certifications.",
    deliverables: ["Quick-Commerce Hero", "Macro Breakdown Slide", "Authenticity Seal Slide"],
  },
];

const CATEGORIES = ["All", "Listing Images", "A+ Content", "Infographics"];

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
        <a href="#contact" className="text-[#A1A1A1] border border-white/25 px-4 py-1.5 hover:bg-white hover:text-black transition-colors">
          Inquire
        </a>
      </div>
    </nav>
  );
}

function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setSelectedProject(null);
    }
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-white/15">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#A1A1A1]">
            01 / Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3">
            Built to convert. Styled to last.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-black text-[#A1A1A1] border-white/15 hover:border-white/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
            tabIndex={0}
            role="button"
            aria-label={`Open ${project.brand} project details`}
            className="group border border-white/15 p-6 md:p-8 flex flex-col justify-between hover:border-white/50 transition-colors cursor-pointer bg-black"
          >
            <div>
              <div className="flex justify-between items-center text-xs text-[#A1A1A1] pb-4 mb-6 border-b border-white/10">
                <span className="uppercase tracking-[0.2em] text-white font-semibold">
                  {project.brand}
                </span>
                <span className="px-2.5 py-0.5 border border-white/15 text-[11px] uppercase tracking-wider">
                  {project.label}
                </span>
              </div>

              <div className="aspect-[16/10] w-full border border-white/10 mb-6 flex flex-col justify-between p-6 bg-gradient-to-b from-white/[0.04] to-transparent relative overflow-hidden">
                <div className="flex justify-between items-center text-[11px] uppercase tracking-widest text-[#A1A1A1]">
                  <span>{project.category}</span>
                  <span>0{index + 1}</span>
                </div>
                <div>
                  <p className="font-serif italic text-xl md:text-2xl text-white/90">
                    {project.brand}
                  </p>
                  <p className="text-xs text-[#A1A1A1] mt-1">
                    {project.platform}
                  </p>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:underline underline-offset-4">
                {project.title}
              </h3>
              <p className="text-sm text-[#A1A1A1] mt-3 leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-[#A1A1A1]">
              <span>{project.platform}</span>
              <span className="text-white group-hover:translate-x-1 transition-transform">
                Inspect Concept →
              </span>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-black border border-white/25 max-w-2xl w-full p-8 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start pb-4 mb-6 border-b border-white/15">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#A1A1A1]">
                  {selectedProject.brand} · {selectedProject.label}
                </span>
                <h3 id="lightbox-title" className="text-2xl md:text-3xl font-bold mt-2">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="text-xs uppercase tracking-widest border border-white/20 px-3 py-1.5 hover:bg-white hover:text-black transition-colors"
              >
                ESC / Close
              </button>
            </div>

            <p className="text-sm md:text-base text-[#A1A1A1] leading-relaxed">
              {selectedProject.summary}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A1A1A1] mb-3">
                Included Deliverables
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProject.deliverables.map((item) => (
                  <li
                    key={item}
                    className="border border-white/15 p-3 text-xs text-white tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex justify-between items-center text-xs text-[#A1A1A1]">
              <span>Target Platforms: {selectedProject.platform}</span>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="bg-white text-black px-5 py-2.5 font-medium hover:bg-[#A1A1A1] transition-colors"
              >
                Request Similar Scope
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
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
      <SelectedWork />
    </main>
  );
}
