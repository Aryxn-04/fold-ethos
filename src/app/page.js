function Navbar() {
  return (
    <nav className="flex justify-between items-center pb-6 mb-16 border-b border-white/15">
      <span className="text-lg font-bold tracking-wider">FOLD Ethos.</span>
      <a href="#contact" className="text-sm text-[#A1A1A1] hover:text-white">
        Inquire
      </a>
    </nav>
  );
}
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-12">
      <p className="text-sm uppercase tracking-widest text-[#A1A1A1]">
        Creative studio for modern e-commerce brands
      </p>
      <h1 className="text-6xl font-bold mt-4">
        Design that earns attention.
      </h1>
    </main>
  );
}