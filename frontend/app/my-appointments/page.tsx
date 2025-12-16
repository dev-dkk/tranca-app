'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function MyAppointments() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStored = localStorage.getItem('user');
    if (!userStored) {
        router.push('/login');
        return;
    }
    const user = JSON.parse(userStored);

    fetch(`http://localhost:3001/appointments/my/${user.id}`)
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) setAppointments(data);
        })
        .finally(() => setLoading(false));
  }, [router]);

  if (loading) return <div className="p-8 text-center text-beleza-500">Carregando seus horários...</div>;

  return (
    <div className="min-h-screen bg-beleza-50 p-6">
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-beleza-900">💇‍♀️ Meus Agendamentos</h1>
                <button onClick={() => router.push('/')} className="text-sm underline text-beleza-600">Voltar</button>
            </div>

            {appointments.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-xl shadow">
                    <p className="text-gray-500 mb-4">Você ainda não tem agendamentos.</p>
                    <button onClick={() => router.push('/')} className="bg-beleza-500 text-white px-6 py-2 rounded-lg">Agendar Agora</button>
                </div>
            ) : (
                <div className="grid gap-4">
                    {appointments.map((app) => (
                        <div key={app.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-beleza-500 flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <h2 className="text-xl font-bold text-beleza-800">{app.services?.name}</h2>
                                <p className="text-gray-500 text-sm">
                                    {format(new Date(app.start_time), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0 text-right">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    app.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : 
                                    app.status === 'CANCELED' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {app.status === 'CONFIRMED' ? 'Confirmado' : app.status}
                                </span>
                                <p className="text-lg font-bold text-beleza-600 mt-2">R$ {Number(app.services?.price).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  );
}