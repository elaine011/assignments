/** Assignment 4 : Algorithm Practice */

function twoSum(nums, target){
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length;j++){
            while(i !== j){
                if(target === nums[i]+nums[j]){
                    return [i, j];
                }
            }
        }
    }
}
// console.log(twoSum([2,7,11,15],9));