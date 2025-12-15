'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    cpf: '',
    email: '',
    phone: ''
  });

  // Função de Máscara para manter o padrão (11) 99999-9999
  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  useEffect(() => {
    // 1. Pega o ID salvo no navegador
    const userStored = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (!userStored || !token) {
        router.push('/login');
        return;
    }

    const user = JSON.parse(userStored);

    // 2. Busca os dados frescos do banco
    async function fetchProfile() {
        try {
            const res = await fetch(`http://localhost:3001/users/${user.id || user.userId}`); // O backend pode devolver id ou userId
            const data = await res.json();
            
            if (res.ok) {
                setFormData({
                    id: data.id,
                    name: data.name,
                    cpf: data.cpf || '',
                    email: data.email,
                    phone: data.phone || ''
                });
            } else {
                setMsg({ type: 'error', text: 'Erro ao carregar dados.' });
            }
        } catch (error) {
            setMsg({ type: 'error', text: 'Erro de conexão.' });
        } finally {
            setLoading(false);
        }
    }

    fetchProfile();
  }, [router]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg({ type: '', text: '' });

    try {
        const res = await fetch(`http://localhost:3001/users/${formData.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                phone: formData.phone
            })
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error);

        setMsg({ type: 'success', text: 'Dados atualizados com sucesso!' });
        
        // Atualiza o localStorage para refletir o novo email se mudou
        const oldUser = JSON.parse(localStorage.getItem('user') || '{}');
        localStorage.setItem('user', JSON.stringify({ ...oldUser, email: formData.email }));

    } catch (error: any) {
        setMsg({ type: 'error', text: error.message || 'Erro ao salvar.' });
    } finally {
        setSaving(false);
    }
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center text-beleza-500">Carregando perfil...</div>;

  return (
    <div className="min-h-screen bg-beleza-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-beleza-100 overflow-hidden">
        
        {/* Cabeçalho do Perfil */}
        <div className="bg-beleza-900 p-8 text-center">
            <div className="w-24 h-24 bg-beleza-200 rounded-full mx-auto flex items-center justify-center text-4xl mb-4 border-4 border-white shadow-md">
                👤
            </div>
            <h1 className="text-2xl font-bold text-white">{formData.name}</h1>
            <p className="text-beleza-200 text-sm">Cliente Belezafro</p>
        </div>

        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-beleza-900">Meus Dados</h2>
                <button 
                    onClick={() => router.push('/')}
                    className="text-sm text-beleza-500 hover:text-beleza-900 underline"
                >
                    Voltar para Home
                </button>
            </div>

            {msg.text && (
                <div className={`p-4 rounded-lg mb-6 text-sm font-medium text-center ${msg.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {msg.text}
                </div>
            )}

            <form onSubmit={handleUpdate} className="space-y-6">
                
                {/* Campos Travados (Read-Only) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="opacity-70">
                        <label className="block text-sm font-bold text-gray-500 mb-1">Nome Completo (Fixo)</label>
                        <input 
                            type="text" 
                            disabled
                            className="w-full bg-gray-100 border border-gray-200 text-gray-500 p-3 rounded-lg cursor-not-allowed"
                            value={formData.name}
                        />
                    </div>
                    <div className="opacity-70">
                        <label className="block text-sm font-bold text-gray-500 mb-1">CPF (Fixo)</label>
                        <input 
                            type="text" 
                            disabled
                            className="w-full bg-gray-100 border border-gray-200 text-gray-500 p-3 rounded-lg cursor-not-allowed"
                            value={formData.cpf}
                        />
                    </div>
                </div>

                <div className="h-px bg-gray-100 my-4"></div>

                {/* Campos Editáveis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-beleza-900 mb-1">E-mail de Contato</label>
                        <input 
                            type="email" 
                            required
                            className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-beleza-900 mb-1">Celular / WhatsApp</label>
                        <input 
                            type="text" 
                            required
                            maxLength={15}
                            className="w-full border border-beleza-200 p-3 rounded-lg focus:ring-2 focus:ring-beleza-300 outline-none transition"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: maskPhone(e.target.value)})}
                        />
                    </div>
                </div>

                <div className="pt-4 flex justify-end">
                    <button 
                        type="submit" 
                        disabled={saving}
                        className="bg-beleza-500 hover:bg-beleza-900 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg flex items-center gap-2 disabled:opacity-50"
                    >
                        {saving ? 'Salvando...' : '💾 Salvar Alterações'}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}