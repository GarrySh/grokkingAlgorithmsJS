install:
	yarn install

start:
	yarn run babel-node -- src/bin/index.js

publish:
	yarn publish

lint:
	yarn run eslint .

test:
	yarn test

watch:
	yarn test --watch

build:
	rm -rf dist
	yarn run build
	chmod +x dist/bin/*

clear:
	rm -rf dist
	rm -rf node_modules
