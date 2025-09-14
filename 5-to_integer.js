// Prints "My number: <integer>" if the first argument can be converted to an integer,
// otherwise prints "Not a number"

const num = Number(process.argv[2]);

if (Number.isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${Math.trunc(num)}`);
}
