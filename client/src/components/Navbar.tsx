import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const navItems = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Vagas", href: "/#vagas" },
  { label: "Eventos", href: "/#eventos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();
  const currentLocation = window.location.pathname;

  const handleNavClick = (href: string) => {
    const [path, hash] = href.split('#');
    
    if (currentLocation === path && hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation(href);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B3D2C] border-b border-[#00D9A3]/20"
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/logo-igamexpert.png"
            alt="iGamexpert Logo"
            className="h-10 w-auto brightness-0 invert"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="px-4 py-2 text-white font-poppins font-600 border-2 border-[#00D9A3] rounded-full hover:bg-[#00D9A3] hover:text-black transition-all duration-300 text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick("/#contato")}
          className="hidden md:block px-6 py-2 bg-[#00D9A3] text-black font-poppins font-700 rounded-full hover:bg-[#00FF88] transition-all duration-300"
        >
          CONTATE-NOS
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0B3D2C] border-t border-[#00D9A3]/20 p-4 space-y-2"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="w-full px-4 py-2 text-white font-poppins font-600 border-2 border-[#00D9A3] rounded-full hover:bg-[#00D9A3] hover:text-black transition-all duration-300 text-sm"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/#contato")}
            className="w-full px-6 py-2 bg-[#00D9A3] text-black font-poppins font-700 rounded-full hover:bg-[#00FF88] transition-all duration-300"
          >
            CONTATE-NOS
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
