import { motion } from "framer-motion";
import { jobs } from "@/lib/data";
import { MapPin, Briefcase, Globe } from "lucide-react";

export default function Jobs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="vagas" className="relative py-24 overflow-hidden">
      <div className="container relative z-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-poppins font-700 text-5xl text-white mb-4">
            ESTAMOS CONTRATANDO
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Junte-se a nossa equipe de especialistas em iGaming
          </p>
        </motion.div>

        {/* Container Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00D9A3]/30 to-[#00FF88]/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-[#00D9A3]/40"
        >
          {/* Jobs List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-6 rounded-2xl bg-[#0B3D2C]/60 backdrop-blur-sm border border-[#00D9A3]/30 hover:border-[#00D9A3]/60 hover:bg-[#0B3D2C]/80 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <h3 className="font-poppins font-700 text-2xl text-[#00FF88] mb-3 group-hover:text-[#00D9A3] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-white/70 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#00D9A3]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-[#00D9A3]" />
                        <span className="capitalize">{job.department}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-[#00D9A3]/30 text-[#00FF88] rounded-full text-xs font-medium border border-[#00D9A3]/40">
                        {job.type === "full-time" ? "Full Time" : job.type === "part-time" ? "Part Time" : "Contract"}
                      </span>
                      {job.remote && (
                        <span className="px-3 py-1 bg-[#00FF88]/30 text-[#00FF88] rounded-full text-xs font-medium border border-[#00FF88]/40 flex items-center gap-1">
                          <Globe size={12} />
                          Remoto
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#00D9A3] text-[#0B3D2C] font-poppins font-600 rounded-full text-sm hover:bg-[#00FF88] transition-all whitespace-nowrap shadow-lg shadow-[#00D9A3]/50 hover:shadow-[#00FF88]/50"
                  >
                    CANDIDATAR-SE
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
