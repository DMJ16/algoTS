export function levenshteinDistance(str1: string, str2: string) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;

  const evenEdits: number[] = [];
  const oddEdits: number[] = new Array(small.length + 1);

  for (let j = 0; j <= small.length; j++) {
    evenEdits.push(j);
  }

  for (let i = 1; i <= big.length; i++) {
    let currentEdits;
    let prevEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      prevEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      prevEdits = oddEdits;
    }
    currentEdits[0] = i;

    for (let j = 1; j <= small.length; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = prevEdits[j - 1];
      } else {
        currentEdits[j] =
          1 + Math.min(prevEdits[j - 1], prevEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0
    ? evenEdits[small.length]
    : oddEdits[small.length];
}
