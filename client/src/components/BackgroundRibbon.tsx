import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundRibbon() {
  const { scrollYProgress } = useScroll();
  
  // Efeito Parallax: a fita sobe suavemente conforme o scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0B3D2C] overflow-hidden">
      
      {/* Camada de ruído suave para textura */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
      />

      {/* Aumentámos a altura para 6000px para cobrir a página toda até ao Footer! */}
      <motion.svg
        style={{ y }}
        className="absolute top-0 left-0 w-full min-w-[1200px] h-[6000px] opacity-40"
        viewBox="0 0 1440 6000"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Linha Principal - Caminho estendido até ao Y=5900 */}
        <motion.path
          d="M-100,150 C 400,400 1000,-100 1540,250 
             S 400,800 700,1100 
             S 1600,1500 800,1800 
             S -100,2200 500,2500 
             S 1500,2800 700,3100 
             S -100,3500 500,3800 
             S 1600,4200 800,4500 
             S -100,4900 500,5200 
             S 1500,5600 700,5900"
          stroke="#00D9A3"
          strokeWidth="90"
          strokeLinecap="round"
          filter="url(#neonGlow)"
          animate={{
            d: [
              "M-100,150 C 400,400 1000,-100 1540,250 S 400,800 700,1100 S 1600,1500 800,1800 S -100,2200 500,2500 S 1500,2800 700,3100 S -100,3500 500,3800 S 1600,4200 800,4500 S -100,4900 500,5200 S 1500,5600 700,5900",
              "M-100,200 C 500,300 900,0 1540,300 S 500,700 800,1200 S 1500,1600 900,1900 S -50,2100 600,2600 S 1600,2700 800,3200 S -50,3400 600,3900 S 1500,4100 900,4600 S -50,4800 600,5300 S 1600,5500 800,6000",
              "M-100,150 C 400,400 1000,-100 1540,250 S 400,800 700,1100 S 1600,1500 800,1800 S -100,2200 500,2500 S 1500,2800 700,3100 S -100,3500 500,3800 S 1600,4200 800,4500 S -100,4900 500,5200 S 1500,5600 700,5900",
            ]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Linha Secundária - Caminho estendido até ao Y=5900 */}
        <motion.path
          d="M-100,200 C 300,500 1100,0 1540,350 
             S 300,900 800,1200 
             S 1700,1600 700,1900 
             S -200,2300 600,2600 
             S 1400,2900 800,3200 
             S -200,3600 600,3900 
             S 1700,4300 700,4600 
             S -200,5000 600,5300 
             S 1400,5600 800,5900"
          stroke="#00D9A3"
          strokeWidth="25"
          strokeLinecap="round"
          opacity="0.6"
          filter="url(#neonGlow)"
          animate={{
            d: [
              "M-100,200 C 300,500 1100,0 1540,350 S 300,900 800,1200 S 1700,1600 700,1900 S -200,2300 600,2600 S 1400,2900 800,3200 S -200,3600 600,3900 S 1700,4300 700,4600 S -200,5000 600,5300 S 1400,5600 800,5900",
              "M-100,150 C 400,450 1000,100 1540,250 S 400,1000 700,1100 S 1600,1500 800,2000 S -100,2200 500,2500 S 1500,2800 700,3100 S -100,3500 500,3800 S 1600,4200 800,4700 S -100,4900 500,5200 S 1500,5500 700,5800",
              "M-100,200 C 300,500 1100,0 1540,350 S 300,900 800,1200 S 1700,1600 700,1900 S -200,2300 600,2600 S 1400,2900 800,3200 S -200,3600 600,3900 S 1700,4300 700,4600 S -200,5000 600,5300 S 1400,5600 800,5900",
            ]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}