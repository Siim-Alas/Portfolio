
function setSidebar() {
    if (window.innerWidth <= 991) {
        $('#sidebar').removeClass('sticky-top');
    } else {
        $('#sidebar').addClass('sticky-top');
    }
}

$(document).ready(() => {
    setSidebar();
    $('#copyrightP').html(`&copy; ${new Date().getFullYear()} - Siim Alas`);

    $(window).resize(() => {
        setSidebar();
    });
});
