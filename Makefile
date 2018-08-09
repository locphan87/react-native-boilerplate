ENV ?= local

setup-env:
	cp .env.$(ENV) .env

setup:
	cp .env.example .env
	cp data.json.example data.json
	cp app.json.example app.json

start:
	yarn
	make setup-env
	exp start -c --lan

run-ios:
	yarn
	make setup-env
	exp start -c --lan --ios

run-android:
	yarn
	make setup-env
	exp start -c --lan --android
