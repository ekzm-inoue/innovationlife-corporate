// ============================================================
// Innovation Life — Contact (corporate) page
// 工務店・家具メーカー様 お問い合わせフォーム
// HubSpot form embed
// ============================================================

const CC_INFO = {
  heroImage: 'assets/hero_furniture_design.png',
  heroTitleJa: 'お問い合わせ',

  aside: {
    eyebrow: 'FOR PARTNERS',
    title: 'お取引のご相談・その他お問い合わせ',
    body: [
      '工務店様・ハウスメーカー様・家具メーカー様からのお問い合わせフォームでございます。',
      'お取引のご相談、サービス導入のご検討、資料請求、メディア取材など、お気軽にお寄せください。担当より3営業日以内にご連絡を差し上げます。',
    ],
    info: [
      { label: 'CALL',   value: '◯◯-◯◯◯◯-◯◯◯◯', sub: '平日 10:00 - 18:00' },
      { label: 'EMAIL',  value: 'info@innovationlife.co.jp', sub: '24時間受付' },
      { label: 'ADDRESS', value: '〒729-0142 広島県尾道市西藤町 226', sub: 'イノベーションライフ株式会社' },
    ],
  },
};

function CCHero() {
  return (
    <section
      className="il-page-hero"
      style={{ backgroundImage: `url(${CC_INFO.heroImage})` }}
    >
      <div className="il-page-hero__inner">
        <p className="il-page-hero__eyebrow">INNOVATION LIFE INC. ／ FOR PARTNERS</p>
        <h1 className="il-page-hero__title">Contact&nbsp;Us</h1>
        <div className="il-page-hero__rule"></div>
        <div style={{ marginTop: 24 }}>
          <span className="il-page-hero__title-ja">{CC_INFO.heroTitleJa}</span>
        </div>
      </div>
    </section>
  );
}

function CCBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        お問い合わせ
      </div>
    </div>
  );
}

function HubSpotEmbed() {
  const ref = React.useRef(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // Load HubSpot script once
    const SRC = '//js-na2.hsforms.net/forms/embed/v2.js';
    const existing = document.querySelector(`script[src="${SRC}"]`);

    function create() {
      if (!window.hbspt || !ref.current) return;
      // Avoid double-render in React StrictMode etc.
      ref.current.innerHTML = '';
      window.hbspt.forms.create({
        portalId: '23443688',
        formId: '5f152f05-3c4e-401a-b929-0cd34e2a5add',
        region: 'na2',
        target: '#il-hubspot-form',
        onFormReady: () => setReady(true),
      });
    }

    if (existing) {
      // already injected — script may already be loaded
      if (window.hbspt) create();
      else existing.addEventListener('load', create, { once: true });
    } else {
      const s = document.createElement('script');
      s.src = SRC;
      s.charset = 'utf-8';
      s.async = true;
      s.onload = create;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="il-hubspot-host">
      <div id="il-hubspot-form" ref={ref}></div>
      {!ready && <div className="il-hubspot-loading">FORM LOADING</div>}
    </div>
  );
}

function CCBody() {
  return (
    <section className="il-section">
      <div className="il-contact-page il-contact-page--single">
        <div className="il-contact-main">
          <div className="il-contact-form-head">
            <p className="il-eyebrow">CONTACT FORM</p>
            <h2>お問い合わせフォーム</h2>
            <p>
              下記フォームに必要事項をご入力のうえ、送信してください。<span style={{ color: 'var(--il-green)' }}>＊</span> 印は必須項目です。担当より3営業日以内にご連絡を差し上げます。
            </p>
          </div>
          <HubSpotEmbed />
        </div>
      </div>
    </section>
  );
}

function CCPage() {
  return (
    <>
      <ILHeader />
      <CCHero />
      <CCBreadcrumb />
      <CCBody />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CCPage />);
