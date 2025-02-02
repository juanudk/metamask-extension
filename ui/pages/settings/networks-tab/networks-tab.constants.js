import {
  GOERLI,
  GOERLI_CHAIN_ID,
  KOVAN,
  KOVAN_CHAIN_ID,
  MAINNET,
  MAINNET_CHAIN_ID,
  RINKEBY,
  RINKEBY_CHAIN_ID,
  ROPSTEN,
  ROPSTEN_CHAIN_ID,
  COOL_RPC_URL,
  getRpcUrl,
  ETH_SYMBOL,
  TEST_NETWORK_TICKER_MAP,
} from '../../../../shared/constants/network';

const defaultNetworksData = [
  {
    labelKey: COOL,
    iconColor: '#29B6AF',
    providerType: COOL,
    rpcUrl: COOL_RPC_URL,
    chainId: COOL_CHAIN_ID,
    ticker: ETH_SYMBOL,
    blockExplorerUrl: 'https://etherscan.io',
  },
  {
    labelKey: MAINNET,
    iconColor: '#29B6AF',
    providerType: MAINNET,
    rpcUrl: getRpcUrl({ network: MAINNET, excludeProjectId: true }),
    chainId: MAINNET_CHAIN_ID,
    ticker: ETH_SYMBOL,
    blockExplorerUrl: 'https://etherscan.io',
  },
  {
    labelKey: ROPSTEN,
    iconColor: '#FF4A8D',
    providerType: ROPSTEN,
    rpcUrl: getRpcUrl({ network: ROPSTEN, excludeProjectId: true }),
    chainId: ROPSTEN_CHAIN_ID,
    ticker: TEST_NETWORK_TICKER_MAP[ROPSTEN],
    blockExplorerUrl: 'https://ropsten.etherscan.io',
  },
  {
    labelKey: RINKEBY,
    iconColor: '#F6C343',
    providerType: RINKEBY,
    rpcUrl: getRpcUrl({ network: RINKEBY, excludeProjectId: true }),
    chainId: RINKEBY_CHAIN_ID,
    ticker: TEST_NETWORK_TICKER_MAP[RINKEBY],
    blockExplorerUrl: 'https://rinkeby.etherscan.io',
  },
  {
    labelKey: GOERLI,
    iconColor: '#3099f2',
    providerType: GOERLI,
    rpcUrl: getRpcUrl({ network: GOERLI, excludeProjectId: true }),
    chainId: GOERLI_CHAIN_ID,
    ticker: TEST_NETWORK_TICKER_MAP[GOERLI],
    blockExplorerUrl: 'https://goerli.etherscan.io',
  },
  {
    labelKey: KOVAN,
    iconColor: '#9064FF',
    providerType: KOVAN,
    rpcUrl: getRpcUrl({ network: KOVAN, excludeProjectId: true }),
    chainId: KOVAN_CHAIN_ID,
    ticker: TEST_NETWORK_TICKER_MAP[KOVAN],
    blockExplorerUrl: 'https://kovan.etherscan.io',
  },
];

export { defaultNetworksData };
