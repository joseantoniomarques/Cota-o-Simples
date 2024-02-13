function dolar() {
    var reais = document.getElementById('inputText').value;
    document.getElementById('outputText').innerHTML = `Você vai gastar R$ ${reais * 4.95} no dólar.`
}

function euro() {
    var euro = document.getElementById('inputText').value;
    document.getElementById('outputText').innerHTML = `Você vai gastar R$ ${euro * 5.30} no euro.`
}

function bitCoin() {
    var moeda = document.getElementById('inputText').value;
    document.getElementById('outputText').innerHTML = `Você vai gastar R$ ${moeda * 242.763} no Bitcoin.`
}

