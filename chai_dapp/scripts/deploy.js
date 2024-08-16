// const hre = require("hardhat");


// async function main() {
//     // Get the contract factory for the Chai contract
//     const Chai = await hre.ethers.getContractFactory("chai");
    
//     // Deploy the contract
//     const chai = await Chai.deploy();
//     // Log the address of the deployed contract
//     console.log("contract deployed to : ",Chai.address);
// }

// // Execute the main function and handle errors
// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });
const { ethers } = require("hardhat");

const main = async () => {
  const contractFactory = await ethers.getContractFactory("chai");
  const contract = await contractFactory.deploy();

  console.log("Contract Deployed to:", contract);
  console.log("Contract address: ", contract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
