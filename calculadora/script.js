function adicionaElementoAoInputResultado(elemento) {
  const inputResultado = document.querySelector('.js-resultado');
  inputResultado.value += elemento;
}

function verificaSimboloInicial(simbolo) {
  const inputResultado = document.querySelector('.js-resultado');
  const ultimoCaractere = inputResultado.value.slice(-1);
  return !/^\d/.test(ultimoCaractere) && simbolo !== '-';
}

function verificarSimboloDuplicado(simbolo) {
  const inputResultado = document.querySelector('.js-resultado');
  const ultimoCaractere = inputResultado.value.slice(-1);

  if (!/^\d/.test(simbolo) && !/^\d/.test(ultimoCaractere) && simbolo !== '.') {
    return true;
  }

  return false;
}

function executarCalculo() {
  const inputResultado = document.querySelector('.js-resultado');
  try {
    const resultado = eval(inputResultado.value);
    inputResultado.value = resultado;
  } catch (error) {
    alert('Erro ao calcular.');
  }
}

function limparResultado() {
  const inputResultado = document.querySelector('.js-resultado');
  inputResultado.value = '';
}

function trocarSinalDaConta() {
  const inputResultado = document.querySelector('.js-resultado');
  const valorAtual = parseFloat(inputResultado.value);
  if (!isNaN(valorAtual)) {
    inputResultado.value = -valorAtual;
  }
}

function deletarUltimaLetraDoResultado() {
  const inputResultado = document.querySelector('.js-resultado');
  inputResultado.value = inputResultado.value.slice(0, -1);
}

function gerenciarEscutadores() {
  const botoes = document.querySelectorAll('.js-btn-padroes');
  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      const valor = botao.getAttribute('data-valor');
      if (verificarSimboloDuplicado(valor)) {
        deletarUltimaLetraDoResultado();
      }
      adicionaElementoAoInputResultado(valor);
    });
  });

  const btnAC = document.querySelector('.js-btn-ac'); 
  btnAC.addEventListener('click', limparResultado);

  const btnDel = document.querySelector('.js-btn-del');
  btnDel.addEventListener('click', deletarUltimaLetraDoResultado);

  const btnIgual = document.querySelector('.js-btn-igual');
  btnIgual.addEventListener('click', executarCalculo);

  const btnMaisMenos = document.querySelector('.js-btn-mais-menos');
  btnMaisMenos.addEventListener('click', trocarSinalDaConta);
}

// Chama a função para configurar os ouvintes de eventos
gerenciarEscutadores();