const MetricaRoscaPrincipal = document.getElementById('can-metrica-registro-alertas-principal');

// Dados fixos para 2023 e 2024
const dadosFixos = {
  2023: { atencao: 100, risco: 100 },
  2024: { atencao: 150, risco: 145 }
};

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
          0 // valor de 2025 será atualizado
        ]
      },
      {
        label: 'Alerta de risco',
        backgroundColor: 'rgb(220, 20, 60)',
        data: [
          dadosFixos[2023].risco,
          dadosFixos[2024].risco,
          0 // valor de 2025 será atualizado
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

// Atualizar gráfico ao trocar o ano
document.getElementById('selectAnoRoscaPrincipal').addEventListener('change', async function () {
  const anoSelecionado = this.value;

  if (anoSelecionado === '2025') {
    try {
      const [resAtencao, resRisco] = await Promise.all([
        fetch("/medidas/atencao"),
        fetch("/medidas/risco")
      ]);

      const dadosAtencao = await resAtencao.json();
      const dadosRisco = await resRisco.json();

      chartRosca.data.datasets[0].data[2] = dadosAtencao.atencao;
      chartRosca.data.datasets[1].data[2] = dadosRisco.risco;

    } catch (erro) {
      console.error("Erro ao buscar dados dinâmicos de 2025:", erro);
      chartRosca.data.datasets[0].data[2] = 0;
      chartRosca.data.datasets[1].data[2] = 0;
    }

  } else {
    const ano = parseInt(anoSelecionado);
    chartRosca.data.datasets[0].data[2] = 0;
    chartRosca.data.datasets[1].data[2] = 0;
  }

  chartRosca.update();
});



