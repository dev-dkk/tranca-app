'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import AdminSidebar from '../components/AdminSideBar';

export default function AdminAgenda() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificação de Segurança (Só Admin entra)
    const userStored = localStorage.getItem('user');
    if (!userStored) { router.push('/login'); return; }
    
    const user = JSON.parse(userStored);
    if (user.role !== 'ADMIN') {
        alert("Acesso restrito a administradores.");
        router.push('/');
        return;
    }

    fetch('http://localhost:3001/appointments/admin/all')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) setAppointments(data);
        })
        .finally(() => setLoading(false));
  }, [router]);
return (
    <div className="min-h-screen bg-gray-50 flex">
        {/* 1. Menu Lateral */}
        <AdminSidebar />

        {/* 2. Conteúdo Principal (Com margem na esquerda) */}
        <div className="flex-1 ml-64 p-8">
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-beleza-900 p-6 flex justify-between items-center text-white">
                <h1 className="text-2xl font-bold">📅 Agenda de Clientes</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="p-4 font-bold text-gray-600">Data e Hora</th>
                            <th className="p-4 font-bold text-gray-600">Cliente</th>
                            <th className="p-4 font-bold text-gray-600">Contato</th>
                            <th className="p-4 font-bold text-gray-600">Serviço</th>
                            <th className="p-4 font-bold text-gray-600">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {loading ? (
                            <tr><td colSpan={5} className="p-4 text-center">Carregando...</td></tr>
                        ) : appointments.map((app) => (
                            <tr key={app.id} className="hover:bg-gray-50 transition">
                                <td className="p-4 text-gray-800 font-medium">
                                    {format(new Date(app.start_time), "dd/MM/yyyy HH:mm")}
                                </td>
                                <td className="p-4">
                                    <div className="font-bold text-beleza-900">{app.users?.name}</div>
                                    <div className="text-xs text-gray-400">CPF: {app.users?.cpf}</div>
                                </td>
                                <td className="p-4 text-blue-600">
                                    <a href={`https://wa.me/55${app.users?.phone?.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                                        📱 {app.users?.phone}
                                    </a>
                                </td>
                                <td className="p-4 text-gray-600">{app.services?.name}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                                        app.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {app.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {!loading && appointments.length === 0 && (
                    <div className="p-8 text-center text-gray-500">Nenhum agendamento encontrado.</div>
                )}
            </div>
        </div>
    </div>

        </div>
    </div>
);

}