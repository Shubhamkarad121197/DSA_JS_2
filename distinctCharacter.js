// Problem Description
// Given a string, find the length of the longest substring that contains at most K distinct characters.

// Note:

// Uppercase and Lowercase characters should be considered as different characters.

// There can be numbers and special characters as well.

// Input format
// There are 2 lines of input.

// First-line contains two space-separated integers representing the value of N and K.

// The next line contains the string S of length N.

// Output format
// The length of the longest substring T that contains at most K distinct characters.

// Constraints
// 1 <= N <= 10^5

// 0 <= K <= 256

// Sample Input 1
// 5 3

// abacd

// Sample Output 1
// 4

// Explanation 1
// The longest substring that has 3 distinct characters, "abac", is of length 4.

// Sample Input 2
// 6 3

// Xyyzya

// Sample Output 2
// 5

function distinctCharacter(n, k, s) {
    let left=0;
    let right=0;
    let maxLen=0;
    let map=new Map();
    while(right<n){
        map.set(s[right],(map.get(s[right])||0)+1);
        while(map.size>k){
            map.set(s[left],map.get(s[left])-1);
            if(map.get(s[left])==0){
                map.delete(s[left]);
            }
            left++;
        }
        maxLen=Math.max(maxLen,right-left+1);
        right++;
    }
    return maxLen;
}
const n = 5;
const k = 3;
const s = "abacd";
let ans=distinctCharacter(n, k, s);
console.log(ans)