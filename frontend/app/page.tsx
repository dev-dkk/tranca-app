'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HomeContent from '../app/components/HomeContent';

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
                    <Link href="/my-appointments" className="block px-4 py-2 text-sm text-beleza-700 hover:bg-beleza-50 hover:text-beleza-900 transition">
                        📅 Meus Agendamentos
                    </Link>                      


                    {/* Item 2: Painel Admin (SÓ APARECE SE FOR ADMIN) 
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
                    */}

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

      <HomeContent />
    </div>
  );
}