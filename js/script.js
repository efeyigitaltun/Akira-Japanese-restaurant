document.addEventListener('DOMContentLoaded', function() {

    var sliderWrapper = document.getElementById('sliderWrapper');
    var slides = document.querySelectorAll('.slide');
    var prevBtn = document.querySelector('.prev');
    var nextBtn = document.querySelector('.next');

    if (slides.length === 0) return;

    var currentIndex = 0;
    var total = slides.length;
    var startX = 0;
    var dragging = false;

    function goTo(index) {
        sliderWrapper.style.transform = 'translateX(' + -(index * 100) + '%)';
    }

    function next() {
        currentIndex = (currentIndex + 1) % total;
        goTo(currentIndex);
    }

    function prev() {
        currentIndex = (currentIndex - 1 + total) % total;
        goTo(currentIndex);
    }

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    setInterval(next, 3500);

    // İlk halindeki swipe desteği
    sliderWrapper.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        dragging = true;
    });

    sliderWrapper.addEventListener('touchmove', function(e) {
        // boş bırakıldı
    });

    sliderWrapper.addEventListener('touchend', function(e) {
        if (!dragging) return;
        dragging = false;
        var diff = startX - e.changedTouches[0].clientX;
        if (diff > 50) next();
        else if (diff < -50) prev();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            next();
        } else if (e.key === 'ArrowLeft') {
            prev();
        }
    });

});
