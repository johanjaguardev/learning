const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkPairs = (items, sum) => {
  let i = 0;
  let j = items.length - 1;
  while (i < j) {
    while (items[i] + items[j] > sum) {
      j--;
    }
    const item1 = items[i];
    const item2 = items[j];
    if (item1 + item2 === sum && i < j) {
      console.log(`+ ${items[i]}, ${items[j]}`);
    }
    i++;
  }
};
const divideInput = (userInput) => {
  return {
    items: userInput
      .split(" ")[0]
      .split(",")
      .map((e) => parseInt(e))
      .sort(function (a, b) {
        return parseInt(a) - parseInt(b);
      }),
    sum: parseInt(userInput.split(" ")[1]),
  };
};

rl.question(
  "Please enter the array of numbers separated by coma and the target sum separated with space ? ",
  function (userInput) {
    const data = divideInput(userInput);
    checkPairs(data.items, data.sum);
    rl.close();
  }
);

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
