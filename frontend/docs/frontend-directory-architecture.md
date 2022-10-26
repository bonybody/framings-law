# Frontend Architecture

**主なライブラリ**

- NextJS
- TypeScript
- emotion

[その他 - package.json](https://github.com/mamaredo/streaming-now/blob/develop/frontend/package.json)

## Directory

> **📘 参考にしている記事, Repository**
>
> [bulletproof-react - repository](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)  
> [Reactベストプラクティスの宝庫！「bulletproof-react」が勉強になりすぎる件 - zenn](https://zenn.dev/meijin/articles/bulletproof-react-is-best-architecture)

```sh
frontend/src
|
+-- components  # 意味を持たせたコンポーネント, UIの汎用コンポーネント
|
+-- config  # 設定, 環境変数など
|
+-- module  # アプリケーションを実現するためのmoduleを定義する
|
+-- hooks  # 汎用的なhooks
|
+-- lib  # アプリケーション内でのlibrary
|
+-- pages  # ページ
|
+-- styles  # 全体に影響を与えるstyle
|
+-- types  # 全体で定義しておきたいTSの型
|
+-- utils  # 汎用的な関数
```

外部moduleからの呼び出しはaliasを用いた絶対パス  
内部moduleからの呼び出しは相対パス

> ここで書いたmoduleはsrc/moduleとは別

<br />

### src/components

```sh
components
|
+-- Elements  # アプリケーションに定義する最小単位のUI
+---- Button
+------ Button.tsx
+------ index.ts
:
+---- index.ts # Elements endpoint
|
+-- OtherComponent  # プロジェクト特有のUIコンポーネント
+---- OtherComponent
+---- index.ts
```

- components/*で定義されているコンポーネントからmoduleを呼ぶことはしない

### 外部moduleからの呼び出し

```typescript
import { Button } from '@/components/Elements'
import { OtherComponent } from '@/components/OtherComponent'
```

### component/Elements/index.ts

> **📘 参考資料**
> 
> [barrel - TypeScript Deep Dive](https://typescript-jp.gitbook.io/deep-dive/main-1/barrel)

```typescript
export * from './Button'
export * from './Hoge'
```

<br />

***

<br />

### src/module

```sh
src/module
|
+-- awesome-module
|
+-- hoge-hoge
:
```

```sh
awesome-module
|
+-- assets
|
+-- api
|
+-- components
|
+-- hooks
|
+-- types
|
+-- pages
|
+-- index.ts  # module endpoint
```

- moduleの粒度はそのmoduleを削除すると機能が無くなるかどうかで判断

### 外部moduleからの呼び出し

```typescript
import { AwesomeModule, useAwesomeModule } from '@/module/awesome-module'
```

### module/awesome-module/index.ts

> **📘 参考資料**
> 
> [barrel - TypeScript Deep Dive](https://typescript-jp.gitbook.io/deep-dive/main-1/barrel)

```typescript
/* その機能(awesome-module)を実現するために必要なmoduleをexport */
export * from './pages/AwesomePage'
export * from './components/AwesomeModule'
export * from './types'
```

moduleが他のmoduleを包括することもできるが、包括されたmoduleは外部moduleからは
使わないようにする。
ただし型のimportは許容する。

### example

```sh
src
|
+-- module
+---- moduleA
+---- moduleB
:
|
+-- pages
+---- Hoge.tsx
```

- moduleAはmoduleBを包括した機能

### pages/Hoge.tsx

```typescript
import { moduleA } from '@/module/moduleA' // good
```

```typescript
import { moduleB } from '@/module/moduleB' // bad
```

例外

- 型のimport

```typescript
import type { moduleB } from '@/module/moduleB' // bad
```

<br />

### ESLintを用いたimportの制限

```
// rulesの中
"no-restricted-imports": [
  "error",
  {
    patterns: [
      /* @/components */
      "@/components/*/*",
      "!@/components/*",

      /* @/module */
      "@/module/*/*"
    ]
  }
],
```

### plopについて

```shell
yarn plop
```
実行で`src/module/*/**`, `src/components/*, src/components/Elements/*`を作成できる