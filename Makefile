runTrash:
	node trash_can/test_trash0
install:
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
link:
	npm link
inst eslint:
	npm install --save-dev eslint
	npm install --save-dev eslint-config-airbnb-base
	npm install --save-dev eslint-plugin-import
