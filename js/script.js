var $ = document.querySelector.bind(document);
var weight = $('#weight');
var height = $('#height');
var calculate = $('#calculate');
var message = $('#message');
var result = $('#result');
var resultImg = $('#result img');
var resultTitle = $('#result p');
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
		var pattH = /[0-9]\W[0-9]/;
		var weightDot = weight.value.toString().replace(/\W/, '.');
		if (pattH.test(height.value) || pattH.test(weight.value)) {
			var heightMt = height.value.toString().replace(/\W/, '');
			heightMt = heightMt / 100;
		} else {
			heightMt = height.value / 100;
		};
		var imc =  weightDot / (heightMt * heightMt);
		var idealWeight;
		idealWeight = (heightMt * heightMt) * 21;
		if (imc < 18.5) {
			result.style.display = 'flex';
			resultImg.src = 'img/baixopeso.svg';
			resultTitle.innerHTML = 'Seu IMC é <strong>' + imc.toPrecision(3) + '</strong><br>Está abaixo do peso</br>O peso ideal é de <strong>' + idealWeight.toFixed(1) + 'kg</strong>';
		} else if (imc > 18.6 && imc < 24.9) {
			result.style.display = 'flex';
			resultImg.src = 'img/pesoideal.svg';
			resultTitle.innerHTML = 'Seu IMC é <strong>' + imc.toPrecision(3) + '</strong><br>Está com o peso ideal';
		} else if (imc > 25 && imc < 29.9) {
			result.style.display = 'flex';
			resultImg.src = 'img/sobrepeso.svg';
			resultTitle.innerHTML = 'Seu IMC é <strong>' + imc.toPrecision(3) + '</strong><br>Está com sobrepeso</br>O peso ideal é de <strong>' + idealWeight.toFixed(1) + 'kg</strong>';
		} else if (imc > 30 && imc < 34.9) {
			result.style.display = 'flex';
			resultImg.src = 'img/grauum.svg';
			resultTitle.innerHTML = 'Seu IMC é <strong>' + imc.toPrecision(3) + '</strong><br>Está com obesidade grau I</br>O peso ideal é de <strong>' + idealWeight.toFixed(1) + 'kg</strong>';
		} else if (imc > 35 && imc < 39.9) {
			result.style.display = 'flex';
			resultImg.src = 'img/graudois.svg';
			resultTitle.innerHTML = 'Seu IMC é <strong>' + imc.toPrecision(3) + '</strong><br>Está com obesidade grau II</br>O peso ideal é de <strong>' + idealWeight.toFixed(1) + 'kg</strong>';
		} else {
			result.style.display = 'flex';
			resultImg.src = 'img/grautres.svg';
			resultTitle.innerHTML = 'Seu IMC é <strong>' + imc.toPrecision(3) + '</strong><br>Está com obesidade grau III</br>O peso ideal é de <strong>' + idealWeight.toFixed(1) + 'kg</strong>';
		};
	};
});

newCalculate.addEventListener('click', function() {
	result.style.display = 'none';
	message.style.display = 'none';
	height.value = '';
	weight.value = '';
});

