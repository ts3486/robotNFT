// import getWeb3 from "../getWeb3";
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Container,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import styles from "../styles/Home.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Index: React.FC = ({ drizzle, drizzleState }: any) => {
  const nfts = [
    "/nfts/robot_membership1.png",
    "/nfts/robot_membership2.png",
    "/nfts/robot_membership3.png",
    "/nfts/robot_membership4.png",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log(current);
  }, [current]);

  const switchNFT = () => {
    setCurrent((current + 1) % nfts.length);
  };

  //mint&purchase membership NFT
  const purchaseNFT = async (_current: number) => {
    const contract = await drizzle.contracts.RobotNFT;

    //setting gasLimit and gasPrice was crucial.
    contract.methods.mintRobot(_current + 1);
    // contract.methods.tokenURI(_current + 1);
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
              image={nfts[current]}
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
              onClick={() => purchaseNFT(current)}>
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
