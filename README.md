
このリポジトリは、社内の勉強会向けに作成しました。
この勉強会で使用するスライドは次の URLで公開しています。

- [Next.js 勉強会スライド](https://docs.google.com/presentation/d/1hg1CceXfQ9etW0eu8FF8BzbuLHIdDwIWxsMQ0CDd_KE/edit?usp=sharing)

## ディレクトリについて

```bash
.
├── README.md
├── components # Web ページを構成するコンポーネントを管理するためのディレクトリ
├── hooks # React Hooks (主に Global State について)を定義する
├── next-env.d.ts
├── next.config.js
├── package.json 
├── pages # Web のページをレンダリングするディレクトリ。ここにファイルを設定すると自動でrouting が定義される。
│   ├── _app.tsx # 全ページに共通するコンポーネントやGlobal State を定義する
│   ├── api
│   ├── index.tsx
├── public # Favicon を管理するディレクトリ
│   ├── favicon.ico
│   └── vercel.svg
├── styles #CSS や img を管理するディレクトリ
│   ├── Home.module.css
│   └── globals.css
├── tsconfig.json
└── yarn.lock
```

## 初期設定について
このリポジトリをインストールしたのち、


## コマンドについて

```bash
# develop 環境の立ち上げる
yarn dev

# ビルドする
yarn build

# 本番環境を立ち上げる（ビルド後に実行）
yarn start 

# Linter を動作する
yarn lint
```

## Author
[Kyohei Oka](https://github.com/okakyo)
