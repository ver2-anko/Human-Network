  # Human-Network
- Reactの勉強とネットワーク図のライブラリを選定

# 環境
- Nodejs (v22.16)

# 実行方法
1. ターミナルで`npm run dev`を実行
2. ターミナルに表示されるポートにブラウザでアクセス

# デバッグ手順
1. ターミナルで`npm run dev`を実行
2. ターミナルに表示されるポートにブラウザでアクセス
3. vscodeでF5ボタン押下

# reference
- React
  - https://ja.react.dev/
- UI
  - https://mui.com/
- Vite
  - https://ja.vite.dev/
- Library
  - https://www.sigmajs.org/
  - https://sim51.github.io/react-sigma/
- Graphology
  - https://graphology.github.io/
# 備考
- React,Graphologyの関係性

| ライブラリ          | 主な役割      | グラフデータ構造       | 関係           |
| -------------- | --------- | -------------- | ------------ |
| **Graphology** | データの保持・操作 | グラフ構造そのもの      | Sigma.js が利用 |
| **Sigma.js**   | グラフの可視化   | Graphology を使用 | 描画用に依存       |

- `@react-sigma/core/lib/style.css`について
  - Sigma.js の描画領域（Canvas など）や UI に必要な基本スタイルを定義しているため、インポートは必須。