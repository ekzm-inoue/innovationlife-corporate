// ============================================================
// Innovation Life — FAQ page (/faq/)
// よくあるご質問
// ============================================================

const FAQ_DATA = {
  heroImage: 'assets/faq_hero.png',
  heroTitleEn: 'FAQ',
  heroTitleJa: 'よくあるご質問',

  intro: '皆さまからよくいただくご質問にお答えします。掲載のない内容は、お気軽にお問い合わせくださいませ。',

  groups: [
    {
      id: 'consumer',
      eyebrow: 'FOR INDIVIDUALS',
      title: '個人のお客様からのよくあるご質問',
      items: [
        {
          q: '対象地域はどちらでしょうか？',
          a: '全国どこでも対応可能です。遠方のお客様にはオンラインでのご相談も承っておりますので、地域に関わらずお気軽にご相談くださいませ。また遠方の場合においても、ご希望内容に応じて現地での対応が可能な場合がございます。',
        },
        {
          q: 'コーディネート提案だけをお願いすることは可能ですか？',
          a: 'はい、可能でございます。商品のご購入を伴わない、コーディネート提案のみのご依頼も承っております。その場合は別途、コーディネートご利用料をご案内させていただきます。',
        },
        {
          q: 'ペット用の家具の提案もお願いできますか？',
          a: 'はい、もちろんでございます。ペットとの暮らしを前提とした素材選び・配置・耐久性をふまえたご提案も得意としております。お気軽にコーディネーターまでご相談くださいませ。',
        },
        {
          q: '相談の際に準備するものはありますか？',
          a: 'お住まいの平面図・現状のお写真・ご希望のテイストがわかる参考画像があるとスムーズです。お持ちでない場合も、ヒアリング時にコーディネーターがご案内いたしますのでご安心くださいませ。',
        },
        {
          q: 'どのような支払方法が可能ですか？',
          a: '銀行振込・クレジットカードでのお支払いに対応しております。商品ご購入額や工事内容により、ご分割でのお支払いをご相談いただける場合もございます。',
        },
        {
          q: '提案は何回まで提案してもらえますか？',
          a: '初回のヒアリングをもとに、原則として2〜3回のご提案・修正までを標準としております。それ以上のご提案ご希望の場合は、コーディネーターよりご相談させていただきます。',
        },
        {
          q: '引き渡し希望日のどれくらい前から相談が必要ですか？',
          a: 'ご納品ご希望日の2〜3ヶ月ほど前を目安にご相談いただけますと、ヒアリング・ご提案・発注・物流まで余裕をもってご対応できます。お引越し・新築のご予定が決まりましたら、お早めにご一報くださいませ。',
        },
      ],
    },
    {
      id: 'builders',
      eyebrow: 'FOR BUILDERS',
      title: '工務店様からのよくあるご質問',
      items: [
        {
          q: 'サービスの導入にあたって、工務店に初期費用や利用料はかかりますか？',
          a: '初期費用・サービス利用料などの費用は一切かかりません。無料でご利用いただけます。',
        },
        {
          q: '施主とのやり取りは工務店が対応する必要がありますか？',
          a: 'ヒアリング・ご提案・ご購入など、家具まわりのやり取りは当社のインテリアコーディネーターが施主様と直接行います。工務店様には、納品時やお引渡し前後の情報連携をお願いしております。',
        },
        {
          q: '家具の提案から設置まで、どこまでサポートしてもらえますか？',
          a: 'ヒアリング、コーディネート提案、お見積、ご発注、物流、組立・設置まで、家具インテリアに関する業務をすべてワンストップでご提供いたします。',
        },
        {
          q: '工務店にとってどんなメリットがありますか？',
          a: 'インテリア提案を通じて施主様のご満足度を高め、住宅の付加価値・ご紹介数の向上が見込めます。あわせて、施主様がカグラクを通して家具をご購入された場合、工務店様には総額に応じたインセンティブをお支払いいたします。',
        },
        {
          q: '今後追加されるサービスはありますか？',
          a: 'さらなる商品カテゴリの拡充を行い、ご提案の柔軟性を高めるとともに、リフォーム・リノベーション領域への展開を順次予定しております。また、家具レンタル、カメラマン派遣など、工務店様の業務を後押しするサービスも検討中です。最新情報はお知らせ・ブログにてご案内いたします。',
        },
      ],
    },
    {
      id: 'makers',
      eyebrow: 'FOR FURNITUREMAKERS',
      title: '家具メーカー様からのよくあるご質問',
      items: [
        {
          q: 'カグラクに商品を掲載するには、どんな準備が必要ですか？',
          a: '商品情報（品番・カラーバリエーション・サイズ・素材・卸価格など）と商品写真をご提供ください。担当者よりフォーマットをお送りいたします。',
        },
        {
          q: 'どのようなお客様に商品が提案されるのですか？',
          a: '主に新築住宅をご購入される施主様、お引越し、リノベーションを計画されている方、および当社と提携する工務店・ハウスメーカー・マンションデベロッパー様の顧客様が中心となります。いずれもインテリア感度の高い住宅市場の顧客様です。',
        },
        {
          q: '物流や配送はどのように対応すればよいですか？',
          a: 'ケースにより①お客様指定のご納品先　②当社指定倉庫　の２パターンございます。',
        },
        {
          q: 'カグラクを利用することで、どのようなメリットがありますか？',
          a: '営業活動を行わずとも、住宅市場の顧客層に商品情報が届きます。業務フローを変えずに新たな販売チャネルを獲得でき、ブランドや商品の価値を高めるサポートが可能です。',
        },
        {
          q: '今後追加されるサービスはありますか？',
          a: '工務店ネットワークの拡大、海外への展開、メーカー様向けデータ分析・販促サポートなどを順次予定しております。詳細はお問い合わせください。',
        },
      ],
    },
  ],
};

// ---------- Page hero ----------
function FaqHero() {
  return (
    <section
      className="il-page-hero"
      style={{ backgroundImage: `url(${FAQ_DATA.heroImage})` }}
    >
      <div className="il-page-hero__inner">
        <p className="il-page-hero__eyebrow">INNOVATION LIFE INC.</p>
        <h1 className="il-page-hero__title">FAQ</h1>
        <div className="il-page-hero__rule"></div>
        <div style={{ marginTop: 24 }}>
          <span className="il-page-hero__title-ja">{FAQ_DATA.heroTitleJa}</span>
        </div>
      </div>
    </section>
  );
}

function FaqBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        よくあるご質問
      </div>
    </div>
  );
}

function FaqIntro() {
  return (
    <section className="il-section--paper" style={{ borderBottom: '1px solid var(--il-linen)' }}>
      <div className="il-builder-lead">
        <div>
          <p className="il-builder-lead__eyebrow">FREQUENTLY ASKED</p>
          <h2 className="il-builder-lead__title">
            よくあるご質問に、<em>お答えします</em>。
          </h2>
        </div>
        <div>
          <p className="il-builder-lead__body">{FAQ_DATA.intro}</p>
          <nav className="il-faq-jump" aria-label="ジャンプ">
            {FAQ_DATA.groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="il-faq-jump__link">
                <span className="il-faq-jump__eyebrow">{g.eyebrow}</span>
                <span className="il-faq-jump__title">{g.title.replace(/からのよくあるご質問$/, '')}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ group ----------
function FaqGroup({ group }) {
  // First item open by default in the first group; others all closed.
  const [open, setOpen] = React.useState(-1);
  return (
    <section id={group.id} className="il-section il-faq-group">
      <div className="il-container">
        <div className="il-faq-group__head">
          <p className="il-eyebrow">{group.eyebrow}</p>
          <h2 className="il-faq-group__title">{group.title}</h2>
          <div className="il-faq-group__rule"></div>
        </div>
        <div className="il-narrow" style={{ maxWidth: 980 }}>
          <div className="il-faq il-faq--paper">
            {group.items.map((f, i) => (
              <div key={i} className={`il-faq-item ${i === open ? 'is-open' : ''}`}>
                <button
                  className="il-faq-q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={i === open}
                >
                  <span className="il-faq-q__num">Q{i + 1}.</span>
                  <span className="il-faq-q__text">{f.q}</span>
                  <span className="il-faq-toggle"></span>
                </button>
                <div className="il-faq-a">
                  <div className="il-faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Bottom CTA band ----------
function FaqCTA() {
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
function FaqPage() {
  return (
    <>
      <ILHeader />
      <FaqHero />
      <FaqBreadcrumb />
      <FaqIntro />
      {FAQ_DATA.groups.map((g) => <FaqGroup key={g.id} group={g} />)}
      <FaqCTA />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FaqPage />);
