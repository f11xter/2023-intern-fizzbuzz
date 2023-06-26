// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let out = "";
        if (i % 3 === 0) out += "Fizz";
        if (i % 5 === 0) out += "Buzz";
        console.log(out === "" ? i : out);
    }
}

// Now, we run the main function:
fizzbuzz();

