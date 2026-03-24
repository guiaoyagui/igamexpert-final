import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Globe, ChevronLeft, ChevronRight } from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundRibbon from "./BackgroundRibbon";

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;
const JOBS_PER_PAGE = 4; // Exatamente as 4 opções por página que pediste!

export default function Jobs() {
  const [jobsData, setJobsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!GOOGLE_SHEETS_URL) {
      setLoading(false);
      return;
    }

    fetch(`${GOOGLE_SHEETS_URL}?aba=Vagas`)
      .then(res => res.json())
      .then(data => {
        // Filtro de Segurança Duplo: Ignora inativos E ignora linhas vazias do Excel
        const vagasAtivas = data.filter((v: any) => 
          v.status !== 'Inativo' && 
          v.title && 
          String(v.title).trim() !== ''
        );
        setJobsData(vagasAtivas);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro a carregar vagas:", err);
        setLoading(false);
      });
  }, []);

  // Lógica da Paginação
  const totalPages = Math.ceil(jobsData.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = jobsData.slice(startIndex, startIndex + JOBS_PER_PAGE);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative min-h-screen bg-[#0B3D2C]">
      <BackgroundRibbon />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-24">
          <div className="container px-4 max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4 uppercase tracking-tight">
                CARREIRAS NA <span className="text-[#00D9A3]">IGAMEXPERT</span>
              </h1>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
                Junte-se à nossa equipa de especialistas e ajude-nos a transformar o mercado de iGaming no Brasil.
              </p>
            </motion.div>

            {loading ? (
              <div className="text-center text-[#00D9A3] py-20 font-poppins text-lg animate-pulse">
                A procurar vagas disponíveis...
              </div>
            ) : jobsData.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-[#0B3D2C]/40 backdrop-blur-sm border-2 border-[#00D9A3]/20 rounded-3xl">
                <p className="text-white/60 text-lg font-poppins mb-4">De momento não temos vagas em aberto.</p>
                <p className="text-[#00D9A3] text-sm font-poppins">Fique atento, atualizamos esta página frequentemente!</p>
              </motion.div>
            ) : (
              <>
                <motion.div
                  key={currentPage} // Força a animação quando a página muda
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  <AnimatePresence mode="wait">
                    {currentJobs.map((job) => (
                      <motion.div
                        key={job.id || job.title}
                        variants={itemVariants}
                        whileHover={{ y: -4, borderColor: "rgba(0, 217, 163, 0.6)" }}
                        className="bg-[#0B3D2C]/60 backdrop-blur-md border-2 border-[#00D9A3]/20 rounded-2xl p-6 md:p-8 shadow-lg transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
                      >
                        <div className="flex-1">
                          <h3 className="font-poppins font-bold text-2xl text-white mb-4 group-hover:text-[#00D9A3] transition-colors">
                            {job.title}
                          </h3>
                          
                          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
                            <div className="flex items-center gap-2 text-white/80 font-medium text-sm">
                              <MapPin size={18} className="text-[#00D9A3]" />
                              {job.location || 'Localização não definida'}
                            </div>
                            <div className="flex items-center gap-2 text-white/80 font-medium text-sm">
                              <Briefcase size={18} className="text-[#00D9A3]" />
                              {job.department || 'Departamento não definido'}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            {job.type && (
                              <span className="px-4 py-1.5 rounded-full border border-[#00D9A3]/50 bg-[#00D9A3]/10 text-[#00D9A3] text-xs font-bold uppercase tracking-wider">
                                {job.type}
                              </span>
                            )}
                            {String(job.isRemote).toLowerCase() === "sim" && (
                              <span className="px-4 py-1.5 rounded-full border border-[#00D9A3]/50 bg-[#00D9A3]/10 text-[#00D9A3] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                                <Globe size={14} /> Remoto
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="shrink-0 mt-2 md:mt-0">
                          <a 
                            href={job.link || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block w-full md:w-auto px-8 py-3 bg-[#00D9A3] text-[#0B3D2C] font-poppins font-bold text-sm rounded-xl hover:bg-white hover:scale-105 transition-all text-center shadow-[0_0_15px_rgba(0,217,163,0.3)]"
                          >
                            Aplicar Agora
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Controlos de Paginação com as Setinhas */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-6 mt-12">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-3 rounded-full border-2 border-[#00D9A3]/50 text-[#00D9A3] hover:bg-[#00D9A3] hover:text-[#0B3D2C] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#00D9A3] transition-all duration-300"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <span className="text-white/60 font-poppins font-medium">
                      Página <span className="text-[#00D9A3] font-bold">{currentPage}</span> de {totalPages}
                    </span>

                    <button 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-3 rounded-full border-2 border-[#00D9A3]/50 text-[#00D9A3] hover:bg-[#00D9A3] hover:text-[#0B3D2C] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#00D9A3] transition-all duration-300"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
              </>
            )}

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}