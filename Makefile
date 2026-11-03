.SILENT:
.PHONY: test

# Install dependencies
install:
	npm install

# Launch dev server
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

# Bump the version, commit and tag it: version@patch, version@minor, version@major
version@%:
	npm version $* -m "v%s"

# Publish package
publish: build
	npm publish . --access public

# Create the GitHub release of the latest tag, once it is pushed
release:
	gh release create "$$(git describe --tags --abbrev=0)" --verify-tag --generate-notes
