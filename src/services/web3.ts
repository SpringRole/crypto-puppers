import Portis from "@portis/web3";
import Web3 from "web3";

const myPrivateEthereumNode = {
  nodeUrl: 'https://goerli.blockscout.com',
  chainId: 5,
  nodeProtocol: 'rpc',
  gasRelayHubAddress: '0xfe7EC2db12986896E1de65eAc210A7015eB816cb',
};

export const portis = new Portis(
  "5d6c7c8e-dcd4-4d86-9bd5-503af23b3772",
  myPrivateEthereumNode,
  { gasRelay: true }
);
export const web3 = new Web3(portis.provider);

export const web3networks: {
  [key: number]: { name: string; explorer: string };
} = {
  1: { name: "Ethereum", explorer: "https://etherscan.io" },
  3: { name: "Ethereum (ropsten)", explorer: "https://ropsten.etherscan.io" },
  4: {
    name: "Ethereum (rinkeby)",
    explorer: "https://blockscout.com/eth/rinkeby"
  },
  5: {
    name: "Ethereum (goerli)",
    explorer: "https://blockscout.com/eth/goerli"
  },
  42: {
    name: "Ethereum (kovan)",
    explorer: "https://blockscout.com/eth/kovan"
  },
  61: {
    name: "Ethereum Classic",
    explorer: "https://blockscout.com/etc/mainnet"
  },
  77: { name: "POA (sokol)", explorer: "https://blockscout.com/poa/sokol" },
  99: { name: "POA", explorer: "https://blockscout.com/poa/core" },
  100: { name: "XDAI", explorer: "https://blockscout.com/poa/dai" }
};
