// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let out = [];
        if (i % 3 === 0) out.push("Fizz");
        if (i % 13 === 0) out.push("Fezz");
        if (i % 5 === 0) out.push("Buzz");
        if (i % 7 === 0) out.push("Bang");
        if (i % 11 === 0) {
            if (i % 13 === 0) out = ["Fezz", "Bong"];
            else out = ["Bong"];
        }
        if (i % 17 === 0) out.reverse();
        console.log(out.length === 0 ? i : out.join(''));
    }
}

// Now, we run the main function:
fizzbuzz();

