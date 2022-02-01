import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import getWeb3 from "../getWeb3";
import { Box, Card, Container, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Web3 = require("web3");
const web3 = new Web3("wss://rinkeby.infura.io/ws/v3/0f3a6fad96f04d13bbbf4654d9099af7");
const nftBuild = require("../../build/contracts/RobotNFT.json");
const contract = new web3.eth.Contract(nftBuild.abi, nftBuild.networks[5777].address);
const { mnemonic, publicKey, privateKey } = require("../secret.json");

const Index: React.FC = ({ account }: any) => {
  console.log(account);

  const [currentNFT, setCurrent] = useState(0);

  const nfts = [
    "/nfts/robot_membership1.png",
    "/nfts/robot_membership2.png",
    "/nfts/robot_membership3.png",
    "/nfts/robot_membership4.png",
  ];

  useEffect(() => {
    // getWeb3();
  }, []);

  const switchNFT = () => {
    setCurrent((currentNFT + 1) % nfts.length);
  };

  //mint&purchase membership NFT
  const purchaseNFT = async (_current: number) => {
    console.log(contract);
    // let cost = await contract.methods.cost().call();

    let nftType = (currentNFT + 1).toString();

    const createTransaction = await web3.eth.accounts.signTransaction(
      {
        from: account,
        to: "0x5a9F872046eE206363F91B9cd075a7bF8bd3b698",
        // nonce: nonce,
        gas: 500000,
        data: contract.methods.mintRobot(nftType),
      },
      privateKey
    );

    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);

    //standard web3 method
    // await contract.methods.mintRobot(nftType).send({
    //   from: "0x4bcFa9287e80138B1705f03bd12C83d775c58ab1",
    //   value: ethers.utils.parseEther("0.01"),
    //   gas: 450000,
    // });

    console.log(`robotNFT${_current + 1} minted`);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8%",
        }}>
        <Button color="primary" onClick={() => switchNFT()}>
          <ArrowBackIosIcon sx={{ fontSize: 50 }} />
        </Button>
        <Card sx={{ height: "70%", width: "30%" }}>
          <CardActions sx={{ height: "60%", padding: 0, margin: 0 }}>
            <CardMedia
              component="img"
              image={nfts[currentNFT]}
              title="robotNFT"
              sx={{ height: "100%", margin: 0 }}
              alt="robotNFT"
            />
          </CardActions>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ display: "flex", justifyContent: "center", fontSize: 30 }}>
              ROBOT NFT
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
              Choose your RobotNFT and join our community!
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center", marginTop: 3, marginBottom: 3 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: 2, width: 150, fontSize: 15, fontWeight: "bold" }}
              onClick={() => purchaseNFT(currentNFT)}>
              PURCHASE
            </Button>
          </CardActions>
        </Card>
        <Button color="primary" onClick={() => switchNFT()}>
          <ArrowForwardIosIcon sx={{ fontSize: 50 }} />
        </Button>
      </Box>
    </Container>
  );
};

export default Index;