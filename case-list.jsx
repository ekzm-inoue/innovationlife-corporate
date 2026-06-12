// ============================================================
// Innovation Life — Case list page (/case/)
// 事例紹介一覧
// ============================================================

const CASE_LIST = {
  heroImage: 'assets/case_hero.png',
  heroTitleEn: 'Case Studies',
  heroTitleJa: '事例紹介',

  intro:
    'インテリア提案サービス「カグラク」を通じて手がけた、これまでのコーディネート事例をご紹介します。施主様のライフスタイルやご要望に合わせた、世界に一つの空間づくりをご覧いただけます。',

  filters: ['すべて', '戸建て', 'マンション', 'オフィス・店舗', 'リノベーション'],

  items: [
    {
      id: 'sample-027',
      num: 'CASE 027',
      tag: '戸建て',
      thumb: 'assets/hero_living_planning.png',
      customer: 'T 様',
      family: '4人家族',
      type: '新築・戸建て（3LDK）',
      room: 'リビング・ダイニング・キッチン',
      budget: '100〜150万円',
    },
    {
      id: '026',
      num: 'CASE 026',
      tag: 'マンション',
      thumb: 'assets/item_sofa.png',
      customer: 'K 様',
      family: 'ご夫婦＋お子様1名',
      type: 'マンション（2LDK）',
      room: 'リビング・寝室',
      budget: '80〜120万円',
    },
    {
      id: '025',
      num: 'CASE 025',
      tag: 'リノベーション',
      thumb: 'assets/item_living_table.png',
      customer: 'M 様',
      family: 'ご夫婦',
      type: '中古マンション・リノベーション',
      room: 'LDK・書斎',
      budget: '150〜200万円',
    },
    {
      id: '024',
      num: 'CASE 024',
      tag: '戸建て',
      thumb: 'assets/item_dining.png',
      customer: 'S 様',
      family: '5人家族',
      type: '新築・戸建て（4LDK）',
      room: 'ダイニング・キッチン',
      budget: '120〜180万円',
    },
    {
      id: '023',
      num: 'CASE 023',
      tag: 'オフィス・店舗',
      thumb: 'assets/item_chair.png',
      customer: 'A 社',
      family: '小規模オフィス',
      type: '店舗・スモールオフィス',
      room: 'エントランス・執務エリア',
      budget: '200〜300万円',
    },
    {
      id: '022',
      num: 'CASE 022',
      tag: '戸建て',
      thumb: 'assets/hero_furniture_design.png',
      customer: 'N 様',
      family: '3人家族',
      type: '新築・戸建て（3LDK）',
      room: 'リビング・主寝室・子供部屋',
      budget: '100〜150万円',
    },
  ],
};

// ---------- Hero ----------
function CaseListHero() {
  return (
    <section
      className="il-page-hero"
      style={{ backgroundImage: `url(${CASE_LIST.heroImage})` }}
    >
      <div className="il-page-hero__inner">
        <p className="il-page-hero__eyebrow">INNOVATION LIFE INC.</p>
        <h1 className="il-page-hero__title">Case&nbsp;Studies</h1>
        <div className="il-page-hero__rule"></div>
        <div style={{ marginTop: 24 }}>
          <span className="il-page-hero__title-ja">{CASE_LIST.heroTitleJa}</span>
        </div>
      </div>
    </section>
  );
}

function CaseListBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        事例紹介
      </div>
    </div>
  );
}

function CaseListIntro() {
  return (
    <section className="il-section--paper" style={{ borderBottom: '1px solid var(--il-linen)' }}>
      <div className="il-builder-lead">
        <div>
          <p className="il-builder-lead__eyebrow">OUR WORKS</p>
          <h2 className="il-builder-lead__title">
            ひとつとして同じものはない、<em>暮らしの記録</em>
          </h2>
        </div>
        <div>
          <p className="il-builder-lead__body">{CASE_LIST.intro}</p>
        </div>
      </div>
    </section>
  );
}

function CaseListGrid() {
  const [active, setActive] = React.useState('すべて');

  const filtered = CASE_LIST.items.filter((c) => {
    if (active === 'すべて') return true;
    return c.tag === active;
  });

  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-caselist-toolbar">
          <div className="il-caselist-toolbar__count">
            ALL <strong>{CASE_LIST.items.length}</strong> CASES
          </div>
          <div className="il-caselist-toolbar__filters">
            {CASE_LIST.filters.map((f) => (
              <button
                key={f}
                className={`il-caselist-toolbar__filter ${f === active ? 'is-active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="il-caselist">
          {filtered.map((c) => (
            <a key={c.id} className="il-caselist__card" href="case-detail.html">
              <div className="il-caselist__media">
                <span className="il-caselist__num">{c.num}</span>
                <span className="il-caselist__tag">{c.tag}</span>
                <img src={c.thumb} alt="" />
              </div>
              <h3 className="il-caselist__customer">
                <em>{c.customer}</em>
              </h3>
              <p className="il-caselist__family">{c.family}</p>
              <div className="il-caselist__rows">
                <div className="il-caselist__row">
                  <span className="il-caselist__row-label">
                    TYPE
                    <span className="ja">お住まいの形態</span>
                  </span>
                  <span className="il-caselist__row-value">{c.type}</span>
                </div>
                <div className="il-caselist__row">
                  <span className="il-caselist__row-label">
                    ROOM
                    <span className="ja">コーディネートしたお部屋</span>
                  </span>
                  <span className="il-caselist__row-value">{c.room}</span>
                </div>
                <div className="il-caselist__row">
                  <span className="il-caselist__row-label">
                    BUDGET
                    <span className="ja">ご予算</span>
                  </span>
                  <span className="il-caselist__row-value">
                    <strong>{c.budget}</strong>
                  </span>
                </div>
              </div>
              <span className="il-caselist__more">
                詳細を見る
                <span className="il-caselist__more-arrow"></span>
              </span>
            </a>
          ))}
        </div>

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

// CTA band
function CaseListCTA() {
  return (
    <section className="il-dual-cta">
      <div className="il-dual-cta__inner">
        <div className="il-dual-cta__col">
          <p className="il-dual-cta__col-eyebrow">FAQ</p>
          <h3 className="il-dual-cta__col-title">よくあるご質問</h3>
          <a className="il-btn il-btn--ghost-inv" href="faq.html">
            よくあるご質問を見る
            <span className="il-arrow"></span>
          </a>
        </div>
        <div className="il-dual-cta__rule"></div>
        <div className="il-dual-cta__col">
          <p className="il-dual-cta__col-eyebrow">CONTACT</p>
          <h3 className="il-dual-cta__col-title">お問い合わせ</h3>
          <a className="il-btn il-btn--ghost-inv" href="index.html#contact">
            お問い合わせフォーム
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CaseListPage() {
  return (
    <>
      <ILHeader />
      <CaseListHero />
      <CaseListBreadcrumb />
      <CaseListIntro />
      <CaseListGrid />
      <CaseListCTA />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CaseListPage />);
