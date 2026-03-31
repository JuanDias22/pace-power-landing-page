import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <header className="w-full fixed top-0 left-0 bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
            <Image
              src="/logop.png"
              alt="Pace & Power"
              width={180}
              height={70}
              className="object-contain"/>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">Início</a>
            <a href="#" className="hover:text-white transition">Método</a>
            <a href="#" className="hover:text-white transition">Planos</a>
          </nav>

          <button className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold 
          hover:scale-105 transition shadow-[0_0_10px_#22c55e]">
            Começar
          </button>

        </div>
      </header>

    </main>
  );
}