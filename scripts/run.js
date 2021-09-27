const main = async () => {
    const tacoContractFactory = await hre.ethers.getContractFactory('TacoPortal');
    const tacoContract = await tacoContractFactory.deploy({
      value: hre.ethers.utils.parseEther('0.1'),
    });
    await tacoContract.deployed();
    console.log('Contract addy:', tacoContract.address);

    let contractBalance = await hre.ethers.provider.getBalance(
      tacoContract.address
    );
    console.log(
      'Contract balance:',
      hre.ethers.utils.formatEther(contractBalance)
    );
  
    let tacoTxn = await tacoContract.taco('A message!');
    await tacoTxn.wait();
  
    contractBalance = await hre.ethers.provider.getBalance(tacoContract.address);
    console.log(
      'Contract balance:',
      hre.ethers.utils.formatEther(contractBalance)
    );
  
    let alltacos = await tacoContract.getAllTacos();
    console.log(alltacos);
};
  
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
