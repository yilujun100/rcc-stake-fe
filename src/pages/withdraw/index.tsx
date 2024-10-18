import { Box, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Grid from '@mui/material/Grid2';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NextPage } from 'next';
import { useEffect, useState, useMemo } from 'react';
import { useAccount } from 'wagmi';

export type UserStakeData = {
  staked: string,
  withdrawPending: string,
  withdrawable: string
};

const InitData = {
  staked: '0',
  withdrawable: '0',
  withdrawPending: '0'
};

const Withdraw: NextPage = () => {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState('0');
  const [withdrawLoading, setWithdrawLoading] = useState(false);
  const [userData, setUserData] = useState<UserStakeData>(InitData);

  const isWithdrawable = useMemo(() => {
    return Number(userData.withdrawable) > 0 && isConnected;
  }, [userData, isConnected]);

  const handleWithdraw = () => {};

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'}>
        <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>Rcc Stake</Typography>
        <Typography sx={{}}>Stake ETH to earn tokens.</Typography>
        <Box sx={{ border: '1px solid #eee', borderRadius: '12px', p: '20px', width: '600px', mt: '30px' }}>
          <Grid sx={{
            mb: '60px',
            '& .title': {
              fontSize: '15px',
              mb: '5px'
            },
            '& .val': {
              fontSize: '18px',
              fontWeight: 'bold'
            }
          }}>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
              <Box className="title">Staked Amount: </Box>
              <Box className="val">{userData.staked} ETH</Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
              <Box className="title">Available to withdraw: </Box>
              <Box className="val">{userData.withdrawable} ETH</Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
              <Box className="title">Pending Withdraw: </Box>
              <Box className="val">{userData.withdrawPending} ETH</Box>
            </Box>
          </Grid>
          <Box sx={{ fontSize: '20px', mb: '10px' }}>Unstake</Box>
          <TextField onChange={e => {
            setAmount(e.target.value);
          }} sx={{ minWidth: '300px' }} label="Amount" variant="outlined" />
          <Box mt='20px'>
            {
            }
          </Box>
          <Box sx={{ fontSize: '20px', mb: '10px', mt: '40px' }}>Withdraw</Box>
          <Box>Ready Amount: {userData.withdrawable}</Box>
          <Typography fontSize={'14px'} color={'#888'}>After unstaking, you need to wait 20 minutes to withdraw.</Typography>
          <LoadingButton sx={{ mt: '20px' }} disabled={!isWithdrawable} variant='contained' loading={withdrawLoading} onClick={handleWithdraw}>Withdraw</LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default Withdraw;
