export function levenshteinDist(str1: string, str2: string) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;

  const evenOps: number[] = [];
  const oddOps: number[] = new Array(small.length + 1);

  for (let j = 0; j < small.length + 1; j++) {
    evenOps.push(j);
  }

  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits;
    let prevEdits;
    if (i % 2 === 1) {
      currentEdits = oddOps;
      prevEdits = evenOps;
    } else {
      currentEdits = evenOps;
      prevEdits = oddOps;
    }
    currentEdits[0] = i;

    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = prevEdits[j - 1];
      } else {
        currentEdits[j] =
          1 + Math.min(prevEdits[j - 1], prevEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0 ? evenOps[small.length] : oddOps[small.length];
}

export function levenshteinDistance(str1: string, str2: string) {
  const len1 = str1.length;
  const len2 = str2.length;

  const dp = new Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(0));
  for (let i = 1; i < len1 + 1; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i < len2 + 1; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      const maxFromTopLeft =
        dp[i - 1][j - 1] + (str1[i - 1] === str2[j - 1] ? 0 : 1);
      const maxFromLeft = dp[i - 1][j] + 1;
      const maxFromTop = dp[i][j - 1] + 1;
      dp[i][j] = Math.min(maxFromTopLeft, maxFromTop, maxFromLeft);
    }
  }

  return dp[len1][len2];
}
