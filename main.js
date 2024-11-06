let valor = '';

function num(numb) {
    valor += numb;
    display();
}

function botao(calcular) {
    valor += ' ' + calcular + ' ';
    display();
}

function display() {
    document.getElementById('result').innerText = valor;
}

function limpar() {
    valor = '';
    display();
}

function calc() {
    try {
        valor = eval(valor).toString();
    } catch {
        valor = "Erro";
    }
    display();
}