import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Megaphone, Briefcase, CalendarDays, CheckCircle2 } from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundRibbon from "./BackgroundRibbon";

const serviceCategories = [
  {
    id: 1,
    title: "SERVIÇOS",
    icon: LayoutDashboard,
    items: ["CRM", "Design", "Contabilidade"],
  },
  {
    id: 2,
    title: "MARKETING",
    icon: Megaphone,
    items: [
      "Aquisição de Afiliados",
      "Compra de Mídia",
      "Influenciadores",
      "Embaixadores",
      "Patrocínios",
      "Rádio, TV & OOH",
    ],
  },
  {
    id: 3,
    title: "CONSULTORIA",
    icon: Briefcase,
    items: ["Jurídico", "Contabilidade", "Relações Públicas", "Vendas B2B"],
  },
  {
    id: 4,
    title: "EVENTOS",
    icon: CalendarDays,
    items: ["Feiras / Festas / Jantares", "Construção de Stand", "Merchandising"],
  },
];

export default function Services() {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-[#0B3D2C]">
      {/* Fundo Animado */}
      <BackgroundRibbon />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-16">
          <section className="relative bg-transparent overflow-hidden">
            {/* Reduzimos max-w-5xl para max-w-4xl para compactar o grid */}
            <div className="container relative z-10 px-4 max-w-4xl mx-auto">
              
              {/* Header - Tamanhos reduzidos */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
              >
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-3 uppercase tracking-tight">
                  O QUE <span className="text-[#00D9A3]">OFERECEMOS</span>
                </h2>
                <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                  Soluções integradas e especializadas para garantir a expansão e o sucesso da sua operação no mercado brasileiro.
                </p>
              </motion.div>

              {/* Grid de 4 Cartões (2x2 em Desktop) */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
              >
                {serviceCategories.map((category) => {
                  const Icon = category.icon;
                  const isFlipped = flippedId === category.id;

                  return (
                    <motion.div
                      key={category.id}
                      variants={itemVariants}
                      // Reduzimos a altura para 310px para ficar mais proporcional
                      className="h-[310px] w-full"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div
                        className="w-full h-full relative cursor-pointer"
                        style={{ transformStyle: "preserve-3d" }}
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                        onClick={() => setFlippedId(isFlipped ? null : category.id)}
                      >
                        {/* FRENTE DA CARTA - Mais compacta */}
                        <div 
                          className="absolute inset-0 bg-[#0B3D2C]/60 backdrop-blur-md border-2 border-[#00D9A3]/30 rounded-3xl p-6 flex flex-col items-center justify-center hover:border-[#00D9A3] hover:shadow-[0_0_25px_rgba(0,217,163,0.15)] transition-all group"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          {/* Ícone menor (w-10 h-10) e menos padding */}
                          <div className="p-4 bg-[#00D9A3]/10 border border-[#00D9A3]/50 rounded-full mb-4 group-hover:scale-110 group-hover:bg-[#00D9A3] transition-all duration-300">
                            <Icon className="w-10 h-10 text-[#00D9A3] group-hover:text-[#0B3D2C] transition-colors" />
                          </div>
                          
                          {/* Título menor (text-2xl) */}
                          <h3 className="font-poppins font-black text-white text-2xl text-center mb-2 uppercase tracking-wide">
                            {category.title}
                          </h3>
                          
                          <span className="text-[#00D9A3] text-xs font-semibold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity mt-3 flex items-center gap-1.5">
                            Ver Detalhes
                          </span>
                        </div>

                        {/* VERSO DA CARTA - Espaçamento otimizado */}
                        <div 
                        // Menos padding no verso (p-6)
                          className="absolute inset-0 bg-[#00D9A3] rounded-3xl p-6 flex flex-col shadow-[0_0_25px_rgba(0,217,163,0.2)]"
                          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                        >
                          {/* Título e margem reduzidos */}
                          <h3 className="font-poppins font-black text-[#0B3D2C] text-xl mb-4 border-b-2 border-[#0B3D2C]/20 pb-3 uppercase">
                            {category.title}
                          </h3>
                          
                          {/* Menor gap entre itens (gap-2) */}
                          <ul className="flex-1 flex flex-col gap-2">
                            {category.items.map((item, index) => (
                              <li key={index} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4.5 h-4.5 text-[#0B3D2C] shrink-0 mt-0.5" />
                                {/* Texto da lista menor (text-sm) */}
                                <span className="font-poppins font-semibold text-[#0B3D2C]/90 text-sm leading-snug">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Botão menor e menos padding vertical (py-2.5) */}
                          <button 
                            className="mt-4 w-full py-2.5 bg-[#0B3D2C] text-[#00D9A3] font-poppins font-bold rounded-xl hover:bg-white hover:text-[#0B3D2C] transition-colors text-xs uppercase tracking-wider shadow-md"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.location.href = `/#contato`;
                            }}
                          >
                            Falar com a Equipa
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}