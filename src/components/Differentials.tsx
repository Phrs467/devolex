"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const differentials = [
  "Projetos rápidos",
  "Código limpo",
  "Design profissional",
  "Alta performance",
  "Responsividade",
  "SEO",
  "Segurança",
  "Suporte"
];

export function Differentials() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative rounded-none overflow-hidden border border-gray-200 shadow-none bg-white"
          >
            {/* Image without dots */}
            <img 
              src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop" 
              alt="Código limpo e design profissional" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Por que escolher a Devolex?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nosso compromisso é com a excelência técnica e resultados reais. Combinamos design de classe mundial com engenharia de software de ponta.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-blue-600" strokeWidth={2.5} />
                  </div>
                  <span className="text-gray-900 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
