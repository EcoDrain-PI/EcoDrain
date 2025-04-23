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
        label: 'Pães de barros',
        data: dadosPorMesMooca[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Ezequiel Ramos',
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
        label: 'Mooca',
        data: dadosPorMesItaquera[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Pães de barros',
        data: dadosPorMesItaquera[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Ezequiel Ramos',
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
        label: 'Mooca',
        data: dadosPorMesCarrao[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Pães de barros',
        data: dadosPorMesCarrao[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Ezequiel Ramos',
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