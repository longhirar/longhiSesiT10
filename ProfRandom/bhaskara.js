const isBeta = true

result_div = document.createElement('div');
result_div.id = "result-div";
result_div.style = "text-align: left; font-family: 'Arial';";

function result(str) {
	result_div.innerHTML = ( result_div.innerHTML + str + '<br>' )
}

function solve() {

	result_div.innerHTML = " "

	//if(keys.includes($('#key_input').val()) == false) {
	//	alert("Chave errada! Veja se está escrito certo. Se não tiver uma chave você precisa comprar uma por 15k sonhos com o longhirar.")
	//	return;
	//}


	a = parseFloat(document.querySelector('#input-a').valueAsNumber)
	b = parseFloat(document.querySelector('#input-b').valueAsNumber)
	c = parseFloat(document.querySelector('#input-c').valueAsNumber)

	result(" ")

	if(a === 0) {
		result("Impossível de ser calculado por A é 0.");
		document.querySelector('.result-wrap').innerHTML = "";
		document.querySelector('.result-wrap').appendChild( result_div);
		return;
	}

	let delta = (b*b) + (-4*a*c) // Calculando Delta
	result("△ = b² + (-4×a×c)")
	result("△ = $b² + ($4ac)".replace('$b', b).replace('$4ac', (-4*a*c)))
	if (-4*a*c < 0) {
		result("△ = $b² - $4ac".replace('$b', b).replace('$4ac', (-4*a*c)*-1))
		result("△ = $b2 - $4ac".replace('$b2', b*b).replace('$4ac', (-4*a*c)*-1))
	} else {
		result("△ = $b² + $4ac".replace('$b', b).replace('$4ac', (-4*a*c)))
		result("△ = $b2 + $4ac".replace('$b2', b*b).replace('$4ac', (-4*a*c)))

	}
	
	result("△ = "+delta)
	result(" ")
	// △ > 0 -- 2 resoluções
	// △ = 0 -- 1 resolução
	// △ < 0 -- 0 resoluções
	
	
	if(delta < 0) { // Não existe raiz quadrada de numero negativo.
		result("O delta é menor do que 0, resolução impossível.")
	}
	if(delta == 0) {
		let res = (b*-1) / (2*a) // Optimização já que delta é 0
		result("<br>")
		result("x = "+res)
	}
	if(delta > 0) {
		result("<br>")
		result((b*-1)+" ± "+Math.sqrt(delta))
		result("-----------------") // Exibindo cálculo do ±
		result("   "+(2*a))
		result("<br>")

		let s = [0, 0] // Calculando S = [-, +]
		s[0] = ((b*-1) + (Math.sqrt(delta))) / (2*a)
		s[1] = ((b*-1) - (Math.sqrt(delta))) / (2*a)
	
		if(s[0] < s[1]) { // Escrevendo na ordem crescente
			result("S = ["+s[0]+", "+s[1]+"]")
		} else {
			result("S = ["+s[1]+", "+s[0]+"]")
		}
	result("<br>")
	}


	document.querySelector('.result-wrap').innerHTML = "";
	document.querySelector('.result-wrap').appendChild( result_div);
}

