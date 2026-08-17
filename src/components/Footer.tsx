"use client";

// Social SVGs used inline

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/Logo.png" alt="Devolex Logo" className="h-[96px] w-auto" />
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Transformamos ideias em soluções digitais que geram resultados. 
              Especialistas em desenvolvimento web e automações.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/devolex.digital/" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Links Rápidos</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#inicio" className="text-gray-500 hover:text-blue-600 transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-gray-500 hover:text-blue-600 transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="text-gray-500 hover:text-blue-600 transition-colors">Projetos</a></li>
              <li><a href="#sobre" className="text-gray-500 hover:text-blue-600 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-500">devolex.digital@gmail.com</li>
              <li className="text-gray-500">+55 (62) 98318-1287</li>
              <li className="text-gray-500">Goiânia, GO</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Devolex. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Termos de uso</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Política de privacidade</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
