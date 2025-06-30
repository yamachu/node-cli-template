.PHONY: setup run

NPM=npm

.env:
	cp .env.template .env

setup: .env
	$(NPM) install

run: SOME_ARGS=
run: .env
	$(NPM) run run -- $(SOME_ARGS)
