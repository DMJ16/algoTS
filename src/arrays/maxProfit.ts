export function maxProfitOneTxn(prices: number[]): number {
  let minPrice = prices[0] || 0;
  return prices.reduce((maxProfit, currentPrice) => {
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    minPrice = Math.min(minPrice, currentPrice);
    return maxProfit;
  }, prices[1] - prices[0] || 0);
}

export function maxProfitMultiTxn(prices: number[]): number {
  return prices.reduce((maxProfit, currentPrice, i, prices) => {
    return i > 0 && currentPrice > prices[i - 1]
      ? maxProfit + currentPrice - prices[i - 1]
      : maxProfit;
  }, 0);
}

export function maxProfitTwoTxn(prices: number[]): number {
  let minPrice1 = Infinity;
  let minPrice2 = Infinity;
  return prices.reduce(
    ([maxProfit1, maxProfit2], currentPrice) => {
      minPrice1 = Math.min(minPrice1, currentPrice);
      maxProfit1 = Math.max(maxProfit1, currentPrice - minPrice1);
      minPrice2 = Math.min(minPrice2, currentPrice - maxProfit1);
      maxProfit2 = Math.max(maxProfit2, currentPrice - minPrice2);
      return [maxProfit1, maxProfit2];
    },
    [0, 0]
  )[1];
}

export function maxProfitKTxn(prices: number[], k: number): number {
  if (k * 2 >= prices.length) return maxProfitMultiTxn(prices);
  const minPrices = new Array<number>(k + 1).fill(-Infinity);
  const maxProfitsArr = new Array<number>(k + 1).fill(0);
  return prices.reduce((maxProfits, currentPrice) => {
    for (let i = 1; i <= k; i++) {
      minPrices[i] = Math.max(minPrices[i], maxProfits[i - 1] - currentPrice);
      maxProfits[i] = Math.max(maxProfits[i], minPrices[i] + currentPrice);
    }
    return maxProfits;
  }, maxProfitsArr)[k];
}
