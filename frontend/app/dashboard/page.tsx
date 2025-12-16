'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Segurança: Só Admin entra
    const userStored = localStorage.getItem('user');
    if (!userStored) { router.push('/login'); return; }
    const user = JSON.parse(userStored);
    if (user.role !== 'ADMIN') { router.push('/'); return; }

    // 2. Busca os dados
    fetch('http://localhost:3001/dashboard/metrics')
        .then(res => res.json())
        .then(data => setMetrics(data))
        .finally(() => setLoading(false));
  }, [router]);

  if (loading) return <div className="p-10 text-center">Calculando lucros...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
            
            {/* Cabeçalho */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-beleza-900">Painel de Controle</h1>
                    <p className="text-gray-500">Visão geral do seu negócio este mês.</p>
                </div>
                <button onClick={() => router.push('/')} className="text-beleza-700 underline font-medium">
                    Voltar ao Site
                </button>
            </div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                
                {/* Card 1: Faturamento */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-green-500 flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 font-bold uppercase text-xs tracking-wider">Faturamento (Mês)</p>
                        <h2 className="text-3xl font-bold text-green-700 mt-1">
                            R$ {metrics?.faturamento.toFixed(2)}
                        </h2>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full text-2xl">💰</div>
                </div>

                {/* Card 2: Agendamentos */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-blue-500 flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 font-bold uppercase text-xs tracking-wider">Clientes (Mês)</p>
                        <h2 className="text-3xl font-bold text-blue-700 mt-1">
                            {metrics?.totalAgendamentos}
                        </h2>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full text-2xl">📅</div>
                </div>

                {/* Card 3: Top Serviço */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-purple-500 flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 font-bold uppercase text-xs tracking-wider">Mais Pedido</p>
                        <h2 className="text-xl font-bold text-purple-900 mt-1 truncate max-w-[150px]" title={metrics?.topServico.nome}>
                            {metrics?.topServico.nome}
                        </h2>
                        <p className="text-xs text-purple-600 font-medium">{metrics?.topServico.qtd} agendamentos</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full text-2xl">🏆</div>
                </div>
            </div>

            {/* Atalhos Rápidos */}
            <h3 className="text-xl font-bold text-gray-700 mb-4">Acesso Rápido</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                    onClick={() => router.push('/admin-agenda')}
                    className="p-4 bg-beleza-900 text-white rounded-xl shadow hover:bg-black transition flex items-center justify-center gap-2 font-bold"
                >
                    📅 Ver Agenda Completa
                </button>
                <button 
                    onClick={() => router.push('/')}
                    className="p-4 bg-white border border-beleza-200 text-beleza-900 rounded-xl shadow hover:bg-gray-50 transition flex items-center justify-center gap-2 font-bold"
                >
                    💇‍♀️ Ver Catálogo no Site
                </button>
            </div>

        </div>
    </div>
  );
}