// Problem Description
// Given an array of integers as input, output the indices of two numbers in the array which add up to a specified target.

// Assume that each input would have exactly one solution and you cannot use the same element twice. If 2 different elements have the same value, they can be used.

// Print the indices in increasing order.

// Input format
// First line contains an Integer N that represents the number of elements in the array.

// Second line contains N space separated integers, which are members of the array.

// Third line contains an integer X, which is the target value.

// Output format
// Print two space separated indices(in increasing order) of the numbers which add up to the specified target.

// Constraints
// 2 <= Length of array <= 100000

// 1 <= Range of values <= 1000000

// Sample Input 1
// 5 --> Number of elements in array

// 2 4 5 9 8 --> Array elements

// 7 --> Target sum value

// Sample Output 1
// 0 2

let arr=[2, 5 ,4, 9, 8];

function findPairUnsorted(arr,target){
    let indexMap=new Map();
    for(let i=0;i<arr.length;i++){
        let diff=target-arr[i];
        if(indexMap.has(diff)){
            return [indexMap.get(diff),i];
        }
        else{
            indexMap.set(arr[i],i)
        }
    }
}

console.log(findPairUnsorted(arr,6))