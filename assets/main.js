function capturar() {
	let autoG = document.querySelector("#autoGas").value;
	let valorG = document.querySelector("#valorGas").value;
	let autoA = document.querySelector("#autoAlcool").value;
	let valorA = document.querySelector("#valorAlcool").value;

	let valorKMG = valorG / autoG;
	let valorKMA = valorA / autoA;

	let autoMax = 100;
	let valorMax = 10;

	let textoInfo = document.querySelector("#textoInfo");

	let mensagemErro = [
		`O valor do Km da gasolina é ${
			valorKMG.toFixed(2) * 100
		} centavos o Km do álcool é ${
			valorKMA.toFixed(2) * 100
		} centavos. Então é melhor abastecer com gasolina.`,

		`O valor do Km da gasolina é ${
			valorKMG.toFixed(2) * 100
		} centavos o Km do álcool é ${
			valorKMA.toFixed(2) * 100
		} centavos. Então é melhor abastecer com álcool.`,

		`O valor do Km da gasolina é ${
			valorKMG.toFixed(2) * 100
		} centavos o Km do álcool é ${
			valorKMA.toFixed(2) * 100
		} centavos. Então não faz diferença o combustível.`,
	];

	if (valorA && valorG && autoA && autoG) {
		mensagemResultado();
		validacao();
	} else {
		textoInfo.classList.add("erro");
		textoInfo.textContent = "Favor inserir todos os dados!";
	}

	function validacao() {
		if (autoG > autoMax || autoG < 0) {
			textoInfo.classList.add("erro");
			textoInfo.textContent =
				"Insira um valor entre 0 e 100 no campo: Autonomia na gasolina.";
		} else if (valorG > valorMax || valorG < 0) {
			textoInfo.classList.add("erro");
			textoInfo.textContent =
				"Insira um valor entre 0 e 10 no campo: Valor da gasolina.";
		} else if (autoA > autoMax || valorG < 0) {
			textoInfo.classList.add("erro");
			textoInfo.textContent =
				"Insira um valor entre 0 e 100 no campo: Autonomia no álcool.";
		} else if (valorA > valorMax || valorG < 0) {
			textoInfo.classList.add("erro");
			textoInfo.textContent =
				"Insira um valor entre 0 e 10 no campo: Valor no álcool.";
		}
	}

	function mensagemResultado() {
		if (valorKMA > valorKMG) {
			textoInfo.classList.remove("erro");
			let textoResultado = mensagemErro[0];

			textoInfo.textContent = textoResultado;
		} else if (valorKMA < valorKMG) {
			textoInfo.classList.remove("erro");
			let textoResultado = mensagemErro[1];

			textoInfo.textContent = textoResultado;
		} else {
			textoInfo.classList.remove("erro");
			let textoResultado = mensagemErro[2];

			textoInfo.textContent = textoResultado;
		}
	}
}
