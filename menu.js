/* ═══════════════════════════════════════════════
   AKIRA — MENÜ SAYFASI UYGULAMA MANTIĞI
   Filtre Butonları, Hamburger Menü
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

    /* ── Kategori Filtreleme ──────────────────── */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems  = document.querySelectorAll('.menu-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            menuItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'none';
                    item.offsetHeight; /* reflow tetikle */
                    item.style.animation = 'filterFadeIn 0.35s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    /* ── Hamburger Mobil Menü ─────────────────── */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

});