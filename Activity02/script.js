window.onscroll = async () => {
    if (window.scrollY != 0)
    {
        document.querySelector('header').className = "header-boxshadow"
    } else {
        document.querySelector('header').className = ''
    }
}

const contato_telefone = "5541999999999"

var contato_nome;
var contato_mensagem;

const conferirMsg = async () => {
    var nome = document.querySelector('#cont-nome').value;
    var msg = document.querySelector('#cont-msg').value;
    contato_nome = nome;
    contato_mensagem = msg;

    console.log("Nome:",nome,"\nMensagem:",msg)

    document.querySelector('#cont-nome-span').textContent = contato_nome;
    document.querySelector('#cont-msg-span').textContent = contato_mensagem;

    var link = "https://wa.me/$TEL$?text=Nome: $NOME$ - Mensagem: $MSG$".replace('$TEL$', contato_telefone).replace('$NOME$', contato_nome).replace('$MSG$', contato_mensagem)

    window.open(link);
}

