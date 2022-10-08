function capturar() {
	let autoG = document.querySelector("#autoGas").value;
	let valorG = document.querySelector("#valorGas").value;
	let valorA = document.querySelector("#valorAlcool").value;
	let autoA = document.querySelector("#autoAlcool").value;

	let valorKMG = valorG / autoG;
	let valorKMA = valorA / autoA;
	console.log(valorKMG);
	console.log(valorKMA);

	let textoInfo = document.querySelector("#textoInfo");

	let textoResultado =
		"O valor do Km da gasolina é " +
		valorKMG.toFixed(2) * 100 +
		" centavos e o do alcool é " +
		valorKMA.toFixed(2) * 100 +
		" centavos. ";

	textoInfo.textContent = textoResultado;
}

/*if (valorKMA > valorKMG) {
	let abasteca = "Abasteça com Álcool!";
} else {
	let abasteca = "Abasteça com Gasolina!";
}*/
