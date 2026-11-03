function verificarEdad() {
    // Obtener el valor ingresado en el input
    let entrada = document.getElementById("edad").value;
 
    // Quitar espacios al inicio y al final
    entrada = entrada.trim();
 
    // Convertir el texto a número
    let edad = Number(entrada);
 
    if (entrada === "") {
        // El campo está vacío
        alert("Por favor, ingresa tu edad.");
    } else if (isNaN(edad) || edad < 0) {
        // No es un número válido o es negativo
        alert("Ingresa un número válido mayor o igual a 0.");
    } else if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}
 
