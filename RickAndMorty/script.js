
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
            pessoaDiv.classList.add('char-div')
            var genderHTML = (pessoa.gender == "Female" || pessoa.gender == "Male") ? `<span class="material-symbols-outlined">${pessoa.gender.toLowerCase()}</span> ${pessoa.gender}` : pessoa.gender;
            var statusHTML = ""
            if (pessoa.status == "Alive") {
                statusHTML = `<span class="char-status char-status-alive"> Alive </span>`
            } else if (pessoa.status == "Dead") {
                statusHTML = `<span class="char-status char-status-dead"> Dead </span>`
            } else {
                statusHTML = `<span class="char-status char-status-unknown">${pessoa.status}</span>`
            }
            pessoaDiv.innerHTML = `
                <img class="char-img" src="${pessoa.image}" alt="${pessoa.name}" />
                
                <h1 class="char-name">${pessoa.name}</h1>
                <h5 class="char-desc">${pessoa.species} - ${statusHTML} - ${genderHTML}</h5>
            `
            contentDiv.appendChild(pessoaDiv);
        })
    } catch(e) {
        console.log(e);
    }
}

const searchByName = () => {

}