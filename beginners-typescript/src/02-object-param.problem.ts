import { expect, it } from "vitest";
import { string } from "zod";




// Solution 1
// export const addTwoNumbers = (params: {first: number, second: number}) => {
//   return params.first + params.second;
// };


// Solution 2
// type AddTwoNumbersArgs = {
//   first: number,
//   second: number
// }

// Solution 3
interface AddTwoNumbersArgs {
  first: number,
  second: number
}

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
