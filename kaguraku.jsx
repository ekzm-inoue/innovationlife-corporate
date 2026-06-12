// ============================================================
// Innovation Life — Kaguraku brand page (/kaguraku/)
// ブランド紹介「カグラク」
// ============================================================

const KAGURAKU = {
  heroBg: 'assets/kg_hero.png',
  heroBrandLabel: 'BRAND ／ KAGURAKU',
  heroTitleHtml:
    'インテリア提案から家具の購入・設置まで<br/><em>ワンストップ</em>でカグラクにお任せ。',
  heroSub:
    'カグラクは、イノベーションライフ株式会社が運営するインテリア提案サービスです。お客様一人ひとりのライフスタイルにあわせて、最適な家具・照明・カーテンを、ご相談から設置までトータルでサポートいたします。',
  logoImage: 'assets/kaguraku_logo.png',

  // LINE friends benefits (top + bottom)
  lineBenefitsTitle:
    'LINE友だち限定！<strong>5つの特典</strong>',
  lineBenefits: [
    'プロのインテリアコーディネーターが完全無料で個別相談に対応',
    'インテリア提案＋家具購入時のカグラク限定価格でご案内',
    'インテリアコーディネートに役立つ便利資料を無料プレゼント',
    '「失敗しないインテリア選び 5つのポイント」PDF限定配布',
    '新生活に向けた「お部屋のテイスト診断」を期間限定で受講可能',
  ],

  // Gallery
  galleryTitle:
    'インテリア提案から家具の購入・設置まで<br/><em>すべてカグラクにお任せください。</em>',
  galleryLede:
    'お忙しい毎日の中で、家具・カーテン・照明をひとつずつ選ぶのは大変なものです。カグラクが、ご相談から設計、購入、配送、設置までをワンストップでサポートいたします。',
  galleryImages: [
    'assets/kg_gallery1.png',
    'assets/kg_gallery2.png',
    'assets/kg_gallery3.png',
  ],

  // About / 3 checks
  aboutEyebrow: 'ABOUT KAGURAKU',
  aboutTitle:
    '家具・インテリアのご提案から購入・設置まで<br/><em>トータルサポート</em>だから安心',
  aboutChecks: [
    'インテリアコーディネーターによる完全オーダーメイドのご提案',
    'お客様一人ひとりのご要望に応じた、無理のないコーディネート',
    '国内外の信頼できる家具メーカーから「本当に良い家具」を厳選',
  ],

  // 3 feature blocks
  featuresEyebrow: 'WHY KAGURAKU',
  features: [
    {
      title: 'インテリアコーディネーターの知見をフル活用。理想の空間づくりを実現します。',
      body: 'これまで多くの住宅・空間を手がけてきたインテリアコーディネーターが、お客様の暮らしを丁寧にヒアリングし、最適なご提案をいたします。お客様のライフスタイルに寄り添う、上質な空間づくりをお約束します。',
      image: 'assets/kg_feature1.png',
    },
    {
      title: 'オーダーメイド家具も活用！多種多様なアイテムであなたに最適な空間をご提案。',
      body: '提携家具メーカーとの連携により、規格品から造作・オーダーメイドまで、幅広いアイテムをコーディネートに組み込めます。お部屋にぴったり収まる、世界に一つの組み合わせをご提供いたします。',
      image: 'assets/kg_feature2.png',
    },
    {
      title: '複雑な手配なども肩代わり。予算面のお気軽お問い合わせ。',
      body: 'お見積もり・ご発注・物流・設置・アフターメンテナンスまで、お客様の代わりに当社が一括で手配いたします。気になる予算面についても、お気軽にご相談ください。',
      image: 'assets/kg_feature3.png',
    },
  ],

  // Coordinator
  coord: {
    portrait: 'assets/kg_coord_photo.jpg',
    name: '松岡 公恵',
    role: 'INTERIOR COORDINATOR',
    body: [
      'お客様一人ひとりのライフスタイルや好みに合わせた、機能的でありながらスタイリッシュなインテリアをご提案いたします。',
      '家具の選定からカラースキームの決定、照明のデザインまで、細部にわたるコーディネートを行い、居心地の良い空間を創り上げます。',
      'ご自宅のインテリアやオフィスデザインまで、幅広いご要望にお応えいたします。',
      '過去には住宅・オフィスプロジェクトを多く手がけ、年間30〜40件ほどのコーディネートを担当しています。',
      'ホテルライクテイストを得意としており、お客様のニーズに合わせた柔軟なデザインを提供することが可能です。',
      'インテリアにあまり馴染みのない方も、理想の空間づくりのために何をしたら良いかわからない方も、お気軽にご相談ください。',
    ],
    quote: '「日常生活に感動を」をモットーに、お部屋の空間デザインのご提案を行っています。',
  },

  // Furniture categories
  categories: [
    { name: 'ソファ',            image: 'assets/kg_cat_sofa.png' },
    { name: 'リビングテーブル',  image: 'assets/item_living_table.png' },
    { name: 'テレビボード',      image: 'assets/kg_cat_tvboard.png' },
    { name: 'チェア',            image: 'assets/kg_cat_chair.png' },
    { name: 'キッチン収納',      image: 'assets/item_kitchen_storage.png' },
    { name: 'ダイニング',        image: 'assets/kg_cat_dining.png' },
    { name: 'デスク',            image: 'assets/item_desk.png' },
    { name: 'シェルフ',          image: 'assets/kg_cat_shelf.png' },
    { name: '照明',              image: 'assets/item_lighting.png' },
    { name: 'ラグ',              image: 'assets/kg_cat_rug.png' },
    { name: '時計',              image: 'assets/kg_cat_clock.png' },
    { name: '雑貨',              image: 'assets/kg_cat_zakka.png' },
  ],

  brands: [
    'assets/logo_morita.png',
    'assets/logo_mikimoku.png',
    'assets/logo_asahi.png',
    'assets/logo_kaibara.png',
    'assets/logo_fujishi.png',
    'assets/logo_sue.png',
    'assets/logo_chiyoda.png',
  ],

  // Flow steps
  flow: [
    {
      num: '01',
      title: 'ヒアリング',
      body: 'LINEもしくはオンラインで、お好みのテイストやライフスタイルに関する情報をしっかりとヒアリングいたします。お客様の暮らしに寄り添うインテリア提案の起点です。',
      image: 'assets/kg_flow1.png',
    },
    {
      num: '02',
      title: 'コーディネートプランのご提案',
      body: 'ヒアリング内容をもとに、インテリアコーディネーターがプランをご提案。家具・照明・カーテンの組み合わせ、レイアウトまで、具体的な完成イメージをお見せします。',
      image: 'assets/kg_flow2.png',
    },
    {
      num: '03',
      title: '詳細打ち合わせ・修正',
      body: 'ご提案内容についてご意見・ご要望をヒアリングし、最適なプランへブラッシュアップしてまいります。納得いただけるまで、丁寧にやり取りいたします。',
      image: 'assets/kg_flow3.png',
    },
    {
      num: '04',
      title: 'お申込み・お支払い',
      body: 'プランが確定しましたら、お見積もり・ご発注のお手続きをご案内します。お支払い方法・納品日についても、こちらでご相談させていただきます。',
      image: 'assets/kg_flow4.png',
    },
    {
      num: '05',
      title: '配送・搬入',
      body: '当社指定の物流・設置パートナーが、お客様のご自宅まで一括でお届け・組立を行います。お引っ越し当日からすぐに、整った暮らしをお楽しみいただけます。',
      image: 'assets/kg_flow5.png',
    },
  ],
};

// ---------- LINE strip ----------
function LineStrip({ caption = "プロのインテリアコーディネーターが、無料でご相談を承ります" }) {
  return (
    <section className="il-line-strip">
      <p className="il-line-strip__eyebrow">FOR LINE FRIENDS</p>
      <h2
        className="il-line-strip__title"
        dangerouslySetInnerHTML={{ __html: KAGURAKU.lineBenefitsTitle }}
      />
      <ul className="il-line-strip__list">
        {KAGURAKU.lineBenefits.map((b, i) => (
          <li key={i} className="il-line-strip__item">{b}</li>
        ))}
      </ul>
    </section>
  );
}

// ---------- LINE CTA pill ----------
function LineCTA({ caption = '今すぐ、無料相談をはじめましょう。' }) {
  return (
    <div className="il-line-cta">
      {caption && <p className="il-line-cta__caption">{caption}</p>}
      <a className="il-line-cta__btn" href="https://lin.ee/5p0dQyV" target="_blank" rel="noopener noreferrer">
        LINEで友だち追加する
      </a>
    </div>
  );
}

// ---------- Hero ----------
function KgHero() {
  return (
    <section className="il-kg-hero">
      <div className="il-kg-hero__bg" style={{ backgroundImage: `url(${KAGURAKU.heroBg})` }} />
      <div className="il-kg-hero__inner">
        <div>
          <p className="il-kg-hero__brand">{KAGURAKU.heroBrandLabel}</p>
          <h1
            className="il-kg-hero__title"
            dangerouslySetInnerHTML={{ __html: KAGURAKU.heroTitleHtml }}
          />
          <p className="il-kg-hero__sub">{KAGURAKU.heroSub}</p>
          <a className="il-line-cta__btn" href="https://lin.ee/5p0dQyV" target="_blank" rel="noopener noreferrer">
            LINEで友だち追加する
          </a>
        </div>
        <div className="il-kg-hero__wordmark">
          <img src={KAGURAKU.logoImage} alt="カグラク" />
          <p className="il-kg-hero__wordmark-sub">日常生活に、感動を。</p>
        </div>
      </div>
    </section>
  );
}

function KgBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        <a href="index.html#services">サービス</a>
        <span>／</span>
        ブランド紹介「カグラク」
      </div>
    </div>
  );
}

// ---------- Gallery / lede ----------
function KgGallery() {
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">ONE-STOP INTERIOR</p>
          <h2
            className="il-h-section"
            dangerouslySetInnerHTML={{ __html: KAGURAKU.galleryTitle }}
          />
          <p className="il-section-lede">{KAGURAKU.galleryLede}</p>
        </div>
        <div className="il-kg-gallery">
          {KAGURAKU.galleryImages.map((g, i) => (
            <div key={i} style={{ backgroundImage: `url(${g})` }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- About / checks ----------
function KgAbout() {
  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">{KAGURAKU.aboutEyebrow}</p>
          <h2
            className="il-h-section"
            dangerouslySetInnerHTML={{ __html: KAGURAKU.aboutTitle }}
          />
        </div>
        <ul className="il-kg-checks">
          {KAGURAKU.aboutChecks.map((c, i) => (
            <li key={i} className="il-kg-check">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- Features ----------
function KgFeatures() {
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">{KAGURAKU.featuresEyebrow}</p>
          <h2 className="il-h-section">カグラクが選ばれる、<em>3つの理由</em>。</h2>
        </div>
        <div className="il-kg-features">
          {KAGURAKU.features.map((f, i) => (
            <div key={i} className="il-kg-feature">
              <div className="il-kg-feature__media" style={{ backgroundImage: `url(${f.image})` }} />
              <div>
                <h3 className="il-kg-feature__title">{f.title}</h3>
                <p className="il-kg-feature__body">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Cases mini ----------
function KgCases() {
  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">OUR WORKS</p>
          <h2 className="il-h-section">施工事例のご紹介</h2>
          <p className="il-section-lede">
            戸建て・マンション・リノベーション・店舗まで、これまでにご提案させていただいた事例の一部をご紹介します。
          </p>
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

// ---------- Coordinator ----------
function KgCoord() {
  const c = KAGURAKU.coord;
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">YOUR COORDINATOR</p>
          <h2 className="il-h-section">インテリアコーディネーター紹介</h2>
        </div>
        <div className="il-kg-coord">
          <div className="il-kg-coord__portrait" style={{ backgroundImage: `url(${c.portrait})` }} />
          <div>
            <h3 className="il-kg-coord__name">{c.name}</h3>
            <p className="il-kg-coord__role">{c.role}</p>
            <div className="il-kg-coord__body">
              {c.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="il-kg-coord__quote">{c.quote}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Categories ----------
function KgCategories() {
  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">ITEMS WE COORDINATE</p>
          <h2 className="il-h-section">家具アイテム一覧</h2>
          <p className="il-section-lede">
            ソファから雑貨まで、お部屋を構成するすべてのアイテムを、カグラクで一括コーディネート可能です。
          </p>
        </div>
        <div className="il-kg-cats">
          {KAGURAKU.categories.map((c) => (
            <div key={c.name} className="il-kg-cat">
              <div className="il-kg-cat__image" style={{ backgroundImage: `url(${c.image})` }} />
              <p className="il-kg-cat__name">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Brands ----------
function KgBrands() {
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">OUR BRANDS</p>
          <h2 className="il-h-section">取扱ブランド一覧</h2>
          <p className="il-section-lede">
            国内外の信頼できる家具・照明・テキスタイルブランドと連携。カグラクは、その中から最適なご提案をいたします。
          </p>
        </div>
        <div className="il-kg-brands">
          {KAGURAKU.brands.map((b, i) => (
            <img key={i} src={b} alt="brand logo" />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Flow ----------
function KgFlow() {
  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">PROCESS</p>
          <h2 className="il-h-section">ご利用の流れ</h2>
          <p className="il-section-lede">
            LINEでのご相談から、ご納品・設置まで。ステップごとに、専属のコーディネーターが丁寧にご案内いたします。
          </p>
        </div>
        <div className="il-kg-flow">
          {KAGURAKU.flow.map((s) => (
            <div key={s.num} className="il-kg-flow__step">
              <div className="il-kg-flow__body">
                <span className="il-kg-flow__num">{s.num}</span>
                <h3 className="il-kg-flow__title">{s.title}</h3>
                <p className="il-kg-flow__lede">{s.body}</p>
              </div>
              <div className="il-kg-flow__media" style={{ backgroundImage: `url(${s.image})` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ link ----------
function KgFAQLink() {
  return (
    <section className="il-section il-section--paper il-section--tight" style={{ textAlign: 'center' }}>
      <div className="il-container">
        <p className="il-eyebrow" style={{ justifyContent: 'center' }}>FREQUENTLY ASKED</p>
        <h2 className="il-h-section" style={{ marginBottom: 32 }}>よくあるご質問</h2>
        <p className="il-section-lede" style={{ marginInline: 'auto', marginBottom: 32 }}>
          お問い合わせの多いご質問をまとめております。サービスのご利用前に、ぜひご一読ください。
        </p>
        <a className="il-btn il-btn--ghost" href="faq.html">
          よくあるご質問を見る
          <span className="il-arrow"></span>
        </a>
      </div>
    </section>
  );
}

// ---------- Final CTA ----------
function KgFinalCTA() {
  return (
    <section className="il-kg-final">
      <div className="il-kg-final__inner">
        <p className="il-kg-final__eyebrow">LINE FRIEND BENEFIT</p>
        <h2 className="il-kg-final__title">
          プロのインテリアコーディネーターによる、<br/>
          <em>コーディネート体験</em>を公開中。
        </h2>
        <a className="il-line-cta__btn" href="https://lin.ee/5p0dQyV" target="_blank" rel="noopener noreferrer">
          LINEで友だち追加する
        </a>
      </div>
    </section>
  );
}

// ---------- Page ----------
function KaguraKuPage() {
  return (
    <>
      <ILHeader />
      <KgHero />
      <KgBreadcrumb />
      <LineStrip />
      <KgGallery />
      <LineCTA caption="まずはお気軽に、LINEでご相談ください。" />
      <KgAbout />
      <KgFeatures />
      <LineCTA caption="プロのご提案を、無料でお試しいただけます。" />
      <KgCases />
      <KgCoord />
      <LineCTA caption="お悩みやご要望を、LINEでお気軽にお話しください。" />
      <KgCategories />
      <KgBrands />
      <LineCTA caption="お部屋にぴったりの一脚を、一緒に選びましょう。" />
      <KgFlow />
      <KgFAQLink />
      <LineStrip />
      <KgFinalCTA />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<KaguraKuPage />);
