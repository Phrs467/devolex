"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Planejamento",
    description: "Análise profunda dos requisitos e objetivos do negócio."
  },
  {
    num: "2",
    title: "Design",
    description: "Criação de interfaces modernas, intuitivas e focadas no usuário."
  },
  {
    num: "3",
    title: "Desenvolvimento",
    description: "Codificação com as melhores tecnologias e práticas do mercado."
  },
  {
    num: "4",
    title: "Entrega",
    description: "Testes rigorosos, deploy otimizado e acompanhamento contínuo."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Nosso processo
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-gray-200 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold text-lg mb-6 shadow-none">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
