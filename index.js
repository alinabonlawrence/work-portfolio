const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})