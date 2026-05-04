'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Calendar from 'react-calendar';
import { setHours, setMinutes } from 'date-fns';
import '../calendar.css';

import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';

function BookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId');

  const [service, setService] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [pix, setPix] = useState<any>(null);
  const [method, setMethod] = useState<'pix' | 'card' | null>(null);

  const timeSlots = ["09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00","18:00"];

  // ✅ INIT MP (CORRETO)
  useEffect(() => {
    initMercadoPago('SUA_PUBLIC_KEY_AQUI');
  }, []);

  // ✅ USER + SERVICE
  useEffect(() => {
    const userStored = localStorage.getItem('user');
    if (!userStored) {
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

  // ✅ CRIAR DATA FINAL
  const getFinalDate = () => {
    const [h, m] = selectedTime!.split(':').map(Number);
    return setMinutes(setHours(selectedDate, h), m);
  };

  // =========================
  // 💳 PIX
  // =========================
  const handlePix = async () => {
    setLoading(true);

    try {
      const res = await fetch('https://tranca-app.onrender.com/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          serviceId: service.id,
          date: getFinalDate().toISOString()
        })
      });

      const data = await res.json();
      if (data.pix) setPix(data.pix);

    } catch {
      alert("Erro ao gerar PIX");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // 💳 CARTÃO
  // =========================
  const handleCard = async (formData: any) => {
    try {
      const res = await fetch('https://tranca-app.onrender.com/pay-card', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: formData.token,
          paymentMethodId: formData.payment_method_id,
          issuerId: formData.issuer_id,
          installments: formData.installments,
          userId: user.id,
          serviceId: service.id,
          date: getFinalDate().toISOString()
        })
      });

      const data = await res.json();

      if (data.payment.status === 'approved') {
        alert("✅ Pagamento aprovado!");
        router.push('/profile');
      } else {
        alert("⏳ Pagamento em processamento");
      }

    } catch {
      alert("Erro no pagamento");
    }
  };

  if (!service) return <div className="p-10">Carregando...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-xl font-bold mb-4">{service.name}</h1>

      {/* DATA */}
      <Calendar value={selectedDate} onChange={(d) => setSelectedDate(d as Date)} />

      {/* HORÁRIOS */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {timeSlots.map(t => (
          <button key={t} onClick={() => setSelectedTime(t)}>
            {t}
          </button>
        ))}
      </div>

      {/* MÉTODO */}
      {selectedTime && (
        <div className="mt-6 space-x-2">
          <button onClick={() => setMethod('pix')}>PIX</button>
          <button onClick={() => setMethod('card')}>Cartão</button>
        </div>
      )}

      {/* PIX UI */}
      {method === 'pix' && (
        <div className="mt-6">
          <button onClick={handlePix}>
            {loading ? 'Gerando PIX...' : 'Pagar com PIX'}
          </button>

          {pix && (
            <div>
              <img src={`data:image/png;base64,${pix.qr_code_base64}`} />
              <textarea value={pix.qr_code} readOnly />
            </div>
          )}
        </div>
      )}

      {/* CARTÃO UI */}
      {method === 'card' && (
        <div className="mt-6">
          <CardPayment
            initialization={{ amount: Number(service.price) }}
            onSubmit={handleCard}
          />
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <BookingContent />
    </Suspense>
  );
}