import {
  isPalindrome,
  isPalindromeWithSpaces,
  isPalindromeWithSpacesFP,
  caesarCipherEncryptor,
  regExMatch,
  longestPalindromicSubstring,
  groupAnagrams,
  groupAnagramsMap,
  reverseStr,
  reverseInt,
  reverseIntFP,
  firstUniqChar,
  isAnagram,
  isAnagramMap,
  atoi,
  strStr,
  strStrIdxOf,
} from "../strings";

describe("string algorithms", () => {
  describe("isPalindrome algorithms", () => {
    test("isPalindrome returns true if input string is a palindrome, otherwise returns false", () => {
      expect(isPalindrome("hannah")).toBe(true);
      expect(isPalindrome("racecar")).toBe(true);
      expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(false);
      expect(isPalindrome("race a car")).toBe(false);
    });
    test("isPalindromeWithSpaces returns true if input string is a palindrome ignoring spaces, otherwise returns false", () => {
      expect(isPalindromeWithSpaces("hannah")).toBe(true);
      expect(isPalindromeWithSpaces("racecar")).toBe(true);
      expect(isPalindromeWithSpaces("A man, a plan, a canal: Panama")).toBe(
        true
      );
      expect(isPalindromeWithSpaces("race a car")).toBe(false);
    });
    test("isPalindromeWithSpacesFP returns true if input string is a palindrome ignoring spaces, otherwise returns false. Uses functional style", () => {
      expect(isPalindromeWithSpacesFP("hannah")).toBe(true);
      expect(isPalindromeWithSpacesFP("racecar")).toBe(true);
      expect(isPalindromeWithSpacesFP("A man, a plan, a canal: Panama")).toBe(
        true
      );
      expect(isPalindromeWithSpacesFP("race a car")).toBe(false);
    });
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

  describe("groupAnagrams returns array of string arrays grouped by anagram", () => {
    test("groupAnagrams obj implementation", () => {
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
    test("groupAnagrams with Map implementation", () => {
      expect(
        groupAnagramsMap([
          "iceman",
          "woc",
          "pizza",
          "cinema",
          "cow",
        ]).map((item) => item.sort())
      ).toEqual(
        [["cinema", "iceman"], ["cow", "woc"], ["pizza"]].map((item) =>
          item.sort()
        )
      );
      expect(
        groupAnagramsMap([
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

  describe("reverse algorithms", () => {
    test("reverseStr returns input str in reverse order", () => {
      expect(reverseStr("hello")).toBe("olleh");
      expect(reverseStr("hannah")).toBe("hannah");
    });
    test("reverseInt returns input integer in reverse order. Returns 0 if reversed integer is outside 32-bit range", () => {
      expect(reverseInt(123)).toBe(321);
      expect(reverseInt(-123)).toBe(-321);
      expect(reverseInt(120)).toBe(21);
      expect(reverseInt(0)).toBe(0);
      expect(reverseInt(7463847412 + 1)).toBe(0);
      expect(reverseInt(-8463847412 - 1)).toBe(0);
    });
    test("reverseIntFP returns input integer in reverse order. Returns 0 if reversed integer is outside 32-bit range", () => {
      expect(reverseIntFP(123)).toBe(321);
      expect(reverseIntFP(-123)).toBe(-321);
      expect(reverseIntFP(120)).toBe(21);
      expect(reverseIntFP(0)).toBe(0);
      expect(reverseIntFP(7463847412 + 1)).toBe(0);
      expect(reverseIntFP(-8463847412 - 1)).toBe(0);
    });
  });

  test("firstUniqChar returns index of first unique character from input string, otherwise returns -1", () => {
    expect(firstUniqChar("leetcode")).toBe(0);
    expect(firstUniqChar("loveleetcode")).toBe(2);
  });

  describe("isAnagram returns true if input strings are proper anagrams, otherwise returns false", () => {
    test("isAnagram compares sorted input strings", () => {
      expect(isAnagram("anagram", "nagaram")).toBe(true);
      expect(isAnagram("rat", "car")).toBe(false);
      expect(isAnagram("hannah", "annahh")).toBe(true);
    });
    test("isAnagramMap uses Map to compare input strings", () => {
      expect(isAnagramMap("anagram", "nagaram")).toBe(true);
      expect(isAnagramMap("rat", "car")).toBe(false);
      expect(isAnagramMap("hannah", "annahh")).toBe(true);
    });
  });

  test("atoi returns number from input string within 32-bit signed integer range. If input string's first non-whitespace character is not an integer then returns 0. If result is out of range, returns min or max in 32-bit range", () => {
    expect(atoi("42")).toBe(42);
    expect(atoi("   -42")).toBe(-42);
    expect(atoi("4193 with words")).toBe(4193);
    expect(atoi("words and 987")).toBe(0);
    expect(atoi("-91283472332")).toBe(-2147483648);
  });

  describe("atoi returns number from input string within 32-bit signed integer range. If input string's first non-whitespace character is not an integer returns 0. If result is out of range, returns either min or max of 32-bit range depending on output sign", () => {
    test("strStr uses KMP similar method", () => {
      expect(strStr("hello", "ll")).toBe(2);
      expect(strStr("aaaaa", "bba")).toBe(-1);
      expect(strStr("", "")).toBe(0);
    });
    test("strStrIdxOf uses the build-in indexOf method", () => {
      expect(strStrIdxOf("hello", "ll")).toBe(2);
      expect(strStrIdxOf("aaaaa", "bba")).toBe(-1);
      expect(strStrIdxOf("", "")).toBe(0);
    });
  });
});
