'use client';

import AdminSidebar from '../components/AdminSideBar';
import HomeContent from '../components/HomeContent'; // Reutilizando o mesmo conteúdo!

export default function AdminPreview() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
        {/* 1. Sidebar Fixa na Esquerda */}
        <AdminSidebar />

        {/* 2. Site na Direita (com margem para não ficar embaixo da sidebar) */}
        <div className="flex-1 ml-64 relative">
            
            {/* Aviso Flutuante para lembrar que é modo Admin */}
            <div className="bg-yellow-100 border-b border-yellow-300 text-yellow-800 px-6 py-2 text-sm flex justify-between items-center">
                <span>👁️ <strong>Modo Visualização:</strong> É assim que seus clientes veem o catálogo.</span>
            </div>

            {/* O Site (Sem o Header do Cliente) */}
            <HomeContent />
            
        </div>
    </div>
  );
}