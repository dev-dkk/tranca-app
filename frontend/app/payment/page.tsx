'use client';

import { useEffect, useState, Suspense } from 'react'; // Adicionado Suspense
import { useSearchParams } from 'next/navigation';
import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';
import React from 'react';

// 1. Criamos um componente interno para a lógica que depende da URL
function PaymentContent() {
  const searchParams = useSearchParams();
  const appointmentId = searchParams.get('appointmentId');

  const [paymentType, setPaymentType] = useState<'pix' | 'card' | null>(null);
  const [pix, setPix] = useState<any>(null);
  const [appointment, setAppointment] = useState<any>(null);
  const [mpReady, setMpReady] = useState(false);
  const [loadingPix, setLoadingPix] = useState(false);

  // 🔑 INIT MP
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_MP_PUBLIC_KEY;
    if (!key) return;
    initMercadoPago(key);
    setMpReady(true);
  }, []);

  // 🔎 BUSCAR DADOS DO AGENDAMENTO
  useEffect(() => {
    if (!appointmentId) return;
    fetch(`https://tranca-app.onrender.com/appointments/${appointmentId}`)
      .then(res => res.json())
      .then(setAppointment)
      .catch(() => console.error("Erro ao buscar agendamento"));
  }, [appointmentId]);

  // 💳 COMPONENTE MEMO
  const CardPaymentWrapper = React.useMemo(() => React.memo(function CardPaymentWrapper({ amount }: { amount: number }) {
    return (
      <CardPayment
        initialization={{
          amount,
          payer: { email: "test@test.com" },
        }}
        onSubmit={async (formData) => {
          try {
            const res = await fetch('https://tranca-app.onrender.com/payments/card', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...formData, appointmentId })
            });
            const data = await res.json();
            alert("Pagamento aprovado!");
          } catch (err) {
            console.error("❌ ERRO NO PAGAMENTO:", err);
          }
        }}
      />
    );
  }), [appointmentId]); // Adicionado dependência de appointmentId

  const handlePix = async () => {
    if (!appointmentId) return;
    setLoadingPix(true);
    try {
      const res = await fetch('https://tranca-app.onrender.com/payments/pix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ appointmentId })
      });
      const data = await res.json();
      setPix(data);
    } catch {
      alert("Erro ao gerar PIX");
    } finally {
      setLoadingPix(false);
    }
  };

  if (!appointment) {
    return <div className="p-10 text-center">Carregando agendamento...</div>;
  }

  return (
    <div className="min-h-screen bg-beleza-50 py-8 px-4 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 border border-beleza-100">
        <h1 className="text-2xl font-bold text-beleza-900 mb-4">💳 Finalizar Pagamento</h1>
        <div className="mb-6">
          <p><strong>Serviço:</strong> {appointment.service?.name}</p>
          <p><strong>Valor:</strong> R$ {appointment.service?.price}</p>
        </div>

        <div className="flex gap-4 mb-6">
          <button onClick={() => setPaymentType('pix')} className={`px-4 py-2 rounded-lg border font-bold ${paymentType === 'pix' ? 'bg-beleza-500 text-white border-beleza-500' : 'border-beleza-200 text-beleza-700'}`}>PIX</button>
          <button onClick={() => setPaymentType('card')} className={`px-4 py-2 rounded-lg border font-bold ${paymentType === 'card' ? 'bg-beleza-500 text-white border-beleza-500' : 'border-beleza-200 text-beleza-700'}`}>Cartão</button>
        </div>

        {paymentType === 'pix' && (
          <div className="mt-4">
            {!pix ? (
              <button onClick={handlePix} disabled={loadingPix} className="bg-green-600 text-white px-4 py-2 rounded-lg">{loadingPix ? 'Gerando...' : 'Gerar PIX'}</button>
            ) : (
              <div className="mt-6 p-4 border rounded-xl bg-white shadow text-center">
                <h2 className="text-lg font-bold mb-2">💳 PIX</h2>
                <img src={`data:image/png;base64,${pix.qr_code_base64}`} className="mx-auto mb-4" alt="QR Code" />
                <textarea className="w-full p-2 border rounded text-xs" value={pix.qr_code} readOnly />
              </div>
            )}
          </div>
        )}

        {paymentType === 'card' && (
          <div className="mt-6 p-4 border rounded-xl bg-white shadow">
            {mpReady && <CardPaymentWrapper amount={Number(appointment.service?.price)} />}
          </div>
        )}
      </div>
    </div>
  );
}

// 2. O export default envolve o componente acima em Suspense
export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Carregando componentes de segurança...</div>}>
      <PaymentContent />
    </Suspense>
  );
}