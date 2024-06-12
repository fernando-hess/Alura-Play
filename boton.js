function darkMode() {
    // Cambia el modo oscuro del body
    document.body.classList.toggle('dark-mode');

    // Selecciona todos los elementos que deben cambiar al modo oscuro
    var elementosACambiarDeColor = [
        '.cabecera__container',
        '.menu__container',
        '.superior__seccion__container',
        '.rodapie__container',
        '.detalles__video h3',
        '.detalles__video p',
        '#modoOscuroBtn i',
        '#modoOscuroBtn',
        '.videos__item'
    ];

    // Itera sobre cada selector y cambia el modo oscuro de los elementos
    elementosACambiarDeColor.forEach(function(selector) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.classList.toggle('dark-mode');
        });
    });

    // intercambio del logo
    var logo = document.querySelector('.logo__item');
    var currentBackground = getComputedStyle(logo).getPropertyValue('background-image');
    var newBackground = currentBackground.includes('Logo.png') ? 'url("../img/cabecera/Logo(blanco)(1).png")' : 'url("../img/cabecera/Logo.png")';
    logo.style.backgroundImage = newBackground;
}

