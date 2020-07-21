.SILENT:
.PHONY: test

# Install dependencies
install:
	npm install

# Launch watch
watch:
	npx webpack --watch --mode=development

# Build lib
build:
	npx webpack --mode=production

# Launch demo client
demo:
	php -S 0.0.0.0:8000 -t .

# Lint and code style fix
lint:
	npx eslint src/* --ext .js,.json --fix

# Test
test: build
	npx mocha

# Publish package
publish: build
	npm publish . --access public
