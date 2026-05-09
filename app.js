/* ═══════════════════════════════════════════════
   AKIRA — ANA SAYFA UYGULAMA MANTIĞI
   Form, Fade-in Observer, Hamburger Menü
═══════════════════════════════════════════════ */

/* ── Rezervasyon Formu ────────────────────────── */
function handleSubmit(e) {
    e.preventDefault();
    const successMsg = document.getElementById('formSuccess');
    successMsg.style.opacity = '1';
    setTimeout(() => { successMsg.style.opacity = '0'; }, 4000);
}

/* ── Sayfa Yüklenince ─────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

    /* Fade-in Scroll Animasyonu */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    /* Hamburger Mobil Menü */
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