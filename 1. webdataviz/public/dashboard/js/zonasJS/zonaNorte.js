let myChart;

// Função chamada ao carregar a página para obter e processar os dados
function obterDadosZN() {
  fetch(`/zonas/zonas`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
        resposta.reverse(); // Invertendo os dados para plotar da esquerda para a direita

        plotarGrafico(resposta);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

// Função para plotar o gráfico com os dados
function plotarGrafico(dados, idBueiro) {

  if (myChart) {
    myChart.destroy();
  }
  console.log('Iniciando plotagem do gráfico...');

  let labels = [];
  let dadosGrafico = [];
  let zonas = [];
  let rua = [];
  // Processando os dados
  for (let i = 0; i < dados.length; i++) {
    labels.push(dados[i].bairro);
    dadosGrafico.push(dados[i].altura_lixo);
    zonas.push(dados[i].zonas);
    rua.push(dados[i].rua);
  }

  // Definindo a cor das barras com base no nível do lixo
  const backgroundColors = dadosGrafico.map(nivel => {
    return nivel >= 180 ? 'rgb(220, 20, 60)' : nivel >= 150 ? 'rgb(255, 200, 0)' : 'rgb(62, 225, 120)'; // Vermelho para > 180, azul para <= 180
  });

  const ctx = document.getElementById('zonaLestePrincipal').getContext('2d');

  const config = {
    type: 'bar',
    data: {
      labels: rua,
      datasets: [{
        label: 'Nível do Lixo (cm)',
        data: dadosGrafico,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map(c => c.replace('0.7', '1')),
        borderWidth: 1
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
        legend: { labels: { color: '#ffffff' } },
        tooltip: {
          callbacks: {}
        },
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
                position: 'center',
                enabled: true,
                font: { size: 12, weight: 'bold' },
                yAdjust: -10
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
                position: 'center',
                enabled: true,
                font: { size: 12, weight: 'bold' },
                yAdjust: -10
              }
            }
          }
        }
      }
    }
  };

  myChart = new Chart(ctx, config);

  setTimeout(() => atualizarGrafico(idBueiro, dados, myChart), 5000);
}

// Função para atualizar o gráfico em tempo real
function atualizarGrafico(idBueiro, dados, myChart) {
  fetch(`/medidas/tempo-real/${idBueiro}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (novoRegistro) {
        obterDadosZN(idBueiro);  // Atualiza os dados do gráfico
        console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);

        // Verifica se há dados novos para atualizar o gráfico
        if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
          console.log("---------------------------------------------------------------")
          console.log("Como não há dados novos para captura, o gráfico não atualizará.")
        } else {
          dados.labels.shift();  // Remove o primeiro
          dados.labels.push(novoRegistro[0].momento_grafico); // Adiciona o novo dado
          dadosGrafico.shift();  // Remove o primeiro nível de lixo
          dadosGrafico.push(novoRegistro[0].altura_lixo); // Adiciona o novo nível de lixo

          // Atualiza o gráfico com novos dados
          myChart.update();
        }

        // Atualização do gráfico a cada 2 segundos
        setTimeout(() => atualizarGrafico(idBueiro, dados, myChart), 2000);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
      setTimeout(() => atualizarGrafico(idBueiro, dados, myChart), 2000);
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function zonaNorteMock() {
  // Gráfico 1 - Itaquaquecetuba
  const ctx1 = document.getElementById('zonaLesteMock1');
  let ruas1 = ['Parque Viviane', 'Rua do Cravo', 'São Sebastião'];
  let niveis1 = [110, 90, 83];
  renderizarGrafico(ctx1, ruas1, niveis1);

  // Gráfico 2 - Guaianases
  const ctx2 = document.getElementById('zonaLesteMock2');
  let ruas2 = ['Rua Arraial dos Ourives', 'Rua Serra Dourada', 'Rua Tapajós'];
  let niveis2 = [130, 155, 123];
  renderizarGrafico(ctx2, ruas2, niveis2);

  // Gráfico 3 - Tatuapé
  const ctx3 = document.getElementById('zonaLesteMock3');
  let ruas3 = ['Rua Apucarana', 'Rua Coelho Lisboa', 'Rua Serra de Bragança'];
  let niveis3 = [95, 80, 165];
  renderizarGrafico(ctx3, ruas3, niveis3);
}

// Função para criar gráfico com base em labels e dados
function renderizarGrafico(ctx, labels, dados) {
  const backgroundColors = dados.map(nivel => {
    return nivel >= 180 ? 'rgb(220, 20, 60)' :
      nivel >= 150 ? 'rgb(255, 200, 0)' :
        'rgb(62, 225, 120)';
  });

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Nível do Lixo',
        data: dados,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map(c => c.replace('0.7', '1')),
        borderWidth: 1
      }]
    },
    options: getChartOptions()
  });
}

// Opções reutilizáveis
function getChartOptions() {
  return {
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
      legend: { labels: { color: '#ffffff' } },
      tooltip: { callbacks: {} },
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
              position: 'center',
              enabled: true,
              font: { size: 12, weight: 'bold' },
              yAdjust: -10
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
              position: 'center',
              enabled: true,
              font: { size: 12, weight: 'bold' },
              yAdjust: -10
            }
          }
        }
      }
    }
  };
}
