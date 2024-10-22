import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia
} from 'wagmi/chains';
// from https://cloud.walletconnect.com/
const ProjectId = '30ee1ecc89e2eaa75472d10e4fa29305';

export const config = getDefaultConfig({
  appName: 'Rcc Stake',
  projectId: ProjectId,
  chains: [
    sepolia
  ],
  ssr: true
});

export const defaultChainId: number = sepolia.id;
