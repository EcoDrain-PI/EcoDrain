 //MÉTRICA DE ROSCA (PRINCIPAL) 

const MetricaRoscaPrincipal = document.getElementById('can-metrica-rosca-principal');

const dadosPorAnoRosca = {
  2025: [100, 150, 50],
  2024: [200, 100, 400],
  2023: [40, 160, 100],
};

const chartRosca = new Chart(MetricaRoscaPrincipal, {
  type: 'doughnut',
  data: {
    labels: [
      'Alerta normal',
      'Alerta atenção',
      'Alerta risco'
    ],
    datasets: [{
      label: 'Distribuição de alertas',
      data: dadosPorAnoRosca[2025], // valor inicial
      borderColor: 'transparent',
      backgroundColor: [
        'rgb(127, 251, 171)',
        'rgb(62, 225, 120)',
        'rgb(220, 20, 60)'
      ]      
    }]
  },
  options: {
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
