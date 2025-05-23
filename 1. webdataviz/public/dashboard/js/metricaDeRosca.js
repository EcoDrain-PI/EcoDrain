 //MÉTRICA DE ROSCA (PRINCIPAL) 

const MetricaRoscaPrincipal = document.getElementById('can-metrica-registro-alertas-principal');

const dadosPorAnoRosca = {
  2025: [100, 150, 50],
  2024: [200, 100, 400],
  2023: [40, 160, 100],
};

const chartRosca = new Chart(MetricaRoscaPrincipal, {
  type: 'bar',
  data: {
    labels: [
      2023,
      2024,
      2025
    ],
    datasets: [{
      label: 'Alerta de atenção',
      data: dadosPorAnoRosca[2025], // valor inicial
      borderColor: 'transparent',
      color: '#ffffff',
      backgroundColor: [
        'rgb(62, 225, 120)',
      ]      
    },
    {
      label: 'Alerta de risco',
      data: dadosPorAnoRosca[2025], // valor inicial
      borderColor: 'transparent',
      color: '#ffffff',
      backgroundColor: [
        'rgb(220, 20, 60)'
      ]      
    }]
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

// Atualizar os dados ao trocar o ano
document.getElementById('selectAnoRoscaPrincipal').addEventListener('change', function () {
  const anoSelecionado = this.value;

  
    chartRosca.data.datasets[0].data = dadosPorAnoRosca[anoSelecionado];
    chartRosca.update();
  
});
