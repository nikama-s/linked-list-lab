const LinkedList = require("./linked-list");

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("should start empty", () => {
    expect(list.length()).toBe(0);
  });

  test("append should add element to the end", () => {
    list.append("a");
    expect(list.length()).toBe(1);
    expect(list.get(0)).toBe("a");
  });

  test("append should throw if not a single character", () => {
    expect(() => list.append("awrge")).toThrow();
    expect(() => list.append(5)).toThrow();
  });

  test("insert should add element at position", () => {
    list.append("a");
    list.append("b");
    list.insert("c", 1);
    expect(list.length()).toBe(3);
    expect(list.get(1)).toBe("c");
  });

  test("insert should throw for invalid index", () => {
    expect(() => list.insert("a", -1)).toThrow();
    expect(() => list.insert("a", 1)).toThrow();
  });

  test("insert should throw if not a single character", () => {
    expect(() => list.insert("awrge", 0)).toThrow();
    expect(() => list.append(5, 0)).toThrow();
  });

  test("delete should remove element at position", () => {
    list.append("a");
    list.append("b");
    expect(list.delete(0)).toBe("a");
    expect(list.length()).toBe(1);
  });

  test("delete should throw for invalid index", () => {
    expect(() => list.delete(-1)).toThrow();
    expect(() => list.delete(2)).toThrow();
  });

  test("deleteAll should remove all matching elements", () => {
    list.append("a");
    list.append("b");
    list.append("a");
    list.deleteAll("a");
    expect(list.length()).toBe(1);
    expect(list.get(0)).toBe("b");
  });

  test("deleteAll should throw if not a single character", () => {
    expect(() => list.deleteAll("awrge")).toThrow();
    expect(() => list.deleteAll(5)).toThrow();
  });

  test("get should return element at position", () => {
    list.append("a");
    list.append("b");
    expect(list.get(1)).toBe("b");
  });

  test("get should throw for invalid index", () => {
    expect(() => list.get(-1)).toThrow();
    expect(() => list.get(2)).toThrow();
  });

  test("clone should create a copy", () => {
    list.append("a");
    const copy = list.clone();
    copy.append("b");
    expect(list.length()).toBe(1);
    expect(copy.length()).toBe(2);
  });

  test("reverse should invert the list", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.reverse();
    expect(list.get(0)).toBe("c");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("a");
  });

  test("findFirst should return first occurrence", () => {
    list.append("a");
    list.append("b");
    list.append("a");
    expect(list.findFirst("a")).toBe(0);
    expect(list.findFirst("b")).toBe(1);
    expect(list.findFirst("c")).toBe(-1);
  });

  test("findFirst should throw if not a single character", () => {
    expect(() => list.findFirst("awrge")).toThrow();
    expect(() => list.findFirst(5)).toThrow();
  });

  test("findLast should return last occurrence", () => {
    list.append("a");
    list.append("b");
    list.append("a");
    expect(list.findLast("a")).toBe(2);
    expect(list.findLast("b")).toBe(1);
    expect(list.findLast("c")).toBe(-1);
  });

  test("findLast should throw if not a single character", () => {
    expect(() => list.findLast("awrge")).toThrow();
    expect(() => list.findLast(5)).toThrow();
  });

  test("clear should empty the list", () => {
    list.append("a");
    list.append("b");
    list.clear();
    expect(list.length()).toBe(0);
  });

  test("extend should add all elements from another list", () => {
    const other = new LinkedList();
    list.append("a");
    other.append("b");
    other.append("c");
    list.extend(other);
    expect(list.length()).toBe(3);
    expect(list.get(1)).toBe("b");
  });
});
