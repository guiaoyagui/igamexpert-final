import { motion } from "framer-motion";
import { useState } from "react";

const eventsData = [
  {
    id: 1,
    name: "SBC - RIO",
    date: "5-7 MAR 2026",
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "SBC - RIO",
    date: "5-7 MAR 2026",
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "SBC - RIO",
    date: "5-7 MAR 2026",
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
];

export default function Events() {
  const [selectedMonth, setSelectedMonth] = useState("MAR");

  return (
    <section id="eventos" className="relative py-24 overflow-hidden bg-[#0B3D2C]">
      <div className="container relative z-10">
        {/* Events Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00D9A3]/20 to-[#00FF88]/10 rounded-3xl p-12 border-2 border-[#00D9A3]/30 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-poppins font-700 text-4xl text-[#00D9A3] mb-2">
                EVENTOS QUE ESTAREMOS
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-[#00D9A3]/30 border-2 border-[#00D9A3] rounded-full"
            >
              <span className="font-poppins font-700 text-white">CALENDÁRIO DE EVENTOS</span>
            </motion.div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {eventsData.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0B3D2C]/60 border-2 border-[#00D9A3]/40 rounded-2xl p-6 hover:border-[#00D9A3] transition-all duration-300 flex items-center gap-6"
              >
                {/* Event Image */}
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover rounded-xl border-2 border-[#00D9A3]/50"
                  />
                </div>

                {/* Event Info */}
                <div className="flex-1">
                  <h3 className="font-poppins font-700 text-2xl text-[#00D9A3] mb-2">
                    {event.name}
                  </h3>
                  <p className="text-white/80 font-inter">{event.location}</p>
                </div>

                {/* Event Date */}
                <div className="flex flex-col gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-[#00D9A3] text-black font-poppins font-700 rounded-full text-center"
                  >
                    {event.date}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-[#00D9A3]/30 border-2 border-[#00D9A3] text-white font-poppins font-700 rounded-full text-center"
                  >
                    Saiba Mais
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
