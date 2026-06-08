.PHONY: install build start test coverage clean

install:
	npm install

build:
	npm run build

start:
	npm run start

test:
	npm run test

coverage:
	npm run test:coverage

clean:
	rm -rf dist coverage .nyc_output
