require("dotenv").config();
const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545");
// const API_URL = process.env.API_URL;
// const PUBLIC_KEY = process.env.PUBLIC_KEY;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;

const nftBuild = require("../build/contracts/RobotNFT.json");
const nftContract = new web3.eth.Contract(nftBuild.abi, nftBuild.networks[5777].address);

const amountToMint = 1;
const gas = 450000;
let nftType = process.argv[4];

module.exports = async (callback) => {
  const [account] = await web3.eth.getAccounts();
  console.log("current account: " + account);
  console.log(nftType);

  const baseCost = await nftContract.methods.cost().call();
  const totalCost = baseCost * amountToMint;

  console.log(`Base cost of minting  | ${web3.utils.fromWei(baseCost.toString(), "ether")}`);
  console.log(`Total cost of minting | ${web3.utils.fromWei(totalCost.toString(), "ether")}\n`);
  console.log(`Gas fee: ${gas}\n`);

  // console.log(`Attempting to mint ${ amountToMint } NFTs...\n`);
  console.log(`Attempting to mint robotNFT...\n`);

  await nftContract.methods.mintRobot(nftType).send({
    from: account,
    value: baseCost,
    gas: gas,
  });

  const totalMinted = await nftContract.methods.walletOfOwner(account).call();
  console.log(`Total NFTs minted: ${totalMinted.length}\n`);

  const uri = await nftContract.methods.tokenURI(String(nftType)).call();
  console.log(`Metadata URI for token: ${uri}`);
  // console.log(`Metadata URI for token ${totalMinted[i]}: ${uri}`);

  callback().catch(callback);
};
