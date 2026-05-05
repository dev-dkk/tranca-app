'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('account');

  useEffect(() => {
    const userStored = localStorage.getItem('user');
    if (!userStored) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userStored));
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-beleza-50 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-beleza-100 p-6 hidden md:flex flex-col">

        <h2 className="text-xl font-bold text-beleza-900 mb-8">
          Configurações
        </h2>

        <nav className="space-y-2">

          <button
            onClick={() => setActiveTab('account')}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'account'
                ? 'bg-beleza-100 text-beleza-900'
                : 'text-gray-600 hover:bg-beleza-50'
            }`}
          >
            <UserIcon />
            Conta
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'security'
                ? 'bg-beleza-100 text-beleza-900'
                : 'text-gray-600 hover:bg-beleza-50'
            }`}
          >
            <LockIcon />
            Segurança
          </button>

          <button
            onClick={() => router.push('/my-appointments')}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-beleza-50"
          >
            <CalendarIcon />
            Agendamentos
          </button>

        </nav>

        <div className="mt-auto pt-6 border-t border-beleza-100">
          <button
            onClick={() => {
              localStorage.clear();
              router.push('/');
            }}
            className="flex items-center gap-3 text-red-500 text-sm font-medium hover:opacity-80"
          >
            <LogoutIcon />
            Sair da conta
          </button>
        </div>

      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-6 md:p-10">

        <div className="max-w-3xl">

          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-beleza-900">
              {activeTab === 'account' && 'Conta'}
              {activeTab === 'security' && 'Segurança'}
            </h1>

            <p className="text-sm text-gray-500">
              {activeTab === 'account' && 'Gerencie suas informações pessoais'}
              {activeTab === 'security' && 'Controle de acesso e autenticação'}
            </p>
          </div>

          {/* TAB: CONTA */}
          {activeTab === 'account' && (
            <div className="space-y-6">

              <Card>
                <Item label="Nome" value={user.name} />
                <Item label="Email" value={user.email} action="Editar" />
                <Item label="Telefone" value="Não informado" action="Adicionar" />
              </Card>

            </div>
          )}

          {/* TAB: SEGURANÇA */}
          {activeTab === 'security' && (
            <div className="space-y-6">

              <Card>
                <Item label="Senha" value="••••••••" action="Alterar" />
              </Card>

            </div>
          )}

        </div>

      </main>
    </div>
  );
}

/* ================= COMPONENTES ================= */

function Card({ children }: any) {
  return (
    <div className="bg-white border border-beleza-100 rounded-2xl shadow-sm divide-y">
      {children}
    </div>
  );
}

function Item({ label, value, action }: any) {
  return (
    <div className="flex justify-between items-center p-5">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-beleza-900">{value}</p>
      </div>

      {action && (
        <button className="text-sm font-semibold text-beleza-500 hover:underline">
          {action}
        </button>
      )}
    </div>
  );
}

/* ================= ÍCONES SVG ================= */

function UserIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 12c2.7 0 5 2.3 5 5H7c0-2.7 2.3-5 5-5z" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M8 8V6a4 4 0 118 0v2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <path d="M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}