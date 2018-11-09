install:
	yarn install

lint:
	yarn run eslint .

test:
	yarn test

watch:
	yarn test --watch

clear:
	rm -rf dist
	rm -rf node_modules
