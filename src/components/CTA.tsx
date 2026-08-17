"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 rounded-none overflow-hidden relative px-6 py-20 text-center shadow-xl"
        >
          {/* Subtle background circles for depth */}
          
          
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Vamos desenvolver seu próximo projeto?
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Transforme sua ideia em uma solução digital de alto impacto. Fale com nossa equipe e descubra o que podemos construir juntos.
            </p>
            <a 
              href="#contato" 
              className="bg-white text-blue-600 px-8 py-4 rounded-none font-bold transition-all duration-250 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 group"
            >
              Solicitar orçamento
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
