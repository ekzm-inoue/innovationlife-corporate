// ============================================================
// Innovation Life — Makers page (/makers/)
// 家具メーカーの方へ
// ============================================================

const MAKERS = {
  heroImage: 'assets/hero_furniture_design.png',
  heroTitleEn: 'For Furnituremakers',
  heroTitleJa: '家具メーカーの方へ',

  lead: {
    eyebrow: 'WHY KAGURAKU',
    title: ['商品情報をご提供いただくだけで、', { em: '住宅市場にアプローチ' }],
    body: '御社の商品をカグラクに掲載するだけで、インテリア感度の高い住宅市場の顧客層にアプローチできます。家具メーカー様のブランド価値を高めるプラットフォームです。',
  },

  features: [
    {
      num: '01',
      eyebrow: 'DIRECT TO CONSUMER',
      title: ['住宅市場の消費者に', { em: '商品を直接提案' }],
      body: '住宅市場の新築住宅購入者に対し、トータルコーディネート提案を行います。他社商品と共にコーディネートすることで、商品単品・単独ブランドでは難しいライフスタイル提案が可能となります。',
      image: 'assets/hero_living_planning.png',
    },
    {
      num: '02',
      eyebrow: 'EXPAND ONLINE CHANNEL',
      title: ['オンラインで', { em: '販売チャネルを拡大' }],
      body: '家具メーカー様は営業活動をせずとも、住宅市場の顧客層に商品情報が届きます。ブランドや商品を住宅市場の消費者に対しアプローチすることで、ECでの販売力強化をサポートします。',
      image: 'assets/item_chair.png',
      reverse: true,
    },
    {
      num: '03',
      eyebrow: 'NO WORKFLOW CHANGES',
      title: ['業務フローを変えず、', { em: '住宅市場へ越境' }],
      body: '業務フローを一切変更せず、住宅市場での販売が可能です。これまでリーチできなかった顧客層と、新たな需要の発掘により、販売数の拡大が見込めます。',
      image: 'assets/item_sofa.png',
    },
    {
      num: '04',
      eyebrow: 'TRULY GOOD FURNITURE',
      title: [
        '施主様のライフスタイル実現に特化。',
        { em: '「本当に良い家具」' },
        'をお届けします',
      ],
      body: '顧客の要望ごとに細やかにパーソナライズしたコーディネート提案と利便性を提供することで、貴社ブランド・商品価値を高めるサポートをします。必要とする方に「本当に良い家具」をお届けする仕組みを作ることで、家具市場全体の活性化を目指します。',
      image: 'assets/item_dining.png',
      reverse: true,
    },
  ],

  flow: {
    title: 'ご利用の流れ',
    titleEn: 'PROCESS',
    sub: '商品掲載から購入・納品完了まで、カグラクにすべてお任せください。',
    steps: [
      {
        num: '01',
        title: '商品掲載',
        body: '商品情報が掲載され、インテリアコーディネーターと施主が閲覧可能となります。',
      },
      {
        num: '02',
        title: 'コーディネート提案',
        body: 'インテリアコーディネーターが、掲載商品の中から施主の要望に応じたコーディネートを提案します。',
      },
      {
        num: '03',
        title: 'ご購入',
        body: '商品購入のご連絡後、指定倉庫に商品を配送いただきます。',
      },
      {
        num: '04',
        title: '一括配送',
        body: '指定倉庫から施主宅に商品が一括配送されます。',
      },
      {
        num: '05',
        title: '組立・設置',
        body: '施主様宅へ一括配送・組立設置を行い、納品完了となります。カグラクから商品代金のお支払いを行います。',
      },
    ],
  },

  download: {
    label: '資料ダウンロード',
  },
};

// ---------- Helper ----------
function renderRich(arr) {
  return arr.map((p, i) =>
    typeof p === 'string'
      ? <React.Fragment key={i}>{p}</React.Fragment>
      : <em key={i}>{p.em}</em>
  );
}

// ---------- Page hero ----------
function MakersHero() {
  return (
    <section
      className="il-page-hero"
      style={{ backgroundImage: `url(${MAKERS.heroImage})` }}
    >
      <div className="il-page-hero__inner">
        <p className="il-page-hero__eyebrow">INNOVATION LIFE INC. ／ FOR MAKERS</p>
        <h1 className="il-page-hero__title">For&nbsp;Furnituremakers</h1>
        <div className="il-page-hero__rule"></div>
        <div style={{ marginTop: 24 }}>
          <span className="il-page-hero__title-ja">{MAKERS.heroTitleJa}</span>
        </div>
      </div>
    </section>
  );
}

// ---------- Breadcrumb ----------
function MakerBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        <a href="index.html#services">サービス</a>
        <span>／</span>
        家具メーカーの方へ
      </div>
    </div>
  );
}

// ---------- Lead ----------
function MakerLead() {
  return (
    <section className="il-section--paper" style={{ borderBottom: '1px solid var(--il-linen)' }}>
      <div className="il-builder-lead">
        <div>
          <p className="il-builder-lead__eyebrow">{MAKERS.lead.eyebrow}</p>
          <h2 className="il-builder-lead__title">{renderRich(MAKERS.lead.title)}</h2>
        </div>
        <div>
          <p className="il-builder-lead__body">{MAKERS.lead.body}</p>
        </div>
      </div>
    </section>
  );
}

// ---------- Features ----------
function MakerFeatures() {
  return (
    <section className="il-section">
      <div className="il-container">
        {MAKERS.features.map((f, i) => (
          <div key={i} className={`il-feature ${f.reverse ? 'il-feature--reverse' : ''}`}>
            <div className="il-feature__media" style={{ backgroundImage: `url(${f.image})` }}>
              <span className="il-feature__media-num">FEATURE {f.num}</span>
            </div>
            <div className="il-feature__body">
              <p className="il-feature__eyebrow">{f.eyebrow}</p>
              <h3 className="il-feature__title">{renderRich(f.title)}</h3>
              <p>{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Flow ----------
function MakerFlow() {
  const f = MAKERS.flow;
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-flow-head">
          <p className="il-eyebrow">{f.titleEn}</p>
          <h2 className="il-h-section" style={{ marginBottom: 0 }}>{f.title}</h2>
          <p className="il-flow-sub">{f.sub}</p>
        </div>

        <div className="il-flow">
          {f.steps.map((s) => (
            <div key={s.num} className="il-flow-step">
              <span className="il-flow-step__num">{s.num}</span>
              <h4 className="il-flow-step__title">{s.title}</h4>
              <p className="il-flow-step__body">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="il-download">
          <a className="il-download__btn" href="#download">
            {MAKERS.download.label}はこちら
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Dual CTA (shared green band) ----------
function MakerDualCTA() {
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

// ---------- Page ----------
function MakersPage() {
  return (
    <>
      <ILHeader />
      <MakersHero />
      <MakerBreadcrumb />
      <MakerLead />
      <MakerFeatures />
      <MakerFlow />
      <MakerDualCTA />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MakersPage />);
