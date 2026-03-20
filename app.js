function escritasDaTela (tag, texto) {
    let tituloMaisParagrafo = document.querySelector(tag)
    tituloMaisParagrafo.innerHTML = texto;
}

function exibirMensagensNaTela() {
    escritasDaTela('h1', 'Calculadora de moedas!');
    escritasDaTela('p', 'Versão em desenvolvimento.');
}

exibirMensagensNaTela();

function calculadoraRealDolarAmericano() {
    let BRL1 = parseFloat(prompt('Digite um valor em BRL para conversão em USD:'));
    let USD1 = (BRL1 * 0.19).toFixed(2);

    if (BRL1 > 0) {
        return alert(`Aqui está sua conversão: BRL ${BRL1} = USD ${USD1}.`);
    } else {
        return alert('Por favor, insira um número válido / maior do que zero.');
    }
}

function calculadoraRealDolarCanadense() {
    let BRL2 = parseFloat(prompt('Digite um valor em BRL para conversão em CAD:'));
    let CAD1 = (BRL2 * 0.26).toFixed(2);

    if (BRL2 > 0) {
        return alert(`Aqui está sua conversão: BRL ${BRL2} = CAD ${CAD1}.`);
    } else {
        return alert('Por favor, insira um número válido / maior do que zero.');
    }
}

function calculadoraDolarCanadenseReal() {
    let CAD2 = parseFloat(prompt('Digite um valor em CAD para conversão em BRL:'));
    let BRL3 = (CAD2 * 3.85).toFixed(2);

    if (CAD2 > 0) {
        return alert(`Aqui está sua conversão: CAD ${CAD2} = BRL ${BRL3}.`);
    } else {
        return alert('Por favor, insira um número válido / maior do que zero.');
    }
}

function calculadoraDolarCanadenseDolarAmericano() {
    let CAD3 = parseFloat(prompt('Digite um valor em CAD para conversão em USD:'));
    let USD2 = (CAD3 * 0.73).toFixed(2);

    if (CAD3 > 0) {
        return alert(`Aqui está sua conversão: CAD ${CAD3} = USD ${USD2}.`)
    } else {
        return alert('Por favor, insira um número válido / maior do que zero.');
    }
}