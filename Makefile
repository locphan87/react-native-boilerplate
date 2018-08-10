ENV ?= local
CHANNEL ?= dev

setup-env:
	yarn
	cp ./environments/$(ENV)/.env .env
	cp ./environments/$(ENV)/app.json app.json

setup:
	cp .env.example .env
	cp data.json.example data.json
	cp app.json.example app.json

start:
	make setup-env
	exp start -c --lan

run-ios:
	make setup-env
	exp start -c --lan --ios

run-android:
	make setup-env
	exp start -c --lan --android

deploy-expo:
	make setup-env
	exp publish -c --release-channel $(CHANNEL)
