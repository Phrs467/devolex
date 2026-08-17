"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "TechLogistics",
    image: "https://i.pravatar.cc/150?img=11",
    text: "A Devolex transformou completamente nossa operação. O sistema web desenvolvido por eles é rápido, intuitivo e nos fez economizar centenas de horas."
  },
  {
    name: "Marina Costa",
    company: "Studio 42",
    image: "https://i.pravatar.cc/150?img=32",
    text: "Nossa nova landing page dobrou a taxa de conversão em menos de um mês. O design é de altíssimo padrão, exatamente como queríamos."
  },
  {
    name: "Roberto Mendes",
    company: "Construtora Prime",
    image: "https://i.pravatar.cc/150?img=68",
    text: "Profissionalismo do começo ao fim. A equipe entendeu nossas necessidades técnicas e entregou um site institucional rápido e moderno."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Subtle dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            O que nossos clientes dizem
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border border-gray-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
