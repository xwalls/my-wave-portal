const main = async () => {
    const WaveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const WaveContract = await WaveContractFactory.deploy();
    await waveContract.deployed();
}

const runMain = async () => {}

runMain();