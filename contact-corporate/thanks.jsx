// ============================================================
// Innovation Life — Contact completion (thanks) page
// /contact-corporate/thanks.html
// Simple, text-only confirmation screen with the shared
// site header & footer (paths resolve via <base href="../">).
// ============================================================

function ThanksPage() {
  return (
    <>
      <ILHeader />

      <main className="il-thanks__main">
        <div className="il-thanks__inner">
          <p className="il-eyebrow">THANK YOU</p>
          <h1 className="il-thanks__title">
            お問い合わせいただき<br/>ありがとうございます。
          </h1>
          <div className="il-thanks__rule"></div>
          <p className="il-thanks__body">
            ご入力いただいた内容を確認のうえ、<br/>後日、担当者よりご連絡いたします。
          </p>
          <div className="il-thanks__actions">
            <a className="il-btn il-btn--primary" href="index.html">
              トップページへ戻る
              <span className="il-arrow"></span>
            </a>
          </div>
        </div>
      </main>

      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ThanksPage />);
