const categoriasFake = [
    {
      id: 1,
      nome: "jogos"
    },
    {
      id: 2,
      nome: "animes"
    },
    {
      id: 3,
      nome: "carros"
    },
    {
      id: 4,
      nome: "animais"
    },
    {
      id: 5,
      nome: "natureza"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoria: "Animais",
      nome: "Tigre-Poderoso",
      extensao: "jpg"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1473800447596-01729482b8eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoria: "Arquitetura",
      nome: "Arranha-Céu-Futurista",
      extensao: "jpg"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1501791187590-9ef2612ba1eb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoria: "Viagens",
      nome: "Montanhas-Cobertas-de-Neve",
      extensao: "jpg"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1472152083436-a6eede6efad9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoria: "Natureza",
      nome: "Cachoeira-Serena",
      extensao: "jpg"
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoria: "Animais",
      nome: "Pandas-Brincalhões",
      extensao: "jpg"
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1473800447596-01729482b8eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoria: "Arquitetura",
      nome: "Palácio-Histórico",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1501791187590-9ef2612ba1eb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoria: "Viagens",
      nome: "Praia-Paradisíaca",
      extensao: "jpg"
    },
  ];
  

function doDataCategorias() {
    try {
        const response = categoriasFake;

        const data =  response;
    
        return data
      } catch (error) {
        console.error('Erro durante a solicitação:');
      }
} 

export const CategoriaApi = {
    doDataCategorias,
}

