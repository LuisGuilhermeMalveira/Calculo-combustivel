function capturar() {
	let autoG = document.querySelector("#autoGas").value;
	let valorG = document.querySelector("#valorGas").value;
	let autoA = document.querySelector("#autoAlcool").value;
	let valorA = document.querySelector("#valorAlcool").value;

	let valorKMG = valorG / autoG;
	let valorKMA = valorA / autoA;

	let textoInfo = document.querySelector("#textoInfo");

	if (autoG > 100 || autoG < 0) {
		textoInfo.classList.add("erro");
		textoInfo.textContent =
			"Insira um valor entre 0 e 100 no campo: Autonomia na gasolina.";
	} else if (valorG > 10 || valorG < 0) {
		textoInfo.classList.add("erro");
		textoInfo.textContent =
			"Insira um valor entre 0 e 10 no campo: Valor da gasolina.";
	} else if (autoA > 100 || valorG < 0) {
		textoInfo.classList.add("erro");
		textoInfo.textContent =
			"Insira um valor entre 0 e 100 no campo: Autonomia no álcool.";
	} else if (valorA > 10 || valorG < 0) {
		textoInfo.classList.add("erro");
		textoInfo.textContent =
			"Insira um valor entre 0 e 10 no campo: Valor no álcool.";
	} else {
		if (valorKMA > valorKMG) {
			textoInfo.classList.remove("erro");
			let textoResultado =
				"O valor do Km da gasolina é " +
				valorKMG.toFixed(2) * 100 +
				" centavos e o Km do alcool é " +
				valorKMA.toFixed(2) * 100 +
				" centavos. Então é melhor abastecer com gasolina.";
			textoInfo.textContent = textoResultado;
		} else if (valorKMA < valorKMG) {
			textoInfo.classList.remove("erro");
			let textoResultado =
				"O valor do Km da gasolina é " +
				valorKMG.toFixed(2) * 100 +
				" centavos e o Km do alcool é " +
				valorKMA.toFixed(2) * 100 +
				" centavos. Então é melhor abastecer com álcool.";
			textoInfo.textContent = textoResultado;
		} else {
			textoInfo.classList.remove("erro");
			let textoResultado = `O valor do Km da gasolina é ${
				valorKMG.toFixed(2) * 100
			} centavo o Km do álcool é ${
				valorKMA.toFixed(2) * 100
			} centavos. Então não faz diferença o combustível.`;

			textoInfo.textContent = textoResultado;
		}
	}
}
