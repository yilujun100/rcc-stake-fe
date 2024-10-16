'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from '../../styles/Home.module.css';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import LoadingButton from '@mui/lab/LoadingButton';

const Home = () => {
  const { address, isConnected } = useAccount();
  const [stakedAmount, setStakedAmount] = useState('0');
  const [amount, setAmount] = useState('0');
  const [loading, setLoading] = useState(false);

  const handleStake = () => {
    console.log('handleStake');
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'}>
      <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>Rcc Stake</Typography>
      <Typography sx={{}}>Stake ETH to earn tokens.</Typography>
      <Box sx={{ border: '1px solid #eee', borderRadius: '12px', p: '20px', width: '600px', mt: '30px' }}>
        <Box display={'flex'} alignItems={'center'} gap={'5px'} mb='10px'>
          <Box>Staked Amount: </Box>
          <Box>{stakedAmount}</Box>
        </Box>
        <TextField
          onChange={e => {
            setAmount(e.target.value);
          }}
          sx={{ minWidth: '300px' }}
          label="Amount"
          variant="outlined"
        />
        <Box mt='30px'>
          {
            !isConnected ? <ConnectButton /> : <LoadingButton variant="contained" loading={loading} onClick={handleStake}>Stake</LoadingButton>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Home;