const sum = require("./subtract");

test("properly subtracting two numbers", () => {
  expect(sum(5, 2)).toBe(3);
});
