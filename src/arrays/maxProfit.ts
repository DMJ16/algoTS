export function maxProfitOneTxn(prices: number[]): number {
  return prices.reduce<[maxProfit: number, minPrice: number]>(
    ([maxProfit, minPrice], currentPrice) => [
      Math.max(maxProfit, currentPrice - minPrice),
      Math.min(minPrice, currentPrice),
    ],
    [prices[1] - prices[0] || 0, prices[0] || 0]
  )[0];
}

export function maxProfitMultiTxn(prices: number[]): number {
  return prices.reduce((maxProfit, currentPrice, i, prices) => {
    return i > 0 && currentPrice > prices[i - 1]
      ? maxProfit + currentPrice - prices[i - 1]
      : maxProfit;
  }, 0);
}

export function maxProfitTwoTxn(prices: number[]): number {
  const maxProfit = (prices: number[]): number => {
    const { maxProfit } = prices.reduce(
      (
        { secondMinPrice, secondMaxProfit, minPrice, maxProfit },
        currentPrice
      ) => {
        secondMinPrice = Math.min(secondMinPrice, currentPrice);
        secondMaxProfit = Math.max(
          secondMaxProfit,
          currentPrice - secondMinPrice
        );
        minPrice = Math.min(minPrice, currentPrice - secondMaxProfit);
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
        return { secondMinPrice, secondMaxProfit, minPrice, maxProfit };
      },
      {
        secondMinPrice: Infinity,
        secondMaxProfit: 0,
        minPrice: Infinity,
        maxProfit: 0,
      }
    );
    return maxProfit;
  };
  return maxProfit(prices);
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
