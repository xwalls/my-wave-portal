const main = async () => {
    const WaveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await WaveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
}

const runMain = async () => {}

runMain();