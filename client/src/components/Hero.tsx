import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0B3D2C]"
    >

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 max-w-3xl"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="font-poppins font-700 text-5xl lg:text-6xl text-white leading-tight">
                EVENTO SOBRE O MERCADO BRASILEIRO DE JOGOS E APOSTAS
              </h1>
              <p className="text-lg text-white/80 font-inter">
                Consultoria especializada para executivos seniores ganharem no mercado brasileiro
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#contato");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-[#00D9A3] text-black font-poppins font-700 rounded-full hover:bg-[#00FF88] transition-all duration-300 flex items-center gap-2"
              >
                CONTATE-NOS →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#servicos");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 border-2 border-white text-white font-poppins font-700 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                SAIBA MAIS
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <p className="text-3xl font-poppins font-700 text-[#00FF88]">
                  19+
                </p>
                <p className="text-sm text-white/60">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-poppins font-700 text-[#00FF88]">
                  500+
                </p>
                <p className="text-sm text-white/60">Empresas Consultadas</p>
              </div>
              <div>
                <p className="text-3xl font-poppins font-700 text-[#00FF88]">
                  100%
                </p>
                <p className="text-sm text-white/60">Taxa de Satisfação</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
