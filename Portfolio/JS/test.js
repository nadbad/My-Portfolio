window.addEventListener('load', hideLoader())

function hideLoader() {
    everything = document.querySelector('.everything');
    loader = document.querySelector('.loader');

    setTimeout(function () {
        $(loader).fadeOut('slow');
    }, 2500);
    setTimeout(function () {
        $(everything).fadeIn('slow');
    }, 3000);
}