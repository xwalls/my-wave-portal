install:
	npm install

run:
	npx hardhat run scripts/run.js

deploy:
	npx hardhat run scripts/deploy.js --network localhost
	