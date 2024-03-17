document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('nav--visible');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    nav.style.opacity = 0;

    setTimeout(() => {
        nav.style.opacity = 1;
        nav.style.transition = 'opacity 2s';
    }, 10); // Retraso mínimo para asegurar que se aplica después de que la página está cargada
});
