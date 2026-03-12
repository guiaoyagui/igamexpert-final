import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const visibleMembers = [
    teamMembers[currentIndex],
    teamMembers[(currentIndex + 1) % teamMembers.length],
    teamMembers[(currentIndex + 2) % teamMembers.length],
  ];

  return (
    <section id="equipe" className="relative py-24 overflow-hidden bg-[#0B3D2C]">
      <div className="container relative z-10">
        {/* Team Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00D9A3]/15 to-[#00FF88]/5 rounded-3xl p-12 border-2 border-[#00D9A3]/40 backdrop-blur-sm"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-700 text-5xl text-white mb-4">
              EQUIPE
            </h2>
            <p className="text-white/60 text-lg">
              Conheça os especialistas que fazem a diferença
            </p>
          </motion.div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {visibleMembers.map((member, idx) => (
              <motion.div
                key={`${member.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Profile Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="w-full bg-gradient-to-br from-[#00D9A3]/20 to-[#00FF88]/10 rounded-2xl p-6 border border-[#00D9A3]/30 hover:border-[#00D9A3]/60 transition-all duration-300"
                >
                  {/* Profile Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-6 relative"
                  >
                    <div className="w-full aspect-square rounded-xl overflow-hidden border-3 border-[#00D9A3] bg-[#0B3D2C]/60">
                      <img
                        src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Member Info */}
                  <h3 className="font-poppins font-700 text-lg text-white text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#00D9A3] text-sm text-center mb-4 font-poppins font-600">
                    {member.position}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 217, 163, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 bg-[#00D9A3] text-black font-poppins font-700 rounded-lg hover:bg-[#00FF88] transition-all duration-300 text-sm"
                  >
                    MARQUE UMA REUNIÃO
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="p-3 bg-[#00D9A3]/20 border-2 border-[#00D9A3] rounded-full hover:bg-[#00D9A3] hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white hover:text-black" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {teamMembers.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-[#00D9A3] w-8"
                      : "bg-[#00D9A3]/30 w-3"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="p-3 bg-[#00D9A3]/20 border-2 border-[#00D9A3] rounded-full hover:bg-[#00D9A3] hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white hover:text-black" />
            </motion.button>
          </div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-white/60 text-sm"
          >
            Conheça nossa equipe de especialistas em iGaming
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
