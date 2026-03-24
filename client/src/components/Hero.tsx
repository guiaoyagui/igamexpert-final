import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center bg-transparent pt-40 pb-32 min-h-[80vh]">
      
      <div className="container relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-start text-left md:items-center md:text-center">
        
        {/* Etiqueta de Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D9A3]/30 bg-[#0B3D2C]/80 backdrop-blur-md mb-6 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#00D9A3] animate-pulse" />
          <span className="text-white/90 text-xs font-poppins font-semibold uppercase tracking-widest">
            Especialistas em iGaming
          </span>
        </motion.div>

        {/* Título Principal - Limpo, uniforme e profissional */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-2xl uppercase tracking-tight leading-tight md:leading-tight"
        >
          A Sua Porta de Entrada <br className="hidden md:block" /> 
          No Mercado Brasileiro <br />
          
          {/* Destaque apenas na cor e no brilho, sem fontes estranhas! */}
          <span className="text-[#00D9A3] drop-shadow-[0_0_15px_rgba(0,217,163,0.5)]">
            de iGaming
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/80 text-sm md:text-xl font-poppins max-w-xl md:mx-auto mb-8 md:mb-10 mt-4"
        >
          Estratégias baseadas em dados para impulsionar a sua marca e escalar os seus resultados no Brasil.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start md:items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#00D9A3] text-[#0B3D2C] font-poppins font-bold rounded-xl md:rounded-full hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base shadow-[0_0_20px_rgba(0,217,163,0.3)] relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2"><Calendar size={18} /> Agendar Reunião</span>
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById("servicos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#0B3D2C]/50 border-2 border-[#00D9A3]/50 text-white font-poppins font-bold rounded-xl md:rounded-full hover:border-[#00D9A3] hover:bg-[#00D9A3]/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base backdrop-blur-sm"
          >
            Conhecer Serviços <ArrowRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}