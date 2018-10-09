ENV ?= dev
CHANNEL ?= default

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
	expo start -c --lan

run-ios:
	make setup-env
	expo start -c --lan --ios

run-android:
	make setup-env
	expo start -c --lan --android

deploy-expo:
	make setup-env
	expo publish -c --release-channel $(CHANNEL)
