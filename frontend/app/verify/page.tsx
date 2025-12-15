'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Componente interno para ler os parametros da URL
function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (!token) {
        setStatus('error');
        return;
    }

    // Chama o backend para validar o token
    fetch('http://localhost:3001/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
    })
    .then(async (res) => {
        if (res.ok) {
            setStatus('success');
            // Espera 3 segundos e manda pro login
            setTimeout(() => router.push('/login'), 3000);
        } else {
            setStatus('error');
        }
    })
    .catch(() => setStatus('error'));
  }, [token, router]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-beleza-100 text-center">
        {status === 'loading' && (
            <div>
                <h1 className="text-xl font-bold text-beleza-700 mb-2">Verificando...</h1>
                <div className="w-8 h-8 border-4 border-beleza-300 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
        )}

        {status === 'success' && (
            <div>
                <div className="text-5xl mb-4">✅</div>
                <h1 className="text-2xl font-bold text-green-600 mb-2">Conta Ativada!</h1>
                <p className="text-gray-600">Seu e-mail foi confirmado com sucesso.</p>
                <p className="text-sm text-gray-400 mt-4">Redirecionando para o login...</p>
            </div>
        )}

        {status === 'error' && (
            <div>
                <div className="text-5xl mb-4">❌</div>
                <h1 className="text-2xl font-bold text-red-600 mb-2">Erro na verificação</h1>
                <p className="text-gray-600">O link é inválido ou já expirou.</p>
                <button onClick={() => router.push('/login')} className="mt-4 text-beleza-700 font-bold underline">
                    Voltar ao Login
                </button>
            </div>
        )}
    </div>
  );
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-beleza-50 flex items-center justify-center p-4">
       {/* Suspense é necessário no Next.js ao usar useSearchParams */}
       <Suspense fallback={<div>Carregando...</div>}>
          <VerifyContent />
       </Suspense>
    </div>
  );
}