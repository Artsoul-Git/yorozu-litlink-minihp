(function () {

  function H(title) {
    return '<header class="slide-header"><h2 class="slide-h2">' + title + '</h2></header>';
  }

  /* ===================== SLIDES ===================== */
  window.SLIDE_SLUG = 'yorozu-litlink-minihp';

  /* ── 01: タイトル ── */
  function slide01() {
    return '<section class="slide slide-cover" data-section="cover" data-title="タイトル" data-notes="本日はよろず支援拠点の勉強会にお越しいただきありがとうございます。&#10;今日は3つの無料ツールを使って、20分でミニホームページを完成させます。&#10;使うのはLit.link、Canva、ChatGPTの3つです。全部無料です。&#10;今日のゴールは一つだけ。あなた自身のホームページのURLを手に入れることです。">' +
      '<div class="slide-cover-bar">' +
        '<div class="slide-cover-tag">よろず支援拠点 勉強会</div>' +
        '<h1 class="slide-cover-title">Lit.linkで<br>ミニホームページを作ろう！</h1>' +
        '<div class="slide-cover-brand">有限会社アートソウル</div>' +
      '</div>' +
      '<div class="slide-cover-body">' +
        '<p class="slide-cover-sub">Canva × ChatGPT × Lit.link で20分完成</p>' +
        '<div class="slide-cover-meta">無料ツールだけ使います ／ IT初心者の方も大歓迎</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 02: インパクト ── */
  function slide02() {
    return '<section class="slide slide-impact" data-section="cover" data-title="20分で、あなたのHPが完成します" data-notes="この勉強会が終わる頃には、あなたのホームページが完成しています。&#10;なんとなく分かっただけじゃなくて、URLができた、QRコードができた、という状態でお帰りいただきます。&#10;後半20分で私が実際に作って見せますので、流れを目で確認してください。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">今日のゴール</div>' +
        '<p class="s-impact-main">この勉強会が終わる頃には、<br>あなたの<em>ホームページが完成</em>しています。</p>' +
        '<p class="s-impact-sub">URLとQRコードを持ち帰れます</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 03: 今日の流れ ── */
  function slide03() {
    return '<section class="slide" data-section="cover" data-title="今日の流れ" data-notes="今日の流れはシンプルです。&#10;前半20分で3つのツールの説明と、何を作るかを確認します。&#10;後半20分で実際に私が作ってみせます。&#10;前半は聞いているだけで大丈夫です。後半はスマホがあれば一緒にやってもOKです。">' +
      H('今日の流れ') +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-flow">' +
          '<div class="s-flow-step">' +
            '<div class="s-flow-num">1</div>' +
            '<div class="s-flow-label">説明パート</div>' +
            '<div class="s-flow-desc">3つのツール紹介<br>何を作るか確認<br><strong>約20分</strong></div>' +
          '</div>' +
          '<div class="s-flow-step">' +
            '<div class="s-flow-num">2</div>' +
            '<div class="s-flow-label">実演パート</div>' +
            '<div class="s-flow-desc">実際に作ってみる<br>一緒にやってもOK<br><strong>約20分</strong></div>' +
          '</div>' +
          '<div class="s-flow-step">' +
            '<div class="s-flow-num">3</div>' +
            '<div class="s-flow-label">完成！</div>' +
            '<div class="s-flow-desc">URLとQRコード<br>を手に入れる</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 04: こんなお悩みありませんか？ ── */
  function slide04() {
    return '<section class="slide" data-section="cover" data-title="こんなお悩みありませんか？" data-notes="こういうお悩み、ありませんか？と聞いてみてください。&#10;うなずきや手上げを確認して、参加者の現状に合わせてトークを調整します。&#10;ホームページって今はフルのものじゃなくていいんです。シンプルな顔ページがあれば十分。&#10;今日はそれを無料で20分で作ります。">' +
      H('こんなお悩みありませんか？') +
      '<div class="slide-content">' +
        '<div class="s-point-list">' +
          '<div class="s-point-row">' +
            '<div class="s-point-badge">😓</div>' +
            '<div class="s-point-content">' +
              '<div class="s-point-title">「うちはホームページがないんですよね…」</div>' +
              '<div class="s-point-desc">SNSはやってるけど、URLが1本ない</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-point-row">' +
            '<div class="s-point-badge">💳</div>' +
            '<div class="s-point-content">' +
              '<div class="s-point-title">「名刺に載せるURLがなくて」</div>' +
              '<div class="s-point-desc">QRコードを作りたいけど、リンク先がない</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-point-row">' +
            '<div class="s-point-badge">💸</div>' +
            '<div class="s-point-content">' +
              '<div class="s-point-title">「作るのって難しいし、お金かかるんでしょ？」</div>' +
              '<div class="s-point-desc">今日、この3つのツールで解決します。全部無料です。</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 05: セクション①ツール紹介 ── */
  function slide05() {
    return '<section class="slide slide-section" data-section="tools" data-title="PART 01 ツール紹介" data-notes="では今日使う3つのツールをご紹介します。繰り返しますが、全部無料です。">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PART 01</div>' +
        '<h1 class="s-section-title">3つの無料ツールを知ろう</h1>' +
        '<p class="s-section-lead">Lit.link ／ Canva ／ ChatGPT — すべて無料で使えます</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 06: Lit.linkとは？ ── */
  function slide06() {
    return '<section class="slide" data-section="tools" data-title="Lit.linkとは？" data-notes="Lit.linkはInstagramのリンクツリーのようなものです。&#10;スマホ対応で、URLが1本もらえて、無料で使えます。&#10;登録はGoogleアカウントがあれば30秒でできます。&#10;フルのホームページじゃなくていい。名刺に書けるURLと顔ページとして使います。">' +
      H('① Lit.link（リットリンク）とは？') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">自分の情報をまとめた「ミニホームページ」が無料で作れるサービス</li>' +
          '<li class="s-list-head">特徴</li>' +
          '<li>スマホで見やすく表示される（スマートフォン最適化）</li>' +
          '<li>URLが1本もらえる（例：lit.link/あなたの名前）</li>' +
          '<li>プロフィール・サービス・SNSリンクをまとめられる</li>' +
          '<li>Googleアカウントで30秒登録、すぐ使える</li>' +
          '<li class="s-list-head">使い方のイメージ</li>' +
          '<li>Instagramに「プロフィールはこちら→」と貼るリンク先として</li>' +
          '<li>名刺・チラシのQRコードのリンク先として</li>' +
          '<li class="s-list-arrow">「フルのHP」より先に「顔ページ」を持つことが大事！</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* ── 07: Canvaとは？ ── */
  function slide07() {
    return '<section class="slide" data-section="tools" data-title="Canvaとは？" data-notes="Canvaはデザインの専門知識がなくても、プロっぽい画像が作れるツールです。&#10;テンプレートを選んで文字を変えるだけで、それっぽい画像ができます。&#10;今日はCanvaでLit.linkのプロフィール画像やヘッダー画像を作ります。&#10;無料版でも十分使えます。">' +
      H('② Canva（キャンバ）とは？') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">デザインの知識ゼロでも「プロっぽい画像」が作れる無料ツール</li>' +
          '<li class="s-list-head">こんなことができます</li>' +
          '<li>SNSバナー・プロフィール画像・チラシなど何でも作れる</li>' +
          '<li>テンプレートを選んで文字を変えるだけでOK</li>' +
          '<li>ダウンロードしてすぐ使える（PNG/JPG形式）</li>' +
          '<li class="s-list-head">今日やること</li>' +
          '<li>Lit.link用のプロフィール画像・ヘッダー画像を作る</li>' +
          '<li>テンプレートを選んで、お店の名前とキャッチコピーを入れるだけ</li>' +
          '<li class="s-list-arrow">canva.com にアクセス → 「SNSバナー」で検索するだけ</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* ── 08: ChatGPTとは？（バナー生成） ── */
  function slide08() {
    return '<section class="slide" data-section="tools" data-title="ChatGPTとは？（バナー生成）" data-notes="ChatGPTはAIに文章で指示するだけで、バナー画像を作ってくれます。&#10;今日はChatGPTにバナー画像を作らせて、Lit.linkに貼ります。&#10;プロンプトは後でコピーできるように用意してありますので、書けないという心配はしなくて大丈夫です。&#10;ChatGPTの無料版でも使えます。">' +
      H('③ ChatGPT とは？（AIバナー生成）') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">「こんなバナー作って」と文章で指示するだけで画像が生成される</li>' +
          '<li class="s-list-head">今日の使い方</li>' +
          '<li>お店のバナー画像をAIに作らせる</li>' +
          '<li>「〇〇というお店のバナーを横長で作って」と書くだけ</li>' +
          '<li>気に入らなければ「もっと明るくして」と追加指示できる</li>' +
          '<li class="s-list-head">必要なもの</li>' +
          '<li>ChatGPTの無料アカウント（chatgpt.com）</li>' +
          '<li>プロンプト（指示文）— このスライドにコピペ用を用意済み</li>' +
          '<li class="s-list-arrow">専門知識ゼロ・デザイナー不要・費用ゼロ！</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* ── 09: 3つのツールの役割分担 ── */
  function slide09() {
    return '<section class="slide" data-section="tools" data-title="3つのツールの役割分担" data-notes="整理すると、ChatGPTでバナー画像を作り、CanvaでプロフィールやヘッダーをデザインしてLit.linkで全部まとめて公開するという流れです。&#10;それぞれ単独でも使えますが、組み合わせると最強です。">' +
      H('3つのツールの役割分担') +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-flow">' +
          '<div class="s-flow-step">' +
            '<div class="s-flow-num">AI</div>' +
            '<div class="s-flow-label">ChatGPT</div>' +
            '<div class="s-flow-desc">バナー画像を<br>AIが生成</div>' +
          '</div>' +
          '<div class="s-flow-step">' +
            '<div class="s-flow-num">🎨</div>' +
            '<div class="s-flow-label">Canva</div>' +
            '<div class="s-flow-desc">プロフィール画像・<br>ヘッダーをデザイン</div>' +
          '</div>' +
          '<div class="s-flow-step">' +
            '<div class="s-flow-num">🏠</div>' +
            '<div class="s-flow-label">Lit.link</div>' +
            '<div class="s-flow-desc">全部まとめて<br>ホームページとして公開</div>' +
          '</div>' +
        '</div>' +
        '<div class="s-callout" style="margin-top:1.5cqw;">この3つを組み合わせると、<strong>今日中にホームページが完成します</strong></div>' +
      '</div>' +
    '</section>';
  }

  /* ── 10: 今日完成するもの ── */
  function slide10() {
    return '<section class="slide" data-section="tools" data-title="今日完成するもの（イメージ）" data-notes="こちらが今日の完成イメージです。プロフィール・サービス・SNSリンク・問い合わせ先がまとまって、URLが1本手に入ります。&#10;このURLをQRコードにすれば名刺に貼れます。チラシに貼れます。&#10;ホームページはありますか？と聞かれたときに、これを見せればOKです。">' +
      H('今日完成するもの（イメージ）') +
      '<div class="slide-content">' +
        '<div class="s-compare">' +
          '<div class="s-compare-col neutral">' +
            '<div class="s-compare-badge">😔 今まで</div>' +
            '<div class="s-compare-title">ホームページがない状態</div>' +
            '<ul class="s-compare-items">' +
              '<li>名刺にURLがない</li>' +
              '<li>「HPはありますか？」に答えられない</li>' +
              '<li>InstagramのURLを口頭で伝えるしかない</li>' +
              '<li>QRコードを作れない</li>' +
            '</ul>' +
          '</div>' +
          '<div class="s-compare-col positive">' +
            '<div class="s-compare-badge">✅ 今日の終わりに</div>' +
            '<div class="s-compare-title">ミニHPが完成！</div>' +
            '<ul class="s-compare-items">' +
              '<li>URLが1本できる（lit.link/〇〇）</li>' +
              '<li>プロフィール＋サービス＋SNSがまとまる</li>' +
              '<li>QRコードが作れる（名刺・チラシに貼れる）</li>' +
              '<li>今日から使い始められる</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 11: セクション②サイト構成 ── */
  function slide11() {
    return '<section class="slide slide-section" data-section="structure" data-title="PART 02 サイト構成を考えよう" data-notes="では次に、何を載せるかを考えましょう。ここが一番大事です。&#10;ツールの使い方より、何を伝えるかの方が重要です。">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PART 02</div>' +
        '<h1 class="s-section-title">サイト構成を考えよう</h1>' +
        '<p class="s-section-lead">「何を載せるか」が決まれば、あとは作るだけ</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 12: 何を載せる？ ── */
  function slide12() {
    return '<section class="slide" data-section="structure" data-title="何を載せる？5つの定番コンテンツ" data-notes="Lit.linkに載せる定番はこの5つです。全部入れる必要はありません。&#10;今日は絶対必要なものだけ入れてみましょう。残りは後で追加できます。&#10;皆さんならどれを入れますか、と軽く問いかけて参加感を出しましょう。">' +
      H('何を載せる？5つの定番コンテンツ') +
      '<div class="slide-content">' +
        '<ol class="s-num-list">' +
          '<li class="s-num-item">' +
            '<div class="s-num">①</div>' +
            '<div>' +
              '<div class="s-num-title">プロフィール</div>' +
              '<div class="s-num-desc">名前・業種・一言メッセージ（100〜150字）</div>' +
            '</div>' +
          '</li>' +
          '<li class="s-num-item">' +
            '<div class="s-num">②</div>' +
            '<div>' +
              '<div class="s-num-title">提供サービス</div>' +
              '<div class="s-num-desc">何ができるか・何が買えるか・料金帯</div>' +
            '</div>' +
          '</li>' +
          '<li class="s-num-item">' +
            '<div class="s-num">③</div>' +
            '<div>' +
              '<div class="s-num-title">SNSへのリンク</div>' +
              '<div class="s-num-desc">Instagram・X・LINE公式アカウントなど</div>' +
            '</div>' +
          '</li>' +
          '<li class="s-num-item">' +
            '<div class="s-num">④</div>' +
            '<div>' +
              '<div class="s-num-title">お問い合わせ先</div>' +
              '<div class="s-num-desc">電話番号・メール・予約フォームURLなど</div>' +
            '</div>' +
          '</li>' +
          '<li class="s-num-item">' +
            '<div class="s-num">⑤</div>' +
            '<div>' +
              '<div class="s-num-title">写真・バナー画像</div>' +
              '<div class="s-num-desc">今日Canva・ChatGPTで作るビジュアル</div>' +
            '</div>' +
          '</li>' +
        '</ol>' +
        '<div class="s-callout">全部入れなくてOK。まず①②③だけでも十分です！</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 13: セクション③実演スタート ── */
  function slide13() {
    return '<section class="slide slide-impact" data-section="demo" data-title="PART 03 実演スタート！" data-notes="では後半の実演スタートです。スマホをお持ちの方は一緒にやってみてもOKです。&#10;見るだけでも全然大丈夫です。今日ここで流れを見ておくと、家でもできます。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">PART 03</div>' +
        '<p class="s-impact-main"><em>実演スタート！</em></p>' +
        '<p class="s-impact-sub">スマホがある方は一緒にどうぞ ／ 見るだけも大歓迎</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 14: Step1 Lit.linkに登録 ── */
  function slide14() {
    return '<section class="slide" data-section="demo" data-title="Step1｜Lit.linkに登録する" data-notes="まずLit.linkに登録します。ブラウザでlit.linkと検索して無料ではじめるをクリック。&#10;Googleアカウントでログインするのが一番簡単です。&#10;ユーザー名はお店の名前のローマ字か名前のローマ字でOKです。あとから変えられます。&#10;ここまで3分かかりません。">' +
      H('Step 1｜Lit.linkに登録する') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">1</div>' +
            '<div>' +
              '<div class="s-step-text">ブラウザで「lit.link」と検索 → 公式サイトへ</div>' +
              '<div class="s-step-sub">または直接 lit.link にアクセス</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">2</div>' +
            '<div>' +
              '<div class="s-step-text">「無料ではじめる」をクリック → Googleアカウントでログイン</div>' +
              '<div class="s-step-sub">メールアドレスでも登録できます</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">3</div>' +
            '<div>' +
              '<div class="s-step-text">ユーザー名を決める（例：yamada-hanako）</div>' +
              '<div class="s-step-sub">お店の名前のローマ字でOK。あとから変更可能</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">4</div>' +
            '<div>' +
              '<div class="s-step-text">プロフィール名・一言メッセージを入力して保存</div>' +
              '<div class="s-step-sub">これで土台の完成！ lit.link/ユーザー名 のURLが発行される</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="s-callout" style="margin-top:.8cqw;">ここまで<strong>3分以内</strong>で完了します！</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 15: Step2 Canvaで画像 ── */
  function slide15() {
    return '<section class="slide" data-section="demo" data-title="Step2｜Canvaで画像を作る" data-notes="Canvaにアクセスして、SNSバナーと検索します。テンプレートを選んでテキストを変えるだけです。&#10;お店の名前とキャッチコピーを入力して、右上の共有→ダウンロードでPNG保存します。&#10;何を作ればいいか迷ったらChatGPTに相談するプロンプトがスライドにあります。">' +
      H('Step 2｜Canvaで画像を作る') +
      '<div class="slide-content">' +
        '<div class="s-steps" style="margin-bottom:.8cqw;">' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">1</div>' +
            '<div>' +
              '<div class="s-step-text">canva.com にアクセス → 検索欄に「SNSバナー」と入力</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">2</div>' +
            '<div>' +
              '<div class="s-step-text">テンプレートを1つ選んでクリック → 文字を書き換える</div>' +
              '<div class="s-step-sub">お店の名前・キャッチコピーを入力</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">3</div>' +
            '<div>' +
              '<div class="s-step-text">右上「共有」→「ダウンロード」→ PNG形式で保存</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="s-prompt-wrap">' +
          '<button class="s-prompt-copy" onclick="(function(b){var p=b.parentElement.querySelector(\'.s-prompt-box\');navigator.clipboard.writeText(p.textContent).then(function(){b.textContent=\'コピー済！\';setTimeout(function(){b.textContent=\'コピー\';},2000);});})(this)">コピー</button>' +
          '<div class="s-prompt-box">ChatGPT相談プロンプト（デザインに迷ったとき）&#10;&#10;私は【業種】をやっています。Canvaで「Lit.link用のヘッダー画像」を作りたいです。&#10;お店の名前は「【お店の名前】」、ターゲットは「【お客様の層】」です。&#10;①デザインスタイル ②色（2〜3色） ③入れるテキスト ④Canvaの検索キーワード&#10;を初心者向けに教えてください。</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 16: Step3 ChatGPTでバナー生成 ── */
  function slide16() {
    return '<section class="slide" data-section="demo" data-title="Step3｜ChatGPTでバナーを作る" data-notes="ChatGPTを開いて、下のプロンプトをコピーして貼り付けます。30秒〜1分で画像が生成されます。&#10;気に入らなければ、もっと明るくして、文字を大きくして、などと追加指示できます。&#10;出てきた画像を右クリックまたはタップ長押しで保存します。&#10;ChatGPTの無料版でも使えます。">' +
      H('Step 3｜ChatGPTでバナーを作る') +
      '<div class="slide-content">' +
        '<div class="s-callout" style="margin-bottom:.8cqw;">下のプロンプトをコピーして、<strong>ChatGPT</strong>（chatgpt.com）に貼り付けてください</div>' +
        '<div class="s-prompt-wrap">' +
          '<button class="s-prompt-copy" onclick="(function(b){var p=b.parentElement.querySelector(\'.s-prompt-box\');navigator.clipboard.writeText(p.textContent).then(function(){b.textContent=\'コピー済！\';setTimeout(function(){b.textContent=\'コピー\';},2000);});})(this)">コピー</button>' +
          '<div class="s-prompt-box">【業種】の「【お店の名前】」のウェブサイト用バナー画像を作ってください。&#10;&#10;■ サイズ：横長（16:9）&#10;■ 雰囲気：明るく親しみやすい&#10;■ 背景色：【緑 / 白 / ベージュ / お任せ】系&#10;■ 入れるテキスト：&#10;  - メインタイトル：「【お店の名前】」&#10;  - サブ：「【キャッチコピー（20文字以内）】」&#10;&#10;日本語のテキストをきれいに配置したバナーを生成してください。</div>' +
        '</div>' +
        '<ul class="s-list" style="margin-top:.8cqw;">' +
          '<li>【 】の部分を自分の情報に書き換えて送信するだけ</li>' +
          '<li>30秒〜1分で画像が生成されます</li>' +
          '<li class="s-list-arrow">気に入らなければ「もっと明るくして」と追加指示してOK</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* ── 17: Step4 Lit.linkに配置 ── */
  function slide17() {
    return '<section class="slide" data-section="demo" data-title="Step4｜Lit.linkに画像・コンテンツを配置する" data-notes="Lit.linkの編集画面を開きます。ブロックを追加をクリックして、画像・テキスト・リンクなどを追加していきます。&#10;ドラッグで並び替えができます。プレビューで確認しましょう。">' +
      H('Step 4｜Lit.linkに配置する') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">1</div>' +
            '<div>' +
              '<div class="s-step-text">Lit.linkの編集画面を開く → 「ブロックを追加」をクリック</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">2</div>' +
            '<div>' +
              '<div class="s-step-text">「画像」を選択 → Canva・ChatGPTで作った画像をアップロード</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">3</div>' +
            '<div>' +
              '<div class="s-step-text">「テキスト」ブロックを追加 → サービス説明を入力</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">4</div>' +
            '<div>' +
              '<div class="s-step-text">「リンク」ブロックを追加 → InstagramやLINEのURLを貼り付け</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">5</div>' +
            '<div>' +
              '<div class="s-step-text">ドラッグで並び替え → 「プレビュー」で見た目を確認</div>' +
              '<div class="s-step-sub">スマホで見た時の見え方を必ず確認！</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 18: Step5 QRコード・短縮URL ── */
  function slide18() {
    return '<section class="slide" data-section="demo" data-title="Step5｜QRコード・短縮URLを作る" data-notes="最後のステップです。Lit.linkのURLをコピーしてQRコード生成サービスに貼り付けます。&#10;ブラウザでQRコード作成無料と検索すると無料サービスがすぐ見つかります。&#10;短縮URLはbit.lyなどのサービスでURLを短くできます。チラシに書くときに使いやすくなります。">' +
      H('Step 5｜QRコード・短縮URLを作る') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">1</div>' +
            '<div>' +
              '<div class="s-step-text">自分のLit.linkのURLをコピー</div>' +
              '<div class="s-step-sub">例：lit.link/あなたのユーザー名</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">2</div>' +
            '<div>' +
              '<div class="s-step-text">「QRコード 作成 無料」で検索 → 無料サービスにアクセス</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">3</div>' +
            '<div>' +
              '<div class="s-step-text">URLを貼り付け → QRコードが生成される → ダウンロード保存</div>' +
              '<div class="s-step-sub">名刺・チラシ・POPに貼れます</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-step-row">' +
            '<div class="s-step-num">+</div>' +
            '<div>' +
              '<div class="s-step-text">【任意】短縮URLも作ると便利（bit.ly などを使用）</div>' +
              '<div class="s-step-sub">チラシに書きやすい短いURLにできる</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="s-callout" style="margin-top:.8cqw;">QRコードをダウンロードしたら<strong>完成です！</strong></div>' +
      '</div>' +
    '</section>';
  }

  /* ── 19: 完成！ ── */
  function slide19() {
    return '<section class="slide slide-impact" data-section="ending" data-title="完成！20分でできました" data-notes="おめでとうございます！完成しました！&#10;20分でホームページができましたね。URLが1本できました。QRコードもできました。&#10;これを名刺に貼ればホームページがありますと言えます。&#10;大事なのは完璧を目指さないこと。まず作って公開することが大事。あとから直せます。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">おめでとうございます！</div>' +
        '<p class="s-impact-main"><em>完成！</em><br><span style="font-size:.65em;color:rgba(255,255,255,.8);">20分でホームページができました</span></p>' +
        '<p class="s-impact-sub">URLが1本できました ／ QRコードもできました ／ 今日から使えます！</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 20: 宿題・よろず案内 ── */
  function slide20() {
    return '<section class="slide slide-ending" data-section="ending" data-title="宿題・よろず支援拠点のご案内" data-notes="最後に宿題です。今週中にLit.linkに登録して自分のプロフィールページを作ることだけやってみてください。&#10;画像はなくてもいいです。まずアカウントだけ作ってURLを手に入れてみてください。&#10;またよろず支援拠点では個別でのIT相談・経営相談も無料で受け付けています。&#10;今日試してみて詰まった部分があれば、また報告に来てください。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-ending-main">今週の宿題は1つだけ</p>' +
        '<div class="s-ending-bar"></div>' +
        '<p class="s-ending-sub" style="font-size:2.2cqw;line-height:1.8;">' +
          '「Lit.linkに登録して、プロフィールページを作る」<br>' +
          '画像はなくてもOK。まずURLを手に入れることを目標に！' +
        '</p>' +
        '<div class="s-ending-bar"></div>' +
        '<p class="s-ending-sub" style="margin-top:.5cqw;">' +
          'よろず支援拠点では <strong style="color:rgba(255,255,255,.9);">無料の個別IT相談・経営相談</strong> も受け付けています。<br>' +
          '「試してみたけど詰まった」という報告も大歓迎！またいつでも来てください。' +
        '</p>' +
      '</div>' +
    '</section>';
  }

  /* ===================== REGISTER ===================== */

  window.slideFactories = [
    slide01, slide02, slide03, slide04, slide05,
    slide06, slide07, slide08, slide09, slide10,
    slide11, slide12, slide13, slide14, slide15,
    slide16, slide17, slide18, slide19, slide20
  ];

})();
