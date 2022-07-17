require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks:{
    ropsten:{
      url:'https://eth-goerli.g.alchemy.com/v2/22ax4Y7rIyi35Z0fYTp2P4lTIah0VaDz',
      accounts:['09a919d79bdf79fa7bbc8d617dc07e68502c051c36d8729e132d5d68ea0b5922']
    }
  }
};
// https://eth-mainnet.g.alchemy.com/v2/5HFwrTrrMm_viWBnhAM6KpG99D4nesRW


// https://eth-goerli.g.alchemy.com/v2/22ax4Y7rIyi35Z0fYTp2P4lTIah0VaDz