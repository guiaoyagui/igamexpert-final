import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// O teu link da base de dados do Google
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzU_uEDL182QcDDQASQLETJ30zBwH-3xw8kx2lZdmuULmkCMh9pXQ3HsTFvZFES_BPj/exec";

export default function EventDetails() {
  const [match, params] = useRoute("/evento/:id");
  const [, setLocation] = useLocation();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Se não tiver ID na URL, não fazemos nada
    if (!GOOGLE_SHEETS_URL || !match || !params?.id) {
      setLoading(false);
      return;
    }

    // Vai buscar todos os eventos e filtra apenas o que queremos
    fetch(`${GOOGLE_SHEETS_URL}?aba=Eventos`)
      .then(res => res.json())
      .then(data => {
        const foundEvent = data.find((e: any) => String(e.id) === String(params.id));
        setEvent(foundEvent);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro a carregar detalhes do evento:", err);
        setLoading(false);
      });
  }, [match, params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B3D2C] flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-[#00D9A3] font-poppins text-xl">
          A carregar detalhes do evento...
        </div>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-[#0B3D2C] flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-white font-poppins gap-4">
          <p className="text-xl">Evento não encontrado.</p>
          <button onClick={() => setLocation("/")} className="text-[#00D9A3] underline hover:text-white transition-colors">
            Voltar à página inicial
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Define se a data já passou para colocar a etiqueta correta
  const isPast = event.date && new Date(event.date.split('T')[0]) < new Date();
  const statusLabel = isPast ? "Passados" : "Próximos";

  return (
    <div className="min-h-screen bg-[#0B3D2C] flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* SECÇÃO HERO: O Fundo Abstrato para esconder a imagem de baixa qualidade */}
        <section className="relative pt-32 pb-20 px-4 min-h-[50vh] flex flex-col justify-end overflow-hidden">
          
          {/* Fundo com Desfoque (Blur) Mágico */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center scale-110" 
              style={{ backgroundImage: `url('${event.image}')` }}
            />
            {/* Camada de desfoque extremo para criar a textura abstrata */}
            <div className="absolute inset-0 bg-[#0B3D2C]/70 backdrop-blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2C] via-[#0B3D2C]/80 to-transparent" />
          </div>

          <div className="container relative z-10 max-w-5xl mx-auto">
            <button 
              onClick={() => setLocation("/")} // Ou podes usar setLocation("/#eventos")
              className="flex items-center gap-2 text-[#00D9A3] hover:text-white transition-colors font-poppins text-sm font-medium mb-8"
            >
              <ArrowLeft size={16} /> Voltar para Eventos
            </button>

            <div className="inline-block px-3 py-1 bg-[#00D9A3] text-[#0B3D2C] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              {statusLabel}
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight drop-shadow-lg"
            >
              {event.name}
            </motion.h1>
          </div>
        </section>

        {/* SECÇÃO DE CONTEÚDO (Esquerda: Sobre | Direita: Cartão) */}
        <section className="py-16 px-4 bg-[#0B3D2C] flex-1">
          <div className="container max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Esquerda: Sobre o Evento */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <h2 className="font-poppins font-bold text-2xl text-[#00D9A3] mb-6">Sobre o Evento</h2>
              <p className="text-white/80 font-poppins text-lg leading-relaxed whitespace-pre-wrap">
                {event.description || "Detalhes do evento não disponíveis de momento."}
              </p>
            </motion.div>

            {/* Direita: Cartão de Detalhes */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-[380px] shrink-0"
            >
              <div className="bg-transparent border border-[#00D9A3]/30 rounded-3xl p-8 shadow-xl">
                <h3 className="font-poppins font-bold text-xl text-white mb-6">Detalhes</h3>
                
                <div className="space-y-6">
                  {/* Data Corrigida */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#00D9A3]/10 flex items-center justify-center shrink-0">
                      <Calendar className="text-[#00D9A3]" size={20} />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-medium mb-1 uppercase tracking-wider">Data</p>
                      <p className="font-poppins font-bold text-lg text-white">
                        {/* AQUI ESTÁ A CORREÇÃO DO T00:00:00Z */}
                        {event.date ? String(event.date).split('T')[0] : 'Por anunciar'}
                      </p>
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="flex gap-4 items-start pb-6 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#00D9A3]/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-[#00D9A3]" size={20} />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-medium mb-1 uppercase tracking-wider">Localização</p>
                      <p className="font-poppins font-bold text-base text-white">
                        {event.location || 'Por anunciar'}
                      </p>
                    </div>
                  </div>

                  {/* Botão Agendar */}
                  <button 
                    onClick={() => {
                      // Vai para a Home e faz scroll suave para os contactos
                      window.location.href = "/#contato";
                    }}
                    className="w-full py-4 bg-[#00D9A3] text-[#0B3D2C] font-poppins font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} /> Agendar Reunião
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}