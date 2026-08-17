"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "h-20 glass-nav" : "h-24 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/Logo.png" alt="Devolex Logo" className="h-[96px] w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Início</a>
          <a href="#servicos" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Serviços</a>
          <a href="#projetos" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Projetos</a>
          <a href="#sobre" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Sobre</a>
          <a href="#contato" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Contato</a>
          <a href="#contato" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-none font-semibold text-sm transition-all duration-250 shadow-sm hover:shadow-md hover:-translate-y-0.5">
            Solicitar orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">Início</a>
          <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">Serviços</a>
          <a href="#projetos" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">Projetos</a>
          <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">Sobre</a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">Contato</a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="bg-blue-600 text-white px-5 py-3 rounded-none font-semibold text-center mt-2">
            Solicitar orçamento
          </a>
        </div>
      )}
    </nav>
  );
}
