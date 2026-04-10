"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { useEffect, useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { SiPix } from "react-icons/si";
import { FaBarcode } from "react-icons/fa";


export default function Home() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-black/80 backdrop-blur-lg py-2 shadow-[0_5px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-3"
        }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-2">

          <div className="drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
            <Image
              src="/logop.png"
              alt="Pace & Power"
              width={140}
              height={50}
              className="object-contain" />
          </div>

          <nav className="hidden md:flex gap-6 text-base font-medium">
            <a href="#inicio" className={active === "inicio" ? "text-green-500" : "text-gray-300"}>
              Início
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#planos" className={active === "planos" ? "text-green-500" : "text-gray-300"}>
              Planos
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#metodo" className={active === "metodo" ? "text-green-500" : "text-gray-300"}>
              Método
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>


          <a
            href="/cadastro"
            className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold 
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_0_20px_#22c55e]
            active:scale-95"
          >
            Começar
          </a>

        </div>
      </header>

      <section id="inicio" className="relative h-screen flex items-center justify-center text-center px-6 pt-24">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.jpg')" }} />

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
            href="/cadastro"
            target="_blank"
            className="bg-green-500 text-black px-8 py-4 rounded-xl font-bold 
  hover:scale-110 transition duration-300
  shadow-[0_0_15px_#22c55e] hover:shadow-[0_0_30px_#22c55e]"
          >
            COMEÇAR AGORA
          </a>
        </div>

      </section>

      <Reveal>
        <section id="planos" className="bg-black py-20 px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Escolha seu plano
          </h2>

          <div className="group grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="border border-gray-800 p-6 rounded-xl 
    transition duration-300 hover:scale-105 hover:border-green-500 hover:shadow-[0_0_20px_#22c55e]">

              <h3 className="text-xl font-bold mb-4">Básico</h3>
              <p className="text-gray-400 mb-6">Para iniciantes</p>
              <p className="text-3xl font-bold mb-6">R$ 79</p>

              <p className="text-green-500 text-sm mb-4">
                
                💲Pagamento facilitado
              </p>

              <div className="flex justify-center gap-4 text-gray-400 mb-6 text-xl">
                <SiPix title="Pix" />
                <FaCreditCard title="Cartão" />
                <FaBarcode title="Boleto" />
              </div>

              <ul className="text-gray-300 mb-6 space-y-2">
                <li>✔ Treino de corrida</li>
                <li>✔ Acompanhamento básico</li>
              </ul>

              <a
                href="/cadastro?plano=Básico"
                target="_blank"
                className="block bg-green-500 text-black py-3 rounded-lg font-semibold"
              >
                Escolher
              </a>
            </div>

            <div className="border-2 border-green-500 p-6 rounded-xl scale-105 shadow-[0_0_20px_#22c55e]
  transition duration-300
  group-hover:scale-100 
  group-hover:shadow-none 
  group-hover:border-gray-800
  hover:scale-110 
  hover:shadow-[0_0_30px_#22c55e] 
  hover:border-green-500">

              <h3 className="text-xl font-bold mb-4">Intermediário</h3>
              <p className="text-gray-400 mb-6">Mais escolhido</p>
              <p className="text-3xl font-bold mb-6">R$ 119</p>

              <p className="text-green-500 text-sm mb-4">
                
                💲Pagamento facilitado
              </p>

              <div className="flex justify-center gap-4 text-gray-400 mb-6 text-xl">
                <SiPix title="Pix" />
                <FaCreditCard title="Cartão" />
                <FaBarcode title="Boleto" />
              </div>

              <ul className="text-gray-300 mb-6 space-y-2">
                <li>✔ Corrida + musculação</li>
                <li>✔ Ajustes semanais</li>
                <li>✔ Suporte direto</li>
              </ul>

              <a
                href="/cadastro?plano=Intermediario"
                target="_blank"
                className="block bg-green-500 text-black py-3 rounded-lg font-semibold 
        shadow-[0_0_15px_#22c55e]"
              >
                Escolher
              </a>
            </div>

            <div className="border border-gray-800 p-6 rounded-xl 
    transition duration-300 hover:scale-105 hover:border-green-500 hover:shadow-[0_0_20px_#22c55e]">

              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <p className="text-gray-400 mb-6">Alta performance</p>
              <p className="text-3xl font-bold mb-6">R$ 149</p>

              <p className="text-green-500 text-sm mb-4">
                
                💲Pagamento facilitado 
              </p>

              <div className="flex justify-center gap-4 text-gray-400 mb-6 text-xl">
                <SiPix title="Pix" />
                <FaCreditCard title="Cartão" />
                <FaBarcode title="Boleto" />
              </div>
              

              <ul className="text-gray-300 mb-6 space-y-2">
                <li>✔ Treino completo</li>
                <li>✔ Consultoria individual</li>
                <li>✔ Suporte diário</li>
              </ul>

              <a
                href="/cadastro?plano=Premium"
                target="_blank"
                className="block bg-green-500 text-black py-3 rounded-lg font-semibold"
              >
                Escolher
              </a>
            </div>

          </div>

        </section>

      </Reveal>

      <Reveal>
        <section id="metodo" className="bg-black py-20 px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Como funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            <div>
              <div className="text-green-500 text-4xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Avaliação inicial</h3>
              <p className="text-gray-400">
                Entendemos seu nível, objetivos e rotina para montar a melhor estratégia.
              </p>
            </div>

            <div>
              <div className="text-green-500 text-4xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Plano personalizado</h3>
              <p className="text-gray-400">
                Você recebe um treino híbrido completo de corrida + musculação.
              </p>
            </div>

            <div>
              <div className="text-green-500 text-4xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Acompanhamento</h3>
              <p className="text-gray-400">
                Ajustes constantes e suporte para garantir sua evolução contínua.
              </p>
            </div>

          </div>

        </section>

      </Reveal>
      <Reveal>
        <section className="bg-black py-20 px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Resultados reais
          </h2>

          <div className="group grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="
  border border-gray-800 p-6 rounded-xl
  transition duration-300
  hover:scale-105 
  hover:border-green-500 
  hover:shadow-[0_0_20px_#22c55e]">
              <p className="text-gray-300 mb-4">
                “Em 2 meses já senti muita diferença na resistência e no físico.”
              </p>
              <h3 className="font-bold">Carlos Silva</h3>
              <p className="text-green-500 text-sm">-5kg</p>
            </div>

            <div className="
  border-2 border-green-500 p-6 rounded-xl 
  scale-105 shadow-[0_0_20px_#22c55e]
  transition duration-300
  group-hover:scale-100 
  group-hover:shadow-none 
  group-hover:border-gray-800
  hover:scale-110 
  hover:shadow-[0_0_30px_#22c55e] 
  hover:border-green-500">
              <p className="text-gray-300 mb-4">
                “Nunca gostei de correr, hoje virou parte da minha rotina.”
              </p>
              <h3 className="font-bold">Juliana Rocha</h3>
              <p className="text-green-500 text-sm">+ performance</p>
            </div>

            <div className="
  border border-gray-800 p-6 rounded-xl
  transition duration-300
  hover:scale-105 
  hover:border-green-500 
  hover:shadow-[0_0_20px_#22c55e]">
              <p className="text-gray-300 mb-4">
                “Treino completo, acompanhamento top e resultado de verdade.”
              </p>
              <h3 className="font-bold">Marcos Lima</h3>
              <p className="text-green-500 text-sm">+ força</p>
            </div>
          </div>
        </section>

      </Reveal>

      <section className="bg-black py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Pronto para evoluir de verdade?
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Comece agora na Pace & Power e tenha um treino estruturado para transformar
          seu corpo e sua performance.
        </p>

        <a
          href="/cadastro"
          target="_blank"
          className="bg-green-500 text-black px-10 py-5 rounded-xl font-bold 
          hover:scale-110 transition shadow-[0_0_20px_#22c55e]"
        >
          Quero meu plano personalizado
        </a>
      </section>

      <a
        href="https://wa.me/5541997197441?text=Gostaria%20de%20saber%20mais%20sobre%20a%20Pace%20%26%20Power"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-black p-4 rounded-full 
  shadow-[0_0_15px_#22c55e] hover:scale-110 transition z-50 flex items-center justify-center"
      >
        <FaWhatsapp size={24} />
      </a>
    </main>
  );
}