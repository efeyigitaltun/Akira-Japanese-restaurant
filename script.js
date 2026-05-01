document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.getElementById('sliderWrapper');
    const slides = document.querySelectorAll('.slide');

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;

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

        // Buton eventleri
        nextBtn.addEventListener('click', showNextSlide);
        prevBtn.addEventListener('click', showPrevSlide);

        // Otomatik kaydırma
        setInterval(showNextSlide, 3000);
    }
});