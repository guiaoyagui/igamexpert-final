import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// ⚠️ O teu link seguro do Google Apps Script
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzU_uEDL182QcDDQASQLETJ30zBwH-3xw8kx2lZdmuULmkCMh9pXQ3HsTFvZFES_BPj/exec";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "enviando" | "sucesso" | "erro">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Guardamos a referência do formulário ANTES do await
    const form = e.currentTarget; 
    
    setStatus("enviando");

    const formData = new FormData(form);
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      mensagem: formData.get("mensagem"),
    };

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      setStatus("sucesso");
      form.reset(); 
      setTimeout(() => setStatus("idle"), 5000);
      
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatus("erro");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    // ⚠️ A MÁGICA ACONTECE AQUI: Mudámos para bg-transparent para ver a fita animada!
    <section id="contato" className="relative py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-2xl mx-auto bg-[#0B3D2C]/60 backdrop-blur-sm border-2 border-[#00D9A3]/30 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-poppins font-bold text-white mb-6 text-center">
            Fale Connosco
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">Nome Completo *</label>
              <input 
                type="text" 
                name="nome" 
                required 
                placeholder="Ex: João Silva"
                className="w-full px-4 py-3 bg-[#0B3D2C]/80 border-2 border-[#00D9A3]/40 rounded-xl text-white focus:border-[#00D9A3] outline-none transition-colors" 
              />
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">Email Profissional *</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="Ex: joao@empresa.com"
                className="w-full px-4 py-3 bg-[#0B3D2C]/80 border-2 border-[#00D9A3]/40 rounded-xl text-white focus:border-[#00D9A3] outline-none transition-colors" 
              />
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">Telefone / WhatsApp</label>
              <input 
                type="tel" 
                name="telefone" 
                placeholder="Ex: +55 11 99999-9999"
                className="w-full px-4 py-3 bg-[#0B3D2C]/80 border-2 border-[#00D9A3]/40 rounded-xl text-white focus:border-[#00D9A3] outline-none transition-colors" 
              />
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">Como podemos ajudar? *</label>
              <textarea 
                name="mensagem" 
                required 
                rows={4}
                placeholder="Descreva o seu projeto ou dúvida..."
                className="w-full px-4 py-3 bg-[#0B3D2C]/80 border-2 border-[#00D9A3]/40 rounded-xl text-white focus:border-[#00D9A3] outline-none transition-colors resize-none" 
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "enviando"}
              className={`w-full py-4 mt-2 font-poppins font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                status === "enviando" 
                  ? "bg-gray-500 text-white cursor-not-allowed" 
                  : "bg-[#00D9A3] text-[#0B3D2C] hover:bg-white hover:-translate-y-1 shadow-lg shadow-[#00D9A3]/20"
              }`}
            >
              {status === "enviando" ? "A enviar..." : "Enviar Mensagem"}
              {status !== "enviando" && <Send size={20} />}
            </button>

            {status === "sucesso" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-[#00D9A3] mt-2 justify-center font-medium">
                <CheckCircle size={20} /> Mensagem enviada com sucesso! Entraremos em contacto brevemente.
              </motion.div>
            )}
            
            {status === "erro" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-400 mt-2 justify-center font-medium">
                <AlertCircle size={20} /> Ocorreu um erro ao enviar. Tente novamente mais tarde.
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}