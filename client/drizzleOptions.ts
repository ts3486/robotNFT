import Web3 from "web3";
import NFT from "../build/contracts/NFT.json";

const drizzleOptions = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
  contracts: [NFT],
};

export default drizzleOptions;
