// ============================================================
// Innovation Life — Builders page (/builders/)
// 工務店・ハウスメーカー様向け
// ============================================================

const BUILDERS = {
  heroImage: 'assets/builders_hero.png',
  heroTitleEn: 'For Builders',
  heroTitleJa: '工務店・ハウスメーカーの方へ',

  lead: {
    eyebrow: 'WHY KAGURAKU',
    title: ['家具選びから設置まで、', { em: 'すべてお任せ' }, '。'],
    body: '大切な施主様の理想の空間をカタチにして、顧客満足度を高め、工務店様の企業価値を高めます。インテリア提案サービス「カグラク」が、家具・カーテン・照明の選定から物流・設置までを一気通貫でサポートいたします。',
  },

  features: [
    {
      num: '01',
      eyebrow: 'SERVICE & PROMOTION',
      title: ['サービス向上と', { em: '販促サポート' }],
      body: '住宅に加え、ライフスタイルの提案が可能となります。コーディネートされた魅力的な事例写真は、施主様へのご提案資料や、貴社の販促物・SNSにもご活用いただけます。',
      image: 'assets/builders_f1_living.png',
    },
    {
      num: '02',
      eyebrow: 'ONE-STOP COORDINATION',
      title: ['インテリア提案から家具設置まで、', { em: '一気通貫' }],
      body: '家具業界の専門家がサポートいたします。家具購入のノウハウも、社内にインテリアコーディネーターを抱える必要もありません。煩雑な選定・発注・納品・設置までを、当社が一括でお引き受けいたします。',
      image: 'assets/builders_f2_plan.png',
      reverse: true,
    },
    {
      num: '03',
      eyebrow: 'ONLINE MEETING',
      title: ['オンライン対応で', { em: '集客強化' }],
      body: '申込みから納品まで、大部分がオンラインで完結いたします。顧客のネット利用率の高まりに対応し、遠方の施主様や共働き世帯にもご案内しやすく、顧客層拡大が見込めます。',
      image: 'assets/builders_f3_tablet.png',
    },
    {
      num: '04',
      eyebrow: 'BOOST PURCHASE INTENT',
      title: ['住宅購入の', { em: '決め手' }, 'を後押し'],
      body: '住宅購入時のオプションとして、家具インテリアまでの包括的なサービスを施主様にご提案可能です。施主様に理想の空間での生活を想像いただくことで、住宅の購入意欲を高めます。',
      image: 'assets/builders_f4_consult.png',
      reverse: true,
    },
  ],

  flow: {
    title: 'ご利用の流れ',
    titleEn: 'PROCESS',
    sub: 'ご依頼はオンラインで完結。後はご納品までカグラクにお任せください。',
    steps: [
      {
        num: '01',
        title: 'お申込み・ご依頼',
        body: 'お申込み・ご依頼はオンラインで。受付確認後、必要情報をご提供いただきます。',
      },
      {
        num: '02',
        title: '施主様にヒアリング',
        body: 'インテリアコーディネーターがオンラインで施主様に直接ヒアリングを行います。',
      },
      {
        num: '03',
        title: 'コーディネート提案',
        body: 'コーディネートを施主様にご提案。修正やお見積算出のやり取りを行います。',
      },
      {
        num: '04',
        title: 'ご購入',
        body: 'ご購入後、お支払いや納品日の決定等、商品お届けに関する手続き・調整を行います。',
      },
      {
        num: '05',
        title: '配送・設置',
        body: '施主宅へ一括配送・組立設置を行います。',
        note: '※工務店様も立ち合いのケースがございます。',
      },
    ],
  },

  pricing: {
    title: '価格',
    titleEn: 'PRICING',
    cards: [
      { label: 'INITIAL COST', num: '0', name: '初期費用' },
      { label: 'SERVICE FEE',  num: '0', name: 'サービス利用料' },
    ],
    callout: 'お支払いは一切発生しません。',
    note: '施主様のカグラクを通した家具のご購入総額に応じて、工務店様にインセンティブをお支払いいたします。',
    foot: '※施主様の家具のご購入総額が一定額に達しない場合、またはコーディネート提案のみの場合は、施主様にコーディネート利用料が発生する場合があります。',
  },

  video: {
    title: '動画説明',
    titleEn: 'WATCH',
    overlayKicker: 'KAGURAKU FOR BUILDERS',
    overlayTitle: '【工務店様へ】カグラクのインテリアコーディネート',
    duration: '2分30秒',
  },

  download: {
    label: '資料ダウンロード',
  },
};

// ---------- Page hero ----------
function BuildersHero() {
  return (
    <section
      className="il-page-hero"
      style={{ backgroundImage: `url(${BUILDERS.heroImage})` }}
    >
      <div className="il-page-hero__inner">
        <p className="il-page-hero__eyebrow">INNOVATION LIFE INC. ／ FOR BUILDERS</p>
        <h1 className="il-page-hero__title">For&nbsp;Builders</h1>
        <div className="il-page-hero__rule"></div>
        <div style={{ marginTop: 24 }}>
          <span className="il-page-hero__title-ja">{BUILDERS.heroTitleJa}</span>
        </div>
      </div>
    </section>
  );
}

// ---------- Breadcrumb ----------
function BuilderBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        <a href="index.html#services">サービス</a>
        <span>／</span>
        工務店・ハウスメーカーの方へ
      </div>
    </div>
  );
}

// ---------- Helper: render mixed text (string|{em}) ----------
function renderRich(arr) {
  return arr.map((p, i) =>
    typeof p === 'string'
      ? <React.Fragment key={i}>{p}</React.Fragment>
      : <em key={i}>{p.em}</em>
  );
}

// ---------- Lead band ----------
function BuilderLead() {
  return (
    <section className="il-section--paper" style={{ borderBottom: '1px solid var(--il-linen)' }}>
      <div className="il-builder-lead">
        <div>
          <p className="il-builder-lead__eyebrow">{BUILDERS.lead.eyebrow}</p>
          <h2 className="il-builder-lead__title">{renderRich(BUILDERS.lead.title)}</h2>
        </div>
        <div>
          <p className="il-builder-lead__body">{BUILDERS.lead.body}</p>
        </div>
      </div>
    </section>
  );
}

// ---------- Feature blocks ----------
function BuilderFeatures() {
  return (
    <section className="il-section">
      <div className="il-container">
        {BUILDERS.features.map((f, i) => (
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
function BuilderFlow() {
  const f = BUILDERS.flow;
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-flow-head">
          <p className="il-eyebrow">{f.titleEn}</p>
          <h2 className="il-h-section" style={{ marginBottom: 0 }}>{f.title}</h2>
          <p className="il-flow-sub">{f.sub}</p>
        </div>

        <div className="il-flow-endpoints">
          <div>
            <span className="il-flow-endpoints__inner">
              <span className="dot"></span>
              工務店<small>BUILDER</small>
            </span>
          </div>
          <div className="il-flow-endpoints__right">
            <span className="il-flow-endpoints__inner">
              <small>DELIVERY</small>
              納品
              <span className="dot"></span>
            </span>
          </div>
        </div>

        <div className="il-flow">
          {f.steps.map((s) => (
            <div key={s.num} className="il-flow-step">
              <span className="il-flow-step__num">{s.num}</span>
              <h4 className="il-flow-step__title">{s.title}</h4>
              <p className="il-flow-step__body">{s.body}</p>
              {s.note && <p className="il-flow-step__note">{s.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Pricing ----------
function BuilderPricing() {
  const p = BUILDERS.pricing;
  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">{p.titleEn}</p>
          <h2 className="il-h-section">{p.title}</h2>
        </div>

        <div className="il-pricing">
          {p.cards.map((c, i) => (
            <div className="il-pricing-card" key={i}>
              <p className="il-pricing-card__label">{c.label}</p>
              <p className="il-pricing-card__value">
                <span className="num">{c.num}</span>
                <span className="yen">円</span>
              </p>
              <p className="il-pricing-card__name">{c.name}</p>
            </div>
          ))}
        </div>

        <div className="il-pricing-note">
          <strong>{p.callout}</strong>
          施主様のカグラクを通した家具のご購入総額に応じて、<br/>
          工務店様に<em>インセンティブ</em>をお支払いいたします。
          <small>{p.foot}</small>
        </div>
      </div>
    </section>
  );
}

// ---------- Video ----------
function BuilderVideo() {
  const v = BUILDERS.video;
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">{v.titleEn}</p>
          <h2 className="il-h-section">{v.title}</h2>
        </div>
        <div className="il-video">
          <div className="il-video__embed">
            <iframe
              src="https://www.youtube.com/embed/t6SICc1M8DA?si=2lucl8_9rJFPMojf"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="il-download">
          <a className="il-download__btn" href="#download">
            {BUILDERS.download.label}
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Dual CTA ----------
function BuilderDualCTA() {
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
function BuildersPage() {
  return (
    <>
      <ILHeader />
      <BuildersHero />
      <BuilderBreadcrumb />
      <BuilderLead />
      <BuilderFeatures />
      <BuilderFlow />
      <BuilderVideo />
      <BuilderDualCTA />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BuildersPage />);
