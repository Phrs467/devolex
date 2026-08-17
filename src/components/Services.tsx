"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, LayoutTemplate, Code2, Link2, Store, ArrowRight } from "lucide-react";

const services = [
  {
    id: "landing-pages",
    icon: LayoutTemplate,
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em transformar visitantes em clientes.",
    colSpan: "md:col-span-2",
  },
  {
    id: "sistemas-web",
    icon: Code2,
    title: "Sistemas Web",
    description: "Plataformas personalizadas para resolver problemas complexos do seu negócio.",
    colSpan: "md:col-span-1",
  },
  {
    id: "catalogo-digital",
    icon: Store,
    title: "Catálogo Digital",
    description: "Venda mais pelo WhatsApp com um catálogo online profissional e interativo.",
    colSpan: "md:col-span-1",
    action: "Falar no WhatsApp",
    link: "https://wa.me/5511999999999?text=Olá, tenho interesse em um Catálogo Digital",
  },
  {
    id: "sites",
    icon: MonitorSmartphone,
    title: "Sites Institucionais",
    description: "Presença digital profissional que transmite autoridade absoluta para sua marca.",
    colSpan: "md:col-span-1",
  },
  {
    id: "integracoes",
    icon: Link2,
    title: "Integrações",
    description: "Conectamos suas ferramentas para que trabalhem em perfeita sincronia.",
    colSpan: "md:col-span-1",
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50/50 relative">
      {/* Subtle grid background to break the pure white */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="max-w-2xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Soluções para acelerar o crescimento do seu negócio
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isCatalogo = service.id === "catalogo-digital";
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-white p-8 rounded-sm border border-gray-200 transition-all duration-300 hover:border-blue-300 flex flex-col justify-between ${service.colSpan} ${isCatalogo ? 'bg-blue-50/30 border-blue-100' : ''}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-colors duration-300 ${isCatalogo ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                </div>
                
                {service.action && (
                  <div className="mt-8">
                    <a href={service.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
                      {service.action}
                      <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#contato" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-sm font-semibold transition-all duration-250 shadow-none">
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
