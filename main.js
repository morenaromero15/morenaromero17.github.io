document.addEventListener('DOMContentLoaded', function () {
    let cambiarColorBtn = document.getElementById('cambiarColorBtn');
    cambiarColorBtn.addEventListener('click', cambiarColorFondo);
})

function cambiarColorFondo() {
    let nuevoColor = '#7adceb';
    document.body.style.backgroundColor = nuevoColor;
}
const form = document.getElementById("myForm")

function validateEmail(email) {
    const regex = /^[^@]+[^|s@]+|.[^|s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const input = document.getElementById("email")
    const inputValue = input.value

    if (!validateEmail(inputValue)) {
        alert("por favor ingrese un correo electronico valido")
    } else {
        alert("correo electronico enviado correctamente")
    }
}

form.addEventListener("submit", function (lala) {
    lala.preventDefault()
    validateForm();
})
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")
    })
