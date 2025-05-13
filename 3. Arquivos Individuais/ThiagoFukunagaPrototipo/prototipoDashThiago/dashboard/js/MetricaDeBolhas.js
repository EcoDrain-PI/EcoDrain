 //  MÉTRICA DE BOLHA (PRINCIPAL)

 const MetricaDeBolha = document.getElementById('can-metrica-bolha-principal');


 const dadosPorAnoBolha = {
  2025: [
    { x: 10, y: 18, r: 10 },
    { x: 22, y: 5, r: 10 },
    { x: 7, y: 12, r: 10 },
    { x: 15, y: 20, r: 10 },
    { x: 3, y: 25, r: 10 },
    { x: 14, y: 9, r: 10 },
    { x: 18, y: 16, r: 10 },
    { x: 9, y: 3, r: 10 },
    { x: 24, y: 19, r: 10 },
    { x: 6, y: 27, r: 10 }
  ],
  2024: [
    { x: 10, y: 18, r: 10 },
    { x: 22, y: 5, r: 10 },
    { x: 7, y: 12, r: 10 },
    { x: 15, y: 20, r: 10 },
    { x: 3, y: 25, r: 10 },
    { x: 14, y: 9, r: 10 },
    { x: 18, y: 16, r: 10 }
  ],
  2023: [
    { x: 10, y: 18, r: 10 },
    { x: 22, y: 5, r: 10 },
    { x: 7, y: 12, r: 10 },
    { x: 15, y: 20, r: 10 }
  ]
};


 const chatBolha = new Chart(MetricaDeBolha, {
   type: 'bubble',
   data: {
     datasets: [{
       label: 'Sensores instalados',
       data: dadosPorAnoBolha[2025],
       backgroundColor: 'rgb(90, 245, 227)'
     }
     ]
   },
   options: {
     responsive: true,
     scales: {
       y: { // Todo a estilização da vertical ("Y" do plano cartesiano)
         beginAtZero: true,
         ticks: {
           color: '#ffffff' // Cor do texto que está em baixo
         },
         grid: {
           color: 'rgba(255, 255, 255, 0.2)'
         }
       },
       x: { // Todo a estilização da horizontal ("X" do plano cartesiano)
         ticks: {
           color: '#ffffff'
         },
         grid: {
           color: 'rgba(255, 255, 255, 0.2)'
         }
       }
     },
     plugins: { // Estilização dos textos das labels  (informações dos retângulos)
       legend: {
         labels: {
           color: '#ffffff' //A cor dos textos labels (informações dos retângulos)
         }
       }
     }
   }
 });

// Atualizar os dados ao trocar o ano
document.getElementById('selectAnoBolhaPrincipal').addEventListener('change', function () {
  const anoSelecionado = this.value;

  
  chatBolha.data.datasets[0].data = dadosPorAnoBolha[anoSelecionado];
  chatBolha.update();
  
});