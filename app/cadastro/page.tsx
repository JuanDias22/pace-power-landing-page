import LeadForm from "@/components/LeadForm";
import Image from "next/image";

export default function Cadastro() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
    <header className="w-full fixed top-0 left-0 bg-black/60 backdrop-blur-md z-30">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-2 py-0.25">
    
    <div className="drop-shadow-[0_0_6px_rgba(100,100,100,0.2)]">
      <Image
        src="/logop.png"
        alt="Pace & Power"
        width={140}
        height={50}
        className="object-contain"
      />
    </div>

    <nav className="flex justify-center">
      <a
        href="/"
        className="text-gray-400 hover:text-white justify-center transition text-sm"
      >
        Voltar para Home
      </a>
    </nav>

  </div>
</header>

      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-black" />

      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center">

        <div>

          <span className="text-green-500 text-sm font-semibold tracking-widest">
            ASSESSORIA PREMIUM
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
            Evolua seu corpo e performance com estratégia
          </h1>

          <p className="text-gray-400 mb-6">
            Treinos híbridos de corrida + musculação com acompanhamento profissional.
          </p>

          <div className="space-y-2 text-sm">
            <p className="text-green-500">✔ -5kg em poucas semanas</p>
            <p className="text-green-500">✔ Mais energia e resistência</p>
            <p className="text-green-500">✔ Método validado por alunos</p>
          </div>

        </div>

        <div className="relative">

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-transparent blur opacity-30" />

          <div className="relative bg-black border border-gray-800 rounded-2xl p-8 shadow-[0_0_30px_rgba(34,197,94,0.2)]">

            <h2 className="text-xl font-bold mb-2 text-center">
              Comece agora
            </h2>

            <p className="text-gray-500 text-sm text-center mb-6">
              Receba seu plano personalizado
            </p>


            <LeadForm />

            <p className="text-gray-500 text-xs text-center mt-4">
              Seus dados estão seguros 🔒
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}