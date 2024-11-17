let num = document.querySelector('input#fnum');
let flista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

// Função para verificar se um número é válido (entre 1 e 100)
function isNaN(n) {
  n = parseInt(n, 10);
  if (n >= 1 && n <= 100) {
    return false; // Se válido, retorna false (não é NaN)
  } else {
    return true; // Se inválido, retorna true (é NaN)
  }
}

// Função para verificar se um número já está na lista
function inLista(n, l) {
  return l.includes(Number(n)); 
}

// Função para adicionar o número à lista
function adicionar() {
  if (!isNaN(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado`;
    flista.appendChild(item);
  } else {
    window.alert('Valor inválido ou já encontrado na lista.');
  }
  num.value = '';
  num.focus();
}

// Função para finalizar e mostrar os resultados
function Finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de Finalizar!');
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    // Calcula a soma dos valores
    for (let pos in valores) {
      soma += valores[pos];

      // Encontra o maior e o menor valor
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }

    // Calcula a média
    media = soma / tot;

    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores é: ${media.toFixed(2)}</p>`; // Adiciona a média
  }
}