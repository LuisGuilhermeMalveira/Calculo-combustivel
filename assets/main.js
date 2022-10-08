function capturar() {
	let autoG = document.querySelector("#autoGas").value;
	let valorG = document.querySelector("#valorGas").value;
	let valorA = document.querySelector("#valorAlcool").value;
	let autoA = document.querySelector("#autoAlcool").value;

	let valorKMG = valorG / autoG;
	let valorKMA = valorA / autoA;

	console.log(valorKMG);
	console.log(valorKMA);
}
