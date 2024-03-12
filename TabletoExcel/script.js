
var TABELA = []

const adicionarItem = () => {
    var nome = document.querySelector('#input-nome');
    var valor = document.querySelector('#input-valor');
    var qtd = document.querySelector('#input-qtd');

    console.log(nome, valor, qtd);

    var tr = document.createElement('tr');
    var tdnome = document.createElement('td');
    tdnome.textContent = nome.value;
    tr.appendChild(tdnome);
    var tdvalor = document.createElement('td');
    tdvalor.textContent = valor.valueAsNumber + "Dabloons";
    tr.appendChild(tdvalor);
    var tdqtd = document.createElement('td');
    tdqtd.textContent = qtd.valueAsNumber;
    tr.appendChild(tdqtd);
    
    document.querySelector('#tabela').appendChild(tr);

    TABELA.push([nome.value, valor.valueAsNumber, qtd.valueAsNumber]);
    console.log(TABELA);


}

const criarXlsx = () => {
    var tabela = document.querySelector('#tabela');
    var nomeArquivo = "tabela.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela"});
    XLSX.writeFile(wb, nomeArquivo);
}