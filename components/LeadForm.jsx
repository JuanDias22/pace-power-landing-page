"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    objetivo: "",
    plano: "",
    pagamento: "",
  });

  const searchParams = useSearchParams();

  useEffect(() => {
  const planoParam = searchParams.get("plano");

  if (planoParam) {
    setForm((prev) => ({
      ...prev,
      plano: planoParam,
    }));
  }
}, [searchParams]);

  const [loading, setLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (e) => {
  e.preventDefault();
 
  try {
    setLoading(true);

  
    await fetch(`${API_URL}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const response = await fetch(`${API_URL}/api/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plano: form.plano,
        nome: form.nome,
        email: form.email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      alert("Erro ao criar pagamento");
      return;
    }
    window.location.href = data.url;

  } catch (error) {
    console.error(error);
    alert("Erro ao processar pagamento");
  } finally {
    setLoading(false);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-black p-6 rounded-xl border border-gray-800"
    >
      <input
        type="text"
        placeholder="Nome"
        value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
        className="p-3 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white 
focus:outline-none focus:border-green-500 focus:shadow-[0_0_10px_#22c55e]"
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="p-3 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white 
focus:outline-none focus:border-green-500 focus:shadow-[0_0_10px_#22c55e]"
      />

      <input
        type="text"
        placeholder="Objetivo (ex: emagrecer, ganhar massa)"
        value={form.objetivo}
        onChange={(e) => setForm({ ...form, objetivo: e.target.value })}
        className="p-3 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white 
focus:outline-none focus:border-green-500 focus:shadow-[0_0_10px_#22c55e]"
      />

      <select
        value={form.plano}
        onChange={(e) => setForm({ ...form, plano: e.target.value })}
        className="p-3 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white 
focus:outline-none focus:border-green-500 focus:shadow-[0_0_10px_#22c55e]"
      >
        <option value="">Selecione um plano</option>
        <option value="Basico">Básico</option>
        <option value="Intermediario">Intermediário</option>
        <option value="Premium">Premium</option>
      </select>
      <label className="text-sm text-gray-400">Forma de pagamento</label>
      <select
        value={form.pagamento}
        onChange={(e) => setForm({ ...form, pagamento: e.target.value })}
        className="p-3 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white 
focus:outline-none focus:border-green-500"
      >
        <option value="">Forma de pagamento</option>
        <option value="pix">Pix</option>
        <option value="cartao">Cartão de crédito</option>
        <option value="boleto">Boleto</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="bg-green-500 text-black py-3 rounded-lg font-bold 
hover:scale-105 transition duration-300
shadow-[0_0_15px_#22c55e] hover:shadow-[0_0_30px_#22c55e]"
      >
        {loading ? "Enviando..." : "Quero começar"}
      </button>
    </form>
  );
}