"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HelloMake",
    category: "Catálogo Digital com WhatsApp",
    image: "/proj_home.png",
    link: "https://www.hellomake.com.br/"
  },
  {
    id: 2,
    title: "Dra. Marília Martins",
    category: "Instabio 100% Personalizado",
    image: "/proj_marilia.png",
    link: "https://www.dramariliamartins.com.br/"
  }
];

export function Portfolio() {
  return (
    <section id="projetos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4"
            >
              Projetos em destaque
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Conheça alguns dos trabalhos recentes que desenvolvemos.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col gap-4 block"
            >
              <div className="relative rounded-sm overflow-hidden bg-gray-100 aspect-[4/3] border border-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300" />
              </div>
              <div className="flex justify-between items-start pt-2">
                <div>
                  <span className="text-sm font-medium text-blue-600 mb-1 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a href="#contato" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-none font-semibold text-center transition-all duration-250 shadow-sm hover:shadow-lg flex items-center gap-2">
            Vamos criar o seu projeto
          </a>
        </div>
      </div>
    </section>
  );
}
