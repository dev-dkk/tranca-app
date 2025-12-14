import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      
      {/* Barra de Navegação (Header) */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-700 tracking-tighter">
            Belez<span className="text-black">A</span>fro
          </h1>
          <nav className="flex gap-4">
            <button className="text-gray-600 hover:text-amber-700 font-medium transition">
              Catálogo
            </button>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-2 rounded-full font-medium transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Login / Entrar
            </button>
          </nav>
        </div>
      </header>

      {/* Seção Principal (Hero) */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-[url('https://images.unsplash.com/photo-1605218427335-3a702513f150?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center relative">
        {/* Overlay escuro para ler o texto */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="uppercase tracking-widest text-amber-400 font-semibold text-sm">
            Estilo • Ancestralidade • Beleza
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Sua coroa merece <br/> o melhor cuidado.
          </h2>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Agende seu horário online em segundos. Especialistas em Box Braids, Nagô, Twist e muito mais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-amber-700 transition w-full sm:w-auto">
              Agendar Horário
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition w-full sm:w-auto">
              Ver Catálogo
            </button>
          </div>
        </div>
      </main>

      {/* Rodapé Simples */}
      <footer className="bg-neutral-900 text-neutral-400 py-8 text-center text-sm">
        <p>© 2025 BelezAfro. Sistema de Agendamento Profissional.</p>
        <div className="flex justify-center gap-4 mt-2">
          <span>Status do Sistema: <span className="text-green-500">● Online</span></span>
        </div>
      </footer>
    </div>
  );
}