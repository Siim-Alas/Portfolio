
let infoCollapsed = false;

document.addEventListener('scroll', () => {
    if (window.innerWidth <= 992) {
        if (infoCollapsed) {
            if (window.pageYOffset === 0) {
                $('.collapse').collapse('show');
                infoCollapsed = false;
            }
        } else {
            if (window.pageYOffset > 0.2 * window.innerHeight) {
                $('.collapse').collapse('hide');
                infoCollapsed = true;
            }
        }
    } else {
        $('.collapse').collapse('show');
        $('#sidebar').css('height', '100vh');
        infoCollapsed = false;
    }
});

$(document).ready(() => {
    $('#copyrightP').html(`&copy; ${new Date().getFullYear()} - Siim Alas`);
});

