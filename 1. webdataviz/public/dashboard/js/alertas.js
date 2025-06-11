const select = document.getElementById('filtroSelect');


  const alertaRiscoX = document.getElementById('div_ultima_hora');
  const alertaRiscoY = document.getElementById('div_ultimo_dia');
  const alertaRiscoZ = document.getElementById('div_ultima_semana');
  select.addEventListener('change', function () {
    // Oculta todas as divs




    alertaRiscoX.style.display = 'none';
    alertaRiscoY.style.display = 'none';
    alertaRiscoZ.style.display = 'none';


    // Mostra a div correspondente
    if (this.value === 'ultimaHora') {
      alertaRiscoX.style.display = 'block';
    } else if (this.value === 'ultimas24') {
      alertaRiscoX.style.display = 'block';
      alertaRiscoY.style.display = 'block';
    } else if (this.value === 'ultimaSemana') {
      alertaRiscoX.style.display = 'block';
      alertaRiscoY.style.display = 'block';
      alertaRiscoZ.style.display = 'block';
    }
  }
);







const canvasRiscoX = document.getElementById('metrica-Barras-alerta-risco-x').getContext('2d');

const dadosRiscoX = {
  2025: [
    [200, 10, 20, 2],
    [180, 12, 24, 0],
    [160, 15, 27, 31]
  ]
};

// Atualizado por semanas
const labelsRiscoX = ['00:15:00', '00:30:00', '00:45:00', '01:00:00'];

// Criação inicial do gráfico
const graficoRiscoX = new Chart(canvasRiscoX, {
  type: 'bar',
  data: {
    labels: labelsRiscoX,
    datasets: [
      {
        label: 'Rua x1',
        data: dadosRiscoX[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua x2',
        data: dadosRiscoX[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua x3',
        data: dadosRiscoX[2025][2],
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

// Alerta de risco Y

const canvasRiscoY = document.getElementById('metrica-Barras-alerta-risco-y').getContext('2d');

const dadosRiscoY = {
  2025: [
    [10, 150, 20, 1],
    [20, 20, 20, 2],
    [30, 20, 20, 3]
  ]
};

// Atualizado por semanas
const labelsRiscoY = ['06:00', '12:00', '18:00', '23:00'];

// Criação inicial do gráfico
const graficoRiscoY = new Chart(canvasRiscoY, {
  type: 'bar',
  data: {
    labels: labelsRiscoY,
    datasets: [
      {
        label: 'Rua y1',
        data: dadosRiscoY[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua y2',
        data: dadosRiscoY[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua y3',
        data: dadosRiscoY[2025][2],
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


// Alerta de risco z


// Alerta de risco Y

const canvasRiscoZ = document.getElementById('metrica-Barras-alerta-risco-Z').getContext('2d');

const dadosRiscoZ = {
  2025: [
    [10, 150, 20, 1, 10, 150, 20],
    [20, 15, 5, 2, 33, 42, 31,],
    [30, 20, 150, 3, 10, 42, 20,]
  ]
};

// Atualizado por semanas
const labelsRiscoZ = [ 'Dom', 'Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sáb'];

// Criação inicial do gráfico
const graficoRiscoZ = new Chart(canvasRiscoZ, {
  type: 'bar',
  data: {
    labels: labelsRiscoZ,
    datasets: [
      {
        label: 'Rua z1',
        data: dadosRiscoZ[2025][0],
        borderColor: 'black',
        backgroundColor: 'rgb(90, 245, 227)'
      },
      {
        label: 'Rua z2',
        data: dadosRiscoZ[2025][1],
        backgroundColor: 'rgb(30, 208, 186)'
      },
      {
        label: 'Rua z3',
        data: dadosRiscoZ[2025][2],
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