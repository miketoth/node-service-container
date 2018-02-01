var input = process.argv[2];
var output = "";

if(input % 3 === 0) {
    output += "Fizz";
}
if(input % 5 === 0) {
    output += "Buzz";
}

console.log(output);
