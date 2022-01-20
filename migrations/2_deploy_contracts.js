// const RoboCollectible = artifacts.require("../contracts/RoboCollectible.sol");
const NFT = artifacts.require("../contracts/NFT.sol");

module.exports = async function (deployer) {
  //Pinata metadata folder baseURI. Metadata Folder => JSON => image URI.
  const IPFS_IMAGE_METADATA_URI = `https://gateway.pinata.cloud/ipfs/QmPTGDwgdygRDRajpCSAcnBujGivceg2ueiJDSXCyhLskm/`;

  await deployer.deploy(NFT, "RobotCollectible", "ROBOT", IPFS_IMAGE_METADATA_URI);
  // await deployer.deploy(RoboCollectible);
};
