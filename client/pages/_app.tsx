import React, { useEffect } from "react";
import Web3 from "web3";
import drizzleOptions from "../drizzleOptions";
import type { AppProps } from "next/app";
import "../styles/globals.css";

//Drizzle
const { DrizzleContext } = require("@drizzle/react-plugin");
const { Drizzle } = require("@drizzle/store");

const drizzle = new Drizzle(drizzleOptions);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // // Is there is an injected web3 instance?
    // if (typeof web3 !== "undefined") {
    //   App.web3Provider = web3.currentProvider;
    //   web3 = new Web3(web3.currentProvider);
    // } else {
    //   // If no injected web3 instance is detected, fallback to Ganache.
    //   App.web3Provider = new web3.providers.HttpProvider("http://127.0.0.1:7545");
    //   web3 = new Web3(App.web3Provider);
    // }
  }, []);
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {(drizzleContext: any) => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            //Improve error ui
            console.log("initializing...");
            return "Loading...";
          }

          {
            console.log("initialized");
            return (
              <div className="App">
                <Component {...pageProps} drizzle={drizzle} drizzleState={drizzleState} />
              </div>
            );
          }
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}
export default MyApp;
