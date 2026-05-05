document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.getElementById('sliderWrapper');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;
        
        let startX = 0;
        let isDragging = false;

        function updateSlider() {
            const displacement = -(currentIndex * 100);
            sliderWrapper.style.transform = `translateX(${displacement}%)`;
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        if (nextBtn) nextBtn.addEventListener('click', showNextSlide);
        if (prevBtn) prevBtn.addEventListener('click', showPrevSlide);

        setInterval(showNextSlide, 3500);

        // Mobil Dokunmatik (Swipe) Eventleri
        sliderWrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        sliderWrapper.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
        });

        sliderWrapper.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;

            if (diffX > 50) {
                showNextSlide(); 
            } else if (diffX < -50) {
                showPrevSlide(); 
            }
        });
    }
});