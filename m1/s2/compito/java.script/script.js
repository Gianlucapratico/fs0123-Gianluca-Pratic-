let numeri

function aggiungi(numeri) {
    let simbolo = numeri.getAttribute('data-simbolo');
    let display = document.querySelector('#Display')
    display.value += simbolo;
}
function risultato() {
    let display = document.querySelector('#Display')
    display.value = eval(display.value);
}
function cancella() {
    let display = document.querySelector('#Display')
    display.value = eval(risultato).value = "";
}