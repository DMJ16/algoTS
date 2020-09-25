import { HashTable } from "../../dataStructures";

describe("HashTable", () => {
  const table: HashTable = new HashTable();

  test("set key-value pairs and retrieve value by key", () => {
    table.set("Skywalker", "Luke");
    table.set("Baggins", "Frodo");
    table.set("Wayne", "Bruce");
    table.set("Prince", "Diana");
    table.set("Kent", "Clark");
    expect(table.get("Skywalker")).toBe("Luke");
    expect(table.get("Baggins")).toBe("Frodo");
    expect(table.get("Wayne")).toBe("Bruce");
    expect(table.get("Prince")).toBe("Diana");
    expect(table.get("Kent")).toBe("Clark");
    expect(table.get("Stark")).toBeNull();
  });
  test("get keys array", () => {
    expect(table.keys()).toContain("Skywalker");
    expect(table.keys()).toContain("Baggins");
    expect(table.keys()).toContain("Wayne");
    expect(table.keys()).toContain("Prince");
    expect(table.keys()).toContain("Kent");
  });
  test("get values array", () => {
    expect(table.values()).toContain("Luke");
    expect(table.values()).toContain("Frodo");
    expect(table.values()).toContain("Bruce");
    expect(table.values()).toContain("Diana");
    expect(table.values()).toContain("Clark");
  });
});
