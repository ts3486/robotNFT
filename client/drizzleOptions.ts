import Web3 from "web3";
import RobotNFT from "../build/contracts/RobotNFT.json";
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { projectId, mnemonic } = require("./secret.json");

// const RinkebyProvider = new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${projectId}`);

// new Web3("wss://rinkeby.infura.io/ws/v3/0f3a6fad96f04d13bbbf4654d9099af7");

//local provider:
// new Web3("ws://127.0.0.1:7545"),

const drizzleOptions = {
  web3: {
    block: false,
    customProvider: new Web3("wss://rinkeby.infura.io/ws/v3/0f3a6fad96f04d13bbbf4654d9099af7"),
    fallback: {
      type: "default",
      url: "ws://127.0.0.1:7545",
    },
  },
  contracts: [RobotNFT],
};

export default drizzleOptions;
