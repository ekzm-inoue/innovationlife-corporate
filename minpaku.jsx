// ============================================================
// Innovation Life — Minpaku page (/minpaku/)
// 民泊業者の方へ
// ============================================================

const MINPAKU = {
  heroImage: 'assets/mp_hero.png',
  heroTitleEn: 'For Vacation Rentals',
  heroTitleJa: '民泊業者様',

  lead: {
    eyebrow: 'WHY KAGURAKU',
    title: [
      '空間の価値を最大化し、',
      { em: '運営の負担と収益' },
      'を最適化。',
    ],
    body: 'カグラクは、家具・インテリアの選定から一括配送・組み立て・既存家具の撤去まで、民泊運営に必要な空間づくりをワンストップでご提案。「業務効率化」と「収益の最大化」を同時に実現する、戦略的パートナーとして伴走いたします。',
  },

  features: [
    {
      num: '01',
      eyebrow: 'ONE-STOP TURNKEY',
      title: [
        '空間まるごとを、',
        { br: true },
        { em: 'ワンストップ' },
        'でプロデュース',
      ],
      body:
        '家具を販売するだけではなく、壁紙・床・ラグ・照明・カーテンを含めた空間全体のコーディネートをご提案。家具の選定・調達から一括配送、現地での組み立て・設置までを承ります。管理業者様・オーナー様の手配やオペレーションの煩わしさを大幅に削減いたします。',
      image: 'assets/mp_f1.png',
      tags: ['壁・床・照明・カーテン', '一括配送・設置'],
    },
    {
      num: '02',
      eyebrow: 'COST-EFFICIENT GROUP SOURCING',
      title: [
        '自社グループ商材で、',
        { em: '原価から最適化' },
      ],
      body:
        '4FULグループの商品調達力を活用することで、外部仕入れでは難しい価格・納期・在庫の柔軟性を確保。コストを抑えながらも、空間の質を落とさないご提案が可能です。',
      image: 'assets/mp_f2.png',
      tags: ['4FUL', 'sayan sayan', 'グループサプライ'],
      reverse: true,
    },
    {
      num: '03',
      eyebrow: 'BUILT FOR CONVERSION',
      title: [
        '「写真映え」を意識した、',
        { em: '集客を生む空間設計' },
      ],
      body:
        'Airbnbをはじめとする予約プラットフォームで、最も重要な指標は「サムネイル写真での見栄え」。ターゲット層（インバウンド・20〜30代など）や立地（都会型／観光地型）に合わせたコンセプトルームをパッケージ化してご提案。宿泊者の満足度を高め、高評価レビューの獲得・宿泊単価の向上へ貢献します。',
      image: 'assets/mp_f3.png',
      tags: ['コンバージョン最適化', 'インバウンド向け', 'コンセプト設計'],
    },
    {
      num: '04',
      eyebrow: 'MAXIMIZE OCCUPANCY',
      title: [
        '収容人数を最大化する、',
        { em: '空間の有効活用' },
      ],
      body:
        'ビジネスホテルとの差別化を図り、1部屋あたりの収益（利回り）を上げる最も効果的な手段は「収容人数を増やす」こと。部屋の上部のデッドスペースを有効活用できるデザイン性の高いバンクベッド（2段ベッド）や、空間に合わせたセミ造作家具を導入し、限られた平米数でも大人数（4名以上）が快適に宿泊できる環境を構築いたします。',
      image: 'assets/mp_f4.png',
      tags: ['バンクベッド', 'セミ造作家具', '4名以上収容'],
      reverse: true,
    },
  ],

  metrics: {
    titleEn: 'IMPACT',
    title: '導入の3つのインパクト',
    sub: '管理業者様の「業務効率化」と、オーナー様の「収益最大化」を、同時に実現します。',
    items: [
      {
        kpi: 'ワンストップ',
        unit: '',
        label: '選定から撤去・設置まで一括',
        body: '複数業者への手配・調整が不要に。',
      },
      {
        kpi: '収容人数UP',
        unit: '',
        label: '1室あたりの収容人数を拡張',
        body: 'バンクベッド／造作家具の活用。',
      },
      {
        kpi: '予約率向上',
        unit: '',
        label: '写真映えする空間で予約率向上',
        body: 'プラットフォーム露出に最適化。',
      },
    ],
  },

  flow: {
    title: 'ご導入の流れ',
    titleEn: 'PROCESS',
    sub: '物件のご共有から、撮影・運用開始まで。最短ルートでお手配いたします。',
    steps: [
      {
        num: '01',
        title: 'ヒアリング',
        body: '物件情報・ターゲット層・運用方針について、オンラインにてヒアリングいたします。',
      },
      {
        num: '02',
        title: 'コンセプト設計',
        body: 'ターゲットと立地に合わせたコンセプトをご提案。3Dパースで完成イメージをご確認いただけます。',
      },
      {
        num: '03',
        title: 'お見積もり・ご契約',
        body: '商材・設置費用・既存家具の撤去費用を含めた一括お見積もりをご提示いたします。',
      },
      {
        num: '04',
        title: '設置・組み立て',
        body: '新規家具の一括配送・組み立て・設置まで当社で対応。',
      },
      {
        num: '05',
        title: '撮影・運用開始',
        body: 'プラットフォーム掲載用のお写真撮影もオプションでご対応。すぐに集客可能な状態でお引き渡し。',
      },
    ],
  },

  cta: {
    eyebrow: 'CASE STUDIES',
    title: ['空間設計の実例は、', { em: '事例ページ' }, 'にてご覧いただけます。'],
    body: '都内の都市型物件から、観光地の戸建てまで。さまざまな立地・規模の事例をご紹介しております。',
  },

  download: {
    label: '資料ダウンロード',
  },
};

// ---------- Page hero ----------
function MinpakuHero() {
  return (
    <section
      className="il-page-hero"
      style={{ backgroundImage: `url(${MINPAKU.heroImage})` }}
    >
      <div className="il-page-hero__inner">
        <p className="il-page-hero__eyebrow">INNOVATION LIFE INC. ／ FOR VACATION RENTALS</p>
        <h1 className="il-page-hero__title">For&nbsp;Vacation&nbsp;Rentals</h1>
        <div className="il-page-hero__rule"></div>
        <div style={{ marginTop: 24 }}>
          <span className="il-page-hero__title-ja">{MINPAKU.heroTitleJa}</span>
        </div>
      </div>
    </section>
  );
}

function MinpakuBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        <a href="index.html#services">サービス</a>
        <span>／</span>
        民泊業者の方へ
      </div>
    </div>
  );
}

function renderRich(arr) {
  return arr.map((p, i) => {
    if (typeof p === 'string') return <React.Fragment key={i}>{p}</React.Fragment>;
    if (p.br) return <br key={i} />;
    return <em key={i}>{p.em}</em>;
  });
}

function MinpakuLead() {
  return (
    <section className="il-section--paper" style={{ borderBottom: '1px solid var(--il-linen)' }}>
      <div className="il-builder-lead">
        <div>
          <p className="il-builder-lead__eyebrow">{MINPAKU.lead.eyebrow}</p>
          <h2 className="il-builder-lead__title">{renderRich(MINPAKU.lead.title)}</h2>
        </div>
        <div>
          <p className="il-builder-lead__body">{MINPAKU.lead.body}</p>
        </div>
      </div>
    </section>
  );
}

// ---------- Features (with tag chips) ----------
function MinpakuFeatures() {
  return (
    <section className="il-section">
      <div className="il-container">
        {MINPAKU.features.map((f, i) => (
          <div key={i} className={`il-feature ${f.reverse ? 'il-feature--reverse' : ''}`}>
            <div className="il-feature__media" style={{ backgroundImage: `url(${f.image})` }}>
              <span className="il-feature__media-num">FEATURE {f.num}</span>
            </div>
            <div className="il-feature__body">
              <p className="il-feature__eyebrow">{f.eyebrow}</p>
              <h3 className="il-feature__title">{renderRich(f.title)}</h3>
              <p>{f.body}</p>
              {f.tags && (
                <div className="il-feature__tags">
                  {f.tags.map((t) => <span key={t} className="il-feature__tag">{t}</span>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Metrics (3-card impact summary) ----------
function MinpakuMetrics() {
  const m = MINPAKU.metrics;
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">{m.titleEn}</p>
          <h2 className="il-h-section">{m.title}</h2>
          <p className="il-section-lede">{m.sub}</p>
        </div>
        <div className="il-mp-metrics">
          {m.items.map((it, i) => (
            <div key={i} className="il-mp-metric">
              <div className="il-mp-metric__num">
                {it.big ? (
                  <><span className="kpi">{it.kpi}</span><span className="big">{it.big}</span><span className="unit">{it.unit}</span></>
                ) : (
                  <><span className={`kpi-text${it.kpi && it.kpi.length > 4 ? ' is-long' : ''}`}>{it.kpi}</span><span className="unit">{it.unit}</span></>
                )}
              </div>
              <h4 className="il-mp-metric__label">{it.label}</h4>
              <p className="il-mp-metric__body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Flow ----------
function MinpakuFlow() {
  const f = MINPAKU.flow;
  return (
    <section className="il-section">
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
      </div>
    </section>
  );
}

// ---------- Cases CTA ----------
function MinpakuCasesCTA() {
  const c = MINPAKU.cta;
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">{c.eyebrow}</p>
          <h2 className="il-h-section">{renderRich(c.title)}</h2>
          <p className="il-section-lede">{c.body}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <a className="il-btn il-btn--ghost" href="case-list.html">
            事例一覧を見る
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Dual CTA ----------
function MinpakuDualCTA() {
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
          <a className="il-btn il-btn--ghost-inv" href="contact-corporate.html">
            お問い合わせフォーム
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function MinpakuPage() {
  return (
    <>
      <ILHeader />
      <MinpakuHero />
      <MinpakuBreadcrumb />
      <MinpakuLead />
      <MinpakuFeatures />
      <MinpakuMetrics />
      <MinpakuFlow />
      {/* 提案事例：コンテンツ準備中のため一時的に非表示。掲載時はこの行のコメントを外す */}
      {/* <MinpakuCasesCTA /> */}
      <MinpakuDualCTA />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MinpakuPage />);
