document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const burgerMenu = document.getElementById('burgerMenu');
  const navMenu = document.querySelector('.nav-menu');

  window.catalogProducts = [
    {
      id: 'iphone17pro',
      name: 'iPhone 17 Pro',
      price: '159 990 ₽',
      priceNum: 159990,
      category: 'iphone',
      image: 'img/iphone-17-pro.png',
      link: 'product-iphone17pro.html',
      rating: 4.9,
      storage: 512,
    },
    {
      id: 'iphone17',
      name: 'iPhone 17',
      price: '129 990 ₽',
      priceNum: 129990,
      category: 'iphone',
      image: 'img/iphone-17.png',
      link: 'product-iphone17.html',
      rating: 4.9,
      storage: 256,
    },
    {
      id: 'iphone16pro',
      name: 'iPhone 16 Pro',
      price: '139 990 ₽',
      priceNum: 139990,
      category: 'iphone',
      image: 'img/iphone-16-pro.png',
      link: 'product-iphone16pro.html',
      rating: 4.9,
      storage: 256,
    },
    {
      id: 'iphone16',
      name: 'iPhone 16',
      price: '99 990 ₽',
      priceNum: 99990,
      category: 'iphone',
      image: 'img/iPhone-16.png',
      link: 'product-iphone16.html',
      rating: 4.8,
      storage: 128,
    },
    {
      id: 'iphone15pro',
      name: 'iPhone 15 Pro',
      price: '119 990 ₽',
      priceNum: 119990,
      category: 'iphone',
      image: 'img/iphone-15-pro.png',
      link: 'product-iphone15pro.html',
      rating: 4.8,
      storage: 256,
    },
    {
      id: 'iphone15',
      name: 'iPhone 15',
      price: '89 990 ₽',
      priceNum: 89990,
      category: 'iphone',
      image: 'img/iphone-15.png',
      link: 'product-iphone15.html',
      rating: 4.7,
      storage: 128,
    },
    {
      id: 'iphone14pro',
      name: 'iPhone 14 Pro',
      price: '99 990 ₽',
      priceNum: 99990,
      category: 'iphone',
      image: 'img/iphone-14-pro.png',
      link: 'product-iphone14pro.html',
      rating: 4.8,
      storage: 256,
    },
    {
      id: 'iphone14',
      name: 'iPhone 14',
      price: '69 990 ₽',
      priceNum: 69990,
      category: 'iphone',
      image: 'img/iphone-14.png',
      link: 'product-iphone14.html',
      rating: 4.6,
      storage: 128,
    },

    {
      id: 'macbookneo',
      name: 'MacBook Neo',
      price: '69 990 ₽',
      priceNum: 69990,
      category: 'mac',
      image: 'img/MacBook-Neo.png',
      link: 'product-macbookneo.html',
      rating: 4.5,
      storage: 256,
    },
    {
      id: 'macbookprom5',
      name: 'MacBook Pro M5',
      price: '279 990 ₽',
      priceNum: 279990,
      category: 'mac',
      image: 'img/macbook-pro-m5.png',
      link: 'product-macbookprom5.html',
      rating: 5.0,
      storage: 1024,
    },
    {
      id: 'macbookprom4',
      name: 'MacBook Pro M4',
      price: '229 990 ₽',
      priceNum: 229990,
      category: 'mac',
      image: 'img/macbook-pro-m4.png',
      link: 'product-macbookprom4.html',
      rating: 4.9,
      storage: 512,
    },
    {
      id: 'macbookprom3',
      name: 'MacBook Pro M3',
      price: '199 990 ₽',
      priceNum: 199990,
      category: 'mac',
      image: 'img/macbook-pro-m3.png',
      link: 'product-macbookprom3.html',
      rating: 4.9,
      storage: 512,
    },
    {
      id: 'macbookairm4',
      name: 'MacBook Air M4',
      price: '169 990 ₽',
      priceNum: 169990,
      category: 'mac',
      image: 'img/MacBook-Air-M4.png',
      link: 'product-macbookairm4.html',
      rating: 4.9,
      storage: 512,
    },
    {
      id: 'macbookairm3',
      name: 'MacBook Air M3',
      price: '149 990 ₽',
      priceNum: 149990,
      category: 'mac',
      image: 'img/macbook-air-m3.png',
      link: 'product-macbookairm3.html',
      rating: 4.9,
      storage: 256,
    },
    {
      id: 'macbookairm2',
      name: 'MacBook Air M2',
      price: '129 990 ₽',
      priceNum: 129990,
      category: 'mac',
      image: 'img/macbook-air-m2.png',
      link: 'product-macbookairm2.html',
      rating: 4.8,
      storage: 256,
    },

    {
      id: 'ipadpro',
      name: 'iPad Pro',
      price: '129 990 ₽',
      priceNum: 129990,
      category: 'ipad',
      image: 'img/ipad-pro.png',
      link: 'product-ipadpro.html',
      rating: 4.9,
      storage: 256,
    },
    {
      id: 'ipadair',
      name: 'iPad Air',
      price: '79 990 ₽',
      priceNum: 79990,
      category: 'ipad',
      image: 'img/ipad-air.png',
      link: 'product-ipadair.html',
      rating: 4.8,
      storage: 128,
    },
    {
      id: 'ipad10',
      name: 'iPad 10.9"',
      price: '49 990 ₽',
      priceNum: 49990,
      category: 'ipad',
      image: 'img/ipad-10.png',
      link: 'product-ipad11.html',
      rating: 4.7,
      storage: 64,
    },

    {
      id: 'airpodsmax',
      name: 'AirPods Max',
      price: '62 990 ₽',
      priceNum: 62990,
      category: 'airpods',
      image: 'img/AirPods-Max.png',
      link: 'product-airpodsmax.html',
      rating: 4.8,
    },
    {
      id: 'airpodspro3',
      name: 'AirPods Pro 3',
      price: '29 990 ₽',
      priceNum: 29990,
      category: 'airpods',
      image: 'img/airpods-pro-3.png',
      link: 'product-airpodspro3.html',
      rating: 4.9,
    },
    {
      id: 'airpodspro2',
      name: 'AirPods Pro 2',
      price: '24 990 ₽',
      priceNum: 24990,
      category: 'airpods',
      image: 'img/airpods-pro-2.png',
      link: 'product-airpodspro2.html',
      rating: 4.9,
    },
    {
      id: 'airpodspro',
      name: 'AirPods Pro',
      price: '24 990 ₽',
      priceNum: 24990,
      category: 'airpods',
      image: 'img/airpods-pro.png',
      link: 'product-airpodspro.html',
      rating: 4.8,
    },

    {
      id: 'watchultra3',
      name: 'Apple Watch Ultra 3',
      price: '89 990 ₽',
      priceNum: 89990,
      category: 'watch',
      image: 'img/Apple-Watch-Ultra-3.png',
      link: 'product-watchultra3.html',
      rating: 5.0,
    },
    {
      id: 'watchultra2',
      name: 'Apple Watch Ultra 2',
      price: '79 990 ₽',
      priceNum: 79990,
      category: 'watch',
      image: 'img/applewatch-ultra-2.png',
      link: 'product-watchultra2.html',
      rating: 4.9,
    },
    {
      id: 'watchseries11',
      name: 'Apple Watch Series 11',
      price: '54 990 ₽',
      priceNum: 54990,
      category: 'watch',
      image: 'img/applewatch-s11.png',
      link: 'product-watchseries11.html',
      rating: 4.9,
    },
    {
      id: 'watchseries10',
      name: 'Apple Watch Series 10',
      price: '49 990 ₽',
      priceNum: 49990,
      category: 'watch',
      image: 'img/Applewatch-S10.png',
      link: 'product-watchseries10.html',
      rating: 4.9,
    },
    {
      id: 'watchseries9',
      name: 'Apple Watch Series 9',
      price: '44 990 ₽',
      priceNum: 44990,
      category: 'watch',
      image: 'img/Applewatch-S9.png',
      link: 'product-watchseries9.html',
      rating: 4.8,
    },
  ];

  if (burgerMenu && navMenu) {
    burgerMenu.addEventListener('click', function () {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      this.setAttribute('aria-expanded', this.classList.contains('active'));
    });

    document.addEventListener('click', function (e) {
      if (
        !burgerMenu.contains(e.target) &&
        !navMenu.contains(e.target) &&
        navMenu.classList.contains('active')
      ) {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        burgerMenu.setAttribute('aria-expanded', 'false');
      }
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        burgerMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase().trim();

      if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
      }

      const filtered = window.catalogProducts.filter((product) =>
        product.name.toLowerCase().includes(query),
      );

      if (filtered.length > 0) {
        searchResults.innerHTML = filtered
          .map(
            (product) => `
                    <a href="${product.link}" class="search-result-item">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <div class="search-result-info">
                            <h4>${product.name}</h4>
                            <p>${product.price}</p>
                        </div>
                    </a>
                `,
          )
          .join('');
        searchResults.classList.add('active');
      } else {
        searchResults.innerHTML =
          '<div style="padding: 15px; text-align: center;">Ничего не найдено</div>';
        searchResults.classList.add('active');
      }
    });

    document.addEventListener('click', function (e) {
      if (
        !searchInput.contains(e.target) &&
        !searchResults.contains(e.target)
      ) {
        searchResults.classList.remove('active');
      }
    });
  }

  const slider = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dots = document.querySelectorAll('.dot');

  if (slider && slides.length > 0) {
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', function () {
        currentIndex = index;
        updateSlider();
      });
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 5000);
  }

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
      const isActive = item.classList.contains('active');
      faqItems.forEach((faq) => faq.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  function animateNumbers() {
    if (animated) return;
    const stats = document.querySelector('.stats');
    if (!stats) return;

    const statsPosition = stats.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (statsPosition < windowHeight - 100) {
      animated = true;
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            stat.textContent = target + '+';
            clearInterval(timer);
          } else {
            stat.textContent = Math.floor(current) + '+';
          }
        }, 20);
      });
    }
  }

  window.addEventListener('scroll', animateNumbers);
  animateNumbers();

  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let isValid = true;

      if (name.value.trim() === '') {
        showError(name, 'Введите ваше имя');
        isValid = false;
      } else {
        removeError(name);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        showError(email, 'Введите корректный email');
        isValid = false;
      } else {
        removeError(email);
      }

      if (message.value.trim() === '') {
        showError(message, 'Введите сообщение');
        isValid = false;
      } else {
        removeError(message);
      }

      if (isValid) {
        const button = contactForm.querySelector('.submit-button');
        button.textContent = 'Отправлено!';
        button.style.background = '#34c759';

        setTimeout(() => {
          button.textContent = 'Отправить сообщение';
          button.style.background = '#0071e3';
          contactForm.reset();
        }, 2000);

        showNotification('Сообщение отправлено!');
      }
    });

    function showError(input, message) {
      const parent = input.parentElement;
      let error = parent.querySelector('.error-message');

      if (!error) {
        error = document.createElement('div');
        error.className = 'error-message';
        error.style.cssText =
          'color: #ff3b30; font-size: 14px; margin-top: 5px; animation: fadeIn 0.3s ease;';
        parent.appendChild(error);
      }

      error.textContent = message;
      input.style.borderColor = '#ff3b30';
    }

    function removeError(input) {
      const parent = input.parentElement;
      const error = parent.querySelector('.error-message');
      if (error) error.remove();
      input.style.borderColor = '#ddd';
    }
  }

  const scrollTopButton = document.createElement('button');
  scrollTopButton.className = 'scroll-top';
  scrollTopButton.innerHTML = '↑';
  scrollTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #0071e3;
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(0,113,227,0.3);
    `;

  scrollTopButton.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.1)';
  });

  scrollTopButton.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });

  document.body.appendChild(scrollTopButton);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      scrollTopButton.style.opacity = '1';
      scrollTopButton.style.visibility = 'visible';
    } else {
      scrollTopButton.style.opacity = '0';
      scrollTopButton.style.visibility = 'hidden';
    }
  });

  scrollTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  const currentLocation = window.location.pathname;
  const menuItems = document.querySelectorAll('.nav-menu a');

  menuItems.forEach((item) => {
    if (item.getAttribute('href') === currentLocation.split('/').pop()) {
      item.classList.add('active');
    }
  });

  initPremiumInteractions();

  window.userAuth = new UserAuth();
  window.cart = new ShoppingCart();
});

function initPremiumInteractions() {
  enhanceNavigation();
  enhanceSeoMeta();
  enhanceFooter();
  initWishlist();
  initQuickView();
  initScrollReveal();
  initCompare();
  enhanceCatalogCards();
  observeCatalogCards();
  initCatalogExperience();
  enhanceProductPage();
  renderCheckoutPage();
  bindPlaceOrder();
}


function enhanceSeoMeta() {
  const titleMap = {
    'categories.html': ['Каталог Apple-техники — ArtPhone', 'Категории Apple-техники ArtPhone: iPhone, Mac, iPad, Watch и AirPods в премиальном e-commerce интерфейсе.'],
    'catalog-iphone.html': ['Купить iPhone — каталог ArtPhone', 'Каталог iPhone ArtPhone с фильтрами, поиском, быстрым просмотром, избранным и корзиной.'],
    'catalog-mac.html': ['MacBook и Mac — каталог ArtPhone', 'Каталог Mac ArtPhone: современная сетка, быстрый подбор и премиальный UX.'],
    'catalog-ipad.html': ['iPad — каталог ArtPhone', 'Каталог iPad ArtPhone с адаптивной сеткой и удобным выбором.'],
    'catalog-airpods.html': ['AirPods — каталог ArtPhone', 'Каталог AirPods ArtPhone с быстрым просмотром и e-commerce UX.'],
    'catalog-watch.html': ['Apple Watch — каталог ArtPhone', 'Каталог Apple Watch ArtPhone с фильтрами, рейтингами и корзиной.'],
    'cart.html': ['Корзина — ArtPhone', 'Корзина ArtPhone с количеством товаров, итоговой суммой и переходом к оформлению заказа.'],
    'contacts.html': ['Контакты — ArtPhone', 'Контакты демонстрационного e-commerce проекта ArtPhone.'],
    'login.html': ['Вход — ArtPhone', 'Страница входа ArtPhone в едином premium UI.'],
    'register.html': ['Регистрация — ArtPhone', 'Страница регистрации ArtPhone с современными формами и focus states.'],
    'profile.html': ['Личный кабинет — ArtPhone', 'Личный кабинет ArtPhone: заказы, данные, адреса и избранное.'],
  };
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const meta = titleMap[page];
  if (meta) {
    document.title = meta[0];
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = meta[1];
  }
  if (!document.querySelector('link[rel="icon"]')) {
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = 'favicon.svg';
    icon.type = 'image/svg+xml';
    document.head.appendChild(icon);
  }
}

function enhanceFooter() {
  const footer = document.querySelector('.footer');
  if (!footer || footer.dataset.premiumEnhanced === 'true') return;
  footer.dataset.premiumEnhanced = 'true';
  footer.classList.add('premium-footer');
  footer.innerHTML = `
    <div class="container">
      <div class="premium-footer-grid">
        <div>
          <h3>ArtPhone</h3>
          <p>Демонстрационный e-commerce проект Apple-техники, созданный как frontend portfolio case с premium UI, адаптивом и коммерческими сценариями.</p>
        </div>
        <div>
          <h4>Каталог</h4>
          <a href="catalog-iphone.html">iPhone</a>
          <a href="catalog-mac.html">Mac</a>
          <a href="catalog-ipad.html">iPad</a>
          <a href="catalog-watch.html">Watch</a>
          <a href="catalog-airpods.html">AirPods</a>
        </div>
        <div>
          <h4>Навигация</h4>
          <a href="index.html">Главная</a>
          <a href="categories.html">Каталог</a>
          <a href="cart.html">Корзина</a>
          <a href="contacts.html">Контакты</a>
          <a href="project.html">О проекте</a>
        </div>
        <div>
          <h4>Portfolio</h4>
          <a href="#">GitHub placeholder</a>
          <a href="#">Live Demo placeholder</a>
          <a href="project.html">Case study</a>
          <p>info@artphone.ru</p>
        </div>
      </div>
      <div class="premium-footer-bottom">
        <span>© 2026 ArtPhone. Portfolio e-commerce case.</span>
        <span>HTML / CSS / JavaScript</span>
      </div>
    </div>
  `;
}

function initCatalogExperience() {
  const grid = document.getElementById('catalogGrid');
  if (!grid || document.querySelector('.catalog-toolbar')) return;
  const toolbar = document.createElement('div');
  toolbar.className = 'catalog-toolbar';
  toolbar.innerHTML = `
    <input type="search" id="catalogLocalSearch" placeholder="Поиск внутри категории" aria-label="Поиск внутри каталога">
    <select id="catalogSort" aria-label="Сортировка каталога">
      <option value="popular">Сначала популярные</option>
      <option value="price-asc">Цена по возрастанию</option>
      <option value="price-desc">Цена по убыванию</option>
      <option value="rating-desc">Высокий рейтинг</option>
    </select>
  `;
  grid.parentElement.insertBefore(toolbar, grid);

  const applyCatalogView = () => {
    const query = toolbar.querySelector('#catalogLocalSearch').value.toLowerCase().trim();
    const sort = toolbar.querySelector('#catalogSort').value;
    const cards = Array.from(grid.querySelectorAll('.catalog-item'));

    cards.forEach((card) => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      card.style.display = title.includes(query) ? '' : 'none';
    });

    const visibleCards = cards.filter((card) => card.style.display !== 'none');
    visibleCards.sort((a, b) => {
      const priceA = Number(a.dataset.price || 0);
      const priceB = Number(b.dataset.price || 0);
      const ratingA = Number(a.dataset.rating || 0);
      const ratingB = Number(b.dataset.rating || 0);
      if (sort === 'price-asc') return priceA - priceB;
      if (sort === 'price-desc') return priceB - priceA;
      if (sort === 'rating-desc') return ratingB - ratingA;
      return 0;
    });
    visibleCards.forEach((card) => grid.appendChild(card));

    let empty = grid.querySelector('.catalog-search-empty');
    if (!visibleCards.length) {
      if (!empty) {
        empty = document.createElement('div');
        empty.className = 'premium-empty catalog-search-empty';
        empty.innerHTML = '<span class="eyebrow">Nothing found</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос или сбросьте фильтры.</p>';
        grid.appendChild(empty);
      }
    } else {
      empty?.remove();
    }
  };

  toolbar.addEventListener('input', applyCatalogView);
  toolbar.addEventListener('change', applyCatalogView);
}

function enhanceNavigation() {
  document.querySelectorAll('.nav-menu a[href="catalog.html"]').forEach((link) => {
    link.setAttribute('href', 'categories.html');
  });

  document.querySelectorAll('.search-input').forEach((input) => {
    input.setAttribute('placeholder', 'Найти iPhone, Mac, AirPods...');
  });

  document.querySelectorAll('.nav-menu').forEach((menu) => {
    if (!menu.querySelector('a[href="project.html"]')) {
      const loginItem = menu.querySelector('#loginLink')?.closest('li');
      const item = document.createElement('li');
      item.innerHTML = '<a href="project.html">О проекте</a>';
      menu.insertBefore(item, loginItem || null);
    }
  });
}

function readStorageList(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    return [];
  }
}

function writeStorageList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function initWishlist() {
  const wishlistButtons = document.querySelectorAll('.wishlist-btn[data-wishlist-id]');
  if (!wishlistButtons.length) return;

  const wishlist = new Set(readStorageList('wishlist'));

  wishlistButtons.forEach((button) => {
    const id = button.dataset.wishlistId;
    button.classList.toggle('active', wishlist.has(id));
    button.textContent = wishlist.has(id) ? '♥' : '♡';
    if (button.dataset.wishlistBound === 'true') return;
    button.dataset.wishlistBound = 'true';

    button.addEventListener('click', () => {
      if (wishlist.has(id)) {
        wishlist.delete(id);
        button.classList.remove('active');
        button.textContent = '♡';
        showNotification('Товар удален из избранного');
      } else {
        wishlist.add(id);
        button.classList.add('active');
        button.textContent = '♥';
        showNotification('Товар добавлен в избранное');
      }
      writeStorageList('wishlist', Array.from(wishlist));
    });
  });
}

function initCompare() {
  const compareButtons = document.querySelectorAll('.compare-btn[data-compare-id]');
  if (!compareButtons.length) return;

  const compare = new Set(readStorageList('compareProducts'));

  compareButtons.forEach((button) => {
    const id = button.dataset.compareId;
    button.classList.toggle('active', compare.has(id));
    button.textContent = compare.has(id) ? 'В сравнении' : 'Сравнить';
    if (button.dataset.compareBound === 'true') return;
    button.dataset.compareBound = 'true';

    button.addEventListener('click', () => {
      if (compare.has(id)) {
        compare.delete(id);
        button.classList.remove('active');
        button.textContent = 'Сравнить';
        showNotification('Товар удален из сравнения');
      } else {
        compare.add(id);
        button.classList.add('active');
        button.textContent = 'В сравнении';
        showNotification('Товар добавлен к сравнению');
      }
      writeStorageList('compareProducts', Array.from(compare));
      updateCompareTray();
    });
  });

  updateCompareTray();
}

function updateCompareTray() {
  const compare = readStorageList('compareProducts');
  let tray = document.querySelector('.compare-tray');

  if (!compare.length) {
    tray?.remove();
    return;
  }

  if (!tray) {
    tray = document.createElement('div');
    tray.className = 'compare-tray';
    document.body.appendChild(tray);
  }

  tray.innerHTML = `
    <span>${compare.length} в сравнении</span>
    <button type="button" class="compare-clear">Очистить</button>
  `;

  tray.querySelector('.compare-clear')?.addEventListener('click', () => {
    localStorage.removeItem('compareProducts');
    document.querySelectorAll('.compare-btn').forEach((button) => {
      button.classList.remove('active');
      button.textContent = 'Сравнить';
    });
    tray.remove();
    showNotification('Сравнение очищено');
  });
}

function enhanceCatalogCards() {
  const catalogGrid = document.getElementById('catalogGrid');
  const catalogItems = document.querySelectorAll('.catalog-item');

  if (
    catalogGrid &&
    catalogGrid.dataset.renderedOnce === 'true' &&
    catalogItems.length === 0 &&
    !catalogGrid.querySelector('.premium-empty')
  ) {
    catalogGrid.innerHTML = `
      <div class="empty-catalog premium-empty">
        <span class="eyebrow">Nothing found</span>
        <h2>Ничего не найдено</h2>
        <p>Попробуйте изменить фильтры или сбросить параметры поиска.</p>
      </div>
    `;
    return;
  }

  if (catalogGrid && catalogItems.length > 0) {
    catalogGrid.dataset.renderedOnce = 'true';
  }

  catalogItems.forEach((card, index) => {
    if (card.dataset.premiumEnhanced === 'true') return;

    const id = card.dataset.id;
    const product = window.catalogProducts?.find((item) => item.id === id);
    const link = card.querySelector('a');
    const img = card.querySelector('img');
    const actions = card.querySelector('.product-actions');

    card.dataset.premiumEnhanced = 'true';
    card.dataset.productId = id || '';

    if (link && img && !link.querySelector('.product-media')) {
      const imageSrc = img.getAttribute('src');
      const imageAlt = img.getAttribute('alt') || product?.name || 'Apple product';
      img.remove();
      const media = document.createElement('div');
      media.className = 'product-media';
      media.innerHTML = `
        <div class="product-badges">
          ${index < 2 ? '<span class="badge badge-hit">Hit</span>' : ''}
          ${index === 0 ? '<span class="badge badge-new">New</span>' : ''}
        </div>
        <button class="icon-btn wishlist-btn" type="button" data-wishlist-id="${id}" aria-label="Добавить в избранное">♡</button>
        <img src="${imageSrc}" alt="${imageAlt}" loading="lazy">
      `;
      link.prepend(media);
    }

    if (actions && product && !actions.querySelector('.quick-view-btn')) {
      actions.insertAdjacentHTML(
        'beforeend',
        `<button class="btn btn-ghost quick-view-btn" type="button" data-product-id="${product.id}">Быстрый просмотр</button>
         <button class="btn btn-outline compare-btn" type="button" data-compare-id="${product.id}">Сравнить</button>`,
      );
    }
  });

  initWishlist();
  initCompare();
  document.body.classList.add('skeleton-ready');
}

function observeCatalogCards() {
  const catalogGrid = document.getElementById('catalogGrid');
  if (!catalogGrid || catalogGrid.dataset.observing === 'true') return;

  catalogGrid.dataset.observing = 'true';
  const observer = new MutationObserver(() => enhanceCatalogCards());
  observer.observe(catalogGrid, { childList: true });
}

function enhanceProductPage() {
  const container = document.querySelector('.product-container');
  if (!container || container.dataset.premiumEnhanced === 'true') return;

  const buyButton = container.querySelector('.buy-button, .add-to-cart[data-product]');
  const productData = buyButton?.getAttribute('data-product');
  if (!productData) return;

  let product;
  try {
    product = JSON.parse(productData);
  } catch (error) {
    return;
  }

  container.dataset.premiumEnhanced = 'true';
  const catalogProduct = window.catalogProducts?.find((item) => item.id === product.id) || product;
  const viewed = readStorageList('recentlyViewed').filter((id) => id !== product.id);
  viewed.unshift(product.id);
  writeStorageList('recentlyViewed', viewed.slice(0, 6));

  if (!container.querySelector('.product-purchase-panel')) {
    container.insertAdjacentHTML(
      'beforeend',
      `<aside class="product-purchase-panel">
        <span class="eyebrow">В наличии</span>
        <h3>${product.name}</h3>
        <div class="price">${product.price}</div>
        <p>Доставка от 2 часов, рассрочка 0%, trade-in и помощь с настройкой.</p>
        <button class="btn btn-secondary add-to-cart" data-product='${JSON.stringify(product).replace(/'/g, '&apos;')}'>В корзину</button>
        <button class="btn btn-outline compare-btn" type="button" data-compare-id="${product.id}">Сравнить</button>
      </aside>`,
    );
  }

  const related = window.catalogProducts
    ?.filter((item) => item.category === catalogProduct.category && item.id !== product.id)
    .slice(0, 3);


  if (!container.querySelector('.product-service-grid')) {
    container.insertAdjacentHTML(
      'beforeend',
      `<section class="product-service-grid">
        <article><span class="eyebrow">Delivery</span><h3>Доставка от 2 часов</h3><p>Быстрая доставка по Москве и аккуратная отправка по России.</p></article>
        <article><span class="eyebrow">Warranty</span><h3>Гарантия 24 месяца</h3><p>Понятные условия сервиса и помощь после покупки.</p></article>
        <article><span class="eyebrow">Trade-in</span><h3>Выгодное обновление</h3><p>Сценарий обмена старого устройства встроен в покупку.</p></article>
        <article><span class="eyebrow">Installments</span><h3>Рассрочка 0%</h3><p>Финансовый триггер рядом с ключевым CTA.</p></article>
      </section>`,
    );
  }

  if (!container.querySelector('.product-reviews-section')) {
    container.insertAdjacentHTML(
      'beforeend',
      `<section class="product-reviews-section">
        <div class="section-heading">
          <span class="eyebrow">Reviews</span>
          <h2 class="section-title">Отзывы покупателей</h2>
        </div>
        <div class="reviews-grid">
          <article class="review-card"><div class="review-stars">★★★★★</div><p>Отличная подача характеристик и понятный путь к покупке.</p><div class="review-author"><strong>Дмитрий</strong><span>Покупатель</span></div></article>
          <article class="review-card"><div class="review-stars">★★★★★</div><p>Удобно сравнить, добавить в корзину и вернуться к выбору позже.</p><div class="review-author"><strong>Анна</strong><span>Покупатель</span></div></article>
          <article class="review-card"><div class="review-stars">★★★★★</div><p>Страница выглядит как презентация продукта, а не обычная таблица.</p><div class="review-author"><strong>Максим</strong><span>Покупатель</span></div></article>
        </div>
      </section>`,
    );
  }

  if (related?.length && !container.querySelector('.related-products-section')) {
    container.insertAdjacentHTML(
      'beforeend',
      `<section class="related-products-section">
        <div class="section-heading">
          <span class="eyebrow">Recommended</span>
          <h2 class="section-title">Похожие товары</h2>
        </div>
        <div class="products-grid">
          ${related.map((item) => `
            <article class="product-card" data-product-id="${item.id}">
              <div class="product-media">
                <button class="icon-btn wishlist-btn" type="button" data-wishlist-id="${item.id}" aria-label="Добавить в избранное">♡</button>
                <a href="${item.link}"><img src="${item.image}" alt="${item.name}" loading="lazy"></a>
              </div>
              <div class="product-info">
                <div class="product-kicker">${item.category}</div>
                <h3>${item.name}</h3>
                <div class="rating">★★★★★ <span>${item.rating || '4.8'}</span></div>
                <div class="price">${item.price}</div>
                <div class="product-actions">
                  <button class="btn btn-secondary add-to-cart" data-product='${JSON.stringify(item).replace(/'/g, '&apos;')}'>В корзину</button>
                  <button class="btn btn-ghost quick-view-btn" type="button" data-product-id="${item.id}">Быстрый просмотр</button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>`,
    );
  }

  const recentProducts = viewed
    .slice(1, 4)
    .map((id) => window.catalogProducts?.find((item) => item.id === id))
    .filter(Boolean);

  if (recentProducts.length && !container.querySelector('.recently-viewed-section')) {
    container.insertAdjacentHTML(
      'beforeend',
      `<section class="recently-viewed-section related-products-section">
        <div class="section-heading">
          <span class="eyebrow">Recently viewed</span>
          <h2 class="section-title">Недавно смотрели</h2>
        </div>
        <div class="products-grid">
          ${recentProducts.map((item) => `
            <article class="product-card" data-product-id="${item.id}">
              <div class="product-media">
                <a href="${item.link}"><img src="${item.image}" alt="${item.name}" loading="lazy"></a>
              </div>
              <div class="product-info">
                <h3>${item.name}</h3>
                <div class="price">${item.price}</div>
                <div class="product-actions">
                  <a class="btn btn-outline" href="${item.link}">Открыть</a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>`,
    );
  }

  initWishlist();
  initCompare();
}

function getCartItemsForCheckout() {
  return window.cart?.items || [];
}

function renderCheckoutPage() {
  if (!window.location.pathname.includes('checkout.html')) return;

  const items = getCartItemsForCheckout();
  const checkoutItems = document.getElementById('checkoutItems');
  const totalItems = document.getElementById('checkoutTotalItems');
  const totalSum = document.getElementById('checkoutTotalSum');
  if (!checkoutItems) return;

  if (!items.length) {
    checkoutItems.innerHTML = `
      <div class="premium-empty">
        <h2>Корзина пуста</h2>
        <p>Добавьте товары перед оформлением заказа.</p>
        <a class="btn btn-primary" href="categories.html">Перейти в каталог</a>
      </div>
    `;
    if (totalItems) totalItems.textContent = '0';
    if (totalSum) totalSum.textContent = '0 ₽';
    return;
  }

  let count = 0;
  let sum = 0;
  checkoutItems.innerHTML = items.map((item) => {
    const price = parseInt(item.product_price.replace(/\D/g, ''));
    const itemTotal = price * item.quantity;
    count += item.quantity;
    sum += itemTotal;
    return `
      <div class="checkout-item">
        <img src="${item.product_image}" alt="${item.product_name}" loading="lazy">
        <div>
          <h4>${item.product_name}</h4>
          <p>${item.product_price} × ${item.quantity}</p>
        </div>
        <strong>${itemTotal.toLocaleString()} ₽</strong>
      </div>
    `;
  }).join('');

  if (totalItems) totalItems.textContent = count;
  if (totalSum) totalSum.textContent = `${sum.toLocaleString()} ₽`;
}

function bindPlaceOrder() {
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  const checkoutForm = document.getElementById('checkoutForm');
  if (!placeOrderBtn || !checkoutForm) return;

  placeOrderBtn.addEventListener('click', () => {
    if (!checkoutForm.reportValidity()) return;
    showNotification('Заказ оформлен. Менеджер свяжется с вами для подтверждения.');
    localStorage.removeItem('guestCart');
    if (window.cart) {
      window.cart.items = [];
      window.cart.updateCartCount();
      window.cart.updateCartPreview();
      renderCheckoutPage();
    }
  });
}

function initQuickView() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.quick-view-btn');
    if (!button || !window.catalogProducts) return;

    const product = window.catalogProducts.find((item) => item.id === button.dataset.productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
      <div class="quick-view-dialog" role="dialog" aria-modal="true" aria-label="Быстрый просмотр ${product.name}">
        <button class="quick-view-close" type="button" aria-label="Закрыть">×</button>
        <img src="${product.image}" alt="${product.name}">
        <div class="quick-view-info">
          <span class="eyebrow">${product.category || 'Apple'}</span>
          <h3>${product.name}</h3>
          <div class="rating">★★★★★ <span>${product.rating || '4.9'}</span></div>
          <div class="price">${product.price}</div>
          <p>Быстрый просмотр товара без ухода со страницы. Можно сразу перейти к подробностям или добавить модель в корзину.</p>
          <div class="product-actions">
            <button class="btn btn-secondary add-to-cart" data-product='${JSON.stringify(product).replace(/'/g, '&apos;')}'>В корзину</button>
            <a class="btn btn-outline" href="${product.link}">Подробнее</a>
          </div>
        </div>
      </div>
    `;

    const closeModal = () => modal.remove();
    modal.addEventListener('click', (modalEvent) => {
      if (
        modalEvent.target.classList.contains('quick-view-modal') ||
        modalEvent.target.classList.contains('quick-view-close')
      ) {
        closeModal();
      }
    });
    document.addEventListener('keydown', function handleEscape(keyEvent) {
      if (keyEvent.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscape);
      }
    });

    document.body.appendChild(modal);
  });
}

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal-on-scroll');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  items.forEach((item) => observer.observe(item));
}

function animateCartFly(button) {
  const card = button.closest('.product-card, .catalog-item, .product-container');
  const image = card?.querySelector('img');
  const cartButton = document.querySelector('.cart-btn');
  if (!image || !cartButton) return;

  const imageRect = image.getBoundingClientRect();
  const cartRect = cartButton.getBoundingClientRect();
  const clone = image.cloneNode(true);
  clone.className = 'fly-cart-clone';
  clone.style.left = `${imageRect.left + imageRect.width / 2 - 28}px`;
  clone.style.top = `${imageRect.top + imageRect.height / 2 - 28}px`;
  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    const x = cartRect.left - imageRect.left;
    const y = cartRect.top - imageRect.top;
    clone.style.transform = `translate(${x}px, ${y}px) scale(0.2)`;
    clone.style.opacity = '0';
  });

  setTimeout(() => clone.remove(), 700);
}

class ShoppingCart {
  constructor() {
    this.items = [];
    this.init();
  }

  async init() {
    await this.loadCartFromServer();
    this.createCartIcon();
    this.updateCartCount();
    this.bindEvents();

    if (window.location.pathname.includes('cart.html')) {
      this.renderCartPage();
    }

    if (window.location.pathname.includes('checkout.html')) {
      renderCheckoutPage();
    }
  }

  async loadCartFromServer() {
    if (!window.userAuth || !window.userAuth.token) {
      this.items = this.loadGuestCart();
      return;
    }

    try {
      const response = await fetch(`${window.userAuth.API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${window.userAuth.token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.items = data.items || [];
      } else {
        this.items = [];
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      this.items = [];
    }
  }

  async addItem(product) {
    if (!window.userAuth || !window.userAuth.token) {
      const existingItem = this.items.find((item) => item.product_id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({
          product_id: product.id,
          product_name: product.name,
          product_price: product.price,
          product_image: product.image,
          quantity: 1,
        });
      }

      this.saveGuestCart();
      this.updateCartCount();
      this.updateCartPreview();
      showNotification(`${product.name} добавлен в корзину`);

      if (window.location.pathname.includes('cart.html')) {
        this.renderCartPage();
      }
      return;
    }

    try {
      const response = await fetch(`${window.userAuth.API_URL}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.userAuth.token}`,
        },
        body: JSON.stringify({
          product_id: product.id,
          product_name: product.name,
          product_price: product.price,
          product_image: product.image,
          quantity: 1,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        this.items = data.items;
        this.updateCartCount();
        this.updateCartPreview();
        showNotification(`${product.name} добавлен в корзину`);

        if (window.location.pathname.includes('cart.html')) {
          this.renderCartPage();
        }
      } else {
        showNotification('Ошибка при добавлении', 'error');
      }
    } catch (error) {
      console.error('Add to cart error:', error);
      showNotification('Ошибка сервера', 'error');
    }
  }

  async removeItem(productId) {
    if (!window.userAuth || !window.userAuth.token) {
      this.items = this.items.filter((item) => item.product_id !== productId);
      this.saveGuestCart();
      this.updateCartCount();
      this.updateCartPreview();

      if (window.location.pathname.includes('cart.html')) {
        this.renderCartPage();
      }
      return;
    }

    try {
      const response = await fetch(
        `${window.userAuth.API_URL}/cart/remove/${productId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${window.userAuth.token}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        this.items = data.items;
        this.updateCartCount();
        this.updateCartPreview();

        if (window.location.pathname.includes('cart.html')) {
          this.renderCartPage();
        }
      }
    } catch (error) {
      console.error('Remove error:', error);
    }
  }

  async updateQuantity(productId, change) {
    const item = this.items.find((item) => item.product_id === productId);
    if (!item) return;

    const newQuantity = item.quantity + change;

    if (newQuantity <= 0) {
      await this.removeItem(productId);
      return;
    }

    if (!window.userAuth || !window.userAuth.token) {
      item.quantity = newQuantity;
      this.saveGuestCart();
      this.updateCartCount();
      this.updateCartPreview();

      if (window.location.pathname.includes('cart.html')) {
        this.renderCartPage();
      }
      return;
    }

    try {
      const response = await fetch(
        `${window.userAuth.API_URL}/cart/update/${productId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${window.userAuth.token}`,
          },
          body: JSON.stringify({ quantity: newQuantity }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        this.items = data.items;
        this.updateCartCount();
        this.updateCartPreview();

        if (window.location.pathname.includes('cart.html')) {
          this.renderCartPage();
        }
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  }

  createCartIcon() {
    const navContainer = document.querySelector('.nav-container');
    if (!navContainer || navContainer.querySelector('.cart-icon')) return;

    const cartIcon = document.createElement('div');
    cartIcon.className = 'cart-icon';
    cartIcon.innerHTML = `
            <button class="cart-btn" type="button" aria-label="Открыть корзину">
                <svg class="cart-btn__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M7 18.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm10 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM5.24 5l.42 2H20a1 1 0 0 1 .97 1.24l-1.35 5.4A3 3 0 0 1 16.7 16H8.1a3 3 0 0 1-2.94-2.4L3.82 7.05 3.4 5H2a1 1 0 1 1 0-2h2.22a1 1 0 0 1 .98.8L5.24 5Zm.82 4 .86 4.2a1 1 0 0 0 .98.8h8.8a1 1 0 0 0 .97-.76L18.73 9H6.06Z" fill="currentColor"/>
                </svg>
                <span class="cart-count" aria-live="polite">0</span>
            </button>
            <div class="cart-preview" aria-label="Мини-корзина"></div>
        `;

    const cartBtn = cartIcon.querySelector('.cart-btn');
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'cart.html';
    });

    const burgerMenu = navContainer.querySelector('.burger-menu');
    navContainer.insertBefore(cartIcon, burgerMenu || null);
    this.updateCartPreview();
  }

  loadGuestCart() {
    try {
      return JSON.parse(localStorage.getItem('guestCart')) || [];
    } catch (error) {
      return [];
    }
  }

  saveGuestCart() {
    localStorage.setItem('guestCart', JSON.stringify(this.items));
  }

  updateCartCount() {
    const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) cartCount.textContent = count;
  }

  updateCartPreview() {
    const preview = document.querySelector('.cart-preview');
    if (!preview) return;

    if (this.items.length === 0) {
      preview.innerHTML =
        '<div style="padding: 20px; text-align: center;">Корзина пуста</div>';
      return;
    }

    let total = 0;
    preview.innerHTML = this.items
      .slice(0, 3)
      .map((item) => {
        const itemTotal =
          parseInt(item.product_price.replace(/\D/g, '')) * item.quantity;
        total += itemTotal;
        return `
                <div class="cart-item" data-id="${item.product_id}">
                    <img src="${item.product_image}" alt="${item.product_name}" loading="lazy">
                    <div class="cart-item-info">
                        <h4>${item.product_name}</h4>
                        <div class="cart-item-price">${item.product_price} x ${item.quantity}</div>
                    </div>
                    <button class="cart-item-remove" onclick="cart.removeItem('${item.product_id}')">×</button>
                </div>
            `;
      })
      .join('');

    if (this.items.length > 3) {
      preview.innerHTML += `<div style="padding: 10px; text-align: center; color: #0071e3;">И еще ${this.items.length - 3} товар(а)...</div>`;
    }

    preview.innerHTML += `
            <div class="cart-total">Итого: ${total.toLocaleString()} ₽</div>
            <button class="cart-checkout">Перейти в корзину</button>
        `;

    const checkoutBtn = preview.querySelector('.cart-checkout');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        window.location.href = 'cart.html';
      });
    }
  }

  async renderCartPage() {
    const cartItemsList = document.getElementById('cartItemsList');
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.querySelector('.cart-content');
    const cartTotalItems = document.getElementById('cartTotalItems');
    const cartTotalSum = document.getElementById('cartTotalSum');

    if (!cartItemsList) return;

    if (this.items.length === 0) {
      if (emptyCart) emptyCart.style.display = 'block';
      if (cartContent) cartContent.style.display = 'none';
      return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    if (cartContent) cartContent.style.display = 'grid';

    let totalItems = 0;
    let totalSum = 0;

    cartItemsList.innerHTML = this.items
      .map((item) => {
        const price = parseInt(item.product_price.replace(/\D/g, ''));
        const itemTotal = price * item.quantity;
        totalItems += item.quantity;
        totalSum += itemTotal;

        return `
                <div class="cart-item-row" data-id="${item.product_id}">
                    <div class="cart-item-product">
                        <img src="${item.product_image}" alt="${item.product_name}" loading="lazy">
                        <h4>${item.product_name}</h4>
                    </div>
                    <div class="cart-item-price">${item.product_price}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.product_id}', -1)">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.product_id}', 1)">+</button>
                    </div>
                    <div class="cart-item-total">${itemTotal.toLocaleString()} ₽</div>
                    <button class="cart-item-remove-btn" onclick="cart.removeItem('${item.product_id}')">×</button>
                </div>
            `;
      })
      .join('');

    if (cartTotalItems) cartTotalItems.textContent = totalItems;
    if (cartTotalSum)
      cartTotalSum.textContent = `${totalSum.toLocaleString()} ₽`;
  }

  bindEvents() {
    if (!document.body.dataset.cartDelegated) {
      document.body.dataset.cartDelegated = 'true';
      document.addEventListener('click', (e) => {
        const button = e.target.closest('.add-to-cart, .buy-button');
        if (!button) return;

        e.preventDefault();
        const productData = button.getAttribute('data-product');
        if (productData) {
          try {
            const product = JSON.parse(productData);
            animateCartFly(button);
            this.addItem(product);
          } catch (error) {
            console.error('Ошибка парсинга товара:', error);
          }
        }
      });
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (!this.items.length) {
          showNotification('Добавьте товары перед оформлением заказа', 'error');
          return;
        }
        window.location.href = 'checkout.html';
      });
    }
  }
}

class UserAuth {
  constructor() {
    this.API_URL = 'https://artphone-backend.onrender.com/api';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    this.token = localStorage.getItem('token') || null;
    this.init();
  }

  init() {
    this.updateUI();
    this.bindAuthEvents();
    if (this.token) {
      this.checkSession();
    }
  }

  async checkSession() {
    if (!this.token) return;

    try {
      const response = await fetch(`${this.API_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.currentUser = data.user;
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        this.updateUI();
      } else {
        this.logout();
      }
    } catch (error) {
      console.error('Session check error:', error);
    }
  }

  async register(userData) {
    try {
      const response = await fetch(`${this.API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        this.token = data.token;
        this.currentUser = data.user;
        localStorage.setItem('token', data.token);
        localStorage.setItem('currentUser', JSON.stringify(data.user));

        this.updateUI();
        showNotification('Регистрация успешна!');

        if (window.cart) {
          await window.cart.loadCartFromServer();
          window.cart.updateCartCount();
          window.cart.updateCartPreview();
        }

        window.location.href = 'profile.html';

        return true;
      } else {
        showNotification(data.error || 'Ошибка регистрации', 'error');
        return false;
      }
    } catch (error) {
      console.error('Register error:', error);
      showNotification('Ошибка подключения к серверу', 'error');
      return false;
    }
  }

  async login(email, password) {
    try {
      const response = await fetch(`${this.API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        this.token = data.token;
        this.currentUser = data.user;
        localStorage.setItem('token', data.token);
        localStorage.setItem('currentUser', JSON.stringify(data.user));

        this.updateUI();
        showNotification(`Добро пожаловать, ${data.user.name}!`);

        if (window.cart) {
          await window.cart.loadCartFromServer();
          window.cart.updateCartCount();
          window.cart.updateCartPreview();
        }

        window.location.href = 'profile.html';

        return true;
      } else {
        showNotification(data.error || 'Неверный email или пароль', 'error');
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      showNotification('Ошибка подключения к серверу', 'error');
      return false;
    }
  }

  logout() {
    this.token = null;
    this.currentUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.updateUI();
    showNotification('Вы вышли из аккаунта');

    if (window.cart) {
      window.cart.items = [];
      window.cart.updateCartCount();
      window.cart.updateCartPreview();
    }

    if (window.location.pathname.includes('profile.html')) {
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    }
  }

  updateUI() {
    const loginLink = document.getElementById('loginLink');
    const profileLink = document.getElementById('profileLink');

    if (this.currentUser) {
      if (loginLink) loginLink.style.display = 'none';
      if (profileLink) {
        profileLink.style.display = 'block';
        profileLink.textContent = this.currentUser.name;
      }

      this.updateProfilePage();
    } else {
      if (loginLink) loginLink.style.display = 'block';
      if (profileLink) profileLink.style.display = 'none';
    }
  }

  updateProfilePage() {
    if (!window.location.pathname.includes('profile.html') || !this.currentUser)
      return;

    const avatarPlaceholder = document.getElementById('avatarPlaceholder');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileNameInput = document.getElementById('profileNameInput');
    const profileEmailInput = document.getElementById('profileEmailInput');
    const profilePhoneInput = document.getElementById('profilePhoneInput');

    if (avatarPlaceholder) {
      avatarPlaceholder.textContent = this.currentUser.name?.charAt(0) || 'U';
    }

    if (profileName) profileName.textContent = this.currentUser.name || '';
    if (profileEmail) profileEmail.textContent = this.currentUser.email || '';

    if (profileNameInput) profileNameInput.value = this.currentUser.name || '';
    if (profileEmailInput)
      profileEmailInput.value = this.currentUser.email || '';
    if (profilePhoneInput)
      profilePhoneInput.value = this.currentUser.phone || '';
  }

  bindAuthEvents() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userData = {
          name: document.getElementById('name')?.value,
          email: document.getElementById('email')?.value,
          phone: document.getElementById('phone')?.value,
          password: document.getElementById('password')?.value,
          confirmPassword: document.getElementById('confirmPassword')?.value,
        };

        if (
          !userData.name ||
          !userData.email ||
          !userData.phone ||
          !userData.password ||
          !userData.confirmPassword
        ) {
          showNotification('Все поля обязательны для заполнения', 'error');
          return;
        }

        if (userData.password !== userData.confirmPassword) {
          showNotification('Пароли не совпадают', 'error');
          return;
        }

        if (userData.password.length < 6) {
          showNotification('Пароль должен быть минимум 6 символов', 'error');
          return;
        }

        const agreement = document.getElementById('agreement');
        if (agreement && !agreement.checked) {
          showNotification('Необходимо согласие на обработку данных', 'error');
          return;
        }

        this.register(userData);
      });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email')?.value;
        const password = document.getElementById('password')?.value;

        if (!email || !password) {
          showNotification('Заполните все поля', 'error');
          return;
        }

        this.login(email, password);
      });
    }

    const profileMenu = document.querySelectorAll('.profile-menu li[data-tab]');
    profileMenu.forEach((item) => {
      item.addEventListener('click', () => {
        const tabId = item.getAttribute('data-tab');

        if (tabId === 'logout') {
          this.logout();
          return;
        }

        profileMenu.forEach((i) => i.classList.remove('active'));
        item.classList.add('active');

        document.querySelectorAll('.profile-tab').forEach((tab) => {
          tab.classList.remove('active');
        });

        const activeTab = document.getElementById(tabId + 'Tab');
        if (activeTab) activeTab.classList.add('active');
      });
    });
  }
}

function showNotification(message, type = 'success', duration = 3000) {
  const container =
    document.getElementById('notificationContainer') ||
    (() => {
      const div = document.createElement('div');
      div.id = 'notificationContainer';
      div.style.cssText =
        'position: fixed; top: 20px; right: 20px; z-index: 9999;';
      document.body.appendChild(div);
      return div;
    })();

  const notification = document.createElement('div');
  notification.className = `toast-notification toast-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        background: ${type === 'success' ? '#34c759' : '#ff3b30'};
        color: white;
        padding: 15px 25px;
        border-radius: 30px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        margin-bottom: 10px;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
        cursor: pointer;
    `;

  notification.addEventListener('click', () => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  });

  container.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, duration);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    body.menu-open { overflow: hidden; }
`;
document.head.appendChild(style);

/* --------------------------------------------------------------------------
   Production hardening layer
   - normalizes inconsistent legacy markup
   - removes mobile UX edge cases
   - makes cart rendering safe and event-driven
   -------------------------------------------------------------------------- */
(function () {
  'use strict';

  const moneyToNumber = (value) => Number(String(value || '').replace(/\D/g, '')) || 0;
  const formatMoney = (value) => `${moneyToNumber(value).toLocaleString('ru-RU')} ₽`;
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[char]));

  const normalizeProduct = (product) => {
    const catalogProduct = window.catalogProducts?.find((item) => item.id === product?.id);
    const source = { ...catalogProduct, ...product };

    return {
      id: String(source.id || source.product_id || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now())),
      name: String(source.name || source.product_name || 'Apple product'),
      price: String(source.price || source.product_price || '0 ₽'),
      image: String(catalogProduct?.image || source.image || source.product_image || 'favicon.svg'),
    };
  };

  function normalizeHeader() {
    const nav = document.querySelector('.main-nav');
    const navContainer = document.querySelector('.nav-container');
    const logo = document.querySelector('.logo');
    const burger = document.getElementById('burgerMenu');
    const navMenu = document.querySelector('.nav-menu');
    const searchContainer = document.querySelector('.search-container');

    if (!nav || !navContainer || !burger || !navMenu) return;

    if (burger.parentElement !== navContainer) {
      navContainer.insertBefore(burger, logo?.nextSibling || navContainer.firstChild);
    }

    burger.type = 'button';
    burger.setAttribute('aria-controls', 'primaryNavigation');
    burger.setAttribute('aria-expanded', burger.classList.contains('active') ? 'true' : 'false');
    navMenu.id = 'primaryNavigation';
    navMenu.setAttribute('aria-label', 'Основное меню');

    searchContainer?.querySelector('input')?.setAttribute('enterkeyhint', 'search');

    const syncMenuState = () => {
      const isOpen = navMenu.classList.contains('active');
      burger.setAttribute('aria-expanded', String(isOpen));
      document.documentElement.classList.toggle('has-open-menu', isOpen);
    };

    burger.addEventListener('click', () => requestAnimationFrame(syncMenuState));
    navMenu.addEventListener('click', (event) => {
      if (event.target.closest('a')) requestAnimationFrame(syncMenuState);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !navMenu.classList.contains('active')) return;
      burger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      syncMenuState();
      burger.focus();
    });
  }

  function hardenInteractiveCards() {
    document.addEventListener('click', (event) => {
      if (event.target.closest('.wishlist-btn, .compare-btn, .quick-view-btn')) {
        event.preventDefault();
      }
    });
  }

  function addImageFallbacks() {
    document.addEventListener('error', (event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied === 'true') return;
      image.dataset.fallbackApplied = 'true';
      image.src = 'favicon.svg';
      image.alt = image.alt || 'ArtPhone';
    }, true);
  }

  function upgradeSearch() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    if (!input || !results) return;

    input.setAttribute('autocomplete', 'off');
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-expanded', results.classList.contains('active') ? 'true' : 'false');
    results.setAttribute('role', 'listbox');

    const observer = new MutationObserver(() => {
      input.setAttribute('aria-expanded', results.classList.contains('active') ? 'true' : 'false');
    });
    observer.observe(results, { attributes: true, attributeFilter: ['class'] });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        results.classList.remove('active');
        input.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function patchCartPrototype() {
    if (!window.ShoppingCart && typeof ShoppingCart === 'undefined') return;
    const CartCtor = window.ShoppingCart || ShoppingCart;
    if (!CartCtor?.prototype || CartCtor.prototype.__seniorPatched) return;
    CartCtor.prototype.__seniorPatched = true;

    const originalAddItem = CartCtor.prototype.addItem;
    CartCtor.prototype.addItem = function (product) {
      return originalAddItem.call(this, normalizeProduct(product));
    };

    CartCtor.prototype.updateCartPreview = function () {
      const preview = document.querySelector('.cart-preview');
      if (!preview) return;

      if (!this.items.length) {
        preview.innerHTML = '<div class="premium-empty cart-preview-empty">Корзина пуста</div>';
        return;
      }

      let total = 0;
      preview.innerHTML = this.items.slice(0, 4).map((item) => {
        const itemTotal = moneyToNumber(item.product_price) * Number(item.quantity || 1);
        total += itemTotal;
        return `
          <div class="cart-item" data-id="${escapeHtml(item.product_id)}">
            <img src="${escapeHtml(item.product_image)}" alt="${escapeHtml(item.product_name)}" loading="lazy">
            <div class="cart-item-info">
              <h4>${escapeHtml(item.product_name)}</h4>
              <div class="cart-item-price">${escapeHtml(item.product_price)} × ${Number(item.quantity || 1)}</div>
            </div>
            <button class="cart-item-remove" type="button" data-cart-action="remove" data-product-id="${escapeHtml(item.product_id)}" aria-label="Удалить ${escapeHtml(item.product_name)}">×</button>
          </div>`;
      }).join('');

      if (this.items.length > 4) {
        preview.insertAdjacentHTML('beforeend', `<div class="cart-more">Еще ${this.items.length - 4} товар(а)</div>`);
      }

      preview.insertAdjacentHTML('beforeend', `
        <div class="cart-total">Итого: ${formatMoney(total)}</div>
        <button class="cart-checkout" type="button">Перейти в корзину</button>
      `);
    };

    CartCtor.prototype.renderCartPage = async function () {
      const cartItemsList = document.getElementById('cartItemsList');
      const emptyCart = document.getElementById('emptyCart');
      const cartContent = document.querySelector('.cart-content');
      const cartTotalItems = document.getElementById('cartTotalItems');
      const cartTotalSum = document.getElementById('cartTotalSum');
      if (!cartItemsList) return;

      if (!this.items.length) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        cartItemsList.innerHTML = '';
        if (cartTotalItems) cartTotalItems.textContent = '0';
        if (cartTotalSum) cartTotalSum.textContent = '0 ₽';
        return;
      }

      if (emptyCart) emptyCart.style.display = 'none';
      if (cartContent) cartContent.style.display = 'grid';

      let totalItems = 0;
      let totalSum = 0;
      cartItemsList.innerHTML = this.items.map((item) => {
        const quantity = Number(item.quantity || 1);
        const itemTotal = moneyToNumber(item.product_price) * quantity;
        totalItems += quantity;
        totalSum += itemTotal;

        return `
          <div class="cart-item-row" data-id="${escapeHtml(item.product_id)}">
            <div class="cart-item-product">
              <img src="${escapeHtml(item.product_image)}" alt="${escapeHtml(item.product_name)}" loading="lazy">
              <h4>${escapeHtml(item.product_name)}</h4>
            </div>
            <div class="cart-item-price">${escapeHtml(item.product_price)}</div>
            <div class="cart-item-quantity" aria-label="Количество товара">
              <button class="quantity-btn" type="button" data-cart-action="decrement" data-product-id="${escapeHtml(item.product_id)}" aria-label="Уменьшить количество">−</button>
              <span class="quantity-value">${quantity}</span>
              <button class="quantity-btn" type="button" data-cart-action="increment" data-product-id="${escapeHtml(item.product_id)}" aria-label="Увеличить количество">+</button>
            </div>
            <div class="cart-item-total">${formatMoney(itemTotal)}</div>
            <button class="cart-item-remove-btn" type="button" data-cart-action="remove" data-product-id="${escapeHtml(item.product_id)}" aria-label="Удалить ${escapeHtml(item.product_name)}">×</button>
          </div>`;
      }).join('');

      if (cartTotalItems) cartTotalItems.textContent = String(totalItems);
      if (cartTotalSum) cartTotalSum.textContent = formatMoney(totalSum);
    };

    const originalBindEvents = CartCtor.prototype.bindEvents;
    CartCtor.prototype.bindEvents = function () {
      originalBindEvents.call(this);
      if (document.body.dataset.cartActionsDelegated === 'true') return;
      document.body.dataset.cartActionsDelegated = 'true';

      document.addEventListener('click', (event) => {
        const actionButton = event.target.closest('[data-cart-action]');
        if (!actionButton) return;
        event.preventDefault();
        const productId = actionButton.dataset.productId;
        if (!productId) return;

        if (actionButton.dataset.cartAction === 'remove') this.removeItem(productId);
        if (actionButton.dataset.cartAction === 'decrement') this.updateQuantity(productId, -1);
        if (actionButton.dataset.cartAction === 'increment') this.updateQuantity(productId, 1);
      });

      document.addEventListener('click', (event) => {
        const checkoutButton = event.target.closest('.cart-checkout');
        if (!checkoutButton) return;
        event.preventDefault();
        window.location.href = 'cart.html';
      });
    };
  }

  function enhanceFormsForMobile() {
    document.querySelectorAll('input, textarea, select').forEach((field) => {
      if (!field.getAttribute('autocomplete') && field.type !== 'search') {
        field.setAttribute('autocomplete', 'on');
      }
    });
  }

  patchCartPrototype();
  hardenInteractiveCards();
  addImageFallbacks();

  document.addEventListener('DOMContentLoaded', () => {
    normalizeHeader();
    upgradeSearch();
    enhanceFormsForMobile();
  });
}());
