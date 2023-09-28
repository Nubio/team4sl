require("@nomicfoundation/hardhat-toolbox");

const defaultMnemonic = "test test test test test test test test test test test junk"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
  networks: {
    localnet: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: defaultMnemonic
      }
    },
    sepolia: {
      url: 'https://sepolia.infura.io/v3/',
      accounts: ['fd973d6f0cc3e4c3dd80f114b30993b3793355edf0d89175f443905c5075bb8e']
    }
  }
};
