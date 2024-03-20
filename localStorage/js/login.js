
var USUARIOS = null

const login = async () => {
    if (USUARIOS === null) {
        USUARIOS = await jsonLoad('dados/users.json');
    }

    let inputEmail = $('#page-login-input-email');
    let inputPass = $('#page-login-input-password');
    let email = inputEmail.val();
    let pass = inputPass.val();

    if(email != '' && pass != '') {
        USUARIOS.forEach(u => {
            if (u.email === email && u.pass === pass) {
                localStorage.setItem('usuario', JSON.stringify(u));
            }
        })
    } else {
        document.querySelector('#page-login-error').textContent = 'Preencha todos os campos!'
    }

    if (localStorage.getItem('usuario') === null) {
        document.querySelector('#page-login-error').textContent = "Usuário ou senha incorretos!"
        return;
    }

    showPage('page-store');
}