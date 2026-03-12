import { motion } from "framer-motion";

export default function About() {
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
    <section id="sobre" className="relative py-24 overflow-hidden bg-[#0B3D2C]">
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="font-poppins font-700 text-5xl text-white mb-4">
              NOSSA <span className="text-[#00D9A3]">HISTÓRIA</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Conheça a trajetória da iGamexpert na indústria de iGaming
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Text */}
            <div className="space-y-6">
              <p className="text-white/80 text-lg leading-relaxed font-inter">
                Desde 2007, a iGamexpert tem sido referência em consultoria especializada para o mercado de iGaming. Com mais de 19 anos de experiência, ajudamos empresas a entender e ganhar no mercado brasileiro de apostas.
              </p>
              <p className="text-white/80 text-lg leading-relaxed font-inter">
                Nossa equipe de especialistas trabalha com as maiores empresas do setor, fornecendo soluções personalizadas em consultoria, marketing, negócios, contabilidade, parcerias e recursos humanos.
              </p>
              <p className="text-white/80 text-lg leading-relaxed font-inter">
                Acreditamos que o sucesso vem da combinação de conhecimento profundo do mercado, inovação estratégica e compromisso com resultados mensuráveis.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="bg-[#00D9A3]/10 border-2 border-[#00D9A3]/30 rounded-2xl p-8 text-center hover:border-[#00D9A3] transition-all duration-300"
              >
                <p className="text-4xl font-poppins font-700 text-[#00D9A3] mb-2">
                  2007
                </p>
                <p className="text-white/60 text-sm">Fundação</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-[#00D9A3]/10 border-2 border-[#00D9A3]/30 rounded-2xl p-8 text-center hover:border-[#00D9A3] transition-all duration-300"
              >
                <p className="text-4xl font-poppins font-700 text-[#00D9A3] mb-2">
                  19+
                </p>
                <p className="text-white/60 text-sm">Anos de Experiência</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-[#00D9A3]/10 border-2 border-[#00D9A3]/30 rounded-2xl p-8 text-center hover:border-[#00D9A3] transition-all duration-300"
              >
                <p className="text-4xl font-poppins font-700 text-[#00D9A3] mb-2">
                  500+
                </p>
                <p className="text-white/60 text-sm">Empresas Consultadas</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-[#00D9A3]/10 border-2 border-[#00D9A3]/30 rounded-2xl p-8 text-center hover:border-[#00D9A3] transition-all duration-300"
              >
                <p className="text-4xl font-poppins font-700 text-[#00D9A3] mb-2">
                  100%
                </p>
                <p className="text-white/60 text-sm">Satisfação</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
