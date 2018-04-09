ENV ?= local

setup-env:
	cp .env.$(ENV) .env

start:
	exp start --ios --lan
