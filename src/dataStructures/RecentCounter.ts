export class RecentCounter {
  private requestsQueue: number[] = [];

  ping(timeInMS: number | number[]): number {
    if (
      timeInMS < 0 ||
      timeInMS < this.requestsQueue[this.requestsQueue.length - 1] ||
      (Array.isArray(timeInMS) &&
        timeInMS.every((time, idx, timeInMSArr) =>
          idx > 0
            ? time > 0 && time > timeInMSArr[idx]
            : time > 0 &&
              time > this.requestsQueue[this.requestsQueue.length - 1]
        ))
    )
      throw new Error(
        "Either time input(s) is less than 0 or time(s) input is greater than previous time input"
      );

    return this.getRequestsInPast3000MS(timeInMS);
  }

  private getRequestsInPast3000MS(timeInMS: number | number[]): number {
    if (Array.isArray(timeInMS)) {
      timeInMS.forEach((time) => {
        this.requestsQueue.push(time);
        while (this.requestsQueue[0] < time - 3000) this.requestsQueue.shift();
      });
    } else {
      this.requestsQueue.push(timeInMS);
      while (this.requestsQueue[0] < timeInMS - 3000)
        this.requestsQueue.shift();
    }
    return this.requestsQueue.length;
  }
}
