runTrash:
	node trash_can/trash2
install:
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
