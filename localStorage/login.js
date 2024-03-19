
const USUARIOS = [
    {
        "email": "admin@longhi.me",
        "pass": "123456789",
        "admin": true
    }
]

const login = () => {
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
        $('#page-login-error').textContent = 'Preencha todos os campos!'
    }

    alert(localStorage.getItem('usuario'));

}