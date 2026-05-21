// ============================================================
// Innovation Life — News detail (/news/{id})
// お知らせ詳細（サンプル：GW期間中の営業時間に関するご案内）
// ============================================================

const NEWS_ITEM = {
  date: '2026.05.10',
  cat: 'お知らせ',
  title: 'GW期間中の営業時間に関するご案内',
  author: 'INNOVATION LIFE 事務局',

  lede: '平素より格別のご愛顧を賜り、誠にありがとうございます。誠に勝手ながら、ゴールデンウィーク期間中の当社営業時間につきまして、下記の通りご案内いたします。',

  schedule: [
    ['2026年4月29日（水・祝）', { type: 'closed', text: '休業' }],
    ['2026年4月30日（木）',     { type: 'short',  text: '短縮営業（10:00〜15:00）' }],
    ['2026年5月1日（金）',      { type: 'normal', text: '通常営業（10:00〜18:00）' }],
    ['2026年5月2日（土）',      { type: 'closed', text: '休業' }],
    ['2026年5月3日（日・祝）〜5月6日（水・休）', { type: 'closed', text: '休業' }],
    ['2026年5月7日（木）以降',  { type: 'normal', text: '通常営業（10:00〜18:00）' }],
  ],

  noteOnline:
    'カグラクLINEでのお問い合わせは、期間中も24時間お受け付けしております。お返事は5月7日（木）以降、順次対応させていただきますので、何卒ご理解いただけますようお願い申し上げます。',

  noteShipping:
    '4月28日（火）正午までにいただいたご注文・お問い合わせにつきましては、休業前に対応いたします。それ以降にいただいたものは、休業明けより順次対応となりますので、お時間をいただく場合がございます。',

  closing: [
    'お客様にはご不便をおかけいたしますが、何卒ご了承くださいますようお願い申し上げます。',
    '今後とも、イノベーションライフ株式会社およびインテリア提案サービス「カグラク」をどうぞよろしくお願いいたします。',
  ],

  related: [
    { date: '2025.12.20', cat: 'お知らせ', title: '年末年始休業のお知らせ' },
    { date: '2026.04.02', cat: 'お知らせ', title: '本社オフィス移転のお知らせ' },
    { date: '2026.03.05', cat: 'お知らせ', title: '春の家具・照明 新作お披露目会のご案内' },
  ],
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
        <div className="il-news-hero__author">
          <span>POSTED BY</span>
          <span className="il-news-hero__author-name">{NEWS_ITEM.author}</span>
        </div>
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
        <a href="news.html">お知らせ</a>
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

      <h2>GW期間中の営業スケジュール</h2>
      <table className="il-article__schedule">
        <tbody>
          {NEWS_ITEM.schedule.map(([day, v]) => (
            <tr key={day}>
              <th>{day}</th>
              <td>
                {v.type === 'closed' && <strong>{v.text}</strong>}
                {v.type !== 'closed' && v.text}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>オンラインでのお問い合わせについて</h2>
      <p>{NEWS_ITEM.noteOnline}</p>

      <div className="il-article__callout">
        <p>LINEからのご相談は24時間受付しております。</p>
        <p>ご返答は休業明けより順次対応いたしますので、ご了承ください。</p>
      </div>

      <h2>商品の発送・お届けについて</h2>
      <p>{NEWS_ITEM.noteShipping}</p>

      <h2>ご利用のお客様へ</h2>
      {NEWS_ITEM.closing.map((c, i) => <p key={i}>{c}</p>)}

      <div className="il-article__signature">
        <small>イノベーションライフ株式会社</small>
        事務局一同
      </div>
    </article>
  );
}

// ---------- Article nav ----------
function ArticleNav() {
  return (
    <nav className="il-article-nav">
      <a className="il-article-nav__prev" href="#prev">← 前の記事へ</a>
      <a className="il-article-nav__center" href="news.html">お知らせ一覧</a>
      <a className="il-article-nav__next" href="#next">次の記事へ →</a>
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
          <h2 className="il-h-section" style={{ marginBottom: 0 }}>関連するお知らせ</h2>
        </div>
        <div className="il-related-news">
          {NEWS_ITEM.related.map((n, i) => (
            <a key={i} className="il-related-news__card" href="news-detail.html">
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
      <RelatedNews />
      <NewsDetailCTA />
      <ILFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NewsDetailPage />);
