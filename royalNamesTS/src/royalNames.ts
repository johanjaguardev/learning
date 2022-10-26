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
const ROMAN_DECIMALS: string[] = [
  "",
  "X",
  "XX",
  "XXX",
  "XL",
  "L",
  "LX",
  "LXX",
  "LXXX",
  "XC",
  "C",
];

function romanValue(value: number): string {
  let romanVal = "";

  let digitalValue = value % 10;
  let decimalValue = Math.floor(value / 10);

  romanVal = ROMAN_DECIMALS[decimalValue].concat(ROMAN_DIGITS[digitalValue]);
  return romanVal;
}

function getRomanNumbersUntil100(): string[] {
  let romanNumbers = [];
  for (let i = 1; i <= 100; i++) {
    romanNumbers.push(romanValue(i));
  }
  return romanNumbers;
}

function transformName(name: string): string {
  const romanNumbers: string[] = getRomanNumbersUntil100();
  const nameParts = name.split(" ");
  return `${nameParts[0]} ${romanNumbers.indexOf(nameParts[1]) + 1}`;
}
export function royalNames(namesArray: string[]): string[] {
  return namesArray.map((e) => transformName(e)).sort();
}
