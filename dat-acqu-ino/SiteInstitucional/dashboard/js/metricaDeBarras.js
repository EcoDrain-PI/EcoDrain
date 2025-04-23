const ctx = document.getElementById('metricaPrincipal').getContext('2d');

// Novo formato de dados com múltiplos bairros
const dadosPorAno = {
  2025: [
    [200, 190, 150, 170, 190, 210, 230, 250],
    [120, 140, 160, 130, 150, 170, 190, 210],
    [100, 110, 120, 130, 140, 150, 160, 170]
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
const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'];

// Criação inicial do gráfico
const grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Bairro Mooca',
        data: dadosPorAno[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Bairro Itaquera',
        data: dadosPorAno[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Bairro Carrão',
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
