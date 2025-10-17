function verificarRefeicao() {
    const input = document.getElementById("comida").value.toLowerCase().trim();
    const resultado = document.getElementById("resultado");

    if (input === "pão com ovo") {
        resultado.textContent = "É café da manhã.";
    } else if (input === "feijão com arroz") {
        resultado.textContent = "É almoço.";
    } else {
        resultado.textContent = "É jantar.";
    }
}
function teste(){
 let pTexto = document.getElementById("paragrafo");
 for(let i = 0 ; i < 5; i++){
 pTexto.innerHTML = pTexto.innerHTML + "<br>" +" "+ i;
 }
}
let novoParagrafo = document.getElementById ("paragrafo2")
let lista = ["arroz", "salada", "picanha"]
for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    novoParagrafo.innerHTML = novoParagrafo.innerHTML + "<br>" + element;
}