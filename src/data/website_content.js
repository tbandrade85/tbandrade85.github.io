// Este arquivo contém todos os dados do site que serão manipulados pelo Admin
export const initialSiteContent = {
    // DADOS DE VALORES DA EMPRESA (Usados em src/pages/Home/Valores/Valores.js)
    valores: [
        {
            id: 1,
            titulo: "Foco no Cliente",
            descricao: "Atendimento humanizado e suporte rápido 24h/7 para resolver qualquer problema com empatia.",
            icone: "heart" 
        },
        {
            id: 2,
            titulo: "Inovação em Fibra",
            descricao: "Utilizamos as tecnologias GPON e XGS-PON mais recentes para garantir a melhor estabilidade e velocidade.",
            icone: "lightbulb"
        },
        {
            id: 3,
            titulo: "Transparência",
            descricao: "Planos sem fidelidade abusiva e sem surpresas na fatura. O que você contrata é o que você recebe.",
            icone: "eye"
        },
    ],

    // DADOS DOS PLANOS (Usados em src/pages/Home/PlanosFetcher/PlanosFetcher.js)
    planos: [
        {
            id: 1,
            nome: "Fibra Essencial",
            velocidade: 200,
            descricaoCurta: "Navegação e estudos",
            preco: 89.90
        },
        {
            id: 2,
            nome: "Família Turbo",
            velocidade: 500,
            descricaoCurta: "Streaming 4K e múltiplos usuários",
            preco: 139.90
        },
        {
            id: 3,
            nome: "Gigabit Pro",
            velocidade: 1000,
            descricaoCurta: "Gaming, Live Stream e Home Office pesado",
            preco: 199.90
        }
    ],

    // TEXTOS GERAIS
    textos: {
        slogan_principal: "Sua internet com a velocidade que só a fibra de verdade entrega.",
        mensagem_chat: "Olá! Como podemos te ajudar a voar mais rápido hoje?",
        titulo_faq: "Perguntas Frequentes"
    }
};