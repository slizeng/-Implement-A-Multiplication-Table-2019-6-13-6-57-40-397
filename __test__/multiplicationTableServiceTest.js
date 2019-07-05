import { createMultiplicationTable } from "../MultiplicationTableService"

it('should add two numbers', () => {
  expect(createMultiplicationTable(2, 3)).toBe("");
});