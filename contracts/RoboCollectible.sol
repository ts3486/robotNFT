// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract RoboCollectible is ERC721URIStorage, VRFConsumerBase {
    uint256 public tokenCounter;

    enum Color{YELLOW, GREEN, PINK, PURPLE }

    mapping(bytes32 => address) public requestIdToSender;
    mapping(bytes32 => string) public requestIdToTokenURI;
    mapping(uint256 => Color) public tokenIdToColor;
    mapping(bytes32 => uint256) public requestIdToTokenId;

    event requestedCollectible(bytes32 indexed requestId);
    //information needed to get a random number
        bytes32 internal keyHash;
        uint256 internal fee;
        uint256 public randomResult;

 
    //import VRFConsumerBase and ERC721 into the constructor
    //VRF coordinator checks for true cryptographic randomness. //LinkToken connects you to the oraclee //keyhash directs you to the correct oracle
    constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyhash)
    VRFConsumerBase(_VRFCoordinator, _LinkToken)
    ERC721("RoboCollectible", "ROBO")
    {
        tokenCounter = 0;
        keyHash = _keyhash;
        fee = 0.1 * 10 ** 18;
    }

    //userprovidedseed and keyhash are used to verigy true randomness as well
    function createCollectible(string memory tokenURI)
        public {
        bytes32 requestId = requestRandomness(keyHash, fee);
        requestIdToSender[requestId] = msg.sender;
        requestIdToTokenURI[requestId] = tokenURI;
        emit requestedCollectible(requestId);
    }
  
    function fulfillRandomness(bytes32 requestId, uint256 randomNumber) internal override {
        address dogOwner = requestIdToSender[requestId];
        string memory tokenURI = requestIdToTokenURI[requestId];
        uint256 newItemId = tokenCounter;
        _safeMint(dogOwner, newItemId);
        _setTokenURI(newItemId, tokenURI);
        Color color = Color(randomNumber % 3);
        tokenIdToColor[newItemId] = color;
        requestIdToTokenId[requestId] = newItemId;
        tokenCounter = tokenCounter + 1;
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(tokenId, _tokenURI);
    }
}
