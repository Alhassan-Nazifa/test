const sum = require("./sum")   
 
test("properly adding two numbers", () => {
    expect(sum(1, 2)
    ).toBe(3)
})