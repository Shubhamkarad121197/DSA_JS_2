function removeDuplicates(n, nums) {
    if (n === 0) return 0; 
    
    let k = 0; 

    for (let i = 0; i < n; i++) {
      
        if (k < 2 || nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }


    console.log(k); 
    console.log(nums.slice(0, k).join(' ')); 
}


const n = 7;
const nums = [2, 2, 2, 3, 4, 4, 9];

let ans=removeDuplicates(n, nums);
console.log(ans)
