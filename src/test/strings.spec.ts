import {
  isPalindrome,
  caesarCipherEncryptor,
  regExMatch,
  longestPalindromicSubstring,
  groupAnagrams,
} from "../strings";

describe("string algorithms", () => {
  test("palindromes return true, else false", () => {
    expect(isPalindrome("hannah")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("david")).toBe(false);
  });

  test("characters shift k positions in alphabet", () => {
    expect(caesarCipherEncryptor("a", 2)).toBe("c");
    expect(caesarCipherEncryptor("abc", 3)).toBe("def");
    expect(caesarCipherEncryptor("a", 4)).toBe("e");
    expect(caesarCipherEncryptor("z", 4)).toBe("d");
    expect(caesarCipherEncryptor("z", 1)).toBe("a");
    expect(caesarCipherEncryptor("xyz", 2)).toBe("zab");
  });

  test("regex match", () => {
    expect(regExMatch("aa", "a")).toBe(false);
    expect(regExMatch("aa", "a*")).toBe(true);
    expect(regExMatch("ab", ".*")).toBe(true);
    expect(regExMatch("mississippi", "mis*is*p*.")).toBe(false);
  });

  test("get longest palindromic substring", () => {
    expect(longestPalindromicSubstring("abaaaabaaa1racecar1")).toBe(
      "1racecar1"
    );
    expect(longestPalindromicSubstring("abaxyzzyxf")).toBe("xyzzyx");
  });

  test("group anagrams in subarrays", () => {
    expect(
      groupAnagrams(["iceman", "woc", "pizza", "cinema", "cow"]).map((item) =>
        item.sort()
      )
    ).toEqual(
      [["cinema", "iceman"], ["cow", "woc"], ["pizza"]].map((item) =>
        item.sort()
      )
    );
    expect(
      groupAnagrams([
        "yo",
        "act",
        "flop",
        "tac",
        "foo",
        "cat",
        "oy",
        "olfp",
      ]).map((item) => item.sort())
    ).toEqual(
      [
        ["yo", "oy"],
        ["act", "tac", "cat"],
        ["flop", "olfp"],
        ["foo"],
      ].map((item) => item.sort())
    );
  });
});
