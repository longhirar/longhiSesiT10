
contas = [
    {
        name: "Benjamin Bloon",
        email: "benjas@longhi.me",
        pass: "benjasbloon2424"
    },
    {
        name: "Adimininstrador",
        email: "admin@longhi.me",
        pass: "admin"
    },
]
var logado = false;

function login() {
    input_email = document.querySelector('#input-email').value;
    input_pass = document.querySelector('#input-password').value;

    contas.forEach(conta => {
        if (conta.email === input_email & conta.pass === input_pass) {
            document.querySelector('.login-wrap').classList.add('hidden');
            document.querySelector('.logged-in').classList.remove('hidden');
            document.querySelector('#greet-title').textContent = "Olá, "+conta.name;
            logado = true;
        }
        console.log(conta.email, conta.pass, input_email, input_pass);
    });

    if (!logado) {
        alert("Senha ou email incorreto!");
    }
}

function logout() {
    document.querySelector('.login-wrap').classList.remove('hidden');
    document.querySelector('.logged-in').classList.add('hidden');
    logado = false;
}