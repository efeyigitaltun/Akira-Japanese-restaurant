/* ═══════════════════════════════════════════════
   AKIRA — ARAMA MOTORU
═══════════════════════════════════════════════ */

const SEARCH_INDEX = [
  // ── Sayfalar ───────────────────────────────────
  { title: 'Ana Sayfa',              desc: 'Akira giriş hero slider',                                            url: 'index.html',          icon: '🏠', img: null, tag: 'Sayfa' },
  { title: 'Hakkımızda',             desc: 'Şef Kenji Takeshi Michelin mutfak felsefesi 18 yıl deneyim',         url: 'index.html#about',    icon: '👨‍🍳', img: null, tag: 'Sayfa' },
  { title: 'Rezervasyon & İletişim', desc: 'Tokyo Shinjuku rezervasyon telefon e-posta çalışma saatleri',        url: 'index.html#contact',  icon: '📞', img: null, tag: 'Sayfa' },
  { title: 'Menü',                   desc: 'Tüm yemekler içecekler tatlılar sushi ramen tempura',                url: 'menu.html',           icon: '📋', img: null, tag: 'Sayfa' },

  // ── Sushi & Sashimi ────────────────────────────
  { title: 'Sushi Platter',  desc: 'Somon orkinos karides nigiri maki rulo wasabi zencefil $23',  url: 'menu.html#item-sushi-platter', img: 'images/sushi-platter.jpg',   tag: 'Sushi & Sashimi' },
  { title: 'Somon Nigiri',   desc: 'Taze Atlantik somonu beş adet nigiri yuzu sosu filiz $17',    url: 'menu.html#item-somon-nigiri',  img: 'images/nigiri-sushi.jpg',    tag: 'Sushi & Sashimi' },

  // ── Ramen & Erişte ─────────────────────────────
  { title: 'Tonkotsu Ramen',   desc: '24 saat domuz kemiği suyu chashu ağaç kulağı mantarı ajitama yumurtası $20', url: 'menu.html#item-tonkotsu-ramen', img: 'images/tonkotsu-ramen.jpg', tag: 'Ramen & Erişte' },
  { title: 'Shoyu Ramen',      desc: 'Soya sosu dashi chashu narutomaki balık keki yarım yumurta $18',             url: 'menu.html#item-shoyu-ramen',    img: 'images/shoyu-ramen.jpg',    tag: 'Ramen & Erişte' },
  { title: 'Udon Noodle Soup', desc: 'Kalın buğday erişte dashi tofu kızarmış tempura sıcak servis $16',           url: 'menu.html#item-udon-soup',      img: 'images/udon-soup.jpg',      tag: 'Ramen & Erişte' },

  // ── Tempura & Kızartma ─────────────────────────
  { title: 'Shrimp Tempura', desc: 'Dev kaplan karidesi çıtır paneleme daikon tentsuyu sosu $18',      url: 'menu.html#item-shrimp-tempura', img: 'images/shrimp-tempura.jpg', tag: 'Tempura & Kızartma' },
  { title: 'Gyoza',          desc: 'Domuz eti lahana kızartma Japon mantısı ponzu sosu $12',            url: 'menu.html#item-gyoza',          img: 'images/gyoza.jpg',          tag: 'Tempura & Kızartma' },
  { title: 'Takoyaki',       desc: 'Ahtapot Osaka usulü hamur topları takoyaki sosu katsuobushi $13',   url: 'menu.html#item-takoyaki',       img: 'images/takoyaki.jpg',       tag: 'Tempura & Kızartma' },

  // ── Ana Yemekler ───────────────────────────────
  { title: 'Chicken Katsu Curry', desc: 'Panko kaplı tavuk Japon köri pirinç ıspanak havuç $21', url: 'menu.html#item-chicken-katsu-curry', img: 'images/chicken-katsu-curry.jpg', tag: 'Ana Yemek' },
  { title: 'Izgara Teriyaki',     desc: 'Teriyaki soslu tavuk şiş marine susam marul $19',        url: 'menu.html#item-teriyaki',            img: 'images/ızgara-teriyaki.jpg',     tag: 'Ana Yemek' },

  // ── Başlangıçlar ───────────────────────────────
  { title: 'Miso Soup', desc: 'Beyaz miso çorbası tofu deniz yosunu somon dashi $7',       url: 'menu.html#item-miso-soup', img: 'images/miso-soup.jpg', tag: 'Başlangıç' },
  { title: 'Edamame',   desc: 'Buharda soya fasulyesi deniz tuzu hafif atıştırmalık $6',   url: 'menu.html#item-edamame',   img: 'images/edamame.jpg',   tag: 'Başlangıç' },

  // ── Tatlılar ───────────────────────────────────
  { title: 'Matcha Mochi',    desc: 'Uji matcha tozu mochi çilek sosu nane $9',                     url: 'menu.html#item-matcha-mochi',    img: 'images/matcha-mochi.jpg',    tag: 'Tatlı' },
  { title: 'Dango',           desc: 'Pirinç unu topları soya sosu glazür kinako street food $8',     url: 'menu.html#item-dango',           img: 'images/dango.jpg',           tag: 'Tatlı' },
  { title: 'Japanese Puding', desc: 'Kremsi karamel puding Japon usulü bitter $9',                   url: 'menu.html#item-japanese-puding', img: 'images/japanese-puding.jpg', tag: 'Tatlı' },

  // ── İçecekler ──────────────────────────────────
  { title: 'Nigori Sake',   desc: 'Kremsi bulutlu Japon pirinç içkisi tatlı $11',          url: 'menu.html#item-nigori-sake',   img: 'images/bulutlu-sake.jpg',  tag: 'İçecek' },
  { title: 'Umeshu',        desc: 'Japon erik likörü tatlı ekşi buz üzerinde $10',         url: 'menu.html#item-umeshu',        img: 'images/umeshu.jpg',        tag: 'İçecek' },
  { title: 'Yuzu Cocktail', desc: 'Yuzu suyu Japon cin salatalık ev yapımı kokteyl $13',   url: 'menu.html#item-yuzu-cocktail', img: 'images/yuzu.jpg',          tag: 'İçecek' },
  { title: 'Ramune',        desc: 'Japon mermer şişeli gazlı içecek portakal aroması $5',  url: 'menu.html#item-ramune',        img: 'images/ramune.jpg',        tag: 'İçecek' },
  { title: 'Sencha Çayı',   desc: 'Geleneksel Japon kyusu demliği yeşil çay $5',           url: 'menu.html#item-sencha',        img: 'images/sencha-çayı.jpg',   tag: 'İçecek' },
];

/* ── Arama Fonksiyonu ─────────────────────────── */
function searchItems(query) {
  const q = query.toLowerCase().trim();
  if (q.length < 1) return [];
  return SEARCH_INDEX.filter(item => {
    const haystack = (item.title + ' ' + item.desc + ' ' + item.tag).toLowerCase();
    return haystack.includes(q);
  }).slice(0, 7);
}

/* ── Sonuca Git ───────────────────────────────── */
function navigateToResult(url) {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const hashIndex   = url.indexOf('#');
  const page        = hashIndex >= 0 ? url.slice(0, hashIndex) : url;
  const hash        = hashIndex >= 0 ? url.slice(hashIndex + 1) : null;
  const targetPage  = page || 'index.html';

  const samePage =
    currentPage === targetPage ||
    (currentPage === '' && targetPage === 'index.html');

  if (samePage) {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('search-highlight');
        setTimeout(() => el.classList.remove('search-highlight'), 2500);
      }
    }
  } else {
    window.location.href = url;
  }
}

/* ── Ana Mantık ───────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const searchContainer = document.querySelector('.search-container');
  const searchInput     = document.querySelector('.search-input');
  const searchBtn       = document.querySelector('.search-btn');

  if (!searchContainer || !searchInput || !searchBtn) return;

  const dropdown = document.createElement('div');
  dropdown.className = 'search-dropdown';
  searchContainer.appendChild(dropdown);

  function expandInput() {
    searchInput.style.width   = '160px';
    searchInput.style.opacity = '1';
  }

  function closeDropdown() {
    dropdown.classList.remove('open');
    searchInput.style.width   = '';
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
      dropdown.innerHTML = `
        <div class="search-no-result">
          <span>Sonuç bulunamadı</span>
          <span class="search-no-result-hint">"${query}" için eşleşme yok</span>
        </div>`;
    } else {
      results.forEach(item => {
        const a = document.createElement('a');
        a.className = 'search-result-item';
        a.href      = item.url;

        /* Resim varsa <img>, yoksa emoji kutusu */
        const thumbHTML = item.img
          ? `<img src="${item.img}" alt="${item.title}" class="search-result-img">`
          : `<span class="search-result-icon" aria-hidden="true">${item.icon}</span>`;

        a.innerHTML = `
          ${thumbHTML}
          <span class="search-result-content">
            <span class="search-result-title">${item.title}</span>
            <span class="search-result-tag">${item.tag}</span>
          </span>
        `;

        a.addEventListener('click', e => {
          e.preventDefault();
          closeDropdown();
          navigateToResult(item.url);
        });

        dropdown.appendChild(a);
      });
    }

    dropdown.classList.add('open');
  }

  searchBtn.addEventListener('click', e => {
    e.preventDefault();
    const q = searchInput.value.trim();
    if (q.length >= 1) triggerSearch(q);
    else { expandInput(); searchInput.focus(); }
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter')  triggerSearch(searchInput.value);
    if (e.key === 'Escape') { closeDropdown(); searchInput.blur(); }
  });

  document.addEventListener('click', e => {
    if (!searchContainer.contains(e.target)) closeDropdown();
  });

  if (window.location.hash) {
    const hash = window.location.hash.slice(1);
    const el   = document.getElementById(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('search-highlight');
        setTimeout(() => el.classList.remove('search-highlight'), 2500);
      }, 400);
    }
  }
});