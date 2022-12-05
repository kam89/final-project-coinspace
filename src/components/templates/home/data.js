import { Looks3, Looks4, Looks5, LooksOne, LooksTwo } from "@mui/icons-material";
import { blueGrey } from "@mui/material/colors";

export const ranks = {
  1: <LooksOne />,
  2: <LooksTwo />,
  3: <Looks3 />,
  4: <Looks4 />,
  5: <Looks5 />,
};

export const lottieRanks = {
  1: "https://assets3.lottiefiles.com/packages/lf20_otic4zzq.json",
  2: "https://assets7.lottiefiles.com/packages/lf20_5ao2yi69.json",
  3: "https://assets5.lottiefiles.com/packages/lf20_rstfabfn.json",
  4: "https://assets7.lottiefiles.com/packages/lf20_sw59me01.json",
  5: "https://assets7.lottiefiles.com/packages/lf20_dwf8jt6a.json",
};

export const lottieRanksIframe = {
  1: "https://embed.lottiefiles.com/animation/33614",
  2: "https://embed.lottiefiles.com/animation/33618",
  3: "https://embed.lottiefiles.com/animation/33615",
  4: "https://embed.lottiefiles.com/animation/33612",
  5: "https://embed.lottiefiles.com/animation/33617",
};

export const ranksColor = {
  1: 'gold',
  2: 'silver',
  3: '#CD7F32',
  4: blueGrey[400],
  5: blueGrey[400],
};

export const currencies = {
  EUR: 'EUR',
  GBP: 'GBP',
  USD: 'USD',
  MYR: 'MYR',
  SGD: 'SGD'
};

export const coins = [
  {
    id: 'bitcoin',
    icon: 'https://static.coinstats.app/coins/1650455588819.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    price: 16402.886471568738,
    priceBtc: 1,
    volume: 27494702274.357292,
    marketCap: 315278338998.6944,
    availableSupply: 19220906,
    totalSupply: 21000000,
    priceChange1h: 0.83,
    priceChange1d: 3.17,
    priceChange1w: 3.22,
    websiteUrl: 'http://www.bitcoin.org',
    twitterUrl: 'https://twitter.com/bitcoin',
    exp: [
      'https://blockchair.com/bitcoin/',
      'https://btc.com/',
      'https://btc.tokenview.io/'
    ]
  },
  {
    id: 'ethereum',
    icon: 'https://static.coinstats.app/coins/1650455629727.png',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    price: 1239.300554813378,
    priceBtc: 0.07553999081710222,
    volume: 18582113753.188274,
    marketCap: 149360681049.51868,
    availableSupply: 120520143.777399,
    totalSupply: 120520143.777399,
    priceChange1h: 1,
    priceChange1d: 5.45,
    priceChange1w: 10.75,
    websiteUrl: 'https://www.ethereum.org/',
    twitterUrl: 'https://twitter.com/ethereum',
    contractAddress: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    decimals: 18,
    exp: [
      'https://etherscan.io/',
      'https://ethplorer.io/',
      'https://blockchair.com/ethereum',
      'https://eth.tokenview.io/'
    ]
  },
  {
    id: 'tether',
    icon: 'https://static.coinstats.app/coins/1650455771843.png',
    name: 'Tether',
    symbol: 'USDT',
    rank: 3,
    price: 0.9701770977233409,
    priceBtc: 0.00005913591240505829,
    volume: 22504883884.712093,
    marketCap: 63413376155.21357,
    availableSupply: 65362681003.3159,
    totalSupply: 65362681003.3159,
    priceChange1h: 0.39,
    priceChange1d: 0.28,
    priceChange1w: 0.16,
    websiteUrl: 'https://tether.to/',
    twitterUrl: 'https://twitter.com/Tether_to',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimals: 18,
    exp: [
      'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7',
      'https://ethplorer.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7',
      'https://snowtrace.io/token/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
      'https://optimistic.etherscan.io/token/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
      'https://polygonscan.com/token/0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      'https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955',
      'https://nearblocks.io/token/dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near',
      'https://cronos-explorer.crypto.org/token/0x66e428c3f67a68878562e79a0234c1f83c208770',
      'https://avascan.info/blockchain/c/address/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7/token',
      'https://blockchair.com/ethereum/erc-20/token/0xdac17f958d2ee523a2206206994597c13d831ec7'
    ]
  },
  {
    id: 'binance-coin',
    icon: 'https://static.coinstats.app/coins/1666608145347.png',
    name: 'BNB',
    symbol: 'BNB',
    rank: 4,
    price: 288.3256330450463,
    priceBtc: 0.01757452265147882,
    volume: 582706880.976923,
    marketCap: 47076937071.87472,
    availableSupply: 163276974.63,
    totalSupply: 163276974.63,
    priceChange1h: 0.95,
    priceChange1d: 0.31,
    priceChange1w: 1.06,
    websiteUrl: 'https://www.binance.com/',
    twitterUrl: 'https://twitter.com/binance',
    contractAddress: 'BNB',
    decimals: 18,
    exp: [
      'https://binance.mintscan.io/',
      'https://explorer.binance.org/',
      'https://bscscan.com',
      'https://blockchair.com/ethereum/erc-20/token/0xb8c77482e45f1f44de1745f52c74426c631bdd52',
      'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
    ]
  },
  {
    id: 'usd-coin',
    icon: 'https://static.coinstats.app/coins/1650455825065.png',
    name: 'USD Coin',
    symbol: 'USDC',
    rank: 5,
    price: 0.9723731625007147,
    priceBtc: 0.000059406087637468666,
    volume: 2572262057.96042,
    marketCap: 42087640620.37989,
    availableSupply: 43236734041.8893,
    totalSupply: 43237978614.3693,
    priceChange1h: 0.37,
    priceChange1d: 0.19,
    priceChange1w: 0.32,
    websiteUrl: 'https://www.circle.com/en/usdc',
    twitterUrl: 'https://twitter.com/circlepay',
    contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    decimals: 18,
    exp: [
      'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      'https://stepscan.io/token/0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
      'https://nearblocks.io/address/a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near#transaction',
      'https://blockscout.com/xdai/mainnet/token/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83/token-transfers',
      'https://polygonscan.com/token/0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      'https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      'https://ftmscan.com/address/0x04068da6c83afcfa0e13ba15a6696662335d5b75',
      'https://arbiscan.io/token/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
      'https://ethplorer.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      'https://evmexplorer.velas.com/token/0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844'
    ]
  }
];