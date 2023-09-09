document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    var codigoSecreto = "/*666*/"; // Código secreto válido

    var codigoIngresado = document.getElementById("codigo").value;

    if (codigoIngresado === codigoSecreto) {
        // Redirigir al usuario a la página principal
        window.location.href = "/index.html";
    } else {
        // Mostrar mensaje de error
        alert("Código secreto incorrecto. Inténtalo nuevamente.");
    }
});
