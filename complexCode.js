// Filename: complexCode.js
// Description: Complex JavaScript Code with Advanced Features and Functionality

// Class definition for a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Addition of complex numbers
  add(other) {
    return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
  }

  // Subtraction of complex numbers
  subtract(other) {
    return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
  }

  // Multiplication of complex numbers
  multiply(other) {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(real, imaginary);
  }

  // Division of complex numbers
  divide(other) {
    const denominator = Math.pow(other.real, 2) + Math.pow(other.imaginary, 2);
    const real = (this.real * other.real + this.imaginary * other.imaginary) / denominator;
    const imaginary = (this.imaginary * other.real - this.real * other.imaginary) / denominator;
    return new ComplexNumber(real, imaginary);
  }

  // Get the modulus (absolute value) of the complex number
  modulus() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
  }
}

// Function to calculate the nth Fibonacci number using memoization
function fibonacci(n) {
  const fib = [0, 1];

  function fibHelper(num) {
    if (fib[num] !== undefined) {
      return fib[num];
    } else {
      fib[num] = fibHelper(num - 1) + fibHelper(num - 2);
      return fib[num];
    }
  }

  return fibHelper(n);
}

// Function to find the minimum and maximum elements in an array
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return { min, max };
}

// Custom error class for division by zero
class DivisionByZeroError extends Error {
  constructor() {
    super("Division by zero is not allowed.");
    this.name = "DivisionByZeroError";
  }
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// Generate a random password of given length
function generateRandomPassword(length) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Class representing a bank account
class BankAccount {
  constructor(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  // Method to deposit money into the account
  deposit(amount) {
    this.balance += amount;
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficient balance.");
    }
  }

  // Method to check the current balance
  checkBalance() {
    return this.balance;
  }
}

// Usage examples

// Complex number operations
const complex1 = new ComplexNumber(2, 3);
const complex2 = new ComplexNumber(4, -5);
const complexSum = complex1.add(complex2);
console.log("Sum of complex numbers:", complexSum);

// Fibonnaci sequence
const fibonacciNumber = fibonacci(10);
console.log("10th Fibonacci number:", fibonacciNumber);

// Min and max elements in array
const numbers = [4, 2, 9, 1, 7];
const minMax = findMinMax(numbers);
console.log("Minimum and maximum in array:", minMax);

// Calculate factorial
const factorialResult = factorial(5);
console.log("Factorial of 5:", factorialResult);

// Random password generation
const password = generateRandomPassword(10);
console.log("Random password:", password);

// Bank account operations
const bankAccount = new BankAccount("1234567890", "John Doe", 1000);
console.log("Initial balance:", bankAccount.checkBalance());
bankAccount.deposit(500);
console.log("Balance after deposit:", bankAccount.checkBalance());
bankAccount.withdraw(700);
console.log("Balance after withdrawal:", bankAccount.checkBalance());

// Error handling
try {
  const divisionResult = complex1.divide(new ComplexNumber(0, 0));
  console.log("Division result:", divisionResult);
} catch (error) {
  console.error(error);
}

// End of complexCode.js