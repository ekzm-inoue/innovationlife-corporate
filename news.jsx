// ============================================================
// Innovation Life — News & Blog list page (/news/)
// お知らせ一覧
// ============================================================

const NEWS_DATA = {
  heroImage: 'assets/news_hero.png',
  heroTitleJa: 'お知らせ・ブログ',

  intro:
    'イノベーションライフ株式会社からのお知らせ、メディア掲載情報、インテリアの選び方やコーディネーターによるコラムをお届けしています。',

  tabs: {
    お知らせ: {
      categories: ['すべて', 'お知らせ'],
      items: [
        { id: '003', date: '2026.04.27', cat: 'お知らせ', title: 'GW期間中の休業のお知らせ' },
        { id: '002', date: '2025.12.29', cat: 'お知らせ', title: '年末年始休業のお知らせ' },
        { id: '001', date: '2025.10.20', cat: 'お知らせ', title: '「アジア・ファニシング・フェア 2025」出展のお知らせ' },
      ],
    },
    ブログ: {
      categories: ['すべて', '事例紹介', 'コラム'],
      items: [
        { id: 'b003', date: '2026.06.22', cat: 'コラム', title: '【インテリアのコツ】部屋がごちゃごちゃして見える原因は？プロが教える「失敗しない配色の黄金ルール」' },
        { id: 'b002', date: '2026.06.15', cat: '事例紹介',       title: '【施工事例】オフィス家具の納品と内装プチリノベーションで叶える、お客様を迎え入れる快適な商談スペース' },
        { id: 'b001', date: '2026.06.08', cat: '事例紹介', title: '【コーディネート事例】ご予算40万円で叶える、統一感のあるトータルインテリアコーディネート' },
      ],
    },
  },
};

// ---------- Hero ----------
function NewsHero() {
  return (
    <section
      className="il-page-hero"
      style={{ backgroundImage: `url(${NEWS_DATA.heroImage})` }}
    >
      <div className="il-page-hero__inner">
        <p className="il-page-hero__eyebrow">INNOVATION LIFE INC.</p>
        <h1 className="il-page-hero__title">News&nbsp;&amp;&nbsp;Blogs</h1>
        <div className="il-page-hero__rule"></div>
        <div style={{ marginTop: 24 }}>
          <span className="il-page-hero__title-ja">{NEWS_DATA.heroTitleJa}</span>
        </div>
      </div>
    </section>
  );
}

function NewsBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        お知らせ・ブログ
      </div>
    </div>
  );
}

function NewsIntro() {
  return (
    <section className="il-section--paper" style={{ borderBottom: '1px solid var(--il-linen)' }}>
      <div className="il-builder-lead">
        <div>
          <p className="il-builder-lead__eyebrow">NEWS & BLOGS</p>
          <h2 className="il-builder-lead__title">
            私たちの<em>日々の活動</em>と、暮らしのヒントを。
          </h2>
        </div>
        <div>
          <p className="il-builder-lead__body">{NEWS_DATA.intro}</p>
        </div>
      </div>
    </section>
  );
}

// ---------- List ----------
function NewsList() {
  const tabKeys = Object.keys(NEWS_DATA.tabs);
  const [tab, setTab] = React.useState(tabKeys[0]);
  const [cat, setCat] = React.useState('すべて');

  // Reset category when switching tabs
  const onTab = (t) => { setTab(t); setCat('すべて'); };

  const tabData = NEWS_DATA.tabs[tab];
  const items = tabData.items.filter((n) => cat === 'すべて' || n.cat === cat);

  return (
    <section className="il-section">
      <div className="il-container">
        {/* Tabs */}
        <div className="il-news-tabs">
          {tabKeys.map((t) => (
            <button
              key={t}
              className={`il-news-tab ${t === tab ? 'is-active' : ''}`}
              onClick={() => onTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Filter chips */}
        <div className="il-caselist-toolbar">
          <div className="il-caselist-toolbar__count">
            ALL <strong>{tabData.items.length}</strong> ITEMS
          </div>
          <div className="il-caselist-toolbar__filters">
            {tabData.categories.map((c) => (
              <button
                key={c}
                className={`il-caselist-toolbar__filter ${c === cat ? 'is-active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="il-news-list">
          {items.map((n, i) => (
            <a key={i} className="il-news-item" href={n.id ? `news-detail.html?id=${n.id}` : 'news-detail.html'}>
              <span className="il-news-date">{n.date}</span>
              <span className="il-news-cat">{n.cat}</span>
              <span className="il-news-title">{n.title}</span>
              <span className="il-news-arrow"></span>
            </a>
          ))}
          {items.length === 0 && (
            <p style={{ textAlign: 'center', padding: '80px 0', color: 'var(--il-stone)' }}>
              該当する{tab}はございません。
            </p>
          )}
        </div>

        {/* Pagination */}
        {tabData.items.length > 9 && (
        <div className="il-pagination">
          <span className="il-pagination__arrow">←</span>
          <a href="#" className="is-current">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#" className="il-pagination__arrow">→</a>
        </div>
        )}
      </div>
    </section>
  );
}

// ---------- CTA ----------
function NewsCTA() {
  return (
    <section className="il-dual-cta">
      <div className="il-dual-cta__inner">
        <div className="il-dual-cta__col">
          <p className="il-dual-cta__col-eyebrow">CONTACT</p>
          <h3 className="il-dual-cta__col-title">お問い合わせ</h3>
          <a className="il-btn il-btn--ghost-inv" href="index.html#contact">
            お問い合わせフォーム
            <span className="il-arrow"></span>
          </a>
        </div>
        <div className="il-dual-cta__rule"></div>
        <div className="il-dual-cta__col">
          <p className="il-dual-cta__col-eyebrow">CASES</p>
          <h3 className="il-dual-cta__col-title">事例紹介</h3>
          <a className="il-btn il-btn--ghost-inv" href="case-list.html">
            事例一覧を見る
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsPage() {
  return (
    <>
      <ILHeader />
      <NewsHero />
      <NewsBreadcrumb />
      <NewsList />
      <NewsCTA />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NewsPage />);
