
$(document).ready(() => {
    $('#copyrightP').html(`&copy; ${new Date().getFullYear()} - Siim Alas`);
    $(window).resize(() => {
        if (window.innerWidth <= 991) {
            $('#sidebar').removeClass('sticky-top');
        } else {
            $('#sidebar').addClass('sticky-top');
        }
    });
});
