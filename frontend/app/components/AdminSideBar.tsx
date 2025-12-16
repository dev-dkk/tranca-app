'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Para saber em qual página estamos e marcar no menu

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <div className="w-64 h-screen bg-beleza-900 text-white flex flex-col fixed left-0 top-0 shadow-xl z-50">
      {/* Logo */}
      <div className="p-6 border-b border-beleza-700">
        <h1 className="text-xl font-bold tracking-wider text-center">AFROBRAIDS <span className="text-xs block text-beleza-300 font-normal">Painel Admin</span></h1>
      </div>

      {/* Menu Links */}
      <nav className="flex-1 p-4 space-y-2">
        
        {/* Item: Dashboard */}
        <button 
            onClick={() => router.push('/dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard' ? 'bg-beleza-700 text-white font-bold' : 'hover:bg-beleza-800 text-beleza-100'
            }`}
        >
            <span>📊</span> Dashboard
        </button>

        {/* Item: Serviços */}
        <button 
            onClick={() => router.push('/admin-services')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === '/admin-services' ? 'bg-beleza-700 text-white font-bold' : 'hover:bg-beleza-800 text-beleza-100'
            }`}
        >
            <span>🛠️</span> Serviços
        </button>

        {/* Item: Ver Site (Para ir pra área do cliente ver como ficou) */}
        <button 
            // MUDANÇA AQUI:
            onClick={() => router.push('/admin-preview')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mt-8 border-t border-beleza-700 transition-colors ${
                pathname === '/admin-preview' ? 'bg-beleza-700 text-white font-bold' : 'hover:bg-beleza-800 text-beleza-100'
            }`}
        >
            <span>👁️</span> Visualizar Site
        </button>
        <button 
            // MUDANÇA AQUI:
            onClick={() => router.push('/admin-agenda')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mt-8 border-t border-beleza-700 transition-colors ${
                pathname === '/admin-agenda' ? 'bg-beleza-700 text-white font-bold' : 'hover:bg-beleza-800 text-beleza-100'
            }`}
        >
            <span>📅</span> Agenda Completa
        </button>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-beleza-700">
        <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-bold transition"
        >
            🚪 Sair
        </button>
      </div>
    </div>
  );
}