(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/app/components/AdminSideBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AdminSidebar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])(); // Para saber em qual página estamos e marcar no menu
    const handleLogout = ()=>{
        localStorage.clear();
        router.push('/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 h-screen bg-beleza-900 text-white flex flex-col fixed left-0 top-0 shadow-xl z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-beleza-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold tracking-wider text-center",
                    children: [
                        "AFROBRAIDS ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs block text-beleza-300 font-normal",
                            children: "Painel Admin"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                            lineNumber: 18,
                            columnNumber: 81
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 p-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/dashboard'),
                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === '/dashboard' ? 'bg-beleza-700 text-white font-bold' : 'hover:bg-beleza-800 text-beleza-100'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "📊"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            " Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/admin-services'),
                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === '/admin-services' ? 'bg-beleza-700 text-white font-bold' : 'hover:bg-beleza-800 text-beleza-100'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🛠️"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            " Serviços"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/'),
                        className: "w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-beleza-800 text-beleza-100 mt-8 border-t border-beleza-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🏠"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            " Ver Site"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-beleza-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogout,
                    className: "w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-bold transition",
                    children: "🚪 Sair"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/components/AdminSideBar.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(AdminSidebar, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AdminSidebar;
var _c;
__turbopack_context__.k.register(_c, "AdminSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Importando componentes do gráfico
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
// Importando verificação de login como admin
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$AdminSideBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/components/AdminSideBar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminPage() {
    _s();
    // Estados para armazenar dados e formulários
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Estado de carregamento do upload
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Arquivo selecionado
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])(); // <--- Hook de navegação
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        price: '',
        duration_minutes: '',
        description: ''
    });
    // Carregar dados ao abrir a páginaconst [isEditing, setIsEditing] = useState(false);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentImageUrl, setCurrentImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Guarda a URL da imagem atual caso não troque
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            fetchServices();
        }
    }["AdminPage.useEffect"], []);
    // NOVA VERIFICAÇÃO DE SEGURANÇA
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
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
        }
    }["AdminPage.useEffect"], []);
    // Função para buscar serviços do Backend
    async function fetchServices() {
        try {
            const res = await fetch('http://localhost:3001/services');
            const data = await res.json();
            // Garante que preço seja número para o gráfico não quebrar
            const formatados = data.map((d)=>({
                    ...d,
                    price: Number(d.price)
                }));
            setServices(formatados);
        } catch (error) {
            console.error("Erro ao buscar serviços:", error);
        }
    }
    async function handleSubmit(e) {
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
            const url = isEditing ? `http://localhost:3001/services/${editingId}` : 'http://localhost:3001/services';
            const method = isEditing ? 'PUT' : 'POST';
            // 3. Envia para o banco
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    image_url: finalImageUrl // Manda a URL (nova ou antiga)
                })
            });
            if (!response.ok) throw new Error('Erro ao salvar no banco');
            // 4. Limpeza e Sucesso
            handleCancelEdit(); // Usa a função de resetar tudo
            // Reset manual do input file
            const fileInput = document.getElementById('fileInput');
            if (fileInput) fileInput.value = "";
            fetchServices();
            alert(isEditing ? 'Serviço atualizado!' : 'Serviço cadastrado!');
        } catch (error) {
            console.error(error);
            alert('Ocorreu um erro ao salvar.');
        } finally{
            setUploading(false);
        }
    }
    // Função para deletar
    async function handleDelete(id) {
        if (!confirm("Tem certeza que deseja excluir este serviço?")) return;
        try {
            await fetch(`http://localhost:3001/services/${id}`, {
                method: 'DELETE'
            });
            fetchServices();
        } catch (error) {
            alert("Erro ao excluir");
        }
    }
    // Preenche o formulário para editar
    function handleEdit(service) {
        setIsEditing(true);
        setEditingId(service.id);
        setCurrentImageUrl(service.image_url || ""); // Salva a imagem atual
        setFormData({
            name: service.name,
            price: String(service.price),
            duration_minutes: String(service.duration_minutes),
            description: service.description || ''
        });
        setImageFile(null); // Reseta o arquivo, pois o usuário pode não querer trocar a foto
        // Rola para o topo (formulário)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    // Cancela a edição
    function handleCancelEdit() {
        setIsEditing(false);
        setEditingId(null);
        setCurrentImageUrl("");
        setFormData({
            name: '',
            price: '',
            duration_minutes: '',
            description: ''
        });
        setImageFile(null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex font-sans text-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$AdminSideBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/app/admin/page.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 ml-64 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-bold text-amber-700 mb-2",
                                            children: "Painel Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500",
                                            children: "Gerencie seu catálogo e visualize métricas."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4 text-gray-700",
                                            children: "Relatório de Preços (R$)"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-64 w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: "100%",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                    data: services,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3",
                                                            vertical: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "name",
                                                            tick: {
                                                                fontSize: 12
                                                            },
                                                            interval: 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            cursor: {
                                                                fill: '#fef3c7'
                                                            },
                                                            contentStyle: {
                                                                borderRadius: '8px',
                                                                border: 'none',
                                                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "price",
                                                            fill: "#b45309",
                                                            radius: [
                                                                4,
                                                                4,
                                                                0,
                                                                0
                                                            ],
                                                            name: "Preço"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-semibold",
                                                    children: "Catálogo Atual"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm bg-gray-100 px-2 py-1 rounded text-gray-600",
                                                    children: [
                                                        services.length,
                                                        " serviços"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 max-h-[500px] overflow-y-auto pr-2",
                                            children: [
                                                services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-4 items-center border-b border-gray-100 pb-3 last:border-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200",
                                                                children: service.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: service.image_url,
                                                                    alt: service.name,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full h-full flex items-center justify-center text-gray-400 text-xs",
                                                                    children: "Sem foto"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-sm text-gray-800 block",
                                                                        children: service.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                                        lineNumber: 236,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-gray-500 mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium text-amber-700 bg-amber-50 px-1 rounded",
                                                                                children: [
                                                                                    "R$ ",
                                                                                    service.price.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                                lineNumber: 238,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mx-2",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                                lineNumber: 239,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "⏱️ ",
                                                                                    service.duration_minutes,
                                                                                    " min"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                                lineNumber: 240,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEdit(service),
                                                                className: "text-blue-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded transition",
                                                                title: "Editar serviço",
                                                                children: "✏️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(service.id),
                                                                className: "text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded transition",
                                                                title: "Excluir serviço",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 6h18"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 207
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 226
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 275
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, service.id, true, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this)),
                                                services.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-center py-4",
                                                    children: "Nenhum serviço cadastrado ainda."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/admin/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/admin/page.tsx",
                            lineNumber: 185,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-600 sticky top-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mb-6 text-gray-800 border-b pb-2",
                                        children: isEditing ? `Editando: ${formData.name}` : 'Novo Serviço'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                        children: "Foto da Trança"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-2 border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition text-center cursor-pointer relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "fileInput",
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: (e)=>setImageFile(e.target.files?.[0] || null),
                                                                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-gray-500",
                                                                children: imageFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-green-600 font-medium flex items-center justify-center gap-2",
                                                                    children: [
                                                                        "✅ ",
                                                                        imageFile.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Clique ou arraste uma foto aqui"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/admin/page.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-600 mb-1",
                                                        children: "Nome do Modelo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition",
                                                        value: formData.name,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                name: e.target.value
                                                            }),
                                                        placeholder: "Ex: Box Braids Longa",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-600 mb-1",
                                                                children: "Preço (R$)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                className: "w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition",
                                                                value: formData.price,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        price: e.target.value
                                                                    }),
                                                                placeholder: "0.00",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-600 mb-1",
                                                                children: "Duração (min)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                className: "w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition",
                                                                value: formData.duration_minutes,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        duration_minutes: e.target.value
                                                                    }),
                                                                placeholder: "Minutos",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-600 mb-1",
                                                        children: "Descrição"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition h-24 resize-none",
                                                        value: formData.description,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                description: e.target.value
                                                            }),
                                                        placeholder: "Detalhes sobre material, cuidados, etc."
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: uploading,
                                                        className: `flex-1 p-4 rounded-lg font-bold text-lg text-white transition shadow-lg 
                            ${uploading ? 'bg-gray-400 cursor-not-allowed' : isEditing ? 'bg-blue-600 hover:bg-blue-700' : 'bg-amber-700 hover:bg-amber-800'}
                        `,
                                                        children: uploading ? 'Processando...' : isEditing ? 'Salvar Alterações' : '+ Adicionar ao Catálogo'
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 21
                                                    }, this),
                                                    isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleCancelEdit,
                                                        className: "px-6 py-4 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition",
                                                        children: "Cancelar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/admin/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/admin/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/admin/page.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/admin/page.tsx",
                            lineNumber: 267,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/admin/page.tsx",
                    lineNumber: 183,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/admin/page.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/admin/page.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "3ACMud9gOikXuPvE9Fn+3aEG46c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_app_bd6d6f56._.js.map