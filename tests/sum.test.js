import { sum } from "./sum";

describe("sum", () => {
  it("sum numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
