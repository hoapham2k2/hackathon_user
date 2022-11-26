import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Avatar, Button } from '@mui/material';
import './styles.css';
import metamask from '../../assets/metamask.png';
import coinbase from '../../assets/coinbase.png';
import walletConnect from '../../assets/walletConnect.png';
import phantom from '../../assets/phantom.png';
import coreWallet from '../../assets/coreWallet.png';

function PopupWallet() {
  return (
    <Box className="wrapper">
      <Box className="wallet">
        <Box className="walletUser">
          <Avatar />
          <Typography className="titleUser">My Wallet</Typography>
        </Box>
        <Typography className="slogan">
          If you don't have a wallet yet, you can select a provider and create one now.
        </Typography>
        <Box className="listWallet">
          <Box className="walletItems">
            <Avatar src={metamask} />
            <Typography className="title">Metamask</Typography>
          </Box>
          <Box className="walletItems">
            <Avatar src={coinbase} />
            <Typography className="title">Coinbase Wallet</Typography>
          </Box>
          <Box className="walletItems">
            <Avatar src={walletConnect} />
            <Typography className="title">WalletConnect</Typography>
          </Box>
          <Box className="walletItems">
            <Avatar src={phantom} />
            <Typography className="title">Phantom</Typography>
          </Box>
          <Box className="walletItems">
            <Avatar src={coreWallet} />
            <Typography className="title">Core</Typography>
          </Box>
        </Box>
        <Button variant="outlined" sx={{ width: '100%', height: '50px' }}>
          Show More
        </Button>
      </Box>
    </Box>
  );
}

export default PopupWallet;
