const prompt = require("prompt-sync")();

// This is our main function
function fizzbuzz() {
    const max = getMax();
    const rules = parseActiveRules();

    for (let i = 1; i <= max; i++) {
        console.log(getFizzBuzzValue(i, rules));
    }
}

/**
 * Gets max number from user input
 *
 * Keeps trying till positive number entered
 * @returns {number} max number
 */
function getMax() {
    let max = NaN;

    while (isNaN(max) || max <= 0) {
        max = prompt("Enter maximum number: ");
    }

    return max;
}

/**
 * Parses command line arguments for rule numbers to activate
 * @returns {number[]} array of active rule numbers
 */
function parseActiveRules() {
    const rules = [];

    for (const input of process.argv) {
        if (!isNaN(input) && input > 0) {
            rules.push(Number.parseInt(input));
        }
    }

    return rules;
}

/**
 * Get value of number given active FizzBuzz rules
 * @param i {number} input number
 * @param rules {number[]} active rules
 * @returns {string}
 */
function getFizzBuzzValue(i, rules) {
    let out = [];

    if (rules.includes(3) && i % 3 === 0) out.push("Fizz");
    if (rules.includes(13) && i % 13 === 0) out.push("Fezz");
    if (rules.includes(5) && i % 5 === 0) out.push("Buzz");
    if (rules.includes(7) && i % 7 === 0) out.push("Bang");
    if (rules.includes(11) && i % 11 === 0) {
        if (rules.includes(13) && i % 13 === 0) out = ["Fezz", "Bong"];
        else out = ["Bong"];
    }
    if (rules.includes(17) && i % 17 === 0) out.reverse();

    if (out.length === 0) out = [i];

    return out.join("");
}

function fizzbuzzcustom(max, rules) {
    for (let i = 1; i <= max; i++) {
        let out = [];

        for (const [num, actions] of rules) {
            if (i % num === 0) {
                if (Object.keys(actions).includes("push")) {
                    out.push(actions["push"](i));
                }

                if (Object.keys(actions).includes("replace")) {
                    out = [actions["replace"](i)];
                }

                if (Object.keys(actions).includes("reverse") && actions["reverse"]) {
                    out.reverse();
                }

                if (Object.keys(actions).includes("custom")) {
                    actions["custom"](i, out);
                }
            }
        }

        console.log(out.length === 0 ? i : out.join(''));
    }
}

// Now, we run the main function:
// fizzbuzz();

// fizzbuzzcustom(255, [
//     [3, {"push": () => "Fizz"}],
//     [5, {"push": (i) => i * 10, "reverse": true}],
//     [11, {
//         "replace": (i) => {
//             if (i % 13 === 0) return "FezzBong"
//             return "Bong"
//         }
//     }],
//     [17, {"reverse": true}],
//     [7, {
//         "custom": (i, out) => {
//             if (out.length !== 0) {
//                 out[0] = `hi I'm ${i} `;
//             }
//         }
//     }],
//     [9, {
//         "custom": (i, out) => {
//             out.unshift("Bob");
//         }
//     }]
// ]);

exports.getFizzBuzzValue = getFizzBuzzValue;
