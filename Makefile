install:
	npm install

run:
	npx hardhat run scripts/run.js

localhost:
	npx hardhat run scripts/deploy.js --network localhost

rinkeby:
	npx hardhat run scripts/deploy.js --network rinkeby

node:
	npx hardhat node
	