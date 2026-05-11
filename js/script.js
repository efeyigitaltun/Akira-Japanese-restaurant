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

document.addEventListener('DOMContentLoaded', function() {

    var container = document.getElementById('mapContainer');
    if (!container) return;

    var MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.624484676938!2d35.51097782893328!3d38.70733394913525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b0d34173898ed%3A0x910da020568bd0b8!2sJoe%20Sushi%20Bar!5e0!3m2!1sen!2str!4v1778265478531!5m2!1sen!2str';

    var observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            var iframe = document.createElement('iframe');
            iframe.src = MAP_SRC;
            iframe.className = 'map-iframe';
            iframe.allowFullscreen = true;
            iframe.title = 'Akira Restoran Konumu';
            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
            container.innerHTML = '';
            container.appendChild(iframe);
            observer.disconnect();
        }
    }, { rootMargin: '200px' });

    observer.observe(container);

});