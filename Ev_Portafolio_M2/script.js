document.addEventListener('DOMContentLoaded', function () {
    var titulo = document.getElementById('titulo');
    var titulo2 = document.getElementById('titulo2');
    titulo.addEventListener('mouseover', function () {
        titulo.style.fontSize = 'xx-large';
        titulo2.style.display = 'block';
    });
})

document.addEventListener('DOMContentLoaded', function () {

    var titulos = document.getElementById('tituloreseña');
    var linea = document.getElementById('lin1');
    titulos.addEventListener('mouseover', function () {
        linea.style.display = 'block'
    });
});

document.addEventListener('DOMContentLoaded', function () {

    var habilidades = document.getElementById('tituloHabilidades');
    var lin2 = document.getElementById('lin2');
    habilidades.addEventListener('mouseover', function () {
        lin2.style.display = 'block'
    });
});

document.addEventListener('DOMContentLoaded', function () {

    var logros = document.getElementById('tituloLogros');
    var lin3 = document.getElementById('lin3');
    logros.addEventListener('mouseover', function () {
        lin3.style.display = 'block'
    });
});