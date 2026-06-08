.PHONY: install build start typecheck lint test coverage clean

install:
	npm ci

build:
	npm run build

start:
	npm run start

typecheck:
	npm run typecheck

lint:
	npm run lint

test:
	npm run test

coverage:
	npm run test:coverage

clean:
	rm -rf dist coverage .nyc_output
