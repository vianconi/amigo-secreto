let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

    if (nombre !== "") {
        if (!listaAmigos.includes(nombre)) {
            listaAmigos.push(nombre);
            mostrarListaAmigos();
            document.getElementById('amigo').value = '';
        } else {
            mostrarResultado("Este nombre ya ha sido añadido.");
        }
    } else {
        mostrarResultado("Por favor, ingrese un nombre.");
    }
}

function mostrarListaAmigos() {
    let listaHtml = document.getElementById('listaAmigos');
    listaHtml.innerHTML = '';

    listaAmigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHtml.appendChild(li);
    });
}

function mostrarResultado(mensaje) {
    let resultadoHtml = document.getElementById('resultado');
    resultadoHtml.innerHTML = `<li>${mensaje}</li>`;
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        mostrarResultado("No hay suficientes amigos para sortear.");
        return;
    }

    let amigosRestantes = [...listaAmigos];
    let amigo = amigosRestantes.pop();

    let indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
    let amigoSecreto = amigosRestantes.splice(indiceAleatorio, 1)[0];

    while (amigo === amigoSecreto) {
        amigosRestantes.push(amigoSecreto);
        let nuevoIndice = Math.floor(Math.random() * amigosRestantes.length);
        amigoSecreto = amigosRestantes.splice(nuevoIndice, 1)[0];
    }

    mostrarResultado(`${amigoSecreto}`);

    listaAmigos = amigosRestantes;
}