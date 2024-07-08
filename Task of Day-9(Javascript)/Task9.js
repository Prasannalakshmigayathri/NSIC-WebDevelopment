// 1) Print numbers from 1 to 10:
for (let num = 1; num <= 10; num++) {
    console.log(num);
}

// 2) Print the even numbers from 1 to 10:
for (let num = 1; num <= 25; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 3) Print the multiples of 5 in table format (5 x 1 = 5):
for (let num = 1; num <= 10; num++) {
    console.log(`5 x ${num} = ${5 * num}`);
}

// 4) Write a loop that takes a string (your name) as input and returns the reversed string:
let name = "Prasannalakshmi_G";
let reversedName = "";

for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i];
}

console.log(reversedName);

// 5) Given an array of numbers [1, 2, 3, 4, 5], write a loop to calculate the sum of all the numbers:
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let num = 0; num < numbers.length; num++) {
    sum += numbers[num];
}

console.log(sum);

