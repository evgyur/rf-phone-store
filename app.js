const products = [
  {
    id: "realme-note-60x",
    name: "Realme Note 60X",
    brand: "Realme",
    segment: "Бюджетный хит",
    price: 7990,
    oldPrice: 8990,
    color: "#4f6f5f",
    bg: "#dfeee7",
    image: "./assets/products/realme-note-60x.webp",
    badge: "Самый ходовой",
    memory: "3/64 ГБ",
    screen: '6.74", 90 Гц',
    camera: "8 Мп",
    battery: "5000 мАч",
    nfc: "Уточнить",
    short:
      "Доступный смартфон для связи, мессенджеров, учебы и повседневных задач без лишних переплат.",
  },
  {
    id: "redmi-14c",
    name: "Xiaomi Redmi 14C",
    brand: "Xiaomi",
    segment: "Массовый выбор",
    price: 12990,
    oldPrice: 14990,
    color: "#537da5",
    bg: "#e2ebf6",
    image: "./assets/products/redmi-14c.png",
    badge: "Хит каталога",
    memory: "8/256 ГБ",
    screen: '6.88", 120 Гц',
    camera: "50 Мп",
    battery: "5160 мАч",
    nfc: "Есть в NFC-версии",
    short:
      "Большой экран, много памяти и понятная цена. Подходит тем, кому нужен недорогой смартфон на каждый день.",
  },
  {
    id: "redmi-a3x",
    name: "Xiaomi Redmi A3X",
    brand: "Xiaomi",
    segment: "Минимальная цена",
    price: 6990,
    oldPrice: 7990,
    color: "#1f2937",
    bg: "#e7e9ee",
    image: "./assets/products/redmi-a3x.png",
    badge: "До 10 тыс.",
    memory: "3/64 ГБ",
    screen: '6.71", 90 Гц',
    camera: "8 Мп",
    battery: "5000 мАч",
    nfc: "Нет",
    short:
      "Самый простой сценарий покупки: первый смартфон, запасной аппарат, звонки, навигация и мессенджеры.",
  },
  {
    id: "realme-note-50",
    name: "Realme Note 50",
    brand: "Realme",
    segment: "Бюджетный",
    price: 8490,
    oldPrice: 9990,
    color: "#75a4bb",
    bg: "#e0f0f5",
    image: "./assets/products/realme-note-50.jpg",
    badge: "Низкий чек",
    memory: "4/128 ГБ",
    screen: '6.74", 90 Гц',
    camera: "13 Мп",
    battery: "5000 мАч",
    nfc: "Нет",
    short:
      "Практичный недорогой аппарат для покупателя, который выбирает цену и большую батарею.",
  },
  {
    id: "redmi-note-13",
    name: "Xiaomi Redmi Note 13",
    brand: "Xiaomi",
    segment: "Средний класс",
    price: 19990,
    oldPrice: 22990,
    color: "#8f6fb5",
    bg: "#eee7f6",
    image: "./assets/products/redmi-note-13.png",
    badge: "AMOLED",
    memory: "8/256 ГБ",
    screen: '6.67", AMOLED 120 Гц',
    camera: "108 Мп",
    battery: "5000 мАч",
    nfc: "Есть в NFC-версии",
    short:
      "Модель для тех, кто хочет яркий экран, камеру выше базового уровня и большой накопитель без флагманской цены.",
  },
  {
    id: "galaxy-a16",
    name: "Samsung Galaxy A16",
    brand: "Samsung",
    segment: "Надежный бренд",
    price: 15990,
    oldPrice: 17990,
    color: "#2b5c88",
    bg: "#e1edf7",
    image: "./assets/products/galaxy-a16.jpg",
    badge: "Samsung",
    memory: "4/128 ГБ",
    screen: '6.7", Super AMOLED',
    camera: "50 Мп",
    battery: "5000 мАч",
    nfc: "Зависит от версии",
    short:
      "Понятная массовая модель Samsung с крупным экраном и привычной оболочкой.",
  },
  {
    id: "galaxy-a56",
    name: "Samsung Galaxy A56",
    brand: "Samsung",
    segment: "Средний плюс",
    price: 38990,
    oldPrice: 42990,
    color: "#7e8da4",
    bg: "#e9edf2",
    image: "./assets/products/galaxy-a56.jpg",
    badge: "Баланс",
    memory: "8/256 ГБ",
    screen: '6.7", AMOLED 120 Гц',
    camera: "50 Мп OIS",
    battery: "5000 мАч",
    nfc: "Есть",
    short:
      "Сбалансированный Samsung с ярким экраном, камерой со стабилизацией и запасом актуальности на несколько лет.",
  },
  {
    id: "galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    segment: "Премиум Android",
    price: 124990,
    oldPrice: 139990,
    color: "#6e7075",
    bg: "#e7e7ea",
    image: "./assets/products/galaxy-s25-ultra.jpg",
    badge: "Флагман",
    memory: "12/256 ГБ",
    screen: '6.9", Dynamic AMOLED',
    camera: "200 Мп",
    battery: "5000 мАч",
    nfc: "Есть",
    short:
      "Флагманский Android-смартфон для фото, видео, работы со стилусом и максимальной производительности.",
  },
  {
    id: "iphone-16",
    name: "Apple iPhone 16",
    brand: "Apple",
    segment: "Премиум массовый",
    price: 84990,
    oldPrice: 92990,
    color: "#7ea2a6",
    bg: "#e4eff0",
    image: "./assets/products/iphone-16.jpg",
    badge: "iOS",
    memory: "128 ГБ",
    screen: '6.1", Super Retina',
    camera: "48 Мп",
    battery: "До 22 ч видео",
    nfc: "Есть",
    short:
      "Самый понятный iPhone в каталоге: экосистема Apple, камера и высокая ликвидность при перепродаже.",
  },
  {
    id: "iphone-16-pro-max",
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    segment: "Премиум",
    price: 139990,
    oldPrice: 154990,
    color: "#b7a992",
    bg: "#f1ebe2",
    image: "./assets/products/iphone-16-pro-max.jpg",
    badge: "Pro Max",
    memory: "256 ГБ",
    screen: '6.9", ProMotion',
    camera: "48+48+12 Мп",
    battery: "До 33 ч видео",
    nfc: "Есть",
    short:
      "Большой iPhone с Pro-камерой, мощным процессором и увеличенным временем работы от батареи.",
  },
];

const services = {
  payment: {
    title: "Оплата",
    lead: "Выберите удобный способ оплаты при оформлении заказа или согласуйте его с менеджером.",
    items: [
      "Принимаем банковские карты, СБП, наличные и оплату картой при получении.",
      "Итоговая стоимость заказа подтверждается до оплаты и не меняется после согласования.",
      "После оплаты вы получаете электронный чек на email или телефон.",
    ],
  },
  delivery: {
    title: "Доставка",
    lead: "Доставляем смартфоны курьером, в пункт самовывоза или транспортной компанией.",
    items: [
      "По Москве доступна курьерская доставка от 1 дня и самовывоз из пункта выдачи.",
      "В регионы отправляем надежными транспортными службами после подтверждения заказа.",
      "При получении можно проверить упаковку, комплектацию и внешний вид устройства.",
    ],
  },
  warranty: {
    title: "Гарантия",
    lead: "На смартфоны действует гарантия. Срок и условия указаны в карточке товара и документах к заказу.",
    items: [
      "Для обращения по гарантии сохраните чек, номер заказа и комплектацию устройства.",
      "Мы подскажем ближайший сервисный центр или примем обращение через магазин.",
      "Перед покупкой менеджер подтвердит тип гарантии для выбранной модели.",
    ],
  },
  returns: {
    title: "Возврат и обмен",
    lead: "Если товар не подошел или возникла проблема, свяжитесь с нами удобным способом.",
    items: [
      "Обращения принимаются через форму на сайте, email или по телефону магазина.",
      "Сохраните чек, упаковку и комплектацию, чтобы ускорить рассмотрение обращения.",
      "Мы проверим заказ и подскажем доступные варианты возврата или обмена.",
    ],
  },
  privacy: {
    title: "Политика конфиденциальности",
    lead: "Мы используем ваши данные только для обработки заказа, доставки и связи по покупке.",
    items: [
      "В формах могут запрашиваться имя, телефон, email, город доставки и комментарий к заказу.",
      "Данные нужны для подтверждения заказа, доставки и сервисных уведомлений.",
      "Мы не передаем персональные данные третьим лицам без законного основания.",
    ],
  },
  terms: {
    title: "Пользовательское соглашение / оферта",
    lead: "Соглашение описывает порядок оформления заказа, оплаты, доставки и гарантийного обслуживания.",
    items: [
      "Заказ считается оформленным после подтверждения модели, цены, контактов и способа доставки.",
      "Покупатель получает информацию о товаре, стоимости, гарантии и сроках до оплаты.",
      "Все вопросы по заказу можно решить через контакты магазина.",
    ],
  },
  requisites: {
    title: "Реквизиты продавца",
    lead: "Информация о продавце и контакты для обращений по заказам.",
    items: [
      "ООО «Мобайл РФ», ИНН 7728491024, ОГРН 1247701842600.",
      "Адрес: 125167, Москва, Ленинградский проспект, 37, корпус 3. Режим работы: ежедневно с 10:00 до 21:00.",
      "Телефон: +7 495 128-42-10. Email: order@mobile-rf.shop.",
    ],
  },
};

const state = {
  search: "",
  brand: "all",
  budget: "all",
  sort: "popular",
  gallery: {},
};

function rub(value) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

function card(product) {
  return `
    <article class="product-card" style="--card-bg:${product.bg}; --accent:${product.color}">
      <a class="product-media" href="#product-${product.id}" aria-label="${product.name}">
        <span class="badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="product-body">
        <div>
          <p class="muted">${product.segment}</p>
          <h3 class="product-title">${product.name}</h3>
        </div>
        <div class="price-line">
          <span class="price">${rub(product.price)}</span>
          <span class="old-price">${rub(product.oldPrice)}</span>
        </div>
        <ul class="spec-list">
          <li><span>Память</span><strong>${product.memory}</strong></li>
          <li><span>Экран</span><strong>${product.screen}</strong></li>
          <li><span>Камера</span><strong>${product.camera}</strong></li>
          <li><span>Батарея</span><strong>${product.battery}</strong></li>
        </ul>
        <p>${product.short}</p>
        <div class="product-actions">
          <a class="primary-button" href="#bag">Купить</a>
          <a class="text-link" href="#compare">Сравнить</a>
        </div>
      </div>
    </article>`;
}

function filteredProducts() {
  let list = products.filter((product) => {
    const text = `${product.name} ${product.brand} ${product.segment}`.toLowerCase();
    const budgetOk =
      state.budget === "all" ||
      (state.budget === "10000" && product.price <= 10000) ||
      (state.budget === "30000" && product.price <= 30000) ||
      (state.budget === "premium" && product.price > 60000);
    return (
      text.includes(state.search.toLowerCase()) &&
      (state.brand === "all" || product.brand === state.brand) &&
      budgetOk
    );
  });

  if (state.sort === "priceAsc") list = list.sort((a, b) => a.price - b.price);
  if (state.sort === "priceDesc") list = list.sort((a, b) => b.price - a.price);
  if (state.sort === "memory") list = list.sort((a, b) => b.memory.localeCompare(a.memory));
  return list;
}

function homePage() {
  const top = products.slice(0, 4).map(card).join("");
  const strip = products
    .slice(0, 7)
    .map((product) => `<a href="#product-${product.id}"><img src="${product.image}" alt=""><span>${product.brand}</span></a>`)
    .join("");
  return `
    <section class="page">
      <nav class="product-strip" aria-label="Популярные категории">${strip}</nav>
      <div class="hero">
        <div class="hero-copy">
          <h1>Выберите смартфон, который подходит именно вам.</h1>
          <p class="lead">В каталоге собраны востребованные модели iPhone, Samsung, Xiaomi и Realme: от доступных смартфонов для связи до флагманов с лучшими камерами.</p>
          <div class="hero-actions">
            <a class="primary-button" href="#catalog">Купить</a>
            <a class="secondary-button" href="#compare">Сравнить модели</a>
          </div>
          <div class="metric-grid">
            <div class="metric"><span>популярных моделей</span><strong>10</strong></div>
            <div class="metric"><span>доставка по Москве</span><strong>от 1 дня</strong></div>
            <div class="metric"><span>гарантия на товары</span><strong>до 12 мес.</strong></div>
          </div>
        </div>
        <aside class="hero-showcase">
          <div class="showcase-stage">
            <img class="hero-family-image" src="./assets/hero-family-phone.png" alt="Семья выбирает новый смартфон">
            <div class="hero-spec-panel">
              <strong>Поможем выбрать</strong>
              <p>Сравните камеру, память, экран, батарею и цену перед оформлением заказа.</p>
            </div>
          </div>
        </aside>
      </div>

      <div class="section-head">
        <div>
          <h2>Популярные позиции</h2>
          <p>Выберите смартфон по цене, бренду, памяти, камере и сценарию использования.</p>
        </div>
        <a class="ghost-button" href="#catalog">Все 10 моделей</a>
      </div>
      <div class="catalog-grid">${top}</div>

      <div class="section-head">
        <div>
          <h2>Почему покупать удобно</h2>
          <p>Мы сделали выбор понятным: ключевые характеристики, честные условия и быстрый заказ.</p>
        </div>
      </div>
      <div class="benefit-grid">
        <div class="benefit"><h3>Быстрый выбор</h3><p>Фильтруйте модели по бренду, цене и памяти, чтобы быстро найти подходящий вариант.</p></div>
        <div class="benefit"><h3>Понятные карточки</h3><p>Фото, цена, наличие, характеристики и условия покупки собраны на одной странице.</p></div>
        <div class="benefit"><h3>Сравнение моделей</h3><p>Смотрите отличия по экрану, камере, батарее, памяти и цене.</p></div>
        <div class="benefit"><h3>Поддержка перед покупкой</h3><p>Поможем уточнить версию, цвет, комплектацию и способ доставки.</p></div>
      </div>
    </section>`;
}

function catalogPage() {
  const list = filteredProducts();
  return `
    <section class="page">
      <div class="section-head">
        <div>
          <h1>Популярные смартфоны</h1>
          <p class="lead">Выберите модель по бюджету, бренду и характеристикам. Если сомневаетесь, оставьте заявку: менеджер поможет подобрать подходящий вариант.</p>
        </div>
      </div>
      <div class="filter-bar">
        <input id="searchInput" type="search" value="${state.search}" placeholder="Поиск: iPhone, Samsung, Redmi..." aria-label="Поиск">
        <select id="brandSelect" aria-label="Бренд">
          ${["all", "Realme", "Xiaomi", "Samsung", "Apple"].map((brand) => `<option value="${brand}" ${state.brand === brand ? "selected" : ""}>${brand === "all" ? "Все бренды" : brand}</option>`).join("")}
        </select>
        <select id="budgetSelect" aria-label="Бюджет">
          <option value="all" ${state.budget === "all" ? "selected" : ""}>Любой бюджет</option>
          <option value="10000" ${state.budget === "10000" ? "selected" : ""}>До 10 000 ₽</option>
          <option value="30000" ${state.budget === "30000" ? "selected" : ""}>До 30 000 ₽</option>
          <option value="premium" ${state.budget === "premium" ? "selected" : ""}>Премиум</option>
        </select>
        <select id="sortSelect" aria-label="Сортировка">
          <option value="popular" ${state.sort === "popular" ? "selected" : ""}>По популярности</option>
          <option value="priceAsc" ${state.sort === "priceAsc" ? "selected" : ""}>Сначала дешевле</option>
          <option value="priceDesc" ${state.sort === "priceDesc" ? "selected" : ""}>Сначала дороже</option>
          <option value="memory" ${state.sort === "memory" ? "selected" : ""}>Больше памяти</option>
        </select>
      </div>
      ${
        list.length
          ? `<div class="catalog-grid">${list.map(card).join("")}</div>`
          : `<div class="empty-state"><h3>Ничего не найдено</h3><p>Измените фильтры или поисковый запрос.</p></div>`
      }
    </section>`;
}

function productPage(id) {
  const product = products.find((item) => item.id === id) || products[0];
  const active = state.gallery[product.id] || 0;
  const images = [product.image];
  return `
    <section class="page">
      <nav class="product-crumbs" aria-label="Навигация по товару">
        <a href="#catalog">Каталог</a>
        <span>/</span>
        <span>${product.name}</span>
      </nav>
      <div class="product-layout">
        <div>
          <div class="gallery-main" style="--gallery-bg:${product.bg}">
            <img src="${images[active]}" alt="${product.name}, изображение ${active + 1}">
          </div>
          <div class="thumb-row">
            ${images.map((src, index) => `<button class="thumb ${index === active ? "is-active" : ""}" data-thumb="${index}" aria-label="Фото ${index + 1}"><img src="${src}" alt=""></button>`).join("")}
          </div>
        </div>
        <div class="buy-panel">
          <span class="eyebrow">${product.segment}</span>
          <h1>${product.name}</h1>
          <p class="lead">${product.short}</p>
          <div class="price-line">
            <span class="price">${rub(product.price)}</span>
            <span class="old-price">${rub(product.oldPrice)}</span>
            <span class="stock">В наличии</span>
          </div>
          <div class="choice-block">
            <h3>Цвет</h3>
            <div class="swatch-row" aria-label="Цвет">
              <span class="swatch is-active" style="--swatch:${product.color}"></span>
              <span class="swatch" style="--swatch:#f4f4f4"></span>
              <span class="swatch" style="--swatch:#1d1d1f"></span>
            </div>
          </div>
          <div class="choice-block">
            <h3>Память</h3>
            <div class="storage-row">
              <button class="storage-option is-active">${product.memory}</button>
              <button class="storage-option">Больше памяти</button>
            </div>
          </div>
          <div class="delivery-choice">
            <strong>Получение</strong>
            <span>Курьером от 1 дня или самовывоз из пункта выдачи.</span>
          </div>
          <div class="product-actions">
            <a class="primary-button wide" href="#bag">Добавить в корзину</a>
            <a class="secondary-button wide" href="#checkout-delivery">Купить сейчас</a>
            <a class="text-link" href="#compare">Сравнить с другими моделями</a>
          </div>
          <div class="details-grid">
            <div class="panel">
              <h3>Ключевые характеристики</h3>
              <ul class="spec-list">
                <li><span>Память</span><strong>${product.memory}</strong></li>
                <li><span>Экран</span><strong>${product.screen}</strong></li>
                <li><span>Камера</span><strong>${product.camera}</strong></li>
                <li><span>Батарея</span><strong>${product.battery}</strong></li>
                <li><span>NFC</span><strong>${product.nfc}</strong></li>
              </ul>
            </div>
            <div class="panel">
              <h3>Покупка</h3>
              <ul class="spec-list">
                <li><span>Гарантия</span><strong>до 12 месяцев</strong></li>
                <li><span>Доставка</span><strong>от 1 дня</strong></li>
                <li><span>Оплата</span><strong>карта, СБП</strong></li>
                <li><span>Чек</span><strong>электронный</strong></li>
                <li><span>Комплект</span><strong>уточнить</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function comparePage() {
  const rows = [
    ["Цена", (p) => rub(p.price)],
    ["Сегмент", (p) => p.segment],
    ["Память", (p) => p.memory],
    ["Экран", (p) => p.screen],
    ["Камера", (p) => p.camera],
    ["Батарея", (p) => p.battery],
    ["NFC", (p) => p.nfc],
  ];
  return `
    <section class="page">
      <div class="section-head">
        <div>
          <h1>Выбор по параметрам</h1>
          <p class="lead">Сравните популярные смартфоны по цене, памяти, экрану, камере, батарее и поддержке NFC.</p>
        </div>
      </div>
      <div class="compare-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Параметр</th>
              ${products.map((product) => `<th><a href="#product-${product.id}">${product.name}</a></th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                ([label, getter]) => `
                <tr>
                  <th>${label}</th>
                  ${products.map((product) => `<td>${getter(product)}</td>`).join("")}
                </tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="section-head">
        <div>
          <h2>Быстрые рекомендации</h2>
          <p>Подберите смартфон под задачу: доступная покупка, большой объем памяти, надежный Samsung или премиальный флагман.</p>
        </div>
      </div>
      <div class="benefit-grid">
        <div class="benefit"><h3>До 10 000 ₽</h3><p>Realme Note 60X или Redmi A3X.</p></div>
        <div class="benefit"><h3>Много памяти</h3><p>Redmi 14C 8/256 или Redmi Note 13 8/256.</p></div>
        <div class="benefit"><h3>Samsung</h3><p>Galaxy A16 для повседневных задач, A56 для тех, кому важны экран и камера.</p></div>
        <div class="benefit"><h3>Премиум</h3><p>iPhone 16 Pro Max или Galaxy S25 Ultra.</p></div>
      </div>
    </section>`;
}

function flowSteps(active) {
  const steps = [
    ["account", "Аккаунт", "#account"],
    ["bag", "Корзина", "#bag"],
    ["delivery", "Доставка", "#checkout-delivery"],
    ["payment", "Оплата", "#checkout-payment"],
    ["review", "Проверка", "#checkout-review"],
  ];
  return `<nav class="checkout-steps" aria-label="Шаги оформления">${steps
    .map(
      ([id, label, href], index) =>
        `<a class="${id === active ? "is-active" : ""}" href="${href}"><span>0${index + 1}</span>${label}</a>`,
    )
    .join("")}</nav>`;
}

function orderSummary() {
  const cart = [products[1], products[8]];
  const subtotal = cart.reduce((sum, product) => sum + product.price, 0);
  const delivery = 490;
  return `
    <aside class="order-summary">
      <h3>Ваш заказ</h3>
      ${cart
        .map(
          (product) => `
          <div class="summary-item">
            <img src="${product.image}" alt="">
            <div>
              <strong>${product.name}</strong>
              <span>${product.memory}</span>
            </div>
            <b>${rub(product.price)}</b>
          </div>`,
        )
        .join("")}
      <div class="summary-row"><span>Товары</span><strong>${rub(subtotal)}</strong></div>
      <div class="summary-row"><span>Доставка</span><strong>${rub(delivery)}</strong></div>
      <div class="summary-row total"><span>Итого</span><strong>${rub(subtotal + delivery)}</strong></div>
      <p>Цена, цвет и комплектация подтверждаются менеджером перед оплатой.</p>
    </aside>`;
}

function accountPage() {
  return `
    <section class="page">
      ${flowSteps("account")}
      <div class="checkout-layout">
        <div class="checkout-main">
          <h1>Вход или регистрация</h1>
          <p class="lead">Сохраним контакты, адрес доставки и историю заказа, чтобы следующий шаг оформления был быстрее.</p>
          <div class="checkout-card">
            <h3>Контактные данные</h3>
            <form id="accountForm" class="flow-form">
              <input name="email" type="email" placeholder="name@mail.ru" required>
              <input name="phone" placeholder="+7 ___ ___-__-__" required>
              <div class="option-list">
                <label><input type="radio" name="auth" checked> Создать новый аккаунт</label>
                <label><input type="radio" name="auth"> Войти по телефону</label>
              </div>
              <label class="checkbox-line">
                <input type="checkbox" required>
                <span>Согласен с офертой и обработкой персональных данных.</span>
              </label>
              <a class="primary-button" href="#bag">Продолжить в корзину</a>
              <p id="accountResult" class="muted"></p>
            </form>
          </div>
        </div>
        ${orderSummary()}
      </div>
    </section>`;
}

function bagPage() {
  return `
    <section class="page">
      ${flowSteps("bag")}
      <div class="checkout-layout">
        <div class="checkout-main">
          <h1>Проверьте состав заказа</h1>
          <p class="lead">Проверьте модели, комплектацию и стоимость. Наличие и итоговую цену подтвердим перед оплатой.</p>
          <div class="checkout-card">
            <div class="bag-row">
              <img src="${products[1].image}" alt="">
              <div><h3>${products[1].name}</h3><p>8/256 ГБ, популярная комплектация</p></div>
              <strong>${rub(products[1].price)}</strong>
            </div>
            <div class="bag-row">
              <img src="${products[8].image}" alt="">
              <div><h3>${products[8].name}</h3><p>128 ГБ, iOS, в наличии</p></div>
              <strong>${rub(products[8].price)}</strong>
            </div>
            <div class="promo-line">
              <input placeholder="Промокод или номер предложения">
              <a class="ghost-button" href="#bag">Применить</a>
            </div>
            <a class="primary-button" href="#checkout-delivery">Перейти к доставке</a>
          </div>
        </div>
        ${orderSummary()}
      </div>
    </section>`;
}

function deliveryPage() {
  return `
    <section class="page">
      ${flowSteps("delivery")}
      <div class="checkout-layout">
        <div class="checkout-main">
          <h1>Адрес или самовывоз</h1>
          <p class="lead">Выберите удобный способ получения, укажите адрес и контакт для курьера или пункта выдачи.</p>
          <div class="checkout-card">
            <h3>Способ получения</h3>
            <div class="option-list">
              <label><input type="radio" name="delivery-mode" checked> Курьером до двери</label>
              <label><input type="radio" name="delivery-mode"> Самовывоз из пункта выдачи</label>
              <label><input type="radio" name="delivery-mode"> Экспресс-доставка по Москве</label>
            </div>
            <form class="flow-form">
              <div class="form-row">
                <input placeholder="Имя" required>
                <input placeholder="Фамилия" required>
              </div>
              <input placeholder="Город" value="Москва" required>
              <input placeholder="Улица, дом, квартира" required>
              <div class="form-row">
                <input placeholder="Индекс">
                <input placeholder="Телефон для курьера" required>
              </div>
            </form>
          </div>
          <div class="checkout-card">
            <h3>Варианты доставки</h3>
            <div class="option-list">
              <label><input type="radio" name="speed" checked> Стандартная: завтра, 490 ₽</label>
              <label><input type="radio" name="speed"> Экспресс: сегодня, 990 ₽</label>
              <label><input type="radio" name="speed"> Самовывоз: бесплатно</label>
            </div>
            <a class="primary-button" href="#checkout-payment">Сохранить доставку</a>
          </div>
        </div>
        ${orderSummary()}
      </div>
    </section>`;
}

function paymentPage() {
  return `
    <section class="page">
      ${flowSteps("payment")}
      <div class="checkout-layout">
        <div class="checkout-main">
          <h1>Выберите способ оплаты</h1>
          <p class="lead">Оплатите заказ онлайн, через СБП или при получении после подтверждения наличия.</p>
          <div class="checkout-card">
            <h3>Метод оплаты</h3>
            <div class="option-list">
              <label><input type="radio" name="payment" checked> Банковская карта онлайн</label>
              <label><input type="radio" name="payment"> СБП по QR-коду</label>
              <label><input type="radio" name="payment"> Картой или наличными при получении</label>
              <label><input type="radio" name="payment"> Рассрочка после подтверждения</label>
            </div>
            <form class="flow-form">
              <input placeholder="Номер карты">
              <div class="form-row">
                <input placeholder="ММ / ГГ">
                <input placeholder="CVV">
              </div>
              <p class="field-note">Данные карты защищены. Списание выполняется только после подтверждения заказа.</p>
            </form>
            <a class="primary-button" href="#checkout-review">Перейти к проверке</a>
          </div>
        </div>
        ${orderSummary()}
      </div>
    </section>`;
}

function reviewPage() {
  return `
    <section class="page">
      ${flowSteps("review")}
      <div class="checkout-layout">
        <div class="checkout-main">
          <h1>Проверьте заказ перед оплатой</h1>
          <p class="lead">Последний шаг фиксирует товары, адрес, доставку и оплату. Это снижает ошибки перед внешним платежом или оплатой при получении.</p>
          <div class="checkout-card review-list">
            <div><span>Аккаунт</span><strong>+7 916 284-54-22 · name@mail.ru</strong><a href="#account">Изменить</a></div>
            <div><span>Получение</span><strong>Москва, доставка курьером завтра</strong><a href="#checkout-delivery">Изменить</a></div>
            <div><span>Оплата</span><strong>Банковская карта онлайн</strong><a href="#checkout-payment">Изменить</a></div>
            <div><span>Поддержка</span><strong>Менеджер подтвердит наличие и комплектацию</strong><a href="#contacts">Связаться</a></div>
          </div>
          <a class="primary-button" href="#checkout-success">Подтвердить заказ</a>
        </div>
        ${orderSummary()}
      </div>
    </section>`;
}

function successPage() {
  return `
    <section class="page">
      <div class="checkout-main success-state">
        <h1>Спасибо, заявка принята</h1>
        <p class="lead">Мы закрепили товары в заявке. Менеджер подтвердит наличие, цену, способ оплаты и время доставки.</p>
        <div class="checkout-card review-list">
          <div><span>Номер</span><strong>MRF-0624-1842</strong></div>
          <div><span>Статус</span><strong>Ожидает подтверждения магазина</strong></div>
          <div><span>Следующий шаг</span><strong>Звонок или сообщение в течение 15 минут</strong></div>
        </div>
        <div class="hero-actions">
          <a class="primary-button" href="#catalog">Вернуться в каталог</a>
          <a class="ghost-button" href="#service-warranty">Условия гарантии</a>
        </div>
      </div>
    </section>`;
}

function contactsPage() {
  return `
    <section class="page">
      <div class="contact-grid">
        <div>
          <h1>Оформление заявки</h1>
          <p class="lead">Оставьте контакты, и менеджер подтвердит наличие, цену, комплектацию и удобный способ получения.</p>
          <div class="service-grid">
            <div class="service-card"><h3>Телефон</h3><p>+7 495 128-42-10</p></div>
            <div class="service-card"><h3>Email</h3><p>order@mobile-rf.shop</p></div>
            <div class="service-card"><h3>Самовывоз</h3><p>Москва, Ленинградский проспект, 37, корпус 3</p></div>
          </div>
        </div>
        <div class="form-card">
          <h2>Заявка</h2>
          <form id="orderForm">
            <div class="form-row">
              <input name="name" placeholder="Имя" required>
              <input name="phone" placeholder="+7 ___ ___-__-__" required>
            </div>
            <select name="model" required>
              <option value="">Выберите модель</option>
              ${products.map((product) => `<option>${product.name}</option>`).join("")}
            </select>
            <textarea name="comment" placeholder="Комментарий: цвет, память, доставка"></textarea>
            <label class="checkbox-line">
              <input type="checkbox" required>
              <span>Согласен на обработку персональных данных и принимаю условия оферты.</span>
            </label>
            <button class="primary-button" type="submit">Отправить заявку</button>
            <p id="formResult" class="muted"></p>
          </form>
        </div>
      </div>
    </section>`;
}

function servicePage(key) {
  const service = services[key] || services.payment;
  return `
    <section class="page">
      <h1>${service.title}</h1>
      <p class="lead">${service.lead}</p>
      <div class="service-grid">
        ${service.items.map((item, index) => `<div class="service-card"><span class="tag">0${index + 1}</span><p>${item}</p></div>`).join("")}
      </div>
      <div class="section-head">
        <div>
          <h2>Остались вопросы?</h2>
          <p>Свяжитесь с нами, чтобы уточнить наличие, комплектацию, условия доставки или гарантийного обслуживания.</p>
        </div>
        <a class="primary-button" href="#contacts">Связаться</a>
      </div>
    </section>`;
}

function bindEvents() {
  const searchInput = document.querySelector("#searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value;
      render();
    });
  }
  const brandSelect = document.querySelector("#brandSelect");
  if (brandSelect) {
    brandSelect.addEventListener("change", (event) => {
      state.brand = event.target.value;
      render();
    });
  }
  const budgetSelect = document.querySelector("#budgetSelect");
  if (budgetSelect) {
    budgetSelect.addEventListener("change", (event) => {
      state.budget = event.target.value;
      render();
    });
  }
  const sortSelect = document.querySelector("#sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (event) => {
      state.sort = event.target.value;
      render();
    });
  }

  document.querySelectorAll("[data-thumb]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = location.hash.replace("#product-", "") || products[0].id;
      state.gallery[id] = Number(button.dataset.thumb);
      render();
    });
  });

  const orderForm = document.querySelector("#orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", (event) => {
      event.preventDefault();
      document.querySelector("#formResult").textContent =
        "Спасибо! Мы получили заявку и скоро свяжемся с вами для подтверждения заказа.";
    });
  }

  const accountForm = document.querySelector("#accountForm");
  if (accountForm) {
    accountForm.addEventListener("submit", (event) => {
      event.preventDefault();
      document.querySelector("#accountResult").textContent =
        "Аккаунт готов для продолжения оформления.";
    });
  }
}

function render() {
  const hash = location.hash.replace("#", "") || "home";
  const app = document.querySelector("#app");
  let html = "";

  if (hash === "home") html = homePage();
  else if (hash === "catalog") html = catalogPage();
  else if (hash === "account") html = accountPage();
  else if (hash === "bag") html = bagPage();
  else if (hash === "checkout-delivery") html = deliveryPage();
  else if (hash === "checkout-payment") html = paymentPage();
  else if (hash === "checkout-review") html = reviewPage();
  else if (hash === "checkout-success") html = successPage();
  else if (hash === "compare") html = comparePage();
  else if (hash === "contacts") html = contactsPage();
  else if (hash.startsWith("product-")) html = productPage(hash.replace("product-", ""));
  else if (hash.startsWith("service-")) html = servicePage(hash.replace("service-", ""));
  else html = homePage();

  app.innerHTML = html;
  bindEvents();
  app.focus({ preventScroll: true });
}

window.addEventListener("hashchange", render);
render();
