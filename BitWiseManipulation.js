//Bitwise Manipulation
// 1. Bitwise AND
// 2. Bitwise OR
// 3. Bitwise XOR
// 4. Bitwise NOT
// 5. Bitwise Left Shift
// 6. Bitwise Right Shift
// 7. Bitwise Zero-Fill Right Shift
// 8. Bitwise Signed Right Shift
// 9. Bitwise XOR Swap
// 10. Bitwise Set Bit
// 11. Bitwise Clear Bit
// 12. Bitwise Toggle Bit
// 13. Bitwise Check Bit
// 14. Bitwise Check Power of Two
// 15. Bitwise Count Set Bits
// 16. Bitwise Multiply by Two
// 17. Bitwise Divide by Two
// 18. Bitwise Swap Two Numbers
// 19. Bitwise Find Missing Number
// 20. Bitwise Find Two Non-Repeating Numbers
// 21. Bitwise Find Repeating Number
// 22. Bitwise Find Duplicate Number
// 23. Bitwise Find Single Number
// 24. Bitwise Find Maximum Number
// 25. Bitwise Find Minimum Number
// 26. Bitwise Find Maximum of Two Numbers
// 27. Bitwise Find Minimum of Two Numbers
// 28. Bitwise Find Maximum of Three Numbers
// 29. Bitwise Find Minimum of Three Numbers
// 30. Bitwise Find Maximum of Four Numbers
// 31. Bitwise Find Minimum of Four Numbers
// 32. Bitwise Find Maximum of Five Numbers
// 33. Bitwise Find Minimum of Five Numbers
// 34. Bitwise Find Maximum of N Numbers
// 35. Bitwise Find Minimum of N Numbers
// 36. Bitwise Find Maximum of Array
// 37. Bitwise Find Minimum of Array

// 1. Bitwise AND
// The bitwise AND operator (&) returns a one in each bit position for which the corresponding bits of both operands are ones.
// 1 & 1 = 1
// 1 & 0 = 0
// 0 & 1 = 0
// 0 & 0 = 0

// 2. Bitwise OR
// The bitwise OR operator (|) returns a one in each bit position for which the corresponding bits of either or both operands are ones.
// 1 | 1 = 1
// 1 | 0 = 1
// 0 | 1 = 1
// 0 | 0 = 0

// 3. Bitwise XOR
// The bitwise XOR operator (^) returns a one in each bit position for which the corresponding bits of the operands are different.
// 1 ^ 1 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// 0 ^ 0 = 0

// 4. Bitwise NOT
// The bitwise NOT operator (~) inverts the bits of its operand.
// ~1 = 0
// ~0 = 1

// 5. Bitwise Left Shift
// The bitwise left shift operator (<<) shifts the first operand the specified number of bits to the left.
// 1 << 1 = 2
// 1 << 2 = 4
// 1 << 3 = 8
// 1 << 4 = 16

// 6. Bitwise Right Shift
// The bitwise right shift operator (>>) shifts the first operand the specified number of bits to the right.
// 1 >> 1 = 0
// 2 >> 1 = 1
// 4 >> 2 = 1
// 8 >> 3 = 1

// 7. Bitwise Zero-Fill Right Shift
// The zero-fill right shift operator (>>>) shifts the first operand the specified number of bits to the right and fills the shifted bits with zeros.
// 1 >>> 1 = 0
// 2 >>> 1 = 1
// 4 >>> 2 = 1
// 8 >>> 3 = 1

// 8. Bitwise Signed Right Shift
// The signed right shift operator (>>) shifts the first operand the specified number of bits to the right and fills the shifted bits with the sign bit.
// 1 >> 1 = 0
// 2 >> 1 = 1
// 4 >> 2 = 1
// 8 >> 3 = 1

// 9. Bitwise XOR Swap
// The bitwise XOR swap algorithm is used to swap two integers without using a temporary variable.
function xorSwap(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}
console.log(xorSwap(2, 3)); // Output: [3, 2]

// 10. Bitwise Set Bit
// The bitwise set bit algorithm is used to set a bit at a specific position in an integer.
function setBit(num, i) {
    return num | (1 << i);
}

console.log(setBit(5, 1)); // Output: 7

// 11. Bitwise Clear Bit
// The bitwise clear bit algorithm is used to clear a bit at a specific position in an integer.
function clearBit(num, i) {
    return num & ~(1 << i);
}

console.log(clearBit(7, 1)); // Output: 5

// 12. Bitwise Toggle Bit
// The bitwise toggle bit algorithm is used to toggle a bit at a specific position in an integer.
function toggleBit(num, i) {
    return num ^ (1 << i);
}

console.log(toggleBit(5, 1)); // Output: 7

// 13. Bitwise Check Bit
// The bitwise check bit algorithm is used to check if a bit is set at a specific position in an integer.
function checkBit(num, i) {
    return (num & (1 << i)) !== 0;
}

console.log(checkBit(5, 1)); // Output: true

// 14. Bitwise Check Power of Two
// The bitwise check power of two algorithm is used to check if an integer is a power of two.
function checkPowerOfTwo(num) {
    return (num & (num - 1)) === 0;
}

console.log(checkPowerOfTwo(8)); // Output: true

// 15. Bitwise Count Set Bits
// The bitwise count set bits algorithm is used to count the number of set bits in an integer.
function countSetBits(num) {
    let count = 0;
    while (num) {
        num = num & (num - 1);
        count++;
    }
    return count;
}

console.log(countSetBits(7)); // Output: 3

// 16. Bitwise Multiply by Two
// The bitwise multiply by two algorithm is used to multiply an integer by two.
function multiplyByTwo(num) {
    return num << 1;
}

console.log(multiplyByTwo(5)); // Output: 10

// 17. Bitwise Divide by Two
// The bitwise divide by two algorithm is used to divide an integer by two.
function divideByTwo(num) {
    return num >> 1;
}

console.log(divideByTwo(10)); // Output: 5

// 18. Bitwise Swap Two Numbers
// The bitwise swap two numbers algorithm is used to swap two integers without using a temporary variable.
function swapNumbers(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}

console.log(swapNumbers(2, 3)); // Output: [3, 2]

// 19. Bitwise Find Missing Number
// The bitwise find missing number algorithm is used to find the missing number in an array of integers.
function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return total - sum;
}

console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4

// 20. Bitwise Find Two Non-Repeating Numbers
// The bitwise find two non-repeating numbers algorithm is used to find two non-repeating numbers in an array of integers.
function findNonRepeatingNumbers(arr) {
    let xor = arr.reduce((acc, curr) => acc ^ curr, 0);
    let setBit = xor & ~(xor - 1);
    let x = 0;
    let y = 0;
    arr.forEach(num => {
        if (num & setBit) {
            x = x ^ num;
        } else {
            y = y ^ num;
        }
    });
    return [x, y];
}

console.log(findNonRepeatingNumbers([2, 4, 7, 9, 2, 4])); // Output: [7, 9]

// 21. Bitwise Find Repeating Number
// The bitwise find repeating number algorithm is used to find the repeating number in an array of integers.
function findRepeatingNumber(arr) {
    let xor = arr.reduce((acc, curr) => acc ^ curr, 0);
    let n = arr.length - 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum - total;
}

console.log(findRepeatingNumber([1, 2, 3, 4, 4])); // Output: 4

// 22. Bitwise Find Duplicate Number
// The bitwise find duplicate number algorithm is used to find the duplicate number in an array of integers.
function findDuplicateNumber(arr) {
    let xor = arr.reduce((acc, curr) => acc ^ curr, 0);
    let n = arr.length - 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum - total;
}

console.log(findDuplicateNumber([1, 2, 3, 4, 4])); // Output: 4

// 23. Bitwise Find Single Number
// The bitwise find single number algorithm is used to find the single number in an array of integers.
function findSingleNumber(arr) {
    return arr.reduce((acc, curr) => acc ^ curr, 0);
}

console.log(findSingleNumber([2, 2, 1])); // Output: 1

// 24. Bitwise Find Maximum Number
// The bitwise find maximum number algorithm is used to find the maximum number in an array of integers.
function findMaximumNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaximumNumber([3, 5, 1, 2, 8, 7, 6, 4])); // Output: 8

// 25. Bitwise Find Minimum Number
// The bitwise find minimum number algorithm is used to find the minimum number in an array of integers.
function findMinimumNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMinimumNumber([3, 5, 1, 2, 8, 7, 6, 4])); // Output: 1

// 26. Bitwise Find Maximum of Two Numbers
// The bitwise find maximum of two numbers algorithm is used to find the maximum of two integers.   
function findMaximumOfTwoNumbers(a, b) {
    return a > b ? a : b;
}

console.log(findMaximumOfTwoNumbers(5, 3)); // Output: 5

// 27. Bitwise Find Minimum of Two Numbers
// The bitwise find minimum of two numbers algorithm is used to find the minimum of two integers.
function findMinimumOfTwoNumbers(a, b) {
    return a < b ? a : b;
}

console.log(findMinimumOfTwoNumbers(5, 3)); // Output: 3


// 28. Bitwise Find Maximum of Three Numbers
// The bitwise find maximum of three numbers algorithm is used to find the maximum of three integers.
function findMaximumOfThreeNumbers(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findMaximumOfThreeNumbers(5, 3, 8)); // Output: 8

// 29. Bitwise Find Minimum of Three Numbers
// The bitwise find minimum of three numbers algorithm is used to find the minimum of three integers.
function findMinimumOfThreeNumbers(a, b, c) {
    return Math.min(a, b, c);
}

console.log(findMinimumOfThreeNumbers(5, 3, 8)); // Output: 3

// 30. Bitwise Find Maximum of Four Numbers
// The bitwise find maximum of four numbers algorithm is used to find the maximum of four integers.
function findMaximumOfFourNumbers(a, b, c, d) {
    return Math.max(a, b, c, d);
}

console.log(findMaximumOfFourNumbers(5, 3, 8, 2)); // Output: 8

// 31. Bitwise Find Minimum of Four Numbers
// The bitwise find minimum of four numbers algorithm is used to find the minimum of four integers.
function findMinimumOfFourNumbers(a, b, c, d) {
    return Math.min(a, b, c, d);
}

console.log(findMinimumOfFourNumbers(5, 3, 8, 2)); // Output: 2

// 32. Bitwise Find Maximum of Five Numbers
// The bitwise find maximum of five numbers algorithm is used to find the maximum of five integers.
function findMaximumOfFiveNumbers(a, b, c, d, e) {
    return Math.max(a, b, c, d, e);
}

console.log(findMaximumOfFiveNumbers(5, 3, 8, 2, 7)); // Output: 8

// 33. Bitwise Find Minimum of Five Numbers
// The bitwise find minimum of five numbers algorithm is used to find the minimum of five integers.

function findMinimumOfFiveNumbers(a, b, c, d, e) {
    return Math.min(a, b, c, d, e);
}

console.log(findMinimumOfFiveNumbers(5, 3, 8, 2, 7)); // Output: 2

// 34. Bitwise Find Maximum of N Numbers
// The bitwise find maximum of N numbers algorithm is used to find the maximum of N integers.
function findMaximumOfNNumbers(arr) {
    return Math.max(...arr);
}

console.log(findMaximumOfNNumbers([3, 5, 1, 2, 8, 7, 6, 4])); // Output: 8

// 35. Bitwise Find Minimum of N Numbers
// The bitwise find minimum of N numbers algorithm is used to find the minimum of N integers.
function findMinimumOfNNumbers(arr) {
    return Math.min(...arr);
}

console.log(findMinimumOfNNumbers([3, 5, 1, 2, 8, 7, 6, 4])); // Output: 1

// 36. Bitwise Find Maximum of Array
// The bitwise find maximum of array algorithm is used to find the maximum of an array of integers.
function findMaximumOfArray(arr) {
    return Math.max(...arr);
}

console.log(findMaximumOfArray([3, 5, 1, 2, 8, 7, 6, 4])); // Output: 8

// 37. Bitwise Find Minimum of Array
// The bitwise find minimum of array algorithm is used to find the minimum of an array of integers.
function findMinimumOfArray(arr) {
    return Math.min(...arr);
}

console.log(findMinimumOfArray([3, 5, 1, 2, 8, 7, 6, 4])); // Output: 1

