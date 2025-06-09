const MetricaRoscaPrincipal = document.getElementById('can-metrica-registro-alertas-principal');

const dadosFixos = {
  2023: { atencao: 80, risco: 127 },
  2024: { atencao: 67, risco: 45 }
};

async function atualizarDados2025() {
  try {
    const [resAtencao, resRisco] = await Promise.all([
      fetch("/medidas/atencao"),
      fetch("/medidas/risco")
    ]);

    const dadosAtencao = await resAtencao.json();
    const dadosRisco = await resRisco.json();

    // Atualizando os dados de 2025
    dadosFixos[2025] = {
      atencao: dadosAtencao.atencao,
      risco: dadosRisco.risco
    };

    chartRosca.data.datasets[0].data[2] = dadosAtencao.atencao;
    chartRosca.data.datasets[1].data[2] = dadosRisco.risco;
    chartRosca.update();

  } catch (erro) {
    console.error("Erro ao buscar dados dinâmicos de 2025:", erro);
    dadosFixos[2025] = { atencao: 0, risco: 0 };
    chartRosca.data.datasets[0].data[2] = 0;
    chartRosca.data.datasets[1].data[2] = 0;
    chartRosca.update();
  }
}

// Inicializar o gráfico com os dados de 2025 como placeholder
const chartRosca = new Chart(MetricaRoscaPrincipal, {
  type: 'bar',
  data: {
    labels: ['2023', '2024', '2025'],
    datasets: [
      {
        label: 'Alerta de atenção',
        backgroundColor: 'rgb(62, 225, 120)',
        data: [
          dadosFixos[2023].atencao,
          dadosFixos[2024].atencao,
          dadosFixos[2025]?.atencao || 0 // 2025 começará com 0 até ser atualizado
        ]
      },
      {
        label: 'Alerta de risco',
        backgroundColor: 'rgb(220, 20, 60)',
        data: [
          dadosFixos[2023].risco,
          dadosFixos[2024].risco,
          dadosFixos[2025]?.risco || 0 // 2025 começará com 0 até ser atualizado
        ]
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
        labels: {
          color: '#ffffff',
        }
      }
    }
  }
});

atualizarDados2025();