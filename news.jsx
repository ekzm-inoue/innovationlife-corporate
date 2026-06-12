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
      categories: ['すべて', 'お知らせ', 'プレスリリース', 'メディア'],
      items: [
        { date: '2026.05.10', cat: 'お知らせ',       title: 'GW期間中の営業時間に関するご案内' },
        { date: '2026.04.18', cat: 'プレスリリース', title: '家具メーカー向けサービス「AFF」、2024年版資料を更新いたしました' },
        { date: '2026.04.02', cat: 'お知らせ',       title: '本社オフィス移転のお知らせ' },
        { date: '2026.03.20', cat: 'メディア',       title: '住宅専門誌『MODERN LIVING』にカグラクが掲載されました' },
        { date: '2026.03.05', cat: 'お知らせ',       title: '春の家具・照明 新作お披露目会のご案内' },
        { date: '2026.02.14', cat: 'お知らせ',       title: '工務店様向けオンラインセミナーを開催いたします' },
        { date: '2026.02.01', cat: 'プレスリリース', title: '4FULグループにおける2026年度の事業方針について' },
        { date: '2026.01.18', cat: 'メディア',       title: '日経クロストレンドにて、カグラクの取り組みが紹介されました' },
        { date: '2026.01.07', cat: 'お知らせ',       title: '新年のご挨拶 — 2026年の取り組みについて' },
        { date: '2025.12.20', cat: 'お知らせ',       title: '年末年始休業のお知らせ' },
      ],
    },
    ブログ: {
      categories: ['すべて', 'インテリア', 'コラム', '事例', 'イベント'],
      items: [
        { date: '2026.05.15', cat: 'インテリア', title: '北欧家具と日本の住まい — 引き算でつくる調和' },
        { date: '2026.05.07', cat: 'コラム',     title: 'コーディネーターの一日：お打合せから現場までの裏側' },
        { date: '2026.04.28', cat: 'インテリア', title: '失敗しないソファ選び、3つの視点' },
        { date: '2026.04.15', cat: 'コラム',     title: '家具メーカー様との協業事例：愛着のある一脚をつくる' },
        { date: '2026.04.02', cat: 'インテリア', title: '光のレイヤリング — 一室に必要な3つの灯' },
        { date: '2026.03.21', cat: 'イベント',   title: '家具メーカー様向け展示会レポート — 春の市2026' },
        { date: '2026.03.02', cat: 'インテリア', title: 'カーテンの色で、暮らしの温度が変わる話' },
        { date: '2026.02.18', cat: '事例',       title: '杉並の家 — 引き算の余白を活かすリビング設計' },
        { date: '2026.01.30', cat: 'コラム',     title: '新生活、家具を「揃える」から「選ぶ」へ' },
        { date: '2026.01.12', cat: 'インテリア', title: 'ラグ一枚で変わる、リビングの居心地' },
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
            <a key={i} className="il-news-item" href="news-detail.html">
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
        <div className="il-pagination">
          <span className="il-pagination__arrow">←</span>
          <a href="#" className="is-current">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#" className="il-pagination__arrow">→</a>
        </div>
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
