// Rezervasyon formu gönderilince çıkan mesaj
function handleSubmit(e) {
    e.preventDefault();
    var msg = document.getElementById('formSuccess');
    msg.style.opacity = '1';
    setTimeout(function() {
        msg.style.opacity = '0';
    }, 4000);
}

document.addEventListener('DOMContentLoaded', function() {

    // scroll animasyonları için observer
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(function(el) {
        observer.observe(el);
    });

    // hamburger menü kısmı
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