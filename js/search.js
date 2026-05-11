var SEARCH_INDEX = [
    { title: 'Ana Sayfa',              desc: 'Akira giriş hero slider',                                                    url: 'index.html',                    icon: '🏠', img: null,                            tag: 'Sayfa' },
    { title: 'Hakkımızda',             desc: 'Michelin mutfak felsefesi 18 yıl deneyim',                                   url: 'index.html#about',              icon: '👨‍🍳', img: null,                           tag: 'Sayfa' },
    { title: 'Rezervasyon & İletişim', desc: 'Tokyo Shinjuku rezervasyon telefon e-posta çalışma saatleri',                url: 'index.html#contact',            icon: '📞', img: null,                            tag: 'Sayfa' },
    { title: 'Menü',                   desc: 'Tüm yemekler içecekler tatlılar sushi ramen tempura',                        url: 'menu.html',                     icon: '📋', img: null,                            tag: 'Sayfa' },

    { title: 'Sushi Platter',          desc: 'Somon orkinos karides nigiri maki rulo wasabi zencefil ₺520',                url: 'menu.html#item-sushi-platter',  img: 'images/sushi-platter.webp',              tag: 'Sushi & Sashimi' },
    { title: 'Somon Nigiri',           desc: 'Taze Atlantik somonu beş adet nigiri yuzu sosu filiz ₺380',                  url: 'menu.html#item-somon-nigiri',   img: 'images/nigiri-sushi.webp',               tag: 'Sushi & Sashimi' },

    { title: 'Tonkotsu Ramen',         desc: '24 saat domuz kemiği suyu chashu ağaç kulağı mantarı ajitama yumurtası ₺450', url: 'menu.html#item-tonkotsu-ramen', img: 'images/tonkotsu-ramen.webp',            tag: 'Ramen & Erişte' },
    { title: 'Shoyu Ramen',            desc: 'Soya sosu dashi chashu narutomaki balık keki yarım yumurta ₺420',            url: 'menu.html#item-shoyu-ramen',    img: 'images/shoyu-ramen.webp',                tag: 'Ramen & Erişte' },
    { title: 'Udon Noodle Soup',       desc: 'Kalın buğday erişte dashi tofu kızarmış tempura sıcak servis ₺360',          url: 'menu.html#item-udon-soup',      img: 'images/udon-soup.webp',                  tag: 'Ramen & Erişte' },

    { title: 'Shrimp Tempura',         desc: 'Dev kaplan karidesi çıtır paneleme daikon tentsuyu sosu ₺420',              url: 'menu.html#item-shrimp-tempura', img: 'images/shrimp-tempura.webp',             tag: 'Tempura & Kızartma' },
    { title: 'Gyoza',                  desc: 'Domuz eti lahana kızartma Japon mantısı ponzu sosu ₺280',                    url: 'menu.html#item-gyoza',          img: 'images/gyoza.webp',                      tag: 'Tempura & Kızartma' },
    { title: 'Takoyaki',               desc: 'Ahtapot Osaka usulü hamur topları takoyaki sosu katsuobushi ₺300',           url: 'menu.html#item-takoyaki',       img: 'images/takoyaki.webp',                   tag: 'Tempura & Kızartma' },

    { title: 'Chicken Katsu Curry',    desc: 'Panko kaplı tavuk Japon köri pirinç ıspanak havuç ₺480',                    url: 'menu.html#item-chicken-katsu-curry', img: 'images/chicken-katsu-curry.webp',   tag: 'Ana Yemek' },
    { title: 'Izgara Teriyaki',        desc: 'Teriyaki soslu tavuk şiş marine susam marul ₺440',                          url: 'menu.html#item-teriyaki',       img: 'images/ızgara-teriyaki.webp',            tag: 'Ana Yemek' },

    { title: 'Miso Soup',              desc: 'Beyaz miso çorbası tofu deniz yosunu somon dashi ₺220',                     url: 'menu.html#item-miso-soup',      img: 'images/miso-soup.webp',                  tag: 'Başlangıç' },
    { title: 'Edamame',                desc: 'Buharda soya fasulyesi deniz tuzu hafif atıştırmalık ₺200',                 url: 'menu.html#item-edamame',        img: 'images/edamame.webp',                    tag: 'Başlangıç' },

    { title: 'Matcha Mochi',           desc: 'Uji matcha tozu mochi çilek sosu nane ₺240',                               url: 'menu.html#item-matcha-mochi',   img: 'images/matcha-mochi.webp',               tag: 'Tatlı' },
    { title: 'Dango',                  desc: 'Pirinç unu topları soya sosu glazür kinako street food ₺220',               url: 'menu.html#item-dango',          img: 'images/dango.webp',                      tag: 'Tatlı' },
    { title: 'Japanese Puding',        desc: 'Kremsi karamel puding Japon usulü bitter ₺240',                             url: 'menu.html#item-japanese-puding', img: 'images/japanese-puding.webp',           tag: 'Tatlı' },

    { title: 'Nigori Sake',            desc: 'Kremsi bulutlu Japon pirinç içkisi tatlı ₺260',                             url: 'menu.html#item-nigori-sake',    img: 'images/bulutlu-sake.webp',               tag: 'İçecek' },
    { title: 'Umeshu',                 desc: 'Japon erik likörü tatlı ekşi buz üzerinde ₺240',                            url: 'menu.html#item-umeshu',         img: 'images/umeshu.webp',                     tag: 'İçecek' },
    { title: 'Yuzu Cocktail',          desc: 'Yuzu suyu Japon cin salatalık ev yapımı kokteyl ₺300',                      url: 'menu.html#item-yuzu-cocktail',  img: 'images/yuzu.webp',                       tag: 'İçecek' },
    { title: 'Ramune',                 desc: 'Japon mermer şişeli gazlı içecek portakal aroması ₺200',                    url: 'menu.html#item-ramune',         img: 'images/ramune.webp',                     tag: 'İçecek' },
    { title: 'Sencha Çayı',            desc: 'Geleneksel Japon kyusu demliği yeşil çay ₺200',                             url: 'menu.html#item-sencha',         img: 'images/sencha-çayı.webp',                tag: 'İçecek' },
];

function searchItems(query) {
    var q = query.toLowerCase().trim();
    if (q.length < 1) return [];
    return SEARCH_INDEX.filter(function(item) {
        var haystack = (item.title + ' ' + item.desc + ' ' + item.tag).toLowerCase();
        return haystack.includes(q);
    }).slice(0, 7);
}

function navigateToResult(url) {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var hashIndex = url.indexOf('#');
    var page = hashIndex >= 0 ? url.slice(0, hashIndex) : url;
    var hash = hashIndex >= 0 ? url.slice(hashIndex + 1) : null;
    var targetPage = page || 'index.html';

    var samePage = currentPage === targetPage || (currentPage === '' && targetPage === 'index.html');

    if (samePage) {
        if (hash) {
            var el = document.getElementById(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('search-highlight');
                setTimeout(function() { el.classList.remove('search-highlight'); }, 2500);
            }
        }
    } else {
        window.location.href = url;
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var searchContainer = document.querySelector('.search-container');
    var searchInput = document.querySelector('.search-input');
    var searchBtn = document.querySelector('.search-btn');

    if (!searchContainer || !searchInput || !searchBtn) return;

    var dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';
    searchContainer.appendChild(dropdown);

    function expandInput() {
        searchInput.style.width = '160px';
        searchInput.style.opacity = '1';
    }

    function closeDropdown() {
        dropdown.classList.remove('open');
        searchInput.style.width = '';
        searchInput.style.opacity = '';
        searchInput.value = '';
    }

    function triggerSearch(query) {
        if (!query.trim()) return;
        expandInput();
        renderDropdown(searchItems(query), query);
    }

    function renderDropdown(results, query) {
        dropdown.innerHTML = '';

        if (results.length === 0) {
            dropdown.innerHTML =
                '<div class="search-no-result">' +
                    '<span>Sonuç bulunamadı</span>' +
                    '<span class="search-no-result-hint">"' + query + '" için eşleşme yok</span>' +
                '</div>';
        } else {
            results.forEach(function(item) {
                var a = document.createElement('a');
                a.className = 'search-result-item';
                a.href = item.url;

                var thumb = item.img
                    ? '<img src="' + item.img + '" alt="' + item.title + '" class="search-result-img">'
                    : '<span class="search-result-icon" aria-hidden="true">' + item.icon + '</span>';

                a.innerHTML =
                    thumb +
                    '<span class="search-result-content">' +
                        '<span class="search-result-title">' + item.title + '</span>' +
                        '<span class="search-result-tag">' + item.tag + '</span>' +
                    '</span>';

                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    closeDropdown();
                    navigateToResult(item.url);
                });

                dropdown.appendChild(a);
            });
        }

        dropdown.classList.add('open');
    }

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var q = searchInput.value.trim();
        if (q.length >= 1) {
            triggerSearch(q);
        } else {
            expandInput();
            searchInput.focus();
        }
    });

    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') triggerSearch(searchInput.value);
        if (e.key === 'Escape') { closeDropdown(); searchInput.blur(); }
    });

    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) closeDropdown();
    });

    // sayfa hash'le açıldıysa o elemente scroll et
    if (window.location.hash) {
        var hash = window.location.hash.slice(1);
        var el = document.getElementById(hash);
        if (el) {
            setTimeout(function() {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('search-highlight');
                setTimeout(function() { el.classList.remove('search-highlight'); }, 2500);
            }, 400);
        }
    }

});
// Sayfa tamamen yüklendiğinde loader ekranını yavaşça gizle
window.addEventListener('load', function() {
    const loader = document.getElementById('siteLoader');
    if (loader) {
        loader.classList.add('hidden');
    }
});