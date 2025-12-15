'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    cpf: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // --- FUNÇÕES DE MÁSCARA (Visual) ---
  
  const maskCPF = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // Limita o tamanho
  };

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  // --- FUNÇÃO DE VALIDAÇÃO MATEMÁTICA DE CPF ---
  function validarCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove pontos e traços
    if (cpf === '' || cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
    return true;
  }

  // --- HANDLER DO FORMULÁRIO ---
  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    // 1. Validações Locais
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    if (!validarCPF(formData.cpf)) {
      setError('CPF inválido. Verifique os números.');
      return;
    }
    
    // Validação de Email (Regex simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (formData.phone.length < 14) { // (XX) XXXXX-XXXX tem 15 chars
       setError('Telefone incompleto.');
       return;
    }

    setLoading(true);

    try {
      // 2. Envia para o Backend (removendo a confirmPassword)
      const res = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            cpf: formData.cpf.replace(/\D/g, ''), // Envia apenas números pro banco (opcional, mas recomendado)
            phone: formData.phone,
            password: formData.password,
            isAdmin: false 
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Erro ao cadastrar');

      alert("Conta criada com sucesso! Faça login para continuar.");
      router.push('/login');

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-beleza-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg border border-beleza-100 my-8">
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-beleza-900">Crie sua Conta</h1>
          <p className="text-beleza-400 text-sm">Preencha seus dados completos para agendar.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center border border-red-100 font-medium">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          
          {/* Nome */}
          <div>
            <label className="block text-sm font-bold text-beleza-700 mb-1">Nome Completo</label>
            <input 
              type="text" 
              required
              className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition bg-beleza-50/30"
              placeholder="Ex: Ana Silva"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-beleza-700 mb-1">E-mail</label>
            <input 
              type="email" 
              required
              className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition bg-beleza-50/30"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CPF com Máscara */}
              <div>
                <label className="block text-sm font-bold text-beleza-700 mb-1">CPF</label>
                <input 
                  type="text" 
                  required
                  placeholder="000.000.000-00"
                  maxLength={14}
                  className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition bg-beleza-50/30"
                  value={formData.cpf}
                  onChange={(e) => setFormData({...formData, cpf: maskCPF(e.target.value)})}
                />
              </div>

              {/* Telefone com Máscara */}
              <div>
                <label className="block text-sm font-bold text-beleza-700 mb-1">Celular / WhatsApp</label>
                <input 
                  type="text" 
                  required
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                  className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition bg-beleza-50/30"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: maskPhone(e.target.value)})}
                />
              </div>
          </div>

          {/* Senhas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-beleza-700 mb-1">Senha</label>
                <input 
                  type="password" 
                  required
                  minLength={6}
                  className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition bg-beleza-50/30"
                  placeholder="Mínimo 6 dígitos"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-beleza-700 mb-1">Confirmar Senha</label>
                <input 
                  type="password" 
                  required
                  className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition bg-beleza-50/30"
                  placeholder="Repita a senha"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
              </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-beleza-900 text-white font-bold py-3.5 rounded-lg hover:bg-beleza-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 mt-4"
          >
            {loading ? 'Validando dados...' : 'Criar Conta'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-beleza-400">
          Já tem uma conta? <Link href="/login" className="text-beleza-700 font-bold hover:underline">Faça Login</Link>
        </div>
      </div>
    </div>
  );
}