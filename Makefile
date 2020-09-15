.SILENT:
.PHONY: test

# Install dependencies
install:
	npm install

# Launch watch
watch:
	npm run watch

# Build lib
build:
	npm run build

# Launch demo client
demo:
	php -S 0.0.0.0:8032 -t .

# Lint and code style fix
lint:
	npm run lint

# Test
test: build
	npm run test

# Publish package
publish: build
	npm publish . --access public
