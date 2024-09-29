適当にNode環境を用意します。下記を参考にnvmを使うと複数環境使えるので良いと思います。

https://qiita.com/akipon0821/items/eaeffe79221cfcd4d258

このリポジトリをgit cloneした後、npm install --force、npm run devコマンドでローカルにサーバーが起動します。

Typescript,Vue,Vuetify,pinia,viteあたりの技術を使ってます。

masterブランチに変更が反映されると、GitHub Actionsでビルドが走り、gh-pagesブランチにビルド結果が反映されて、GitHub Pagesでgh-pagesの内容がホスティングされています。

各種キャラデータはシミュレータのリポジトリ、家具データはルームのリポジトリでGitHub Actionsで定期的に最新化されています。

このリポジトリではシミュレータのリポジトリから必要なデータを定期的にクローンしているだけなので、取得処理の本体はそれぞれのリポジトリに存在します。

このツールではシミュレータとルーム系はページを読み込んで表示しているだけなので、このリポジトリ内にページの本体は存在しません。

/src/assets 各種素材があります。

/src/views 各ツールの大枠となるページです。

/src/components 各ツールから呼び出されるページのパーツなどがあります。

/src/store piniaで使用している状態管理ソース。複数のファイル間で状態を共有する場合に使用します。
