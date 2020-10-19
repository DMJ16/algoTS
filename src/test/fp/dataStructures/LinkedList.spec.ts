import { LinkedList } from "../../../fp";

const { List, ...fn } = LinkedList;

describe("LinkedList", () => {
  let list: LinkedList.List<number>;
  let list2: LinkedList.List<number>;
  let palindrome: LinkedList.List<number>;

  beforeEach(() => {
    list = new List(6);
    list2 = new List(10);
    palindrome = new List(10);
    fn.push(list, 12);
    fn.push(list, 18);
    fn.push(list2, 20);
    fn.push(list2, 30);
    fn.push(palindrome, 20);
    fn.push(palindrome, 10);
  });

  test("push returns input list with added node at the end of the list.", () => {
    expect(list.next?.val).toBe(12);
    expect(list.next?.next?.val).toBe(18);
    expect(list2.next?.val).toBe(20);
    expect(list2.next?.next?.val).toBe(30);
    expect(palindrome.next?.val).toBe(20);
    expect(palindrome.next?.next?.val).toBe(10);
  });

  test("reverse returns reversed input list.", () => {
    const revList = fn.reverse(list);
    const revList2 = fn.reverse(list2);
    expect(revList?.val).toBe(18);
    expect(revList?.next?.val).toBe(12);
    expect(revList?.next?.next?.val).toBe(6);
    expect(revList2?.val).toBe(30);
    expect(revList2?.next?.val).toBe(20);
    expect(revList2?.next?.next?.val).toBe(10);
  });

  test("mergeTwoSortedLists returns merged sorted LinkedLists.", () => {
    const testArr: number[] = [];
    let mergedList = fn.mergeTwoSortedLists(list, list2);
    while (mergedList) {
      testArr.push(mergedList.val);
      mergedList = mergedList.next;
    }
    expect(testArr).toStrictEqual([6, 10, 12, 18, 20, 30]);
  });

  test("isPalindrome returns true if list is a palindrome, else false.", () => {
    expect(fn.isPalindrome(list)).toBe(false);
    expect(fn.isPalindrome(list2)).toBe(false);
    expect(fn.isPalindrome(palindrome)).toBe(true);
  });
});
