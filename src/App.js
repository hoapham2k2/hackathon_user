import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Grid, Box, Container } from "@mui/material";
import { ethers } from "ethers";
// import MarketplaceAbi from "./utils/contractsData/Marketplace.json";
// import MarketplaceAddress from "./utils/contractsData/Marketplace-address.json";
// import NFTAbi from "./utils/contractsData/NFT.json";
// import NFTAddress from "./utils/contractsData/NFT-address.json";

import "./App.css";
import AppBar from "./components/Appbar/AppBar";
import Landing from "./pages/Landing/Landing";
import Accounts from "./pages/Accounts/Accounts";

const App = () => {
  return (
    <BrowserRouter>
      <Box className="app">
        <AppBar />
        <Box className="container">
          <Box className="pages" sx={{ maxWidth: "100%" }}>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/account" exact component={Accounts} />
            </Switch>
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
