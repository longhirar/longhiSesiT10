
const fetchPersonagens = async () => {
    const page = document.querySelector('#input-page').value || 1;
    try {
        const dadosRaw = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const dados = await dadosRaw.json()
        console.log(dados);

        if (dados.error) {
            alert(dados.error);
            return;
        }


        var contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = "";
        dados.results.forEach(pessoa => {
            var pessoaDiv = document.createElement('div');
            var genderHTML = (pessoa.gender == "Female" || pessoa.gender == "Male") ? `<span class="material-symbols-outlined">${pessoa.gender.toLowerCase()}</span>` : pessoa.gender;
            pessoaDiv.innerHTML = `<h1>${pessoa.name}</h1><h5>${pessoa.species} - ${pessoa.status} - ${genderHTML}</h5>`
            contentDiv.appendChild(pessoaDiv);
        })
    } catch(e) {
        console.log(e);
    }
}