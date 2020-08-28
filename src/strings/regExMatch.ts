export function regExMatch(str: string, pattern: string): boolean {
  let regex = new RegExp(pattern);
  return str.match(regex) ? str === str.match(regex)?.[0] : false;
}
