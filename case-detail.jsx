// ============================================================
// Innovation Life — Case detail page (/case/{id})
// 事例紹介（サンプル）
// ============================================================

const CASE = {
  // Hero
  heroImage: 'assets/hero_living_planning.png',
  heroEyebrow: 'CASE STUDY ／ SAMPLE',
  heroTitle: '事例紹介（サンプル）',
  heroTag: 'CASE 027 ／ 2026',

  // Meta strip
  meta: [
    { ja: '家族構成',         en: 'FAMILY',  value: '4人家族' },
    { ja: 'お住まいの形態',   en: 'TYPE',    value: '新築・戸建て（3LDK）' },
    { ja: 'コーディネートしたお部屋', en: 'ROOM',  value: 'リビング・ダイニング・キッチン（広さ：30.80㎡）' },
    { ja: 'ご予算',           en: 'BUDGET',  value: '100〜150万円' },
  ],

  // 3-card section
  pointsTitle: '3つのこだわりで、永く愛せる空間づくりを実現',
  points: [
    {
      num: '01',
      title: '素材の統一感',
      body: 'ウォールナット材を基調に、天然素材で空間全体に温かみをもたらすアイテムを厳選しました。',
    },
    {
      num: '02',
      title: '照明設計',
      body: '間接照明とペンダントライトを組み合わせ、昼と夜で表情が変わる空間を演出しました。',
    },
    {
      num: '03',
      title: '動線への配慮',
      body: '家具のレイアウトは生活動線を最優先に設計。広さを最大限に活用できる配置にしました。',
    },
  ],

  // Layout (image + 3 mini panels)
  layoutTitle: '間取りをもとに、レイアウトを設計',
  layoutSub: 'お客様からご提供いただいた図面をもとに、インテリアを提案させていただきました。',
  layoutImage: 'assets/hero_furniture_design.png',
  layoutPanels: [
    {
      title: '落ち着いた配色',
      body: '木目と黒を基調とした落ち着いた色調で、上質な空間を演出。',
    },
    {
      title: '視覚的な開放感',
      body: '低めの家具を中心に配置し、視線を遮らずに空間を広く見せる工夫。',
    },
    {
      title: '適所への収納配置',
      body: '収納家具を適所に配置し、すっきり片付く快適な暮らしを実現。',
    },
  ],

  // Plan section
  planTitle: 'プロの視点でまとめた、空間づくりの設計図',
  planImages: [
    'assets/hero_living_planning.png',
    'assets/item_sofa.png',
    'assets/item_lighting.png',
    'assets/item_living_table.png',
  ],
  planBody: [
    '30.80㎡という広々としたLDKの魅力を最大限に引き出すため、ブラックと深みのあるウッド調を基調とし、シックでモダンな落ち着きのある空間をご提案いたしました。実際の生活動線を意識したレイアウトとなっております。',
    'リビングには、空間を引き締める黒のソファと、空間に合わせて最大300cm幅まで対応できるTVボードを選定しました。座厚になりすぎないよう、円形のガラステーブルとベージュのラグを合わせることで、クールさの中に心地よい抜け感をプラスしています。',
    'ダイニングには、幅150cmのダイニングテーブルにシャープな黒のチェア4脚を合わせ、リビングとの美しい統一感を持たせました。食卓を印象的に照らすダイニング照明が、日々の暮らしに華を添えてくれます。',
    'さらに、空間のアクセントとなる高さ150cmの大型フェイクグリーンやアートポスター、クッションやフラワーベースに至るまで、細部までこだわり抜いてセレクトいたしました。家具と雑貨が調和した、洗練されたワンランク上の暮らしを鮮明にイメージしていただける自信のコーディネートとなっております。',
  ],

  // Before / After
  baTitle: 'Before ／ After',
  ba: {
    before: {
      image: 'assets/flow_hearing.png',
      caption: '家具がなく殺風景な状態。広さはあるものの、どう活用すればよいかイメージが湧かないとのこと、何を選べばよいかもわからず、途方に暮れていたとのことでした。',
    },
    after: {
      image: 'assets/hero_living_planning.png',
      caption: 'ナチュラルモダンで統一感のある空間に。「想像以上の仕上がりで驚いた」とご満足いただきました。',
    },
  },

  // Testimonial
  quoteTitle: 'お客様のコメント',
  quote: [
    '新居への引っ越しを機に、せっかくなら自分好みの素敵な空間を作りたいと考えていました。しかし、毎日の仕事が忙しく、インテリアショップを何軒も見て回る時間はありません。それに加えて、そもそも「どんなテイストが自分に合うのか」「どこで何を買えばいいのかすらわからない」という、完全にお手上げの状態でした。',
    'どうにかしたいと思い、いくつかのインテリアサービスを比較検討する中で見つけたのがカグラクです。ここを選んだ最大の決め手は、LINEのチャット相談から家具の選定、購入手配まで「すべて一括で」お任せできるところでした。通勤電車の中や仕事の休憩時間など、スキマ時間を使って自分のペースで気軽にやり取りできるのは、多忙な私にとって本当に大きな魅力でした。',
    '最初は「オンラインだけで大丈夫かな？」という不安もありましたが、専任のコーディネーターさんがLINE上でとても丁寧にヒアリングをしてくれました。ぼんやりとした私のイメージから、理想の過ごし方や好みを的確に引き出してくれたので、対面でなくても、ここまで私のことを理解して提案してくれるんだ！と感動したほどです。',
    '結果的に、オンライン特有の不安はすぐに消え、最初から最後まで安心してお任せすることができました。大満足の部屋が完成し、カグラクにお願いして本当に良かったと思っています。',
  ],
  quoteAuthor: '東京都・40代　T様',

  // Coordinator
  coordTitle: '担当コーディネーター',
  coord: {
    name: '松岡 公恵',
    role: 'INTERIOR COORDINATOR',
    portrait: 'assets/portrait_matsuoka.png',
    body: [
      'お客様一人ひとりのライフスタイルや好みに合わせた、機能的でありながらスタイリッシュなインテリアを提案します。',
      '家具の選定からカラースキームの決定、照明のデザインまで、細部にわたるコーディネートを行い、居心地の良い空間を創り上げます。',
      'ご自宅のインテリアやオフィスデザインまで、幅広いご要望にお応えします。',
      '過去には、住宅・オフィスプロジェクトを多く手がけ、年間30〜40件ほどのコーディネートを担当しています。',
      'ホテルライクテイストを得意としており、お客様のニーズに合わせた柔軟なデザインを提供することが可能です。',
      '常に最新のトレンドを取り入れつつ、時を超えて愛されるデザインを目指しています。',
      'インテリアにあまり興味のない方も、理想の空間づくりのために何をしたら良いかわからない方も、お気軽にご相談ください。',
    ],
    quote: '「日常生活に感動を」をモットーに、お部屋の空間デザインのご提案を行っています。',
  },
};

// ---------- Hero ----------
function CaseHero() {
  return (
    <section
      className="il-case-hero"
      style={{ backgroundImage: `url(${CASE.heroImage})` }}
    >
      <div className="il-case-hero__inner">
        <p className="il-case-hero__eyebrow">{CASE.heroEyebrow}</p>
        <h1 className="il-case-hero__title">{CASE.heroTitle}</h1>
        <span className="il-case-hero__tag">{CASE.heroTag}</span>
      </div>
    </section>
  );
}

// ---------- Meta bar ----------
function CaseMeta() {
  return (
    <section className="il-case-meta">
      <div className="il-case-meta__grid">
        {CASE.meta.map((m) => (
          <div key={m.ja} className="il-case-meta__cell">
            <span className="il-case-meta__label">{m.en}</span>
            <span className="il-case-meta__label-ja">{m.ja}</span>
            <span className="il-case-meta__value">{m.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Breadcrumb ----------
function CaseBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        <a href="index.html#cases">事例紹介</a>
        <span>／</span>
        事例紹介（サンプル）
      </div>
    </div>
  );
}

// ---------- 3 points ----------
function CasePoints() {
  return (
    <section className="il-case-section">
      <div className="il-container">
        <div className="il-case-section__head">
          <h2 className="il-case-section__title">{CASE.pointsTitle}</h2>
        </div>
        <div className="il-case-cards">
          {CASE.points.map((p) => (
            <div key={p.num} className="il-case-card">
              <span className="il-case-card__num">{p.num}</span>
              <h3 className="il-case-card__title">{p.title}</h3>
              <p className="il-case-card__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Layout ----------
function CaseLayout() {
  return (
    <section className="il-case-section il-case-section--paper">
      <div className="il-container">
        <div className="il-case-section__head">
          <h2 className="il-case-section__title">{CASE.layoutTitle}</h2>
        </div>
        <p className="il-case-layout__sub">{CASE.layoutSub}</p>
        <div className="il-case-layout">
          <div
            className="il-case-layout__image"
            style={{ backgroundImage: `url(${CASE.layoutImage})` }}
          />
          <div className="il-case-layout__panels">
            {CASE.layoutPanels.map((p) => (
              <div key={p.title} className="il-case-layout__panel">
                <h4 className="il-case-layout__panel-title">{p.title}</h4>
                <p className="il-case-layout__panel-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Plan ----------
function CasePlan() {
  return (
    <section className="il-case-section">
      <div className="il-container">
        <div className="il-case-section__head">
          <h2 className="il-case-section__title">{CASE.planTitle}</h2>
        </div>
        <div className="il-case-plan">
          <div className="il-case-plan__collage">
            {CASE.planImages.map((img, i) => (
              <div key={i} style={{ backgroundImage: `url(${img})` }} />
            ))}
          </div>
          <div className="il-case-plan__body">
            {CASE.planBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Before/After ----------
function CaseBeforeAfter() {
  return (
    <section className="il-case-section il-case-section--paper">
      <div className="il-container">
        <div className="il-case-section__head">
          <h2 className="il-case-section__title">{CASE.baTitle}</h2>
        </div>
        <div className="il-case-ba">
          <div className="il-case-ba__col">
            <p className="il-case-ba__label">Before</p>
            <div
              className="il-case-ba__img"
              style={{ backgroundImage: `url(${CASE.ba.before.image})`, filter: 'grayscale(0.5)' }}
            />
            <p className="il-case-ba__caption">{CASE.ba.before.caption}</p>
          </div>
          <div className="il-case-ba__col">
            <p className="il-case-ba__label">After</p>
            <div
              className="il-case-ba__img"
              style={{ backgroundImage: `url(${CASE.ba.after.image})` }}
            />
            <p className="il-case-ba__caption">{CASE.ba.after.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Quote ----------
function CaseQuote() {
  return (
    <section className="il-case-section">
      <div className="il-container">
        <div className="il-case-section__head">
          <h2 className="il-case-section__title">{CASE.quoteTitle}</h2>
        </div>
        <div className="il-case-quote">
          {CASE.quote.map((p, i) => <p key={i}>{p}</p>)}
          <div className="il-case-quote__author">{CASE.quoteAuthor}</div>
        </div>
      </div>
    </section>
  );
}

// ---------- Coordinator ----------
function CaseCoord() {
  const c = CASE.coord;
  return (
    <section className="il-case-section il-case-section--paper">
      <div className="il-container">
        <div className="il-case-section__head">
          <h2 className="il-case-section__title">{CASE.coordTitle}</h2>
        </div>
        <div className="il-case-coord">
          <div>
            <div
              className="il-case-coord__portrait"
              style={{ backgroundImage: `url(${c.portrait})` }}
            />
            <p className="il-case-coord__name">{c.name}</p>
            <p className="il-case-coord__role">{c.role}</p>
          </div>
          <div className="il-case-coord__body">
            {c.body.map((p, i) => <p key={i}>{p}</p>)}
            <p className="il-case-coord__quote">{c.quote}</p>
          </div>
        </div>
        <nav className="il-case-foot-nav">
          <a href="case-list.html">← 一覧へ戻る</a>
          <a href="case-list.html" className="center">事例一覧</a>
          <a href="case-list.html">次の事例 →</a>
        </nav>
      </div>
    </section>
  );
}

// ---------- Page ----------
function CasePage() {
  return (
    <>
      <ILHeader />
      <CaseHero />
      <CaseMeta />
      <CaseBreadcrumb />
      <CasePoints />
      <CaseLayout />
      <CasePlan />
      <CaseBeforeAfter />
      <CaseQuote />
      <CaseCoord />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CasePage />);
