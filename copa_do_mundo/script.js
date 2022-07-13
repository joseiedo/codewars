//virá no formato ['selecao_gols:selecao_gols','selecao2_gols:selecao2_gols']
//retornará uma lista dos classificados no formato “selecao:pontuacao:saldoDeGols”,
// sem empates de pontuação e saldo de gols

// return ['mexico:9:7', 'espanha:6:4'];

// // em caso de empate entre 2º e 3º
// return ['holanda:9:7', 'alemanha:4:3', 'brasil:4:3'];

// // em caso de empate entre 2º, 3º e 4º
// return [
// 	'zambia:9:3',
// 	'alemanha:2:-1',
// 	'argentina:2:-1',
// 	'armenia:2:-1'
// ];

// // em caso de empate entre 1º, 2º, 3º e 4º
// return [
// 	'brasil:3:0',
// 	'croacia:3:0',
// 	'estados-unidos:3:0',
// 	'franca:3:0'
// ];

function solucao(partidas) {
  let selecoes = [];

  partidas.forEach((partida) => {
    const resultados = partida
      .split(":")
      .map((resultado) => resultado.split("_"));

    const saldoGolsPrimeiraSelecao =
      Number(resultados[0][1]) - Number(resultados[1][1]);

    let pontuacaoPrimeiraSelecao = 0;
    let pontuacaoSegundaSelecao = 0;

    if (saldoGolsPrimeiraSelecao >= 1) {
      pontuacaoPrimeiraSelecao = 3;
    } else if (saldoGolsPrimeiraSelecao === 0) {
      pontuacaoPrimeiraSelecao = 1;
      pontuacaoSegundaSelecao = 1;
    } else {
      pontuacaoSegundaSelecao = 3;
    }

    const primeiraSelecao = {
      nome: resultados[0][0],
      pontuacao: pontuacaoPrimeiraSelecao,
      saldoGols: saldoGolsPrimeiraSelecao,
    };

    const segundaSelecao = {
      nome: resultados[1][0],
      pontuacao: pontuacaoSegundaSelecao,
      saldoGols: 0 - saldoGolsPrimeiraSelecao,
    };

    selecoes.push(primeiraSelecao, segundaSelecao);
  });

  let classificados = [];
  selecoes.reduce((grupo, selecao) => {
    if (!grupo[selecao.nome]) {
      grupo[selecao.nome] = {
        nome: selecao.nome,
        pontuacao: 0,
        saldoGols: 0,
      };

      classificados.push(grupo[selecao.nome]);
    }

    grupo[selecao.nome].pontuacao += selecao.pontuacao;
    grupo[selecao.nome].saldoGols += selecao.saldoGols;

    return grupo;
  }, {});
  classificados.sort(
    (a, b) => b.pontuacao - a.pontuacao || b.saldoGols - a.saldoGols
  );

  if (
    classificados[3].pontuacao === classificados[1].pontuacao &&
    classificados[3].saldoGols === classificados[1].saldoGols
  ) {
    classificados = classificados.splice(0, 4);
  } else if (
    classificados[2].pontuacao === classificados[1].pontuacao &&
    classificados[2].saldoGols === classificados[1].saldoGols
  ) {
    classificados = classificados.splice(0, 3);
  } else {
    classificados = classificados.splice(0, 2);
  }
  classificados = classificados.map((classificado) =>
    Object.values(classificado).join(":")
  );

  return classificados;
}

const selecaoGols = [
  "brasil_3:croacia_1",
  "mexico_1:camaroes_0",
  "brasil_0:mexico_0",
  "camaroes_0:croacia_4",
  "croacia_1:mexico_3",
  "camaroes_1:brasil_4",
];
