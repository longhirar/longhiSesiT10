
const adicionarItem = () => {
    var nome = document.querySelector('#input-nome').value;
    var valor = document.querySelector('#input-valor').valueAsNumber;
    var qtd = document.querySelector('#input-qtd').valueAsNumber;

    console.log(nome, valor, qtd);

    var tr = document.createElement('tr');
    var tdnome = document.createElement('td');
    tdnome.textContent = nome;
    tr.appendChild(tdnome);
    var tdvalor = document.createElement('td');
    tdvalor.textContent = valor + "Dabloons";
    tr.appendChild(tdvalor);
    var tdqtd = document.createElement('td');
    tdqtd.textContent = qtd;
    tr.appendChild(tdqtd);
    
    document.querySelector('.tabela').appendChild(tr);
}