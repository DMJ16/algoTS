import { RecentCounter } from "../../dataStructures";

describe("RecentCounter counts the number of recent requests within a certain time frame. It is guaranteed that every call to ping uses a strictly larger value of timeInMS than the previous call.", () => {
  // Initializes the counter with zero recent requests in requestQueue.
  const recentCounter: RecentCounter = new RecentCounter();

  test("ping method adds a new request at time timeInMS, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, ping returns the number of requests that occured in the inclusive range [timeInMS - 3000, timeInMS].", () => {
    expect(recentCounter.ping(1)).toBe(1);
    expect(recentCounter.ping(100)).toBe(2);
    expect(recentCounter.ping(3001)).toBe(3);
    expect(recentCounter.ping(3002)).toBe(3);

    // timesInMSArr input
    expect(recentCounter.ping([1, 100, 3001, 3002])).toBe(7);
  });
});
