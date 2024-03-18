// Helper function to generate a random number within a given range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage of helper functions
const randomNum = generateRandomNumber(1, 100);
console.log("Generated random number:", randomNum);

if (isPrime(randomNum)) {
    console.log(randomNum + " is a prime number.");
} else {
    console.log(randomNum + " is not a prime number.");
}
