const origin = "https://deep-index.moralis.io";
const apiKey =
  "F4BloNpMLfqJtxaBkajfRQHhsA45haNMEWUAGd7iSxVrACaKkgAyzkgg02ADPhNi";

// 1.searchNFTs api
// 完整的URL：[protocol]://[domain]:[port]/[path]?a=1&b=2
//https://docs.moralis.io/web3-data-api/evm/reference/search-nfts
export const searchNFTs = async (searchText) => {
  const url = new URL(`{origin}/api/v2/nft/search`);

  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("q", searchText);
  url.searchParams.append("filter", "name");
  url.searchParams.append("limit", "12");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

//2.getNFTTrades api
//https://docs.moralis.io/web3-data-api/evm/reference/get-nft-trades
export const getNFTTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trade`);

  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

//3.getContractNFTs
//https://docs.moralis.io/web3-data-api/evm/reference/get-contract-nfts
export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);

  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "12");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
// export const searchNFTs = async (searchText) => {
//   const url = new URL(`${origin}/api/v2/nft/search`);
//   url.searchParams.append("chain", "eth");
//   url.searchParams.append("format", "decimal");
//   url.searchParams.append("q", searchText);
//   url.searchParams.append("filter", "name");
//   url.searchParams.append("limit", "12");

//   const response = await fetch(url, {
//     headers: {
//       accept: "application/json",
//       "X-API-KEY": apiKey,
//     },
//   });
//   return response.json();
// };

// export const getNFTTrades = async (tokenAddress) => {
//   const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
//   url.searchParams.append("chain", "eth");
//   url.searchParams.append("marketplace", "opensea");
//   url.searchParams.append("limit", "20");

//   const response = await fetch(url, {
//     headers: {
//       accept: "application/json",
//       "X-API-KEY": apiKey,
//     },
//   });
//   return response.json();
// };

// export const getContractNFTs = async (tokenAddress) => {
//   //async：函数会用到await
//   const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
//   url.searchParams.append("chain", "eth");
//   url.searchParams.append("format", "decimal");
//   url.searchParams.append("limit", "20");

//   const response = await fetch(url, {
//     headers: {
//       accept: "application/json",
//       "X-API-KEY": apiKey,
//     },
//   });
//   return response.json();
// };
