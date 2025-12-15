'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Calendar from 'react-calendar';
import { format, addHours, isSameDay, parseISO, setHours, setMinutes } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import '../calendar.css'; // Importa nosso CSS bonito

function BookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId');

  const [service, setService] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [busySlots, setBusySlots] = useState<Date[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Horários de funcionamento (Ex: 9h às 18h)
  const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  useEffect(() => {
    // 1. Verifica Login
    const userStored = localStorage.getItem('user');
    if (!userStored) {
        alert("Você precisa estar logado para agendar!");
        router.push('/login');
        return;
    }
    setUser(JSON.parse(userStored));

    // 2. Busca Serviço
    if (serviceId) {
        fetch('http://localhost:3001/services').then(res => res.json()).then(data => {
            const found = data.find((s: any) => s.id === serviceId);
            setService(found);
        });
    }
  }, [serviceId, router]);

// 3. Busca horários ocupados (CÓDIGO SEGURO)
  useEffect(() => {
    // Só busca se tiver uma data selecionada
    if (!selectedDate) return;

    fetch(`http://localhost:3001/appointments/availability?date=${selectedDate.toISOString()}`)
        .then(res => res.json())
        .then((data) => {
            // VERIFICAÇÃO DE SEGURANÇA:
            // Só tenta rodar o .map se o que chegou for realmente uma Lista (Array)
            if (Array.isArray(data)) {
                const busy = data.map((app: any) => new Date(app.date));
                setBusySlots(busy);
            } else {
                // Se não for array, é erro. Mostramos no console e limpamos os slots ocupados.
                console.error("Erro ao buscar horários (Backend retornou erro):", data);
                setBusySlots([]); 
            }
        })
        .catch(err => {
            console.error("Erro de conexão:", err);
            setBusySlots([]);
        });
  }, [selectedDate]);

  const handleBooking = async () => {
    if (!selectedTime || !service || !user) return;
    setLoading(true);

    // Monta a data final combinando o Dia escolhido + Hora escolhida
    const [hora, minuto] = selectedTime.split(':').map(Number);
    const finalDate = setMinutes(setHours(selectedDate, hora), minuto);

    try {
        const res = await fetch('http://localhost:3001/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: user.id,
                serviceId: service.id,
                date: finalDate.toISOString()
            })
        });

        if (!res.ok) throw new Error("Erro ao agendar");

        alert("✅ Agendamento realizado com sucesso!");
        router.push('/profile'); // Manda pro perfil pra ver o agendamento

    } catch (error) {
        alert("Erro: Esse horário pode ter sido pego por outra pessoa agora pouco.");
    } finally {
        setLoading(false);
    }
  };

  // Função para verificar se um horário da lista está ocupado
  const isSlotBusy = (time: string) => {
    const [h, m] = time.split(':').map(Number);
    // Cria uma data temporária com esse horário
    const slotDate = setMinutes(setHours(selectedDate, h), m);
    
    // Verifica se existe algum agendamento no banco com a MESMA hora
    return busySlots.some(busyDate => 
        busyDate.getHours() === slotDate.getHours() && 
        busyDate.getMinutes() === slotDate.getMinutes()
    );
  };

  if (!service) return <div className="p-10 text-center">Carregando serviço...</div>;

  return (
    <div className="min-h-screen bg-beleza-50 py-8 px-4 flex justify-center items-start">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-beleza-100">
            
            {/* Esquerda: Resumo do Serviço */}
            <div className="bg-beleza-900 text-white p-8 md:w-1/3 flex flex-col">
                <h2 className="text-xl font-bold mb-4 opacity-80">Você está agendando:</h2>
                <h1 className="text-3xl font-bold mb-2 text-beleza-200">{service.name}</h1>
                <p className="text-sm opacity-70 mb-6">{service.description}</p>
                
                <div className="mt-auto space-y-3">
                    <div className="flex justify-between border-b border-white/20 pb-2">
                        <span>Valor:</span>
                        <span className="font-bold text-xl">R$ {service.price}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                        <span>Duração:</span>
                        <span className="font-bold">{service.duration_minutes} min</span>
                    </div>
                </div>
            </div>

            {/* Direita: Calendário e Horários */}
            <div className="p-6 md:w-2/3">
                <h3 className="text-lg font-bold text-beleza-900 mb-4">1. Escolha a Data</h3>
                
                <Calendar 
                    onChange={(val) => { setSelectedDate(val as Date); setSelectedTime(null); }} 
                    value={selectedDate}
                    locale="pt-BR"
                    minDate={new Date()} // Não deixa agendar no passado
                    className="mb-8"
                />

                <h3 className="text-lg font-bold text-beleza-900 mb-4">2. Escolha o Horário</h3>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-8">
                    {timeSlots.map(time => {
                        const busy = isSlotBusy(time);
                        return (
                            <button
                                key={time}
                                disabled={busy}
                                onClick={() => setSelectedTime(time)}
                                className={`
                                    py-2 px-4 rounded-lg text-sm font-bold border transition
                                    ${busy 
                                        ? 'bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed decoration-slice' 
                                        : selectedTime === time
                                            ? 'bg-beleza-500 text-white border-beleza-500 shadow-lg scale-105'
                                            : 'bg-white text-beleza-700 border-beleza-200 hover:border-beleza-500 hover:bg-beleza-50'
                                    }
                                `}
                            >
                                {time}
                            </button>
                        )
                    })}
                </div>

                <div className="flex justify-end">
                    <button 
                        onClick={handleBooking}
                        disabled={!selectedTime || loading}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                    >
                        {loading ? 'Agendando...' : '✅ Confirmar Agendamento'}
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default function BookPage() {
    return <Suspense fallback={<div>Carregando...</div>}><BookingContent /></Suspense>;
}