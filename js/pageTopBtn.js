const pageTopBtn = document.getElementById('btn-pagetop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        pageTopBtn.classList.add('visible');

    } else {
        pageTopBtn.classList.remove('visible');
    }
}, false);

pageTopBtn.addEventListener('click', () => {
    window.scroll({top: 0});
}, false);

