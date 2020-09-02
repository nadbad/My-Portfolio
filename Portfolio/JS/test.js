window.addEventListener('load', hideLoader());

function hideLoader() {
    loader = document.querySelector('.loader');
    everything = document.querySelector('.everything')

    setTimeout(function () {
        $(loader).fadeOut('slow');
    }, 2400);
    setTimeout(function () {
        everything.style.visibility = 'visible';
    }, 3000);
};
