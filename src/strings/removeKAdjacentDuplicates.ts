export function removeKAdjacentDuplicates(str: string, k: number): string {
  const incrementCountAndPopIfEqualToK = (
    stack: [string, number][]
  ): [string, number][] => {
    stack[stack.length - 1][1] += 1;
    if (stack[stack.length - 1][1] === k) stack.pop();
    return stack;
  };

  const instantiateNewTupleAndPushToStack = (stack: [string, number][]) => (
    val: string
  ): [string, number][] => {
    stack.push([val, 1]);
    return stack;
  };

  return str
    .split("")
    .reduce<[string, number][]>(
      (stack, char) =>
        stack.length && stack[stack.length - 1][0] === char
          ? incrementCountAndPopIfEqualToK(stack)
          : instantiateNewTupleAndPushToStack(stack)(char),
      []
    )
    .reduce<string>(
      (resultStr, [char, count]) => (resultStr += char.repeat(count)),
      ""
    );
}
