.PHONY: install dev dev-front dev-back db db-stop db-reset clean

# Install all dependencies
install:
	cd front && npm install
	cd back && npm install

# Start everything (db + back + front)
dev:
	$(MAKE) db
	$(MAKE) -j2 dev-back dev-front

dev-front:
	cd front && npm run dev

dev-back:
	cd back && npm run dev

# Database
db:
	docker compose up -d

db-stop:
	docker compose down

db-reset:
	docker compose down -v
	docker compose up -d

db-logs:
	docker compose logs -f

# Cleanup
clean:
	rm -rf front/node_modules front/dist
	rm -rf back/node_modules back/dist
