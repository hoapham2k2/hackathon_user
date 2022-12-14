import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Grid, Box, Container } from '@mui/material';
import { ethers } from 'ethers';
import MarketplaceAbi from './utils/contractsData/Marketplace.json';
import MarketplaceAddress from './utils/contractsData/Marketplace-address.json';
import NFTAbi from './utils/contractsData/NFT.json';
import NFTAddress from './utils/contractsData/NFT-address.json';

import { CONNECT_ACC } from './constraint/actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSolidity } from './actions/solidity';
import AppBar from './components/Appbar/AppBar';

import Create_NFT from './pages/Create_NFT/Create_NFT';

const App = () => {
  const dispatch = useDispatch();
  let accounts;
  const web3Handler = async () => {
    // connect metamask
    accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });

    window.ethereum.on('accountsChanged', async function (accounts) {
      await web3Handler();
    });
    dispatch({
      type: CONNECT_ACC,
      payload: {
        account: accounts[0],
      },
    });
  };

  useEffect(() => {
    web3Handler();
    dispatch(fetchSolidity());
  });

  return (
    <BrowserRouter>
      <Box className="app">
        <AppBar />
        <Box className="container">
          <Container className="pages" maxWidth="xl">
            <Switch>
              <Route path="/create-nft" exact component={Create_NFT} />
            </Switch>
          </Container>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
