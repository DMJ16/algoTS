export function removeAdjacentDuplicates(str: string): string {
  return str
    .split("")
    .reduce<string[]>((stack, char) => {
      if (stack[stack.length - 1] == char) stack.pop();
      else stack.push(char);
      return stack;
    }, [])
    .join("");
}

export function _removeAdjacentDuplicates(str: string): string {
  const push = (arr: string[]) => (val: string): string[] => {
    arr.push(val);
    return arr;
  };

  const pop = (arr: string[]): string[] => {
    arr.pop();
    return arr;
  };

  return str
    .split("")
    .reduce<string[]>(
      (stack, char) =>
        stack[stack.length - 1] === char ? pop(stack) : push(stack)(char),
      []
    )
    .join("");
}

export function __removeAdjacentDuplicates(str: string): string {
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] == str.charAt(i)) stack.pop();
    else stack.push(str.charAt(i));
  }

  return stack.join("");
}
