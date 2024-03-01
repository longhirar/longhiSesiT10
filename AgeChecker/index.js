
const checkAge = () => {
    var birthdate = document.querySelector('#input-birthdate').valueAsDate;
    var el_res = document.querySelector('#result');
    var el_age = document.querySelector('#clientAge');

    if(!birthdate){
        el_res.textContent = "Input the full date!";
        el_res.style.color = "red";
        return;
    } else {
        el_res.textContent = "";
        el_res.style.color = "black";
    }

    // Convert milliseconds to years
    var millisecondAge = new Date() - birthdate
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Approximate value for an average year
    const age = Math.floor(millisecondAge / millisecondsPerYear);

    const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.43
    const monthAge = (Math.floor(millisecondAge / millisecondsPerMonth) % 12);

    const millisecondsPerDay = 1000 * 60 * 60 * 24
    const dayAge = Math.floor(Math.floor(millisecondAge / millisecondsPerDay) % 30.43);
    
    el_age.innerHTML = `${age} ${age!=1?"anos":"ano"}, ${monthAge} ${monthAge!=1?"meses":"mês"} e ${dayAge} ${dayAge!=1?"dias":"dia"} de idade!!`
    el_res.textContent = age >= 18 ? "Entrada Permitida 👍" : "Entrada Proibida 🔞";
    el_res.style.color = age >= 18 ? "green" : "red";
}