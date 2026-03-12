import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

/**
 * Timeline Component - Professional Journey
 * Design Philosophy: Cyberpunk Corporativo Minimalista
 * - Linha do tempo vertical com pontos em emerald
 * - Animações ao scroll
 * - Descrições alternadas esquerda/direita
 */

const timelineImageUrl =
  "https://private-us-east-1.manuscdn.com/sessionFile/ZMsJJT41uoYylzE50sx7MF/sandbox/1QAaTvguIZ6I2APYRnfHLY-img-3_1772027575000_na1fn_dGltZWxpbmUtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWk1zSkpUNDF1b1l5bHpFNTBzeDdNRi9zYW5kYm94LzFRQWFUdmd1SVo2STJBUFlSbmZITFktaW1nLTNfMTc3MjAyNzU3NTAwMF9uYTFmbl9kR2x0Wld4cGJtVXRZbWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pWjx94SVTAbRJImGefMwEEEfZJf5A3eFGP8xu0nLE5yXmQSVBw8LtridtY16-A3Fxe9mnpkoAgDmLAw46Tf1eVZYrMeHRdTj6YIxgDKcLhI9KG9OcqlOVjaq6EFmj6dJICP~zY-iSaPACzTJidEwmMNEZ-Tr2zYMdwuCj86nrniiYX1DaGS49GU45CCfj~NEyghKPn6e0ohLqIfQI~z5jk4f5T~APBpn6sYO51wjlnrpWxQag~2GVwYTx4PZE4tK1orqCpFWCRk87r~M-hwRl7n00w1ZGij63ZsZjDeDVZ2KYq3RRgbVgSTDe2Hh6nu8PibPq0q66Dyq-HlBf4oEEg__";

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="timeline" className="relative py-24 overflow-hidden">


      {/* Content */}
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-poppins font-700 text-5xl text-white mb-4">
            NOSSA HISTÓRIA
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Uma jornada de 19 anos na indústria de iGaming brasileiro
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 transition-all"
                  >
                    <h3 className="font-poppins font-700 text-3xl text-yellow-500 mb-2">
                      {item.year}
                    </h3>
                    <h4 className="font-poppins font-600 text-xl text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="flex items-start justify-center w-12">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                    className="w-6 h-6 rounded-full bg-emerald-500 border-4 border-black shadow-lg shadow-emerald-500/50"
                  ></motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
