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

    fetch(`https://tranca-app.onrender.com/appointments/my/${user.id}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setAppointments(data);
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function handleCancel(appointmentId: string) {
    if (!confirm("Tem certeza que deseja cancelar este agendamento?")) return;

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    try {
      const res = await fetch(`https://tranca-app.onrender.com/appointments/${appointmentId}/cancel`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, role: user.role })
      });

      if (res.ok) {
        setAppointments((prev) =>
          prev.map(app =>
            app.id === appointmentId ? { ...app, status: 'CANCELED' } : app
          )
        );
      } else {
        const data = await res.json();
        alert(data.error || "Erro ao cancelar.");
      }
    } catch {
      alert("Erro de conexão.");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-beleza-500">
        Carregando agendamentos...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beleza-50">

      {/* HEADER */}
      <div className="bg-white border-b border-beleza-100">
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-beleza-900">
              Meus Agendamentos
            </h1>
            <p className="text-sm text-beleza-500">
              Gerencie seus horários agendados
            </p>
          </div>

          <button
            onClick={() => router.push('/')}
            className="text-sm text-beleza-600 hover:text-beleza-900 transition"
          >
            Voltar
          </button>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-5xl mx-auto px-6 py-8">

        {appointments.length === 0 ? (
          <div className="bg-white border border-beleza-100 rounded-xl p-10 text-center shadow-sm">
            <p className="text-beleza-500 mb-4">
              Nenhum agendamento encontrado
            </p>

            <button
              onClick={() => router.push('/')}
              className="bg-beleza-500 hover:bg-beleza-900 text-white px-6 py-2 rounded-lg transition"
            >
              Agendar serviço
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((app) => {

              const statusStyle =
                app.status === 'CONFIRMED'
                  ? 'bg-green-100 text-green-700'
                  : app.status === 'CANCELED'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700';

              return (
                <div
                  key={app.id}
                  className="bg-white border border-beleza-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* ESQUERDA */}
                    <div>
                      <h2 className="text-lg font-semibold text-beleza-900">
                        {app.services?.name}
                      </h2>

                      <p className="text-sm text-beleza-500 mt-1">
                        {format(
                          new Date(app.start_time),
                          "dd 'de' MMMM 'às' HH:mm",
                          { locale: ptBR }
                        )}
                      </p>
                    </div>

                    {/* DIREITA */}
                    <div className="flex flex-col items-start md:items-end gap-2">

                      {/* STATUS */}
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle}`}>
                        {app.status === 'CONFIRMED'
                          ? 'Confirmado'
                          : app.status === 'CANCELED'
                            ? 'Cancelado'
                            : 'Pendente'}
                      </span>

                      {/* PREÇO */}
                      <span className="text-lg font-bold text-beleza-600">
                        R$ {Number(app.services?.price).toFixed(2)}
                      </span>

                      {/* AÇÃO */}
                      {app.status !== 'CANCELED' && (
                        <button
                          onClick={() => handleCancel(app.id)}
                          className="text-xs text-red-500 hover:text-red-700 transition font-medium"
                        >
                          Cancelar
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}