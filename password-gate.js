/* シンプルなパスワードゲート（打ち合わせ用）
   ※ JS だけの軽い保護。詳しい人はバイパス可能なので、機密情報には使わないこと。
   パスワードは SHA-256 でハッシュ化して埋め込み。 */
(function () {
  var STORAGE_KEY = 'il_auth_ok_v1';
  var PASSWORD_HASH = '6a9b1c9d01dfdeaa159c264abe136a5ec2ee792eed92ca3f965b6c145889a9bf';

  // セッション中に認証済みならスキップ
  try {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return;
  } catch (e) {}

  // ページの中身を即座に隠す
  var styleEl = document.createElement('style');
  styleEl.textContent = 'html { visibility: hidden !important; }';
  document.documentElement.appendChild(styleEl);

  async function sha256(str) {
    var buf = new TextEncoder().encode(str);
    var hashBuf = await crypto.subtle.digest('SHA-256', buf);
    var bytes = Array.from(new Uint8Array(hashBuf));
    return bytes.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  function showGate() {
    var overlay = document.createElement('div');
    overlay.id = 'il-pw-overlay';
    overlay.setAttribute('style', [
      'position:fixed', 'inset:0', 'background:#F6F1E8', 'z-index:2147483647',
      'display:flex', 'align-items:center', 'justify-content:center',
      'visibility:visible', 'font-family:"Hiragino Sans","Yu Gothic",sans-serif'
    ].join(';'));

    overlay.innerHTML = ''
      + '<div style="background:#fff;padding:40px 32px;border-radius:8px;max-width:380px;width:90%;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,0.08);">'
      + '  <div style="font-family:\'Cormorant Garamond\',serif;font-style:italic;font-size:24px;color:#00704A;letter-spacing:4px;margin-bottom:8px;">innovation life</div>'
      + '  <h2 style="margin:0 0 8px;font-weight:500;color:#333;font-size:18px;">プレビューサイト</h2>'
      + '  <p style="margin:0 0 24px;color:#888;font-size:13px;line-height:1.6;">関係者の方は合言葉を入力してください</p>'
      + '  <input id="il-pw-input" type="password" placeholder="合言葉" autocomplete="off"'
      + '    style="width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:16px;box-sizing:border-box;outline:none;" />'
      + '  <button id="il-pw-btn"'
      + '    style="margin-top:12px;width:100%;padding:12px;background:#00704A;color:#fff;border:0;border-radius:4px;font-size:15px;cursor:pointer;letter-spacing:2px;">'
      + '    入る</button>'
      + '  <p id="il-pw-err" style="margin:12px 0 0;color:#c0392b;font-size:13px;display:none;">合言葉が違います</p>'
      + '</div>';

    // 中身を表示するために html の visibility を戻す（オーバーレイで隠す）
    styleEl.textContent = '';
    document.body.appendChild(overlay);

    var input = overlay.querySelector('#il-pw-input');
    var btn = overlay.querySelector('#il-pw-btn');
    var err = overlay.querySelector('#il-pw-err');
    input.focus();

    async function check() {
      var hash = await sha256(input.value);
      if (hash === PASSWORD_HASH) {
        try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
        overlay.remove();
      } else {
        err.style.display = 'block';
        input.value = '';
        input.focus();
      }
    }

    btn.addEventListener('click', check);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') check();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showGate);
  } else {
    showGate();
  }
})();
