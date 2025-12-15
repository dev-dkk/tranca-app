'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Erro ao entrar');

      // SUCESSO! Salvar o token no navegador
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirecionar baseado no cargo (Role)
      if (data.user.role === 'ADMIN') {
        router.push('/admin');
      } else {
        router.push('/'); // Futuramente mandaremos para /dashboard-cliente
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-beleza-200 flex items-center justify-center p-4">
      <div className="bg-beleza-250 p-8 rounded-2xl shadow-xl w-full max-w-md border border-beleza-100">
        
        {/* Cabeçalho do Login */}
        <div className="text-center mb-8">
          <img 
             src="/logo.jpeg" 
             alt="Logo" 
             className="h-20 w-auto mx-auto mb-4 rounded-lg object-contain"
          />
          <h1 className="text-2xl font-bold text-beleza-900">Bem-vindo(a)</h1>
          <p className="text-beleza-400 text-sm">Insira suas credenciais para continuar.</p>
        </div>

        {/* Mensagem de Erro */}
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center border border-red-100">
            {error}
          </div>
        )}

        {/* Formulário */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-beleza-700 mb-1">E-mail</label>
            <input 
              type="email" 
              required
              className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition bg-beleza-50/30"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-beleza-700 mb-1">Senha</label>
            <input 
              type="password" 
              required
              className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition bg-beleza-50/30"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-beleza-900 text-white font-bold py-3 rounded-lg hover:bg-beleza-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Entrando...' : 'Acessar Sistema'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-beleza-400">
          Ainda não tem conta? <a href="/register" className="text-beleza-700 font-bold hover:underline">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}