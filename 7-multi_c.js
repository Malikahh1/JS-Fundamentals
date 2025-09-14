// Prints "C is fun" x times, where x is the first argument converted to an integer

const x = Number(process.argv[2]);

if (Number.isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) console.log('C is fun');
}
