"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Transformamos ideias em soluções digitais que geram resultados.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Criamos landing pages, sites profissionais, sistemas personalizados e automações para empresas que desejam crescer utilizando tecnologia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contato" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-none font-semibold text-center transition-all duration-250 shadow-sm hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2">
                Solicitar orçamento
              </a>
              <a href="#projetos" className="bg-white border border-gray-200 hover:border-gray-300 text-gray-900 px-8 py-4 rounded-none font-semibold text-center transition-all duration-250 hover:bg-gray-50 flex items-center justify-center gap-2 group">
                Ver projetos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>Desenvolvimento sob medida</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>Sites rápidos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>SEO otimizado</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>Suporte contínuo</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            {/* Minimalist glow effect behind */}
            
            
            <div className="relative rounded-none overflow-hidden border border-gray-200 shadow-none bg-white">
              {/* Sharp image edge without fake dots */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="Notebook exibindo interface real" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
