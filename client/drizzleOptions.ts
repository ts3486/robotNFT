import Web3 from "web3";
import RobotNFT from "../build/contracts/RobotNFT.json";

const drizzleOptions = {
  web3: {
    block: false,
    customProvider: new Web3("ws://127.0.0.1:7545"),
    fallback: {
      type: "default",
      url: "ws://127.0.0.1:7545",
    },
  },
  contracts: [RobotNFT],
};

export default drizzleOptions;
