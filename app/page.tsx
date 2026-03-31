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

      <section className="relative h-screen flex items-center justify-center text-center px-6 pt-24">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.jpg')" }}/>

        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10">

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            <span className="text-white">PACE</span>{" "}
            <span className="text-green-500 drop-shadow-[0_0_8px_#22c55e]">
              &
            </span>{" "}
            <span className="text-white">POWER</span>
          </h1>

          <p className="text-green-500 tracking-widest mt-2 mb-6">
            ASSESSORIA
          </p>

          <p className="text-gray-300 max-w-xl mb-8">
            Treinos híbridos de corrida e musculação para máxima performance física
          </p>

          <a
            href="https://wa.me/5541999999999?text=Quero%20começar%20na%20Pace%20%26%20Power"
            target="_blank"
            className="bg-green-500 text-black px-8 py-4 rounded-xl font-bold 
  hover:scale-110 transition duration-300
  shadow-[0_0_15px_#22c55e] hover:shadow-[0_0_30px_#22c55e]"
          >
            COMEÇAR AGORA
          </a>

        </div>

      </section>

    </main>
  );
}