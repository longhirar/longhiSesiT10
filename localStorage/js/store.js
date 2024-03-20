
const storePageSwitch = () => {
    var user = JSON.parse(localStorage.getItem('usuario'))

    document.body.classList.add('animation-login2store');
    document.querySelector('#page-store-title').textContent = `Welcome to Celestial Perfumes, ${user.name}!`
}