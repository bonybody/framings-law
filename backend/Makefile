EXPORT_ENV=export $$(cat .env) > /dev/null;

# cloneして最初に使う
.PHONY:
init:
	yarn install
	cp -i .env.sample .env


# 後で環境変数ファイルを切り替えられるようにしておく
selectenv: C=
selectenv:
	$(EXPORT_ENV) $(C)

# ここからアプリケーション周りのやつ
.PHONY: server/dev
server/dev:
	$(MAKE) selectenv C="yarn run server:dev"

.PHONY: server/build
server/build:
	yarn server:build

.PHONY: server/prod
server/prod:
	$(MAKE) selectenv C="yarn run server:prod"

# ローカルDBの破壊と再生
.PHONY:
db/setup:
	cd ..; docker compose up -d
	cd ..; docker compose down

.PHONY: db/up
db/up:
	$(EXPORT_ENV) cd ..; docker compose up

.PHONY: db/up-d
db/up-d:
	$(EXPORT_ENV) cd ..; docker compose up -d

.PHONY: db/down
db/down:
	$(EXPORT_ENV) cd ..; docker compose down

.PHONY: db/down-v
db/down-v:
	$(EXPORT_ENV) cd ..; docker compose down -v

