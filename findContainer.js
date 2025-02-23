// Problem Description
// You are given an array of N non-negative integers where each represents the height of a line. N vertical lines are drawn at points marked 1 to n on the x axis as shown in the diagram. Find two lines, which together with the x axis forms a container, such that the container holds the most water. Assume the width of lines to be negligible.

// Note: You may not slant the container and n is at least 2.

// image

// Input format
// The first line consists of an integer, N, denoting the size of the array.

// The second line consists of N space separated integers which denote the elements of the array,

// Output format
// Single integer denoting the capacity of the largest container.

// Constraints
// 2 <= N <= 10^6

// Sample Input 1
// 9

// 1 8 6 2 5 4 8 3 7

// Sample Output 1
// 49


function findContainer(n, nums) {
    let i=0;
    let j=n-1;
    let maxArea=0;
    while(i<j){
        maxArea=Math.max(maxArea,Math.min(nums[i],nums[j])*(j-i));
        if(nums[i]<nums[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return maxArea;
}

const n = 9;
const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let ans=findContainer(n, nums);
console.log(ans)