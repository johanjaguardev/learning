const ROMAN_DIGITS: string[] = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
];
const ROMAN_DECIMALS: string[] = ["", "X", "XX", "XXX", "XL", "L"];

function romanValue(value: number): string {
  let romanVal = "";

  let digitalValue = value % 10;
  let decimalValue = Math.floor(value / 10);

  romanVal = ROMAN_DECIMALS[decimalValue].concat(ROMAN_DIGITS[digitalValue]);
  return romanVal;
}

export function royalNames(): void {
  let romanNumbers = [];
  for (let i = 1; i <= 50; i++) {
    romanNumbers.push(romanValue(i));
  }
  console.log(romanNumbers);
}
