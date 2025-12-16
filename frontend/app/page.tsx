'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Interface do Serviço
interface Service {
  id: string;
  name: string;
  price: number;
  duration_minutes: number;
  description: string;
  image_url?: string; 
}
// Interface do Usuário (agora com role)
interface User {
  name: string;
  email: string;
  role: string;
}
export default function Home() {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [user, setUser] = useState<User | null>(null);
// Estado para controlar o menu dropdown
  const [menuOpen, setMenuOpen] = useState(false);

  // Efeito Único: Carrega Serviços E Verifica Login
  useEffect(() => {
    // 1. Busca os serviços do Backend
    async function fetchServices() {
      try {
        const res = await fetch('http://localhost:3001/services');
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Erro ao carregar serviços", error);
      }
    }
    fetchServices();

    // 2. Verifica se tem usuário logado
    const userStored = localStorage.getItem('user');
    if (userStored) {
      setUser(JSON.parse(userStored));
    }
  }, []);

  // Função de Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.refresh();
  };

  // Função do WhatsApp
  const irParaAgendamento = (servico: Service) => {
      // Se não tiver logado, o próprio /book vai chutar pro login, mas podemos verificar aqui também
      router.push(`/book?serviceId=${servico.id}`);
    };

  return (
    <div className="min-h-screen bg-beleza-50 font-sans text-beleza-900">
      
      {/* Header com Logo e Login */}
      <header className="bg-beleza-250 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
             <img src="/logo.jpeg" alt="Belezafro Logo" className="h-20 w-20 object-contain rounded-md" />
          </div>

{/* Área do Usuário / Menu */}
          <div className="relative">
            {user ? (
              // === SE ESTIVER LOGADO ===
              <div>
                {/* Botão que abre o menu */}
                <button 
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-beleza-700 hover:text-beleza-500 transition focus:outline-none"
                >
                  <span>Olá, {user.name.split(' ')[0]}</span>
                  {/* Setinha para baixo */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                </button>

                {/* O Menu Dropdown Flutuante */}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-beleza-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    
                    {/* Item 1: Perfil (Futuro) */}
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-beleza-700 hover:bg-beleza-50 hover:text-beleza-900 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      👤 Meu Perfil
                    </Link>
                    {user.role !== 'ADMIN' &&(
                    <Link href="/my-appointments" className="block px-4 py-2 text-sm text-beleza-700 hover:bg-beleza-50 hover:text-beleza-900 transition">
                        📅 Meus Agendamentos
                    </Link>                      
                    )}


                    {/* Item 2: Painel Admin (SÓ APARECE SE FOR ADMIN) */}
                    {user.role === 'ADMIN' && (
                      <Link 
                        href="/admin" 
                        className="block px-4 py-2 text-sm text-beleza-700 hover:bg-beleza-50 hover:text-beleza-900 transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        ⚙️ Adicionar Trança
                      </Link>
                    )}
                    {user && user.role === 'ADMIN' && (
                        <Link href="/dashboard" className="block px-4 py-2 text-sm text-beleza-700 hover:bg-beleza-50 hover:text-beleza-900 transition">
                            📊 Painel Admin
                        </Link>
                    )}

                    <div className="h-px bg-beleza-100 my-1"></div>

                    {/* Item 3: Sair */}
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition flex items-center gap-2"
                    >
                      🚪 Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // === SE NÃO ESTIVER LOGADO ===
              <a href="/login" className="text-sm font-bold text-beleza-500 hover:text-beleza-300 transition border border-beleza-200 px-4 py-2 rounded-full hover:bg-beleza-50">
                Entrar / Cadastrar
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-beleza-200 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627918491244-6a0664273200?q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-beleza-accent font-semibold tracking-[0.3em] text-sm uppercase">Est. 2019</span>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-beleza-900 drop-shadow-sm">
                Realçando sua <br/>
                <span className="text-white drop-shadow-md">Ancestralidade</span>
            </h2>
            <p className="text-lg text-beleza-900/80 font-medium max-w-xl mx-auto">
                Especialistas em tranças e estética afro.
            </p>
        </div>
      </main>

      {/* Catálogo Real */}
      <section className="max-w-7xl mx-auto px-2 md:px-4 py-12 md:py-20">
        <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-beleza-900 mb-2">Nossos Serviços</h3>
            <div className="w-16 h-1 bg-beleza-300 mx-auto rounded-full"></div>
        </div>
        
        {services.length === 0 ? (
          <p className="text-center text-beleza-400">Carregando catálogo...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-beleza-100 flex flex-col group">
                
                {/* Imagem Story (9:16) */}
                <div className="aspect-[9/16] w-full bg-beleza-100 relative overflow-hidden">
                  {service.image_url ? (
                    <img 
                      src={service.image_url} 
                      alt={service.name} 
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-beleza-50 text-beleza-200">
                      <span className="text-2xl opacity-50">✦</span>
                    </div>
                  )}
                  {/* Preço */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 flex items-end">
                    <p className="text-white font-bold text-lg">R$ {Number(service.price).toFixed(0)}</p>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 flex-1 flex flex-col">
                  <div className="mb-2">
                    <h4 className="text-sm md:text-lg font-bold text-beleza-900 leading-tight group-hover:text-beleza-300 transition">
                        {service.name}
                    </h4>
                  </div>
                  
                  <p className="text-beleza-400 text-xs mb-3 line-clamp-2 hidden md:block">
                    {service.description || "Acabamento impecável."}
                  </p>
                  
                  <div className="flex items-center gap-1 text-xs text-beleza-400 mb-4 font-medium">
                    <span>⏱️ {service.duration_minutes} min</span>
                  </div>

                  <button 
                    onClick={() => irParaAgendamento(service)}
                    className="w-full bg-beleza-900 hover:bg-beleza-300 text-white font-medium py-2.5 rounded-lg text-xs md:text-sm transition flex items-center justify-center gap-2 mt-auto"
                  >
                    <span>Agendar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-beleza-900 text-beleza-100 py-12 text-center">
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
             <p className="text-beleza-200 text-sm max-w-xs mx-auto">
                Realçando sua ancestralidade através da arte das tranças.
             </p>
        </div>
        <p className="text-xs text-beleza-500">© 2025 Belezafro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}