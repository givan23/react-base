import { buildData, getSum, getAuth, getList } from "./default.utility";

test("adds 3 + 6 to equal 9", () => {
  expect(getSum(3, 6)).toBe(9);
});

test("object assignment", () => {
  expect(buildData("Ivan", " Trabucco")).toEqual({ fullName: "Ivan Trabucco" });
});

test("null", () => {
  const n: any = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("check the error", () => {
  expect(() => getAuth()).toThrow(/authentication/);
});

test("find an item", () => {
  let name = getList().map(o => o?.name);
  expect(name).toContain("Tom");
  expect(name.length).toBeDefined();
  expect(name.length).not.toBeFalsy();
});
