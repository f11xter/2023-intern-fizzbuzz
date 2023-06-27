const prompt = require("prompt-sync")();

// This is our main function
function fizzbuzz() {
    let rules = [];
    for (const input of process.argv) {
        if (!isNaN(input) && input > 0) {
            rules.push(Number.parseInt(input));
        }
    }

    let max = NaN;
    while (isNaN(max) || max <= 0) {
        max = prompt("Enter maximum number: ");
    }

    for (let i = 1; i <= max; i++) {
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

        console.log(out.length === 0 ? i : out.join(''));
    }
}

// Now, we run the main function:
fizzbuzz();

