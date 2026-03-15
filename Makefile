.SILENT:
.PHONY: test

# Install dependencies
install:
	npm install

# Launch server
start:
	npm run start

# Launch watcher
watch:
	npm run watch

# Build lib
build:
	npm run build

# Lint and code style fix
lint:
	npm run lint

# Test
test: build
	npm run test

# Publish package
publish: build
	npm publish . --access public
