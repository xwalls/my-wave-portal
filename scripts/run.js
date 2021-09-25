const main = async () => {
    const WaveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const WaveContract = await WaveContractFactory.deploy();
    
}

const runMain = async () => {}

runMain();