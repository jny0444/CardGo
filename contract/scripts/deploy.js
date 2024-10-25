const hre = require('hardhat')

async function main() {
    const CardGo = await hre.ethers.getContractFactory('CardGo');
    const cardGoContract = await CardGo.deploy();

    await cardGoContract.waitForDeployment();

    console.log("Contract deployed to: ", await cardGoContract.getAddress());
}

main().then(() => process.exit(0)).catch(
    (error) => {
        console.log(error);
        process.exit(1);
    }
)