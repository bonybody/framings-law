# フレイミングの法則

## frontend環境構築

- `.vscode/settings.json`をルートディレクトリに作成
- `settings.json`に[settings.jsonの中身 - slack](https://gp41-hq.slack.com/archives/C048MULC86L/p1666684708531239)へ貼り付け

```shell
$ cd frontend
$ yarn
$ yarn dev # 開発サーバー起動
```

## DB情報
### 開発環境
user：`framings`

password：`p@ssw0rd`

db：`framings-law`

#### flyway conf
```
-url=jdbc:postgresql://framings-db:5432/framings-law -user=framings -password=p@ssw0rd
```

## Migration
#### migrationの情報を確認する
```
docker compose run --rm migration -url=jdbc:postgresql://framings-db:5432/framings-law -user=framings -password=p@ssw0rd info
```

#### migrationの実行
```
docker compose run --rm migration -url=jdbc:postgresql://framings-db:5432/framings-law -user=framings -password=p@ssw0rd migrate
```

#### データベース上のオブジェクトを全て削除する
```
docker compose run --rm migration -url=jdbc:postgresql://framings-db:5432/framings-law -user=framings -password=p@ssw0rd clean
```

#### migrationに失敗したversionのメタデータを削除する
```
docker compose run --rm migration -url=jdbc:postgresql://framings-db:5432/framings-law -user=framings -password=p@ssw0rd repair
```
