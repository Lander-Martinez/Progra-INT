function convertir() {
  const campo = document.getElementById("temperatura");
  const tipo = document.getElementById("tipo").value;
  const resultado = document.getElementById("resultado");

  // 1. Validación: el campo no debe estar vacío
  if (campo.value.trim() === "") {
    alert("Por favor, ingresa una temperatura.");
    return;
  }

  // 2. Obtener la temperatura ingresada
  const temperatura = parseFloat(campo.value);

  let convertida;
  let unidadOrigen;
  let unidadDestino;
  let nombreConversion;

  // 3. Identificar el tipo de conversión y calcular
  if (tipo === "cf") {
    convertida = (temperatura * 9 / 5) + 32;
    unidadOrigen = "°C";
    unidadDestino = "°F";
    nombreConversion = "Celsius a Fahrenheit";
  } else {
    convertida = (temperatura - 32) * 5 / 9;
    unidadOrigen = "°F";
    unidadDestino = "°C";
    nombreConversion = "Fahrenheit a Celsius";
  }

  // 4. Mostrar el resultado dentro de la página
  resultado.innerHTML =
    "<p>Temperatura ingresada: " + temperatura + " " + unidadOrigen + "</p>" +
    "<p>Tipo de conversión: " + nombreConversion + "</p>" +
    "<p class='final'>Resultado: " + convertida.toFixed(2) + " " + unidadDestino + "</p>";
}

document.getElementById("btnConvertir").addEventListener("click", convertir);