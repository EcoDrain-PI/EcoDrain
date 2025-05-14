const ctx = document.getElementById('metricaPrincipal').getContext('2d');

// Novo formato de dados com múltiplos bairros
const dadosPorAno = {
  2025: [
    [2, 9, 5, 9],
    [10, 4, 16, 8],
    [5, 15, 25, 2]
  ],
  2024: [
    [100, 90, 80, 70, 60, 50, 40, 30],
    [70, 60, 50, 40, 30, 20, 10, 5],
    [60, 50, 40, 30, 20, 10, 5, 2]
  ],
  2023: [
    [150, 160, 170, 160, 150, 160, 170, 180],
    [140, 130, 120, 110, 105, 115, 125, 135],
    [130, 140, 150, 140, 130, 120, 110, 105]
  ]
};

// Atualizado para 8 meses
const labels = ['Zona Norte', 'Zona Sul', 'Zona Leste', 'Zona Oeste'];

// Criação inicial do gráfico
const grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Nível Normal',
        data: dadosPorAno[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Nível Atenção',
        data: dadosPorAno[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Nível Risco',
        data: dadosPorAno[2025][2],
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

// Corrigido: id correto 'selectAno' e atualização para múltiplos datasets
document.getElementById('selectAnoBarraPrincipal').addEventListener('change', function () {
  const anoSelecionado = this.value;

  const dadosAno = dadosPorAno[anoSelecionado];
  grafico.data.datasets.forEach((dataset, index) => {
    dataset.data = dadosAno[index];
  });

  grafico.update();
});


// Métrica da ZL
const metricaPrincipalZL = document.getElementById('metricaPrincipalZL').getContext('2d');

const graficoMetricaPrincipalZL = new Chart(metricaPrincipalZL, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Itaquera',
        data: dadosPorAno[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Mooca',
        data: dadosPorAno[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Arthur Alvim',
        data: dadosPorAno[2025][2],
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



document.getElementById('selectAnoBarraPrincipalZL').addEventListener('change', function () {
  // const anoSelecionado = this.value;

  // const dadosAno = dadosPorAno[anoSelecionado];
  grafico.data.datasets.forEach((dataset, index) => {
    dataset.data = dadosAno[index];
  });

  grafico.update();
});