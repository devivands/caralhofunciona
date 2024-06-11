document.addEventListener('DOMContentLoaded', function() {
    const redirectButton = document.getElementById('center-button');

    redirectButton.addEventListener('click', function() {
        window.location.href = 'pagina-jogar.html';
        // Caminho relativo para a página na pasta anterior
    });
});
