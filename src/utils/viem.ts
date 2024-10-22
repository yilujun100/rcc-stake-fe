import { sepolia } from 'viem/chains';
import { PublicClient, createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

export const viemClients = (chainId: number): PublicClient => {
  const clients: {
    [key: number]: PublicClient
  } = {
    [sepolia.id]: createPublicClient({
      chain: sepolia,
      transport: http()
    })
  };
  return clients[chainId];
}