import { expect, it } from "vitest";

// Solucion 1
// const tryCatchDemo = (state: "fail" | "succeed") => {
//   try {
//     if (state === "fail") {
//       throw new Error("Failure!");
//     }
//   } catch (e:any) {
//     return e.message;
//   }
// };

// Solucion 2
// const tryCatchDemo = (state: "fail" | "succeed") => {
//   try {
//     if (state === "fail") {
//       throw new Error("Failure!");
//     }
//   } catch (e) {
//     return e as Error;
//   }
// };

// Solucion 3
const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
