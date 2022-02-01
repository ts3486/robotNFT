import React, { useState, useEffect } from "react";
import Web3 from "web3";
import getWeb3 from "../getWeb3";
import drizzleOptions from "../drizzleOptions";
import type { AppProps } from "next/app";
import "../styles/globals.css";

//Drizzle
// const { DrizzleContext } = require("@drizzle/react-plugin");
// const { Drizzle } = require("@drizzle/store");

// const drizzle = new Drizzle(drizzleOptions);

function MyApp({ Component, pageProps }: AppProps) {
  const [account, setAccount] = useState("");

  useEffect(() => {
    // Is there is an injected web3 instance?
    getWeb3().then((currentAccount) => {
      setAccount(currentAccount);
    });
  }, []);
  return (
    // <DrizzleContext.Provider drizzle={drizzle}>
    //   <DrizzleContext.Consumer>
    //     {(drizzleContext: any) => {
    //       const { drizzle, drizzleState, initialized } = drizzleContext;

    //       if (!initialized) {
    //         //Improve error ui
    //         console.log("initializing...");
    //         return "Loading...";
    //       }

    //       {
    //         console.log("initialized");
    //         return (
    //           <div className="App">
    //             <Component {...pageProps} drizzle={drizzle} drizzleState={drizzleState} />
    //           </div>
    //         );
    //       }
    //     }}
    //   </DrizzleContext.Consumer>
    // </DrizzleContext.Provider>
    <Component {...pageProps} account={account} />
  );
}
export default MyApp;
