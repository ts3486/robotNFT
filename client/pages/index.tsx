import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  Box,
  CircularProgress,
  Card,
  Container,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoneAllIcon from "@mui/icons-material/DoneAll";
const Web3 = require("web3");
const web3 = new Web3("wss://rinkeby.infura.io/ws/v3/0f3a6fad96f04d13bbbf4654d9099af7");
const nftBuild = require("../../build/contracts/RobotNFT.json");
const contract = new web3.eth.Contract(nftBuild.abi, nftBuild.networks[4].address);
// const contract = new web3.eth.Contract(nftBuild.abi, nftBuild.networks[5777].address); for ganache
const { mnemonic, publicKey, privateKey } = require("../secret.json");

const Index: React.FC = ({ account }: any) => {
  console.log(account);

  const [currentNFT, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const nfts = [
    "/nfts/robot_membership1.png",
    "/nfts/robot_membership2.png",
    "/nfts/robot_membership3.png",
    "/nfts/robot_membership4.png",
  ];

  useEffect(() => {}, []);

  const switchNFT = () => {
    setCurrent((currentNFT + 1) % nfts.length);
  };

  //mint&purchase membership NFT
  const purchaseNFT = async (_current: number) => {
    console.log(contract);
    const baseCost = await contract.methods.cost().call();
    const txnCount = await web3.eth.getTransactionCount(account);
    const nonce = await ethers.utils.hexlify(txnCount);

    let nftType = (currentNFT + 1).toString();

    const createTransaction = await web3.eth.accounts.signTransaction(
      {
        from: account,
        nonce: nonce,
        to: "0x5a9F872046eE206363F91B9cd075a7bF8bd3b698",
        value: baseCost,
        gas: 500000,
        data: contract.methods.mintRobot(nftType).encodeABI(),
      },
      privateKey
    );

    //Want to add loading display
    // web3.eth.pendingTransactions

    const createReceipt = await web3.eth
      .sendSignedTransaction(createTransaction.rawTransaction)
      .once("sending", () => {
        console.log("sending...");
        setLoading(true);
        setOpen(true);
      })
      .once("sent", () => {
        console.log("sent");
      })
      .on("confirmation", (confNumber: any, receipt: any, latestBlockHash: any) => {
        console.log(confNumber, receipt, latestBlockHash);
        setLoading(false);
      })
      .on("error", (error: any) => {
        console.log(error);
      });

    console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);

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
          <Dialog
            sx={{
              "& .MuiDialog-paper": {
                width: 500,
                height: 400,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            {loading ? (
              <Box sx={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <DialogTitle sx={{ fontSize: 30 }} id="loading-dialog-title">
                  {"Your NFT is being minted"}
                </DialogTitle>
                <DialogContent
                  sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <CircularProgress />
                </DialogContent>
              </Box>
            ) : (
              <Box sx={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <DialogTitle sx={{ fontSize: 30 }} id="loaded-dialog-title">
                  {"Your NFT has been minted!"}
                </DialogTitle>
                <DialogContent
                  sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <DoneAllIcon sx={{ fontSize: 80, color: "green" }} />
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="contained" onClick={() => setOpen(false)}>
                    Close
                  </Button>
                </DialogActions>
              </Box>
            )}
          </Dialog>
        </Card>
        <Button color="primary" onClick={() => switchNFT()}>
          <ArrowForwardIosIcon sx={{ fontSize: 50 }} />
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
