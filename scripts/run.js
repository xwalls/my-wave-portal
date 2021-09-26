const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const TacoContractFactory = await hre.ethers.getContractFactory('TacoPortal');
    const tacoContract = await TacoContractFactory.deploy();
    await tacoContract.deployed();

    console.log("Contract deployed to:", tacoContract.address);
    console.log("Contract deployed by:", owner.address);

    let tacoCount;
    tacoCount = await tacoContract.getTotalTacos();

    let tacoTxn = await tacoContract.taco();
    await tacoTxn.wait();

    tacoCount = await tacoContract.getTotalTacos();

    tacoTxn = await tacoContract.connect(randomPerson).taco();
    await tacoTxn.wait();

    tacoCount = await tacoContract.getTotalTacos();
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();