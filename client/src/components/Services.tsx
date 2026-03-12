import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calculator, Users, TrendingUp, Volume2, Handshake, Search, X } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Consultoria",
    description: "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "Briefcase",
    category: "Gestão",
  },
  {
    id: 2,
    title: "Contabilidade",
    description: "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "Calculator",
    category: "Gestão",
  },
  {
    id: 3,
    title: "Parcerias",
    description: "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "Handshake",
    category: "Crescimento",
  },
  {
    id: 4,
    title: "Recursos Humanos",
    description: "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "Users",
    category: "Gestão",
  },
  {
    id: 5,
    title: "Marketing",
    description: "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "Volume2",
    category: "Crescimento",
  },
  {
    id: 6,
    title: "Negócios",
    description: "Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas",
    icon: "TrendingUp",
    category: "Crescimento",
  },
];

const iconMap = {
  Briefcase: Briefcase,
  Calculator: Calculator,
  Users: Users,
  TrendingUp: TrendingUp,
  Volume2: Volume2,
  Handshake: Handshake,
};

const filters = ["Todos", "Gestão", "Crescimento"];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeFilter === "Todos" || service.category === activeFilter;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="servicos" className="relative py-24 overflow-hidden bg-[#0B3D2C]">
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
            CONSULTORIA QUE AJUDA NO <span className="text-[#00D9A3]">BRASIL</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Bem-vindo a iGamexpert, ajudamos empresas a entender e ganhar no mercado Brasileiro de apostas.
          </p>
        </motion.div>

        {/* Services Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00D9A3]/20 to-[#00FF88]/10 rounded-3xl p-12 border-2 border-[#00D9A3]/30 backdrop-blur-sm"
        >
          {/* Services Header with Filters and Search */}
          <div className="flex flex-col gap-6 mb-8">
            {/* First Row: Services Label and Filter Buttons */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-[#00D9A3]/20 border-2 border-[#00D9A3] rounded-full"
              >
                <h3 className="font-poppins font-700 text-white text-lg">SERVIÇOS</h3>
              </motion.div>

              {/* Filter Buttons */}
              <div className="flex gap-3 flex-wrap justify-center lg:justify-end">
                {filters.map((filter, idx) => (
                  <motion.button
                    key={filter}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveFilter(filter)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-poppins font-600 text-sm transition-all duration-300 border-2 ${
                      activeFilter === filter
                        ? "bg-[#00D9A3] border-[#00D9A3] text-black shadow-lg shadow-[#00D9A3]/50"
                        : "bg-[#00D9A3]/20 border-[#00D9A3] text-white hover:bg-[#00D9A3]/30"
                    }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[#00D9A3]/60" />
                <input
                  type="text"
                  placeholder="Buscar serviço por nome..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 bg-[#0B3D2C]/60 border-2 border-[#00D9A3]/40 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D9A3] focus:ring-2 focus:ring-[#00D9A3]/30 transition-all duration-300 font-poppins"
                />
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-[#00D9A3]/60 hover:text-[#00D9A3] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </motion.div>

            {/* Results Counter */}
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-[#00D9A3] font-poppins"
              >
                Mostrando <span className="font-700">{filteredServices.length}</span> de <span className="font-700">{services.length}</span> serviços
              </motion.div>
            )}
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <motion.div
                key={`${activeFilter}-${searchQuery}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredServices.map((service) => {
                  const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#0B3D2C]/60 border-2 border-[#00D9A3]/40 rounded-2xl p-6 hover:border-[#00D9A3] transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-3 bg-[#00D9A3] rounded-lg group-hover:bg-[#00FF88] transition-all duration-300"
                        >
                          {IconComponent && (
                            <IconComponent className="w-6 h-6 text-black" />
                          )}
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-[#00D9A3]/20 border border-[#00D9A3] rounded-lg"
                        />
                      </div>
                      <h3 className="font-poppins font-700 text-white text-lg mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <p className="text-white/60 text-lg font-poppins">
                  Nenhum serviço encontrado para "<span className="font-700 text-[#00D9A3]">{searchQuery}</span>"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
