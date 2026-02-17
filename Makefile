.PHONY: install dev dev-front dev-back db db-stop db-reset clean lint test

install:
	cd front && npm install
	cd back && npm install

dev:
	$(MAKE) db
	$(MAKE) -j2 dev-back dev-front

dev-front:
	cd front && npm run dev

dev-back:
	cd back && npm run dev

db:
	docker compose up -d

db-stop:
	docker compose down

db-reset:
	docker compose down -v
	docker compose up -d

db-logs:
	docker compose logs -f

db-migrate:
	cd back && npx prisma migrate dev

db-studio:
	cd back && npx prisma studio

lint:
	cd front && npm run lint
	cd back && npm run lint

test:
	cd front && npm test
	cd back && npm test

clean:
	rm -rf front/node_modules front/dist
	rm -rf back/node_modules back/dist
