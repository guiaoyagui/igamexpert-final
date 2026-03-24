import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Mail, ChevronLeft, ChevronRight } from "lucide-react";

// O teu link seguro da base de dados
const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!GOOGLE_SHEETS_URL) {
      setLoading(false);
      return;
    }

    fetch(`${GOOGLE_SHEETS_URL}?aba=Equipe`)
      .then(res => res.json())
      .then(data => {
        const membrosAtivos = data.filter((m: any) => m.status !== 'Inativo');
        setTeamMembers(membrosAtivos);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro a carregar equipa:", err);
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    if (teamMembers.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }
  };

  const prevSlide = () => {
    if (teamMembers.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    }
  };

  const getVisibleMembers = () => {
    if (teamMembers.length === 0) return [];
    if (teamMembers.length === 1) return [teamMembers[0]];
    if (teamMembers.length === 2) return [teamMembers[currentIndex], teamMembers[(currentIndex + 1) % 2]];
    return [
      teamMembers[currentIndex],
      teamMembers[(currentIndex + 1) % teamMembers.length],
      teamMembers[(currentIndex + 2) % teamMembers.length],
    ];
  };

  const visibleMembers = getVisibleMembers();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="equipe" className="relative py-20 bg-transparent">
      <div className="container relative z-10 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          {/* Título também ligeiramente reduzido para manter proporção com as outras secções */}
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            A NOSSA <span className="text-[#00D9A3]">EQUIPE</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Conheça os especialistas que vão transformar o seu negócio no Brasil.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-[#00D9A3] py-20 font-poppins text-lg">A carregar equipa...</div>
        ) : teamMembers.length === 0 ? (
          <div className="text-center text-white/60 py-20 font-poppins text-lg">Nenhum membro encontrado.</div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {visibleMembers.map((member, index) => (
                  <motion.div
                    key={`${member.id || member.name}-${currentIndex}-${index}`}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    whileHover={{ y: -8 }}
                    // Redução do padding interno do cartão (p-6 em vez de p-8)
                    className={`bg-[#0B3D2C]/60 backdrop-blur-sm border border-[#00D9A3]/40 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl transition-all duration-300 ${
                      index > 0 ? "hidden md:flex" : "flex"
                    }`}
                  >
                    {/* Imagem Proporcional: w-36 h-36 no mobile, w-40 h-40 no desktop. Borda mais fina. */}
                    <div className="w-36 h-36 md:w-40 md:h-40 mx-auto border-[3px] border-[#00D9A3] rounded-full p-1 overflow-hidden mb-5 bg-[#00D9A3]/10 shadow-[0_0_15px_rgba(0,217,163,0.2)] group shrink-0">
                      <img
                        src={member.image?.trim() ? member.image : `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name || 'IE')}&background=00D9A3&color=0B3D2C&size=256`}
                        // Segurança extra para a imagem não quebrar e mostrar o texto feio por cima do círculo
                        onError={(e) => {
                          e.currentTarget.onerror = null; // Evita loop infinito
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name || 'IE')}&background=00D9A3&color=0B3D2C&size=256`;
                        }}
                        // Se alt falhar, pelo menos não aparece texto a "vazar" da div
                        alt="" 
                        className="w-full h-full object-cover object-top rounded-full hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Nome mais proporcional (text-xl em vez de 2xl) */}
                    <h3 className="font-poppins font-bold text-xl text-white mb-1">
                      {member.name}
                    </h3>
                    {/* Cargo mais discreto (text-xs) */}
                    <p className="text-[#00D9A3] font-bold text-xs uppercase tracking-widest mb-6">
                      {member.role}
                    </p>

                    <div className="flex gap-3 items-center justify-center mt-auto">
                      {[
                        { icon: Linkedin, link: member.linkedin },
                        { icon: Github, link: member.github },
                        { icon: Mail, link: member.email ? `mailto:${member.email}` : "#" },
                      ].map((social, idx) => (
                        social.link && social.link !== "#" && social.link !== "mailto:#" ? (
                          <motion.a
                            key={idx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ 
                              scale: 1.1, 
                              boxShadow: "0 0 15px rgba(0, 217, 163, 0.5)",
                              backgroundColor: "#00D9A3",
                              color: "#0B3D2C"
                            }}
                            // Ícones e botões menores (w-10 h-10)
                            className="w-10 h-10 bg-[#00D9A3]/10 border border-[#00D9A3]/30 rounded-lg flex items-center justify-center text-[#00D9A3] transition-colors"
                          >
                            <social.icon size={18} className={idx === 0 ? "fill-current" : ""} />
                          </motion.a>
                        ) : null
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Navegação */}
            {teamMembers.length > 1 && (
              <div className="flex items-center justify-center gap-8 mt-12">
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 217, 163, 0.4)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#00D9A3]/40 bg-[#0B3D2C]/80 backdrop-blur-sm flex items-center justify-center text-[#00D9A3] hover:bg-[#00D9A3] hover:text-[#0B3D2C] transition-colors"
                >
                  <ChevronLeft size={20} />
                </motion.button>

                <div className="flex items-center gap-2 md:gap-3">
                  {teamMembers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 md:h-3 rounded-full transition-all duration-500 ${
                        currentIndex === idx 
                          ? "w-6 md:w-8 bg-[#00D9A3] shadow-[0_0_10px_rgba(0,217,163,0.8)]" 
                          : "w-2.5 md:w-3 bg-[#00D9A3]/30 hover:bg-[#00D9A3]/60"
                      }`}
                      aria-label={`Ir para o membro ${idx + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 217, 163, 0.4)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#00D9A3]/40 bg-[#0B3D2C]/80 backdrop-blur-sm flex items-center justify-center text-[#00D9A3] hover:bg-[#00D9A3] hover:text-[#0B3D2C] transition-colors"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}