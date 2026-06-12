// ============================================================
// Innovation Life — Privacy Policy (/privacy/)
// プライバシーポリシー（個人情報保護方針）
// ============================================================

const PRIVACY = {
  heroImage: 'assets/privacy_hero.png',
  heroTitleJa: 'プライバシーポリシー（個人情報保護方針）',

  intro:
    'イノベーションライフ株式会社およびその子会社、関連会社のうち、本プライバシーポリシーを採用する会社（以下、「弊社グループ」）では、下記の「プライバシーポリシー」に基づき、お客様のサービスご利用に際して、お客様の情報を取得および利用し、また、当該情報を保管しています。',

  sections: [
    {
      num: '01',
      title: '取得する情報',
      body: [
        '本ポリシーにおいて、「利用者情報」とは、お客様の識別に係る情報、通信サービス上の行動履歴、その他お客様またはお客様の端末に関連して生成または蓄積された情報であって、本ポリシーに基づき当社が取得するものを意味するものとします。',
        '本サービスにおいて当社が取得する利用者情報は、その収集方法に応じて、以下のようなものとなります。',
      ],
      groups: [
        {
          label: '（１）弊社グループがお客様からご提供いただく情報',
          items: [
            { mark: 'a.', text: '氏名、生年月日、性別、ご職業、その他の特定の個人を識別することができる情報' },
            { mark: 'b.', text: '特定の個人情報に結びついて使用されるご住所、電話番号、アカウント情報（メールアドレスおよびパスワード等をいいます）等の情報' },
            { mark: 'c.', text: '個人情報と一体となった趣味、家族構成、年齢その他の個人に関する属性情報' },
            { mark: 'd.', text: 'お客様の本人確認に関する情報' },
            { mark: 'e.', text: '弊社グループが本サービスの利用に関連して取得する情報' },
          ],
        },
        {
          label: '（２）お客様が本サービスを利用するにあたって弊社グループが取得する情報（個人情報に該当しないものも含みます。）',
          items: [
            { mark: 'a.', text: 'お客様がご利用になった本サービスの内容、ご利用日時および回数、本サービスの利用・閲覧に関連する情報（これには、Cookie 情報、アクセスログ等の利用状況に関する情報、ご利用の端末情報、OS 情報、位置情報、そして IP アドレス、ブラウザ情報、ブラウザ言語等を含むお客様の通信に関する情報を含みます）' },
            { mark: 'b.', text: 'お客様が本サービスに掲載したコメント、取引メッセージ、その他の情報' },
            { mark: 'c.', text: 'お客様の本サービスでの決済状況に関する情報' },
          ],
        },
        {
          label: '（３）業務提携先および第三者から間接的に収集する情報',
          items: [
            { text: '弊社グループは、パブリック DMP 事業者、データ解析事業者、不正利用検知サービスプロバイダ、広告事業者その他の各種サービスプロバイダ等の第三者から取得するお客様に関する識別子（Cookie、ADID/IDFA、IP アドレス等を含みます）、電話番号、メールアドレス、閲覧履歴、位置情報等の行動履歴、趣味嗜好等の情報といった個人情報または個人関連情報を取得し、弊社グループが既に有しているお客様の個人情報と紐づけて、突合・分析する場合があります。' },
          ],
        },
      ],
    },
    {
      num: '02',
      title: '利用者情報の取得方法',
      body: ['弊社グループは、前記１（１）から（３）の方法により、お客様の利用者情報を取得させていただきます。'],
    },
    {
      num: '03',
      title: '利用者情報の管理',
      body: [
        '弊社グループにて利用者情報を管理・利用する業務に従事する者は、お客様の利用者情報について厳重に管理を行い、個人情報への不当なアクセス、紛失、漏洩、改ざん等が起きないよう、利用者情報の取扱に十分な注意を払い、その業務に努めます。',
      ],
    },
    {
      num: '04',
      title: '利用者情報の利用目的',
      body: ['弊社グループは、以下の目的のために利用者情報を利用します。'],
      list: [
        { mark: 'a.', text: 'ご注文商品の発送、代金の請求、アフターサービスその他当社サービスに関連する業務を行うため（ご注文商品の発送に必要な情報の宅配業者への提供（委託）、ローン審査の際の銀行への提供を含みます）' },
        { mark: 'b.', text: 'ご注文内容、配送方法等をお客様に連絡または確認するため' },
        { mark: 'c.', text: '本サービス間の情報連携のため' },
        { mark: 'd.', text: '本サービスに関するご案内、お問い合わせ等への確認その他の対応をするため' },
        { mark: 'e.', text: '本サービスに関するご請求とその確認をするため' },
        { mark: 'h.', text: '本サービスの利用状況等を調査・分析（ユーザーのトラフィック測定及び行動測定を含みます。）するため' },
        { mark: 'i.', text: '本サービスの内容をよりご満足いただけるよう改良・改善し、または新サービスの開発のため' },
        { mark: 'j.', text: '広告の配信、表示及び効果測定その他マーケティングで利用するため' },
        { mark: 'k.', text: '本サービス運営上のトラブルの解決のため' },
        { mark: 'l.', text: '本サービスに関する当社規約、ポリシー等（以下「規約等」といいます。）に違反する行為や不正利用の防止及び安全性の確保のため' },
        { mark: 'm.', text: '本サービスに関する規約等の変更を通知するため' },
      ],
    },
    {
      num: '05',
      title: '個人情報の第三者提供について',
      body: [
        '（１）個人情報の第三者提供　当社は、利用者情報のうち、個人情報については、あらかじめお客様の同意を得ないで、第三者（日本国外にある者を含みます。）に提供しません。但し、次に掲げる必要があり第三者（日本国外にある者を含みます。）に提供する場合はこの限りではありません。',
      ],
      list: [
        { mark: '(1)', text: '当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合' },
        { mark: '(2)', text: '合併その他の事由による事業の承継に伴って個人情報が提供される場合' },
        { mark: '(3)', text: '国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合' },
      ],
    },
    {
      num: '06',
      title: '個人データを安全に管理するための措置',
      body: [
        '弊社グループは個人情報を正確かつ最新の内容に保つよう努め、不正なアクセス・改ざん・漏えい・滅失及び毀損から保護するため全従業員及び役員に対して教育研修を実施しています。また、個人情報保護規程を設け、現場での管理についても定期的に点検を行っています。',
      ],
    },
    {
      num: '07',
      title: '個人データの共同利用',
      body: ['弊社グループは、以下のとおり共同利用を行います。'],
      table: [
        ['個人データの管理に関する責任者', 'イノベーションライフ株式会社'],
        ['共同して利用する者の利用目的', '上記「利用目的」の内容と同様'],
        ['利用項目', '氏名、住所、電話番号、メールアドレス'],
        ['共同して利用する者の範囲', '弊社グループを構成する企業／株式会社エグザム（ekzm）／株式会社 01 START'],
      ],
    },
    {
      num: '08',
      title: '保有個人データの開示、訂正',
      body: [
        '弊社グループはお客様ご本人から個人情報の開示を求められた際、遅滞なく本人に対しこれを開示します。個人情報の利用目的の通知や訂正、追加、削除、利用の停止、第三者への提供の停止を希望される方は、以下の手順でご請求ください。',
      ],
    },
    {
      num: '09',
      title: '個人情報取り扱いに関する相談や苦情の連絡先',
      body: ['当社の個人情報の取り扱いに関するご質問やご不明点、苦情、その他のお問い合わせは下記よりご連絡ください。'],
      email: 'innovationlife.info@gmail.com',
    },
    {
      num: '10',
      title: 'SSL（Secure Socket Layer）について',
      body: [
        '本サービスの Web サイトは SSL に対応しており、Web ブラウザと Web サーバーとの通信を暗号化しています。ユーザーが入力する氏名や住所、電話番号などの個人情報は自動的に暗号化されます。',
      ],
    },
    {
      num: '11',
      title: 'Cookie について',
      body: [
        'Cookie とは、Web サーバーから Web ブラウザに送信されるデータのことです。Web サーバーが Cookie を参照することでユーザーのパソコンを識別でき、効率的に当社 Web サイトを利用することができます。当社 Web サイトが Cookie として送るファイルは、個人を特定するような情報は含んでおりません。',
        'お使いの Web ブラウザの設定により、Cookie を無効にすることも可能です。',
      ],
    },
    {
      num: '12',
      title: 'プライバシーポリシーの制定日及び改定日',
      table: [
        ['制定', '2024 年 6 月 26 日'],
      ],
    },
    {
      num: '13',
      title: '免責事項',
      body: [
        'Web サイトに掲載されている情報の正確性には万全を期していますが、お客様が Web サイトの情報を用いて行う一切の行為に関して、一切の責任を負わないものとします。',
        '弊社グループは、お客様が Web サイトを利用したことにより生じた利用者の損害及びお客様が第三者に与えた損害に関して、一切の責任を負わないものとします。',
      ],
    },
    {
      num: '14',
      title: '著作権・肖像権',
      body: [
        '当社 Web サイト内の文章や画像、すべてのコンテンツは著作権・肖像権等により保護されています。無断での使用や転用は禁止されています。',
      ],
    },
    {
      num: '15',
      title: 'リンク',
      body: [
        'Web サイトへのリンクは、自由に設置していただいて構いません。ただし、Web サイトの内容等によってはリンクの設置をお断りすることがあります。',
      ],
    },
  ],

  meta: [
    '制定 2024年6月26日',
    'イノベーションライフ株式会社',
  ],
};

function PrivacyHero() {
  return (
    <section
      className="il-page-hero"
      style={{ backgroundImage: `url(${PRIVACY.heroImage})` }}
    >
      <div className="il-page-hero__inner">
        <p className="il-page-hero__eyebrow">INNOVATION LIFE INC.</p>
        <h1 className="il-page-hero__title">Privacy&nbsp;Policy</h1>
        <div className="il-page-hero__rule"></div>
        <div style={{ marginTop: 24 }}>
          <span className="il-page-hero__title-ja">{PRIVACY.heroTitleJa}</span>
        </div>
      </div>
    </section>
  );
}

function PrivacyBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        プライバシーポリシー
      </div>
    </div>
  );
}

// Render an item that may be either a plain string or { mark, text }
function renderLegalItem(it, i) {
  if (typeof it === 'string') return <li key={i}>{it}</li>;
  return (
    <li key={i}>
      {it.mark && <span className="il-legal__mark">{it.mark}</span>}
      {it.text}
    </li>
  );
}

function PrivacyBody() {
  return (
    <section className="il-section">
      <div className="il-legal">
        <div className="il-legal__intro">{PRIVACY.intro}</div>

        {PRIVACY.sections.map((s) => (
          <article key={s.num} className="il-legal__section">
            <p className="il-legal__num">SECTION {s.num}</p>
            <h2 className="il-legal__heading">{s.title}</h2>
            <div className="il-legal__body">
              {s.body && s.body.map((p, i) => <p key={i}>{p}</p>)}

              {s.groups && s.groups.map((g, i) => (
                <div key={i}>
                  <p className="il-legal__sub">{g.label}</p>
                  <ul className="il-legal__list">
                    {g.items.map(renderLegalItem)}
                  </ul>
                </div>
              ))}

              {s.list && (
                <ul className="il-legal__list">
                  {s.list.map(renderLegalItem)}
                </ul>
              )}

              {s.table && (
                <table className="il-legal__info">
                  <tbody>
                    {s.table.map(([k, v]) => (
                      <tr key={k}><th>{k}</th><td>{v}</td></tr>
                    ))}
                  </tbody>
                </table>
              )}

              {s.email && (
                <a className="il-legal__email" href={`mailto:${s.email}`}>{s.email}</a>
              )}
            </div>
          </article>
        ))}

        <div className="il-legal__meta">
          {PRIVACY.meta.map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <>
      <ILHeader />
      <PrivacyHero />
      <PrivacyBreadcrumb />
      <PrivacyBody />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PrivacyPage />);
