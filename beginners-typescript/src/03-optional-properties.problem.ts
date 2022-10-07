import { expect, it } from "vitest";

// Solution 1
// export const getName = (params: { first: string; last?: string }) => {
//   if (params.last) {
//     return `${params.first} ${params.last}`;
//   }
//   return params.first;
// };

// Solution 2
// type GetNameArgs = {
//   first: string,
//   last?: string
// }

// export const getName = (params: GetNameArgs) => {
//   if (params.last) {
//     return `${params.first} ${params.last}`;
//   }
//   return params.first;
// };

// Solution 3
interface GetNameArgs {
  first: string,
  last?: string
}

export const getName = (params: GetNameArgs) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
