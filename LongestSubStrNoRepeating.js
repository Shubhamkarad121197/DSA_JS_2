
let str="abcabcbb";
function lengthOfLongestSubstring(str){
    let charSet=new Set();
    let left=0,maxLength=0;
    for(let right=0;right<str.length;right++){
        while(charSet.has(str[right])){
            charSet.delete(str[left]);
            left++;
        }
        charSet.add(str[right]);
        maxLength=Math.max(maxLength,right-left+1)
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring(str)); // Output: 3