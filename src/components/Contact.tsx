"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", phone: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contato" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              Pronto para iniciar?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-md">
              Preencha o formulário e nossa equipe entrará em contato em menos de 24 horas para entender sua necessidade.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                  <p className="text-gray-900 font-semibold">+55 (62) 98318-1287</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">E-mail</p>
                  <p className="text-gray-900 font-semibold">devolex.digital@gmail.com</p>
                </div>
              </div>

              <a href="https://www.instagram.com/devolex.digital/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Instagram</p>
                  <p className="text-gray-900 font-semibold">@devolex.digital</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-none border border-gray-200 shadow-none"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 col-span-2 md:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome" className="w-full px-4 py-3 rounded-none border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5 col-span-2 md:col-span-1">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">Empresa</label>
                  <input type="text" id="company" value={formData.company} onChange={handleChange} placeholder="Sua empresa" className="w-full px-4 py-3 rounded-none border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 col-span-2 md:col-span-1">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required placeholder="(11) 90000-0000" className="w-full px-4 py-3 rounded-none border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5 col-span-2 md:col-span-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" className="w-full px-4 py-3 rounded-none border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                <textarea id="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Como podemos ajudar?" className="w-full px-4 py-3 rounded-none border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"></textarea>
              </div>

              {status === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 size={18} />
                  Orçamento enviado com sucesso!
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 flex items-center gap-2 text-sm font-medium">
                  <AlertCircle size={18} />
                  Erro ao enviar mensagem.
                </div>
              )}

              <button type="submit" disabled={status === "loading"} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white w-full py-4 rounded-none font-semibold transition-all duration-250 shadow-sm hover:shadow-md flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                <Send size={18} />
                {status === "loading" ? "Enviando..." : "Enviar orçamento"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
