export function levenshteinDistance(str1: string, str2: string) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenOps: number[] = [];
  const oddOps: number[] = new Array(small.length + 1);

  for (let j = 0; j < small.length + 1; j++) {
    evenOps.push(j);
  }

  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, prevEdits;
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
