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