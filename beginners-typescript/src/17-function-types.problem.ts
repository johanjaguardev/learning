import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

// Solucion 1
// const addListener = (onFocusChange: (isFocused: boolean) => void) => {
//   window.addEventListener("focus", () => {
//     onFocusChange(true);
//   });

//   window.addEventListener("blur", () => {
//     onFocusChange(false);
//   });
// };

type FocusListener = (isFocused: boolean) => void;
const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });
  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};
addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
