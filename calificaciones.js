function calcularPromedio() {
    const nombre = document.getElementById("nombre").value.trim();
    const val1 = document.getElementById("cal1").value;
    const val2 = document.getElementById("cal2").value;
    const val3 = document.getElementById("cal3").value;
    const contenedorResultado = document.getElementById("resultado");

    
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (val1 === "" || val2 === "" || val3 === "") {
        alert("Por favor, ingresa las tres calificaciones.");
        return;
    }

    const cal1 = parseFloat(val1);
    const cal2 = parseFloat(val2);
    const cal3 = parseFloat(val3);

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert("Las calificaciones deben ser números válidos.");
        return;
    }

    if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10) {
        alert("Ninguna calificación puede ser menor que 0 ni mayor que 10.");
        return;
    }

    
    const promedio = (cal1 + cal2 + cal3) / 3;
    const promedioFormateado = promedio.toFixed(2);

    
    let estado = "";
    let claseEstado = "";
    let observacion = "";

    if (promedio >= 9 && promedio <= 10) {
        estado = "APROBADO";
        claseEstado = "aprobado";
        observacion = "Excelente desempeño";
    } else if (promedio >= 8 && promedio < 9) {
        estado = "APROBADO";
        claseEstado = "aprobado";
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7 && promedio < 8) {
        estado = "APROBADO";
        claseEstado = "aprobado";
        observacion = "Buen desempeño";
    } else if (promedio >= 6 && promedio < 7) {
        estado = "APROBADO";
        claseEstado = "aprobado";
        observacion = "Desempeño suficiente";
    } else {
        estado = "REPROBADO";
        claseEstado = "reprobado";
        observacion = "Necesita mejorar";
    }

    
    contenedorResultado.style.display = "block";
    contenedorResultado.innerHTML = `
        <p><strong>Nombre del estudiante:</strong> ${nombre}</p>
        <p><strong>Calificaciones:</strong> ${cal1}, ${cal2}, ${cal3}</p>
        <p><strong>Promedio obtenido:</strong> ${promedioFormateado}</p>
        <p><strong>Estado:</strong> <span class="${claseEstado}">${estado}</span></p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;
}