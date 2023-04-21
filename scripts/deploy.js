const hre = require("hardhat");

async function main() {
  const ERC20Factory= await hre.ethers.getContractFactory("ERC20");
  const erc20 = await ERC20Factory.deploy("nFactorial Incubator", "n17r");

  await erc20.deployed();

  console.log("ERC20 deployed to:", erc20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
