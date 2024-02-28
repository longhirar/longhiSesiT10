
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

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

function login_show() {
    document.querySelector('.signup-wrap').classList.add('hidden');
    document.querySelector('.login-wrap').classList.remove('hidden');
    document.querySelector('.logged-in').classList.add('hidden');
}

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

function signup_show() {
    document.querySelector('.signup-wrap').classList.remove('hidden');
    document.querySelector('.login-wrap').classList.add('hidden');
    document.querySelector('.logged-in').classList.add('hidden');
}

function signup() {
    var input_name = document.querySelector('#input-name-signup').value;
    var input_email = document.querySelector('#input-email-signup').value;
    var input_pass =  document.querySelector('#input-password-signup').value;
    var input_pass2 =  document.querySelector('#input-password-2-signup').value;
    
    contas.forEach(conta => {
        if (conta.email === input_email) {
            alert("Uma conta já existe com esse email.")
            return;
        } 
    })

    if (input_pass != input_pass2) {
        alert("As duas senhas precisam ser iguais!");
        return;
    }

    if (!(/\d/.test(input_pass))) {
        alert("Sua senha não atende aos requisitos: Sua senha precisa ter pelo menos 1 número!");
        return;
    }
    if (!(input_pass.length >= 8)) {
        alert("Sua senha não atende aos requisitos: Sua senha precisa ter pelo menos 8 caractéres!");
        return;
    }
    if (!(/[A-Z]/.test(input_pass))) {
        alert("Sua senha não atende aos requisitos: Sua senha precisa ter uma letra maiúscula!");
        return;
    }


    contas.push({
        name: input_name,
        email: input_email,
        pass: input_pass,
    })

    login_show();
}