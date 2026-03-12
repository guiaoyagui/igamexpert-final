import { motion } from "framer-motion";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Mail, Phone, User, MessageSquare, Send, CheckCircle } from "lucide-react";

/**
 * Contact Form Component
 * Design Philosophy: Cyberpunk Corporativo Minimalista
 * - Formulário minimalista com validação
 * - Integração com backend tRPC
 * - Estados de sucesso e erro
 */

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const submitMutation = trpc.contact.submit.useMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-poppins font-700 text-5xl text-white mb-4">
                ENTRE EM CONTATO
              </h2>
              <p className="text-white/60 text-lg">
                Fale conosco sobre como podemos ajudar seu negócio a crescer no mercado de iGaming.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-poppins font-600 text-white mb-1">Email</h3>
                  <a
                    href="mailto:contato@igamexpert.com"
                    className="text-white/60 hover:text-emerald-500 transition-colors"
                  >
                    contato@igamexpert.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-poppins font-600 text-white mb-1">Telefone</h3>
                  <a
                    href="tel:+5511999999999"
                    className="text-white/60 hover:text-emerald-500 transition-colors"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={20} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-poppins font-600 text-white mb-1">Endereço</h3>
                  <p className="text-white/60">
                    Rua Desembargador Elizeu Guilherme<br />
                    São Paulo, SP
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex items-center justify-center"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={64} className="text-emerald-500 mx-auto" />
                  </motion.div>
                  <h3 className="font-poppins font-700 text-2xl text-white">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-white/60">
                    Obrigado por entrar em contato. Responderemos em breve.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="absolute left-4 top-4 text-emerald-500">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="absolute left-4 top-4 text-emerald-500">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="absolute left-4 top-4 text-emerald-500">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="absolute left-4 top-4 text-emerald-500">
                    <MessageSquare size={18} />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Sua mensagem..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-poppins font-600 rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {submitMutation.isPending ? "Enviando..." : "ENVIAR MENSAGEM"}
                </motion.button>

                {submitMutation.isError && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm text-center"
                  >
                    Erro ao enviar mensagem. Tente novamente.
                  </motion.p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
