// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let out = "";
        if (i % 3 === 0) out += "Fizz";
        if (i % 13 === 0) out += "Fezz";
        if (i % 5 === 0) out += "Buzz";
        if (i % 7 === 0) out += "Bang";
        if (i % 11 === 0) {
            out = "Bong";
            if (i % 13 === 0) out = "Fezz" + out;
        }
        console.log(out === "" ? i : out);
    }
}

// Now, we run the main function:
fizzbuzz();

