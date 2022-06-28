export const allCoins = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cusd-coin%2Ccardano%2Cdogecoin%2Cshiba-inu%2Ctron&order=market_cap_desc&per_page=100&page=1&sparkline=false"

export const fourCoins = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cusd-coin%&order=market_cap_desc&per_page=100&page=1&sparkline=false"


export const FETCH_COINS = `${allCoins}`;
export const FOUR_COINS = `${fourCoins}`;