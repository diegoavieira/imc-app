var $ = document.querySelector.bind(document);
var weight = $('#weight');
var height = $('#height');
var calculate = $('#calculate');
var message = $('#message');
var result = $('#result');
var resultImg = $('#result img');
var resultTitle = $('#result h2');
var newCalculate = $('#newCalculate');

setTimeout(function() {
	$('#intro').style.display = 'none';
}, 3000);

message.style.display = 'none';
result.style.display = 'none';

weight.addEventListener('focus', function() {
	message.style.display = 'none';
});

height.addEventListener('focus', function() {
	message.style.display = 'none';
});

calculate.addEventListener('click', function() {
	var patt = /\d/;
	if (!patt.test(weight.value) || !patt.test(height.value)) {
		message.style.display = 'block';
	} else {
		var pattH = /[0-9]\.[0-9]/;
		if (!pattH.test(height.value)) {
			height.value = height.value.slice(0,1)+'.'+height.value.slice(1);
		}
		var imc = weight.value / (height.value * height.value);
		if (imc < 18.5) {
			result.style.display = 'flex';
			resultImg.src = 'img/baixopeso.svg';
			resultTitle.innerHTML = 'Seu IMC é '+imc.toPrecision(3)+'. Está abaixo do peso.';
		} else if (imc > 18.6 && imc < 24.9) {
			result.style.display = 'flex';
			resultImg.src = 'img/pesoideal.svg';
			resultTitle.innerHTML = 'Seu IMC é '+imc.toPrecision(3)+'. Está com o peso ideal.';
		} else if (imc > 25 && imc < 29.9) {
			result.style.display = 'flex';
			resultImg.src = 'img/sobrepeso.svg';
			resultTitle.innerHTML = 'Seu IMC é '+imc.toPrecision(3)+'. Está com sobrepeso.';
		} else if (imc > 30 && imc < 34.9) {
			result.style.display = 'flex';
			resultImg.src = 'img/grauum.svg';
			resultTitle.innerHTML = 'Seu IMC é '+imc.toPrecision(3)+'. Está com obesidade grau I.';
		} else if (imc > 35 && imc < 39.9) {
			result.style.display = 'flex';
			resultImg.src = 'img/graudois.svg';
			resultTitle.innerHTML = 'Seu IMC é '+imc.toPrecision(3)+'. Está com obesidade grau II.';
		} else if (imc > 40) {
			result.style.display = 'flex';
			resultImg.src = 'img/grautres.svg';
			resultTitle.innerHTML = 'Seu IMC é '+imc.toPrecision(3)+'. Está com obesidade grau III.';
		} else {
			result.style.display = 'flex';
			resultTitle.innerHTML = 'Seu IMC é '+imc.toPrecision(3)+'. Está fora da normatiza do Ministério da Saúde';
		};
	};
});

newCalculate.addEventListener('click', function() {
	result.style.display = 'none';
	message.style.display = 'none';
	height.value = '';
	weight.value = '';
});

