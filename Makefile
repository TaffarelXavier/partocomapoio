zip:
	cd modules && zip -r gerencianet_gateway.zip gerencianet_gateway/
push:
	git push origin $(shell git rev-parse --abbrev-ref HEAD)

pull:
	git pull origin $(shell git rev-parse --abbrev-ref HEAD)

commit:
	git add .
	git commit -m "$(m)"

files:
	rsync -Cravzp --delete-after bruno@45.79.92.163:/var/www/html/opecsis.com.br/storage/app/public/ storage/app/public/

dev:
	php artisan serve

test:
	docker exec opecsis-php ./vendor/bin/phpunit

phpcs:
	docker exec opecsis-php phpcs --standard=PSR2 --extensions=php app database tests

open-vs:
	#!/bin/bash
	code .
