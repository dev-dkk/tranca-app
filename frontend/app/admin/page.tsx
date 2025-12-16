'use client';


import { useState, useEffect } from 'react';
// Importando componentes do gráfico
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Importando verificação de login como admin
import { useRouter } from 'next/navigation';

// Tipagem dos dados
interface Service {
  id: string;
  name: string;
  price: number;
  duration_minutes: number;
  description?: string;
  image_url?: string; // Campo novo da imagem
}

export default function AdminPage() {
  // Estados para armazenar dados e formulários
  const [services, setServices] = useState<Service[]>([]);
  const [uploading, setUploading] = useState(false); // Estado de carregamento do upload
  const [imageFile, setImageFile] = useState<File | null>(null); // Arquivo selecionado
  const router = useRouter(); // <--- Hook de navegação
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration_minutes: '',
    description: ''
  });

  // Carregar dados ao abrir a páginaconst [isEditing, setIsEditing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState(""); // Guarda a URL da imagem atual caso não troque

  useEffect(() => {
    fetchServices();
  }, []);
// NOVA VERIFICAÇÃO DE SEGURANÇA
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
        router.push('/login'); // Se não tiver token, manda pro login
    } else {
        // Se tiver token, verifica se é ADMIN
        const user = JSON.parse(userStr);
        if (user.role !== 'ADMIN') {
            alert("Acesso negado. Apenas administradores.");
            router.push('/');
        }
    }
  }, []);
  // Função para buscar serviços do Backend
  async function fetchServices() {
    try {
        const res = await fetch('http://localhost:3001/services');
        const data = await res.json();
        
        // Garante que preço seja número para o gráfico não quebrar
        const formatados = data.map((d: any) => ({
            ...d, 
            price: Number(d.price) 
        }));
        setServices(formatados);
    } catch (error) {
        console.error("Erro ao buscar serviços:", error);
    }
  }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setUploading(true);

        // Começa com a imagem atual (se estiver editando) ou vazia
        let finalImageUrl = currentImageUrl; 

        try {
            // 1. Se o usuário selecionou uma NOVA foto, faz upload
            if (imageFile) {
                const uploadFormData = new FormData();
                uploadFormData.append('image', imageFile);

                const uploadRes = await fetch('http://localhost:3001/upload', {
                    method: 'POST',
                    body: uploadFormData
                });

                if (!uploadRes.ok) throw new Error('Falha no upload da imagem');

                const uploadData = await uploadRes.json();
                finalImageUrl = uploadData.url; // Substitui a URL pela nova
            }

            // 2. Define se é POST (Criar) ou PUT (Editar)
            const url = isEditing 
                ? `http://localhost:3001/services/${editingId}`
                : 'http://localhost:3001/services';
            
            const method = isEditing ? 'PUT' : 'POST';

            // 3. Envia para o banco
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    image_url: finalImageUrl // Manda a URL (nova ou antiga)
                }),
            });

            if (!response.ok) throw new Error('Erro ao salvar no banco');
            
            // 4. Limpeza e Sucesso
            handleCancelEdit(); // Usa a função de resetar tudo
            
            // Reset manual do input file
            const fileInput = document.getElementById('fileInput') as HTMLInputElement;
            if(fileInput) fileInput.value = "";

            fetchServices();
            alert(isEditing ? 'Serviço atualizado!' : 'Serviço cadastrado!');

        } catch (error) {
            console.error(error);
            alert('Ocorreu um erro ao salvar.');
        } finally {
            setUploading(false);
        }
    }
  // Função para deletar
  async function handleDelete(id: string) {
    if(!confirm("Tem certeza que deseja excluir este serviço?")) return;
    try {
        await fetch(`http://localhost:3001/services/${id}`, { method: 'DELETE' });
        fetchServices();
    } catch (error) {
        alert("Erro ao excluir");
    }
  }
  // Preenche o formulário para editar
  function handleEdit(service: Service) {
    setIsEditing(true);
    setEditingId(service.id);
    setCurrentImageUrl(service.image_url || ""); // Salva a imagem atual
    
    setFormData({
        name: service.name,
        price: String(service.price), // Converte numero para string pro input
        duration_minutes: String(service.duration_minutes),
        description: service.description || ''
    });

    setImageFile(null); // Reseta o arquivo, pois o usuário pode não querer trocar a foto
    
    // Rola para o topo (formulário)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Cancela a edição
  function handleCancelEdit() {
    setIsEditing(false);
    setEditingId(null);
    setCurrentImageUrl("");
    setFormData({ name: '', price: '', duration_minutes: '', description: '' });
    setImageFile(null);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* === COLUNA DA ESQUERDA: Dashboard e Lista === */}
        <div className="space-y-8">
            
            {/* Cabeçalho */}
            <div>
                <h1 className="text-3xl font-bold text-amber-700 mb-2">Painel Admin</h1>
                <p className="text-gray-500">Gerencie seu catálogo e visualize métricas.</p>
            </div>
            
            {/* Gráfico */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Relatório de Preços (R$)</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={services}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" tick={{fontSize: 12}} interval={0} />
                            <YAxis />
                            <Tooltip 
                                cursor={{fill: '#fef3c7'}}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Bar dataKey="price" fill="#b45309" radius={[4, 4, 0, 0]} name="Preço" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Lista de Serviços Cadastrados */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Catálogo Atual</h2>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
                        {services.length} serviços
                    </span>
                </div>
                
                <ul className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                    {services.map((service) => (
                    <li key={service.id} className="flex gap-4 items-center border-b border-gray-100 pb-3 last:border-0">
                        
                        {/* Miniatura da Imagem */}
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                            {service.image_url ? (
                                <img src={service.image_url} alt={service.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Sem foto</div>
                            )}
                        </div>

                        {/* Dados */}
                        <div className="flex-1">
                            <strong className="text-sm text-gray-800 block">{service.name}</strong>
                            <div className="text-xs text-gray-500 mt-1">
                                <span className="font-medium text-amber-700 bg-amber-50 px-1 rounded">R$ {service.price.toFixed(2)}</span>
                                <span className="mx-2">•</span>
                                <span>⏱️ {service.duration_minutes} min</span>
                            </div>
                        </div>

                        {/* Botão Excluir */}
                        {/* Botão EDITAR (Novo) */}
                            <button 
                                onClick={() => handleEdit(service)}
                                className="text-blue-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded transition"
                                title="Editar serviço"
                            >
                                ✏️
                            </button>
                        <button 
                            onClick={() => handleDelete(service.id)}
                            className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded transition"
                            title="Excluir serviço"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                        </button>
                    </li>
                    ))}
                    {services.length === 0 && <p className="text-gray-400 text-center py-4">Nenhum serviço cadastrado ainda.</p>}
                </ul>
            </div>
        </div>

        {/* === COLUNA DA DIREITA: Formulário === */}
        <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-600 sticky top-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                {isEditing ? `Editando: ${formData.name}` : 'Novo Serviço'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Input de Imagem (NOVO) */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Foto da Trança</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition text-center cursor-pointer relative">
                        <input 
                            id="fileInput"
                            type="file" 
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="text-gray-500">
                            {imageFile ? (
                                <span className="text-green-600 font-medium flex items-center justify-center gap-2">
                                    ✅ {imageFile.name}
                                </span>
                            ) : (
                                <span>Clique ou arraste uma foto aqui</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Nome */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Nome do Modelo</label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Ex: Box Braids Longa"
                        required
                    />
                </div>
                
                {/* Preço e Duração */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Preço (R$)</label>
                        <input 
                            type="number" 
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition"
                            value={formData.price}
                            onChange={(e) => setFormData({...formData, price: e.target.value})}
                            placeholder="0.00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Duração (min)</label>
                        <input 
                            type="number" 
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition"
                            value={formData.duration_minutes}
                            onChange={(e) => setFormData({...formData, duration_minutes: e.target.value})}
                            placeholder="Minutos"
                            required
                        />
                    </div>
                </div>

                {/* Descrição */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Descrição</label>
                    <textarea 
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition h-24 resize-none"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Detalhes sobre material, cuidados, etc."
                    />
                </div>

                <div className="flex gap-2">
                    <button 
                        type="submit" 
                        disabled={uploading}
                        className={`flex-1 p-4 rounded-lg font-bold text-lg text-white transition shadow-lg 
                            ${uploading ? 'bg-gray-400 cursor-not-allowed' : 
                              isEditing ? 'bg-blue-600 hover:bg-blue-700' : 'bg-amber-700 hover:bg-amber-800'}
                        `}
                    >
                        {uploading ? 'Processando...' : isEditing ? 'Salvar Alterações' : '+ Adicionar ao Catálogo'}
                    </button>

                    {/* Botão Cancelar (Só aparece editando) */}
                    {isEditing && (
                        <button 
                            type="button" 
                            onClick={handleCancelEdit}
                            className="px-6 py-4 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition"
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
            </div>
        </div>

      </div>
    </div>
  );
}