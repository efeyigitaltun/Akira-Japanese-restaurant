document.addEventListener('DOMContentLoaded', function() {

    var filterBtns = document.querySelectorAll('.filter-btn');
    var menuItems = document.querySelectorAll('.menu-item');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {

            // butonu sıfırla ve aktif yap
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filter = btn.dataset.filter;

            menuItems.forEach(function(item) {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'none';
                    item.offsetHeight; // Animasyonu yeniden tetiklemek için (reflow)
                    item.style.animation = 'filterFadeIn 0.35s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

ß
});