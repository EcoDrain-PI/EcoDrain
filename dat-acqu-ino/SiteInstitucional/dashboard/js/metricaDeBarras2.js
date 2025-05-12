const canvasMooca = document.getElementById('metrica-Barras-Mooca').getContext('2d');

// Novo formato de dados com múltiplos bairros
const dadosPorMesMooca = {
  2025: [
    [200, 190, 150, 170],
    [120, 140, 160, 130],
    [100, 110, 120, 130]
  ]
};

// Atualizado por semanas
const labelsMooca = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];

// Criação inicial do gráfico
const grafico1 = new Chart(canvasMooca, {
  type: 'bar',
  data: {
    labels: labelsMooca,
    datasets: [
      {
        label: 'Rua da Mooca',
        data: dadosPorMesMooca[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua Pães de barros',
        data: dadosPorMesMooca[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua Ezequiel Ramos',
        data: dadosPorMesMooca[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      },

    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});

// Grafico de barras do Bairro Itaquera


const canvasItaquera = document.getElementById('metrica-Barras-Itaquera').getContext('2d');

// Novo formato de dados com múltiplos bairros
const dadosPorMesItaquera = {
  2025: [
    [120, 120, 160, 170],
    [140, 140, 110, 180],
    [115, 110, 130, 200]
  ]
};

// Atualizado por semanas
const labelsItaquera = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];

// Criação inicial do gráfico
const graficoItaquera = new Chart(canvasItaquera, {
  type: 'bar',
  data: {
    labels: labelsItaquera,
    datasets: [
      {
        label: 'Rua São Teodoro',
        data: dadosPorMesItaquera[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua Virginia Fernie',
        data: dadosPorMesItaquera[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua Itaquera',
        data: dadosPorMesItaquera[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      },

    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});


// Grafico de barras do Bairro Itaquera

const ctx2 = document.getElementById('metrica-Barras-Carrao').getContext('2d');

// Novo formato de dados com múltiplos bairros
const dadosPorMesCarrao = {
  2025: [
    [170, 120, 160, 120],
    [180, 140, 140, 110],
    [200, 110, 130, 115]
  ]
};

// Atualizado por semanas
const labels2 = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];

// Criação inicial do gráfico
const grafico2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: labels2,
    datasets: [
      {
        label: 'Rua Barueri',
        data: dadosPorMesCarrao[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua Boa Estrela',
        data: dadosPorMesCarrao[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua Dulce',
        data: dadosPorMesCarrao[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      },

    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});

const canvasSantoAmaro = document.getElementById('metrica-Barras-Santo-Amaro').getContext('2d');

// Novo formato de dados com múltiplos bairros
const dadosPorMesSantoAmaro = {
  2025: [
    [120, 110, 90, 115],
    [120, 80, 100, 95],
    [115, 140, 160, 200]
  ]
};

// Atualizado por semanas
const labelsSantoAmaro = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];

// Criação inicial do gráfico
const graficoSantoAmaro = new Chart(canvasSantoAmaro, {
  type: 'bar',
  data: {
    labels: labelsSantoAmaro,
    datasets: [
      {
        label: 'Rua Amador Bueno',
        data: dadosPorMesSantoAmaro[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Avenida Adolfo Pinheiro',
        data: dadosPorMesSantoAmaro[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua Ministro Ferreira Alves',
        data: dadosPorMesSantoAmaro[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      },

    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});

const canvasCampoLimpo = document.getElementById('metrica-Barras-Campo-Limpo').getContext('2d');

// Novo formato de dados com múltiplos bairros
const dadosPorMesCampoLimpo = {
  2025: [
    [100, 130, 80, 115],
    [90, 70, 110, 95],
    [115, 140, 150, 100]
  ]
};

// Atualizado por semanas
const labelsCampoLimpo= ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];

// Criação inicial do gráfico
const graficoCampoLimpo = new Chart(canvasCampoLimpo, {
  type: 'bar',
  data: {
    labels: labelsCampoLimpo,
    datasets: [
      {
        label: 'Rua Amador Bueno',
        data: dadosPorMesSantoAmaro[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Avenida Adolfo Pinheiro',
        data: dadosPorMesSantoAmaro[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },  
      {
        label: 'Rua Ministro Ferreira Alves',
        data: dadosPorMesSantoAmaro[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      },

    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});
const canvasCapaoRedondo = document.getElementById('metrica-Barras-Capao-Redondo');
const labelsCapaoRedondo = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
const dadosPorMesCapaoRedondo = {
  2025: [
    [120, 150, 130, 160],
    [80, 90, 95, 110],
    [60, 75, 70, 85]
  ]
};
const graficoCapaoRedondo = new Chart(canvasCapaoRedondo, {
  type: 'bar',
  data: {
    labels: labelsCapaoRedondo,
    datasets: [
      {
        label: 'Av. João Dias',
        data: dadosPorMesCapaoRedondo[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua das Flechas',
        data: dadosPorMesCapaoRedondo[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Av. Guarapiranga',
        data: dadosPorMesCapaoRedondo[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});

const canvasButanta = document.getElementById('metrica-Barras-Butanta');
const labelsButanta = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
const dadosPorMesButanta = {
  2025: [
    [100, 110, 105, 115],
    [95, 90, 100, 105],
    [85, 70, 75, 80]
  ]
};
const graficoButanta = new Chart(canvasButanta, {
  type: 'bar',
  data: {
    labels: labelsButanta,
    datasets: [
      {
        label: 'Rua MMDC',
        data: dadosPorMesButanta[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Av. Vital Brasil',
        data: dadosPorMesButanta[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua Camargo',
        data: dadosPorMesButanta[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});

const canvasLapa = document.getElementById('metrica-Barras-Lapa');
const labelsLapa = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
const dadosPorMesLapa = {
  2025: [
    [90, 95, 92, 98],
    [88, 85, 90, 93],
    [60, 65, 70, 72]
  ]
};
const graficoLapa = new Chart(canvasLapa, {
  type: 'bar',
  data: {
    labels: labelsLapa,
    datasets: [
      {
        label: 'Rua Doze de Outubro',
        data: dadosPorMesLapa[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua Clélia',
        data: dadosPorMesLapa[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua Tito',
        data: dadosPorMesLapa[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});

const canvasPinheiros = document.getElementById('metrica-Barras-Pinheiros');
const labelsPinheiros = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
const dadosPorMesPinheiros = {
  2025: [
    [110, 115, 120, 125],
    [100, 105, 110, 108],
    [95, 90, 92, 94]
  ]
};
const graficoPinheiros = new Chart(canvasPinheiros, {
  type: 'bar',
  data: {
    labels: labelsPinheiros,
    datasets: [
      {
        label: 'Rua dos Pinheiros',
        data: dadosPorMesPinheiros[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Av. Rebouças',
        data: dadosPorMesPinheiros[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua Teodoro Sampaio',
        data: dadosPorMesPinheiros[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});

const canvasSantana = document.getElementById('metrica-Barras-Santana');
const labelsSantana = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
const dadosPorMesSantana = {
  2025: [
    [130, 125, 135, 140],
    [110, 105, 115, 120],
    [100, 90, 95, 105]
  ]
};
const graficoSantana = new Chart(canvasSantana, {
  type: 'bar',
  data: {
    labels: labelsSantana,
    datasets: [
      {
        label: 'Rua Voluntários da Pátria',
        data: dadosPorMesSantana[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua Alfredo Pujol',
        data: dadosPorMesSantana[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua Dr. Zuquim',
        data: dadosPorMesSantana[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});

const canvasCasaVerde = document.getElementById('metrica-Barras-Casa-Verde');
const labelsCasaVerde = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
const dadosPorMesCasaVerde = {
  2025: [
    [85, 90, 95, 100],
    [75, 80, 85, 88],
    [60, 65, 68, 70]
  ]
};
const graficoCasaVerde = new Chart(canvasCasaVerde, {
  type: 'bar',
  data: {
    labels: labelsCasaVerde,
    datasets: [
      {
        label: 'Av. Casa Verde',
        data: dadosPorMesCasaVerde[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua José Debieux',
        data: dadosPorMesCasaVerde[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua Zanzibar',
        data: dadosPorMesCasaVerde[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});

const canvasTremembe = document.getElementById('metrica-Barras-Tremembe');
const labelsTremembe = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
const dadosPorMesTremembe = {
  2025: [
    [70, 75, 72, 78],
    [65, 60, 62, 66],
    [55, 50, 53, 57]
  ]
};
const graficoTremembe = new Chart(canvasTremembe, {
  type: 'bar',
  data: {
    labels: labelsTremembe,
    datasets: [
      {
        label: 'Av. Nova Cantareira',
        data: dadosPorMesTremembe[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua Maria Amália Lopes de Azevedo',
        data: dadosPorMesTremembe[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua das Azaléias',
        data: dadosPorMesTremembe[2025][2],
        backgroundColor: 'rgb(42, 157, 143)'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    }
  }
});