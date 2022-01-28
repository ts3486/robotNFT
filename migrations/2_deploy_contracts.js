// const RoboCollectible = artifacts.require("../contracts/RoboCollectible.sol");
const RobotNFT = artifacts.require("../contracts/RobotNFT.sol");

module.exports = async function (deployer) {
  //Pinata metadata folder baseURI. Metadata Folder => JSON => image URI.
  const IPFS_IMAGE_METADATA_URI = `https://gateway.pinata.cloud/ipfs/QmPTGDwgdygRDRajpCSAcnBujGivceg2ueiJDSXCyhLskm/`;

  await deployer.deploy(RobotNFT, "RobotNFT", "ROBOT", IPFS_IMAGE_METADATA_URI);
  // await deployer.deploy(RoboCollectible);
};
