'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Calendar from 'react-calendar';
import { setHours, setMinutes } from 'date-fns';
import '../calendar.css';

import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';

console.log("🔥 PAGINA DE AGENDAMENTO CARREGOU");

function BookingContent() {
  type PixData = {
    qr_code: string;
    qr_code_base64: string;
  };

  const [pix, setPix] = useState<PixData | null>(null);
  const [paymentType, setPaymentType] = useState<'pix' | 'card' | null>(null);
  const [mpReady, setMpReady] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId');

  const [service, setService] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [busySlots, setBusySlots] = useState<Date[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  // ✅ INIT MERCADO PAGO (UMA VEZ SÓ)
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_MP_PUBLIC_KEY;

    if (!key) {
      console.error("❌ PUBLIC KEY NÃO ENCONTRADA");
      return;
    }

    initMercadoPago(key);
    setMpReady(true);
  }, []);

  useEffect(() => {
    const userStored = localStorage.getItem('user');
    if (!userStored) {
      alert("Você precisa estar logado para agendar!");
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userStored));

    if (serviceId) {
      fetch('https://tranca-app.onrender.com/services')
        .then(res => res.json())
        .then(data => {
          const found = data.find((s: any) => s.id === serviceId);
          setService(found);
        });
    }
  }, [serviceId, router]);

  useEffect(() => {
    if (!selectedDate) return;

    fetch(`https://tranca-app.onrender.com/appointments/availability?date=${selectedDate.toISOString()}`)
      .then(res => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const busy = data.map((app: any) => new Date(app.date));
          setBusySlots(busy);
        } else {
          setBusySlots([]);
        }
      })
      .catch(() => setBusySlots([]));
  }, [selectedDate]);

  const handleBooking = async () => {
    if (!selectedTime || !service || !user) return;
    setLoading(true);

    const [hora, minuto] = selectedTime.split(':').map(Number);
    const finalDate = setMinutes(setHours(selectedDate, hora), minuto);

    try {
      const res = await fetch('https://tranca-app.onrender.com/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          serviceId: service.id,
          date: finalDate.toISOString()
        })
      });

      const data = await res.json();

      if (!res.ok) throw new Error();

      if (paymentType === 'pix') {
        setPix(data.pix);
      }

      if (paymentType === 'card') {
        alert("Agora preencha os dados do cartão abaixo 👇");
      }

    } catch {
      alert("Erro ao agendar");
    } finally {
      setLoading(false);
    }
  };

  const isSlotBusy = (time: string) => {
    const [h, m] = time.split(':').map(Number);
    const slotDate = setMinutes(setHours(selectedDate, h), m);

    return busySlots.some(busyDate =>
      busyDate.getHours() === slotDate.getHours() &&
      busyDate.getMinutes() === slotDate.getMinutes()
    );
  };

  if (!service) return <div className="p-10 text-center">Carregando serviço...</div>;

  return (
    <div className="min-h-screen bg-beleza-50 py-8 px-4 flex justify-center items-start">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-beleza-100">

        {/* ESQUERDA */}
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

        {/* DIREITA */}
        <div className="p-6 md:w-2/3">

          <h3 className="text-lg font-bold text-beleza-900 mb-4">1. Escolha a Data</h3>

          <Calendar
            onChange={(val) => { setSelectedDate(val as Date); setSelectedTime(null); }}
            value={selectedDate}
            locale="pt-BR"
            minDate={new Date()}
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
                      ? 'bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed'
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

          {/* PAGAMENTO */}
          <h3 className="text-lg font-bold text-beleza-900 mb-4">3. Forma de Pagamento</h3>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setPaymentType('pix')}
              className={`px-4 py-2 rounded-lg border font-bold ${
                paymentType === 'pix'
                  ? 'bg-beleza-500 text-white border-beleza-500'
                  : 'border-beleza-200 text-beleza-700'
              }`}
            >
              PIX
            </button>

            <button
              onClick={() => setPaymentType('card')}
              className={`px-4 py-2 rounded-lg border font-bold ${
                paymentType === 'card'
                  ? 'bg-beleza-500 text-white border-beleza-500'
                  : 'border-beleza-200 text-beleza-700'
              }`}
            >
              Cartão
            </button>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleBooking}
              disabled={!selectedTime || !paymentType || loading}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition disabled:opacity-50 w-full md:w-auto"
            >
              {loading ? 'Processando...' : '✅ Confirmar'}
            </button>
          </div>

          {/* PIX */}
          <div style={{ display: paymentType === 'pix' ? 'block' : 'none' }}>
            {pix && (
              <div className="mt-6 p-4 border rounded-xl bg-white shadow text-center">
                <h2 className="text-lg font-bold mb-2">💳 Pagamento via PIX</h2>

                <img
                  src={`data:image/png;base64,${pix.qr_code_base64}`}
                  className="mx-auto mb-4"
                />

                <textarea
                  className="w-full p-2 border rounded text-xs"
                  value={pix.qr_code}
                  readOnly
                />
              </div>
            )}
          </div>

          {/* CARTÃO (NUNCA DESMONTA) */}
          <div style={{ display: paymentType === 'card' ? 'block' : 'none' }}>
            <div className="mt-6 p-4 border rounded-xl bg-white shadow">
              {mpReady && (
                <CardPayment
                  initialization={{ amount: Number(service.price) }}
                  onSubmit={async (formData) => {
                    await fetch('https://tranca-app.onrender.com/payments/card', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(formData)
                    });
                  }}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <BookingContent />
    </Suspense>
  );
}