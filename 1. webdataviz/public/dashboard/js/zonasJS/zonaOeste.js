function obterDadosZO() {
  fetch(`/zonas/zonaOeste`, { cache: 'no-store' })
    .then(response => {
      if (response.ok) {
        response.json().then(dados => {
          console.log("Dados recebidos da Zona Oeste:", dados);
          plotarGraficos(dados);
        });
      } else {
        console.error("Erro na resposta da API Zona Oeste");
      }
    })
    .catch(error => {
      console.error("Erro ao obter dados da Zona Oeste:", error);
    });
}

function plotarGraficos(listaDados) {
  const bairrosDesejados = [
    "Morumbi",
    "Butantã",
    "Lapa",
    "Palmeiras-Barra Funda"
  ];

  const canvasIds = [
    "zonaOestePrincipal",
    "zonaOesteMock",
    "zonaOesteMock2",
    "zonaOesteMock3"
  ];

  bairrosDesejados.forEach((bairro, index) => {
    const dadosBairro = listaDados.filter(d => d.bairro === bairro);
    if (dadosBairro.length === 0) {
      console.warn(`Nenhum dado para o bairro: ${bairro}`);
      return;
    }

    const ctx = document.getElementById(canvasIds[index]).getContext('2d');
    const ruas = dadosBairro.map(d => d.rua);
    const niveis = dadosBairro.map(d => d.altura_lixo);
    const cores = niveis.map(n => n >= 180 ? 'rgb(220, 20, 60)' : n >= 150 ? 'rgb(255, 200, 0)' : 'rgb(62, 225, 120)');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ruas,
        datasets: [{
          label: 'Nível do Lixo (cm)',
          data: niveis,
          backgroundColor: cores,
          borderColor: cores,
          borderWidth: 1
        }]
      },
      options: getChartOptions()
    });
  });
}

function getChartOptions() {
  return {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255,255,255,0.2)' }
      },
      x: {
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255,255,255,0.2)' }
      }
    },
    plugins: {
      legend: { labels: { color: '#fff' } },
      annotation: {
        annotations: {
          linhaAtencao: {
            type: 'line',
            yMin: 150,
            yMax: 150,
            borderColor: 'rgba(255, 205, 86, 0.7)',
            borderWidth: 2,
            label: {
              content: 'Atenção',
              enabled: true,
              position: 'center',
              yAdjust: -10,
              font: { size: 12, weight: 'bold' }
            }
          },
          linhaRisco: {
            type: 'line',
            yMin: 180,
            yMax: 180,
            borderColor: 'rgba(255, 99, 132, 0.7)',
            borderWidth: 2,
            label: {
              content: 'Risco',
              enabled: true,
              position: 'center',
              yAdjust: -10,
              font: { size: 12, weight: 'bold' }
            }
          }
        }
      }
    }
  };
}
