document.addEventListener('DOMContentLoaded', function() {

    var filterBtns = document.querySelectorAll('.filter-btn');
    var menuItems = document.querySelectorAll('.menu-item');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {

            // aktif class'ı sıfırla
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filter = btn.dataset.filter;

            menuItems.forEach(function(item) {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'none';
                    item.offsetHeight; // reflow
                    item.style.animation = 'filterFadeIn 0.35s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // hamburger
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', function() {
        var isOpen = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

});