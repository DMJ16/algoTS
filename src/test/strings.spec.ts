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
  countAndSay,
  longestCommonPrefix,
  robotPosition,
  frequencySort,
  lengthOfLongestNonRepeatingSubstr,
  correctCapitalization,
  romanToInt,
  addBinaryStrings,
  multiplyStrings,
  numJewelsInStones,
  isNumPalindrome,
  findTheDifference,
  findTheDiff,
} from "../strings";

describe("string algorithms", () => {
  describe("isPalindrome algorithms", () => {
    test(`isPalindrome returns true if input string is a palindrome, 
          otherwise returns false`, () => {
      expect(isPalindrome("hannah")).toBe(true);
      expect(isPalindrome("racecar")).toBe(true);
      expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(false);
      expect(isPalindrome("race a car")).toBe(false);
    });
    test(`isPalindromeWithSpaces returns true if input string is a palindrome ignoring spaces, 
          otherwise returns false`, () => {
      expect(isPalindromeWithSpaces("hannah")).toBe(true);
      expect(isPalindromeWithSpaces("racecar")).toBe(true);
      expect(isPalindromeWithSpaces("A man, a plan, a canal: Panama")).toBe(
        true
      );
      expect(isPalindromeWithSpaces("race a car")).toBe(false);
    });
    test(`isPalindromeWithSpacesFP returns true if input string is a palindrome ignoring spaces, 
          otherwise returns false. Uses functional style`, () => {
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
    test(`reverseInt returns input integer in reverse order. 
          Returns 0 if reversed integer is outside 32-bit range`, () => {
      expect(reverseInt(123)).toBe(321);
      expect(reverseInt(-123)).toBe(-321);
      expect(reverseInt(120)).toBe(21);
      expect(reverseInt(0)).toBe(0);
      expect(reverseInt(7463847412 + 1)).toBe(0);
      expect(reverseInt(-8463847412 - 1)).toBe(0);
    });
    test(`reverseIntFP returns input integer in reverse order. 
          Returns 0 if reversed integer is outside 32-bit range`, () => {
      expect(reverseIntFP(123)).toBe(321);
      expect(reverseIntFP(-123)).toBe(-321);
      expect(reverseIntFP(120)).toBe(21);
      expect(reverseIntFP(0)).toBe(0);
      expect(reverseIntFP(7463847412 + 1)).toBe(0);
      expect(reverseIntFP(-8463847412 - 1)).toBe(0);
    });
  });

  test("firstUniqChar returns index of first unique character from input string, otherwise returns -1", () => {
    expect(firstUniqChar("leetcode")()).toBe(0);
    expect(firstUniqChar("loveleetcode")()).toBe(2);
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

  test(`atoi returns number from input string within 32-bit signed integer range. 
        If input string's first non-whitespace character is not an integer then returns 0. 
        If result is out of range, returns min or max in 32-bit range`, () => {
    expect(atoi("42")).toBe(42);
    expect(atoi("   -42")).toBe(-42);
    expect(atoi("4193 with words")).toBe(4193);
    expect(atoi("words and 987")).toBe(0);
    expect(atoi("-91283472332")).toBe(-2147483648);
  });

  describe(`strStr returns the index of the first occurrence of needle in haystack, returns 0 if needle is '', and returns -1 if needle is not part of haystack.`, () => {
    test("strStr uses KMP similar method", () => {
      expect(strStr("hello", "ll")).toBe(2);
      expect(strStr("aaaaa", "bba")).toBe(-1);
      expect(strStr("a", "")).toBe(0);
    });
    test("strStrIdxOf uses the build-in indexOf method", () => {
      expect(strStrIdxOf("hello", "ll")).toBe(2);
      expect(strStrIdxOf("aaaaa", "bba")).toBe(-1);
      expect(strStrIdxOf("", "")).toBe(0);
    });
  });
  test(`countAndSay returns a string representation of the nth value in the count-and-say sequence. 
        The count-and-say sequence is the sequence of integers with the first five terms as following: 
        '1', '11', '21', '1211', '111221'.`, () => {
    expect(countAndSay(1)).toBe("1");
    expect(countAndSay(2)).toBe("11");
    expect(countAndSay(3)).toBe("21");
    expect(countAndSay(4)).toBe("1211");
    expect(countAndSay(5)).toBe("111221");
    expect(countAndSay(6)).toBe("312211");
  });

  test("longestCommonPrefix returns the longest common prefix string from array of strings. If no common prefix, returns ''.", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test(`robotPosition returns true if instructions return robot back to starting position, otherwise returns false.
    The instructions string will only contain L, R, U, and D, representing left, right, up, and down`, () => {
    expect(robotPosition("")).toBe(true);
    expect(robotPosition("LR")).toBe(true);
    expect(robotPosition("URURD")).toBe(false);
    expect(robotPosition("RRDD")).toBe(false);
    expect(robotPosition("LDRRLRUULR")).toBe(false);
    expect(robotPosition("RUULLDRD")).toBe(true);
  });

  test("frequencySort returns input string sorted in order of decreasing frequency.", () => {
    expect(frequencySort("tree")).toBe("eetr");
    expect(frequencySort("cccaaa")).toBe("cccaaa");
    expect(frequencySort("Aabb")).toBe("bbAa");
  });

  test("lengthOfLongestNonRepeatingSubstr returns length of the longest substring without repeating characters of input string.", () => {
    expect(lengthOfLongestNonRepeatingSubstr("abcabcbb")).toBe(3);
    expect(lengthOfLongestNonRepeatingSubstr("bbbbb")).toBe(1);
    expect(lengthOfLongestNonRepeatingSubstr("pwwkew")).toBe(3);
    expect(lengthOfLongestNonRepeatingSubstr("")).toBe(0);
  });

  test("correctCapitalization returns true if input string correctly uses capitalization, otherwise returns false.", () => {
    expect(correctCapitalization("abcabcbb")).toBe(true);
    expect(correctCapitalization("Arizona")).toBe(true);
    expect(correctCapitalization("USA")).toBe(true);
    expect(correctCapitalization("FlaG")).toBe(false);
  });

  test("romanToInt converts roman numeral input string to corresponding decimal number.", () => {
    expect(() => romanToInt("")).toThrow();
    expect(() => romanToInt("AB")).toThrow();
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("LVIII")).toBe(58);
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  test("addBinaryStrings returns stringified sum of two input strings representing binary numbers", () => {
    expect(addBinaryStrings("11", "1")).toBe("100");
    expect(addBinaryStrings("1010", "1011")).toBe("10101");
  });

  test("multiplyStrings returns stringified product of two input strings representing non-negative integers", () => {
    expect(multiplyStrings("2", "3")).toBe("6");
    expect(multiplyStrings("123", "456")).toBe("56088");
  });

  test("numJewelsInStones returns frequency of character in jewels input string in stones input string. The characters in jewels are distinct, and all characters in both inputs are letters. Letters are case sensitive.", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
    expect(numJewelsInStones("z", "ZZ")).toBe(0);
  });

  test("isNumPalindrome returns true if input number is a palindrome, otherwise returns false", () => {
    expect(isNumPalindrome(121)).toBe(true);
    expect(isNumPalindrome(-121)).toBe(false);
    expect(isNumPalindrome(10)).toBe(false);
    expect(isNumPalindrome(-101)).toBe(false);
  });

  test("findTheDifference returns the character from editedStr which is the shuffled originalStr plus 1 character. If no edit was made, returns empty string.", () => {
    expect(findTheDifference("foobar", "barfoot")).toBe("t");
    expect(findTheDifference("ide", "idea")).toBe("a");
    expect(findTheDifference("coding", "ingcod")).toBe("");

    // using charCodes
    expect(findTheDiff("foobar", "barfoot")).toBe("t");
    expect(findTheDiff("ide", "idea")).toBe("a");
    expect(findTheDiff("coding", "ingcod")).toBe("");
  });
});
