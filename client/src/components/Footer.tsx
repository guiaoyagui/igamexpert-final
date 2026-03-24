import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Equipe", href: "#equipe" },
    { label: "Vagas", href: "#vagas" },
    { label: "Eventos", href: "#eventos" },
    { label: "Contato", href: "#contato" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    // CORREÇÃO: bg-transparent para ver o BackgroundRibbon
    <footer className="relative bg-transparent overflow-hidden py-16">
      <div className="container px-4">
        {/* Container Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00D9A3]/30 to-[#00FF88]/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-[#00D9A3]/40"
        >
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/logo-igamexpert.png"
                  alt="iGamexpert Logo"
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Consultoria especializada para executivos seniores ganharem no mercado
                brasileiro de iGaming.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-poppins font-600 text-[#00FF88] mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#00D9A3] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-poppins font-600 text-[#00FF88] mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-[#00D9A3] transition-colors text-sm">
                    Consultoria
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-[#00D9A3] transition-colors text-sm">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-[#00D9A3] transition-colors text-sm">
                    Negócios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-[#00D9A3] transition-colors text-sm">
                    RH
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-poppins font-600 text-[#00FF88] mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#00D9A3] mt-1 flex-shrink-0" />
                  <span className="text-white/70 text-sm">
                    Rua Desembargador Elizeu Guilherme, São Paulo
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[#00D9A3] flex-shrink-0" />
                  <a href="mailto:contato@igamexpert.com" className="text-white/70 hover:text-[#00D9A3] transition-colors text-sm">
                    contato@igamexpert.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-[#00D9A3] flex-shrink-0" />
                  <a href="tel:+5511999999999" className="text-white/70 hover:text-[#00D9A3] transition-colors text-sm">
                    +55 (11) 99999-9999
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#00D9A3]/30 to-transparent mb-8"></div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            {/* Copyright */}
            <p className="text-white/60 text-sm">
              © 2026 iGamexpert. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full border border-[#00D9A3]/40 flex items-center justify-center text-white/70 hover:border-[#00D9A3] hover:text-[#00D9A3] hover:bg-[#00D9A3]/10 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}