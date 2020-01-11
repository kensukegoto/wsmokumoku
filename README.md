# 個人のモチベーション

- remを使う
- アクセシビリティを使う
- 誰かに教える際の自分の道具にする
- 「まずここまで」と「更に」を作り自身の作品の１つにする

# 方針

- 何かのリストは全て`item`とする。`info__item`のようにはしない

# オープニング

- cdnでjQueryを読む
- slickをイニシャライズ
- 余白を作る

# slider

[公式サイト](http://kenwheeler.github.io/slick/)
[オプション解説](https://webdesignday.jp/inspiration/technique/jquery-js/3847/)

- `slidesToShow: 3`とするとコンテナに３つ余白無しでスライドが並ぶ
- 余白は`margin`の左右で作成し、その分をコンテナの`width`に追加する
- 手順
  - スライドの中身を作成(CSS)を整える
  - 余白無しで作る
  - slickを動かす
  - 余白を設定
  - コンテナにも余白を追加する
- ハンズオン
  - デフォルトで３つが余白無しで並んでいる状態
  - slick実行（まずは１枚で）
  - スライドを追加し３枚にする
  - 余白を調整
  - 矢印を作成する

# infomation

[凄く分かりやすい](https://macoblog.com/jquery_read_json/)
[jQueryを用いてAjaxの学習をした](http://tech-blog.rakus.co.jp/entry/20190612/javascript/beginner)

[WEBサーバーをChromeに入れる]https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=ja&
[モーダル表示時に背景をスクロールさせない](https://coliss.com/articles/build-websites/operation/javascript/prevent-page-scrolling-when-a-modal-is-open.html)

- jsonを取得し１つ１つ表示させていく
- お知らせの切替時にアニメーション
- moreを押すとモーダルが開く
- モーダルの中身に一覧が表示される

# カルーセル

[参考](http://black-flag.net/jquery/20160802-6170.html)
[transformでz-indexがずれる](https://arakaze.ready.jp/archives/1936)

- 画像が無限ループで横に流れる
- ホバーすると横に流れる動きが止まり拡大表示される

# ３つのテーマ

- タブ

# もくもく会一覧

- １ページあたり６つ表示・６つ目以降はページネーション
- ページネーションは記事の数に合わせて動的に作る

# contact

- 送信時にバリデーションが走る
- inputを使う理由はchangeだとカーソルが外れないとイベントが走らないから

# ハンバーガーメニュー

- 各項目へ飛ぶリンク
- 追従

# トップへ戻るボタン

- WSもくもく会とはまでスクロールすると出てくる
- 追従

