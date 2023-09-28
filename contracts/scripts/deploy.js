// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

require("dotenv").config();

async function main() {
  const provider = new hre.ethers.JsonRpcProvider(hre.network.config.url);
  const sponsor = new hre.ethers.Wallet(process.env.SPONSOR_KEY, provider);
  let coinAddress = process.env.REWARD_COIN_ADDRESS;
  if (!coinAddress) {
    const deployedCoin = await hre.ethers.deployContract("MockCoin");
    await deployedCoin.waitForDeployment();
    coinAddress = deployedCoin.target;
  }
  const rewardCoin = new hre.ethers.Contract(coinAddress, [
    "function approve(address operator, uint256 amount)",
    "function decimals() view returns (uint8)",
  ]);
  const rewardAmount = hre.ethers.parseUnits(
    process.env.REWARD_AMOUNT,
    await rewardCoin.connect(provider).decimals()
  );

  const rewarder = await hre.ethers.deployContract("Rewarder", [
    sponsor.address,
    rewardCoin.target,
    rewardAmount,
  ]);
  await rewarder.waitForDeployment();
  await (
    await rewardCoin
      .connect(sponsor)
      .approve(rewarder.target, hre.ethers.MaxUint256)
  ).wait();

  console.log(
    `Rewarder with sponsor ${
      sponsor.address
    }, reward coin ${await rewardCoin.getAddress()} and reward amount ${rewardAmount} deployed to ${
      rewarder.target
    }`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
