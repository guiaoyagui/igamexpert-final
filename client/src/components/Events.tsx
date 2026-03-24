import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, MapPin, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;
const filters = ["Todos", "Próximos", "Passados"];
const EVENTS_PER_PAGE = 4;

// 1. CÉREBRO NOVO PARA DESCOBRIR O DIA DA SEMANA
const getDiaSemana = (dateString: string) => {
  if (!dateString) return "DIA";
  
  try {
    const cleanDate = String(dateString).split('T')[0];
    const parts = cleanDate.split('-');
    
    if (parts.length === 3) {
      const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      if (isNaN(date.getTime())) return "EVENTO";
      
      const dias = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO'];
      return dias[date.getDay()];
    }
  } catch (e) {
    return "EVENTO";
  }
  return "EVENTO";
};

// 2. FUNÇÃO PARA DEIXAR A DATA BONITA NO CARTÃO
const formatDisplayDate = (dateString: string) => {
  if (!dateString) return "";
  return String(dateString).split('T')[0];
};

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();
  const [eventsData, setEventsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!GOOGLE_SHEETS_URL) {
      setLoading(false);
      return;
    }

    fetch(`${GOOGLE_SHEETS_URL}?aba=Eventos`)
      .then(res => res.json())
      .then(data => {
        setEventsData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro a carregar eventos:", err);
        setLoading(false);
      });
  }, []);

  const filteredEvents = eventsData.filter((event) => {
    let statusCalculado = "Próximos";

    if (event.date) {
      const stringDate = String(event.date);
      if (stringDate.includes("-")) {
        const cleanDate = stringDate.split('T')[0];
        const parts = cleanDate.split('-');
        if (parts.length === 3) {
          const eventDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (eventDate < today) {
            statusCalculado = "Passados";
          }
        }
      }
    } else if (event.status) {
      const s = String(event.status).toLowerCase();
      if (s === 'passados' || s === 'past') {
        statusCalculado = "Passados";
      }
    }

    const matchesFilter = activeFilter === "Todos" || statusCalculado === activeFilter;
    const matchesSearch = (event.name && String(event.name).toLowerCase().includes(searchQuery.toLowerCase())) || 
                          (event.location && String(event.location).toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="eventos" className="relative py-24 bg-transparent">
      <div className="container relative z-10 px-4 max-w-6xl mx-auto">
        
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 mb-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
            CALENDÁRIO DE <span className="text-[#00D9A3]">EVENTOS</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center w-full xl:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#00D9A3]/60" />
              <input
                type="text"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-[#0B3D2C] border-2 border-[#00D9A3]/30 rounded-full text-white focus:border-[#00D9A3] outline-none transition-colors font-poppins text-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-3.5 text-[#00D9A3]/60 hover:text-[#00D9A3]">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full font-poppins font-semibold text-sm transition-all duration-300 border-2 whitespace-nowrap ${
                    activeFilter === filter
                      ? "bg-[#00D9A3] border-[#00D9A3] text-black"
                      : "bg-transparent border-[#00D9A3]/50 text-white hover:border-[#00D9A3]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center text-[#00D9A3] py-20 font-poppins text-lg">A carregar eventos...</div>
        ) : (
          <motion.div 
            key={currentPage + activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            {currentEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                // Altura mínima reduzida para 160px para um formato mais horizontal e elegante
                className="relative w-full rounded-2xl border-2 border-[#00D9A3]/30 overflow-hidden flex flex-col md:flex-row min-h-[160px] group hover:border-[#00D9A3] transition-colors bg-[#0B3D2C]"
              >
                <div 
                  className="absolute inset-0 z-0 w-full h-full bg-cover bg-center opacity-80"
                  style={{ 
                    backgroundImage: `url('${event.image}')`,
                    WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)',
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)'
                  }}
                />
                
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B3D2C]/0 via-[#0B3D2C]/40 to-[#0B3D2C] pointer-events-none" />

                {/* Barra lateral branca mais estreita e com texto ajustado */}
                <div className="relative z-20 w-full md:w-14 bg-white flex flex-row md:flex-col items-center justify-between py-3 px-4 md:px-0 shrink-0">
                  <span 
                    className="text-[#0B3D2C] font-black text-lg tracking-widest hidden md:block" 
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {getDiaSemana(event.date)}
                  </span>
                  <span className="text-[#0B3D2C] font-black text-lg tracking-widest md:hidden">
                    {getDiaSemana(event.date)}
                  </span>
                  <span className="text-[#0B3D2C] font-bold text-sm md:mt-3">9AM</span>
                </div>

                {/* Área de conteúdo mais compacta (paddings menores) */}
                <div className="relative z-20 flex-1 p-5 md:p-6 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
                  <div className="flex-1">
                    <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-2 group-hover:text-[#00D9A3] transition-colors drop-shadow-lg">
                      {event.name}
                    </h3>
                    
                    {/* Data e Localização lado a lado em ecrãs maiores */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3">
                      <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                        <Calendar size={16} className="text-[#00D9A3]" /> 
                        {formatDisplayDate(event.date)}
                      </div>
                      <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                        <MapPin size={16} className="text-[#00D9A3]" /> {event.location}
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-sm line-clamp-2 max-w-2xl">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-end shrink-0 mt-2 md:mt-0 w-full md:w-auto">
                    <button 
                      onClick={() => setLocation(`/evento/${event.id}`)}
                      // Botão reduzido proporcionalmente
                      className="w-full md:w-auto px-6 py-2.5 bg-[#0B3D2C]/50 backdrop-blur-sm border-2 border-[#00D9A3] text-[#00D9A3] font-poppins font-bold rounded-full hover:bg-[#00D9A3] hover:text-black transition-colors whitespace-nowrap text-sm"
                    >
                      Saber Mais
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-6 mt-8">
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
            
            {filteredEvents.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-white/60 text-lg font-poppins">Nenhum evento encontrado para este filtro.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}