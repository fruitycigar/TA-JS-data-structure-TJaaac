// 1. Create an array named numbers and store 5 number values in it

let numbers = [24, 55, 1234, 4520, 34];

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()

let newSum = 0;
for (i = 0; i < numbers.length; i++) {
    newSum += numbers[i];
}

console.log(newSum/(numbers.length));

// 4. Find the highest number in the array and print it to the console using console.log()

let highestNum = numbers[0];

for (let digit of numbers) {
    if (highestNum < digit) {
        highestNum = digit;
    }
}

console.log(highestNum);

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowestNum = numbers[0];

for (let digit of numbers) {
    if (lowestNum > digit) {
        lowestNum = digit;
    }
}

console.log(lowestNum);

// 6. Find the even numbers in the array and print them to the console using console.log()

for (let digit of numbers) {
    if (digit % 2 === 0) {
        console.log(digit);
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()

for (let digit of numbers) {
    if (digit % 2 !== 0) {
        console.log(digit);
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

for (let digit of numbers) {
    if (digit % 5 === 0) {
        console.log(digit);
    }
}

// 9. Log all the element of the array one by one.

for (let digit of numbers) {
    console.log(digit);
}

// 10. Find all the number in the array that is divisible by 3

for (let digit of numbers) {
    if (digit % 3 === 0) {
        console.log(digit);
    }
}
