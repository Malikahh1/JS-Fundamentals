// Computes and prints the factorial of a given integer recursively

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const n = Number(process.argv[2]);

console.log(factorial(isNaN(n) ? 1 : n));
