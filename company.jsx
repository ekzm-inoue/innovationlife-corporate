// ============================================================
// Innovation Life — Company (/company/) page
// ============================================================

const COMPANY = {
  heroImage: 'assets/company_hero.png',
  heroTitleJa: '会社情報',

  lead: '工務店・戸建て住宅施主・インテリアコーディネーター・家具インテリアメーカーをつなぐオンラインプラットフォーム『カグラク』を運営し、新築住宅に理想の空間を提供・実現します。',

  greeting: {
    portrait: 'assets/ceo_sato.jpg',
    titleEn: 'MESSAGE FROM CEO',
    titleJa: 'ごあいさつ',
    body: [
      '私どもの基本理念は、売り手・買い手・社会・働き手を「四方よし」にすることでございます。',
      'それは、関わるステークホルダーのすべてを良くすることが、私どもの存在意義だと考えているからです。',
      'すべてのステークホルダーが良くなることで、私どもの喜びに変わり、それが原動力になる。そのような組織を目指しております。',
      'いまの当社があるのも、お客様や仕入先様、そして従業員の皆様に応援いただいた結果でございます。',
      '信用信頼ができる会社となり、これからも「四方よし」となるように追求してまいります。',
    ],
    role: '代表取締役',
    name: '佐藤 友彦',
  },

  profile: [
    {
      label: '商号',
      en: 'COMPANY NAME',
      value: 'イノベーションライフ株式会社',
    },
    {
      label: '代表',
      en: 'REPRESENTATIVE',
      value: '代表取締役　佐藤 友彦',
    },
    {
      label: '事業内容',
      en: 'BUSINESS',
      list: [
        'インテリアコーディネート業務',
        '注文住宅向けのインテリアオプション企画・販売 ／ 他',
        'インテリア提案サービス「カグラク」運営',
      ],
    },
    {
      label: '設立',
      en: 'FOUNDED',
      value: '2019年',
    },
    {
      label: '所在地',
      en: 'ADDRESS',
      value: '〒729-0142　広島県尾道市西藤町 226 番地',
    },
    {
      label: 'お問い合わせ',
      en: 'CONTACT',
      email: 'info@kaguraku.jp',
    },
  ],

  furnitureMakers: [
    { name: '4FUL株式会社', url: 'https://4ful.co.jp/' },
    { name: '株式会社関家具', url: 'https://www.sekikagu.co.jp/' },
    { name: 'モリタインテリア工業株式会社', url: 'https://www.moritanet.com/' },
    { name: '株式会社チヨダコーポレーション', url: 'https://chiyoda-corp.co.jp/' },
    { name: '株式会社フジシ', url: 'http://fujishi.com/' },
    { name: '株式会社ミキモク', url: 'http://www.mikimoku.co.jp/' },
    { name: '株式会社堀田木工所', url: 'https://hotta-woody.com/' },
    { name: '株式会社すえ木工', url: 'https://www.suemokko.co.jp/' },
    { name: '有限会社カイバラ工芸', url: 'https://kaibarakougei.com/' },
    { name: '株式会社アサヒ', url: 'http://www.asahi-mok.co.jp/' },
  ],

  related: [
    {
      num: '01',
      name: '4FUL株式会社（旧 佐藤産業株式会社）',
      addr: '〒729-0142　広島県尾道市西藤町 226',
      url: 'https://4ful.co.jp/',
    },
    {
      num: '02',
      name: '株式会社 フェイス',
      addr: '〒980-0014　宮城県仙台市青葉区本町 3-2-1 ハーフムーンビル 4F',
      url: 'https://faith-1.co.jp/',
    },
  ],
};

// ---------- Page hero ----------
function CompanyHero() {
  return (
    <section
      className="il-page-hero"
      style={{ backgroundImage: `url(${COMPANY.heroImage})` }}
    >
      <div className="il-page-hero__inner">
        <p className="il-page-hero__eyebrow">INNOVATION LIFE INC.</p>
        <h1 className="il-page-hero__title">About&nbsp;Us</h1>
        <div className="il-page-hero__rule"></div>
        <div style={{ marginTop: 24 }}>
          <span className="il-page-hero__title-ja">{COMPANY.heroTitleJa}</span>
        </div>
      </div>
    </section>
  );
}

// ---------- Breadcrumb ----------
function Breadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        会社情報
      </div>
    </div>
  );
}

// ---------- Lead band ----------
function LeadBand() {
  return (
    <section className="il-lead-band">
      <div className="il-lead-band__inner">
        <p className="il-lead-band__copy">
          {COMPANY.lead.split('『カグラク』').map((part, i, arr) =>
            i < arr.length - 1
              ? <React.Fragment key={i}>{part}<em>『カグラク』</em></React.Fragment>
              : <React.Fragment key={i}>{part}</React.Fragment>
          )}
        </p>
      </div>
    </section>
  );
}

// ---------- Greeting ----------
function Greeting() {
  const g = COMPANY.greeting;
  return (
    <section id="message" className="il-section">
      <div className="il-container">
        <div className="il-greeting">
          <div
            className="il-greeting__portrait"
            style={{ backgroundImage: `url(${g.portrait})` }}
            aria-hidden="true"
          />
          <div>
            <h2 className="il-greeting__title">
              <small>{g.titleEn}</small>
              {g.titleJa}
            </h2>
            <div className="il-greeting__body">
              {g.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="il-greeting__signoff">
              <small>{g.role}</small>
              <span className="il-greeting__name">{g.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Company profile (table) ----------
function Profile() {
  return (
    <section id="profile" className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-profile-head">
          <h2 className="il-profile-head__title">
            <small>COMPANY PROFILE</small>
            会社概要
          </h2>
          <span className="il-profile-head__meta">2026 — INNOVATION LIFE</span>
        </div>
        <div className="il-profile">
          {COMPANY.profile.map((row) => (
            <div className="il-profile-row" key={row.label}>
              <div className="il-profile-row__label">
                {row.label}
                <small>{row.en}</small>
              </div>
              <div className="il-profile-row__value">
                {row.list ? (
                  <ul>{row.list.map((l, i) => <li key={i}>{l}</li>)}</ul>
                ) : row.email ? (
                  <a className="email" href={`mailto:${row.email}`}>{row.email}</a>
                ) : (
                  row.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Partners list ----------
function PartnersList() {
  return (
    <section id="partners" className="il-section">
      <div className="il-container">
        <div className="il-profile-head">
          <h2 className="il-profile-head__title">
            <small>PARTNERS</small>
            パートナー一覧
          </h2>
          <span className="il-profile-head__meta">FURNITURE MAKERS</span>
        </div>

        <ul className="il-maker-list">
          {COMPANY.furnitureMakers.map((m) => (
            <li className="il-maker-list__item" key={m.name}>
              <a href={m.url} target="_blank" rel="noopener noreferrer">{m.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- 4FUL Group ----------
function FulGroup() {
  return (
    <section id="group" className="il-section il-group">
      <div className="il-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="il-group__head">
          <p className="il-group__eyebrow">BUSINESS</p>
          <h2 className="il-group__title">
            私たちは<em>住空間</em>の<br/>
            スペシャリスト集団です
          </h2>
        </div>

        <div className="il-group__diagram">
          <img
            src="assets/business_diagram.webp"
            alt="4FULグループの事業構造図：DtoC事業（FURneTURE・SESAME）、4FUL（家具の製造・卸売）、プラットフォーム事業（FAITH・カグラク）"
            style={{ display: 'block', width: '100%', maxWidth: 1080, height: 'auto', margin: '0 auto', gridColumn: '1 / -1', justifySelf: 'center' }}
          />
        </div>

        <p className="il-group__desc">
          「<em>住空間</em>」×「<em>ライフスタイル</em>」＝「<em>住ライフスタイル創造企業</em>」が、4FULグループのコンセプトです。<br/>
          自社工場にて家具の開発・製造、ECでの販売を行うDtoC事業と、<br/>
          マーケットを横断し事業領域を拡大するプラットフォーム事業、2軸の事業を展開しています。
        </p>

        <div className="il-group__cta">
          <a
            className="il-btn il-btn--primary"
            href="https://4ful.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            4FUL公式サイトを見る
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Related companies ----------
function Related() {
  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-profile-head">
          <h2 className="il-profile-head__title">
            <small>OUR GROUP</small>
            関連会社
          </h2>
          <span className="il-profile-head__meta">GROUP COMPANIES</span>
        </div>
        <ul className="il-related-list">
          {COMPANY.related.map((r) => (
            <li className="il-related-list__item" key={r.num}>
              <p className="il-related-list__num">{r.num} / 0{COMPANY.related.length}</p>
              <h3 className="il-related-list__name">{r.name}</h3>
              <p className="il-related-list__addr">{r.addr}</p>
              <a
                className="il-related-list__url"
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {r.url}
                <span className="il-related-list__url-arrow"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- Final contact band ----------
function FinalBand() {
  return (
    <section className="il-final-band">
      <div className="il-final-band__inner">
        <p className="il-eyebrow il-eyebrow--inverted" style={{ marginBottom: 16 }}>
          CONTACT US
        </p>
        <h2 className="il-final-band__title">
          ご相談・ご質問は、<br/>
          お気軽に<em>お問い合わせ</em>ください。
        </h2>
        <p className="il-final-band__sub">
          家具メーカー様・工務店様・個人のお客様、どなたからのご連絡もお待ちしております。
        </p>
        <div className="il-final-band__cta">
          <a className="il-btn il-btn--primary" href="index.html#contact">
            お問い合わせフォーム
            <span className="il-arrow"></span>
          </a>
          <a className="il-btn il-btn--ghost-inv" href="index.html">
            トップへ戻る
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Page ----------
function CompanyPage() {
  React.useEffect(() => {
    // React renders after the browser has already processed the URL hash,
    // so native anchor scrolling fails on cross-page links (e.g. index.html#partners).
    // Re-run the scroll once the target section exists in the DOM.
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const jump = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo(0, top);
      return true;
    };
    // Re-apply over ~1.5s so late layout shifts (image loads, fonts) don't
    // leave the target off-screen. Cross-page hash links land reliably this way.
    const delays = [0, 60, 150, 300, 500, 800, 1200, 1600];
    const timers = delays.map((d) => setTimeout(jump, d));
    window.addEventListener('load', jump);
    return () => { timers.forEach(clearTimeout); window.removeEventListener('load', jump); };
  }, []);

  return (
    <>
      <ILHeader />
      <CompanyHero />
      <Breadcrumb />
      <LeadBand />
      <Greeting />
      <Profile />
      <PartnersList />
      <FulGroup />
      <FinalBand />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CompanyPage />);
