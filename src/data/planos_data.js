// Lista de planos para Home Page. Inclui planos residenciais e empresarial.
export const initialPlanos = [
    // Planos Residenciais
    {
        id: 1,
        nome: "Fibra Essencial",
        tipo: "residencial",
        velocidade: 200,
        descricaoCurta: "Navegação e estudos",
        preco: 89.90
    },
    {
        id: 2,
        nome: "Família Turbo",
        tipo: "residencial",
        velocidade: 500,
        descricaoCurta: "Streaming 4K e múltiplos usuários",
        preco: 139.90
    },
    {
        id: 3,
        nome: "Gigabit Pro",
        tipo: "residencial",
        velocidade: 1000,
        descricaoCurta: "Gaming, Live Stream e Home Office pesado",
        preco: 199.90
    },
    // Plano Empresarial
    {
        id: 4,
        nome: "Business Connect",
        tipo: "empresarial", 
        velocidade: 750,
        descricaoCurta: "Link dedicado, SLA e IP fixo para sua empresa.",
        preco: 399.90
    }
];