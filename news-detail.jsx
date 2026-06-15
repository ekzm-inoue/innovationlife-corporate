// ============================================================
// Innovation Life — News detail (/news/{id})
// お知らせ詳細（サンプル：GW期間中の営業時間に関するご案内）
// ============================================================

// ---------- Articles (from supplied source) ----------
const NEWS_ARTICLES = {
  '001': {
    date: '2025.10.20',
    cat: 'お知らせ',
    title: '「アジア・ファニシング・フェア 2025」出展のお知らせ',
    author: 'INNOVATION LIFE 事務局',
    lede: '平素は格別のご愛顧を賜り、厚く御礼申し上げます。',
    body: [
      { type: 'p', text: 'この度、弊社は2025年11月19日（水）から21日（金）まで東京ビッグサイトにて開催される「アジア・ファニシング・フェア 2025（Asia Furnishing Fair 2025）」に、弊社の親会社である株式会社4FULグループの一員として出展する運びとなりました。' },
      { type: 'p', text: 'ご多忙の折とは存じますが、ぜひこの機会にご来場賜りますようお願い申し上げます。' },
      { type: 'h2', text: '出展概要' },
      { type: 'dl', items: [
        ['会期', '2025年11月19日（水）〜 11月21日（金）'],
        ['会場', '東京ビッグサイト（南3・4ホール）'],
        ['ブース番号', 'S4-G01'],
        ['共同出展', '株式会社4FUL'],
      ] },
      { type: 'p', text: '皆様のご来場を心よりお待ち申し上げております。' },
    ],
  },
  '002': {
    date: '2025.12.29',
    cat: 'お知らせ',
    title: '年末年始休業のお知らせ',
    author: 'INNOVATION LIFE 事務局',
    lede: '平素は格別のご愛顧を賜り、厚く御礼申し上げます。',
    body: [
      { type: 'p', text: '誠に勝手ながら、弊社では下記の期間を年末年始休業とさせていただきます。' },
      { type: 'h2', text: '休業期間' },
      { type: 'period', text: '2025年12月29日（月）〜 2026年1月4日（日）' },
      { type: 'note', text: '※2026年1月5日（月）より、通常通り営業いたします。' },
      { type: 'h2', text: '休業期間中のお問い合わせについて' },
      { type: 'p', text: '休業期間中にいただきましたお問い合わせ等につきましては、1月5日（月）以降、順次対応させていただきます。あらかじめご了承いただきますようお願い申し上げます。' },
      { type: 'p', text: 'お客様にはご不便をおかけいたしますが、何卒ご理解賜りますようよろしくお願い申し上げます。' },
    ],
  },
  '003': {
    date: '2026.04.27',
    cat: 'お知らせ',
    title: 'GW期間中の休業のお知らせ',
    author: 'INNOVATION LIFE 事務局',
    lede: '平素は格別のご愛顧を賜り、厚く御礼申し上げます。',
    body: [
      { type: 'p', text: '誠に勝手ながら、弊社では下記の期間をゴールデンウィーク（GW）休業期間とさせていただきます。' },
      { type: 'h2', text: '休業期間' },
      { type: 'period', text: '2026年4月29日（水・祝）〜 2026年5月6日（水・祝）' },
      { type: 'note', text: '※2026年5月7日（木）より、通常通り営業いたします。' },
      { type: 'h2', text: '休業期間中のお問い合わせについて' },
      { type: 'p', text: '休業期間中にいただきましたお問い合わせ等につきましては、5月7日（木）以降、順次対応させていただきます。あらかじめご了承いただきますようお願い申し上げます。' },
      { type: 'p', text: 'お客様にはご不便をおかけいたしますが、何卒ご理解賜りますようよろしくお願い申し上げます。' },
    ],
  },
  'b001': {
    date: '2026.06.15',
    cat: '事例紹介',
    title: '【コーディネート事例】ご予算40万円で叶える、統一感のあるトータルインテリアコーディネート',
    author: 'INNOVATION LIFE 事務局',
    lede: 'いつもkagurakuをご利用いただき、誠にありがとうございます。コーディネーターの松岡です。',
    body: [
      { type: 'p', text: '今回は、弊社がご提案させていただいた「家具＆雑貨コーディネートプラン」の事例をご紹介いたします。' },
      { type: 'h2', text: '空間の統一感を意識したトータルコーディネート' },
      { type: 'p', text: '本案件では、ご予算40万円の中で、ソファやダイニングセット、リビングラグといった大型家具を中心に選定いたしました。さらに、空間全体に美しい統一感が生まれるよう、アートポスターやフラワーベース、ドライフラワー、カトラリーなどの小物類に至るまで、トータルでのご提案を行っております。' },
      { type: 'p', text: 'インテリアのベースにはベージュやグレーの家具を配置し、落ち着きのある優しい印象の空間に仕上げました。' },
      { type: 'h2', text: 'ご提案から納品・設置までのプロセス' },
      { type: 'imgrow', items: [
        { src: 'assets/blog001_1.jpg', caption: '実際の納品後の様子' },
        { src: 'assets/blog001_2.jpg', caption: 'ご提案時に作成したパース図（完成予想図）' },
      ] },
      { type: 'p', text: 'kagurakuでは、コンセプトのご提案から家具の選定、そして最終的な納品・設置に至るまで、すべての工程を一貫してサポートしております。パース図を用いることで、仕上がりのイメージを事前にお客様と共有し、安心して進められるよう心掛けております。' },
    ],
  },
  'b002': {
    date: '2026.06.15',
    cat: '事例紹介',
    title: '【施工事例】オフィス家具の納品と内装プチリノベーションで叶える、お客様を迎え入れる快適な商談スペース',
    author: 'INNOVATION LIFE 事務局',
    lede: 'いつもkagurakuをご利用いただき、誠にありがとうございます。コーディネーターの松岡です。',
    body: [
      { type: 'p', text: '今回は、弊社が手掛けた会社事務所における家具納品および内装プチリノベーションの事例をご紹介いたします。' },
      { type: 'h2', text: 'プロジェクトの背景とお悩み' },
      { type: 'p', text: '「オフィスの入口スペースが単なる事務机の置き場になっており、お客様や協力会社様をお迎えする場所としてふさわしくない」というお悩みから、今回のプロジェクトはスタートいたしました。' },
      { type: 'p', text: '一部の内装を整え、家具を新調することで、課題を解決し、商談や打ち合わせを円滑に行える「お客様をあたたかく迎え入れる空間」へと生まれ変わりました。' },
      { type: 'imgrow', items: [
        { src: 'assets/blog002_1.jpg', caption: '商談スペースのビフォー／アフター' },
        { src: 'assets/blog002_2.jpg', caption: '新調した会議用テーブルとチェア' },
      ] },
      { type: 'h2', text: '納品家具および内装施工の内容' },
      { type: 'p', text: '今回のプロジェクトで実施した主な内容は以下の通りです。' },
      { type: 'h3', text: '納品家具' },
      { type: 'ul', items: ['会議用テーブル', '会議用チェア'] },
      { type: 'h3', text: '内装施工内容（一部）' },
      { type: 'ul', items: [
        '壁面のホワイトボード化：壁の一面をホワイトボード仕様に変更し、打ち合わせ時のディスカッションがより深まる工夫を施しました。',
        '間仕切りの設置：限られたスペースを有効活用し、3つのブースとして独立して使用できるよう間仕切りを設置いたしました。',
      ] },
      { type: 'p', text: 'kagurakuでは、家具の選定から納品、そして内装施工にいたるまで、すべての工程を一貫してサポートしております。' },
    ],
  },
  'b003': {
    date: '2026.06.15',
    cat: 'コラム',
    title: '【インテリアのコツ】部屋がごちゃごちゃして見える原因は？プロが教える「失敗しない配色の黄金ルール」',
    author: 'INNOVATION LIFE 事務局',
    lede: 'いつもカグラクをご利用いただき、誠にありがとうございます。',
    body: [
      { type: 'p', text: '「お部屋をおしゃれに整えたいけれど、なぜかごちゃごちゃして見えてしまう」とお悩みの方はいらっしゃいませんか。' },
      { type: 'p', text: '実は、その大きな原因として「色の使いすぎ」が挙げられます。プロのコーディネーターが空間づくりにおいて絶対に避けるポイントの一つが、「4色以上を使用すること」です。' },
      { type: 'p', text: 'どれほど魅力的な家具やインテリア雑貨を配置しても、空間内の色数が多くなると、全体のまとまりが損なわれてしまいます。' },
      { type: 'p', text: 'そこで今回は、理想のお部屋を叶えるための「失敗しない配色の黄金ルール」について、YouTubeのショート動画で分かりやすく解説いたしました。' },
      { type: 'h2', text: '失敗しない配色の黄金ルール（動画解説）' },
      { type: 'p', text: '以下の埋め込み動画より、解説をぜひご覧ください。' },
      { type: 'videorow', items: [
        'https://www.youtube.com/embed/FMxs3uIL4aA',
        'https://www.youtube.com/embed/S2DH9-nd1gw',
      ] },
    ],
  },
};

const NEWS_ORDER = ['003', '002', '001'];
const BLOG_ORDER = ['b001', 'b002', 'b003'];

function getArticleId() {
  const id = new URLSearchParams(window.location.search).get('id');
  return NEWS_ARTICLES[id] ? id : NEWS_ORDER[0];
}

const CURRENT_ID = getArticleId();
const ARTICLE_ORDER = BLOG_ORDER.includes(CURRENT_ID) ? BLOG_ORDER : NEWS_ORDER;
const NEWS_ITEM = {
  ...NEWS_ARTICLES[CURRENT_ID],
  related: ARTICLE_ORDER.filter((x) => x !== CURRENT_ID).map((x) => ({
    id: x, date: NEWS_ARTICLES[x].date, cat: NEWS_ARTICLES[x].cat, title: NEWS_ARTICLES[x].title,
  })),
  prev: (() => { const i = ARTICLE_ORDER.indexOf(CURRENT_ID); return i < ARTICLE_ORDER.length - 1 ? ARTICLE_ORDER[i + 1] : null; })(),
  next: (() => { const i = ARTICLE_ORDER.indexOf(CURRENT_ID); return i > 0 ? ARTICLE_ORDER[i - 1] : null; })(),
};

// ---------- Page hero ----------
function NewsDetailHero() {
  return (
    <section className="il-news-hero">
      <div className="il-news-hero__inner">
        <div className="il-news-hero__meta">
          <span className="il-news-hero__date">{NEWS_ITEM.date}</span>
          <span className="il-news-hero__cat">{NEWS_ITEM.cat}</span>
        </div>
        <h1 className="il-news-hero__title">{NEWS_ITEM.title}</h1>
      </div>
    </section>
  );
}

function NewsDetailBreadcrumb() {
  return (
    <div className="il-breadcrumb">
      <div className="il-container">
        <a href="index.html">HOME</a>
        <span>／</span>
        <a href="news.html">お知らせ・ブログ</a>
        <span>／</span>
        {NEWS_ITEM.title}
      </div>
    </div>
  );
}

// ---------- Article body ----------
function ArticleBody() {
  return (
    <article className="il-article">
      <p className="il-article__lede">{NEWS_ITEM.lede}</p>

      {NEWS_ITEM.body.map((b, i) => {
        if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
        if (b.type === 'h3') return <h3 key={i} style={{ fontSize: '1.05em', fontWeight: 700, margin: '1.6em 0 0.5em' }}>{b.text}</h3>;
        if (b.type === 'p') return <p key={i}>{b.text}</p>;
        if (b.type === 'ul') return (
          <ul key={i} className="il-article__list">
            {b.items.map((it, j) => <li key={j}>{it}</li>)}
          </ul>
        );
        if (b.type === 'note') return (
          <p key={i} style={{ color: 'var(--il-stone)', fontSize: '0.94em' }}>{b.text}</p>
        );
        if (b.type === 'period') return (
          <p key={i} style={{ fontSize: '1.15em', fontWeight: 700 }}>{b.text}</p>
        );
        if (b.type === 'img') return (
          <figure key={i} className="il-article__figure">
            <img src={b.src} alt={b.caption || ''} loading="lazy" />
            {b.caption && <figcaption>{b.caption}</figcaption>}
          </figure>
        );
        if (b.type === 'imgrow') return (
          <div key={i} className="il-article__figrow">
            {b.items.map((im, j) => (
              <figure key={j} className="il-article__figure">
                <img src={im.src} alt={im.caption || ''} loading="lazy" />
                {im.caption && <figcaption>{im.caption}</figcaption>}
              </figure>
            ))}
          </div>
        );
        if (b.type === 'videorow') return (
          <div key={i} className="il-article__videorow">
            {b.items.map((src, j) => (
              <div key={j} className="il-article__video">
                <iframe
                  src={src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        );
        if (b.type === 'dl') return (
          <table key={i} className="il-article__schedule">
            <tbody>
              {b.items.map(([k, v]) => (
                <tr key={k}><th>{k}</th><td>{v}</td></tr>
              ))}
            </tbody>
          </table>
        );
        return null;
      })}
    </article>
  );
}

// ---------- Article nav ----------
function ArticleNav() {
  return (
    <nav className="il-article-nav">
      {NEWS_ITEM.prev
        ? <a className="il-article-nav__prev" href={`news-detail.html?id=${NEWS_ITEM.prev}`}>← 前の記事へ</a>
        : <span className="il-article-nav__prev" style={{ opacity: 0.3, pointerEvents: 'none' }}>← 前の記事へ</span>}
      <a className="il-article-nav__center" href="news.html">お知らせ・ブログ一覧</a>
      {NEWS_ITEM.next
        ? <a className="il-article-nav__next" href={`news-detail.html?id=${NEWS_ITEM.next}`}>次の記事へ →</a>
        : <span className="il-article-nav__next" style={{ opacity: 0.3, pointerEvents: 'none' }}>次の記事へ →</span>}
    </nav>
  );
}

// ---------- Related news ----------
function RelatedNews() {
  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-section-head" style={{ textAlign: 'left', marginBottom: 40 }}>
          <p className="il-eyebrow">RELATED ARTICLES</p>
          <h2 className="il-h-section" style={{ marginBottom: 0 }}>
            {BLOG_ORDER.includes(CURRENT_ID) ? '関連するブログ記事' : '関連するお知らせ'}
          </h2>
        </div>
        <div className="il-related-news">
          {NEWS_ITEM.related.map((n, i) => (
            <a key={i} className="il-related-news__card" href={`news-detail.html?id=${n.id}`}>
              <span className="il-related-news__date">{n.date}</span>
              <span className="il-related-news__cat">{n.cat}</span>
              <h3 className="il-related-news__title">{n.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CTA ----------
function NewsDetailCTA() {
  return (
    <section className="il-dual-cta">
      <div className="il-dual-cta__inner">
        <div className="il-dual-cta__col">
          <p className="il-dual-cta__col-eyebrow">NEWS</p>
          <h3 className="il-dual-cta__col-title">お知らせ・ブログ</h3>
          <a className="il-btn il-btn--ghost-inv" href="news.html">
            一覧へ戻る
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

function NewsDetailPage() {
  return (
    <>
      <ILHeader />
      <NewsDetailBreadcrumb />
      <NewsDetailHero />
      <ArticleBody />
      <ArticleNav />
      <NewsDetailCTA />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NewsDetailPage />);
