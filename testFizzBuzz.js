const {getFizzBuzzValue} = require("./fizzbuzz.js");

const tests = [
    {"num": 1, "rules": [], "expect": "1"},
    {"num": 3, "rules": [], "expect": "3"},
    {"num": 3, "rules": [3], "expect": "Fizz"},
    {"num": 5, "rules": [3], "expect": "5"},
    {"num": 5, "rules": [3, 5], "expect": "Buzz"},
    {"num": 15, "rules": [3, 5], "expect": "FizzBuzz"},
    {"num": 21, "rules": [], "expect": "21"},
    {"num": 21, "rules": [3], "expect": "Fizz"},
    {"num": 21, "rules": [3, 7], "expect": "FizzBang"},
    {"num": 33, "rules": [3], "expect": "Fizz"},
    {"num": 33, "rules": [11], "expect": "Bong"},
    {"num": 33, "rules": [3, 11], "expect": "Bong"},
    {"num": 13, "rules": [13], "expect": "Fezz"},
    {"num": 65, "rules": [5, 13], "expect": "FezzBuzz"},
    {"num": 195, "rules": [3, 5, 13], "expect": "FizzFezzBuzz"},
    {"num": 143, "rules": [11, 13], "expect": "FezzBong"},
    {"num": 255, "rules": [3, 5, 17], "expect": "BuzzFizz"},
];

console.log(`Running ${tests.length} tests`)

let passed = 0;

for (let i = 0; i < tests.length; i++) {
    const output = getFizzBuzzValue(tests[i]["num"], tests[i]["rules"]);
    const pass = output === tests[i]["expect"]
    if (pass) passed++;
    else console.log(`Test ${i} failed. Expected: ${tests[i]["expect"]} but got: ${output}`)
}

console.log(`\n${passed} / ${tests.length} tests passed`)