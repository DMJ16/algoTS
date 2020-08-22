export function memoize(fn: (...args: any[]) => any) {
  const cache: { [k: string]: any } = {};

  return (...args: any[]) => {
    const strArg = JSON.stringify(arguments);

    if (cache[strArg]) return cache[strArg];

    const result = fn.apply(null, args);

    cache[strArg] = result;

    return result;
  };
}
