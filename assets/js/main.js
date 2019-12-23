function openMenu() {
    var menu = document.querySelector('nav'),
        menulink = document.querySelector('img.open');

    menulink.addEventListener('click', function(e) {
        menu.classList.toggle('active')
        e.preventDefault();
    });
}
function closeMenu() {
    var menu = document.querySelector('nav'),
        menulink = document.querySelector('img.close');

    menulink.addEventListener('click', function(e) {
        menu.classList.toggle('active')
        e.preventDefault();
    });
}