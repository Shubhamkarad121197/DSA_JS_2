// Problem Description
// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

// Input format
// A single Integer M, that contains the number of elements in the first array.

// A single Integer N, that contains the number of elements in the second array.

// Next Line contains M space Integers of the array nums1.

// Next Line contains N space Integers of the array nums2.

// Output format
// Print the array after merging.

// Sample Input 1
// 3

// 3

// 1 2 3

// 2 5 6

// Sample Output 1
// 1 2 2 3 5 6

let arr1=[1, 2, 3];
let arr2=[2, 5, 6];

function mergeTwoSortedArray(arr1,arr2){
    let i=0;
    let j=0;
    let res=[];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++;
        }
        else{
            res.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        res.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        res.push(arr2[j]);
        j++;
    }
    return res;
}

let ans=mergeTwoSortedArray(arr1,arr2);
console.log(ans)