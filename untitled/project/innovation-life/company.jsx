// ============================================================
// Innovation Life — Company (/company/) page
// ============================================================

const COMPANY = {
  heroImage: 'assets/hero_living_planning.png',
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
          {/* DtoC ── left */}
          <div className="il-group__side il-group__side--left">
            <p className="il-group__side-label">
              DtoC 事業
              <small>D2C</small>
            </p>
            <div className="il-group__side-chips">
              <div className="il-group__chip">
                <div className="il-group__chip-text">
                  FUR<span style={{ fontSize: 12, letterSpacing: '0.1em' }}>ne</span>TURE
                </div>
              </div>
              <div className="il-group__chip">
                <div className="il-group__chip-text">
                  SESAME
                  <span className="ja">暮らしを開く鍵</span>
                </div>
              </div>
            </div>
            <p className="il-group__side-caption">
              家具の企画開発から販売までを<br/>一気通貫で行う
            </p>
          </div>

          {/* 4FUL center */}
          <div className="il-group__center">
            <div className="il-group__center-chip">
              <img src="assets/logo_4ful.png" alt="4FUL" />
            </div>
            <span className="il-group__center-caption">家具の製造・卸売</span>
          </div>

          {/* Platform ── right */}
          <div className="il-group__side il-group__side--right">
            <p className="il-group__side-label">
              プラットフォーム事業
              <small>PLATFORM</small>
            </p>
            <div className="il-group__side-chips">
              <div className="il-group__chip">
                <div className="il-group__chip-text">
                  FAITH
                  <span className="ja">フェイス</span>
                </div>
              </div>
              <div className="il-group__chip">
                <img src="assets/kaguraku_logo.png" alt="カグラク" />
              </div>
            </div>
            <p className="il-group__side-caption">
              家具市場と住宅市場を融合し<br/>ビジネスを拡大する
            </p>
          </div>
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
  return (
    <>
      <ILHeader />
      <CompanyHero />
      <Breadcrumb />
      <LeadBand />
      <Greeting />
      <Profile />
      <FulGroup />
      <FinalBand />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CompanyPage />);
