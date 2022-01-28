import Web3 from "web3";
import RobotNFT from "../build/contracts/RobotNFT.json";

const drizzleOptions = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
  contracts: [RobotNFT],
};

export default drizzleOptions;
